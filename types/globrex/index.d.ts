// Type definitions for globrex 0.1
// Project: https://github.com/terkelg/globrex#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Transform globs into regular expressions.
 * {@link: https://github.com/terkelg/globrex#api}
 * @param glob - Glob string to transform.
 * @param options - transform options
 */
declare function globrex(glob: string, options?: globrex.Options): globrex.Results;

declare namespace globrex {
    interface Results {
        /** This property only exists if the option `filepath` is true. */
        path?: Path | undefined;
        /** JavaScript RegExp instance. */
        regex: RegExp;
    }

    interface Path {
        /**
         * Array of RegExp instances separated by /.
         * This can be usable when working with file paths or urls.
         * ```js
         * [ /^foo$/, /^bar$/, /^([^\/]*)$/, '^baz\\.(md|js|txt)$' ]
         * ```
         */
        segments: RegExp[];
        /**
         * String representation of the RegExp
         */
        string: string;
        /**
         * JavaScript RegExp instance build for testing against paths.
         * The regex have different path separators depending on host OS.
         */
        regex: RegExp;
    }

    interface Options {
        /**
         * Enable all advanced features from extglob.
         * Matching so called "extended" globs pattern like single character matching,
         * matching ranges of characters, group matching, etc.
         * Note: Interprets [a-d] as [abcd].
         * To match a literal -, include it as first or last character.
         * @default false
         */
        extended?: boolean | undefined;
        /**
         * When `globstar` is false globs like '/foo/*' are transformed to the following '^\/foo\/.*$'
         * which will match any string beginning with '/foo/'
         * When the globstar option is true, the same '/foo/*'
         * glob is transformed to '^\/foo\/[^/]*$' which will match any string beginning with '/foo/'
         * that does not have a '/' to the right of it. '/foo/*' will match: '/foo/bar', '/foo/bar.txt' but not '/foo/bar/baz' or '/foo/bar/baz.txt'.
         * Note: When globstar is true, '/foo/**' is equivalent to '/foo/*' when globstar is false
         * @default false
         */
        globstar?: boolean | undefined;
        /**
         * Be forgiving about multiple slashes, like /// and make everything after the first / optional
         * This is how bash glob works.
         * @default false
         */
        strict?: boolean | undefined;
        /**
         * RegExp flags (e.g. `'i'` ) to pass to the RegExp constructor.
         * @default ''
         */
        flags?: string | undefined;
        /**
         * Parse input strings as it was a file path for special path related features.
         * This feature only makes sense if the input is a POSIX path like /foo/bar/hello.js or URLs.
         * When true the returned object will have an additional path object.
         * @default false
         */
        filepath?: boolean | undefined;
    }
}

export = globrex;
