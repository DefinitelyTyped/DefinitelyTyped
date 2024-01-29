export interface FormatOptions {
    /**
     * The indent options
     */
    indent?: IndentOptions | undefined;
    /**
     * New line string. Default is '\n'.
     */
    newline?: string | undefined;
    /**
     * White space string. Default is standard ' ' (\x20).
     */
    space?: string | undefined;
    /**
     * Enforce JSON format of numeric and string literals. This option takes precedence over option.format.hexadecimal and option.format.quotes. Default is false.
     */
    json?: boolean | undefined;
    /**
     * Try to generate shorter numeric literals than toString() (9.8.1). Default is false.
     */
    renumber?: boolean | undefined;
    /**
     * Generate hexadecimal a numeric literal if it is shorter than its equivalents. Requires option.format.renumber. Default is false.
     */
    hexadecimal?: boolean | undefined;
    /**
     * Delimiter to use for string literals. Accepted values are: 'single', 'double', and 'auto'. When 'auto' is specified, escodegen selects a delimiter that results in a shorter literal. Default is 'single'.
     */
    quotes?: string | undefined;
    /**
     * Escape as few characters in string literals as necessary. Default is false.
     */
    escapeless?: boolean | undefined;
    /**
     * Do not include superfluous whitespace characters and line terminators. Default is false.
     */
    compact?: boolean | undefined;
    /**
     * Preserve parentheses in new expressions that have no arguments. Default is true.
     */
    parentheses?: boolean | undefined;
    /**
     * Preserve semicolons at the end of blocks and programs. Default is true.
     */
    semicolons?: boolean | undefined;
    safeConcatenation?: boolean | undefined;
    preserveBlankLines?: boolean | undefined;
}

export interface IndentOptions {
    /**
     * Indent string. Default is 4 spaces ('    ').
     */
    style?: string | undefined;
    /**
     * Base indent level. Default is 0.
     */
    base?: number | undefined;
    /**
     * Adjust the indentation of multiline comments to keep asterisks vertically aligned. Default is false.
     */
    adjustMultilineComment?: boolean | undefined;
}

export interface MozillaOptions {
    /**
     * Default: false
     */
    starlessGenerator?: boolean | undefined;
    /**
     * Default: false
     */
    parenthesizedComprehensionBlock?: boolean | undefined;
    /**
     * Default: false
     */
    comprehensionExpressionStartsWithAssignment?: boolean | undefined;
}

export interface GenerateOptions {
    /**
     * The format options
     */
    format?: FormatOptions | undefined;
    moz?: MozillaOptions | undefined;
    /**
     * Mozilla Parser API compatible parse function, e.g., the parse function exported by esprima. If it is provided, generator tries to use the 'raw' representation. See esprima raw information. Default is null.
     */
    parse?: Function | undefined;
    /**
     * If comments are attached to AST, escodegen is going to emit comments to output code. Default is false.
     */
    comment?: boolean | undefined;
    /**
     * sourceMap is the source maps's source filename, that's a name that will show up in the browser debugger for the generated source (if source-maps is enabled).
     * If a non-empty string value is provided, generate a source map.
     */
    sourceMap?: string | undefined;
    /**
     * . If sourceMapWithCode is true generator returns output hash, where output.map is a source-map representation, which can be serialized as output.map.toString(). output.code is a string with generated JS code (note that it's not going to have //@ sourceMappingURL comment in it).
     */
    sourceMapWithCode?: boolean | undefined;
    /**
     * Optionally option.sourceContent string can be passed (which represents original source of the file, for example it could be a source of coffeescript from which JS is being generated), if provided generated source map will have original source embedded in it.
     */
    sourceContent?: string | undefined;
    sourceCode?: string | undefined;
    /**
     * Optionally option.sourceMapRoot can be provided, in which case option.sourceMap will be treated as relative to it. For more information about source map itself, see source map library document, V3 draft and HTML5Rocks introduction. Default is undefined
     * sourceMapRoot is the source root for the source map (see the Mozilla documentation). If sourceMapWithCode is truthy, an object is returned from generate() of the form: { code: .. , map: .. }. If file is provided, it will be used as file property of generated source map.
     */
    sourceMapRoot?: string | undefined;
    /**
     * Recognize DirectiveStatement and distinguish it from ExpressionStatement. Default: false
     */
    directive?: boolean | undefined;
    /**
     * If file is provided, it will be used as file property of generated source map.
     */
    file?: string | undefined;
    /**
     * Providing verbatim code generation option to Expression nodes.
     * verbatim option is provided by user as string. When generating Expression code,
     * looking up node[option.verbatim] value and dump it instead of normal code generation.
     *
     * @example
     */
    verbatim?: string | undefined;
}

/**
 * https://github.com/estools/escodegen/commit/adf113333cd4888cf59bfc4f957df98bf7db82b6
 */
export enum Precedence {
    Sequence,
    Yield,
    Await,
    Assignment,
    Conditional,
    ArrowFunction,
    LogicalOR,
    LogicalAND,
    BitwiseOR,
    BitwiseXOR,
    BitwiseAND,
    Equality,
    Relational,
    BitwiseSHIFT,
    Additive,
    Multiplicative,
    Unary,
    Postfix,
    Call,
    New,
    TaggedTemplate,
    Member,
    Primary,
}

/**
 * Produces given Abstract Syntax Tree as javascript code
 * @param ast The Abstract Syntax Tree to generate code from
 * @param options The generation options
 */
export function generate(ast: any, options?: GenerateOptions): string;
/**
 * Attaching the comments is needed to keep the comments and to allow blank lines to be preserved.
 */
export function attachComments(ast: any, comments: any, tokens: any): any;
