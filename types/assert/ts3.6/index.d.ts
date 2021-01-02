declare function assert(value: any, message?: string): void;

declare namespace assert {
    function fail(actual?: any, expected?: any, message?: string, operator?: string): never;

    function ok(value: any, message?: string): void;

    function equal(actual: any, expected: any, message?: string): void;

    function notEqual(actual: any, expected: any, message?: string): void;

    function deepEqual(actual: any, expected: any, message?: string): void;

    function notDeepEqual(actual: any, expected: any, message?: string): void;

    function deepStrictEqual<T>(actual: T, expected: T, message?: string): void;

    function notDeepStrictEqual<T>(actual: T, expected: T, message?: string): void;

    function strictEqual<T>(actual: T, expected: T, message?: string): void;

    function notStrictEqual<T>(actual: T, expected: T, message?: string): void;

    function throws(block: () => void, message?: string): void;
    function throws(block: () => void, error: (() => void) | ((err: any) => boolean) | RegExp, message?: string): void;

    function doesNotThrow(block: () => void, message?: string): void;
    function doesNotThrow(
        block: () => void,
        error: (() => void) | ((err: any) => boolean) | RegExp,
        message?: string,
    ): void;

    function ifError(value: any): void;

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
