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
        preserverComments?: string|((node: any, comment: ITokenizer) => boolean);
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
    
    interface ITokenizer {
        /**
         * The type of this token.
         * Can be "num", "string", "regexp", "operator", "punc", "atom", "name", "keyword", "comment1" or "comment2".
         * "comment1" and "comment2" are for single-line, respectively multi-line comments.
         */
        type: string;
        
        /**
         * The name of the file where this token originated from. Useful when compressing multiple files at once to generate the proper source map.
         */
        file: string;
        
        /**
         * The "value" of the token.
         * That's additional information and depends on the token type: "num", "string" and "regexp" tokens you get their literal value.
         * - For "operator" you get the operator.
         * - For "punc" it's the punctuation sign (parens, comma, semicolon etc).
         * - For "atom", "name" and "keyword" it's the name of the identifier
         * - For comments it's the body of the comment (excluding the initial "//" and "/*".
         */
        value: string;
        
        /**
         * The line number of this token in the original code.
         * 1-based index.
         */
        line: number;
        
        /**
         * The column number of this token in the original code.
         * 0-based index.
         */
        col: number;
        
        /**
         * Short for "newline before", it's a boolean that tells us whether there was a newline before this node in the original source. It helps for automatic semicolon insertion.
         * For multi-line comments in particular this will be set to true if there either was a newline before this comment, or * * if this comment contains a newline.
         */
        nlb: boolean;
        
        /**
         * This doesn't apply for comment tokens, but for all other token types it will be an array of comment tokens that were found before.
         */
        comments_before: string[];
    }
    namespace GulpUglify {}
    export = GulpUglify;
}
