export interface PatternMatherOptions {
    escaped?: boolean;
}

/**
 * The class to find patterns as considering escape sequences.
 */
export class PatternMatcher {
    constructor(pattern: RegExp, options?: PatternMatherOptions);

    /**
     * Find the pattern in a given string.
     * @param str The string to find.
     * @returns The iterator which iterate the matched information.
     */
    execAll(str: string): IterableIterator<RegExpExecArray>;

    /**
     * Check whether the pattern is found in a given string.
     * @param str The string to check.
     * @returns `true` if the pattern was found in the string.
     */
    test(str: string): boolean;

    /**
     * Replace a given string.
     * @param str The string to be replaced.
     * @param replacer The string or function to replace. This is the same as the 2nd argument of `String.prototype.replace`.
     * @returns The replaced string.
     */
    [Symbol.replace](str: string, replacer: string | ((...strs: string[]) => string)): string;
}
