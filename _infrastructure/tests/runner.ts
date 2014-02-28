/// <reference path="typings/tsd.d.ts" />

/// <reference path="src/exec.ts" />

/// <reference path="src/file.ts" />
/// <reference path="src/tsc.ts" />
/// <reference path="src/timer.ts" />
/// <reference path="src/util.ts" />

/// <reference path="src/index.ts" />
/// <reference path="src/changes.ts" />

/// <reference path="src/printer.ts" />
/// <reference path="src/reporter/reporter.ts" />

/// <reference path="src/suite/suite.ts" />
/// <reference path="src/suite/syntax.ts" />
/// <reference path="src/suite/testEval.ts" />
/// <reference path="src/suite/tscParams.ts" />

module DT {
	require('source-map-support').install();

	// hacky typing
	var Lazy: LazyJS.LazyStatic = require('lazy.js');
	var Promise: typeof Promise = require('bluebird');

	var fs = require('fs');
	var path = require('path');
	var glob = require('glob');
	var assert = require('assert');

	var tsExp = /\.ts$/;

	export var DEFAULT_TSC_VERSION = '0.9.1.1';

	/////////////////////////////////
	// Single test
	/////////////////////////////////
	export class Test {
		constructor(public suite: ITestSuite, public tsfile: File, public options?: TscExecOptions) {
		}

		public run(): Promise<TestResult> {
			return Tsc.run(this.tsfile.filePathWithName, this.options).then((execResult: ExecResult) => {
				var testResult = new TestResult();
				testResult.hostedBy = this.suite;
				testResult.targetFile = this.tsfile;
				testResult.options = this.options;

				testResult.stdout = execResult.stdout;
				testResult.stderr = execResult.stderr;
				testResult.exitCode = execResult.exitCode;

				return testResult;
			});
		}
	}

	/////////////////////////////////
	// Test results
	/////////////////////////////////
	export class TestResult {
		hostedBy: ITestSuite;
		targetFile: File;
		options: TscExecOptions;

		stdout: string;
		stderr: string;
		exitCode: number;

		public get success(): boolean {
			return this.exitCode === 0;
		}
	}

	export interface ITestRunnerOptions {
		tscVersion:string;
		findNotRequiredTscparams?:boolean;
	}

	export interface FileDict {
		[fullPath:string]: File;
	}

	export interface FileArrDict {
		[fullPath:string]: File[];
	}

	/////////////////////////////////
	// The main class to kick things off
	/////////////////////////////////
	export class TestRunner {
		private files: File[];
		private timer: Timer;
		private suites: ITestSuite[] = [];

		private index: FileIndex;
		private changes: GitChanges;
		private print: Print;

		constructor(public dtPath: string, public options: ITestRunnerOptions = {tscVersion: DT.DEFAULT_TSC_VERSION}) {
			this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

			this.index = new FileIndex(this.options);
			this.changes = new GitChanges(this.dtPath);
			this.print = new Print(this.options.tscVersion);
		}

		public addSuite(suite: ITestSuite): void {
			this.suites.push(suite);
		}

		private checkAcceptFile(fileName: string): boolean {
			var ok = tsExp.test(fileName);
			ok = ok && fileName.indexOf('_infrastructure') < 0;
			ok = ok && fileName.indexOf('node_modules/') < 0;
			ok = ok && /^[a-z]/i.test(fileName);
			return ok;
		}

		public run(): Promise<boolean> {
			this.timer = new Timer();
			this.timer.start();

			// only includes .d.ts or -tests.ts or -test.ts or .ts
			return Promise.promisify(glob).call(glob, '**/*.ts', {
				cwd: dtPath
			}).then((filesNames: string[]) => {
				this.files = Lazy(filesNames).filter((fileName) => {
					return this.checkAcceptFile(fileName);
				}).map((fileName: string) => {
					return new File(dtPath, fileName);
				}).toArray();

				this.print.printChangeHeader();

				return this.changes.getChanges().then(() => {
					this.printAllChanges(this.changes.paths);
				});
			}).then(() => {
				return this.index.parseFiles(this.files).then(() => {
					// this.printFiles(this.files);
				});
			}).then(() => {
				return this.collectTargets(this.files, this.changes.paths);
			}).then((files) => {
				return this.runTests(files);
			}).then(() => {
				return !this.suites.some((suite) => {
					return suite.ngTests.length !== 0
				});
			});
		}

		private collectTargets(files: File[], changes: string[]): Promise<File[]> {
			return new Promise((resolve) => {

				// filter changes and bake map for easy lookup
				var changeMap: FileDict = Object.create(null);

				Lazy(changes).filter((full) => {
					return this.checkAcceptFile(full);
				}).map((local) => {
					return path.resolve(this.dtPath, local);
				}).each((full) => {
					var file = this.index.getFile(full);
					if (!file) {
						// TODO figure out what to do here
						// what does it mean? deleted?
						console.log('not in index: ' + full);
						return;
					}
					changeMap[full] = file;
				});

				this.printRelChanges(changeMap);

				// bake reverse reference map (referenced to referrers)
				var refMap: FileArrDict = Object.create(null);

				Lazy(files).each((file) => {
					Lazy(file.references).each((ref) => {
						if (ref.fullPath in refMap) {
							refMap[ref.fullPath].push(file);
						}
						else {
							refMap[ref.fullPath] = [file];
						}
					});
				});

				// this.printRefMap(refMap);

				// map out files linked to changes
				// - queue holds files touched by a change
				// - pre-fill with actually changed files
				// - loop queue, if current not seen:
				//    - add to result
				//    - from refMap queue all files referring to current
				var adding: FileDict = Object.create(null);
				var queue = Lazy<File>(changeMap).values().toArray();

				while (queue.length > 0) {
					var next = queue.shift();
					var fp = next.fullPath;
					if (adding[fp]) {
						continue;
					}
					adding[fp] = next;
					if (fp in refMap) {
						var arr = refMap[fp];
						for (var i = 0, ii = arr.length; i < ii; i++) {
							// just add it and skip expensive checks
							queue.push(arr[i]);
						}
					}
				}

				this.printTests(adding);

				var result: File[] = Lazy<File>(adding).values().toArray();
				resolve(result);
			});
		}

		private runTests(files: File[]): Promise<boolean> {
			return Promise.attempt(() => {
				assert(Array.isArray(files), 'files must be array');

				var syntaxChecking = new SyntaxChecking(this.options);
				var testEval = new TestEval(this.options);

				if (!this.options.findNotRequiredTscparams) {
					this.addSuite(syntaxChecking);
					this.addSuite(testEval);
				}

				return Promise.all([
					syntaxChecking.filterTargetFiles(files),
					testEval.filterTargetFiles(files)
				]);
			}).spread((syntaxFiles, testFiles) => {
				this.print.init(syntaxFiles.length, testFiles.length, files.length);
				this.print.printHeader();

				if (this.options.findNotRequiredTscparams) {
					this.addSuite(new FindNotRequiredTscparams(this.options, this.print));
				}

				return Promise.reduce(this.suites, (count, suite: ITestSuite) => {
					suite.testReporter = suite.testReporter || new DefaultTestReporter(this.print);

					this.print.printSuiteHeader(suite.testSuiteName);

					return suite.filterTargetFiles(files).then((targetFiles) => {
						return suite.start(targetFiles, (testResult, index) => {
							this.printTestComplete(testResult, index);
						});
					}).then((suite) => {
						this.printSuiteComplete(suite);
						return count++;
					});
				}, 0);
			}).then((count) => {
				this.timer.end();
				this.finaliseTests(files);
			});
		}

		private printTests(adding: FileDict): void {
			this.print.printDiv();
			this.print.printSubHeader('Testing');
			this.print.printDiv();

			Object.keys(adding).sort().map((src) => {
				this.print.printLine(adding[src].formatName);
				return adding[src];
			});
		}
		private printFiles(files: File[]): void {
			this.print.printDiv();
			this.print.printSubHeader('Files:');
			this.print.printDiv();

			files.forEach((file) => {
				this.print.printLine(file.filePathWithName);
				file.references.forEach((file) => {
					this.print.printElement(file.filePathWithName);
				});
			});
		}

		private printAllChanges(paths: string[]): void {
			this.print.printSubHeader('All changes');
			this.print.printDiv();

			paths.sort().forEach((line) => {
				this.print.printLine(line);
			});
		}

		private printRelChanges(changeMap: FileDict): void {
			this.print.printDiv();
			this.print.printSubHeader('Relevant changes');
			this.print.printDiv();

			Object.keys(changeMap).sort().forEach((src) => {
				this.print.printLine(changeMap[src].formatName);
			});
		}

		private printRefMap(refMap: FileArrDict): void {
			this.print.printDiv();
			this.print.printSubHeader('Referring');
			this.print.printDiv();

			Object.keys(refMap).sort().forEach((src) => {
				var ref = this.index.getFile(src);
				this.print.printLine(ref.formatName);
				refMap[src].forEach((file) => {
					this.print.printLine(' - ' + file.formatName);
				});
			});
		}

		private printTestComplete(testResult: TestResult, index: number): void {
			var reporter = testResult.hostedBy.testReporter;
			if (testResult.success) {
				reporter.printPositiveCharacter(index, testResult);
			}
			else {
				reporter.printNegativeCharacter(index, testResult);
			}
		}

		private printSuiteComplete(suite: ITestSuite): void {
			this.print.printBreak();

			this.print.printDiv();
			this.print.printElapsedTime(suite.timer.asString, suite.timer.time);
			this.print.printSuccessCount(suite.okTests.length, suite.testResults.length);
			this.print.printFailedCount(suite.ngTests.length, suite.testResults.length);
		}

		private finaliseTests(files: File[]): void {
			var testEval: TestEval = Lazy(this.suites).filter((suite) => {
				return suite instanceof TestEval;
			}).first();

			if (testEval) {
				var existsTestTypings: string[] = Lazy(testEval.testResults).map((testResult) => {
					return testResult.targetFile.dir;
				}).reduce((a: string[], b: string) => {
					return a.indexOf(b) < 0 ? a.concat([b]) : a;
				}, []);

				var typings: string[] = Lazy(files).map((file) => {
					return file.dir;
				}).reduce((a: string[], b: string) => {
					return a.indexOf(b) < 0 ? a.concat([b]) : a;
				}, []);

				var withoutTestTypings: string[] = typings.filter((typing) => {
					return existsTestTypings.indexOf(typing) < 0;
				});

				this.print.printDiv();
				this.print.printTypingsWithoutTest(withoutTestTypings);
			}

			this.print.printDiv();
			this.print.printTotalMessage();

			this.print.printDiv();
			this.print.printElapsedTime(this.timer.asString, this.timer.time);

			this.suites.filter((suite: ITestSuite) => {
				return suite.printErrorCount;
			}).forEach((suite: ITestSuite) => {
				this.print.printSuiteErrorCount(suite.errorHeadline, suite.ngTests.length, suite.testResults.length);
			});
			if (testEval) {
				this.print.printSuiteErrorCount('Without tests', withoutTestTypings.length, typings.length, true);
			}

			this.print.printDiv();

			if (this.suites.some((suite) => {
				return suite.ngTests.length !== 0
			})) {
				this.print.printErrorsHeader();

				this.suites.filter((suite) => {
					return suite.ngTests.length !== 0;
				}).forEach((suite) => {
					suite.ngTests.forEach((testResult) => {
						this.print.printErrorsForFile(testResult);
					});
					this.print.printBoldDiv();
				});
			}
		}
	}

	var dtPath = path.resolve(path.dirname((module).filename), '..', '..');
	var findNotRequiredTscparams = process.argv.some(arg => arg == '--try-without-tscparams');
	var tscVersionIndex = process.argv.indexOf('--tsc-version');
	var tscVersion = DEFAULT_TSC_VERSION;

	if (tscVersionIndex > -1) {
		tscVersion = process.argv[tscVersionIndex + 1];
	}

	var runner = new TestRunner(dtPath, {
		tscVersion: tscVersion,
		findNotRequiredTscparams: findNotRequiredTscparams
	});
	runner.run().then((success) => {
		if (!success) {
			process.exit(1);
		}
	}).catch((err) => {
		throw err;
		process.exit(2);
	});
}
