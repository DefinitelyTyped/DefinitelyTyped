// copy from assert external module in node.d.ts

import { Options as EmpowerOptions } from "empower";
import { Options as PowerAssertFormatterOptions } from "power-assert-formatter";

export = assert;
export as namespace assert;

declare function assert(value: unknown, message?: string): void;
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
            stackStartFunction?: () => void | undefined;
        });
    }

    function fail(actual?: unknown, expected?: unknown, message?: string, operator?: string): never;
    function ok(value: unknown, message?: string): void;
    function equal(actual: unknown, expected: unknown, message?: string): void;
    function notEqual(actual: unknown, expected: unknown, message?: string): void;
    function deepEqual(actual: unknown, expected: unknown, message?: string): void;
    function notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
    function strictEqual(actual: unknown, expected: unknown, message?: string): void;
    function notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    function deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    function notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    const throws: {
        (block: () => unknown, message?: string): void;
        (
            block: () => unknown,
            error: (new() => object) | RegExp | ((err: unknown) => boolean),
            message?: string,
        ): void;
    };
    const doesNotThrow: {
        (block: () => unknown, message?: string): void;
        (block: () => unknown, error: (new() => object) | RegExp | ((err: any) => boolean), message?: string): void;
    };
    function ifError(value: unknown): void | undefined;

    const strict: typeof assert;

    interface Options {
        assertion?: EmpowerOptions | undefined;
        output?: PowerAssertFormatterOptions | undefined;
    }

    function customize(options: Options): typeof assert;
}
