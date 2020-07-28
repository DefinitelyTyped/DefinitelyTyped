// Type definitions for gulp-minify 3.1
// Project: https://github.com/hustxiaoc/gulp-minify
// Definitions by: Elias Skogevall <https://github.com/tscpp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        src?: string;

        /**
         * The suffix string of the filenames that output minified files ends with or the regex expressions to be replaced with input filenames.
         */
        min?: string | string[];
    };

    /**
     * Will not minify files in the dirs.
     */
    exclude?: string[];

    /**
     * If true, will not output the source code in the dest dirs.
     */
    noSource?: boolean;

    /**
     * Will not minify files which matches the pattern.
     */
    ignoreFiles?: string[];

    /**
     * If true, will mangle variable names.
     */
    mangle?: boolean;

    /**
     * Pass an object if you wish to specify additional output options.The defaults are optimized for best compression.
     */
    output?: {
        /**
         * Start indentation on every line (only when `beautify`)
         */
        indent_start?: number;

        /**
         * Indentation level (only when `beautify`)
         */
        indent_level?: number;

        /**
         * Quote all keys in object literals?
         */
        quote_keys?: false;

        /**
         * Add a space after colon signs?
         */
        space_colon?: boolean;

        /**
         * Output ASCII-safe? (encodes Unicode characters as ASCII)
         */
        ascii_only?: boolean;

        /**
         * Escape "</script"?
         */
        inline_script?: boolean;

        /**
         * Informative maximum line width (for beautified output)
         */
        width?: 80;

        /**
         * Maximum line length (for non-beautified output)
         */
        max_line_len?: 32000;

        /**
         * Beautify output?
         */
        ie_proof?: boolean;

        /**
         * Beautify output?
         */
        beautify?: boolean;

        /**
         * Output a source map
         */
        source_map?: boolean;

        /**
         * Use brackets every time?
         */
        bracketize?: boolean;

        /**
         * Output comments?
         */
        comments?: boolean;

        /**
         * Use semicolons to separate statements? (otherwise, newlines)
         */
        semicolons?: boolean;
    };

    /**
     * Pass an object to specify custom compressor options. Pass false to skip compression completely.
     */
    compress?:
    | {
        /**
         * join consecutive statemets with the “comma operator”
         */
        sequences?: boolean;

        /**
         * optimize property access?: a["foo"] → a.foo
         */
        properties?: boolean;

        /**
         * discard unreachable code
         */
        dead_code?: boolean;

        /**
         * discard “debugger” statements
         */
        drop_debugger?: boolean;

        /**
         * some unsafe optimizations (see below)
         */
        unsafe?: boolean; //

        /**
         * optimize if-s and conditional expressions
         */
        conditionals?: boolean;

        /**
         * optimize comparisons
         */
        comparisons?: boolean;

        /**
         * optimize boolean expressions
         */
        evaluate?: boolean;

        /**
         * optimize boolean expressions
         */
        booleans?: boolean;

        /**
         * optimize loops
         */
        loops?: boolean;

        /**
         * drop unused variables/functions
         */
        unused?: boolean;

        /**
         * hoist function declarations
         */
        hoist_funs?: boolean;

        /**
         * hoist variable declarations
         */
        hoist_vars?: boolean; // hoist variable declarations

        /**
         * optimize if-s followed by return/continue
         */
        if_return?: boolean;

        /**
         * join var declarations
         */
        join_vars?: boolean;

        /**
         * try to cascade `right` into `left` in sequences
         */
        cascade?: boolean;

        /**
         * drop side-effect-free statements
         */
        side_effects?: boolean;

        /**
         * warn about potentially dangerous optimizations/code
         */
        warnings?: boolean;

        /**
         * global definitions
         */
        global_defs?: {};
    }
    | boolean;

    /**
     * A convenience option for options.output.comments. Defaults to preserving no comments.
     *
     * * **all**: Preserve all comments in code blocks.
     *
     * * **some**: preserve comments that start with a bang(!) or include a Closure Compiler directive(@preserve, @license, @cc_on).
     *
     * * **function**: specify your own comment preservation function. You will be passed the current node and the current comment and are expected to return a boolean.
     */
    preserveComments?: 'all' | 'some' | ((node?: any, comment?: any) => boolean);
}

declare var minify: minify;
export = minify;
