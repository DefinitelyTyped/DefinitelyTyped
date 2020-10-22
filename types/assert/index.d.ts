// Type definitions for commonjs-assert 1.5
// Project: https://github.com/browserify/commonjs-assert, https://github.com/defunctzombie/commonjs-assert
// Definitions by: Nico Gallinal <https://github.com/nicoabie>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function assert(value: any, message?: string): asserts value;

declare namespace assert {
    function fail(actual?: any, expected?: any, message?: string, operator?: string): never;

    function ok(value: any, message?: string): asserts value;

    /** @deprecated Use `strictEqual` instead */
    function equal(actual: any, expected: any, message?: string): void;

    /** @deprecated Use `notStrictEqual` instead */
    function notEqual(actual: any, expected: any, message?: string): void;

    /** @deprecated Use `deepStrictEqual` instead */
    function deepEqual(actual: any, expected: any, message?: string): void;

    /** @deprecated Use `notDeepStrictEqual` instead */
    function notDeepEqual(actual: any, expected: any, message?: string): void;

    function deepStrictEqual<T>(actual: any, expected: T, message?: string): asserts actual is T;

    function notDeepStrictEqual(actual: any, expected: any, message?: string): void;

    function strictEqual<T>(actual: any, expected: T, message?: string): asserts actual is T;

    function notStrictEqual(actual: any, expected: any, message?: string): void;

    function throws(block: () => void, message?: string): void;
    function throws(block: () => void, error: (() => void) | ((err: any) => boolean) | RegExp, message?: string): void;

    function doesNotThrow(block: () => void, message?: string): void;
    function doesNotThrow(
        block: () => void,
        error: (() => void) | ((err: any) => boolean) | RegExp,
        message?: string,
    ): void;

    function ifError(value: any): asserts value is null | undefined;

    class AssertionError implements Error {
        name: string;
        message: string;
        actual: any;
        expected: any;
        operator: string;
        generatedMessage: boolean;

        constructor(options?: {
            message?: string;
            actual?: any;
            expected?: any;
            operator?: string;
            stackStartFunction?: () => void;
        });
    }

    const strict: typeof assert;
}

export = assert;
