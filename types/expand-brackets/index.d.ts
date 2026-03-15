/**
 * Expand POSIX bracket expressions (character classes) in glob patterns.
 *
 * @param pattern - POSIX character class pattern
 * @param options - Options
 * @returns String that can be used for creating regular expressions
 */
declare function brackets(pattern: string, options?: brackets.Options): string;

declare namespace brackets {
    interface Options {
        /** Generate a regex-compatible string */
        toRegex?: boolean | undefined;
        /** Strict mode */
        strict?: boolean | undefined;
        [key: string]: any;
    }

    /** Filter an array of strings, returning those that match the pattern */
    function match(arr: string[], pattern: string, options?: Options): string[];

    /** Return true if the given string matches the pattern */
    function isMatch(str: string, pattern: string, options?: Options): boolean;

    /** Create a matcher function from a pattern */
    function matcher(pattern: string, options?: Options): (str: string) => boolean;

    /** Create a regular expression from the given pattern */
    function makeRe(pattern: string, options?: Options): RegExp;

    /** Parse and compile the pattern, returning the result object */
    function create(pattern: string, options?: Options): object;
}

export = brackets;
