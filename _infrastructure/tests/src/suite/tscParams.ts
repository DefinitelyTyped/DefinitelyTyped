/// <reference path='../../runner.ts' />
/// <reference path='../file.ts' />

module DT {
	'use strict';

	var fs = require('fs');
	var Promise: typeof Promise = require('bluebird');

	/////////////////////////////////
	// Try compile without .tscparams
	// It may indicate that it is compatible with --noImplicitAny maybe...
	/////////////////////////////////
	export class FindNotRequiredTscparams extends TestSuiteBase {
		testReporter: ITestReporter;
		printErrorCount = false;

		constructor(options: ITestRunnerOptions, private print: Print) {
			super(options, 'Find not required .tscparams files', 'New arrival!');

			this.testReporter = {
				printPositiveCharacter: (index: number, testResult: TestResult) => {
					this.print
					.clearCurrentLine()
					.printTypingsWithoutTestName(testResult.targetFile.formatName);
				},
				printNegativeCharacter: (index: number, testResult: TestResult) => {
				}
			}
		}

		public filterTargetFiles(files: File[]): Promise<File[]> {
			return Promise.filter(files, (file) => {
				return new Promise((resolve) => {
					fs.exists(file.filePathWithName + '.tscparams', resolve);
				});
			});
		}

		public runTest(targetFile: File): Promise<TestResult> {
			this.print.clearCurrentLine().out(targetFile.formatName);

			return new Test(this, targetFile, {
				tscVersion: this.options.tscVersion,
				useTscParams: false,
				checkNoImplicitAny: true
			}).run().then((result: TestResult) => {
				this.testResults.push(result);
				this.print.clearCurrentLine();
				return result
			});
		}

		public get ngTests(): TestResult[] {
			// Do not show ng test results
			return [];
		}
	}
}
