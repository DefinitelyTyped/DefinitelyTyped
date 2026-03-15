declare class Snapdragon {
    constructor(options?: Snapdragon.Options);

    options: Snapdragon.Options;
    isSnapdragon: boolean;

    compiler: Snapdragon.Compiler;
    parser: Snapdragon.Parser;
    compilers: { [type: string]: Snapdragon.CompilerFn };
    parsers: { [type: string]: Snapdragon.ParserFn };

    use(fn: (snapdragon: Snapdragon) => void): this;
    define(key: string, val: any): this;
    parse(str: string, options?: Snapdragon.Options): Snapdragon.AST;
    compile(ast: Snapdragon.AST, options?: Snapdragon.Options): { output: string };
    render(str: string, options?: Snapdragon.Options): string;
}

declare namespace Snapdragon {
    interface Options {
        source?: string | undefined;
        sourcemap?: boolean | undefined;
        [key: string]: any;
    }

    interface Position {
        line: number;
        column: number;
    }

    interface Node {
        isNode: boolean;
        type: string;
        value: string;
        nodes?: Node[] | undefined;
        parent?: Node | undefined;

        push(node: Node): number;
        unshift(node: Node): number;
        pop(): Node | undefined;
        shift(): Node | undefined;
        remove(node: Node): Node[];
        find(type: string, n?: number): Node | null;
        visit(fn: (node: Node) => any): Node;
        clone(): Node;
        stringify(fn?: (node: Node) => string): string;
        isType(type: string): boolean;
        hasType(type: string): boolean;
        has(node: Node): boolean;
        isEmpty(fn?: (node: Node) => boolean): boolean;
        isInside(type: string): boolean;

        readonly siblings: Node[] | null;
        readonly index: number;
        readonly prev: Node | null;
        readonly next: Node | null;
        readonly first: Node | null;
        readonly last: Node | null;
        readonly depth: number;
        readonly size: number;
    }

    interface AST extends Node {
        type: "root";
    }

    type CompilerFn = (node: Node) => void;
    type ParserFn = (this: Parser) => Node | undefined;

    class Compiler {
        constructor(options?: Options, state?: object);

        options: Options;
        state: { inside: { [key: string]: boolean }; [key: string]: any };
        compilers: { [type: string]: CompilerFn };
        output: string;
        indent: string;
        ast: AST;
        isCompiler: boolean;

        error(msg: string, node?: Node): Error;
        emit(val: string, node?: Node): string;
        noop(node: Node): void;
        define(key: string, val: any): this;
        set(type: string, fn: CompilerFn): this;
        get(type: string): CompilerFn;
        visit(node: Node): Node;
        mapVisit(parent: Node): this;
        compile(ast: AST, options?: Options): this;
    }

    class Parser {
        constructor(options?: Options);

        isParser: boolean;
        orig: string;
        input: string;
        parsed: string;
        currentType: string;
        count: number;
        column: number;
        line: number;
        errors: Error[];
        parsers: { [type: string]: ParserFn };
        types: string[];
        sets: { [key: string]: Node[] };
        fns: Array<(...args: any[]) => any>;
        tokens: Node[];
        stack: Node[];
        typeStack: string[];
        setStack: string[];
        ast: AST;
        nodes: Node[];

        error(msg: string, node?: Node): Error;
        define(key: string, val: any): this;
        node(val: string, type: string): Node;
        set(type: string, fn: ParserFn): this;
        get(type: string): ParserFn;
        push(type: string, token?: Node): number;
        pop(type: string): Node | undefined;
        isInside(type: string): boolean;
        isType(node: Node, type: string): boolean;
        prev(n?: number): Node | undefined;
        consume(len: number): void;
        match(regex: RegExp): RegExpMatchArray | null;
        eos(): Node;
        advance(): Node | undefined;
        parse(input: string): AST;

        readonly last: Node | undefined;
    }
}

export = Snapdragon;
