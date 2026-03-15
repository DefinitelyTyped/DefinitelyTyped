/**
 * Fast, minimal glob matcher for node.js.
 * Similar to micromatch, but without support for extended globs or braces.
 *
 * @param list - Array of strings to match
 * @param patterns - One or more glob patterns
 * @param options - Options
 * @returns Array of matching strings
 */
declare function nanomatch(list: string[], patterns: string | string[], options?: nanomatch.Options): string[];

declare namespace nanomatch {
    interface Options {
        /** Allow glob patterns without slashes to match a path with slashes */
        basename?: boolean | undefined;
        /** Enable bash-like behavior */
        bash?: boolean | undefined;
        /** Disable regex and function memoization */
        cache?: boolean | undefined;
        /** Enable dotfile matching */
        dot?: boolean | undefined;
        /** Limit pattern matching to fail after the specified number of characters */
        failglob?: boolean | undefined;
        /** String or array of glob patterns to match files to ignore */
        ignore?: string | string[] | undefined;
        /** Unixify file paths */
        unixify?: boolean | undefined;
        [key: string]: any;
    }

    /** Match with a single pattern */
    function match(list: string[], pattern: string, options?: Options): string[];

    /** Return true if the string matches the pattern */
    function isMatch(str: string, pattern: string, options?: Options): boolean;

    /** Return true if the string contains the pattern */
    function contains(str: string, pattern: string, options?: Options): boolean;

    /** Return true if any pattern matches the string */
    function any(str: string, patterns: string | string[], options?: Options): boolean;

    /** Return true if all patterns match the string */
    function all(str: string, patterns: string | string[], options?: Options): boolean;

    /** Return true if some items in the list match any pattern */
    function some(list: string[], patterns: string | string[], options?: Options): boolean;

    /** Return true if every item in the list matches at least one pattern */
    function every(list: string[], patterns: string | string[], options?: Options): boolean;

    /** Return list of strings that do NOT match any pattern */
    function not(list: string[], patterns: string | string[], options?: Options): string[];

    /** Create a matcher function from a pattern */
    function matcher(pattern: string, options?: Options): (str: string) => boolean;

    /** Create a regular expression from the given pattern */
    function makeRe(pattern: string, options?: Options): RegExp;

    /** Parse and compile the pattern */
    function create(pattern: string, options?: Options): object;

    /** Filter object keys by glob pattern */
    function matchKeys(obj: object, patterns: string | string[], options?: Options): object;

    /** Extract captured groups from a match */
    function capture(pattern: string, str: string, options?: Options): string[] | null;

    /** Clear the internal regex cache */
    function clearCache(): void;
}

export = nanomatch;
