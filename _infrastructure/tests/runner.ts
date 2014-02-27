/// <reference path="_ref.d.ts" />

/// <reference path="src/host/exec.ts" />

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
	'use-strict';

	require('source-map-support').install();

	var fs = require('fs');
	var path = require('path');
	var glob = require('glob');

	var tsExp = /\.ts$/;

	export var DEFAULT_TSC_VERSION = "0.9.1.1";

	export class Test {
		constructor(public suite: ITestSuite, public tsfile: File, public options?: TscExecOptions) {
		}

		public run(callback: (result: TestResult) => void) {
			Tsc.run(this.tsfile.filePathWithName, this.options, (execResult) => {
				var testResult = new TestResult();
				testResult.hostedBy = this.suite;
				testResult.targetFile = this.tsfile;
				testResult.options = this.options;

				testResult.stdout = execResult.stdout;
				testResult.stderr = execResult.stderr;
				testResult.exitCode = execResult.exitCode;

				callback(testResult);
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
	// TODO move to bluebird (Promises)
	// TODO move to lazy.js (functional)
	export class TestRunner {
		files: File[];
		timer: Timer;
		suites: ITestSuite[] = [];

		private index: FileIndex;
		private changes: GitChanges;
		private print: Print;

		constructor(public dtPath: string, public options: ITestRunnerOptions = {tscVersion: DT.DEFAULT_TSC_VERSION}) {
			this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

			this.index = new FileIndex(this.options);
			this.changes = new GitChanges(this.dtPath);
			this.print = new Print(this.options.tscVersion);

			// should be async (way faster)
			// only includes .d.ts or -tests.ts or -test.ts or .ts
			var filesName = glob.sync('**/*.ts', { cwd: dtPath });
			this.files = filesName.filter((fileName) => {
				return this.checkAcceptFile(fileName);
			}).sort().map((fileName) => {
				return new File(dtPath, fileName);
			});
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

		public run(): void {
			this.timer = new Timer();
			this.timer.start();

			// we need promises
			this.doParseFiles();
		}

		private doParseFiles(): void {
			this.print.printChangeHeader();
			this.index.parseFiles(this.files, () => {
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
				this.doGetChanges();
			});
		}

		private doGetChanges(): void {
			this.changes.getChanges((err) => {
				if (err) {
					throw err;
				}
				this.print.printSubHeader('All changes');
				this.print.printDiv();

				this.changes.paths.forEach((file) => {
					this.print.printLine(file);
				});
				// chain
				this.doCollectTargets();
			});
		}

		private doCollectTargets(): void {

			// TODO clean this up when functional (do we need changeMap?)

			// bake map for lookup
			var changeMap = this.changes.paths.filter((full) => {
				return this.checkAcceptFile(full);
			}).map((local) => {
				return path.resolve(this.dtPath, local);
			}).reduce((memo, full) => {
				var file = this.index.getFile(full);
				if (!file) {
					// what does it mean? deleted?
					console.log('not in index: ' + full);
					return memo;
				}
				memo[full] = file;
				return memo;
			}, Object.create(null));

			this.print.printDiv();
			this.print.printSubHeader('Relevant changes');
			this.print.printDiv();

			// collect referring files (and also log)
			var touched = Object.create(null);

			Object.keys(changeMap).sort().forEach((src) => {
				touched[src] = changeMap[src];
				this.print.printLine(changeMap[src].formatName);
			});

			// terrible loop (whatever)
			// just add stuff until there is nothing new added
			// TODO improve it
			var added:number;
			do {
				added = 0;
				this.files.forEach((file) => {
					// lol getter
					if (file.fullPath in touched) {
						return;
					}
					// check if one of our references is touched
					file.references.some((ref) => {
						if (ref.fullPath in touched) {
							// add us
							touched[file.fullPath] = file;
							added++;
							return true;
						}
						return false;
					});
				});
			}
			while(added > 0);

			this.print.printDiv();
			this.print.printSubHeader('Reference mapped');
			this.print.printDiv();

			var files: File[] = Object.keys(touched).sort().map((src) => {
				this.print.printLine(touched[src].formatName);
				return touched[src];
			});

			this.runTests(files);
		}

		private runTests(files: File[]): void {

			var syntaxChecking = new SyntaxChecking(this.options);
			var testEval = new TestEval(this.options);
			if (!this.options.findNotRequiredTscparams) {
				this.addSuite(syntaxChecking);
				this.addSuite(testEval);
			}

			var typings = syntaxChecking.filterTargetFiles(files).length;
			var testFiles = testEval.filterTargetFiles(files).length;

			this.print.init( typings, testFiles, files.length);
			this.print.printHeader();

			if (this.options.findNotRequiredTscparams) {
				this.addSuite(new FindNotRequiredTscparams(this.options, this.print));
			}

			var count = 0;
			var executor = () => {
				var suite = this.suites[count];
				if (suite) {
					suite.testReporter = suite.testReporter || new DefaultTestReporter(this.print);

					this.print.printSuiteHeader(suite.testSuiteName);
					var targetFiles = suite.filterTargetFiles(files);
					suite.start(targetFiles, (testResult, index) => {
						this.testCompleteCallback(testResult, index);
					}, (suite) => {
						this.suiteCompleteCallback(suite);
						count++;
						executor();
					});
				}
				else {
					this.timer.end();
					this.allTestCompleteCallback(files);
				}
			};
			executor();
		}

		private testCompleteCallback(testResult: TestResult, index: number) {
			var reporter = testResult.hostedBy.testReporter;
			if (testResult.success) {
				reporter.printPositiveCharacter(index, testResult);
			}
			else {
				reporter.printNegativeCharacter(index, testResult);
			}
		}

		private suiteCompleteCallback(suite: ITestSuite) {
			this.print.printBreak();

			this.print.printDiv();
			this.print.printElapsedTime(suite.timer.asString, suite.timer.time);
			this.print.printSuccessCount(suite.okTests.length, suite.testResults.length);
			this.print.printFailedCount(suite.ngTests.length, suite.testResults.length);
		}

		private allTestCompleteCallback(files: File[]) {
			var testEval = this.suites.filter(suite => suite instanceof TestEval)[0];
			if (testEval) {
				var existsTestTypings: string[] = testEval.testResults.map((testResult) => {
					return testResult.targetFile.dir;
				}).reduce((a: string[], b: string) => {
					return a.indexOf(b) < 0 ? a.concat([b]) : a;
				}, []);

				var typings: string[] = files.map((file) => {
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
				this.print.printSuiteErrorCount("Without tests", withoutTestTypings.length, typings.length, '\33[33m\33[1m');
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

				process.exit(1);
			}
		}
	}

	var dtPath = path.resolve(path.dirname((module).filename), '..', '..');
	var findNotRequiredTscparams = process.argv.some(arg => arg == "--try-without-tscparams");
	var tscVersionIndex = process.argv.indexOf("--tsc-version");
	var tscVersion = DEFAULT_TSC_VERSION;
	if (-1 < tscVersionIndex) {
		tscVersion = process.argv[tscVersionIndex + 1];
	}

	var runner = new TestRunner(dtPath, {
		tscVersion: tscVersion,
		findNotRequiredTscparams: findNotRequiredTscparams
	});
	runner.run();
}
