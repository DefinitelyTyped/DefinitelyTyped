// Type definitions for query-string v3.0.0
// Project: https://github.com/sindresorhus/query-string
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "query-string" {
    type value = string | boolean | number;
                
    interface StringifyOptions { strict?: boolean; encode?: boolean; }

    /**
     * Parse a query string into an object.
     * Leading ? or # are ignored, so you can pass location.search or location.hash directly.
     * @param str
     */
    export function parse(str: string): { [key: string]: string | string[] };

    /**
     * Stringify an object into a query string, sorting the keys.
     *
     * @param obj
     */
    export function stringify(obj: { [key: string]: value | value[] }, options?: StringifyOptions): string;

    /**
     * Extract a query string from a URL that can be passed into .parse().
     *
     * @param str
     */
    export function extract(str: string): string;
}
