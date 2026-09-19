export type TemplateCallback<T> = (err: lib.TemplateError | null, res: T | null) => void;
export type Callback<E, T> = (err: E | null, res: T | null) => void;

export function render(name: string, context?: object): string;
export function render(name: string, context?: object, callback?: TemplateCallback<string>): void;

export function renderString(src: string, context: object): string;
export function renderString(src: string, context: object, callback?: TemplateCallback<string>): void;

export function compile(src: string, env?: Environment, callback?: TemplateCallback<Template>): Template;

export function precompile(path: string, opts?: PrecompileOptions): string;
export function precompileString(src: string, opts?: PrecompileOptions): string;

export interface PrecompileOptions {
    name?: string | undefined;
    asFunction?: boolean | undefined;
    force?: boolean | undefined;
    env?: Environment | undefined;
    include?: string[] | undefined;
    exclude?: string[] | undefined;
    wrapper?(templates: { name: string; template: string }, opts: PrecompileOptions): string;
}

export class Template {
    constructor(src: string, env?: Environment, path?: string, eagerCompile?: boolean);
    render(context?: object): string;
    render(context?: object, callback?: TemplateCallback<string>): void;
}

export function configure(options: ConfigureOptions): Environment;
export function configure(path: string | string[], options?: ConfigureOptions): Environment;

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
    tags?:
        | {
            blockStart?: string | undefined;
            blockEnd?: string | undefined;
            variableStart?: string | undefined;
            variableEnd?: string | undefined;
            commentStart?: string | undefined;
            commentEnd?: string | undefined;
        }
        | undefined;
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
    __name?: string;
    tags: string[];
    // Parser API is undocumented it is suggested to check the source: https://github.com/mozilla/nunjucks/blob/master/src/parser.js
    parse(parser: any, nodes: any, lexer: any): any;
}

export function installJinjaCompat(): void;

/** A synchronous or an asynchronous loader. */
export type ILoaderAny = ILoader | ILoaderAsync | WebLoader;
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

export class PrecompiledLoader extends Loader implements ILoader {
    constructor(compiledTemplates?: any[]);
    getSource(name: string): LoaderSource;
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

export type InternalExtendClass<ClassType extends new (...args: any[]) => any, AdditionalProps extends object> = new (
    ...args: ConstructorParameters<ClassType>
) => InstanceType<ClassType> & AdditionalProps;

/** Internal base class for some public classes */
export class Obj {
    constructor(...args: Partial<any[]>);
    readonly typename: string;
    /** Temporary property to emulate `super.<property>` invocation */
    parent: any;
    static extend<ObjClass extends typeof Obj, Props extends object>(
        this: ObjClass,
        props: Props,
    ): InternalExtendClass<ObjClass, Props>;
    static extend<ObjClass extends typeof Obj, Props extends object>(
        this: ObjClass,
        name: string,
        props?: Props,
    ): InternalExtendClass<ObjClass, Props>;
}

export namespace nodes {
    type NodeIterFieldsCallback<Fields extends string[], FieldValue extends any[]> = (
        fieldValue: FieldValue[number],
        fieldName: Fields[number],
    ) => void;

    class Node<FieldValue extends any[] = any[], Fields extends string[] = string[]> extends Obj {
        constructor(lineno: number, colno: number, ...args: Partial<FieldValue>);
        lineno: number;
        colno: number;
        fields: Fields;
        findAll<NodeType extends typeof Node>(type: NodeType, results?: Array<any>): NodeType[];
        iterFields(func: NodeIterFieldsCallback<Fields, FieldValue>): void;
    }

    class Value extends Node<string[]> {
        value: string;
    }

    class NodeList extends Node<Node[]> {
        children: Node[];
        addChild(node: Node): void;
    }

    class Root extends NodeList {}

    class Literal extends Value {}

    class Symbol extends Value {}

    class Group extends NodeList {}

    class ArrayNode extends NodeList {}

    class Pair extends Node<[string, string]> {
        key: string;
        value: string;
    }

    class Dict extends NodeList {}

    class LookupVal extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        target: InstanceType<typeof Node>;
        val: InstanceType<typeof Node>;
    }

    class If extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        cond: InstanceType<typeof nodes.Node>;
        body: InstanceType<typeof Node>;
        else_: InstanceType<typeof Node>;
    }

    class IfAsync extends If {}

    // Inherited from `Node` in nunjucks, NOT `If`
    class InlineIf extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        cond: InstanceType<typeof Node>;
        body: InstanceType<typeof Node>;
        else_: InstanceType<typeof Node>;
    }

    class For extends Node<
        [InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>]
    > {
        arr: InstanceType<typeof Node>;
        name: InstanceType<typeof Node>;
        body: InstanceType<typeof Node>;
        else_: InstanceType<typeof Node>;
    }
    class AsyncEach extends For {}
    class AsyncAll extends For {}

    class Macro extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        name: InstanceType<typeof Node>;
        args: InstanceType<typeof Node>;
        body: InstanceType<typeof Node>;
    }
    class Caller extends Macro {}

    class Import extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        template: InstanceType<typeof Node>;
        target: InstanceType<typeof Node>;
        withContext: InstanceType<typeof Node>;
    }

    class FromImport extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        template: InstanceType<typeof Node>;
        names: InstanceType<typeof Node>;
        withContext: InstanceType<typeof Node>;
    }

    class FunCall<Values extends any[] = [InstanceType<typeof Node>, InstanceType<typeof Node>]> extends Node<Values> {
        name: InstanceType<typeof Node>;
        args: InstanceType<typeof Node>;
    }
    class Filter<Values extends any[]> extends FunCall<Values> {}
    class FilterAsync extends Filter<
        [InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>]
    > {
        name: InstanceType<typeof Node>;
        args: InstanceType<typeof Node>;
        symbol: InstanceType<typeof Node>;
    }

    class KeywordArgs extends Dict {}

    class Block extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        name: InstanceType<typeof Node>;
        body: InstanceType<typeof Node>;
    }

    class Super extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        blockName: InstanceType<typeof Node>;
        symbol: InstanceType<typeof Node>;
    }

    class TemplateRef extends Node<[InstanceType<typeof Node>]> {
        template: InstanceType<typeof Node>;
    }
    class Extends extends TemplateRef {}

    class Include extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        template: InstanceType<typeof Node>;
        ignoreMissing: InstanceType<typeof Node>;
    }

    class Set extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        targets: InstanceType<typeof Node>;
        value: InstanceType<typeof Node>;
    }

    class Switch extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        expr: InstanceType<typeof Node>;
        cases: InstanceType<typeof Node>;
        default: InstanceType<typeof Node>;
    }

    class Case extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        cond: InstanceType<typeof Node>;
        body: InstanceType<typeof Node>;
    }

    class Output extends NodeList {}

    class Capture extends Node<[InstanceType<typeof Node>]> {
        body: InstanceType<typeof Node>;
    }

    class TemplateData extends Literal {}

    class UnaryOp extends Node<[InstanceType<typeof Node>]> {
        target: InstanceType<typeof Node>;
    }

    class BinOp extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        left: InstanceType<typeof Node>;
        right: InstanceType<typeof Node>;
    }
    class In extends BinOp {}
    class Is extends BinOp {}
    class Or extends BinOp {}
    class And extends BinOp {}

    class Not extends UnaryOp {}

    class Add extends BinOp {}
    class Concat extends BinOp {}
    class Sub extends BinOp {}
    class Mul extends BinOp {}
    class Div extends BinOp {}
    class FloorDiv extends BinOp {}
    class Mod extends BinOp {}
    class Pow extends BinOp {}
    class Neg extends UnaryOp {}
    class Pos extends UnaryOp {}

    class Compare extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        expr: InstanceType<typeof Node>;
        ops: InstanceType<typeof Node>;
    }

    class CompareOperand extends Node<[InstanceType<typeof Node>, InstanceType<typeof Node>]> {
        expr: InstanceType<typeof Node>;
        type: InstanceType<typeof Node>;
    }

    type CallExtensionName = Extension['__name'] | Extension;

    class CallExtension extends Node {
        constructor(
            ext: CallExtensionName,
            prop: string,
            args: InstanceType<typeof NodeList>,
            contentArgs: Array<InstanceType<typeof Node>>,
        );

        extName: CallExtensionName;
        prop: string;
        args: InstanceType<typeof NodeList>;
        contentArgs: Array<InstanceType<typeof Node>>;
        autoescape: boolean;
    }
    class CallExtensionAsync extends CallExtension {}

    function printNodes(node: Node, indent?: number): void;
}

export namespace parser {
    function parse(src: string, extensions: Extension[], opts: lexer.ITokenizerOptions): nodes.Root;
}

export namespace lexer {
    type ITokenizerOptions = Pick<ConfigureOptions, 'tags' | 'trimBlocks' | 'lstripBlocks'>;

    interface ITokenRegexValue {
        body: string;
        flags: string;
    }

    interface IToken {
        type: string;
        value: string | null | ITokenRegexValue;
        lineno: number | undefined;
        colno: number | undefined;
    }

    function lex(src: string, opts: ITokenizerOptions): InstanceType<typeof Tokenizer>;

    class Tokenizer {
        constructor(str: string, opts: ITokenizerOptions);
        str: string;
        index: number;
        len: number;
        lineno: number;
        colno: number;
        in_code: boolean;
        tags: {
            [key: string]: string;
        };
        trimBlocks: boolean;
        lstripBlocks: boolean;

        nextToken(): null | IToken;
        _parseString(delimiter: string): string;
        _matches(str: string): boolean | null;
        _extractString<S extends string>(str: S): S | null;
        _extractUntil(charString: string): string | null;
        _extract(charString: string): string | null;
        _extractMatching(breakOnMatch: boolean, charString: string): string | null;
        _extractRegex(regex: RegExp): null;
        isFinished(): boolean;
        forwardN(n: number): void;
        forward(): void;
        backN(n: number): void;
        back(): void;
        current(): string;
        currentStr(): string;
        previous(): string;
    }
}
