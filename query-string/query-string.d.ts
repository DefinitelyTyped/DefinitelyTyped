// Type definitions for query-string v3.0.0
// Project: https://github.com/sindresorhus/query-string
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "query-string" {
    /**
     * Parse a query string into an object.
     * Leading ? or # are ignored, so you can pass location.search or location.hash directly.
     * @param str
     */
    export function parse(str: string): any;

    /**
     * Stringify an object into a query string, sorting the keys.
     *
     * @param obj
     */
    export function stringify(obj: any): string;

    /**
     * Extract a query string from a URL that can be passed into .parse().
     *
     * @param str
     */
    export function extract(str: string): string;
}
