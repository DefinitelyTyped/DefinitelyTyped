// Type definitions for ale-url-parser 0.10
// Project: https://github.com/msn0/ale-url-parser#readme
// Definitions by: Michał Jezierski <https://github.com/msn0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface QueryParams {
    [key: string]: any;
}

export interface UrlObject {
    protocol?: string;
    host?: string;
    path?: string[];
    query?: QueryParams;
    hash?: string;
}

/**
 * Parse url string into url object.
 * @return UrlObject
 */
export function parse(url: string): UrlObject;

/**
 * Stringify url object into url string.
 * @return string
 */
export function stringify(urlObject: UrlObject): string;
