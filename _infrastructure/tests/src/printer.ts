/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />

module DT {
	'use-strict';

	/////////////////////////////////
	// All the common things that we pring are functions of this class
	/////////////////////////////////
	export class Print {

		WIDTH = 77;

		constructor(public version: string, public typings: number, public tests: number, public tsFiles: number) {
		}

		public out(s: any): Print {
			process.stdout.write(s);
			return this;
		}

		public repeat(s: string, times: number): string {
			return new Array(times + 1).join(s);
		}

		public printHeader() {
			this.out('=============================================================================\n');
			this.out('                    \33[36m\33[1mDefinitelyTyped test runner 0.4.0\33[0m\n');
			this.out('=============================================================================\n');
			this.out(' \33[36m\33[1mTypescript version:\33[0m ' + this.version + '\n');
			this.out(' \33[36m\33[1mTypings           :\33[0m ' + this.typings + '\n');
			this.out(' \33[36m\33[1mTests             :\33[0m ' + this.tests + '\n');
			this.out(' \33[36m\33[1mTypeScript files  :\33[0m ' + this.tsFiles + '\n');
		}

		public printSuiteHeader(title: string) {
			var left = Math.floor((this.WIDTH - title.length ) / 2) - 1;
			var right = Math.ceil((this.WIDTH - title.length ) / 2) - 1;
			this.out(this.repeat("=", left)).out(" \33[34m\33[1m");
			this.out(title);
			this.out("\33[0m ").out(this.repeat("=", right)).printBreak();
		}

		public printDiv() {
			this.out('-----------------------------------------------------------------------------\n');
		}

		public printBoldDiv() {
			this.out('=============================================================================\n');
		}

		public printErrorsHeader() {
			this.out('=============================================================================\n');
			this.out('                    \33[34m\33[1mErrors in files\33[0m \n');
			this.out('=============================================================================\n');
		}

		public printErrorsForFile(testResult: TestResult) {
			this.out('----------------- For file:' + testResult.targetFile.formatName);
			this.printBreak().out(testResult.stderr).printBreak();
		}

		public printBreak(): Print {
			this.out('\n');
			return this;
		}

		public clearCurrentLine(): Print {
			this.out("\r\33[K");
			return this;
		}

		public printSuccessCount(current: number, total: number) {
			this.out(' \33[36m\33[1mSuccessful      :\33[0m \33[32m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
		}

		public printFailedCount(current: number, total: number) {
			this.out(' \33[36m\33[1mFailure         :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
		}

		public printTypingsWithoutTestsMessage() {
			this.out(' \33[36m\33[1mTyping without tests\33[0m\n');
		}

		public printTotalMessage() {
			this.out(' \33[36m\33[1mTotal\33[0m\n');
		}

		public printElapsedTime(time: string, s: number) {
			this.out(' \33[36m\33[1mElapsed time    :\33[0m ~' + time + ' (' + s + 's)\n');
		}

		public printSuiteErrorCount(errorHeadline: string, current: number, total: number, valuesColor = '\33[31m\33[1m') {
			this.out(' \33[36m\33[1m').out(errorHeadline).out(this.repeat(' ', 16 - errorHeadline.length));
			this.out(':\33[0m ' + valuesColor + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
		}

		public printTypingsWithoutTestName(file: string) {
			this.out(' - \33[33m\33[1m' + file + '\33[0m\n');
		}

		public printTypingsWithoutTest(withoutTestTypings: string[]) {
			if (withoutTestTypings.length > 0) {
				this.printTypingsWithoutTestsMessage();

				this.printDiv();
				withoutTestTypings.forEach((t) => {
					this.printTypingsWithoutTestName(t);
				});
			}
		}
	}
}
