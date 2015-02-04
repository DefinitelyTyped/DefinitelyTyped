// Type definitions for nodeunit
// Project: https://github.com/caolan/nodeunit
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/nodeunit.d.ts

declare module 'nodeunit' {
	export interface Test {
		done: ICallbackFunction;
		expect(num: number): void;

		//assersions from node assert module
		fail(actual: any, expected: any, message: string, operator: string): void;
		assert(value: any, message: string): void;
		ok(value: any, message?: string): void;
		equal(actual: any, expected: any, message?: string): void;
		notEqual(actual: any, expected: any, message?: string): void;
		deepEqual(actual: any, expected: any, message?: string): void;
		notDeepEqual(actual: any, expected: any, message?: string): void;
		strictEqual(actual: any, expected: any, message?: string): void;
		notStrictEqual(actual: any, expected: any, message?: string): void;
		throws(block: any, error?: any, message?: string): void;
		doesNotThrow(block: any, error?: any, message?: string): void;
		ifError(value: any): void;

		//assertion wrappers
		equals(actual: any, expected: any, message?: string): void;
		same(actual: any, expected: any, message?: string): void;
	}

	// Test Group Usage:
	//  var testGroup: nodeunit.ITestGroup = {
	//        setUp: function (callback: nodeunit.ICallbackFunction): void {
	//            callback();
	//        },
	//        tearDown: function (callback: nodeunit.ICallbackFunction): void {
	//            callback();
	//        },
	//        test1: function (test: nodeunit.Test): void {
	//            test.done();
	//        }
	//    }
	//    exports.testgroup = testGroup;

	export interface ITestBody {
		(callback: Test): void;
	}

	export interface ITestGroup {
		setUp?: (callback: ICallbackFunction) => void;
		tearDown?: (callback: ICallbackFunction) => void;
	}

	export interface ICallbackFunction {
		(err?: any): void;
	}
}

