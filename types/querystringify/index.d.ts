// Type definitions for querystringify 2.0
// Project: https://github.com/unshiftio/querystringify
// Definitions by: Ilya Verbitskiy <https://github.com/ilich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2
export function parse(query: string): object;

// TypeScript Version: 2.2
export function stringify(obj: object, prefix?: string | boolean): string;
