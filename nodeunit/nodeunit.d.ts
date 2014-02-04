declare module 'nodeunit' {
    export class Test {
        done(err?: any): void;
        expect(num: number): void;

        //assertions from node assert module
        fail(actual: any, expected: any, message: string, operator: string): void;
        assert(value: any, message: string): void;
        ok(value: any, message?: string): void;
        equal(actual: any, expected: any, message?: string): void;
        notEqual(actual: any, expected: any, message?: string): void;
        deepEqual(actual: any, expected: any, message?: string): void;
        notDeepEqual(acutal: any, expected: any, message?: string): void;
        strictEqual(actual: any, expected: any, message?: string): void;
        notStrictEqual(actual: any, expected: any, message?: string): void;
        throws(block: any, error?: any, messsage?: string): void;
        doesNotThrow(block: any, error?: any, messsage?: string): void;
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

    export interface ITestGroup {
        setUp?: (callback: ICallbackFunction) => void;
        tearDown?: (callback: ICallbackFunction) => void;
    }

    export interface ICallbackFunction { (err?: any): void; }
}