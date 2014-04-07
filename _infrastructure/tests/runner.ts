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

	var os = require('os');
	var fs = require('fs');
	var path = require('path');
	var assert = require('assert');

	var tsExp = /\.ts$/;

	export var DEFAULT_TSC_VERSION = '0.9.7';

	interface PackageJSON {
		scripts: {[key:string]: string};
	}

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
	// Parallel execute Tests
	/////////////////////////////////
	export class TestQueue {

		private queue: Function[] = [];
		private active: Test[] = [];
		private concurrent: number;

		constructor(concurrent: number) {
			this.concurrent = Math.max(1, concurrent);
		}

		// add to queue and return a promise
		run(test: Test): Promise<TestResult> {
			var defer = Promise.defer();
			// add a closure to queue
			this.queue.push(() => {
				// run it
				var p = test.run();
				p.then(defer.resolve.bind(defer), defer.reject.bind(defer));
				p.finally(() => {
					var i = this.active.indexOf(test);
					if (i > -1) {
						this.active.splice(i, 1);
					}
					this.step();
				});
				// return it
				return test;
			});
			this.step();
			// defer it
			return defer.promise;
		}

		private step(): void {
			while (this.queue.length > 0 && this.active.length < this.concurrent) {
				this.active.push(this.queue.pop().call(null));
			}
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
		concurrent?:number;
		testChanges?:boolean;
		skipTests?:boolean;
		printFiles?:boolean;
		printRefMap?:boolean;
		findNotRequiredTscparams?:boolean;
	}

	/////////////////////////////////
	// The main class to kick things off
	/////////////////////////////////
	export class TestRunner {
		private timer: Timer;
		private suites: ITestSuite[] = [];

		public changes: GitChanges;
		public index: FileIndex;
		public print: Print;

		constructor(public dtPath: string, public options: ITestRunnerOptions = {tscVersion: DT.DEFAULT_TSC_VERSION}) {
			this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

			this.index = new FileIndex(this, this.options);
			this.changes = new GitChanges(this);

			this.print = new Print(this.options.tscVersion);
		}

		public addSuite(suite: ITestSuite): void {
			this.suites.push(suite);
		}

		public checkAcceptFile(fileName: string): boolean {
			var ok = tsExp.test(fileName);
			ok = ok && fileName.indexOf('_infrastructure') < 0;
			ok = ok && fileName.indexOf('node_modules/') < 0;
			ok = ok && /^[a-z]/i.test(fileName);
			return ok;
		}

		public run(): Promise<boolean> {
			this.timer = new Timer();
			this.timer.start();

			this.print.printChangeHeader();

			// only includes .d.ts or -tests.ts or -test.ts or .ts
			return this.index.readIndex().then(() => {
				return this.changes.readChanges();
			}).then((changes: string[]) => {
				this.print.printAllChanges(changes);
				return this.index.collectDiff(changes);
			}).then(() => {
				this.print.printRemovals(this.index.removed);
				this.print.printRelChanges(this.index.changed);
				return this.index.parseFiles();
			}).then(() => {
				if (this.options.printRefMap) {
					this.print.printRefMap(this.index, this.index.refMap);
				}
				if (Lazy(this.index.missing).some((arr: any[]) => arr.length > 0)) {
					this.print.printMissing(this.index, this.index.missing);
					this.print.printBoldDiv();
					// bail
					return Promise.cast(false);
				}
				if (this.options.printFiles) {
					this.print.printFiles(this.index.files);
				}
				return this.index.collectTargets().then((files) => {
					if (this.options.testChanges) {
						this.print.printQueue(files);
						return this.runTests(files);
					}
					else {
						this.print.printTestAll();
						return this.runTests(this.index.files)
					}
				}).then(() => {
					return !this.suites.some((suite) => {
						return suite.ngTests.length !== 0
					});
				});
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
				this.print.printHeader(this.options);

				if (this.options.findNotRequiredTscparams) {
					this.addSuite(new FindNotRequiredTscparams(this.options, this.print));
				}

				return Promise.reduce(this.suites, (count, suite: ITestSuite) => {
					suite.testReporter = suite.testReporter || new DefaultTestReporter(this.print);

					this.print.printSuiteHeader(suite.testSuiteName);

					if (this.options.skipTests) {
						this.print.printWarnCode('skipped test');
						return Promise.cast(count++);
					}

					return suite.start(files, (testResult) => {
						this.print.printTestComplete(testResult);
					}).then((suite) => {
						this.print.printSuiteComplete(suite);
						return count++;
					});
				}, 0);
			}).then((count) => {
				this.timer.end();
				this.finaliseTests(files);
			});
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

	var optimist: Optimist = require('optimist')(process.argv);
	optimist.default('try-without-tscparams', false);
	optimist.default('single-thread', false);
	optimist.default('tsc-version', DEFAULT_TSC_VERSION);

	optimist.default('test-changes', false);
	optimist.default('skip-tests', false);
	optimist.default('print-files', false);
	optimist.default('print-refmap', false);

	optimist.boolean('help');
	optimist.describe('help', 'print help');
	optimist.alias('h', 'help');

	var argv: any = optimist.argv;

	var dtPath = path.resolve(path.dirname((module).filename), '..', '..');
	var cpuCores = os.cpus().length;

	if (argv.help) {
		optimist.showHelp();
		var pkg: PackageJSON = require('../../package.json');
		console.log('Scripts:');
		console.log('');
		Lazy(pkg.scripts).keys().each((key) => {
			console.log('   $ npm run ' + key);
		});
		process.exit(0);
	}

	var testFull = process.env['TRAVIS_BRANCH'] ? /\w\/full$/.test(process.env['TRAVIS_BRANCH']) : false;

	new TestRunner(dtPath, {
		concurrent: argv['single-thread'] ? 1 : Math.max(Math.min(24, cpuCores), 2),
		tscVersion: argv['tsc-version'],
		testChanges: testFull ? false : argv['test-changes'], // allow magic branch
		skipTests: argv['skip-tests'],
		printFiles: argv['print-files'],
		printRefMap: argv['print-refmap'],
		findNotRequiredTscparams: argv['try-without-tscparam']
	}).run().then((success) => {
		if (!success) {
			process.exit(1);
		}
	}).catch((err) => {
		throw err;
		process.exit(2);
	});
}
