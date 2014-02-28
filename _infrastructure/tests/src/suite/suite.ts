/// <reference path="../../runner.ts" />

module DT {
	'use strict';

	var Promise: typeof Promise = require('bluebird');

	/////////////////////////////////
	// The interface for test suite
	/////////////////////////////////
	export interface ITestSuite {
		testSuiteName:string;
		errorHeadline:string;
		filterTargetFiles(files: File[]): Promise<File[]>;

		start(targetFiles: File[], testCallback: (result: TestResult, index: number) => void): Promise<ITestSuite>;

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

		public filterTargetFiles(files: File[]): Promise<File[]> {
			throw new Error('please implement this method');
		}

		public start(targetFiles: File[], testCallback: (result: TestResult, index: number) => void): Promise<ITestSuite> {
			this.timer.start();
			return this.filterTargetFiles(targetFiles).then((targetFiles) => {
				return Promise.reduce(targetFiles, (count, targetFile) => {
					return this.runTest(targetFile).then((result) => {
						testCallback(result, count + 1);
						return count++;
					});
				}, 0);
			}).then((count: number) => {
				this.timer.end();
				return this;
			});
		}

		public runTest(targetFile: File): Promise<TestResult> {
			return new Test(this, targetFile, {tscVersion: this.options.tscVersion}).run().then((result) => {
				this.testResults.push(result);
				return result;
			});
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
