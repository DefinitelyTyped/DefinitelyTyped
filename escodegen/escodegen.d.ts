// Type definitions for escodegen
// Project: https://github.com/estools/escodegen
// Definitions by: Simon de Lang <https://github.com/simondel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'escodegen' {

  export interface FormatOptions {
    /**
     * The indent options
     */
    indent?: IndentOptions;
    /**
     * New line string. Default is '\n'.
     */
    newline?: string;
    /**
     * White space string. Default is standard ' ' (\x20).
     */
    space?: string;
    /**
     * Enforce JSON format of numeric and string literals. This option takes precedence over option.format.hexadecimal and option.format.quotes. Default is false.
     */
    json?: boolean;
    /**
     * Try to generate shorter numeric literals than toString() (9.8.1). Default is false.
     */
    renumber?: boolean;
    /**
     * Generate hexadecimal a numeric literal if it is shorter than its equivalents. Requires option.format.renumber. Default is false.
     */
    hexadecimal?: boolean;
    /**
     * Delimiter to use for string literals. Accepted values are: 'single', 'double', and 'auto'. When 'auto' is specified, escodegen selects a delimiter that results in a shorter literal. Default is 'single'.
     */
    quotes?: string;
    /**
     * Escape as few characters in string literals as necessary. Default is false.
     */
    escapeless?: boolean;
    /**
     * Do not include superfluous whitespace characters and line terminators. Default is false.
     */
    compact?: boolean;
    /**
     * Preserve parentheses in new expressions that have no arguments. Default is true.
     */
    parentheses?: boolean;
    /**
     * Preserve semicolons at the end of blocks and programs. Default is true.
     */
    semicolons?: boolean;
    safeConcatenation?: boolean;
    preserveBlankLines?: boolean;
  }

  export interface IndentOptions {
    /**
     * Indent string. Default is 4 spaces ('    ').
     */
    style?: string;
    /**
     * Base indent level. Default is 0.
     */
    base?: number;
    /**
     * Adjust the indentation of multiline comments to keep asterisks vertically aligned. Default is false.
     */
    adjustMultilineComment?: boolean;
  }

  export interface MozillaOptions {
    /**
     * Default: false
     */
    starlessGenerator?: boolean;
    /**
     * Default: false
     */
    parenthesizedComprehensionBlock?: boolean;
    /**
     * Default: false
     */
    comprehensionExpressionStartsWithAssignment?: boolean;
  }

  export interface GenerateOptions {
    /**
     * The format options
     */
    format?: FormatOptions;
    moz?: MozillaOptions;
    /**
     * Mozilla Parser API compatible parse function, e.g., the parse function exported by esprima. If it is provided, generator tries to use the 'raw' representation. See esprima raw information. Default is null.
     */
    parse?: Function;
    /**
     * If comments are attached to AST, escodegen is going to emit comments to output code. Default is false.
     */
    comment?: boolean;
    /**
     * sourceMap is the source maps's source filename, that's a name that will show up in the browser debugger for the generated source (if source-maps is enabled).
     * If a non-empty string value is provided, generate a source map.
     */
    sourceMap?: string;
    /**
     * . If sourceMapWithCode is true generator returns output hash, where output.map is a source-map representation, which can be serialized as output.map.toString(). output.code is a string with generated JS code (note that it's not going to have //@ sourceMappingURL comment in it).
     */
    sourceMapWithCode?: boolean;
    /**
     * Optionally option.sourceContent string can be passed (which represents original source of the file, for example it could be a source of coffeescript from which JS is being generated), if provided generated source map will have original source embedded in it.
     */
    sourceContent?: string;
    sourceCode?: string;
    /**
     * Optionally option.sourceMapRoot can be provided, in which case option.sourceMap will be treated as relative to it. For more information about source map itself, see source map library document, V3 draft and HTML5Rocks introduction. Default is undefined
     * sourceMapRoot is the source root for the source map (see the Mozilla documentation). If sourceMapWithCode is truthy, an object is returned from generate() of the form: { code: .. , map: .. }. If file is provided, it will be used as file property of generated source map.
     */
    sourceMapRoot?: string;
    /**
     * Recognize DirectiveStatement and distinguish it from ExpressionStatement. Default: false
     */
    directive?: boolean;
    /**
     * If file is provided, it will be used as file property of generated source map.
     */
    file?: string;
    /**
     * Providing verbatim code generation option to Expression nodes.
     * verbatim option is provided by user as string. When generating Expression code,
     * looking up node[option.verbatim] value and dump it instead of normal code generation.
     *
     * @example
     *
     */
    verbatim?: string;
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
    Primary
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
}
