// Type definitions for stylus 0.48.1
// Project: https://github.com/LearnBoost/stylus
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

interface StylusStatic {
    /**
     * Return a new `Renderer` for the given `str` and `options`.
     */
    (str: string, options: StylusRenderOptions): StylusRenderer;

    /**
     * Library version.
     */
    version: string;

    /**
     * Expose nodes.
     */
    nodes: StylusNodeStatic;

    /**
     * Expose BIFs.
     */
    functions: StylusFunctions;

    /**
     * Expose utils.
     */
    utils: StylusUtils;

    Visitor: typeof StylusVisitor;
    Parser: typeof StylusParser;
    Evaluator: typeof StylusEvaluator;
    Compiler: typeof StylusCompiler;

    /**
     * Expose middleware.
     */
    middleware(dir: string): StylusMiddleware;

    /**
     * Convert the given `css` to `stylus` source.
     */
    convertCSS(css: string): string;

    /**
     * Render the given `str` with `options` and callback `fn(err, css)`.
     */
    render(str: string, callback: StylusRenderCallback): string;
    render(str: string, options: StylusRenderOptions, callback: StylusRenderCallback): string;

    /**
     * Return a url() function with the given `options`.
     */
    url: StylusUrl;

    /**
     * Return a url() function with the given `options`.
     */
    resolver(options: any): StylusLiteralFunction;
}

//#region Internal Modules

interface StylusNodeStatic {
    Node: typeof StylusNode;
    Root: typeof StylusNodeRoot;
    Null: typeof StylusNodeNull;
    Each: typeof StylusNodeEach;
    If: typeof StylusNodeIf;
    Call: typeof StylusNodeCall;
    UnaryOp: typeof StylusNodeUnaryOp;
    BinOp: typeof StylusNodeBinOp;
    Ternary: typeof StylusNodeTernary;
    Block: typeof StylusNodeBlock;
    Unit: typeof StylusNodeUnit;
    String: typeof StylusNodeString;
    HSLA: typeof StylusNodeHSLA;
    RGBA: typeof StylusNodeRGBA;
    Ident: typeof StylusNodeIdent;
    Group: typeof StylusNodeGroup;
    Literal: typeof StylusNodeLiteral;
    Boolean: typeof StylusNodeBoolean;
    Return: typeof StylusNodeReturn;
    Media: typeof StylusNodeMedia;
    QueryList: typeof StylusNodeQueryList;
    Query: typeof StylusNodeQuery;
    QueryExpr: typeof StylusNodeQueryExpr;
    Params: typeof StylusNodeParams;
    Comment: typeof StylusNodeComment;
    Keyframes: typeof StylusNodeKeyframes;
    Member: typeof StylusNodeMember;
    Charset: typeof StylusNodeCharset;
    Namespace: typeof StylusNodeNamespace;
    Import: typeof StylusNodeImport;
    Extend: typeof StylusNodeExtend;
    Object: typeof StylusNodeObject;
    Function: typeof StylusNodeFunction;
    Property: typeof StylusNodeProperty;
    Selector: typeof StylusNodeSelector;
    Expression: typeof StylusNodeExpression;
    Arguments: typeof StylusNodeArguments;
    Atblock: typeof StylusNodeAtblock;
    Atrule: typeof StylusNodeAtrule;

    true: StylusNodeBoolean;
    false: StylusNodeBoolean;
    null: StylusNodeNull;
}

interface StylusFunctions {
    /**
     * Convert the given `color` to an `HSLA` node,
     * or h,s,l,a component values.
     */
    hsla(rgba: StylusNodeRGBA): StylusNodeHSLA;
    hsla(hsla: StylusNodeHSLA): StylusNodeHSLA;
    hsla(hue: StylusNodeUnit, saturation: StylusNodeUnit, lightness: StylusNodeUnit, alpha: StylusNodeUnit): StylusNodeHSLA;

    /**
     * Convert the given `color` to an `HSLA` node,
     * or h,s,l component values.
     */
    hsl(rgba: StylusNodeRGBA): StylusNodeHSLA;
    hsl(hsla: StylusNodeHSLA): StylusNodeHSLA;
    hsl(hue: StylusNodeUnit, saturation: StylusNodeUnit, lightness: StylusNodeUnit): StylusNodeHSLA;

    /**
     * Return type of `node`.
     */
    type(node: StylusNode): string;
    /**
     * Return type of `node`.
     */
    typeof(node: StylusNode): string;
    /**
     * Return type of `node`.
     */
    "type-of"(node: StylusNode): string;

    /**
     * Return component `name` for the given `color`.
     */
    component(color: StylusNodeRGBA, name: StylusNodeString): StylusNodeUnit;
    component(color: StylusNodeHSLA, name: StylusNodeString): StylusNodeUnit;

    /**
     * Return component `name` for the given `color`.
     */
    basename(path: StylusNodeString): string;
    basename(path: StylusNodeString, ext: StylusNodeString): string;

    /**
     * Return the dirname of `path`.
     */
    dirname(path: StylusNodeString): string;

    /**
     * Return the extension of `path`.
     */
    extname(path: StylusNodeString): string;

    /**
     * Joins given paths
     */
    pathjoin(...paths: StylusNodeString[]): string;

    /**
     * Return the red component of the given `color`,
     * or set the red component to the optional second `value` argument.
     */
    red(color: StylusNodeRGBA): StylusNodeUnit;
    red(color: StylusNodeHSLA): StylusNodeUnit;
    red(color: StylusNodeRGBA, value: StylusNodeUnit): StylusNodeRGBA;
    red(color: StylusNodeHSLA, value: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return the green component of the given `color`,
     * or set the green component to the optional second `value` argument.
     */
    green(color: StylusNodeRGBA): StylusNodeUnit;
    green(color: StylusNodeHSLA): StylusNodeUnit;
    green(color: StylusNodeRGBA, value: StylusNodeUnit): StylusNodeRGBA;
    green(color: StylusNodeHSLA, value: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return the blue component of the given `color`,
     * or set the blue component to the optional second `value` argument.
     */
    blue(color: StylusNodeRGBA): StylusNodeUnit;
    blue(color: StylusNodeHSLA): StylusNodeUnit;
    blue(color: StylusNodeRGBA, value: StylusNodeUnit): StylusNodeRGBA;
    blue(color: StylusNodeHSLA, value: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return the alpha component of the given `color`,
     * or set the alpha component to the optional second `value` argument.
     */
    alpha(color: StylusNodeRGBA): StylusNodeUnit;
    alpha(color: StylusNodeHSLA): StylusNodeUnit;
    alpha(color: StylusNodeRGBA, value: StylusNodeUnit): StylusNodeRGBA;
    alpha(color: StylusNodeHSLA, value: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return the hue component of the given `color`,
     * or set the hue component to the optional second `value` argument.
     */
    hue(color: StylusNodeRGBA): StylusNodeUnit;
    hue(color: StylusNodeHSLA): StylusNodeUnit;
    hue(color: StylusNodeRGBA, value: StylusNodeUnit): StylusNodeRGBA;
    hue(color: StylusNodeHSLA, value: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return the saturation component of the given `color`,
     * or set the saturation component to the optional second `value` argument.
     */
    saturation(color: StylusNodeRGBA): StylusNodeUnit;
    saturation(color: StylusNodeHSLA): StylusNodeUnit;
    saturation(color: StylusNodeRGBA, value: StylusNodeUnit): StylusNodeRGBA;
    saturation(color: StylusNodeHSLA, value: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return the lightness component of the given `color`,
     * or set the lightness component to the optional second `value` argument.
     */
    lightness(color: StylusNodeRGBA): StylusNodeUnit;
    lightness(color: StylusNodeHSLA): StylusNodeUnit;
    lightness(color: StylusNodeRGBA, value: StylusNodeUnit): StylusNodeRGBA;
    lightness(color: StylusNodeHSLA, value: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return a `RGBA` from the r,g,b,a channels.
     */
    rgba(rgba: StylusNodeRGBA): StylusNodeRGBA;
    rgba(hsla: StylusNodeHSLA): StylusNodeRGBA;
    rgba(hue: StylusNodeUnit, saturation: StylusNodeUnit, lightness: StylusNodeUnit, alpha: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return a `RGBA` from the r,g,b channels.
     */
    rgb(rgba: StylusNodeRGBA): StylusNodeRGBA;
    rgb(hsla: StylusNodeHSLA): StylusNodeRGBA;
    rgb(hue: StylusNodeUnit, saturation: StylusNodeUnit, lightness: StylusNodeUnit, alpha: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Blend the `top` color over the `bottom`
     */
    blend(top: StylusNodeRGBA): StylusNodeRGBA;
    blend(top: StylusNodeRGBA, bottom: StylusNodeRGBA): StylusNodeRGBA;
    blend(top: StylusNodeRGBA, bottom: StylusNodeHSLA): StylusNodeRGBA;
    blend(top: StylusNodeHSLA): StylusNodeRGBA;
    blend(top: StylusNodeHSLA, bottom: StylusNodeRGBA): StylusNodeRGBA;
    blend(top: StylusNodeHSLA, bottom: StylusNodeHSLA): StylusNodeRGBA;

    /**
     * Returns the relative luminance of the given `color`,
     * see http://www.w3.org/TR/WCAG20/#relativeluminancedef
     */
    luminosity(rgba: StylusNodeRGBA): StylusNodeUnit;
    luminosity(rgba: StylusNodeHSLA): StylusNodeUnit;

    /**
     * Returns the contrast ratio object between `top` and `bottom` colors,
     * based on http://leaverou.github.io/contrast-ratio/
     * and https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/color.js#L108
     */
    contrast(top: StylusNodeRGBA): StylusNodeObject;
    contrast(top: StylusNodeRGBA, bottom: StylusNodeRGBA): StylusNodeObject;
    contrast(top: StylusNodeRGBA, bottom: StylusNodeHSLA): StylusNodeObject;
    contrast(top: StylusNodeHSLA): StylusNodeObject;
    contrast(top: StylusNodeHSLA, bottom: StylusNodeRGBA): StylusNodeObject;
    contrast(top: StylusNodeHSLA, bottom: StylusNodeHSLA): StylusNodeObject;

    /**
     * Returns the transparent version of the given `top` color,
     * as if it was blend over the given `bottom` color.
     */
    transparentify(top: StylusNodeRGBA): StylusNodeObject;
    transparentify(top: StylusNodeRGBA, bottom: StylusNodeRGBA, alpha?: StylusNodeUnit): StylusNodeObject;
    transparentify(top: StylusNodeRGBA, bottom: StylusNodeHSLA, alpha?: StylusNodeUnit): StylusNodeObject;
    transparentify(top: StylusNodeHSLA): StylusNodeObject;
    transparentify(top: StylusNodeHSLA, bottom: StylusNodeRGBA, alpha?: StylusNodeUnit): StylusNodeObject;
    transparentify(top: StylusNodeHSLA, bottom: StylusNodeHSLA, alpha?: StylusNodeUnit): StylusNodeObject;

    /**
     * Convert a .json file into stylus variables or object.
     * Nested variable object keys are joined with a dash (-)
     *
     * Given this sample media-queries.json file:
     * {
     *   "small": "screen and (max-width:400px)",
     *   "tablet": {
     *     "landscape": "screen and (min-width:600px) and (orientation:landscape)",
     *     "portrait": "screen and (min-width:600px) and (orientation:portrait)"
     *   }
     * }
     */
    json(path: StylusNodeString, local: StylusNodeBoolean, namePrefix: StylusNodeString): any;

    /**
     * Use the given `plugin`.
     */
    use(plugin: StylusNodeString): void;
    use(plugin: StylusNodeString, options: any): void;

    /**
     * Unquote the given `string`.
     */
    unquote(str: StylusNodeString): StylusNodeLiteral;

    /**
     * Like `unquote` but tries to convert the given `str` to a Stylus node.
     */
    convert(str: StylusNodeString): StylusNode;

    /**
     * Assign `type` to the given `unit` or return `unit`'s type.
     */
    unit(unit: StylusNodeUnit, type: StylusNodeString): StylusNodeUnit;

    /**
     * Lookup variable `name` or return Null.
     */
    lookup(name: StylusNodeString): StylusNode;

    /**
     * Set a variable `name` on current scope.
     */
    define(name: StylusNodeString, expr: StylusNodeExpression): StylusNode;

    /**
     * Perform `op` on the `left` and `right` operands.
     */
    operate(op: StylusNodeString, left: StylusNode, right: StylusNode): StylusNode;

    /**
     * Test if `val` matches the given `pattern`.
     */
    match(pattern: StylusNodeString, val: StylusNodeString): StylusNodeBoolean;
    match(pattern: StylusNodeString, val: StylusNodeIdent): StylusNodeBoolean;

    /**
     * Returns substring of the given `val`.
     */
    substr(val: StylusNodeString, start: StylusNodeNumber, length: StylusNodeNumber): StylusNodeString;
    substr(val: StylusNodeIdent, start: StylusNodeNumber, length: StylusNodeNumber): StylusNodeIdent;

    /**
     * Returns string with all matches of `pattern` replaced by `replacement` in given `val`
     */
    replace(pattern: StylusNodeString, replacement: StylusNodeString, val: StylusNodeString): StylusNodeString;
    replace(pattern: StylusNodeString, replacement: StylusNodeString, val: StylusNodeIdent): StylusNodeIdent;

    /**
     * Splits the given `val` by `delim`
     */
    split(pattern: StylusNodeString, val: StylusNodeString): StylusNodeExpression;
    split(pattern: StylusNodeString, val: StylusNodeIdent): StylusNodeExpression;

    /**
     * Return length of the given `expr`.
     */
    length(expr: StylusNodeExpression): StylusNodeUnit;

    /**
     * Inspect the given `expr`.
     */
    length(...expr: StylusNodeExpression[]): StylusNodeNull;

    /**
     * Throw an error with the given `msg`.
     */
    error(msg: StylusNodeString): void;

    /**
     * Warn with the given `msg` prefixed by "Warning: ".
     */
    warn(msg: StylusNodeString): StylusNodeNull;

    /**
     * Output stack trace.
     */
    trace(): StylusNodeNull;

    /**
     * Push the given args to `expr`.
     */
    push(expr: StylusNodeExpression, ...nodes: StylusNode[]): StylusNodeUnit;

    /**
     * Pop a value from `expr`.
     */
    pop(expr: StylusNodeExpression): StylusNode;

    /**
     * Unshift the given args to `expr`.
     */
    unshift(expr: StylusNodeExpression, ...nodes: StylusNode[]): StylusNodeUnit;

    /**
     * Unshift the given args to `expr`..
     */
    prepend(expr: StylusNodeExpression, ...nodes: StylusNode[]): StylusNodeUnit;

    /**
     * Shift a value from `expr`.
     */
    shift(expr: StylusNodeExpression): StylusNode;

    /**
     * Return a `Literal` with the given `fmt`, and variable number of arguments.
     */
    s(fmt: StylusNodeString, ...nodes: StylusNode[]): StylusNodeLiteral;

    /**
     * Return a `Literal` `num` converted to the provided `base`, padded to `width`
     * with zeroes (default width is 2)
     */
    "base-convert"(num: StylusNodeNumber, base: StylusNodeNumber, width: StylusNodeNumber): StylusNodeLiteral;

    /**
     * Return the opposites of the given `positions`.
     */
    "opposite-position"(positions: StylusNodeExpression): StylusNodeExpression;

    /**
     * Return the width and height of the given `img` path.
     */
    "image-size"(img: StylusNodeString, ignoreErr: StylusNodeBoolean): StylusNodeExpression;

    /**
     * Return the tangent of the given `angle`.
     */
    tan(angle: StylusNodeUnit): StylusNodeUnit;

    /**
     * Return the tangent of the given `angle`.
     */
    math(n: StylusNodeUnit, fn: StylusNodeString): StylusNodeUnit;

    /**
     * Return the opposites of the given `positions`.
     */
    "-math-prop"(prop: StylusNodeString): StylusNodeUnit;

    /**
     * Adjust HSL `color` `prop` by `amount`.
     */
    adjust(rgba: StylusNodeRGBA, prop: StylusNodeString, amount: StylusNodeUnit): StylusNodeRGBA;
    adjust(hsla: StylusNodeHSLA, prop: StylusNodeString, amount: StylusNodeUnit): StylusNodeRGBA;

    /**
     * Return a clone of the given `expr`.
     */
    clone(expr: StylusNodeExpression): StylusNodeExpression;

    /**
     * Add property `name` with the given `expr` to the mixin-able block.
     */
    "add-property"(name: StylusNodeString, expr: StylusNodeExpression): StylusNodeProperty;

    /**
     * Merge the object `dest` with the given args.
     */
    merge(dest: StylusNodeObject, ...objs: StylusNodeObject[]): StylusNodeObject;

    /**
     * Merge the object `dest` with the given args.
     */
    extend(dest: StylusNodeObject, ...objs: StylusNodeObject[]): StylusNodeObject;

    /**
     * Return the current selector or compile `sel` selector.
     */
    selector(): string;
    selector(sel: StylusNodeString): string;

    /**
     * Prefix css classes in a block
     */
    "-prefix-classes"(prefix: StylusNodeString, block: StylusNodeBlock): StylusNodeBlock;

    /**
     * Returns the @media string for the current block
     */
    "current-media"(): StylusNodeString;

    /**
     * Return the separator of the given `list`.
     */
    "list-separator"(list: StylusNodeExpression): StylusNodeString;
}

interface StylusUtils {
    /**
     * Check if `path` looks absolute.
     */
    absolute(path: string): boolean;

    /**
     * Attempt to lookup `path` within `paths` from tail to head.
     * Optionally a path to `ignore` may be passed.
     */
    lookup(path: string, paths: string, ignore: string, resolveURL: boolean): string;

    /**
     * Attempt to lookup `path` within `paths` from tail to head.
     * Optionally a path to `ignore` may be passed.
     */
    lookupIndex(path: string, paths: string, filename: string): string[];

    /**
     * Like `utils.lookup` but uses `glob` to find files.
     */
    find(path: string, paths: string, ignore: string): string[];

    /**
     * Format the given `err` with the given `options`.
     */
    formatException(err: Error, options: StylusExceptionOptions): Error;

    /**
     * Assert that `node` is of the given `type`, or throw.
     */
    assertType(node: StylusNode, type: string, param: string): void;

    /**
     * Assert that `node` is a `String` or `Ident`.
     */
    assertString(node: StylusNode, param: string): void;

    /**
     * Assert that `node` is a `RGBA` or `HSLA`.
     */
    assertColor(node: StylusNode, param: string): void;

    /**
     * Assert that param `name` is given, aka the `node` is passed.
     */
    assertPresent(node: StylusNode, name: string): void;

    /**
     * Unwrap `expr`.
     *
     * Takes an expressions with length of 1
     * such as `((1 2 3))` and unwraps it to `(1 2 3)`.
     */
    unwrap(expr: StylusNodeExpression): StylusNode;

    /**
     * Coerce JavaScript values to their Stylus equivalents.
     */
    coerce(val: any): StylusNode;
    coerce(val: any, raw: boolean): StylusNode;

    /**
     * Coerce a javascript `Array` to a Stylus `Expression`.
     */
    coerceArray(val: any): StylusNodeExpression;
    coerceArray(val: any, raw: boolean): StylusNodeExpression;

    /**
     * Coerce a javascript object to a Stylus `Expression` or `Object`.
     *
     * For example `{ foo: 'bar', bar: 'baz' }` would become
     * the expression `(foo 'bar') (bar 'baz')`. If `raw` is true
     * given `obj` would become a Stylus hash object.
     */
    coerceObject(obj: any): StylusNodeExpression;
    coerceObject(obj: any, raw: boolean): StylusNodeExpression;

    /**
     * Return param names for `fn`.
     */
    params(fn: Function): string[];

    /**
     * Merge object `b` with `a`.
     */
    merge(a: any, b: any): any;

    /**
     * Returns an array with unique values.
     */
    uniq(arr: any[]): any[];

    /**
     * Compile selector strings in `arr` from the bottom-up
     * to produce the selector combinations. For example
     * the following Stylus:
     */
    compileSelectors(arr: string[], leaveHidden: boolean): string[];
}

interface StylusUrl {
    (options: StylusUrlOptions): StylusLiteralFunction;

    mimes: {
        ".gif": string;
        ".png": string;
        ".jpg": string;
        ".jpeg": string;
        ".svg": string;
        ".ttf": string;
        ".eot": string;
        ".woff": string;
    };
}

interface StylusMiddleware {
    (req: any, res: any, next: Function): void;
}

//#endregion

//#region Internal Classes

declare class StylusVisitor {
}

declare class StylusParser {
}

declare class StylusEvaluator {
}

declare class StylusCompiler {
}

declare class StylusRenderer { //extends events.EventEmitter {
    options: StylusRenderOptions;
    str: string;
    events: any;

    constructor(str: string);
    constructor(str: string, options: StylusRenderOptions);

    /**
     * Parse and evaluate AST, then callback `fn(err, css, js)`.
     */
    render(callback: StylusRenderCallback): void;

    /**
     * Get dependencies of the compiled file.
     */
    deps(filename: string): string[];

    /**
     * Set option `key` to `val`.
     */
    set(key: string, val: any): StylusRenderer;

    /**
     * Get option `key`.
     */
    get(key: string): any;

    /**
     * Include the given `path` to the lookup paths array.
     */
    include(path: string): StylusRenderer;

    /**
     * Use the given `fn`.
     *
     * This allows for plugins to alter the renderer in
     * any way they wish, exposing paths etc.
     */
    use(fn: Function): StylusRenderer;

    /**
     * Define function or global var with the given `name`. Optionally
     * the function may accept full expressions, by setting `raw`
     * to `true`.
     */
    define(name: string, fn: Function): StylusRenderer;
    define(name: string, node: StylusNode): StylusRenderer;
    define(name: string, fn: Function, raw: boolean): StylusRenderer;
    define(name: string, node: StylusNode, raw: boolean): StylusRenderer;

    /**
     * Import the given `file`.
     */
    import(file: string): StylusRenderer;
}

//#endregion

//#region Nodes Classes

declare class StylusNode {
    lineno: number;
    column: number;
    filename: string;

    first: StylusNode;
    hash: string;
    nodeName: string;

    constructor();

    /**
     * Return a clone of this node.
     */
    clone(): StylusNode;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { lineno: number; column: number; filename: string };

    /**
     * Nodes by default evaluate to themselves.
     */
    eval(): StylusNode;

    /**
     * Return true.
     */
    toBoolean(): StylusNodeBoolean;

    /**
     * Return the expression, or wrap this node in an expression.
     */
    toExpression(): StylusNodeExpression;

    /**
     * Return false if `op` is generally not coerced.
     */
    shouldCoerce(op: string): boolean;

    /**
     * Operate on `right` with the given `op`.
     */
    operate(op: string, right: StylusNode): StylusNode;

    /**
     *  Default coercion throws.
     */
    coerce(other: StylusNode): StylusNode;
}

declare class StylusNodeRoot extends StylusNode {
    nodes: StylusNode[];

    /**
     * Push a `node` to this block.
     */
    push(node: StylusNode): void;

    /**
     * Unshift a `node` to this block.
     */
    unshift(node: StylusNode): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { nodes: StylusNode[]; lineno: number; column: number; filename: string };
}

declare class StylusNodeString extends StylusNode {
    val: string;
    string: string;
    prefixed: boolean;
    quote: string;

    constructor(val: string, quote: string);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { val: string; quote: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeNumber extends StylusNode {

}

declare class StylusNodeBoolean extends StylusNode {
    val: boolean;
    isTrue: boolean;
    isFalse: boolean;

    constructor();
    constructor(val: boolean);

    /**
     * Negate the value.
     */
    negate(): StylusNodeBoolean;

    /**
     * Return 'Boolean'.
     */
    inspect(): StylusNodeBoolean;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; val: boolean; lineno: number; column: number; filename: string };
}

declare class StylusNodeObject extends StylusNode {
    vals: StylusDictionary<StylusNode>;
    length: number;

    constructor();

    /**
     * Set `key` to `val`.
     */
    set(key: string, value: StylusNode): StylusNodeObject;

    /**
     * Get `key`.
     */
    get(key: string): StylusNode;

    /**
     * Has `key`?
     */
    has(key: string): boolean;

    /**
     * Convert object to string with properties.
     */
    toBlock(): string;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; vals: StylusDictionary<StylusNode>; lineno: number; column: number; filename: string };}

declare class StylusNodeNull extends StylusNode {
    isNull: boolean;

    constructor();

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeIdent extends StylusNode {
    name: string;
    string: string;
    val: StylusNode;
    mixin: boolean;

    isEmpty: boolean;

    constructor(name: string, val: StylusNode);
    constructor(name: string, val: StylusNode, mixin: boolean);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; name: string; val: StylusNode; mixin: boolean; lineno: number; column: number; filename: string };
}

declare class StylusNodeLiteral extends StylusNode {
    val: string;
    string: string;
    prefixed: boolean;

    constructor(str: string);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; string: string; val: string; prefixed: boolean; lineno: number; column: number; filename: string };
}

declare class StylusNodeUnit extends StylusNode {
    val: number;
    type: string;

    constructor(val: number, type: string);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; val: number; type: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeRGBA extends StylusNode {
    r: number;
    g: number;
    b: number;
    a: number;
    rgba: StylusNodeRGBA;
    hsla: StylusNodeHSLA;

    constructor(r: number, g: number, b: number, a: number);

    /**
     * Return an `RGBA` without clamping values.
     */
    static withoutClamping(r: number, g: number, b: number, a: number): StylusNodeRGBA;

    /**
     * Return a `RGBA` from the given `hsla`.
     */
    static fromHSLA(hsla: StylusNodeHSLA): StylusNodeRGBA;

    /**
     * Add r,g,b,a to the current component values
     */
    add(r: number, g: number, b: number, a: number): StylusNodeRGBA;

    /**
     * Subtract r,g,b,a from the current component values
     */
    substract(r: number, g: number, b: number, a: number): StylusNodeRGBA;

    /**
     * Multiply rgb components by `n`.
     */
    multiply(n: number): StylusNodeRGBA;

    /**
     * Divide rgb components by `n`.
     */
    divide(n: number): StylusNodeRGBA;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; r: number; g: number; b: number; a: number; lineno: number; column: number; filename: string };
}

declare class StylusNodeHSLA extends StylusNode {
    h: number;
    s: number;
    l: number;
    a: number;
    hsla: StylusNodeHSLA;
    rgba: StylusNodeRGBA;

    constructor(h: number, s: number, l: number, a: number);

    /**
     * Return a `HSLA` from the given `hsla`.
     */
    static fromRGBA(rgba: StylusNodeRGBA): StylusNodeHSLA;

    /**
     * Add h,s,l to the current component values
     */
    add(h: number, s: number, l: number): StylusNodeHSLA;

    /**
     * Subtract h,s,l from the current component values
     */
    substract(h: number, s: number, l: number): StylusNodeHSLA;

    /**
     * Adjust lightness by `percent`.
     */
    adjustLightness(percent: number): StylusNodeHSLA;

    /**
     * djust hue by `deg`.
     */
    adjustHue(deg: number): StylusNodeHSLA;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; h: number; s: number; l: number; a: number; lineno: number; column: number; filename: string };
}

declare class StylusNodeBlock extends StylusNode {
    nodes: StylusNode[];
    parent: StylusNodeBlock;
    node: StylusNode;
    scope: boolean;

    hasProperties: boolean;
    hasMedia: boolean;
    isEmpty: boolean;

    constructor(parent: StylusNodeBlock);
    constructor(parent: StylusNodeBlock, node: StylusNode);

    /**
     * Push a `node` to this block.
     */
    push(node: StylusNode): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; nodes: StylusNode[]; scope: boolean; lineno: number; column: number; filename: string };
}

declare class StylusNodeGroup extends StylusNode {
    nodes: StylusNode[];
    block: StylusNodeBlock;

    hasOnlyPlaceholders: boolean;

    constructor();

    /**
     * Push the given `selector` node.
     */
    push(node: StylusNode): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; nodes: StylusNode[]; block: StylusNodeBlock; lineno: number; column: number; filename: string };
}

declare class StylusNodeExpression extends StylusNode {
    nodes: StylusNode[];
    isList: boolean;

    isEmpty: boolean;
    first: StylusNode;

    constructor(isList: boolean);

    /**
     * Push the given node.
     */
    push(node: StylusNode): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; nodes: StylusNode[]; isList: boolean; lineno: number; column: number; filename: string };
}

declare class StylusNodeProperty extends StylusNode {
    segments: StylusNode[];
    expr: StylusNodeExpression;

    constructor(segs: StylusNode[], expr: StylusNodeExpression);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; segments: StylusNode[]; name: string; expr?: StylusNodeExpression; literal?: StylusNodeLiteral; lineno: number; column: number; filename: string };
}

declare class StylusNodeEach extends StylusNode {
    val: string;
    key: string;
    expr: StylusNodeExpression;
    block: StylusNodeBlock;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; val: string; key: string; expr: StylusNodeExpression; block: StylusNodeBlock; lineno: number; column: number; filename: string };
}

declare class StylusNodeIf extends StylusNode {
    cond: StylusNodeExpression;
    elses: StylusNodeExpression[];
    block: StylusNodeBlock;
    negate: boolean;

    constructor(cond: StylusNodeExpression, negate: boolean);
    constructor(cond: StylusNodeExpression, block: StylusNodeBlock);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; cond: StylusNodeExpression; elses: StylusNodeExpression[]; block: StylusNodeBlock; negate: boolean; lineno: number; column: number; filename: string };
}

declare class StylusNodeCall extends StylusNode {
    name: string;
    args: StylusNodeExpression;

    constructor(name: string, args: StylusNodeExpression);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; name: string; args: StylusNodeExpression; lineno: number; column: number; filename: string };
}

declare class StylusNodeUnaryOp extends StylusNode {
    op: string;
    expr: StylusNodeExpression;

    constructor(op: string, expr: StylusNodeExpression);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; op: string; expr: StylusNodeExpression; lineno: number; column: number; filename: string };
}

declare class StylusNodeBinOp extends StylusNode {
    op: string;
    left: StylusNodeExpression;
    right: StylusNodeExpression;

    constructor(op: string, left: StylusNodeExpression, right: StylusNodeExpression);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; op: string; left: StylusNodeExpression; right: StylusNodeExpression; lineno: number; column: number; filename: string };
}

declare class StylusNodeTernary extends StylusNode {
    op: string;
    trueExpr: StylusNodeExpression;
    falseExpr: StylusNodeExpression;

    constructor(op: string, trueExpr: StylusNodeExpression, falseExpr: StylusNodeExpression);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; op: string; trueExpr: StylusNodeExpression; falseExpr: StylusNodeExpression; lineno: number; column: number; filename: string };
}

declare class StylusNodeReturn extends StylusNode {
    expr: StylusNodeExpression;

    constructor(expr: StylusNodeExpression);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; expr: StylusNodeExpression; lineno: number; column: number; filename: string };
}

declare class StylusNodeMedia extends StylusNode {
    val: string;

    constructor(val: string);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; val: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeQueryList extends StylusNode {
    nodes: StylusNode[];

    constructor();

    /**
     * Push the given `node`.
     */
    push(node: StylusNode): void;

    /**
     * Merges this query list with the `other`.
     */
    merge(other: MediaQueryList): MediaQueryList;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; nodes: StylusNode[]; lineno: number; column: number; filename: string };
}

declare class StylusNodeQuery extends StylusNode {
    nodes: StylusNodeQueryExpr[];
    type: string;
    predicate: string;

    resolvedType: string;
    resolvedPredicate: string;

    constructor();

    /**
     * Push the given `expr`.
     */
    push(expr: StylusNodeQueryExpr): void;

    /**
     * Merges this query with the `other`.
     */
    merge(other: StylusNodeQuery): StylusNodeQuery;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; nodes: StylusNodeQueryExpr[]; predicate: string; type: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeQueryExpr extends StylusNode {
    segments: StylusNode[];
    expr: StylusNodeExpression;

    constructor(segs: StylusNode[]);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; segments: StylusNode[]; lineno: number; column: number; filename: string };
}

declare class StylusNodeParams extends StylusNode {
    nodes: StylusNode[];

    length: number;

    /**
     * Push the given `node`.
     */
    push(node: StylusNode): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; nodes: StylusNode[]; lineno: number; column: number; filename: string };
}

declare class StylusNodeComment extends StylusNode {
    str: string;
    suppress: boolean;
    inline: boolean;

    constructor(str: string, suppress: boolean, inline: boolean);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; str: string; suppress: boolean; inline: boolean; lineno: number; column: number; filename: string };
}

declare class StylusNodeKeyframes extends StylusNode {
    segments: StylusNode[];
    prefix: string;

    constructor(segs: StylusNode[]);
    constructor(segs: StylusNode[], prefix: string);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; segments: StylusNode[]; prefix: string; block: StylusNodeBlock; lineno: number; column: number; filename: string };
}

declare class StylusNodeMember extends StylusNode {
    left: StylusNode;
    right: StylusNode;

    constructor(left: StylusNode, right: StylusNode);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; left: StylusNode; right: StylusNode; val?: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeCharset extends StylusNode {
    val: string;

    constructor(val: string);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; val: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeNamespace extends StylusNode {
    val: string;
    prefix: string;

    constructor(val: string, prefix: string);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; val: string; prefix: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeImport extends StylusNode {
    path: StylusNodeExpression;
    once: boolean;

    constructor(path: StylusNodeExpression);
    constructor(path: StylusNodeExpression, once: boolean);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; path: StylusNodeExpression; lineno: number; column: number; filename: string };
}

declare class StylusNodeExtend extends StylusNode {
    selectors: StylusNodeSelector[];

    constructor(selectors: StylusNodeSelector[]);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; selectors: StylusNodeSelector[]; lineno: number; column: number; filename: string };
}

declare class StylusNodeFunction extends StylusNode {
    name: string;
    params: StylusNodeParams;
    body: StylusNodeBlock;

    constructor(name: string, params: StylusNodeParams, body: StylusNodeBlock);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; name: string; params: StylusNodeParams; body: StylusNodeBlock; lineno: number; column: number; filename: string };
}

declare class StylusNodeSelector extends StylusNode {
    inherits: boolean;
    segments: StylusNode[];

    constructor(segs: StylusNode[]);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; segments: StylusNode[]; inherits: boolean; val: string; lineno: number; column: number; filename: string };
}

declare class StylusNodeArguments extends StylusNodeExpression {
    map: StylusDictionary<StylusNode>;

    constructor();

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; map: StylusDictionary<StylusNode>; isList: boolean; preserve: boolean; nodes: StylusNode[]; lineno: number; column: number; filename: string };
}

declare class StylusNodeAtblock extends StylusNode {
    block: StylusNodeBlock;
    nodes: StylusNode[];

    constructor();

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; block: StylusNodeBlock; lineno: number; column: number; filename: string };
}

declare class StylusNodeAtrule extends StylusNode {
    type: string;

    hasOnlyProperties: boolean;

    constructor(type: string);

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): { __type: string; type: string; segments: StylusNode[]; block?: StylusNodeBlock; lineno: number; column: number; filename: string };
}

//#endregion

//#region Internal Interfaces

interface StylusDictionary<T> {
    [key: string]: T;
}

interface StylusRenderOptions {
    globals: StylusDictionary<any>;
    functions: StylusDictionary<any>;
    imports: string[];
    paths: string[];
    filename: string;
    Evaluator: typeof StylusEvaluator;
}

interface StylusRenderCallback {
    (err: Error, css: string, js: string): void;
}

interface StylusUrlOptions {
    limit?: string;
    path: string;
}

interface StylusLiteralFunction {
    (url: string): StylusNodeLiteral;
    raw: boolean;
}

interface StylusExceptionOptions {
    filename: string;
    context: number;
    lineno: number;
    column: number;
    input: string;
}

//#endregion

declare module "stylus" {
    export = StylusStatic;
}
