/// <reference path="../../runner.ts" />
/// <reference path="../util.ts" />

module DT {
	'use-strict';
	/////////////////////////////////
	// Compile with *-tests.ts
	/////////////////////////////////
	export class TestEval extends TestSuiteBase {

		constructor(options) {
			super(options, "Typing tests", "Failed tests");
		}

		public filterTargetFiles(files: File[]): File[] {
			return files.filter((file) => {
				return DT.endsWith(file.formatName.toUpperCase(), '-TESTS.TS')
			});
		}
	}

}
