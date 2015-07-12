// Type definitions for gulp-uglify
// Project: https://github.com/terinjokes/gulp-uglify
// Definitions by: Christopher Haws <https://github.com/ChristopherHaws/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-uglify" {
    function GulpUglify(options?: IGulpUglifyOptions): NodeJS.ReadWriteStream;

    interface IGulpUglifyOptions {
        /**
         * Pass false to skip mangling names.
         */
        mangle?: boolean;

        /**
         * Pass if you wish to specify additional output options. The defaults are optimized for best compression.
         */
        output?: IOutputOptions;

        /**
         * Pass an object to specify custom compressor options. Pass false to skip compression completely.
         */
        compress?: boolean;

        /**
         * A convenience option for options.output.comments. Defaults to preserving no comments.
         * all - Preserve all comments in code blocks
         * some - Preserve comments that start with a bang (!) or include a Closure Compiler directive (@preserve, @license, @cc_on)
         * function - Specify your own comment preservation function. You will be passed the current node and the current comment and are expected to return either true or false.
         */
        preserverComments?: string|((node, comment) => boolean);
    }

    interface IOutputOptions {
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
        quote_keys?: boolean;

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
        width?: number;

        /**
         * Maximum line length (for non-beautified output)
         */
        max_line_len?: number;

        /**
         * Output IE-safe code?
         */
        ie_proof?: boolean;

        /**
         * Beautify output?
         */
        beautify?: boolean;

        /**
         * Output a source map
         */
        source_map?: ISourceMapOptions;

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
    }

    interface ISourceMapOptions {
        /**
         * The compressed file name
         */
        file?: string;
        /**
         * The root URL to the original sources
         */
        root?: string;

        /**
         * The input source map.
         * Useful when you compress code that was generated from some other source (possibly other programming language).
         * If you have an input source map, pass it in this argument and UglifyJS will generate a mapping that maps back
         * to the original source (as opposed to the compiled code that you are compressing).
         */
        orig? :Object|JSON;
    }

    export = GulpUglify;
}