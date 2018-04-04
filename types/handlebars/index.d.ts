// Type definitions for Handlebars v4.0.5
// Project: http://handlebarsjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Handlebars {
    export function registerHelper(name: string, fn: Function, inverse?: boolean): void;
    export function registerHelper(name: Object): void;
    export function registerPartial(name: string, str: any): void;
    export function unregisterHelper(name: string): void;
    export function unregisterPartial(name: string): void;
    export function registerDecorator(name: string, fn: Function): void;
    export function unregisterDecorator(name: string): void;

    export function K(): void;
    export function createFrame(object: any): any;
    export function blockParams(obj: any[], ids: any[]): any[];
    export function Exception(message: string): void;
    export function log(level: number, obj: any): void;
    export function parse(input: string): hbs.AST.Program;
    export function compile<T = any>(input: any, options?: CompileOptions): HandlebarsTemplateDelegate<T>;
    export function precompile(input: any, options?: PrecompileOptions): TemplateSpecification;
    export function template<T = any>(precompilation: TemplateSpecification): HandlebarsTemplateDelegate<T>;

    export function create(): typeof Handlebars;

    export var SafeString: typeof hbs.SafeString;
    export var escapeExpression: typeof hbs.Utils.escapeExpression;
    export var Utils: typeof hbs.Utils;
    export var logger: Logger;
    export var templates: HandlebarsTemplates;
    export var helpers: { [name: string]: Function };
    export var partials: { [name: string]: any };
    export var decorators: { [name: string]: Function };

    export function registerDecorator(name: string, fn: Function): void;
    export function registerDecorator(obj: {[name: string] : Function}): void;
    export function unregisterDecorator(name: string): void;

    export function noConflict(): typeof Handlebars;

    export module AST {
        export var helpers: hbs.AST.helpers;
    }

    interface ICompiler {
        accept(node: hbs.AST.Node): void;
        Program(program: hbs.AST.Program): void;
        BlockStatement(block: hbs.AST.BlockStatement): void;
        PartialStatement(partial: hbs.AST.PartialStatement): void;
        PartialBlockStatement(partial: hbs.AST.PartialBlockStatement): void;
        DecoratorBlock(decorator: hbs.AST.DecoratorBlock): void;
        Decorator(decorator: hbs.AST.Decorator): void;
        MustacheStatement(mustache: hbs.AST.MustacheStatement): void;
        ContentStatement(content: hbs.AST.ContentStatement): void;
        CommentStatement(comment?: hbs.AST.CommentStatement): void;
        SubExpression(sexpr: hbs.AST.SubExpression): void;
        PathExpression(path: hbs.AST.PathExpression): void;
        StringLiteral(str: hbs.AST.StringLiteral): void;
        NumberLiteral(num: hbs.AST.NumberLiteral): void;
        BooleanLiteral(bool: hbs.AST.BooleanLiteral): void;
        UndefinedLiteral(): void;
        NullLiteral(): void;
        Hash(hash: hbs.AST.Hash): void;
    }

    export class Visitor implements ICompiler {
        accept(node: hbs.AST.Node): void;
        acceptKey(node: hbs.AST.Node, name: string): void;
        acceptArray(arr: hbs.AST.Expression[]): void;
        Program(program: hbs.AST.Program): void;
        BlockStatement(block: hbs.AST.BlockStatement): void;
        PartialStatement(partial: hbs.AST.PartialStatement): void;
        PartialBlockStatement(partial: hbs.AST.PartialBlockStatement): void;
        DecoratorBlock(decorator: hbs.AST.DecoratorBlock): void;
        Decorator(decorator: hbs.AST.Decorator): void;
        MustacheStatement(mustache: hbs.AST.MustacheStatement): void;
        ContentStatement(content: hbs.AST.ContentStatement): void;
        CommentStatement(comment?: hbs.AST.CommentStatement): void;
        SubExpression(sexpr: hbs.AST.SubExpression): void;
        PathExpression(path: hbs.AST.PathExpression): void;
        StringLiteral(str: hbs.AST.StringLiteral): void;
        NumberLiteral(num: hbs.AST.NumberLiteral): void;
        BooleanLiteral(bool: hbs.AST.BooleanLiteral): void;
        UndefinedLiteral(): void;
        NullLiteral(): void;
        Hash(hash: hbs.AST.Hash): void;
    }
}

/**
* Implement this interface on your MVW/MVVM/MVC views such as Backbone.View
**/
interface HandlebarsTemplatable {
    template: HandlebarsTemplateDelegate;
}

interface HandlebarsTemplateDelegate<T = any> {
    (context: T, options?: RuntimeOptions): string;
}

interface HandlebarsTemplates {
    [index: string]: HandlebarsTemplateDelegate;
}

interface TemplateSpecification {

}

interface RuntimeOptions {
    partial?: boolean;
    depths?: any[];
    helpers?: { [name: string]: Function }
    partials?: { [name: string]: HandlebarsTemplateDelegate }
    decorators?: { [name: string]: Function }
}

interface CompileOptions {
    data?: boolean;
    compat?: boolean;
    knownHelpers?: {
        helperMissing?: boolean;
        blockHelperMissing?: boolean;
        each?: boolean;
        if?: boolean;
        unless?: boolean;
        with?: boolean;
        log?: boolean;
        lookup?: boolean;
    }
    knownHelpersOnly?: boolean;
    noEscape?: boolean;
    strict?: boolean;
    assumeObjects?: boolean;
    preventIndent?: boolean;
    ignoreStandalone?: boolean;
    explicitPartialContext?: boolean;
}

interface PrecompileOptions extends CompileOptions {
    srcName?: string;
    destName?: string;
}

declare namespace hbs {
    class SafeString {
        constructor(str: string);
        static toString(): string;
    }

    namespace Utils {
        function escapeExpression(str: string): string;
        function createFrame(object: any): any;
        function blockParams(obj: any[], ids: any[]): any[];
        function isEmpty(obj: any) : boolean;
        function extend(obj: any, ...source: any[]): any;
        function toString(obj: any): string;
        function isArray(obj: any): boolean;
        function isFunction(obj: any): boolean;
    }
}

interface Logger {
    DEBUG: number;
    INFO: number;
    WARN: number;
    ERROR: number;
    level: number;

    methodMap: { [level: number]: string };

    log(level: number, obj: string): void;
}

declare namespace hbs {
    namespace AST {
        interface Node {
            type: string;
            loc: SourceLocation;
        }

        interface SourceLocation {
            source: string;
            start: Position;
            end: Position;
        }

        interface Position {
            line: number;
            column: number;
        }

        interface Program extends Node {
            body: Statement[];
            blockParams: string[];
        }

        interface Statement extends Node {}

        interface MustacheStatement extends Statement {
            path: PathExpression | Literal;
            params: Expression[];
            hash: Hash;
            escaped: boolean;
            strip: StripFlags;
        }

        interface Decorator extends MustacheStatement { }

        interface BlockStatement extends Statement {
            path: PathExpression;
            params: Expression[];
            hash: Hash;
            program: Program;
            inverse: Program;
            openStrip: StripFlags;
            inverseStrip: StripFlags;
            closeStrip: StripFlags;
        }

        interface DecoratorBlock extends BlockStatement { }

        interface PartialStatement extends Statement {
            name: PathExpression | SubExpression;
            params: Expression[];
            hash: Hash;
            indent: string;
            strip: StripFlags;
        }

        interface PartialBlockStatement extends Statement {
            name: PathExpression | SubExpression;
            params: Expression[],
            hash: Hash,
            program: Program,
            openStrip: StripFlags,
            closeStrip: StripFlags
        }

        interface ContentStatement extends Statement {
            value: string;
            original: StripFlags;
        }

        interface CommentStatement extends Statement {
            value: string;
            strip: StripFlags;
        }

        interface Expression extends Node {}

        interface SubExpression extends Expression {
            path: PathExpression;
            params: Expression[];
            hash: Hash;
        }

        interface PathExpression extends Expression {
            data: boolean;
            depth: number;
            parts: string[];
            original: string;
        }

        interface Literal extends Expression {}
        interface StringLiteral extends Literal {
            value: string;
            original: string;
        }

        interface BooleanLiteral extends Literal {
            value: boolean;
            original: boolean;
        }

        interface NumberLiteral extends Literal {
            value: number;
            original: number;
        }

        interface UndefinedLiteral extends Literal {}

        interface NullLiteral extends Literal {}

        interface Hash extends Node {
            pairs: HashPair[];
        }

        interface HashPair extends Node {
            key: string;
            value: Expression;
        }

        interface StripFlags {
            open: boolean;
            close: boolean;
        }

        interface helpers {
            helperExpression(node: Node): boolean;
            scopeId(path: PathExpression): boolean;
            simpleId(path: PathExpression): boolean;
        }
    }
}

declare module "handlebars" {
    export = Handlebars;
}

declare module "handlebars/handlebars.runtime" {
    export = Handlebars;
}
