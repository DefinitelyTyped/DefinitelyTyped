// Imported from: https://github.com/soywiz/typescript-node-definitions/twig.d.ts

interface Exports {
    twig(params: Twig.Parameters): Twig.Template;
    extendFilter(name: string, definition: (left: any, params: any[] | false) => string): void;
    extendFunction(name: string, definition: (...params: any[]) => string): void;
    extendTest(name: string, definition: (value: any) => boolean): void;
    extendTag(definition: Twig.ExtendTagOptions): void;
    extend(extension: (twig: Twig.Twig) => void): void;
    compile(markup: string, options: Twig.CompileOptions): (context: any) => any;
    renderFile(path: string, options: Twig.RenderOptions, fn: (err: Error, result: any) => void): void;
    renderFile(path: string, fn: (err: Error, result: any) => void): void;
    __express(path: string, options: Twig.CompileOptions, fn: (err: Error, result: any) => void): void;
    cache(value: boolean): void;
}

declare namespace Twig {
    interface Parameters {
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

    interface Template {
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

    interface CompileOptions {
        filename: string;
        settings: {
            views: any;
            "twig options": any;
        };
    }

    interface RenderOptions {
        [index: string]: any;

        allowAsync?: boolean | undefined;
        settings?:
            | {
                views: any;
                "twig options": any;
            }
            | undefined;
    }

    interface TagToken {
        type: string;
        match: RegExpExecArray;
        stack?: CompiledToken[];
    }

    interface RawOutput {
        type: "raw";
        value: string;
    }

    interface TagTokenWithOutput extends TagToken {
        output: RawOutput[];
    }

    interface ExtendableParseContext {} // tslint:disable-line:no-empty-interface

    interface ParseLoopContext {
        index: number;
        index0: number;
        revindex: number;
        revindex0: number;
        first: boolean;
        last: boolean;
        length: number;
        parent: ParseContext;
    }

    interface ParseContext extends ExtendableParseContext {
        filename: string;
        partials: Record<string, unknown>;
        loop?: ParseLoopContext;
        path: string;
    }

    interface Twig {
        exports: Exports;
        expression: {
            /**
             * Compile an expression token.
             *
             * @param rawToken the uncompiled token
             *
             * @return The compiled token
             */
            compile<T>(rawToken: { value: unknown } & T): { stack: CompiledToken[] } & Omit<T, "value">;
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
                comma: "Twig.expression.type.comma";
                operator: {
                    unary: "Twig.expression.type.operator.unary";
                    binary: "Twig.expression.type.operator.binary";
                };
                string: "Twig.expression.type.string";
                bool: "Twig.expression.type.bool";
                slice: "Twig.expression.type.slice";
                array: {
                    start: "Twig.expression.type.array.start";
                    end: "Twig.expression.type.array.end";
                };
                object: {
                    start: "Twig.expression.type.object.start";
                    end: "Twig.expression.type.object.end";
                };
                parameter: {
                    start: "Twig.expression.type.parameter.start";
                    end: "Twig.expression.type.parameter.end";
                };
                subexpression: {
                    start: "Twig.expression.type.subexpression.start";
                    end: "Twig.expression.type.subexpression.end";
                };
                key: {
                    period: "Twig.expression.type.key.period";
                    brackets: "Twig.expression.type.key.brackets";
                };
                filter: "Twig.expression.type.filter";
                _function: "Twig.expression.type._function";
                variable: "Twig.expression.type.variable";
                number: "Twig.expression.type.number";
                _null: "Twig.expression.type.null";
                context: "Twig.expression.type.context";
                test: "Twig.expression.type.test";
            };
        };
    }

    interface CompiledGenericToken<TType, TValue> {
        type: TType;
        value: TValue;
    }

    interface CompiledGenericTokenWithMatch<TType, TValue> extends CompiledGenericToken<TType, TValue> {
        match: Array<string | undefined | unknown>;
    }

    interface CompiledSubexpressionToken
        extends CompiledGenericTokenWithMatch<"Twig.expression.type.subexpression.end", ")">
    {
        expression: boolean;
        params: CompiledToken[];
    }

    type BinaryOperator = "*" | "**" | "%" | "+" | "-" | "/" | "<" | ">" | "==" | "!=" | ">=" | "<=";

    interface CompiledBinaryOperatorToken<TOperator extends BinaryOperator = BinaryOperator>
        extends CompiledGenericTokenWithMatch<"Twig.expression.type.operator.binary", TOperator>
    {
        precidence: number;
        associativity: "leftToRight" | string;
        operator: TOperator;
    }

    interface CompiledTokenTypesWithoutMatchMap {
        "Twig.expression.type.bool": boolean;
        "Twig.expression.type.string": string;
        "Twig.expression.type.null": null;
    }

    interface CompiledTokenTypesWithMatchMap {
        "Twig.expression.type.number": number;
        "Twig.expression.type.variable": string;
        "Twig.expression.type.array.start": "[";
        "Twig.expression.type.array.end": "]";
        "Twig.expression.type.object.start": "{";
        "Twig.expression.type.object.end": "}";
    }

    type CompiledTokenWithoutMatch<
        TType extends keyof CompiledTokenTypesWithoutMatchMap = keyof CompiledTokenTypesWithoutMatchMap,
    > = CompiledGenericToken<TType, CompiledTokenTypesWithoutMatchMap[TType]>;

    type CompiledTokenWithMatch<
        TType extends keyof CompiledTokenTypesWithMatchMap = keyof CompiledTokenTypesWithMatchMap,
    > = CompiledGenericTokenWithMatch<TType, CompiledTokenTypesWithMatchMap[TType]>;

    type CompiledToken =
        | CompiledTokenWithoutMatch
        | CompiledTokenWithMatch
        | CompiledSubexpressionToken
        | CompiledBinaryOperatorToken;

    interface TagParseOutput {
        chain: boolean;
        output: string;
    }

    interface ExtendTagOptions {
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
}

declare const Twig: Exports;

export = Twig;
