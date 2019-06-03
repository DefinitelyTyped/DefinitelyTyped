// Type definitions for safe-json-stringify 1.1
// Project: https://github.com/debitoor/safe-json-stringify
// Definitions by: Eric Byers <https://github.com/ericbyers>
//                 Tony Wooster <https://github.com/twooster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace safeJsonStringify {
    function ensureProperties(value: object): object;
    function ensureProperties<T>(value: T): T;
}

declare function safeJsonStringify(
    value: any,
    replacer?: ((this: any, key: string, value: any) => any) | Array<number | string> | null,
    space?: string | number
): string;

export = safeJsonStringify;
