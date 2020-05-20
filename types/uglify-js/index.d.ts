// Type definitions for UglifyJS 3.9
// Project: https://github.com/mishoo/UglifyJS
// Definitions by: Alan Agius <https://github.com/alan-agius4>
//                 Tanguy Krotoff <https://github.com/tkrotoff>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RawSourceMap } from 'source-map';
export interface ParseOptions {
    /**
     * Support top level `return` statements
     * @default false
     */
    bare_returns?: boolean;
    /** @default true */
    html5_comments?: boolean;
    /**
     * Support `#!command` as the first line
     * @default true
     */
    shebang?: boolean;
}

export interface CompressOptions {
    /**
     * Replace `arguments[index]` with function parameter name whenever possible.
     * @default true
     */
    arguments?: boolean;
    /**
     * Apply optimizations to assignment expressions
     * @default ture
     */
    assignments?: boolean;
    /**
     * Various optimizations for boolean context, for example `!!a ? b : c → a ? b : c`
     * @default true
     */
    booleans?: boolean;
    /**
     * Collapse single-use non-constant variables, side effects permitting.
     * @default true
     */
    collapse_vars?: boolean;
    /**
     * Apply certain optimizations to binary nodes, e.g. `!(a <= b) → a > b,` attempts to negate binary nodes, e.g. `a = !b && !c && !d && !e → a=!(b||c||d||e)` etc
     * @default true
     */
    comparisons?: boolean;
    /**
     * Apply optimizations for `if-s` and conditional expressions.
     * @default true
     */
    conditionals?: boolean;
    /**
     * Remove unreachable code
     * @default true
     */
    dead_code?: boolean;
    /**
     * remove redundant or non-standard directives
     * @default true
     */
    directives?: boolean;
    /**
     * Pass `true` to discard calls to console.* functions.
     * If you wish to drop a specific function call such as `console.info` and/or retain side effects from function
     * arguments after dropping the function call then use `pure_funcs` instead.
     * @default true
     */
    drop_console?: boolean;
    /**
     * Remove `debugger;` statements
     * @default true
     */
    drop_debugger?: boolean;
    /**
     * Attempt to evaluate constant expressions
     * @default true
     */
    evaluate?: boolean;
    /**
     * Pass `true` to preserve completion values from terminal statements without `return`, e.g. in bookmarklets.
     * @default false
     */
    expression?: boolean;
    /**
     * convert declarations from varto function whenever possible
     * @default true
     */
    functions?: boolean;
    /**
     * @default {}
     */
    global_defs?: object;
    /**
     * hoist function declarations
     * @default false
     */
    hoist_funs?: boolean;
    /**
     * Hoist properties from constant object and array literals into regular variables subject to a set of constraints.
     * For example: `var o={p:1, q:2}; f(o.p, o.q);` is converted to `f(1, 2);`. Note: `hoist_props` works best with mangle enabled,
     * the compress option passes set to 2 or higher, and the compress option toplevel enabled.
     * @default true
     */
    hoist_props?: boolean;
    /**
     * Hoist var declarations (this is `false` by default because it seems to increase the size of the output in general)
     * @default false
     */
    hoist_vars?: boolean;
    /**
     * Optimizations for if/return and if/continue
     * @default true
     */
    if_return?: boolean;
    /**
     * Inline calls to function with simple/return statement
     * - false -- same as `Disabled`
     * - `Disabled` -- disabled inlining
     * - `SimpleFunctions` -- inline simple functions
     * - `WithArguments` -- inline functions with arguments
     * - `WithArgumentsAndVariables` -- inline functions with arguments and variables
     * - true -- same as `WithArgumentsAndVariables`
     * @default true
     */
    inline?: boolean | InlineFunctions;
    /**
     * join consecutive `var` statements
     * @default true
     */
    join_vars?: boolean;
    /**
     * Prevents the compressor from discarding unused function arguments.
     * You need this for code which relies on `Function.length`
     * @default 'strict'
     */
    keep_fargs?: 'strict' | boolean;
    /**
     * Pass true to prevent the compressor from discarding function names.
     * Useful for code relying on `Function.prototype.name`.
     * @default false
     */
    keep_fnames?: boolean;
    /**
     * Pass true to prevent Infinity from being compressed into `1/0`, which may cause performance issues on `Chrome`
     * @default false
     */
    keep_infinity?: boolean;
    /**
     * Optimizations for `do`, `while` and `for` loops when we can statically determine the condition.
     * @default true
     */
    loops?: boolean;
    /**
     * negate `Immediately-Called Function Expressions` where the return value is discarded,
     * to avoid the parens that the code generator would insert.
     * @default true
     */
    negate_iife?: boolean;
    /**
     * compact duplicate keys in object literals
     * @default true
     */
    objects?: boolean;
    /**
     * The maximum number of times to run compress.
     * In some cases more than one pass leads to further compressed code.
     * Keep in mind more passes will take more time.
     * @default 1
     */
    passes?: number;
    /**
     * Rewrite property access using the dot notation, for example `foo["bar"]` to `foo.bar`
     * @default true
     */
    properties?: boolean;
    /**
     * An array of names and UglifyJS will assume that those functions do not produce side effects.
     * DANGER: will not check if the name is redefined in scope.
     * An example case here, for instance `var q = Math.floor(a/b)`.
     * If variable q is not used elsewhere, UglifyJS will drop it, but will still keep the `Math.floor(a/b)`,
     * not knowing what it does. You can pass `pure_funcs: [ 'Math.floor' ]` to let it know that this function
     * won't produce any side effect, in which case the whole statement would get discarded. The current
     * implementation adds some overhead (compression will be slower).
     * @default null
     */
    pure_funcs?: string[] | null;
    /**
     * If you pass true for this, UglifyJS will assume that object property access
     * (e.g. foo.bar or foo["bar"]) doesn't have any side effects.
     * Specify "strict" to treat foo.bar as side-effect-free only when foo is certain to not throw,
     * i.e. not null or undefine
     * @default 'strict'
     */
    pure_getters?: boolean | 'strict';
    /**
     * Allows single-use functions to be inlined as function expressions when permissible allowing further optimization.
     * Enabled by default. Option depends on reduce_vars being enabled. Some code runs faster in the Chrome V8 engine if
     * this option is disabled. Does not negatively impact other major browsers.
     * @default true
     */
    reduce_funcs?: boolean;
    /**
     * Improve optimization on variables assigned with and used as constant values.
     * @default true
     */
    reduce_vars?: boolean;
    /**
     * join consecutive simple statements using the comma operator.
     * May be set to a positive integer to specify the maximum number of
     * consecutive comma sequences that will be generated.
     * If this option is set to true then the default sequences limit is 200.
     * Set option to false or 0 to disable. The smallest sequences length is 2.
     * A sequences value of 1 is grandfathered to be equivalent to true and as such means 200.
     * On rare occasions the default sequences limit leads to very slow compress times in which case
     * a value of 20 or less is recommended
     * @default true
     */
    sequences?: boolean;
    /**
     * Pass false to disable potentially dropping functions marked as "pure".
     * @default true
     */
    side_effects?: boolean;
    /**
     * compact string concatenations
     * @default true
     */
    strings?: boolean;
    /**
     * De-duplicate and remove unreachable `switch` branches.
     * @default true
     */
    switches?: boolean;
    /**
     * Drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope (false by default,
     * true to drop both unreferenced functions and variables)
     * @default false
     */
    toplevel?: boolean;
    /**
     * Prevent specific toplevel functions and variables from unused removal
     * (can be array, comma-separated, RegExp or function. Implies toplevel)
     * @default null
     */
    top_retain?: boolean | null;
    /**
     * Transforms typeof foo == "undefined" into foo === void 0.
     * Note: recommend to set this value to false for IE10 and earlier versions due to known issues
     * @default true
     */
    typeofs?: boolean;
    /**
     * apply "unsafe" transformations (discussion below)
     * @default false
     */
    unsafe?: boolean;
    /**
     * Compress expressions like a `<= b` assuming none of the operands can be (coerced to) `NaN`.
     * @default false
     */
    unsafe_comps?: boolean;
    /**
     * Compress and mangle `Function(args, code)` when both args and code are string literals.
     * @default false
     */
    unsafe_Function?: boolean;
    /**
     * Optimize numerical expressions like `2 * x * 3` into `6 * x`,
     * which may give imprecise floating point results.
     * @default false
     */
    unsafe_math?: boolean;
    /**
     * Optimize expressions like `Array.prototype.slice.call(a)` into `[].slice.call(a)`
     * @default false
     */
    unsafe_proto?: boolean;
    /**
     * Enable substitutions of variables with `RegExp` values the same way as if they are constants.
     * @default false
     */
    unsafe_regexp?: boolean;
    /**
     * substitute void 0 if there is a variable named undefined in scope
     * (variable name will be mangled, typically reduced to a single character)
     * @default false
     */
    unsafe_undefined?: boolean;
    /**
     * drop unreferenced functions and variables
     * (simple direct variable assignments do not count as references unless set to "keep_assign")
     * @default true
     */
    unused?: boolean;
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

export interface MinifyOptions {
    /**
     * Pass `true` to return compressor warnings in result.warnings.
     * Use the value `verbose` for more detailed warnings.
     * @default false
     */
    warnings?: boolean | 'verbose';
    /**
     * Pass an object if you wish to specify some additional parse options.
     */
    parse?: ParseOptions;
    /**
     * Pass `false` to skip compressing entirely.
     * Pass an object to specify custom compress options.
     * @default {}
     */
    compress?: false | CompressOptions;
    /**
     * Pass `false` to skip mangling names,
     * or pass an object to specify mangle options (see below).
     * @default true
     */
    mangle?: boolean | MangleOptions;
    /**
     * Pass an object if you wish to specify additional output options.
     * The defaults are optimized for best compression
     */
    output?: OutputOptions;
    /**
     * Pass an object if you wish to specify source map options.
     * @default false
     */
    sourceMap?: boolean | SourceMapOptions;
    /**
     * Set to `true` if you wish to enable top level variable and function name mangling
     * and to drop unused variables and functions.
     * @default false
     */
    toplevel?: boolean;
    /**
     * Pass an empty object {} or a previously used nameCache object
     * if you wish to cache mangled variable and property names across multiple invocations of minify().
     * Note: this is a read/write property. `minify()` will read the name cache state of this object
     * and update it during minification so that it may be reused or externally persisted by the user
     */
    nameCache?: object;
    /**
     * Set to true to support IE8
     * @default false
     */
    ie8?: boolean;
    /**
     * Pass true to prevent discarding or mangling of function names.
     * Useful for code relying on Function.prototype.name.
     * @default false
     */
    keep_fnames?: boolean;
}

export interface MinifyOutput {
    error?: Error;
    warnings?: string[];
    code: string;
    map: string;
}

export interface SourceMapOptions {
    includeSources?: boolean;
    filename?: string;
    /**
     * Include symbol names in the source map
     * @default true
     */
    names?: boolean;
    url?: string | 'inline';
    root?: string;
    content?: RawSourceMap;
}

export function minify(files: string | string[] | { [file: string]: string }, options?: MinifyOptions): MinifyOutput;
