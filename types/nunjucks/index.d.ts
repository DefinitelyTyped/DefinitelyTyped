export type TemplateCallback<T> = (err: lib.TemplateError | null, res: T | null) => void;
export type Callback<E, T> = (err: E | null, res: T | null) => void;

export function render(name: string, context?: object): string;
export function render(name: string, context?: object, callback?: TemplateCallback<string>): void;

export function renderString(src: string, context: object): string;
export function renderString(src: string, context: object, callback?: TemplateCallback<string>): void;

export function compile(src: string, env?: Environment, callback?: TemplateCallback<Template>): Template;

export function precompile(path: string, opts?: PrecompileOptions): string;
export function precompileString(src: string, opts?: PrecompileStringOptions): string;

export interface PrecompileOptions {
    name?: string | undefined;
    asFunction?: boolean | undefined;
    force?: boolean | undefined;
    env?: Environment | undefined;
    include?: string[] | undefined;
    exclude?: string[] | undefined;
    wrapper?(templates: PrecompiledTemplate[], opts: PrecompileOptions): string;
}

export class Template {
    constructor(src: string, env?: Environment, path?: string, eagerCompile?: boolean);
    render(context?: object): string;
    render(context?: object, callback?: TemplateCallback<string>): void;
}

export function configure(options: ConfigureOptions): Environment;
export function configure(path: string | string[] | undefined, options?: ConfigureOptions): Environment;

export interface ConfigureOptions {
    autoescape?: boolean | undefined;
    throwOnUndefined?: boolean | undefined;
    trimBlocks?: boolean | undefined;
    lstripBlocks?: boolean | undefined;
    watch?: boolean | undefined;
    noCache?: boolean | undefined;
    dev?: boolean | undefined;
    web?:
        | {
            useCache?: boolean | undefined;
            async?: boolean | undefined;
        }
        | undefined;
    express?: object | undefined;
    tags?: Partial<ConfigureOptionsTags> | undefined;
}

export class Environment {
    options: {
        autoescape: boolean;
    };

    constructor(loader?: ILoaderAny | ILoaderAny[] | null, opts?: ConfigureOptions);
    render(name: string, context?: object): string;
    render(name: string, context?: object, callback?: TemplateCallback<string>): void;

    renderString(name: string, context: object): string;
    renderString(name: string, context: object, callback?: TemplateCallback<string>): void;

    addFilter(name: string, func: (...args: any[]) => any, async?: boolean): Environment;
    getFilter(name: string): (...args: any[]) => any;

    addExtension(name: string, ext: Extension): Environment;
    removeExtension(name: string): void;
    getExtension(name: string): Extension;
    hasExtension(name: string): boolean;

    addGlobal(name: string, value: any): Environment;
    getGlobal(name: string): any;

    getTemplate(name: string, eagerCompile?: boolean): Template;
    getTemplate(name: string, eagerCompile?: boolean, callback?: Callback<Error, Template>): void;

    express(app: object): void;

    on(
        event: "load",
        fn: (name: string, source: { src: string; path: string; noCache: boolean }, loader: Loader) => void,
    ): void;
}

export interface Extension {
    /** Sets to instance via `env.addExtension()` */
    __name?: string | undefined;
    tags: string[];
    // Parser API is undocumented it is suggested to check the source: https://github.com/mozilla/nunjucks/blob/master/src/parser.js
    parse(parser: parser.Parser, nodes: typeof import(".").nodes, lexer: typeof import(".").lexer): NodeType;
}

export function installJinjaCompat(): void;

/** A synchronous or an asynchronous loader. */
export type ILoaderAny = ILoader | ILoaderAsync | WebLoader | PrecompiledLoader;
// WebLoader is part of the union because it can be both sync or async depending
// on its constructor arguments, which possibly could only be known on runtime.

/** A synchronous loader. */
export interface ILoader {
    async?: false | undefined;

    getSource: (name: string) => LoaderSource;
}

/** An asynchronous loader. */
export interface ILoaderAsync {
    async: true;

    getSource: (name: string, callback: Callback<Error, LoaderSource>) => void;
}

// Needs both Loader and ILoader since nunjucks uses a custom object system
// Object system is also responsible for the extend methods
export class Loader {
    on(name: string, func: (...args: any[]) => any): void;
    emit(name: string, ...args: any[]): void;
    resolve(from: string, to: string): string;
    isRelative(filename: string): boolean;
    static extend<LoaderClass extends typeof Loader>(this: LoaderClass, toExtend: ILoaderAny): LoaderClass;
}

export interface LoaderSource {
    src: string;
    path: string;
    noCache: boolean;
}

export interface LoaderOptions {
    /** if true, the system will automatically update templates when they are changed on the filesystem */
    watch?: boolean;

    /**  if true, the system will avoid using a cache and templates will be recompiled every single time */
    noCache?: boolean;
}

export type FileSystemLoaderOptions = LoaderOptions;
export type NodeResolveLoaderOptions = LoaderOptions;

export class FileSystemLoader extends Loader implements ILoader {
    constructor(searchPaths?: string | string[], opts?: FileSystemLoaderOptions);
    getSource(name: string): LoaderSource;
}

export class NodeResolveLoader extends Loader implements ILoader {
    constructor(searchPaths?: string | string[], opts?: NodeResolveLoaderOptions);
    getSource(name: string): LoaderSource;
}

export interface WebLoaderOptions {
    useCache?: boolean;
    async?: boolean;
}

export class WebLoader extends Loader {
    constructor(baseUrl?: string, opts?: WebLoaderOptions);
    async: boolean;

    getSource: (name: string, callback: Callback<Error, LoaderSource>) => LoaderSource;
}

export interface CompiledTemplate {
    root: ContextBlock;
    [block: string]: ContextBlock;
}

export interface PrecompiledSource {
    src: {
        type: "code";
        obj: CompiledTemplate;
    };
    path: string;
}

// Precompiled loaders return code objects and null for missing templates.
export class PrecompiledLoader extends Loader {
    constructor(compiledTemplates?: Record<string, CompiledTemplate>);
    getSource(name: string): PrecompiledSource | null;
}

export namespace runtime {
    class SafeString {
        constructor(val: string);
        val: string;
        length: number;
        valueOf(): string;
        toString(): string;
    }
}

export namespace lib {
    class TemplateError extends Error {
        constructor(message: string, lineno: number, colno: number);

        name: string; // always 'Template render error'
        message: string;
        stack: string;

        cause?: Error | undefined;
        lineno: number;
        colno: number;
    }
}

export interface PrecompiledTemplate {
    name: string;
    template: string;
}

// The runtime passes an array to custom precompile wrappers.
export type PrecompileStringOptions = PrecompileOptions;

export interface ConfigureOptionsTags {
    blockStart: string;
    blockEnd: string;
    variableStart: string;
    variableEnd: string;
    commentStart: string;
    commentEnd: string;
}

export type ContextBlock = (
    env: Environment,
    context: Context,
    frame: unknown,
    runtime: unknown,
    callback: (error: unknown, value?: unknown) => void,
) => void;

// Internal rendering context; Nunjucks does not export its constructor.
export interface Context {
    env: Environment;
    ctx: Record<string, unknown>;
    blocks: Record<string, ContextBlock[]>;
    exported: string[];

    init(ctx: Record<string, unknown>, blocks: Record<string, ContextBlock>, env?: Environment): void;
    lookup(name: string): unknown;
    setVariable(name: string, value: unknown): void;
    getVariables(): Record<string, unknown>;
    addBlock(name: string, block: ContextBlock): this;
    getBlock(name: string): ContextBlock;
    getSuper(
        env: Environment,
        name: string,
        block: ContextBlock,
        frame: unknown,
        runtime: unknown,
        callback: (error: unknown, value?: unknown) => void,
    ): void;
    addExport(name: string): void;
    getExported(): Record<string, unknown>;
}

export type NodeType =
    | nodes.Node
    | nodes.Root
    | nodes.NodeList
    | nodes.Value
    | nodes.Literal
    | nodes.Symbol
    | nodes.Group
    | nodes.Array
    | nodes.Pair
    | nodes.Dict
    | nodes.Output
    | nodes.Capture
    | nodes.TemplateData
    | nodes.If
    | nodes.IfAsync
    | nodes.InlineIf
    | nodes.For
    | nodes.AsyncEach
    | nodes.AsyncAll
    | nodes.Macro
    | nodes.Caller
    | nodes.Import
    | nodes.FromImport
    | nodes.FunCall
    | nodes.Filter
    | nodes.FilterAsync
    | nodes.KeywordArgs
    | nodes.Block
    | nodes.Super
    | nodes.Extends
    | nodes.Include
    | nodes.Set
    | nodes.Switch
    | nodes.Case
    | nodes.LookupVal
    | nodes.BinOp
    | nodes.In
    | nodes.Is
    | nodes.Or
    | nodes.And
    | nodes.Not
    | nodes.Add
    | nodes.Concat
    | nodes.Sub
    | nodes.Mul
    | nodes.Div
    | nodes.FloorDiv
    | nodes.Mod
    | nodes.Pow
    | nodes.Neg
    | nodes.Pos
    | nodes.Compare
    | nodes.CompareOperand
    | nodes.CallExtension
    | nodes.CallExtensionAsync;

export type ExpressionNode =
    | nodes.Literal
    | nodes.Symbol
    | nodes.Group
    | nodes.Array
    | nodes.Dict
    | nodes.FunCall
    | nodes.LookupVal
    | nodes.Filter
    | nodes.InlineIf
    | nodes.In
    | nodes.Is
    | nodes.Or
    | nodes.And
    | nodes.Not
    | nodes.Compare
    | nodes.Concat
    | nodes.Add
    | nodes.Sub
    | nodes.Mul
    | nodes.Div
    | nodes.FloorDiv
    | nodes.Mod
    | nodes.Pow
    | nodes.Neg
    | nodes.Pos;

export namespace nodes {
    type LiteralValue = string | number | boolean | RegExp | null;

    abstract class Node<TypeName extends string = "Node", T extends string = string> {
        constructor(lineno?: number, colno?: number);

        readonly typename: NoInfer<TypeName>;
        readonly fields: NoInfer<T>[];
        lineno: number | undefined;
        colno: number | undefined;

        /** `results` is mutated if passed */
        findAll<T extends Node<any, any>>(type: abstract new(...args: any[]) => T, results?: T[] | null): T[];

        iterFields(func: (value: this[T & keyof this], name: NoInfer<T>) => void): void;
    }

    class Value<TypeName extends string = "Value", ValueType extends LiteralValue = LiteralValue>
        extends Node<TypeName, "value">
    {
        constructor(lineno?: number, colno?: number, value?: ValueType | null);

        value: ValueType | null;
    }

    class NodeList<TypeName extends string = "NodeList", Child extends NodeType = NodeType>
        extends Node<TypeName, "children">
    {
        constructor(lineno?: number, colno?: number, children?: Child[] | null);

        children: Child[];

        addChild<T extends Child>(node: T): void;
    }

    class Root extends NodeList<"Root"> {}

    class Literal<TypeName extends string = "Literal", ValueType extends LiteralValue = LiteralValue>
        extends Value<TypeName, ValueType>
    {}
    class Symbol extends Value<"Symbol", string> {}

    class Group extends NodeList<"Group"> {}
    class Array extends NodeList<"Array"> {}

    class Pair extends Node<"Pair", "key" | "value"> {
        constructor(lineno?: number, colno?: number, key?: NodeType | null, value?: NodeType | null);

        key: NodeType | null;
        value: NodeType | null;
    }

    class Dict<TypeName extends string = "Dict", T extends NodeType = nodes.Pair> extends NodeList<TypeName, T> {}

    class LookupVal extends Node<"LookupVal", "target" | "val"> {
        constructor(lineno?: number, colno?: number, target?: NodeType | null, val?: NodeType | null);

        target: NodeType | null;
        val: NodeType | null;
    }

    class If<TypeName extends string = "If"> extends Node<TypeName, "cond" | "body" | "else_"> {
        constructor(
            lineno?: number,
            colno?: number,
            cond?: NodeType | null,
            body?: NodeList | null,
            else_?: NodeList | If | IfAsync | null,
        );

        cond: NodeType | null;
        body: NodeList | null;
        else_: NodeList | If | IfAsync | null;
    }

    class IfAsync extends If<"IfAsync"> {}

    // Inherited from `Node` in nunjucks, NOT `If`
    class InlineIf extends Node<"InlineIf", "cond" | "body" | "else_"> {
        constructor(
            lineno?: number,
            colno?: number,
            cond?: NodeType | null,
            body?: NodeType | null,
            else_?: NodeType | null,
        );

        cond: NodeType | null;
        body: NodeType | null;
        else_: NodeType | null;
    }

    class For<TypeName extends string = "For"> extends Node<TypeName, "arr" | "name" | "body" | "else_"> {
        constructor(
            lineno?: number,
            colno?: number,
            arr?: NodeType | null,
            name?: Symbol | Array | null,
            body?: NodeList | null,
            else_?: NodeList | null,
        );
        arr: NodeType | null;
        name: Symbol | Array | null;
        body: NodeList | null;
        else_: NodeList | null;
    }

    class AsyncEach extends For<"AsyncEach"> {}
    class AsyncAll extends For<"AsyncAll"> {}

    class Macro<TypeName extends string = "Macro"> extends Node<TypeName, "name" | "args" | "body"> {
        constructor(
            lineno?: number,
            colno?: number,
            name?: NodeType | null,
            args?: NodeList | null,
            body?: NodeList | null,
        );

        name: NodeType | null;
        args: NodeList | null;
        body: NodeList | null;
    }

    class Caller extends Macro<"Caller"> {}

    class Import extends Node<"Import", "template" | "target" | "withContext"> {
        constructor(
            lineno?: number,
            colno?: number,
            template?: NodeType | null,
            target?: NodeType | null,
            withContext?: boolean | null,
        );

        template: NodeType | null;
        target: NodeType | null;
        withContext: boolean | null;
    }

    class FromImport extends Node<"FromImport", "template" | "names" | "withContext"> {
        constructor(
            lineno?: number,
            colno?: number,
            template?: NodeType | null,
            names?: nodes.NodeList | null,
            withContext?: boolean | null,
        );

        template: NodeType | null;
        names: nodes.NodeList;
        withContext: boolean | null;
    }

    class FunCall<TypeName extends string = "FunCall", T extends string = "name" | "args"> extends Node<TypeName, T> {
        constructor(lineno?: number, colno?: number, name?: NodeType | null, args?: nodes.NodeList | null);

        name: NodeType | null;
        args: nodes.NodeList | null;
    }
    class Filter<TypeName extends string = "Filter", T extends string = "name" | "args"> extends FunCall<TypeName, T> {
        constructor(lineno?: number, colno?: number, name?: nodes.Symbol | null, args?: nodes.NodeList | null);

        name: nodes.Symbol | null;
        args: nodes.NodeList | null;
    }
    class FilterAsync extends Filter<"FilterAsync", "name" | "args" | "symbol"> {
        constructor(
            lineno?: number,
            colno?: number,
            name?: nodes.Symbol | null,
            args?: nodes.NodeList | null,
            symbol?: nodes.Symbol | null,
        );

        name: nodes.Symbol | null;
        args: nodes.NodeList | null;
        symbol: nodes.Symbol | null;
    }

    class KeywordArgs extends Dict<"KeywordArgs", nodes.Pair> {}

    class Block extends Node<"Block", "name" | "body"> {
        constructor(lineno?: number, colno?: number, name?: Symbol | null, body?: NodeList | null);

        name: Symbol | null;
        body: NodeList | null;
    }

    class Super extends Node<"Super", "blockName" | "symbol"> {
        constructor(lineno?: number, colno?: number, blockName?: Symbol | null, symbol?: Symbol | null);

        blockName: Symbol | null;
        symbol: Symbol | null;
    }

    interface TemplateRef<TypeName extends string = "TemplateRef"> extends Node<TypeName, "template"> {
        template: NodeType | null;
    }

    class Extends extends Node<"Extends", "template"> {
        template: NodeType | null;
        constructor(lineno?: number, colno?: number, template?: NodeType | null);
    }

    class Include extends Node<"Include", "template" | "ignoreMissing"> {
        constructor(lineno?: number, colno?: number, template?: NodeType | null, ignoreMissing?: boolean | null);

        template: NodeType | null;
        ignoreMissing: boolean | null;
    }

    class Set extends Node<"Set", "targets" | "value"> {
        constructor(lineno?: number, colno?: number, targets?: NodeType[] | null, value?: NodeType | null);

        targets: NodeType[] | null;
        value: NodeType | null;
        /** Present for a block-style set; not part of `fields`. */
        body?: Capture;
    }

    class Switch extends Node<"Switch", "expr" | "cases" | "default"> {
        constructor(
            lineno?: number,
            colno?: number,
            expr?: NodeType | null,
            cases?: Case[] | null,
            default_?: NodeList | null,
        );

        expr: NodeType | null;
        cases: Case[] | null;
        default: NodeList | null;
    }

    class Case extends Node<"Case", "cond" | "body"> {
        constructor(lineno?: number, colno?: number, cond?: NodeType | null, body?: NodeList | null);

        cond: NodeType | null;
        body: NodeList | null;
    }

    class Output<T extends NodeType = NodeType> extends NodeList<"Output", T> {}

    class Capture extends Node<"Capture", "body"> {
        constructor(lineno?: number, colno?: number, body?: NodeList | null);

        body: NodeList | null;
    }

    class TemplateData extends Literal<"TemplateData", string> {}

    interface UnaryOp<TypeName extends string = "UnaryOp", T extends NodeType = NodeType>
        extends Node<TypeName, "target">
    {
        target: T | null;
    }

    class BinOp<TypeName extends string = "BinOp", Left extends NodeType = NodeType, Right extends NodeType = NodeType>
        extends Node<TypeName, "left" | "right">
    {
        constructor(lineno?: number, colno?: number, left?: Left | null, right?: Right | null);

        left: Left | null;
        right: Right | null;
    }

    class In extends BinOp<"In"> {}
    class Is extends BinOp<"Is"> {}
    class Or extends BinOp<"Or"> {}
    class And extends BinOp<"And"> {}
    class Not extends Node<"Not", "target"> {
        target: NodeType | null;
        constructor(lineno?: number, colno?: number, target?: NodeType | null);
    }
    class Add extends BinOp<"Add"> {}
    class Concat extends BinOp<"Concat"> {}
    class Sub extends BinOp<"Sub"> {}
    class Mul extends BinOp<"Mul"> {}
    class Div extends BinOp<"Div"> {}
    class FloorDiv extends BinOp<"FloorDiv"> {}
    class Mod extends BinOp<"Mod"> {}
    class Pow extends BinOp<"Pow"> {}
    class Neg extends Node<"Neg", "target"> {
        target: NodeType | null;
        constructor(lineno?: number, colno?: number, target?: NodeType | null);
    }
    class Pos extends Node<"Pos", "target"> {
        target: NodeType | null;
        constructor(lineno?: number, colno?: number, target?: NodeType | null);
    }

    class Compare extends Node<"Compare", "expr" | "ops"> {
        constructor(lineno?: number, colno?: number, expr?: NodeType | null, ops?: CompareOperand[] | null);

        expr: NodeType | null;
        ops: CompareOperand[] | null;
    }

    class CompareOperand extends Node<"CompareOperand", "expr" | "type"> {
        constructor(lineno?: number, colno?: number, expr?: NodeType | null, type?: string | null);

        expr: NodeType | null;
        type: string | null;
    }

    type ExtensionProperty<T> = (keyof T & string) | (T extends string ? string : never);

    class CallExtension<
        TypeName extends string = "CallExtension",
        T extends object | string = object | string,
        P extends ExtensionProperty<T> = ExtensionProperty<T>,
    > extends Node<TypeName, "extName" | "prop" | "args" | "contentArgs"> {
        constructor(ext: T, prop: P, args?: nodes.NodeList | null, contentArgs?: (NodeType | null)[] | null);

        extName: string | T;
        prop: P;
        args: NodeList;
        contentArgs: (NodeType | null)[];
        autoescape: unknown;
    }

    class CallExtensionAsync<
        T extends object | string = object | string,
        P extends ExtensionProperty<T> = ExtensionProperty<T>,
    > extends CallExtension<"CallExtensionAsync", T, P> {
        constructor(ext: T, prop: P, args?: nodes.NodeList | null, contentArgs?: (NodeType | null)[] | null);
    }

    function printNodes(node: NodeType, indent?: number): void;
}

export namespace parser {
    function parse(src: string, extensions?: Extension[], opts?: TokenizerOptions): nodes.Root;

    class Parser {
        private tokens: Tokenizer;
        private peeked: Token | null;
        private breakOnBlocks: string[] | null;
        private dropLeadingWhitespace: boolean;
        private extensions: Extension[];

        constructor(tokens: Tokenizer);

        nextToken(withWhitespace?: boolean): Token | null;

        peekToken(): Token | null;

        pushToken(tok: Token | null): void;

        error(msg: string, lineno?: number, colno?: number): lib.TemplateError;

        fail(msg: string, lineno?: number, colno?: number): never;

        skip(type: TokenType): boolean;

        expect<T extends TokenType>(type: T): Token<T>;

        skipValue<T extends TokenType>(type: T, val: Token<T>["value"]): boolean;

        skipSymbol(val: string): boolean;

        advanceAfterBlockEnd(name?: string): Token<TOKEN_BLOCK_END>;

        advanceAfterVariableEnd(): void;

        parseFor(): nodes.For | nodes.AsyncEach | nodes.AsyncAll;

        parseMacro(): nodes.Macro;

        parseCall(): nodes.Output;

        parseWithContext(): boolean | null;

        parseImport(): nodes.Import;

        parseFrom(): nodes.FromImport;

        parseBlock(): nodes.Block;

        parseExtends(): nodes.Extends;

        parseInclude(): nodes.Include;

        parseIf(): nodes.If | nodes.IfAsync;

        parseSet(): nodes.Set;

        parseSwitch(): nodes.Switch;

        parseStatement(): NodeType | null;

        parseRaw(tagName?: string): nodes.Output<nodes.TemplateData>;

        parsePostfix<T extends NodeType>(node: T): T | nodes.FunCall | nodes.LookupVal;

        parseExpression(): ExpressionNode;

        parseInlineIf(): nodes.InlineIf | ReturnType<Parser["parseOr"]>;

        parseOr(): nodes.Or | ReturnType<Parser["parseAnd"]>;
        parseAnd(): nodes.And | ReturnType<Parser["parseNot"]>;
        parseNot(): nodes.Not | ReturnType<Parser["parseIn"]>;
        parseIn(): nodes.In | nodes.Not | ReturnType<Parser["parseIs"]>;
        parseIs(): nodes.Is | nodes.Not | ReturnType<Parser["parseCompare"]>;
        parseCompare(): nodes.Compare | ReturnType<Parser["parseConcat"]>;
        parseConcat(): nodes.Concat | ReturnType<Parser["parseAdd"]>;
        parseAdd(): nodes.Add | ReturnType<Parser["parseSub"]>;
        parseSub(): nodes.Sub | ReturnType<Parser["parseMul"]>;
        parseMul(): nodes.Mul | ReturnType<Parser["parseDiv"]>;
        parseDiv(): nodes.Div | ReturnType<Parser["parseFloorDiv"]>;
        parseFloorDiv(): nodes.FloorDiv | ReturnType<Parser["parseMod"]>;
        parseMod(): nodes.Mod | ReturnType<Parser["parsePow"]>;
        parsePow(): nodes.Pow | ReturnType<Parser["parseUnary"]>;
        parseUnary(noFilters: true): nodes.Neg | nodes.Pos | ReturnType<Parser["parsePrimary"]>;
        parseUnary(noFilters?: boolean): nodes.Neg | nodes.Pos | nodes.Filter | ReturnType<Parser["parsePrimary"]>;
        parsePrimary(noPostfix: true): nodes.Literal | nodes.Symbol | nodes.Group | nodes.Array | nodes.Dict;
        parsePrimary(
            noPostfix?: boolean,
        ): nodes.Literal | nodes.Symbol | nodes.Group | nodes.Array | nodes.Dict | nodes.FunCall | nodes.LookupVal;
        parseFilterName(): nodes.Symbol;
        parseFilterArgs(node: NodeType): NodeType[];
        parseFilter<T extends NodeType>(node: T): T | nodes.Filter;
        parseFilterStatement(): nodes.Output<nodes.Filter>;
        parseAggregate(): nodes.Group | nodes.Array | nodes.Dict | null;
        parseSignature(tolerant: boolean | undefined, noParens: true): nodes.NodeList;
        parseSignature(tolerant?: false, noParens?: boolean): nodes.NodeList;
        parseSignature(tolerant?: boolean, noParens?: boolean): nodes.NodeList | null;
        parseUntilBlocks(...blockName: string[]): nodes.NodeList;
        parseNodes(): NodeType[];
        parse(): nodes.NodeList;
        parseAsRoot(): nodes.Root;
    }
}

export type TOKEN_STRING = "string";
export type TOKEN_WHITESPACE = "whitespace";
export type TOKEN_DATA = "data";
export type TOKEN_BLOCK_START = "block-start";
export type TOKEN_BLOCK_END = "block-end";
export type TOKEN_VARIABLE_START = "variable-start";
export type TOKEN_VARIABLE_END = "variable-end";
export type TOKEN_COMMENT = "comment";
export type TOKEN_LEFT_PAREN = "left-paren";
export type TOKEN_RIGHT_PAREN = "right-paren";
export type TOKEN_LEFT_BRACKET = "left-bracket";
export type TOKEN_RIGHT_BRACKET = "right-bracket";
export type TOKEN_LEFT_CURLY = "left-curly";
export type TOKEN_RIGHT_CURLY = "right-curly";
export type TOKEN_OPERATOR = "operator";
export type TOKEN_COMMA = "comma";
export type TOKEN_COLON = "colon";
export type TOKEN_TILDE = "tilde";
export type TOKEN_PIPE = "pipe";
export type TOKEN_INT = "int";
export type TOKEN_FLOAT = "float";
export type TOKEN_BOOLEAN = "boolean";
export type TOKEN_NONE = "none";
export type TOKEN_SYMBOL = "symbol";
export type TOKEN_SPECIAL = "special";
export type TOKEN_REGEX = "regex";

export type TokenType =
    | TOKEN_STRING
    | TOKEN_WHITESPACE
    | TOKEN_DATA
    | TOKEN_BLOCK_START
    | TOKEN_BLOCK_END
    | TOKEN_VARIABLE_START
    | TOKEN_VARIABLE_END
    | TOKEN_COMMENT
    | TOKEN_LEFT_PAREN
    | TOKEN_RIGHT_PAREN
    | TOKEN_LEFT_BRACKET
    | TOKEN_RIGHT_BRACKET
    | TOKEN_LEFT_CURLY
    | TOKEN_RIGHT_CURLY
    | TOKEN_OPERATOR
    | TOKEN_COMMA
    | TOKEN_COLON
    | TOKEN_TILDE
    | TOKEN_PIPE
    | TOKEN_INT
    | TOKEN_FLOAT
    | TOKEN_BOOLEAN
    | TOKEN_NONE
    | TOKEN_SYMBOL
    | TOKEN_SPECIAL
    | TOKEN_REGEX;

export interface BaseToken {
    lineno: number;
    colno: number;
}

export interface TokenRegex extends BaseToken {
    type: TOKEN_REGEX;
    value: {
        body: string;
        flags: string;
    };
}

/** Tokens with string as value */
export interface TokenString<T extends Exclude<TokenType, TOKEN_REGEX>> extends BaseToken {
    type: T;
    value: string;
}

export type Token<T extends TokenType = TokenType> = T extends TOKEN_REGEX ? TokenRegex
    : TokenString<Exclude<T, TOKEN_REGEX>>;

export interface TokenizerOptions {
    tags?: Partial<ConfigureOptionsTags>;
    trimBlocks?: boolean;
    lstripBlocks?: boolean;
}

export interface Tokenizer {
    isFinished(): boolean;
    nextToken(): Token | null;
    current(): string;
    /** returns what's left of the unparsed string */
    currentStr(): string;
    previous(): string;
    forwardN(n: number): void;
    forward(): void;
    backN(n: number): void;
    back(): void;
}

export namespace lexer {
    function lex(src: string, opts?: TokenizerOptions): Tokenizer;

    const TOKEN_STRING: TOKEN_STRING;
    const TOKEN_WHITESPACE: TOKEN_WHITESPACE;
    const TOKEN_DATA: TOKEN_DATA;
    const TOKEN_BLOCK_START: TOKEN_BLOCK_START;
    const TOKEN_BLOCK_END: TOKEN_BLOCK_END;
    const TOKEN_VARIABLE_START: TOKEN_VARIABLE_START;
    const TOKEN_VARIABLE_END: TOKEN_VARIABLE_END;
    const TOKEN_COMMENT: TOKEN_COMMENT;
    const TOKEN_LEFT_PAREN: TOKEN_LEFT_PAREN;
    const TOKEN_RIGHT_PAREN: TOKEN_RIGHT_PAREN;
    const TOKEN_LEFT_BRACKET: TOKEN_LEFT_BRACKET;
    const TOKEN_RIGHT_BRACKET: TOKEN_RIGHT_BRACKET;
    const TOKEN_LEFT_CURLY: TOKEN_LEFT_CURLY;
    const TOKEN_RIGHT_CURLY: TOKEN_RIGHT_CURLY;
    const TOKEN_OPERATOR: TOKEN_OPERATOR;
    const TOKEN_COMMA: TOKEN_COMMA;
    const TOKEN_COLON: TOKEN_COLON;
    const TOKEN_TILDE: TOKEN_TILDE;
    const TOKEN_PIPE: TOKEN_PIPE;
    const TOKEN_INT: TOKEN_INT;
    const TOKEN_FLOAT: TOKEN_FLOAT;
    const TOKEN_BOOLEAN: TOKEN_BOOLEAN;
    const TOKEN_NONE: TOKEN_NONE;
    const TOKEN_SYMBOL: TOKEN_SYMBOL;
    const TOKEN_SPECIAL: TOKEN_SPECIAL;
    const TOKEN_REGEX: TOKEN_REGEX;
}
