// Type definitions for jest-each 0.3
// Project: https://github.com/mattphillips/jest-each
// Definitions by: Michael Utz <https://github.com/theutz>, Nick McCurdy <https://github.com/nickmccurdy>
// Definitions: <https://github.com/DefinitelyTyped/DefinitelyTyped>
// TypeScript Version: 2.1

export = JestEach;

declare function JestEach(parameters: any[][]): JestEach.ReturnType;

declare namespace JestEach {
	type SyncCallback = (...args: any[]) => void;
	type AsyncCallback = () => void;

	type TestCallback = SyncCallback | AsyncCallback;

	type TestFn = (name: string, fn: TestCallback) => void;
	type DescribeFn = (name: string, fn: SyncCallback) => void;

	interface TestObj {
		(name: string, fn: TestCallback): void;
		only: TestFn;
		skip: TestFn;
	}

	interface DescribeObj {
		(name: string, fn: DescribeFn): void;
		only: DescribeFn;
		skip: DescribeFn;
	}

	interface ReturnType {
		test: TestObj;
		it: TestObj;
		fit: TestFn;
		xit: TestFn;
		xtest: TestFn;
		describe: DescribeObj;
		fdescribe: DescribeFn;
		xdescribe: DescribeFn;
	}
}
