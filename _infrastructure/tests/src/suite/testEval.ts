/// <reference path="../../runner.ts" />
/// <reference path="../util.ts" />

module DT {
	'use strict';

	var Promise: typeof Promise = require('bluebird');

	var endTestDts = /\w-tests?\.ts$/i;

	/////////////////////////////////
	// Compile with *-tests.ts
	/////////////////////////////////
	export class TestEval extends TestSuiteBase {

		constructor(options) {
			super(options, 'Typing tests', 'Failed tests');
		}

		public filterTargetFiles(files: File[]): Promise<File[]> {
			return Promise.cast(files.filter((file) => {
				return endTestDts.test(file.filePathWithName);
			}));
		}
	}
}
