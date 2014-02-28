/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />

module DT {

	/////////////////////////////////
	// All the common things that we print are functions of this class
	/////////////////////////////////
	export class Print {

		WIDTH = 77;

		typings: number;
		tests: number;
		tsFiles: number

		constructor(public version: string){

		}

		public init(typings: number, tests: number, tsFiles: number) {
			this.typings = typings;
			this.tests = tests;
			this.tsFiles = tsFiles;
		}

		public out(s: any): Print {
			process.stdout.write(s);
			return this;
		}

		public repeat(s: string, times: number): string {
			return new Array(times + 1).join(s);
		}

		public printChangeHeader() {
			this.out('=============================================================================\n');
			this.out('                   \33[36m\33[1mDefinitelyTyped Diff Detector 0.1.0\33[0m \n');
			this.out('=============================================================================\n');
		}

		public printHeader() {
			this.out('=============================================================================\n');
			this.out('                    \33[36m\33[1mDefinitelyTyped Test Runner 0.5.0\33[0m\n');
			this.out('=============================================================================\n');
			this.out(' \33[36m\33[1mTypescript version:\33[0m ' + this.version + '\n');
			this.out(' \33[36m\33[1mTypings           :\33[0m ' + this.typings + '\n');
			this.out(' \33[36m\33[1mTests             :\33[0m ' + this.tests + '\n');
			this.out(' \33[36m\33[1mTypeScript files  :\33[0m ' + this.tsFiles + '\n');
		}

		public printSuiteHeader(title: string) {
			var left = Math.floor((this.WIDTH - title.length ) / 2) - 1;
			var right = Math.ceil((this.WIDTH - title.length ) / 2) - 1;
			this.out(this.repeat('=', left)).out(' \33[34m\33[1m');
			this.out(title);
			this.out('\33[0m ').out(this.repeat('=', right)).printBreak();
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
			this.out('\r\33[K');
			return this;
		}

		public printSuccessCount(current: number, total: number) {
			var arb = (total === 0) ? 0 : (current / total);
			this.out(' \33[36m\33[1mSuccessful      :\33[0m \33[32m\33[1m' + (arb * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
		}

		public printFailedCount(current: number, total: number) {
			var arb = (total === 0) ? 0 : (current / total);
			this.out(' \33[36m\33[1mFailure         :\33[0m \33[31m\33[1m' + (arb * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
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

		public printSuiteErrorCount(errorHeadline: string, current: number, total: number, warn: boolean = false) {
			var arb = (total === 0) ? 0 : (current / total);
			this.out(' \33[36m\33[1m').out(errorHeadline).out(this.repeat(' ', 16 - errorHeadline.length));
			if (warn) {
				this.out(': \33[31m\33[1m' + (arb * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
			}
			else {
				this.out(': \33[33m\33[1m' + (arb * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
			}
		}

		public printSubHeader(file: string) {
			this.out(' \33[36m\33[1m' + file + '\33[0m\n');
		}

		public printLine(file: string) {
			this.out(file + '\n');
		}

		public printElement(file: string) {
			this.out(' - ' + file + '\n');
		}

		public printElement2(file: string) {
			this.out('    - ' + file + '\n');
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
