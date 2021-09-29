// Type definitions for power-assert 1.5
// Project: https://github.com/twada/power-assert
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

// copy from assert external module in node.d.ts

import * as empower from "empower";
import * as powerAssertFormatter from "power-assert-formatter";

export = assert;
export as namespace assert;

declare function assert(value: unknown, message?: string): asserts value;
declare namespace assert {
    class AssertionError implements Error {
        name: string;
        message: string;
        actual: unknown;
        expected: unknown;
        operator: string;
        generatedMessage: boolean;

        constructor(options?: {
            message?: string | undefined;
            actual?: unknown;
            expected?: unknown;
            operator?: string | undefined;
            // tslint:disable-next-line:ban-types
            stackStartFunction?: Function | undefined
        });
    }

    function fail(actual?: unknown, expected?: unknown, message?: string, operator?: string): never;
    function ok(value: unknown, message?: string): asserts value;
    function equal(actual: unknown, expected: unknown, message?: string): void;
    function notEqual(actual: unknown, expected: unknown, message?: string): void;
    function deepEqual(actual: unknown, expected: unknown, message?: string): void;
    function notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
    function strictEqual<T>(actual: unknown, expected: T, message?: string): asserts actual is T;
    function notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    function deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    function notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    const throws: {
        (block: () => unknown, message?: string): void;
        (block: () => unknown, error: (new () => object), message?: string): void;
        (block: () => unknown, error: RegExp, message?: string): void;
        (block: () => unknown, error: (err: unknown) => boolean, message?: string): void;
    };
    const doesNotThrow: {
        (block: () => unknown, message?: string): void;
        (block: () => unknown, error: (new () => object), message?: string): void;
        (block: () => unknown, error: RegExp, message?: string): void;
        (block: () => unknown, error: (err: any) => boolean, message?: string): void;
    };
    function ifError(value: unknown): asserts value is null | undefined;

    const strict: typeof assert;

    interface Options {
        assertion?: empower.Options | undefined;
        output?: powerAssertFormatter.Options | undefined;
    }

    function customize(options: Options): typeof assert;
}
