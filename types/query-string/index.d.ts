// Type definitions for query-string 5.0
// Project: https://github.com/sindresorhus/query-string
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
//                 Tanguy Krotoff <https://github.com/tkrotoff>
//                 HuHuanming <https://github.com/huhuanming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface ParseOptions {
    arrayFormat?: 'bracket' | 'index' | 'none';
}

/**
 * Parse a query string into an object.
 * Leading ? or # are ignored, so you can pass location.search or location.hash directly.
 */
export function parse(str: string, options?: ParseOptions): any;

export interface StringifyOptions {
    strict?: boolean;
    encode?: boolean;
    arrayFormat?: 'bracket' | 'index' | 'none';
}

/**
 * Stringify an object into a query string, sorting the keys.
 */
export function stringify(obj: object, options?: StringifyOptions): string;

/**
 * Extract a query string from a URL that can be passed into .parse().
 */
export function extract(str: string): string;
