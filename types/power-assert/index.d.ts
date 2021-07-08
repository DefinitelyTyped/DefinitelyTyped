// Type definitions for power-assert 1.5.3
// Project: https://github.com/twada/power-assert
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// copy from assert external module in node.d.ts

/// <reference types="empower" />
/// <reference types="power-assert-formatter" />

import * as empower from "empower";

export = assert;
export as namespace assert;

declare function assert(value: any, message?: string): void;
declare namespace assert {
    export class AssertionError implements Error {
        name: string;
        message: string;
        actual: any;
        expected: any;
        operator: string;
        generatedMessage: boolean;

        constructor(options?: { message?: string | undefined; actual?: any; expected?: any; operator?: string | undefined; stackStartFunction?: Function | undefined });
    }

    export function fail(actual?: any, expected?: any, message?: string, operator?: string): never;
    export function ok(value: any, message?: string): void;
    export function equal(actual: any, expected: any, message?: string): void;
    export function notEqual(actual: any, expected: any, message?: string): void;
    export function deepEqual(actual: any, expected: any, message?: string): void;
    export function notDeepEqual(acutal: any, expected: any, message?: string): void;
    export function strictEqual(actual: any, expected: any, message?: string): void;
    export function notStrictEqual(actual: any, expected: any, message?: string): void;
    export function deepStrictEqual(actual: any, expected: any, message?: string): void;
    export function notDeepStrictEqual(actual: any, expected: any, message?: string): void;
    export var throws: {
        (block: Function, message?: string): void;
        (block: Function, error: Function, message?: string): void;
        (block: Function, error: RegExp, message?: string): void;
        (block: Function, error: (err: any) => boolean, message?: string): void;
    };
    export var doesNotThrow: {
        (block: Function, message?: string): void;
        (block: Function, error: Function, message?: string): void;
        (block: Function, error: RegExp, message?: string): void;
        (block: Function, error: (err: any) => boolean, message?: string): void;
    };
    export function ifError(value: any): void;

    export const strict: typeof assert;

    export interface Options {
        assertion?: empower.Options | undefined;
        output?: powerAssertFormatter.Options | undefined;
    }

    export function customize(options: Options): typeof assert;
}
