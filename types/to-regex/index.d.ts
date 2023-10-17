declare namespace toRegex {
    interface Options {
        /**
         * Generate a regex that will match any string that contains the given
         * pattern. By default, regex is strict will only return true for
         * exact matches.
         */
        contains?: boolean;

        /**
         * Create a regex that will match everything except the given pattern.
         */
        negate?: boolean;

        /**
         * Adds the i flag, to enable case-insensitive matching.
         */
        nocase?: boolean;

        /**
         * Define the flags you want to use on the generated regex.
         */
        flags?: string;

        /**
         * Generated regex is cached based on the provided string and options.
         * As a result, runtime compilation only happens once per pattern (as
         * long as options are also the same), which can result in dramatic
         * speed improvements.
         *
         * This also helps with debugging, since adding options and pattern
         * are added to the generated regex.
         * @default true
         */
        cache?: boolean;

        /**
         * Check the generated regular expression with safe-regex and throw an
         * error if the regex is potentially unsafe.
         */
        safe?: boolean;
    }

    /**
     * Create a regular expression from the given `pattern` string.
     */
    function makeRe(pattern: string | RegExp, options?: Options): RegExp;
}

/**
 * Create a regular expression from the given `patterns` string.
 */
declare function toRegex(patterns: string | ReadonlyArray<string> | RegExp, options?: toRegex.Options): RegExp;

export = toRegex;
