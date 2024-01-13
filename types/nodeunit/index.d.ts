// Imported from: https://github.com/soywiz/typescript-node-definitions/nodeunit.d.ts

export interface ITestCase {
    (testCase: { [property: string]: ITestBody | ITestGroup | void }): void;
}
export declare var testCase: ITestCase;

export interface Test {
    done: ICallbackFunction;
    expect(num: number): void;

    // assersions from node assert module
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

    // assertion wrappers
    equals(actual: any, expected: any, message?: string): void;
    same(actual: any, expected: any, message?: string): void;
}

// Test Group Usage:
//  var testGroup: nodeunit.ITestGroup = {
//      setUp: (callback) => {
//           callback();
//      },
//      tearDown: (callback) => {
//            callback();
//      },
//      test1: (test: nodeunit.Test) => {
//          test.done();
//      }
//    }
//    exports.testgroup = testGroup;

export interface ITestBody {
    (callback: Test): void;
}

export interface ITestGroup {
    /** The setUp function is run before each test */
    setUp?: ((callback: ICallbackFunction) => void) | undefined;
    /** The tearDown function is run after each test calls test.done() */
    tearDown?: ((callback: ICallbackFunction) => void) | undefined;
    [property: string]: ITestGroup | ITestBody | ((callback: ICallbackFunction) => void) | undefined;
}

export interface ICallbackFunction {
    (err?: any): void;
}
