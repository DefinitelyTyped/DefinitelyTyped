// Type definitions for safe-json-stringify 1.1
// Project: https://github.com/debitoor/safe-json-stringify
// Definitions by: Eric Byers <https://github.com/ericbyers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped"
// TypeScript Version: 2.3

declare namespace safeJsonStringify {
	function ensureProperties(obj: any): object;
}

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter
type ReplacerFn = (key: any, value: any) => any;

declare function safeJsonStringify(
    data: object,
    replacer?: ReplacerFn | any[] | null,
    space?: string | number
): string;

export = safeJsonStringify;
