// Type definitions for Handlebars v3.0.3
// Project: http://handlebarsjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace Handlebars {
    export function registerHelper(name: string, fn: Function, inverse?: boolean): void;
    export function registerHelper(name: Object): void;
    export function registerPartial(name: string, str: any): void;
    export function unregisterHelper(name: string): void;
    export function unregisterPartial(name: string): void;
    export function K(): void;
    export function createFrame(object: any): any;
    export function Exception(message: string): void;
    export function log(level: number, obj: any): void;
    export function parse(input: string): hbs.AST.Program;
    export function compile(input: any, options?: any): HandlebarsTemplateDelegate;

    export var SafeString: typeof hbs.SafeString;
    export var Utils: typeof hbs.Utils;
    export var logger: Logger;
    export var templates: HandlebarsTemplates;
    export var helpers: any;

    export module AST {
        export var helpers: hbs.AST.helpers;
    }

    interface ICompiler {
        accept(node: hbs.AST.Node): void;
        Program(program: hbs.AST.Program): void;
        BlockStatement(block: hbs.AST.BlockStatement): void;
        PartialStatement(partial: hbs.AST.PartialStatement): void;
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

interface HandlebarsTemplateDelegate {
    (context: any, options?: any): string;
}

interface HandlebarsTemplates {
    [index: string]: HandlebarsTemplateDelegate;
}

declare namespace hbs {
    class SafeString {
        constructor(str: string);
        static toString(): string;
    }

    namespace Utils {
        function escapeExpression(str: string): string;
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

        interface PartialStatement extends Statement {
            name: PathExpression | SubExpression;
            params: Expression[];
            hash: Hash;
            indent: string;
            strip: StripFlags;
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
