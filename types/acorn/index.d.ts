// Type definitions for Acorn v4.0.3
// Project: https://github.com/marijnh/acorn
// Definitions by: RReverser <https://github.com/RReverser>, e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="estree" />

export as namespace acorn;
export = acorn;
import * as ESTree from 'estree';

declare namespace acorn {
    interface PlainObject {
        [name: string]: any;
    }

    interface PluginsObject {
        [name: string]: (p: Parser, config: any) => void;
    }

    interface Options {
        ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 2015 | 2016 | 2017;
        sourceType?: 'script' | 'module';
        onInsertedSemicolon?: (lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => void;
        onTrailingComma?: (lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => void;
        allowReserved?: boolean;
        allowReturnOutsideFunction?: boolean;
        allowImportExportEverywhere?: boolean;
        allowHashBang?: boolean;
        locations?: boolean;
        onToken?: ((token: Token) => any) | Token[];
        onComment?: ((
            isBlock: boolean, text: string, start: number, end: number, startLoc?: ESTree.Position,
            endLoc?: ESTree.Position
        ) => void) | Comment[];
        ranges?: boolean;
        program?: ESTree.Program;
        sourceFile?: string;
        directSourceFile?: string;
        preserveParens?: boolean;
        plugins?: PlainObject;
    }

    class Parser {
        constructor(options: Options, input: string, startPos?: number);

        parse(): ESTree.Program;
    }

    const plugins: PluginsObject;

    const defaultOptions: Options;

    class Position implements ESTree.Position {
        line: number;
        column: number;

        constructor(line: number, col: number);

        offset(n: number): Position;
    }

    class SourceLocation implements ESTree.SourceLocation {
        start: Position;
        end: Position;
        source?: string | null;

        constructor(p: Parser, start: Position, end: Position);
    }

    function getLineInfo(input: string, offset: number): ESTree.Position;

    class Node {
        type: string;
        start: number;
        end: number;
        loc?: ESTree.SourceLocation;
        sourceFile?: string;
        range?: [number, number];

        constructor(parser: Parser, pos: number, loc: number);
    }

    interface TokeTypeConfig {
        keyword: string;
        beforeExpr?: boolean;
        startsExpr?: boolean;
        isLoop?: boolean;
        isAssign?: boolean;
        prefix?: boolean;
        postfix?: boolean;
        binop?: number;
    }

    class TokenType {
        label: string;
        keyword: string;
        beforeExpr: boolean;
        startsExpr: boolean;
        isLoop: boolean;
        isAssign: boolean;
        prefix: boolean;
        postfix: boolean;
        binop: number;
        updateContext: (prevType: TokenType) => void;

        constructor(label: string, conf?: TokeTypeConfig);
    }

    const tokTypes: {
        num: TokenType;
        regexp: TokenType;
        string: TokenType;
        name: TokenType;
        eof: TokenType;
        bracketL: TokenType;
        bracketR: TokenType;
        braceL: TokenType;
        braceR: TokenType;
        parenL: TokenType;
        parenR: TokenType;
        comma: TokenType;
        semi: TokenType;
        colon: TokenType;
        dot: TokenType;
        question: TokenType;
        arrow: TokenType;
        template: TokenType;
        ellipsis: TokenType;
        backQuote: TokenType;
        dollarBraceL: TokenType;
        eq: TokenType;
        assign: TokenType;
        incDec: TokenType;
        prefix: TokenType;
        logicalOR: TokenType;
        logicalAND: TokenType;
        bitwiseOR: TokenType;
        bitwiseXOR: TokenType;
        bitwiseAND: TokenType;
        equality: TokenType;
        relational: TokenType;
        bitShift: TokenType;
        plusMin: TokenType;
        modulo: TokenType;
        star: TokenType;
        slash: TokenType;
        starstar: TokenType;
        _break: TokenType;
        _case: TokenType;
        _catch: TokenType;
        _continue: TokenType;
        _debugger: TokenType;
        _default: TokenType;
        _do: TokenType;
        _else: TokenType;
        _finally: TokenType;
        _for: TokenType;
        _function: TokenType;
        _if: TokenType;
        _return: TokenType;
        _switch: TokenType;
        _throw: TokenType;
        _try: TokenType;
        _var: TokenType;
        _const: TokenType;
        _while: TokenType;
        _with: TokenType;
        _new: TokenType;
        _this: TokenType;
        _super: TokenType;
        _class: TokenType;
        _extends: TokenType;
        _export: TokenType;
        _import: TokenType;
        _null: TokenType;
        _true: TokenType;
        _false: TokenType;
        _in: TokenType;
        _instanceof: TokenType;
        _typeof: TokenType;
        _void: TokenType;
        _delete: TokenType;
    }

    class TokContext {
        constructor(token: string, isExpr: boolean, preserveSpace: boolean, override: (p: Parser) => void);
    }

    const tokContexts: {
        b_stat: TokContext;
        b_expr: TokContext;
        b_tmpl: TokContext;
        p_stat: TokContext;
        p_expr: TokContext;
        q_tmpl: TokContext;
        f_expr: TokContext;
    };

    function isIdentifierStart(code: number, astral?: boolean): boolean;

    function isIdentifierChar(code: number, astral?: boolean): boolean;

    interface AbstractToken {
        start: number;
        end: number;
        loc?: SourceLocation;
        range?: [number, number];
    }

    interface Comment extends AbstractToken {
        type: string;
        value: string;
    }

    class Token {
        constructor(p: Parser);
    }

    interface Token extends AbstractToken {
        type: TokenType;
        value: any;
    }

    function isNewLine(code: number): boolean;

    const lineBreak: RegExp;

    const lineBreakG: RegExp;

    const version: string;

    interface IParse {
        (input: string, options?: Options): ESTree.Program;
    }

    const parse: IParse;

    function parseExpressionAt(input: string, pos?: number, options?: Options): ESTree.Expression;

    interface ITokenizer {
      getToken() : Token,
      [Symbol.iterator](): Iterator<Token>
    }
  
    function tokenizer(input: string, options: Options): ITokenizer;

    let parse_dammit: IParse | undefined;
    let LooseParser: ILooseParserClass | undefined;
    let pluginsLoose: PluginsObject | undefined;

    interface ILooseParserClass {
        new (input: string, options?: Options): ILooseParser
    }

    interface ILooseParser {

    }

    function addLooseExports(parse: IParse, parser: ILooseParserClass, plugins: PluginsObject): void;
}
