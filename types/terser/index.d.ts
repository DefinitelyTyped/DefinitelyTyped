// Type definitions for terser 3.8
// Project: https://github.com/terser-js/terser
// Definitions by: JordiAnderl <https://github.com/JordiAnderl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as MOZ_SourceMap from "source-map";

export interface Tokenizer {
    /**
     * The type of this token.
     * "comment1" and "comment2" are for single-line, respectively multi-line comments.
     */
    type: "num" | "string" | "regexp" | "operator" | "punc" | "atom" | "name" | "keyword" | "comment1" | "comment2";

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

export class AST_Node {
    // The first token of this node
    start: AST_Node;

    // The last token of this node
    end: AST_Node;

    value?: string | number;
    file?: string;
    property?: string;
    key?: string;

    transform(tt: TreeTransformer): AST_Toplevel;

    walk(walker: TreeWalker): void;
}

export class AST_Toplevel extends AST_Node {
    // Terser contains a scope analyzer which figures out variable/function definitions, references etc.
    // You need to call it manually before compression or mangling.
    // The figure_out_scope method is defined only on the AST_Toplevel node.
    figure_out_scope(): void;

    // Get names that are optimized for GZip compression (names will be generated using the most frequent characters first)
    compute_char_frequency(): void;

    mangle_names(): void;

    print(stream: OutputStream): void;

    print_to_string(options?: BeautifierOptions): string;
}

export interface MinifyOptions {
    spidermonkey?: boolean;
    outSourceMap?: string;
    sourceRoot?: string;
    inSourceMap?: string;
    fromString?: boolean;
    warnings?: boolean;
    mangle?: boolean | MangleOptions;
    output?: OutputOptions;
    compress?: boolean | CompressOptions;
    nameCache?: {};
}

export interface MinifyOutput {
    code: string;
    map: string;
    warnings?: string[];
    error?: string;
    ast?: boolean | AST_Toplevel;
}

export function minify(files: {}, options?: MinifyOptions): MinifyOutput;

export interface ParseOptions {
    // Default is false
    strict?: boolean;

    // Input file name, default is null
    filename?: string;

    // Default is null
    toplevel?: AST_Toplevel;
}
export interface CompressOptions {
    /** Replace `arguments[index]` with function parameter name whenever possible. */
    arguments?: boolean;
    /** Various optimizations for boolean context, for example `!!a ? b : c → a ? b : c` */
    booleans?: boolean;
    /** Collapse single-use non-constant variables, side effects permitting. */
    collapse_vars?: boolean;
    /** Apply certain optimizations to binary nodes, e.g. `!(a <= b) → a > b,` attempts to negate binary nodes, e.g. `a = !b && !c && !d && !e → a=!(b||c||d||e)` etc */
    comparisons?: boolean;
    /** Apply optimizations for `if-s` and conditional expressions. */
    conditionals?: boolean;
    /** Remove unreachable code */
    dead_code?: boolean;
    /**
     * Pass `true` to discard calls to console.* functions.
     * If you wish to drop a specific function call such as `console.info` and/or retain side effects from function
     * arguments after dropping the function call then use `pure_funcs` instead.
     */
    drop_console?: boolean;
    /** Remove `debugger;` statements */
    drop_debugger?: boolean;
    /** Attempt to evaluate constant expressions */
    evaluate?: boolean;
    /** Pass `true` to preserve completion values from terminal statements without `return`, e.g. in bookmarklets. */
    expression?: boolean;
    global_defs?: object;
    /** hoist function declarations */
    hoist_funs?: boolean;
    /**
     * Hoist properties from constant object and array literals into regular variables subject to a set of constraints.
     * For example: `var o={p:1, q:2}; f(o.p, o.q);` is converted to `f(1, 2);`. Note: `hoist_props` works best with mangle enabled,
     * the compress option passes set to 2 or higher, and the compress option toplevel enabled.
     */
    hoist_props?: boolean;
    /** Hoist var declarations (this is `false` by default because it seems to increase the size of the output in general) */
    hoist_vars?: boolean;
    /** Optimizations for if/return and if/continue */
    if_return?: boolean;
    /**
     * Inline calls to function with simple/return statement
     * - false -- same as `Disabled`
     * - `Disabled` -- disabled inlining
     * - `SimpleFunctions` -- inline simple functions
     * - `WithArguments` -- inline functions with arguments
     * - `WithArgumentsAndVariables` -- inline functions with arguments and variables
     * - true -- same as `WithArgumentsAndVariables`
     */
    inline?: boolean | InlineFunctions;
    /** join consecutive `var` statements */
    join_vars?: boolean;
    /** Prevents the compressor from discarding unused function arguments. You need this for code which relies on `Function.length` */
    keep_fargs?: boolean;
    /** Pass true to prevent the compressor from discarding function names. Useful for code relying on `Function.prototype.name`. */
    keep_fnames?: boolean;
    /** Pass true to prevent Infinity from being compressed into `1/0`, which may cause performance issues on `Chrome` */
    keep_infinity?: boolean;
    /** Optimizations for `do`, `while` and `for` loops when we can statically determine the condition. */
    loops?: boolean;
    /** negate `Immediately-Called Function Expressions` where the return value is discarded, to avoid the parens that the code generator would insert. */
    negate_iife?: boolean;
    /** The maximum number of times to run compress. In some cases more than one pass leads to further compressed code. Keep in mind more passes will take more time. */
    passes?: number;
    /** Rewrite property access using the dot notation, for example `foo["bar"]` to `foo.bar` */
    properties?: boolean;
    /**
     * An array of names and UglifyJS will assume that those functions do not produce side effects.
     * DANGER: will not check if the name is redefined in scope.
     * An example case here, for instance `var q = Math.floor(a/b)`.
     * If variable q is not used elsewhere, UglifyJS will drop it, but will still keep the `Math.floor(a/b)`,
     * not knowing what it does. You can pass `pure_funcs: [ 'Math.floor' ]` to let it know that this function
     * won't produce any side effect, in which case the whole statement would get discarded. The current
     * implementation adds some overhead (compression will be slower).
     */
    pure_funcs?: string[];
    pure_getters?: boolean | 'strict';
    /**
     * Allows single-use functions to be inlined as function expressions when permissible allowing further optimization.
     * Enabled by default. Option depends on reduce_vars being enabled. Some code runs faster in the Chrome V8 engine if
     * this option is disabled. Does not negatively impact other major browsers.
     */
    reduce_funcs?: boolean;
    /** Improve optimization on variables assigned with and used as constant values. */
    reduce_vars?: boolean;
    sequences?: boolean;
    /** Pass false to disable potentially dropping functions marked as "pure". */
    side_effects?: boolean;
    /** De-duplicate and remove unreachable `switch` branches.  */
    switches?: boolean;
    /** Drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope (false by default, true to drop both unreferenced functions and variables) */
    toplevel?: boolean;
    /** Prevent specific toplevel functions and variables from unused removal (can be array, comma-separated, RegExp or function. Implies toplevel) */
    top_retain?: boolean;
    typeofs?: boolean;
    unsafe?: boolean;
    /** Compress expressions like a `<= b` assuming none of the operands can be (coerced to) `NaN`. */
    unsafe_comps?: boolean;
    /** Compress and mangle `Function(args, code)` when both args and code are string literals. */
    unsafe_Function?: boolean;
    /** Optimize numerical expressions like `2 * x * 3` into `6 * x`, which may give imprecise floating point results.  */
    unsafe_math?: boolean;
    /** Optimize expressions like `Array.prototype.slice.call(a)` into `[].slice.call(a)` */
    unsafe_proto?: boolean;
    /** Enable substitutions of variables with `RegExp` values the same way as if they are constants. */
    unsafe_regexp?: boolean;
    unsafe_undefined?: boolean;
    unused?: boolean;
    /** display warnings when dropping unreachable code or unused declarations etc. */
    warnings?: boolean;
}

export enum InlineFunctions {
    Disabled = 0,
    SimpleFunctions = 1,
    WithArguments = 2,
    WithArgumentsAndVariables = 3
}

export interface MangleOptions {
    /** Pass true to mangle names visible in scopes where `eval` or with are used. */
    eval?: boolean;
    /** Pass true to not mangle function names. Useful for code relying on `Function.prototype.name`. */
    keep_fnames?: boolean;
    /** Pass an array of identifiers that should be excluded from mangling. Example: `["foo", "bar"]`. */
    reserved?: string[];
    /** Pass true to mangle names declared in the top level scope. */
    toplevel?: boolean;
    properties?: boolean | ManglePropertiesOptions;
}

export interface ManglePropertiesOptions {
    /** Use true to allow the mangling of builtin DOM properties. Not recommended to override this setting. */
    builtins?: boolean;
    /** Mangle names with the original name still present. Pass an empty string "" to enable, or a non-empty string to set the debug suffix. */
    debug?: boolean;
    /** Only mangle unquoted property names */
    keep_quoted?: boolean;
    /** Pass a RegExp literal to only mangle property names matching the regular expression. */
    regex?: RegExp;
    /** Do not mangle property names listed in the reserved array */
    reserved?: string[];
}

export interface OutputOptions {
    ascii_only?: boolean;
    beautify?: boolean;
    braces?: boolean;
    comments?: boolean | 'all' | 'some' | RegExp;
    indent_level?: number;
    indent_start?: boolean;
    inline_script?: boolean;
    keep_quoted_props?: boolean;
    max_line_len?: boolean | number;
    preamble?: string;
    preserve_line?: boolean;
    quote_keys?: boolean;
    quote_style?: OutputQuoteStyle;
    semicolons?: boolean;
    shebang?: boolean;
    webkit?: boolean;
    width?: number;
    wrap_iife?: boolean;
}

export enum OutputQuoteStyle {
    PreferDouble = 0,
    AlwaysSingle = 1,
    AlwaysDouble = 2,
    AlwaysOriginal = 3
}

/**
 * The parser creates a custom abstract syntax tree given a piece of JavaScript code.
 * Perhaps you should read about the AST first.
 */
export function parse(code: string, options?: ParseOptions): AST_Toplevel;

export interface BeautifierOptions {
    /**
     * Start indentation on every line (only when `beautify`)
     */
    indent_start?: number;

    /**
     * Indentation level (only when `beautify`)
     */
    indent_level?: number;

    /**
     * Quote all keys in {} literals?
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
    max_line_len?: boolean | number;

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
    source_map?: SourceMap;

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

export interface OutputStream {
    // Return the output so far as a string
    get(): string;
    toString(): string;

    // Insert one indentation string (usually 4 characters).
    // Optionally pass true to indent half the width (I'm using that for case and default lines in switch blocks.
    // If beautify is off, this function does nothing.
    indent(half?: boolean): void;

    // Return the current indentation width (not level; for example if we're in level 2 and indent_level is 4, this method would return 8.
    indentation(): number;

    // return the width of the current line text minus indentation.
    current_width(): number;

    // Return true if current_width() is bigger than options.width (assuming options.width is non-null, non-zero).
    should_break(): boolean;

    // If beautification is on, this inserts a newline. Otherwise it does nothing.
    newline(): void;

    // Include the given string into the output, adjusting current_line, current_col and current_pos accordingly.
    print(str: string): void;

    // If beautification is on this always includes a space character.
    // Otherwise it saves a hint somewhere that a space might be needed at current point.
    // The space will go in at the next output but only when absolutely required, for example it will insert the space in return 10 but not in return"stuff".
    space(): void;

    // Inserts a comma, and calls space() — that is, if beautification is on you'll get a space after the comma.
    comma(): void;

    // Inserts a colon, and calls space() if options.space_colon is set.
    colon(): void;

    // Returns the last printed chunk.
    last(): string;

    // If beautification is on it always inserts a semicolon.
    // Otherwise it saves a hint that a semicolon might be needed at current point.
    // The semicolon is inserted when the next output comes in, only if required to not break the JS syntax.
    semicolon(): void;

    // Always inserts a semicolon and clears the hint that a semicolon might be needed.
    force_semicolon(): void;

    // Encodes any non-ASCII characters in string with JavaScript's conventions (using \uCODE).
    to_ascii(str: string): void;

    // Prints an identifier. If options.ascii_only is set, non-ASCII chars will be encoded with JavaScript conventions.
    print_name(name: string): void;

    // Prints a string. It adds quotes automatically.
    // It prefers double-quotes, but will actually count any quotes in the string and will use single-quotes if the output proves to be shorter (depending on how many backslashes it has to insert).
    // It encodes to ASCII if options.ascii_only is set.
    print_string(str: string): void;

    // Returns the width of the next indentation level. For example if current level is 2 and options.indent_level is 4, it'll return 12.
    next_indent(): number;

    // Sets the current indentation to col (column), calls the function and thereafter restores the previous indentation level.
    // If beautification is off it simply calls func.
    with_indent(col: number, func: () => void): void;

    // This is used to output blocks in curly brackets.
    // It'll print an open bracket at current point, then call newline() and with the next indentation level it calls your func.
    // Lastly, it'll print an indented closing bracket. As usual, if beautification is off you'll just get {x} where x is whatever func outputs.
    with_block(func: () => void): void;

    // Adds parens around the output that your function prints.
    with_parens(func: () => void): void;

    // Adds square brackets around the output that your function prints.
    with_square(func: () => void): void;

    // If options.source_map is set, this will generate a source mapping between the given token (which should be an AST_Token-like {}) and the current line/col.
    // The name is optional; in most cases it will be inferred from the token.
    add_mapping(token: AST_Node, name?: string): void;

    // Returns the option with the given name.
    option(name: string): any;

    // Returns the current line in the output (1-based).
    line(): number;

    // Returns the current column in the output (zero-based).
    col(): number;

    // Push the given node into an internal stack. This is used to keep track of current node's parent(s).
    push_node(node: AST_Node): void;

    // Pops the top of the stack and returns it.
    pop_node(): AST_Node;

    // Returns that internal stack.
    stack(): any;

    // Returns the n-th parent node (where zero means the direct parent).
    parent(n: number): AST_Node;
}

/**
 * The code generator is a recursive process of getting back source code from an AST returned by the parser.
 * Every AST node has a “print” method that takes an OutputStream and dumps the code from that node into it.
 * The stream {} supports a lot of options that control the output.
 * You can specify whether you'd like to get human-readable (indented) output, the indentation level, whether you'd like to quote all properties in {} literals etc.
 */
export function OutputStream(options?: BeautifierOptions): OutputStream;

export interface SourceMapOptions {
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
     * If you have an input source map, pass it in this argument and Terser will generate a mapping that maps back
     * to the original source (as opposed to the compiled code that you are compressing).
     */
    orig?: {} | JSON;
}

export interface SourceMap {
    add(source: string, gen_line: number, gen_col: number, orig_line: number, orig_col: number, name?: string): void;
    get(): MOZ_SourceMap.SourceMapGenerator;
    toString(): string;
}

/**
 * The output stream keeps track of the current line/column in the output and can trivially generate a source mapping to the original code via Mozilla's source-map library.
 * To use this functionality, you must load this library (it's automatically require-d by Terser in the NodeJS version, but in a browser you must load it yourself)
 * and make it available via the global MOZ_SourceMap variable.
 */
export function SourceMap(options?: SourceMapOptions): SourceMap;

export interface CompressorOptions {
    // Join consecutive statemets with the “comma operator”
    sequences?: boolean;

    // Optimize property access: a["foo"] → a.foo
    properties?: boolean;

    // Discard unreachable code
    dead_code?: boolean;

    // Discard “debugger” statements
    drop_debugger?: boolean;

    // Some unsafe optimizations (see below)
    unsafe?: boolean;

    // Optimize if-s and conditional expressions
    conditionals?: boolean;

    // Optimize comparisons
    comparisons?: boolean;

    // Evaluate constant expressions
    evaluate?: boolean;

    // Optimize boolean expressions
    booleans?: boolean;

    // Optimize loops
    loops?: boolean;

    // Drop unused variables/functions
    unused?: boolean;

    // Hoist function declarations
    hoist_funs?: boolean;

    // Hoist variable declarations
    hoist_vars?: boolean;

    // Optimize if-s followed by return/continue
    if_return?: boolean;

    // Join var declarations
    join_vars?: boolean;

    // Try to cascade `right` into `left` in sequences
    cascade?: boolean;

    // Drop side-effect-free statements
    side_effects?: boolean;

    // Warn about potentially dangerous optimizations/code
    warnings?: boolean;

    // Global definitions
    global_defs?: {};
}

/**
 * The compressor is a tree transformer which reduces the code size by applying various optimizations on the AST
 */
export function Compressor(options?: CompressorOptions): AST_Toplevel;

// TODO:

/**
 * Terser provides a TreeWalker {} and every node has a walk method that given a walker will apply your visitor to each node in the tree.
 * Your visitor can return a non-falsy value in order to prevent descending the current node.
 */
export class TreeWalker {
    constructor(visitor: visitor);
    parent: () => AST_Scope;
    stack: AST_Scope[];
}

export type visitor = (node: AST_Node, descend: () => void) => boolean | void;

// TODO:

/**
 * The tree transformer is a special case of a tree walker.
 * In fact it even inherits from TreeWalker and you can use the same methods, but initialization and visitor protocol are a bit different.
 */
export class TreeTransformer extends TreeWalker {
    constructor(visitor: visitor, after: visitor);
}

// TODO: http://lisperator.net/uglifyjs/ast

export class AST_PropAccess extends AST_Node {
}

export class AST_ObjectKeyVal extends AST_Node {
}

export class AST_Scope extends AST_Node {
    find_variable(name: string): AST_SymbolDeclaration;
}

export class AST_Symbol extends AST_Node {
    scope?: AST_Scope;
    name: string;
    thedef: unknown;
}

export class AST_SymbolDeclaration extends AST_Symbol {
    orig: AST_SymbolDeclaration[];
    references: AST_SymbolRef[];
    global: boolean;
    undeclared: boolean;
    constant: boolean;
    mangledName?: string;
    mangled_name?: string;
}

export class AST_SymbolRef extends AST_Symbol {
}

export class AST_Call extends AST_Node {
    expression: { name?: string, property?: string };
    args: AST_Node[];
}
export class AST_String extends AST_Node {
    value: string;
}
export class AST_Lambda extends AST_Node {
    name?: string;
}
export class AST_SymbolMethod extends AST_Node {
    name?: string;
}
export class AST_ConciseMethod extends AST_Node {
}
export class AST_SymbolVar extends AST_Node {
    name?: string;
}
