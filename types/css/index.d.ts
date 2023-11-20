/**
 * CSS parser / stringifier for Node.js
 */

/**
 * css.parse options
 */
export interface ParserOptions {
    /** Silently fail on parse errors */
    silent?: boolean | undefined;
    /** The path to the file containing css. Makes errors and source maps more helpful, by letting them know where code comes from. */
    source?: string | undefined;
}

/**
 * css.stringify options
 */
export interface StringifyOptions {
    /** The string used to indent the output. Defaults to two spaces. */
    indent?: string | undefined;
    /** Omit comments and extraneous whitespace. */
    compress?: boolean | undefined;
    /** Return a sourcemap along with the CSS output.
     * Using the source option of css.parse is strongly recommended
     * when creating a source map. Specify sourcemap: 'generator'
     * to return the SourceMapGenerator object instead of serializing the source map.
     */
    sourcemap?: string | undefined;
    /** (enabled by default, specify false to disable)
     *  Reads any source maps referenced by the input files
     * when generating the output source map. When enabled,
     * file system access may be required for reading the referenced source maps.
     */
    inputSourcemaps?: boolean | undefined;
}

/**
 * Error thrown during parsing.
 */
export interface ParserError {
    /** The full error message with the source position. */
    message?: string | undefined;
    /** The error message without position. */
    reason?: string | undefined;
    /** The value of options.source if passed to css.parse. Otherwise undefined. */
    filename?: string | undefined;
    line?: number | undefined;
    column?: number | undefined;
    /** The portion of code that couldn't be parsed. */
    source?: string | undefined;
}

// ---------------------------------------------------------------------------------
// AST Tree
// ---------------------------------------------------------------------------------

/**
 * Information about a position in the code.
 * The line and column numbers are 1-based: The first line is 1 and the first column of a line is 1 (not 0).
 */
export interface Position {
    line?: number | undefined;
    column?: number | undefined;
}

/**
 * Base AST Tree Node.
 */
export interface Node {
    /** The possible values are the ones listed in the Types section on https://github.com/reworkcss/css page. */
    type?: string | undefined;
    /** A reference to the parent node, or null if the node has no parent. */
    parent?: Node | undefined;
    /** Information about the position in the source string that corresponds to the node. */
    position?: {
        start?: Position | undefined;
        end?: Position | undefined;
        /** The value of options.source if passed to css.parse. Otherwise undefined. */
        source?: string | undefined;
        /** The full source string passed to css.parse. */
        content?: string | undefined;
    } | undefined;
}

export interface Rule extends Node {
    /** The list of selectors of the rule, split on commas. Each selector is trimmed from whitespace and comments. */
    selectors?: Array<string> | undefined;
    /** Array of nodes with the types declaration and comment. */
    declarations?: Array<Declaration | Comment> | undefined;
}

export interface Declaration extends Node {
    /** The property name, trimmed from whitespace and comments. May not be empty. */
    property?: string | undefined;
    /** The value of the property, trimmed from whitespace and comments. Empty values are allowed. */
    value?: string | undefined;
}

/**
 * A rule-level or declaration-level comment. Comments inside selectors, properties and values etc. are lost.
 */
export interface Comment extends Node {
    comment?: string | undefined;
}

/**
 * The @charset at-rule.
 */
export interface Charset extends Node {
    /** The part following @charset. */
    charset?: string | undefined;
}

/**
 * The @custom-media at-rule
 */
export interface CustomMedia extends Node {
    /** The ---prefixed name. */
    name?: string | undefined;
    /** The part following the name. */
    media?: string | undefined;
}

/**
 * The @document at-rule.
 */
export interface Document extends Node {
    /** The part following @document. */
    document?: string | undefined;
    /** The vendor prefix in @document, or undefined if there is none. */
    vendor?: string | undefined;
    /** Array of nodes with the types rule, comment and any of the at-rule types. */
    rules?: Array<Rule | Comment | AtRule> | undefined;
}

/**
 * The @font-face at-rule.
 */
export interface FontFace extends Node {
    /** Array of nodes with the types declaration and comment. */
    declarations?: Array<Declaration | Comment> | undefined;
}

/**
 * The @host at-rule.
 */
export interface Host extends Node {
    /** Array of nodes with the types rule, comment and any of the at-rule types. */
    rules?: Array<Rule | Comment | AtRule> | undefined;
}

/**
 * The @import at-rule.
 */
export interface Import extends Node {
    /** The part following @import. */
    import?: string | undefined;
}

/**
 * The @keyframes at-rule.
 */
export interface KeyFrames extends Node {
    /** The name of the keyframes rule. */
    name?: string | undefined;
    /** The vendor prefix in @keyframes, or undefined if there is none. */
    vendor?: string | undefined;
    /** Array of nodes with the types keyframe and comment. */
    keyframes?: Array<KeyFrame | Comment> | undefined;
}

export interface KeyFrame extends Node {
    /** The list of "selectors" of the keyframe rule, split on commas. Each “selector” is trimmed from whitespace. */
    values?: Array<string> | undefined;
    /** Array of nodes with the types declaration and comment. */
    declarations?: Array<Declaration | Comment> | undefined;
}

/**
 * The @media at-rule.
 */
export interface Media extends Node {
    /** The part following @media. */
    media?: string | undefined;
    /** Array of nodes with the types rule, comment and any of the at-rule types. */
    rules?: Array<Rule | Comment | AtRule> | undefined;
}

/**
 * The @namespace at-rule.
 */
export interface Namespace extends Node {
    /** The part following @namespace. */
    namespace?: string | undefined;
}

/**
 * The @page at-rule.
 */
export interface Page extends Node {
    /** The list of selectors of the rule, split on commas. Each selector is trimmed from whitespace and comments. */
    selectors?: Array<string> | undefined;
    /** Array of nodes with the types declaration and comment. */
    declarations?: Array<Declaration | Comment> | undefined;
}

/**
 * The @supports at-rule.
 */
export interface Supports extends Node {
    /** The part following @supports. */
    supports?: string | undefined;
    /** Array of nodes with the types rule, comment and any of the at-rule types. */
    rules?: Array<Rule | Comment | AtRule> | undefined;
}

/** All at-rules. */
export type AtRule =
    | Charset
    | CustomMedia
    | Document
    | FontFace
    | Host
    | Import
    | KeyFrames
    | Media
    | Namespace
    | Page
    | Supports;

/**
 * A collection of rules
 */
export interface StyleRules {
    /** Array of nodes with the types rule, comment and any of the at-rule types. */
    rules: Array<Rule | Comment | AtRule>;
    /** Array of Errors. Errors collected during parsing when option silent is true. */
    parsingErrors?: Array<ParserError> | undefined;
}

/**
 * The root node returned by css.parse.
 */
export interface Stylesheet extends Node {
    stylesheet?: StyleRules | undefined;
}

// ---------------------------------------------------------------------------------

/**
 * Accepts a CSS string and returns an AST object.
 *
 * @param {string} code - CSS code.
 * @param {ParserOptions} options - CSS parser options.
 * @return {Stylesheet} AST object built using provides CSS code.
 */
export function parse(code: string, options?: ParserOptions): Stylesheet;

/**
 * Accepts an AST object (as css.parse produces) and returns a CSS string.
 *
 * @param {Stylesheet} stylesheet - AST tree.
 * @param {StringifyOptions} options - AST tree to string serializaiton options.
 * @return {string} CSS code.
 */
export function stringify(stylesheet: Stylesheet, options?: StringifyOptions): string;
