import parseGlob = require("parse-glob");

declare namespace micromatch {
    type MatchFunction<T> = (value: T) => boolean;
    type Pattern = string | RegExp | MatchFunction<string>;

    interface Options {
        /**
         * Normalize slashes in file paths and glob patterns to forward slashes.
         */
        unixify?: boolean | undefined;
        /**
         * Match dotfiles. Same behavior as minimatch.
         */
        dot?: boolean | undefined;
        /**
         * Unescape slashes in glob patterns. Use cautiously, especially on windows.
         */
        unescape?: boolean | undefined;
        /**
         * Remove duplicate elements from the result array.
         */
        nodupes?: boolean | undefined;
        /**
         * Allow glob patterns without slashes to match a file path based on its basename. Same behavior as
         * minimatch.
         */
        matchBase?: boolean | undefined;
        /**
         * Don't expand braces in glob patterns. Same behavior as minimatch nobrace.
         */
        nobraces?: boolean | undefined;
        /**
         * Don't expand POSIX bracket expressions.
         */
        nobrackets?: boolean | undefined;
        /**
         * Don't expand extended globs.
         */
        noextglob?: boolean | undefined;
        /**
         * Use a case-insensitive regex for matching files. Same behavior as minimatch.
         */
        nocase?: boolean | undefined;
        /**
         * If true, when no matches are found the actual (array-ified) glob pattern is returned instead of an empty
         * array. Same behavior as minimatch.
         */
        nonull?: boolean | undefined;
        /**
         * Cache the platform (e.g. win32) to prevent this from being looked up for every file path.
         */
        cache?: boolean | undefined;
    }

    interface Glob {
        options: micromatch.Options;
        pattern: string;
        history: { msg: any; pattern: string }[];
        tokens: parseGlob.Result;
        orig: string;
        negated: boolean;

        /**
         * Initialize defaults.
         */
        init(pattern: string): void;

        /**
         * Push a change into `glob.history`. Useful for debugging.
         */
        track(msg: any): void;

        /**
         * Return true if `glob.pattern` was negated with `!`, also remove the `!` from the pattern.
         */
        isNegated(): boolean;

        /**
         * Expand braces in the given glob pattern.
         */
        braces(): void;

        /**
         * Expand bracket expressions in `glob.pattern`.
         */
        brackets(): void;

        /**
         * Expand extended globs in `glob.pattern`.
         */
        extglob(): void;

        /**
         * Parse the given pattern.
         */
        parse(pattern: string): parseGlob.Result;

        /**
         * Escape special characters in the given string.
         */
        escape(pattern: string): string;

        /**
         * Unescape special characters in the given string.
         */
        unescape(pattern: string): string;
    }

    interface GlobData {
        pattern: string;
        tokens: parseGlob.Result;
        options: micromatch.Options;
    }
}

interface Micromatch {
    (files: string | string[], patterns: micromatch.Pattern | micromatch.Pattern[]): string[];

    isMatch: {
        /**
         * Returns true if a file path matches the given pattern.
         */
        (filePath: string, pattern: micromatch.Pattern, opts?: micromatch.Options): boolean;
        /**
         * Returns a function for matching.
         */
        (filePath: string, opts?: micromatch.Options): micromatch.MatchFunction<string>;
    };

    /**
     * Returns true if any part of a file path matches the given pattern. Think of this as "has path" versus
     * "is path".
     */
    contains(filePath: string, pattern: micromatch.Pattern, opts?: micromatch.Options): boolean;

    /**
     * Returns a function for matching using the supplied pattern. e.g. create your own "matcher". The advantage of
     * this method is that the pattern can be compiled outside of a loop.
     */
    matcher(pattern: micromatch.Pattern): micromatch.MatchFunction<string>;

    /**
     * Returns a function that can be passed to Array#filter().
     */
    filter(
        patterns: micromatch.Pattern | micromatch.Pattern[],
        opts?: micromatch.Options,
    ): micromatch.MatchFunction<any>;

    /**
     * Returns true if a file path matches any of the given patterns.
     */
    any(filePath: string, patterns: micromatch.Pattern | micromatch.Pattern[], opts?: micromatch.Options): boolean;

    /**
     * Returns an object with a regex-compatible string and tokens.
     */
    expand(pattern: string, opts?: micromatch.Options): micromatch.Glob | micromatch.GlobData;

    /**
     * Create a regular expression for matching file paths based on the given pattern.
     */
    makeRe(pattern: string, opts?: micromatch.Options): RegExp;
}

declare const micromatch: Micromatch;
export = micromatch;
