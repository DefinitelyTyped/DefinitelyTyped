// Type definitions for babel-generator 6.25
// Project: https://github.com/babel/babel/tree/master/packages/babel-generator, https://babeljs.io
// Definitions by: Troy Gerwien <https://github.com/yortus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as t from 'babel-types';

/**
 * Turns an AST into code, maintaining sourcemaps, user preferences, and valid output.
 * @param ast - the abstract syntax tree from which to generate output code.
 * @param opts - used for specifying options for code generation.
 * @param code - the original source code, used for source maps.
 * @returns - an object containing the output code and source map.
 */
export default function generate(ast: t.Node, opts?: GeneratorOptions, code?: string | {[filename: string]: string}): GeneratorResult;

export interface GeneratorOptions {
    /**
     * Optional string to add as a block comment at the start of the output file.
     */
    auxiliaryCommentBefore?: string | undefined;

    /**
     * Optional string to add as a block comment at the end of the output file.
     */
    auxiliaryCommentAfter?: string | undefined;

    /**
     * Function that takes a comment (as a string) and returns true if the comment should be included in the output.
     * By default, comments are included if `opts.comments` is `true` or if `opts.minifed` is `false` and the comment
     * contains `@preserve` or `@license`.
     */
    shouldPrintComment?(comment: string): boolean;

    /**
     * Attempt to use the same line numbers in the output code as in the source code (helps preserve stack traces).
     * Defaults to `false`.
     */
    retainLines?: boolean | undefined;

    /**
     * Should comments be included in output? Defaults to `true`.
     */
    comments?: boolean | undefined;

    /**
     * Set to true to avoid adding whitespace for formatting. Defaults to the value of `opts.minified`.
     */
    compact?: boolean | 'auto' | undefined;

    /**
     * Should the output be minified. Defaults to `false`.
     */
    minified?: boolean | undefined;

    /**
     * Set to true to reduce whitespace (but not as much as opts.compact). Defaults to `false`.
     */
    concise?: boolean | undefined;

    /**
     * The type of quote to use in the output. If omitted, autodetects based on `ast.tokens`.
     */
    quotes?: 'single' | 'double' | undefined;

    /**
     * Used in warning messages
     */
    filename?: string | undefined;

    /**
     * Enable generating source maps. Defaults to `false`.
     */
    sourceMaps?: boolean | undefined;

    /**
     * The filename of the generated code that the source map will be associated with.
     */
    sourceMapTarget?: string | undefined;

    /**
     * A root for all relative URLs in the source map.
     */
    sourceRoot?: string | undefined;

    /**
     * The filename for the source code (i.e. the code in the `code` argument).
     * This will only be used if `code` is a string.
     */
    sourceFileName?: string | undefined;

    /**
     * Set to true to run jsesc with "json": true to print "\u00A9" vs. "©";
     */
    jsonCompatibleStrings?: boolean | undefined;
}

export interface GeneratorResult {
    map: {};
    code: string;
}
