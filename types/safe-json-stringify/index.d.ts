// Type definitions for safe-json-stringify 1.0
// Project: https://github.com/debitoor/safe-json-stringify
// Definitions by: Eric Byers <https://github.com/ericbyers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped"
// TypeScript Version: 2.3

declare namespace safeJsonStringify {
	function ensureProperties(obj: any): object;
}

declare function safeJsonStringify(data: object): string;

export = safeJsonStringify;
