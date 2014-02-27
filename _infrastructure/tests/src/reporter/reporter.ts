/// <reference path="../../_ref.d.ts" />
/// <reference path="../printer.ts" />

module DT {
	'use-strict';

	/////////////////////////////////
	// Test reporter interface
	// for example, . and x
	/////////////////////////////////
	export interface ITestReporter {
		printPositiveCharacter(index: number, testResult: TestResult):void;
		printNegativeCharacter(index: number, testResult: TestResult):void;
	}

	/////////////////////////////////
	// Default test reporter
	/////////////////////////////////
	export class DefaultTestReporter implements ITestReporter {
		constructor(public print: Print) {
		}

		public printPositiveCharacter(index: number, testResult: TestResult) {
			this.print.out('\33[36m\33[1m' + '.' + '\33[0m');

			this.printBreakIfNeeded(index);
		}

		public printNegativeCharacter(index: number, testResult: TestResult) {
			this.print.out("x");

			this.printBreakIfNeeded(index);
		}

		private printBreakIfNeeded(index: number) {
			if (index % this.print.WIDTH === 0) {
				this.print.printBreak();
			}
		}
	}
}
