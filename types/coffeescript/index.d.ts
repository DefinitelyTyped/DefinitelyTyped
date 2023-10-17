import * as Babel from "@babel/core";

/**
 * List of precompiled CoffeeScript file extensions.
 */
export let FILE_EXTENSIONS: [".coffee", ".coffee.md", ".litcoffee"];

/**
 * Version number of the CoffeeScript compiler.
 */
export let VERSION: string;

/**
 * Helpers used internally to compile CoffeeScript code.
 */
export interface helpers {
    /**
     * Polyfill for `Array.prototype.some` used pre-transpilation in the compiler.
     * Determines whether the specified callback function returns true for any
     * element of an array.
     *
     * @param fn Predicate function test for each array element.
     * @returns Whether one or more elements return `true` when passed to
     *   the predicate `fn(...)`.
     */
    some:
        | typeof Array.prototype.some
        | ((this: any[], predicate: (value: any) => unknown) => boolean);
    /**
     * Peek at the start of a given string to see if it matches a sequence.
     *
     * @param string Target string to check the prefix literal against.
     * @param literal Literal string to use for the prefix check.
     * @param start Zero-indexed starting position of the prefix.
     *   The offset preceding the first character of the string is `0`.
     * @returns Whether the `literal` prefix is found in `string`
     *   at the provided `start` position.
     */
    starts(string: string, literal: string, start: number): boolean;
    /**
     * Peek at the end of a given string to see if it matches a sequence.
     *
     * @param string Target string to check the suffix literal against.
     * @param literal Literal string to use for the suffix check.
     * @param [back=0] Zero-indexed backtracking position of the prefix.
     *   The offset following the last character of the string is `0`.
     * @returns Whether the `literal` suffix is found in `string`
     *   at the backtracking position or end of the string.
     */
    ends(string: string, literal: string, back?: number): boolean;
    /**
     * Repeat a string `n` times.
     * Uses a clever algorithm to have O(log(n)) string concatenation operations.
     *
     * @param str String to repeat.
     * @param n 1-indexed number of repetitions.
     * @returns Repeated string.
     */
    repeat(str: string, n: number): string;
    /**
     * Trim out all falsy values from an array.
     *
     * @param array Array of boolean-operator indeterminate values.
     * @returns Array of truthy values.
     */
    compact(array: any[]): any[];
    /**
     * Count the number of occurrences of a search string in another string.
     *
     * @param string Target string to search.
     * @param substring Search string to compute against target.
     * @returns Number of times the search string appears in the
     *   target string.
     */
    count(string: string, substr: string): number;
    /**
     * Merge objects, returning a fresh copy with attributes from both sides.
     * Used every time `CoffeeScript.compile` is called, to allow properties in the
     * options hash to propagate down the tree without polluting other branches.
     *
     * @param options  Original, target object for merge operation.
     * @param overrides Map of override key-values for merge operation.
     * @returns Cloned object that merges `options` with `overrides`. The
     *   `overrides` properties have a higher merge priority than `options` properties.
     */
    merge(options: object, overrides: object): object;
    /**
     * Extend a source object with the properties of another object (shallow copy).
     *
     * @param object Target object to extend.
     * @param properties Source object to extend the source object.
     * @returns The original `object` extended by the `properties` object.
     */
    extend(object: object, properties: object): object;
    /**
     * Flattens an array recursively.
     * Handy for getting a list of descendants from the nodes.
     *
     * @param array Array containing array and non-array elements.
     * @returns A flattened version of the array with an array depth of `0`.
     */
    flatten(array: any[]): any[];
    /**
     * Delete a key from an object, returning the value. Useful when a node is
     * looking for a particular method in an options hash.
     *
     * @param obj Object to delete a key from.
     * @param key Target key of object for the deletion operation.
     * @returns The value of the deleted object entry.
     */
    del(obj: object, key: any): any;
    /**
     * Helper function for extracting code from Literate CoffeeScript by stripping
     * out all non-code blocks, producing a string of CoffeeScript code that can
     * be compiled "normally."
     *
     * @param code Literate CoffeeScript code to extract code blocks from.
     * @returns CoffeeScript code without surrounding Markdown documentation.
     */
    invertLiterate(code: string): string;
    /**
     * Build a list of all comments attached to tokens.
     *
     * @param tokens Collection of CoffeeScript abstract
     *   syntax tree tokens, all sorted by source order.
     * @returns List of comment strings present in CoffeeScript AST.
     */
    extractAllCommentTokens(tokens: ASTNode[]): string[];
    /**
     * Build a dictionary of token comments organized by tokens’ locations
     * used as lookup hashes.
     *
     * Though multiple tokens can have the same location hash, using exclusive
     * location data allows to distinguish between zero-length generated tokens and
     * actual source tokens, for example.
     *
     * The ranges for "overlapping" tokens with the same location data and
     * and matching token hashes are merged into one array.
     *
     * If there are duplicate comments, they will get sorted out later.
     *
     * @param tokens List of CoffeeScript abstract syntax
     *   tree tokens with or without comments.
     * @returns Hashmap of token comments vs token location offsets.
     */
    buildTokenDataDictionary(tokens: ASTNode[]): object;
    /**
     * Generates a setter function that updates the location data of an object
     * if it is a CoffeeScript abstract syntax tree node.
     *
     * @param parserState CoffeeScript parser state.
     * @param firstLocationData Location data for first node.
     * @param firstValue Abstract syntax tree for first node.
     * @param lastLocationData Location data for last node.
     * @param lastValue Abstract syntax tree for first node.
     * @param [forceUpdateLocation=true] Whether to override the location data of the
     *   container and child nodes if the container has location data already.
     */
    addDataToNode(
        parserState: object,
        firstLocationData: LocationData,
        firstValue: ASTNode,
        lastLocationData: LocationData,
        lastValue: ASTNode,
        forceUpdateLocation?: boolean,
    ): (obj: any) => any;
    /**
     * Attaches a set of comments to the supplied node.
     *
     * @param comments Collection of comment strings.
     * @param node Node associated with `comments`.
     * @returns The `node` merged with the `comments` array.
     */
    attachCommentsToNode(comments: string[], node: ASTNode): any;
    /**
     * Convert JISON location data to a string.
     *
     * @param obj Token or `CoffeeScriptASTLocationData` object.
     * @returns String representation of location data.
     */
    locationDataToString(obj: LocationData | ASTNode): string;
    /**
     * A `.coffee.md` compatible version of `path.basename`.
     *
     * @param file File name path. Can be relative, absolute or missing a directory.
     * @param [stripExt=false] Whether to strip the file extension in the output.
     * @param [useWinPathSep=false] Whether to  use the Windows path separator `\`
     *   as well as the Unix path separator `/`.
     * @returns File name without extension.
     */
    baseFileName(file: string, stripExt?: boolean, useWinPathSep?: any): string;
    /**
     * Determine if a filename represents a CoffeeScript file.
     * A CoffeeScript file has the file extensions `.coffee`, `.coffee.md` or
     * `.litcoffee`.
     *
     * @param file Filename without directories.
     * @returns Whether a filename is a CoffeeScript file.
     */
    isCoffee(file: string): boolean;
    /**
     * Determine if a filename represents a Literate CoffeeScript file.
     * A Literate CoffeeScript file has the file extensions `.litcoffee`,
     * or `.coffee.md`.
     *
     * @param file Filename without directories.
     * @returns Whether a filename is a CoffeeScript file.
     */
    isLiterate(file: string): boolean;
    /**
     * Throws a `CoffeeScriptSyntaxError` from a given location.
     * The error's `toString` will return an error message following the "standard"
     * format `<filename>:<line>:<col>: <message>` plus the line with the error and a
     * marker showing where the error is.
     *
     * Instead of showing the compiler's stacktrace, show our custom error message
     * (this is useful when the error bubbles up in Node.js applications that
     * compile CoffeeScript for example).
     *
     * @throws Error object with location data and string
     *   representation.
     */
    throwSyntaxError(message: any, location: any): never;
    /**
     * Update a compiler `SyntaxError` with source code information if it didn't have
     * it already.
     *
     * @param error Syntax error with or without source code
     *   information.
     * @param code Source code that produced the syntax error.
     * @param filename File name for invalid CoffeeScript resource.
     * @returns Syntax error with source code.
     */
    updateSyntaxError(error: any, code: string, filename: string): any;
    /**
     * Maps a whitespace character to a character name.
     *
     * @param Single-character string.
     * @returns Human-readable identifier for whitespace character, or the
     * `string` parameter.
     */
    nameWhitespaceCharacter(string: any): string;
    /**
     * Parses a CoffeeScript number string to a primitive JS number.
     *
     * @param string String representation of a number.
     * @returns Parsed float or integer corresponding to number.
     */
    parseNumber(string: string): number;
    /**
     * Checks if a value is a function.
     *
     * @param obj JavaScript value to check.
     * @returns True if `obj` is a function.
     */
    isFunction(obj: any): boolean;
    /**
     * Checks if a value is a number.
     *
     * @param obj JavaScript value to check.
     * @returns True if `obj` is a number.
     */
    isNumber(obj: any): boolean;
    /**
     * Checks if an value is a string.
     *
     * @param obj JavaScript value to check.
     * @returns True if `obj` is a string.
     */
    isString(obj: any): boolean;
    /**
     * Checks if an value is a primitive boolean or `Boolean` instance.
     *
     * @param obj JavaScript value to check.
     * @returns True if `obj` is a boolean.
     */
    isBoolean(obj: any): boolean;
    /**
     * Checks if an value is a literal JS object - `{}`.
     *
     * @param obj JavaScript value to check.
     * @returns True if `obj` is a literal JS object.
     */
    isPlainObject(obj: any): boolean;
    /**
     * Replace `\u{...}` with `\uxxxx[\uxxxx]` in regexes without the `u` flag.
     *
     * @param str String that may contain Unicode brace syntax - `\u{...}`.
     * @param options Options for Unicode replacement.
     * @param [options.delimiter]
     *   Separator between two Unicode characters in `str` parameter of
     *   `coffeescript.helpers.replaceUnicodeCodePointEscapes`.
     * @param [options.error=unicode code point escapes greater than \\u{10ffff} are not allowed]
     *   Error message if `coffeescript.helpers.replaceUnicodeCodePointEscapes` fails.
     * @param [options.flags]
     *   Which flags are present in the regular expression for the replacement operation.
     *   Must include `u` if provided to support Unicode escapes.
     * @returns RegExp string with Unicode brace groups in the format `\uxxxx[\uxxxx]`.
     */
    replaceUnicodeCodePointEscapes(str: string, options?: ReplaceUnicodeCodePointEscapesOptions): string;
}

/**
 * Transpiles CoffeeScript to legacy, high-compatibility ECMAScript versions using Babel.
 *
 * @param code CoffeeScript code to be compiled.
 * @param options CoffeeScript compiler options.
 * @param options.ast If true, output an abstract syntax tree of the input CoffeeScript source code.
 * @param options.bare If true, omit a top-level IIFE safety wrapper.
 * @param options.filename File name to compile.
 * @param options.header If true, output the `Generated by CoffeeScript` header.
 * @param options.inlineMap If true, output the source map as a base64-encoded string in a comment at the bottom.
 * @param options.sourceMap If true, output a source map object with the code.
 * @param options.transpile Babel transpilation options - see `Babel.TransformOptions`.
 * @returns Babel transpiler result for file.
 */
export function transpile(code: string, options?: Options): Babel.BabelFileResult;

/**
 * Compiles CoffeeScript to JavaScript code, then outputs it as a string.
 *
 * @param code CoffeeScript code to be compiled.
 * @param options CoffeeScript compiler options.
 * @param options.ast If true, output an abstract syntax tree of the input CoffeeScript source code.
 * @param options.bare If true, omit a top-level IIFE safety wrapper.
 * @param options.filename File name to compile.
 * @param options.header If true, output the `Generated by CoffeeScript` header.
 * @param options.inlineMap If true, output the source map as a base64-encoded string in a comment at the bottom.
 * @param options.sourceMap If true, output a source map object with the code.
 * @param options.transpile Babel transpilation options - see `Babel.TransformOptions`.
 * @returns Compiled and unevaluated JavaScript code if `options.sourceMap` is falsy and/or `undefined`.
 * If `options.sourceMap` is `true`, this returns a `{js, v3SourceMap, sourceMap}` object, where `sourceMap` is a
 * `SourceMap` object handy for doing programmatic lookups.
 */
export function compile(code: string, options: SourceMapOptions): CodeWithSourceMap;
export function compile(code: string, options?: Options): string;

/**
 * Parse a string of CoffeeScript code or an array of lexed tokens, and return the AST. You can then compile it by
 * calling `.compile()` on the root, or traverse it by using `.traverseChildren()` with a callback.
 *
 * @param code CoffeeScript code to be compiled.
 * @param options CoffeeScript compiler options.
 * @param options.ast If true, output an abstract syntax tree of the input CoffeeScript source code.
 * @param options.bare If true, omit a top-level IIFE safety wrapper.
 * @param options.filename File name to compile.
 * @param options.header If true, output the `Generated by CoffeeScript` header.
 * @param options.inlineMap If true, output the source map as a base64-encoded string in a comment
 *   at the bottom.
 * @param options.sourceMap If true, output a source map object with the code.
 * @param options.transpile Babel transpilation options - see `Babel.TransformOptions`.
 * @returns Compiled and unevaluated JavaScript code.
 */
export function nodes(code: string, options?: Options): ASTBody;

/**
 * Compiles and executes a CoffeeScript string in the NodeJS environment.
 * Evaluates `__filename` and `__dirname` correctly in order to execute the CoffeeScript input.
 *
 * @param code CoffeeScript code to be compiled.
 * @param options CoffeeScript compiler options.
 * @param options.ast If true, output an abstract syntax tree of the input CoffeeScript source code.
 * @param options.bare If true, omit a top-level IIFE safety wrapper.
 * @param options.filename File name to compile.
 * @param options.header If true, output the `Generated by CoffeeScript` header.
 * @param options.inlineMap If true, output the source map as a base64-encoded string in a comment at the bottom.
 * @param options.sourceMap If true, output a source map object with the code.
 * @param options.transpile Babel transpilation options - see `Babel.TransformOptions`.
 * @returns Output of evaluated CoffeeScript code in the NodeJS environment.
 */
export function run(code: string, options?: Options): any;

/**
 * Compiles and executes a CoffeeScript string in a NodeJS-like browser environment.
 * The CoffeeScript REPL uses this to run the input.
 *
 * @param code CoffeeScript code to be compiled.
 * @param options CoffeeScript compiler options.
 * @param options.ast If true, output an abstract syntax tree of the input CoffeeScript source code.
 * @param options.bare If true, omit a top-level IIFE safety wrapper.
 * @param options.filename File name to compile.
 * @param options.header If true, output the `Generated by CoffeeScript` header.
 * @param options.inlineMap If true, output the source map as a Base64-encoded string in a comment at the bottom.
 * @param options.sourceMap If true, output a source map object with the code.
 * @param options.transpile Babel transpilation options - see `Babel.TransformOptions`.
 * @returns Output of compiled CoffeeScript code.
 */
export interface eval {
    (code: string, options?: Options): any;
} // hack to avoid TS eval call protection

/**
 * Node's module loader, patched to be able to handle multi-dot extensions.
 * This is a horrible thing that should not be required.
 */
export function register(): {
    [path: string]: object;
    (path: string): object;
};

/**
 * Synchronous module definitions for the CoffeeScript library files.
 *
 * @param path Path to CoffeeScript library submodule relative to the `./lib/coffeescript` directory.
 * @returns CoffeeScript library submodule.
 */
export interface require {
    [path: string]: object;
    (path: string): require[keyof require];
}

/**
 * Compiles a raw CoffeeScript file buffer string.
 * Requires UTF-8 character encoding on the `raw` input string.
 * Strip the Unicode byte order mark, if `filename` begins with one.
 *
 * @param raw Raw UTF-8 CoffeeScript file contents.
 * @param filename File name with extension (not including
 *   directories).
 * @param options CoffeeScript compiler
 *   options.
 * @param options.ast If true, output an abstract syntax
 *   tree of the input CoffeeScript source code.
 * @param options.bare If true, omit a top-level IIFE safety
 *   wrapper.
 * @param options.filename File name to compile.
 * @param options.header If true, output the `Generated by CoffeeScript` header.
 * @param options.inlineMap If true, output the source map as a Base64-encoded string in a comment at the bottom.
 * @param options.sourceMap If true, output a source map object with the code.
 */
export function _compileRawFileContent(raw: string, filename: string, options?: Options): string;

/**
 * Reads and compiles a CoffeeScript file using `fs.readFileSync`.
 * NodeJS wrapper around `coffeescript._compileRawFileContent`.
 * Files are decoded as if they are UTF-8 character encoded or compliant with UTF-8.
 *
 * @param raw Raw UTF-8 CoffeeScript file contents.
 * @param filename File name with extension (not including directories).
 * @param options CoffeeScript compiler options.
 * @param options.ast If true, output an abstract syntax tree
 *   of the input CoffeeScript source code.
 * @param options.bare If true, omit a top-level IIFE safety
 *   wrapper.
 * @param options.filename File name to compile.
 * @param options.header If true, output the `Generated by
 *   CoffeeScript` header.
 * @param options.inlineMap If true, output the source map as
 *   a Base64-encoded string in a comment at the bottom.
 * @param options.sourceMap If true, output a source map
 *   object with the code.
 */
export function _compileFile(filename: string, options?: Options): string;

/**
 * CoffeeScript compiler options.
 */
export interface Options {
    /**
     * If true, output an abstract syntax tree of the input CoffeeScript source code.
     */
    ast?: boolean;
    /**
     * If true, omit a top-level IIFE safety wrapper.
     */
    bare?: boolean;
    /**
     * File name to compile - defaults to `index.js`.
     */
    filename?: string;
    /**
     * If true, output the `Generated by CoffeeScript` header.
     */
    header?: boolean;
    /**
     * If true, output the source map as a base64-encoded string in a comment at the bottom.
     */
    inlineMap?: boolean;
    /**
     * If true, output a source map object with the code.
     */
    sourceMap?: boolean;
    /**
     * Babel transpilation options - see `Babel.TransformOptions`.
     */
    transpile?: Babel.TransformOptions;
}

/**
 * CoffeeScript compiler options for source map output.
 * Type for compiler options when `sourceMap` is `true`.
 */
export interface SourceMapOptions {
    /**
     * If true, output an abstract syntax tree of the input CoffeeScript source code.
     */
    ast?: boolean;
    /**
     * If true, omit a top-level IIFE safety wrapper.
     */
    bare?: boolean;
    /**
     * File name to compile - defaults to `index.js`.
     */
    filename?: string;
    /**
     * If true, output the `Generated by CoffeeScript` header.
     */
    header?: boolean;
    /**
     * If true, output the source map as a base64-encoded string in a comment at the bottom.
     */
    inlineMap?: boolean;
    /**
     * Output a source map object with the code.
     */
    sourceMap: true;
    /**
     * Babel transpilation options - see `Babel.TransformOptions`.
     */
    transpile?: Babel.TransformOptions;
}

/**
 * Source location array.
 */
export type SourceLocation = [
    /** Zero-indexed line number. */
    number,
    /** Zero-indexed column number. */
    number,
];

/**
 * Mozilla V3 raw source map.
 */
export interface RawSourceMap {
    /** The generated filename this source map is associated with (optional). */
    file: string;
    /** A string of base64 VLQs which contain the actual mappings. */
    mappings: string;
    /** An array of identifiers which can be referenced by individual mappings. */
    names: string[];
    /** The URL root from which all sources are relative (optional). */
    sourceRoot?: string;
    /** An array of URLs to the original source files. */
    sources: string[];
    /** An array of contents of the original source files (optional). */
    sourcesContent?: string[];
    /** Which version of the source map spec this map is following. */
    version: number;
}

/**
 * Tracker object for line and column positions for a single line.
 * Used to implement the `SourceMap` class.
 */
export interface LineMap {
    columns: Array<{
        column: number;
        line: number;
        sourceColumn: number;
        sourceLine: number;
    }>;
    line: number;
    /**
     * Add source location data to line map.
     *
     * @param column Zero-indexed column number.
     * @param source Source line and column to insert into map.
     * @param options Column insertion options,
     * @param options.noReplace If `true`, column replacement is allowed.
     * @returns Added source location data.
     */
    add: (column: number, source: SourceLocation, options?: { noReplace: boolean }) => SourceLocation | undefined;
    /**
     * Fetch source location data for a specific column.
     *
     * @param column Zero-indexed column number.
     * @returns `[sourceLine, sourceColumn]` if it exists in line map.
     */
    sourceLocation: (column: number) => SourceLocation | void;
}

/**
 * Maps locations.
 */
export interface SourceMap {
    lines: LineMap[];
    /**
     * Adds a mapping to the source map.
     *
     * @param sourceLocation Zero-indexed source location.
     * @param generatedLocation Source line and column to insert into map.
     * @param [options={}] Column insertion options.
     * @param [options.noReplace] If `true`, column replacement is allowed.
     * @returns Added source location data.
     */
    add: (
        sourceLocation: SourceLocation,
        generatedLocation: SourceLocation,
        options?: { noReplace: boolean },
    ) => ReturnType<LineMap["add"]>;
    /**
     * Fetch source location data for a specific column.
     *
     * @param column Zero-indexed column number.
     * @returns `[sourceLine, sourceColumn]` if it exists in line map.
     */
    sourceLocation: (column: number) => SourceLocation | void;
    /**
     * Generates a V3 source map, returning the generated JSON as a string.
     *
     * @param [options={}] Column insertion options
     * @param [options.generatedFile] Property `generatedFile` in source map.
     * @param [options.sourceFiles] Property `sources` in source map.
     * @param [options.sourceRoot] Property `sourceRoot` in source map.
     * @returns Added source location data.
     */
    generate: (column: number, source: SourceLocation, options?: { noReplace: boolean }) => string;
    /**
     * VLQ encoding in reverse byte order.
     *
     * @param value Base-64 encoded value.
     * @returns Reversed VLQ-encoded value.
     * @throws "Cannot Base64 encode value: ${value}"
     */
    encodeVlq: (value: string) => string;
    /**
     * Base-64 encoding for byte number.
     *
     * @param value Byte number in ASCII.
     * @returns Base-64 encoded value or undefined.
     * @throws "Cannot Base64 encode value: ${value}"
     */
    encodeBase64: (value: string) => string;
}

/**
 * Output of `CoffeeScript.compile` when `options.sourceMap` is `true`.
 * Emitted as an object in the form `{js, v3SourceMap, sourceMap}`.
 */
export interface CodeWithSourceMap {
    js: string;
    sourceMap: SourceMap;
    v3SourceMap: ReturnType<SourceMap["generate"]>;
}

/**
 * Acorn.js parser location data object.
 */
export interface AcornLocationData {
    end: number;
    loc: {
        end: {
            line: number;
            column: number;
        };
        start: {
            line: number;
            column: number;
        };
    };
    range: LineMap;
    start: number;
}

/**
 * Jison parser location data object.
 */
export interface JisonLocationData {
    first_column: number;
    first_line: number;
    last_line: number;
    last_column: number;
}

/**
 * CoffeeScript abstract syntax tree location data.
 */
export type LocationData = AcornLocationData | JisonLocationData;

/**
 * Range data interface for CoffeeScript abstract syntax tree nodes.
 */
export interface ASTNodeRange {
    from: ASTNode | null;
    to: ASTNode | null;
    exclusive: boolean;
    equals: string;
    locationData: LocationData;
}

/**
 * CoffeeScript's abstract syntax tree node interfaces with all possible node properties.
 */
export interface ASTNode {
    array?: boolean | ASTNode;
    asKey?: boolean;
    args?: ASTNode[];
    base?: ASTNode;
    body?: ASTBody | ASTNode;
    bound?: boolean;
    boundFuncs?: ASTNode[];
    cases?: ASTNode[][];
    classBody?: boolean;
    comments?: string[];
    condition?: ASTNode;
    context?: string;
    elseBody?: ASTNode | null;
    expression?: ASTNode;
    expressions?: ASTNode[];
    first?: ASTNode;
    flip?: boolean;
    generated?: boolean;
    guard?: ASTNode;
    index?: ASTNode;
    isChain?: boolean;
    isGenerator?: boolean;
    isNew?: boolean;
    isSuper?: boolean;
    locationData: LocationData;
    name?: ASTNode;
    negated?: boolean;
    object?: boolean | ASTNode;
    objects?: ASTNode[];
    operator?: string;
    otherwise?: ASTNode;
    own?: boolean;
    param?: boolean;
    params?: ASTNode[];
    parent?: ASTNode | null;
    pattern?: boolean;
    properties?: ASTNode[];
    range?: boolean | ASTNodeRange[];
    returns?: boolean;
    subject?: ASTNode;
    second?: ASTNode;
    soak?: boolean;
    source?: ASTNode;
    subpattern?: boolean;
    this?: boolean;
    val?: string;
    value?: ASTNode | string;
    variable?: ASTNode;
}

/**
 * Container interface for CoffeeScript abstract syntax trees.
 */
export interface ASTBody {
    classBody?: boolean;
    expressions: ASTNode[] | [];
    locationData: LocationData;
}

/**
 * Syntax error thrown by CoffeeScript compiler.
 */
export interface SyntaxError {
    /** Source code that generated the `coffee` compiler error */
    code?: string;
    /** File name for invalid CoffeeScript resource. */
    filename?: string;
    /** Starting and ending location data. */
    location: LocationData;
    /** String representation of syntax error. */
    stack: ReturnType<SyntaxError["toString"]>;
    /** Stack trace generator for error. */
    toString: () => string;
}

/**
 * Options for `coffeescript.helpers.replaceUnicodeCodePointEscapes`.
 */
export interface ReplaceUnicodeCodePointEscapesOptions {
    /**
     * Separator between two Unicode characters in `str` parameter of
     * `coffeescript.helpers.replaceUnicodeCodePointEscapes`.
     */
    error?: string;
    /**
     * Error message if `coffeescript.helpers.replaceUnicodeCodePointEscapes` fails.
     * Default: `unicode code point escapes greater than \\u{10ffff} are not allowed`.
     */
    flags?: string;
    /**
     * Which flags are present in the regular expression for the replacement operation.
     * Must include `u` if provided to support Unicode escapes.
     */
    delimiter?: string;
}

export {};
