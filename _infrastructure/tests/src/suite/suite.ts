/// <reference path="../../runner.ts" />

module DT {
	'use-strict';

	/////////////////////////////////
	// The interface for test suite
	/////////////////////////////////
	export interface ITestSuite {
		testSuiteName:string;
		errorHeadline:string;
		filterTargetFiles(files: File[]):File[];

		start(targetFiles: File[], testCallback: (result: TestResult, index: number) => void, suiteCallback: (suite: ITestSuite) => void):void;

		testResults:TestResult[];
		okTests:TestResult[];
		ngTests:TestResult[];
		timer:Timer;

		testReporter:ITestReporter;
		printErrorCount:boolean;
	}

	/////////////////////////////////
	// Base class for test suite
	/////////////////////////////////
	export class TestSuiteBase implements ITestSuite {
		timer: Timer = new Timer();
		testResults: TestResult[] = [];
		testReporter: ITestReporter;
		printErrorCount = true;

		constructor(public options: ITestRunnerOptions, public testSuiteName: string, public errorHeadline: string) {
		}

		public filterTargetFiles(files: File[]): File[] {
			throw new Error("please implement this method");
		}

		public start(targetFiles: File[], testCallback: (result: TestResult, index: number) => void, suiteCallback: (suite: ITestSuite) => void): void {
			targetFiles = this.filterTargetFiles(targetFiles);
			this.timer.start();
			var count = 0;
			// exec test is async process. serialize.
			var executor = () => {
				var targetFile = targetFiles[count];
				if (targetFile) {
					this.runTest(targetFile, (result) => {
						testCallback(result, count + 1);
						count++;
						executor();
					});
				}
				else {
					this.timer.end();
					this.finish(suiteCallback);
				}
			};
			executor();
		}

		public runTest(targetFile: File, callback: (result: TestResult) => void): void {
			new Test(this, targetFile, {tscVersion: this.options.tscVersion}).run((result) => {
				this.testResults.push(result);
				callback(result);
			});
		}

		public finish(suiteCallback: (suite: ITestSuite) => void) {
			suiteCallback(this);
		}

		public get okTests(): TestResult[] {
			return this.testResults.filter((r) => {
				return r.success;
			});
		}

		public get ngTests(): TestResult[] {
			return this.testResults.filter((r) => {
				return !r.success
			});
		}
	}
}
