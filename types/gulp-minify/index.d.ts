/// <reference types="node"/>

interface minify {
    (options?: Options): NodeJS.ReadWriteStream;
}

interface Options {
    /**
     * An object that specifies output src and minified file extensions.
     */
    ext?: {
        /**
         * The suffix string of the filenames that output source files ends with.
         */
        src?: string | undefined;

        /**
         * The suffix string of the filenames that output minified files ends with or the regex expressions to be replaced with input filenames.
         */
        min?: string | string[] | undefined;
    } | undefined;

    /**
     * Will not minify files in the dirs.
     */
    exclude?: string[] | undefined;

    /**
     * If true, will not output the source code in the dest dirs.
     */
    noSource?: boolean | undefined;

    /**
     * Will not minify files which matches the pattern.
     */
    ignoreFiles?: string[] | undefined;

    /**
     * If true, will mangle variable names.
     */
    mangle?: boolean | undefined;

    /**
     * Pass an object if you wish to specify additional output options.The defaults are optimized for best compression.
     */
    output?: {
        /**
         * Start indentation on every line (only when `beautify`)
         */
        indent_start?: number | undefined;

        /**
         * Indentation level (only when `beautify`)
         */
        indent_level?: number | undefined;

        /**
         * Quote all keys in object literals?
         */
        quote_keys?: false | undefined;

        /**
         * Add a space after colon signs?
         */
        space_colon?: boolean | undefined;

        /**
         * Output ASCII-safe? (encodes Unicode characters as ASCII)
         */
        ascii_only?: boolean | undefined;

        /**
         * Escape "</script"?
         */
        inline_script?: boolean | undefined;

        /**
         * Informative maximum line width (for beautified output)
         */
        width?: 80 | undefined;

        /**
         * Maximum line length (for non-beautified output)
         */
        max_line_len?: 32000 | undefined;

        /**
         * Beautify output?
         */
        ie_proof?: boolean | undefined;

        /**
         * Beautify output?
         */
        beautify?: boolean | undefined;

        /**
         * Output a source map
         */
        source_map?: boolean | undefined;

        /**
         * Use brackets every time?
         */
        bracketize?: boolean | undefined;

        /**
         * Output comments?
         */
        comments?: boolean | undefined;

        /**
         * Use semicolons to separate statements? (otherwise, newlines)
         */
        semicolons?: boolean | undefined;
    } | undefined;

    /**
     * Pass an object to specify custom compressor options. Pass false to skip compression completely.
     */
    compress?:
        | {
            /**
             * join consecutive statemets with the “comma operator”
             */
            sequences?: boolean | undefined;

            /**
             * optimize property access?: a["foo"] → a.foo
             */
            properties?: boolean | undefined;

            /**
             * discard unreachable code
             */
            dead_code?: boolean | undefined;

            /**
             * discard “debugger” statements
             */
            drop_debugger?: boolean | undefined;

            /**
             * some unsafe optimizations (see below)
             */
            unsafe?: boolean | undefined; //

            /**
             * optimize if-s and conditional expressions
             */
            conditionals?: boolean | undefined;

            /**
             * optimize comparisons
             */
            comparisons?: boolean | undefined;

            /**
             * optimize boolean expressions
             */
            evaluate?: boolean | undefined;

            /**
             * optimize boolean expressions
             */
            booleans?: boolean | undefined;

            /**
             * optimize loops
             */
            loops?: boolean | undefined;

            /**
             * drop unused variables/functions
             */
            unused?: boolean | undefined;

            /**
             * hoist function declarations
             */
            hoist_funs?: boolean | undefined;

            /**
             * hoist variable declarations
             */
            hoist_vars?: boolean | undefined; // hoist variable declarations

            /**
             * optimize if-s followed by return/continue
             */
            if_return?: boolean | undefined;

            /**
             * join var declarations
             */
            join_vars?: boolean | undefined;

            /**
             * try to cascade `right` into `left` in sequences
             */
            cascade?: boolean | undefined;

            /**
             * drop side-effect-free statements
             */
            side_effects?: boolean | undefined;

            /**
             * warn about potentially dangerous optimizations/code
             */
            warnings?: boolean | undefined;

            /**
             * global definitions
             */
            global_defs?: {} | undefined;
        }
        | boolean
        | undefined;

    /**
     * A convenience option for options.output.comments. Defaults to preserving no comments.
     *
     * * **all**: Preserve all comments in code blocks.
     *
     * * **some**: preserve comments that start with a bang(!) or include a Closure Compiler directive(@preserve, @license, @cc_on).
     *
     * * **function**: specify your own comment preservation function. You will be passed the current node and the current comment and are expected to return a boolean.
     */
    preserveComments?: "all" | "some" | ((node?: any, comment?: any) => boolean) | undefined;
}

declare var minify: minify;
export = minify;
