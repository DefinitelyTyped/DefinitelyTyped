// Type definitions for twig 1.12
// Project: https://github.com/twigjs/twig.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 Tim Schumacher <https://github.com/enko>
//                 Maik Tizziani <https://github.com/mtizziani>
//                 Daniel Melcer <https://github.com/dmelcer9>
//                 Chris Frewin <https://github.com/princefishthrower>
//                 Emmanuel Gautier <https://github.com/emmanuelgautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/twig.d.ts

export interface Parameters {
    id?: any;
    blocks?: any;
    macros?: any;
    base?: any;
    path?: any;
    href?: any;
    name?: any;
    method?: any;
    options?: any;
    data?: any;
    async?: any;
    load?: ((template: Template) => void) | undefined;
}

export interface Template {
    reset(blocks: any): void;
    render(context?: any, params?: any, allow_async?: false): string;
    render(context?: any, params?: any, allow_async?: boolean): string | Promise<string>;
    renderAsync(context?: any, params?: any): Promise<string>;
    importFile(file: string): Template;
    importBlocks(file: string, override?: boolean): void;
    importMacros(file: string): Template;
    getLoaderMethod(): string;
    compile(options: any): string;
}

export interface CompileOptions {
    filename: string;
    settings: {
        views: any;
        'twig options': any;
    };
}

export interface RenderOptions {
    [index: string]: any;
    allowAsync?: boolean | undefined;
    settings?:
        | {
              views: any;
              'twig options': any;
          }
        | undefined;
}

export interface TagToken {
    type: string;
    match: RegExpExecArray;
    stack?: CompiledToken[];
}

export interface RawOutput {
    type: 'raw';
    value: string;
}

export interface TagTokenWithOutput extends TagToken {
    output: RawOutput[];
}

export interface ExtendableParseContext {} // tslint:disable-line:no-empty-interface

export interface ParseLoopContext {
    index: number;
    index0: number;
    revindex: number;
    revindex0: number;
    first: boolean;
    last: boolean;
    length: number;
    parent: ParseContext;
}

export interface ParseContext extends ExtendableParseContext {
    filename: string;
    partials: Record<string, unknown>;
    loop?: ParseLoopContext;
    path: string;
}

export interface Twig {
    exports: {
        twig: typeof twig;
        extendFilter: typeof extendFilter;
        extendFunction: typeof extendFunction;
        extendTest: typeof extendTest;
        extendTag: typeof extendTag;
        extend: typeof extend;
        compile: typeof compile;
        renderFile: typeof renderFile;
        __express: typeof __express;
        cache: typeof cache;
    };

    expression: {
        /**
         * Compile an expression token.
         *
         * @param rawToken the uncompiled token
         *
         * @return The compiled token
         */
        compile<T>(rawToken: { value: unknown } & T): { stack: CompiledToken[] } & Omit<T, 'value'>;
        /**
         * Parse an RPN expression stack within a context.
         *
         * @param tokens An array of compiled expression tokens.
         * @param context The render context to parse the tokens with.
         *
         * @return The result of parsing all the tokens. The result
         *             can be anything, String, Array, Object, etc... based on
         *             the given expression.
         */
        parse(tokens: CompiledToken[], context: ParseContext): unknown;
        type: {
            comma: 'Twig.expression.type.comma';
            operator: {
                unary: 'Twig.expression.type.operator.unary';
                binary: 'Twig.expression.type.operator.binary';
            };
            string: 'Twig.expression.type.string';
            bool: 'Twig.expression.type.bool';
            slice: 'Twig.expression.type.slice';
            array: {
                start: 'Twig.expression.type.array.start';
                end: 'Twig.expression.type.array.end';
            };
            object: {
                start: 'Twig.expression.type.object.start';
                end: 'Twig.expression.type.object.end';
            };
            parameter: {
                start: 'Twig.expression.type.parameter.start';
                end: 'Twig.expression.type.parameter.end';
            };
            subexpression: {
                start: 'Twig.expression.type.subexpression.start';
                end: 'Twig.expression.type.subexpression.end';
            };
            key: {
                period: 'Twig.expression.type.key.period';
                brackets: 'Twig.expression.type.key.brackets';
            };
            filter: 'Twig.expression.type.filter';
            _function: 'Twig.expression.type._function';
            variable: 'Twig.expression.type.variable';
            number: 'Twig.expression.type.number';
            _null: 'Twig.expression.type.null';
            context: 'Twig.expression.type.context';
            test: 'Twig.expression.type.test';
        };
    };
}

export interface CompiledGenericToken<TType, TValue> {
    type: TType;
    value: TValue;
}

export interface CompiledGenericTokenWithMatch<TType, TValue> extends CompiledGenericToken<TType, TValue> {
    match: Array<string | undefined | unknown>;
}

export interface CompiledSubexpressionToken
    extends CompiledGenericTokenWithMatch<'Twig.expression.type.subexpression.end', ')'> {
    expression: boolean;
    params: CompiledToken[];
}

export type BinaryOperator = '*' | '**' | '%' | '+' | '-' | '/' | '<' | '>' | '==' | '!=' | '>=' | '<=';

export interface CompiledBinaryOperatorToken<TOperator extends BinaryOperator = BinaryOperator>
    extends CompiledGenericTokenWithMatch<'Twig.expression.type.operator.binary', TOperator> {
    precidence: number;
    associativity: 'leftToRight' | string;
    operator: TOperator;
}

export interface CompiledTokenTypesWithoutMatchMap {
    'Twig.expression.type.bool': boolean;
    'Twig.expression.type.string': string;
    'Twig.expression.type.null': null;
}

export interface CompiledTokenTypesWithMatchMap {
    'Twig.expression.type.number': number;
    'Twig.expression.type.variable': string;
    'Twig.expression.type.array.start': '[';
    'Twig.expression.type.array.end': ']';
    'Twig.expression.type.object.start': '{';
    'Twig.expression.type.object.end': '}';
}

export type CompiledTokenWithoutMatch<
    TType extends keyof CompiledTokenTypesWithoutMatchMap = keyof CompiledTokenTypesWithoutMatchMap,
> = CompiledGenericToken<TType, CompiledTokenTypesWithoutMatchMap[TType]>;

export type CompiledTokenWithMatch<
    TType extends keyof CompiledTokenTypesWithMatchMap = keyof CompiledTokenTypesWithMatchMap,
> = CompiledGenericTokenWithMatch<TType, CompiledTokenTypesWithMatchMap[TType]>;

export type CompiledToken =
    | CompiledTokenWithoutMatch
    | CompiledTokenWithMatch
    | CompiledSubexpressionToken
    | CompiledBinaryOperatorToken;

export interface TagParseOutput {
    chain: boolean;
    output: string;
}

export interface ExtendTagOptions {
    /** A unique name for the tag (e.g. "tag") */
    type: string;
    /** Expression used to match the tag */
    regex: RegExp;
    /** Represents any expected following tags (e.g. "endtag") */
    next: string[];
    open: boolean;
    /** Called on matched tokens when the template is loaded, once per template */
    compile?: (token: TagToken) => TagToken;
    /** Runs when the template is rendered */
    parse?: (token: TagToken, context: ParseContext, chain: boolean) => TagParseOutput;
}

export function twig(params: Parameters): Template;
export function extendFilter(name: string, definition: (left: any, params: any[] | false) => string): void;
export function extendFunction(name: string, definition: (...params: any[]) => string): void;
export function extendTest(name: string, definition: (value: any) => boolean): void;
export function extendTag(definition: ExtendTagOptions): void;
export function extend(extension: (twig: Twig) => void): void;
export function compile(markup: string, options: CompileOptions): (context: any) => any;
export function renderFile(path: string, options: RenderOptions, fn: (err: Error, result: any) => void): void;
export function renderFile(path: string, fn: (err: Error, result: any) => void): void;
export function __express(path: string, options: CompileOptions, fn: (err: Error, result: any) => void): void;
export function cache(value: boolean): void;
