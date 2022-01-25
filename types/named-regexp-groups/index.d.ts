// Type definitions for named-regexp-groups 1.0
// Project: https://github.com/commenthol/named-regexp-groups/
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

interface NamedRegExpExecArray extends RegExpExecArray {
    groups: { [propName: string]: string };
}

declare class NamedRegExp {
    constructor(pattern?: string | RegExp, flags?: string);

    /**
     * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
     * @param string The String object or string literal on which to perform the search.
     */
    exec(string: string): NamedRegExpExecArray | null;

    /**
     * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
     * @param string String on which to perform the search.
     */
    test(string: string): boolean;

    // Non-standard extensions
    toString(): string;

    [Symbol.replace](str: string, replacement: string | ((match: string, ...capturedGroups: string[]) => string)): string;

    [Symbol.match](str: string): NamedRegExpExecArray;

    [Symbol.split](str: string): string[];

    [Symbol.search](str: string): number;
}

export = NamedRegExp;
