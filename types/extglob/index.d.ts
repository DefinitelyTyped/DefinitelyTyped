/**
 * Extended glob support for JavaScript. Adds extglob matching and
 * parsing support (e.g. `!(a|b)`, `*(a|b)`, `+(a|b)`, `?(a|b)`, `@(a|b)`).
 *
 * @param pattern - Extglob pattern
 * @param options - Options
 * @returns Regex-compatible string
 */
declare function extglob(pattern: string, options?: extglob.Options): string;

declare namespace extglob {
    interface Options {
        /** Return regex-compatible string */
        toRegex?: boolean | undefined;
        /** Strict mode */
        strict?: boolean | undefined;
        [key: string]: any;
    }

    /** Filter an array of strings, returning those that match the pattern */
    function match(list: string[], pattern: string, options?: Options): string[];

    /** Return true if the string matches the pattern */
    function isMatch(str: string, pattern: string, options?: Options): boolean;

    /** Return true if the string contains the pattern */
    function contains(str: string, pattern: string, options?: Options): boolean;

    /** Create a matcher function from a pattern */
    function matcher(pattern: string, options?: Options): (str: string) => boolean;

    /** Create a regular expression from the given pattern */
    function makeRe(pattern: string, options?: Options): RegExp;

    /** Parse and compile the pattern, returning the result object */
    function create(pattern: string, options?: Options): object;

    /** Extract captured groups from a match */
    function capture(pattern: string, str: string, options?: Options): string[] | null;

    /** Clear the internal regex cache */
    function clearCache(): void;
}

export = extglob;
