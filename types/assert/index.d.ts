// Type definitions for commonjs-assert 1.4
// Project: https://github.com/browserify/commonjs-assert
// Definitions by: Nico Gallinal <https://github.com/nicoabie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function assert(value: any, message?: string): void;

declare namespace assert {
    function fail(actual?: any, expected?: any, message?: string, operator?: string): void;

    function ok(value: any, message?: string): void;

    function equal(actual: any, expected: any, message?: string): void;

    function notEqual(actual: any, expected: any, message?: string): void;

    function deepEqual(actual: any, expected: any, message?: string): void;

    function notDeepEqual(acutal: any, expected: any, message?: string): void;

    function strictEqual(actual: any, expected: any, message?: string): void;

    function notStrictEqual(actual: any, expected: any, message?: string): void;

    function throws(block: () => void, message?: string): void;
    function throws(block: () => void, error: () => void | ((err: any) => boolean) | RegExp, message?: string): void;

    function doesNotThrow(block: () => void, message?: string): void;
    function doesNotThrow(block: () => void, error: () => void | ((err: any) => boolean) | RegExp, message?: string): void;

    function ifError(value: any): void;

    class AssertionError implements Error {
        name: string;
        message: string;
        actual: any;
        expected: any;
        operator: string;
        generatedMessage: boolean;

        constructor(options?: { message?: string; actual?: any; expected?: any; operator?: string; stackStartFunction?: () => void });
    }
}

export = assert;
