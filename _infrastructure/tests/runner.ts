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

				return Promise.all([
					this.doParseFiles(),
					this.doGetChanges()
				]);
			}).then(() => {
				return this.doCollectTargets();
			}).then((files) => {
				return this.runTests(files);
			}).then(() => {
				return !this.suites.some((suite) => {
					return suite.ngTests.length !== 0
				});
			});
		}

		private doParseFiles(): Promise<void> {
			return this.index.parseFiles(this.files).then(() => {
				/*
				 this.print.printSubHeader('Files:');
				 this.print.printDiv();
				 this.files.forEach((file) => {
				 this.print.printLine(file.filePathWithName);
				 file.references.forEach((file) => {
				 this.print.printElement(file.filePathWithName);
				 });
				 });
				 this.print.printBreak();*/
				// chain
			}).thenReturn();
		}

		private doGetChanges(): Promise<void> {
			return this.changes.getChanges().then(() => {
				this.print.printSubHeader('All changes');
				this.print.printDiv();

				Lazy(this.changes.paths).each((file) => {
					this.print.printLine(file);
				});
			}).thenReturn();
		}

		private doCollectTargets(): Promise<File[]> {
			return new Promise((resolve) => {

				// bake map for lookup
				var changeMap = Object.create(null);

				Lazy(this.changes.paths).filter((full) => {
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

				this.print.printDiv();
				this.print.printSubHeader('Relevant changes');
				this.print.printDiv();

				Object.keys(changeMap).sort().forEach((src) => {
					this.print.printLine(changeMap[src].formatName);
				});

				// terrible loop (whatever)
				// just add stuff until there is nothing new added
				// TODO improve it
				var added: number;
				var files = this.files.slice(0);
				do {
					added = 0;

					for (var i = files.length - 1; i >= 0; i--) {
						var file = files[i];
						if (file.fullPath in changeMap) {
							this.files.splice(i, 1);
							continue;
						}
						// check if one of our references is touched
						for (var j = 0, jj = file.references.length; j < jj; j++) {
							if (file.references[j].fullPath in changeMap) {
								// add us
								changeMap[file.fullPath] = file;
								added++;
								break;
							}
						}
					}
				}
				while (added > 0);

				this.print.printDiv();
				this.print.printSubHeader('Reference mapped');
				this.print.printDiv();

				var result: File[] = Object.keys(changeMap).sort().map((src) => {
					this.print.printLine(changeMap[src].formatName);
					changeMap[src].references.forEach((file: File) => {
						this.print.printElement(file.formatName);
					});
					return changeMap[src];
				});
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
