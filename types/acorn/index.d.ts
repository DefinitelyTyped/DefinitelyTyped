// Type definitions for Acorn 4.0
// Project: https://github.com/acornjs/acorn
// Definitions by: RReverser <https://github.com/RReverser>, e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 2015 | 2016 | 2017 | undefined;
        sourceType?: 'script' | 'module' | undefined;
        onInsertedSemicolon?: ((lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => void) | undefined;
        onTrailingComma?: ((lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => void) | undefined;
        allowReserved?: boolean | undefined;
        allowReturnOutsideFunction?: boolean | undefined;
        allowImportExportEverywhere?: boolean | undefined;
        allowHashBang?: boolean | undefined;
        locations?: boolean | undefined;
        onToken?: ((token: Token) => any) | Token[] | undefined;
        onComment?: ((
            isBlock: boolean, text: string, start: number, end: number, startLoc?: ESTree.Position,
            endLoc?: ESTree.Position
        ) => void) | Comment[] | undefined;
        ranges?: boolean | undefined;
        program?: ESTree.Program | undefined;
        sourceFile?: string | undefined;
        directSourceFile?: string | undefined;
        preserveParens?: boolean | undefined;
        plugins?: PlainObject | undefined;
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
        source?: string | null | undefined;

        constructor(p: Parser, start: Position, end: Position);
    }

    function getLineInfo(input: string, offset: number): ESTree.Position;

    class Node {
        type: string;
        start: number;
        end: number;
        loc?: ESTree.SourceLocation | undefined;
        sourceFile?: string | undefined;
        range?: [number, number] | undefined;

        constructor(parser: Parser, pos: number, loc: number);
    }

    interface TokeTypeConfig {
        keyword: string;
        beforeExpr?: boolean | undefined;
        startsExpr?: boolean | undefined;
        isLoop?: boolean | undefined;
        isAssign?: boolean | undefined;
        prefix?: boolean | undefined;
        postfix?: boolean | undefined;
        binop?: number | undefined;
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
    };

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
        loc?: SourceLocation | undefined;
        range?: [number, number] | undefined;
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

    // TODO: rename type.
    type IParse = (input: string, options?: Options) => ESTree.Program;

    const parse: IParse;

    function parseExpressionAt(input: string, pos?: number, options?: Options): ESTree.Expression;

    interface ITokenizer {
      getToken(): Token;
      [Symbol.iterator](): Iterator<Token>;
    }

    function tokenizer(input: string, options: Options): ITokenizer;

    let parse_dammit: IParse | undefined;
    let LooseParser: ILooseParserClass | undefined;
    let pluginsLoose: PluginsObject | undefined;

    type ILooseParserClass = new (input: string, options?: Options) => ILooseParser;

    interface ILooseParser {}

    function addLooseExports(parse: IParse, parser: ILooseParserClass, plugins: PluginsObject): void;
}
