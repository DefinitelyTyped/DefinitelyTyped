import * as pacote from "pacote";

declare namespace libnpmdiff {
    /**
     * `npm` spec types are usually described in `<pkg-name>@<version>` form
     * but multiple other types are alsos supported, for more info on valid specs
     * take a look at [`npm-package-arg`](https://github.com/npm/npm-package-arg)
     */
    type Specs = [string, string];

    interface DiffOptions {
        /**
         * Should add ANSI colors to string ouput?
         *
         * Default: `false`
         *
         * ## Read more
         * * https://github.com/npm/libnpmdiff#api
         * *  [ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)
         */
        color?: boolean;

        /**
         * What prefix should be used to define version numbers.
         *
         * Default: `'v'`
         *
         * ## Read more
         * * https://github.com/npm/libnpmdiff#api
         */
        tagVersionPrefix?: string;

        /**
         *  If set only prints patches for the files listed in this array
         * (also accepts globs).
         *
         * Defaults: `undefined`
         *
         * ### Read more
         * * https://github.com/npm/libnpmdiff#api
         */
        diffFiles?: string[];

        /**
         * Prints only filenames
         *
         * Default: `false`
         *
         * ### Read more
         * * https://github.com/npm/libnpmdiff#api
         * * https://docs.npmjs.com/cli/v7/commands/npm-diff#diff-name-only
         */
        diffNameOnly?: boolean;

        /**
         * The number of lines of context to return.
         *
         * Default: `3`
         *
         * ### Read more
         *  * https://github.com/npm/libnpmdiff#api
         *  * https://docs.npmjs.com/cli/v7/commands/npm-diff#diff-unified
         */
        diffUnified?: number;

        /**
         * Ignore whitespace when comparing lines
         *
         * Default: `false`
         *
         * ### Read more
         * * https://docs.npmjs.com/cli/v7/commands/npm-diff#diff-ignore-all-space
         */
        diffIgnoreAllSpace?: boolean;

        /**
         * Do not show any source or destination prefix in output.
         *
         * > Note: This causes `libnpmdiff` to ignore `diffSrcPrefix` and `diffDstPrefix` options.
         *
         * ### Read more
         * * https://github.com/npm/libnpmdiff#api
         * * https://docs.npmjs.com/cli/v7/commands/npm-diff#diff-no-prefix
         */
        diffNoPrefix?: boolean;

        /**
         * Source prefix to be used in output.
         *
         * Default: `"a/"`
         *
         * ### Read more
         * * https://github.com/npm/libnpmdiff#api
         * * https://docs.npmjs.com/cli/v7/commands/npm-diff#diff-src-prefix
         */
        diffSrcPrefix?: string;

        /**
         * Destination prefix to be used in output.
         *
         * Default: `"b/"`
         *
         * ### Read more
         * * https://github.com/npm/libnpmdiff#api
         * * https://docs.npmjs.com/cli/v7/commands/npm-diff#diff-dst-prefix
         */
        diffDstPrefix?: string;
    }

    /**
     * Options for `libnpmdiff`.
     *
     * ### Read more
     * * https://github.com/npm/libnpmdiff#api
     */
    interface Options extends pacote.Options, DiffOptions {}
}

/**
 * Fetches the registry tarballs and compare files between a spec a and spec b.
 *
 * Returns a Promise that fullfils with a String containing the resulting patch diffs.
 *
 * Throws an error if either `a` or `b` are missing or if trying to diff more than two specs.
 *
 * ### Read more
 * * https://github.com/npm/libnpmdiff#api
 */
declare function libnpmdiff(
    /**
     * `npm` spec types are usually described in `<pkg-name>@<version>` form
     * but multiple other types are alsos supported, for more info on valid specs
     * take a look at [`npm-package-arg`](https://github.com/npm/npm-package-arg)
     */
    specs: libnpmdiff.Specs,
    /**
     * Options for `libnpmdiff`.
     *
     * ### Read more
     * * https://github.com/npm/libnpmdiff#api
     */
    options?: libnpmdiff.Options,
): Promise<string>;

export = libnpmdiff;
