// Type definitions for query-string 6.1
// Project: https://github.com/sindresorhus/query-string
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
//                 Tanguy Krotoff <https://github.com/tkrotoff>
//                 HuHuanming <https://github.com/huhuanming>
//                 Madara Uchiha <https://github.com/MadaraUchiha>
//                 Josh Holmer <https://github.com/shssoichiro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface ParseOptions {
    arrayFormat?: 'bracket' | 'index' | 'none';
    decode?: boolean;
}

/**
 * Parse a query string into an object.
 * Leading ? or # are ignored, so you can pass location.search or location.hash directly.
 */
export function parse(str: string, options?: ParseOptions): any;

export function parseUrl(str: string, options?: ParseOptions): {url: string, query: any};

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
