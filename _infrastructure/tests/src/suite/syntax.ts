/// <reference path="../../runner.ts" />
/// <reference path="../util.ts" />

module DT {
	'use strict';

	var Promise: typeof Promise = require('bluebird');

	var endDts = /\w\.d\.ts$/i;

	/////////////////////////////////
	// .d.ts syntax inspection
	/////////////////////////////////
	export class SyntaxChecking extends TestSuiteBase {

		constructor(options: ITestRunnerOptions) {
			super(options, 'Syntax checking', 'Syntax error');
		}

		public filterTargetFiles(files: File[]): Promise<File[]> {
			return Promise.cast(files.filter((file) => {
				return endDts.test(file.filePathWithName);
			}));
		}
	}
}
