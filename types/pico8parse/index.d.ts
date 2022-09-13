// Type definitions for pico8parse 0.4
// Project: https://pictelm.github.io/pico8parse/
// Definitions by: Grenier Célestin <https://github.com/PictElm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type LuaVersion = '5.1' | '5.2' | '5.3' | 'LuaJIT' | 'PICO-8' | 'PICO-8-0.2.1' | 'PICO-8-0.2.2' | 'PICO-8-0.2.3' | 'PICO-8-0.2.4';

export interface Options {
    /** Explicitly tell the parser when the input ends. */
    wait: boolean;
    /** Store comments as an array in the chunk object. */
    comments: boolean;
    /** Track identifier scopes. */
    scope: boolean;
    /** Store location information on each syntax node. */
    locations: boolean;
    /** Store the start and end character locations on each syntax node. */
    ranges: boolean;
    /**
     * A callback which will be invoked when a syntax node has been completed.
     * The node which has been created will be passed as the only parameter.
     */
    onCreateNode: (node: ast.Node) => void;
    /** A callback which will be invoked when a new scope is created. */
    onCreateScope: () => void;
    /** A callback which will be invoked when the current scope is destroyed. */
    onDestroyScope: () => void;
    /**
     * A callback which will be invoked when a local variable is declared.
     * The identifier will be passed as the only parameter.
     */
    onLocalDeclaration: (identifier: ast.Identifier) => void;
    /**
     * The version of Lua the parser will target; supported values are '5.1', '5.2', '5.3',
     * 'LuaJIT', 'PICO-8', 'PICO-8-0.2.1' and 'PICO-8-0.2.2'.
     */
    luaVersion: LuaVersion;
    /**
     * Whether to allow code points ≥ U+0080 in identifiers, like LuaJIT does.
     * See 'Note on character encodings' below if you wish to use this option.
     * Note: setting luaVersion: 'LuaJIT' currently does not enable this option; this may change in the future.
     */
    extendedIdentifiers: false;
    /**
     * Defines the relation between code points ≥ U+0080 appearing in parser input and raw bytes in source code,
     * and how Lua escape sequences in JavaScript strings should be interpreted.
     * See the Encoding modes section https://pictelm.github.io/pico8parse/upstream.html#encoding-modes for more information.
     */
    encodingMode: "pseudo-latin1" | "x-user-defined" | "none";
    /**
     * This overrides the `strictP8FileFormat` feature, making it possible to parse
     * snippets lacking the proper header and sections.
     */
    ignoreStrictP8FileFormat: boolean;
}

/**
 * The original luaparse describes a way to customize the building of the AST
 * (see https://pictelm.github.io/pico8parse/upstream.html#custom-ast)
 *
 * For that, this exposes the suite of functions that are called exactly before
 * finalizing a node.
 *
 * Reminder again that the `option.onCreateNode` callback should be preferred
 * (it is called after and with for parameter the result of the appropriate `ast.`
 * function, augmented by any location tracking).
 */
export namespace ast {
    interface Base<TType extends string> {
        type: TType;
        loc?: {
            start: {
                line: number;
                column: number;
            };
            end: {
                line: number;
                column: number;
            };
        };
        range?: [number, number];
    }

    type UnaryOperator = 'not' | '-' | '~' | '#' | '@' | '$' | '%';
    type BinaryOperator =  '+' | '-' | '*' | '%' | '^' | '/' | '//' | '&' | '|' | '~' | '<<' | '>>' | '..' | '>>>' | '<<>' | '>><' | '^^' | '\\';
    type ComparisonOperator = '~=' | '==' | '<' | '<=' | '>' | '>=' | '!=';

    type IfStatementClauses = [IfClause, ...Array<ElseifClause | ElseClause>];

//#region node types definitions
    interface LabelStatement extends Base<"LabelStatement"> {
        label: Identifier;
    }

    interface BreakStatement extends Base<"BreakStatement"> {
    }

    interface GotoStatement extends Base<"GotoStatement"> {
        label: Identifier;
    }

    interface ReturnStatement extends Base<"ReturnStatement"> {
        arguments: Expression[];
    }

    interface IfStatement extends Base<"IfStatement"> {
        clauses: IfStatementClauses;
    }

    interface IfClause extends Base<"IfClause"> {
        condition: Expression;
        body: Statement[];
    }

    interface ElseifClause extends Base<"ElseifClause"> {
        condition: Expression;
        body: Statement[];
    }

    interface ElseClause extends Base<"ElseClause"> {
        body: Statement[];
    }

    interface WhileStatement extends Base<"WhileStatement"> {
        condition: Expression;
        body: Statement[];
    }

    interface DoStatement extends Base<"DoStatement"> {
        body: Statement[];
    }

    interface RepeatStatement extends Base<"RepeatStatement"> {
        condition: Expression;
        body: Statement[];
    }

    interface LocalStatement extends Base<"LocalStatement"> {
        variables: Identifier[];
        init: Expression[];
    }

    interface AssignmentStatement extends Base<"AssignmentStatement"> {
        variables: Array<IndexExpression | MemberExpression | Identifier>;
        init: Expression[];
    }

    interface AssignmentOperatorStatement extends Base<"AssignmentOperatorStatement"> {
        operator: BinaryOperator;
        variables: Array<IndexExpression | MemberExpression | Identifier>;
        init: Expression[];
    }

    interface CallStatement extends Base<"CallStatement"> {
        expression: CallExpression | StringCallExpression | TableCallExpression;
    }

    interface FunctionDeclaration extends Base<"FunctionDeclaration"> {
        identifier: Identifier | MemberExpression | null;
        isLocal: boolean;
        parameters: Array<Identifier | VarargLiteral>;
        body: Statement[];
    }

    interface ForNumericStatement extends Base<"ForNumericStatement"> {
        variable: Identifier;
        start: Expression;
        end: Expression;
        step: Expression | null;
        body: Statement[];
    }

    interface ForGenericStatement extends Base<"ForGenericStatement"> {
        variables: Identifier[];
        iterators: Expression[];
        body: Statement[];
    }

    interface Chunk extends Base<"Chunk"> {
        body: Statement[];
        comments?: Comment[];
        globals?: Identifier[];
    }

    interface Identifier extends Base<"Identifier"> {
        name: string;
        isLocal?: boolean;
    }

    interface StringLiteral extends Base<"StringLiteral"> {
        value: string;
        raw: string;
        rawInterrupted?: string;
    }

    interface NumericLiteral extends Base<"NumericLiteral"> {
        value: number;
        raw: string;
    }

    interface BooleanLiteral extends Base<"BooleanLiteral"> {
        value: boolean;
        raw: string;
    }

    interface NilLiteral extends Base<"NilLiteral"> {
        value: null;
        raw: string;
    }

    interface VarargLiteral extends Base<"VarargLiteral"> {
        value: string;
        raw: string;
    }

    interface TableKey extends Base<"TableKey"> {
        key: Expression;
        value: Expression;
    }

    interface TableKeyString extends Base<"TableKeyString"> {
        key: Identifier;
        value: Expression;
    }

    interface TableValue extends Base<"TableValue"> {
        value: Expression;
    }

    interface TableConstructorExpression extends Base<"TableConstructorExpression"> {
        fields: Array<TableKey | TableKeyString | TableValue>;
    }

    interface UnaryExpression extends Base<"UnaryExpression"> {
        operator: UnaryOperator;
        argument: Expression;
    }

    interface BinaryExpression extends Base<"BinaryExpression"> {
        operator: BinaryOperator | ComparisonOperator;
        left: Expression;
        right: Expression;
    }

    interface LogicalExpression extends Base<"LogicalExpression"> {
        operator: 'or' | 'and';
        left: Expression;
        right: Expression;
    }

    interface MemberExpression extends Base<"MemberExpression"> {
        indexer: '.' | ':';
        identifier: Identifier;
        base: Expression;
    }

    interface IndexExpression extends Base<"IndexExpression"> {
        base: Expression;
        index: Expression;
    }

    interface CallExpression extends Base<"CallExpression"> {
        base: Expression;
        arguments: Expression[];
    }

    interface TableCallExpression extends Base<"TableCallExpression"> {
        base: Expression;
        argument: Expression;
    }

    interface StringCallExpression extends Base<"StringCallExpression"> {
        base: Expression;
        argument: Expression;
    }

    interface Comment extends Base<"Comment"> {
        value: string;
        raw: string;
        rawInterrupted?: string;
    }
//#endregion

//#region node type aliases
    type Literal
        = StringLiteral
        | NumericLiteral
        | BooleanLiteral
        | NilLiteral
        | VarargLiteral;

    type Expression
        = FunctionDeclaration
        | Identifier
        | Literal
        | TableConstructorExpression
        | BinaryExpression
        | LogicalExpression
        | UnaryExpression
        | MemberExpression
        | IndexExpression
        | CallExpression
        | TableCallExpression
        | StringCallExpression;

    type Statement
        = LabelStatement
        | BreakStatement
        | GotoStatement
        | ReturnStatement
        | IfStatement
        | WhileStatement
        | DoStatement
        | RepeatStatement
        | LocalStatement
        | AssignmentStatement
        | AssignmentOperatorStatement
        | CallStatement
        | FunctionDeclaration
        | ForNumericStatement
        | ForGenericStatement;

    type Node
        = Statement
        | Expression
        | IfClause
        | ElseifClause
        | ElseClause
        | Chunk
        | TableKey
        | TableKeyString
        | TableValue
        | Comment;
//#endregion

    interface Token {
        type: tokenTypes;
        value: string;
        line: number;
        lineStart: number;
        range: [number, number];
    }

//#region node sketching
    function labelStatement(label: Identifier): LabelStatement;
    function breakStatement(): BreakStatement;
    function gotoStatement(label: Identifier): GotoStatement;
    function returnStatement(args: Expression[]): ReturnStatement;
    function ifStatement(clauses: IfStatementClauses): IfStatement;
    function ifClause(condition: Expression, body: Statement[]): IfClause;
    function elseifClause(condition: Expression, body: Statement[]): ElseifClause;
    function elseClause(body: Statement[]): ElseClause;
    function whileStatement(condition: Expression, body: Statement[]): WhileStatement;
    function doStatement(body: Statement[]): DoStatement;
    function repeatStatement(condition: Expression, body: Statement[]): RepeatStatement;
    function localStatement(variables: Identifier[], init: Expression[]): LocalStatement;
    function assignmentStatement(variables: Array<Identifier | IndexExpression | MemberExpression>, init: Expression[]): AssignmentStatement;
    function assignmentOperatorStatement(operator: BinaryOperator, variables: Array<Identifier | IndexExpression | MemberExpression>, init: Expression[]): AssignmentOperatorStatement;
    function callStatement(expression: CallExpression | StringCallExpression | TableCallExpression): CallStatement;
    function functionStatement(identifier: Identifier | MemberExpression | null, parameters: Array<Identifier | VarargLiteral>, isLocal: boolean, body: Statement[]): FunctionDeclaration;
    function forNumericStatement(variable: Identifier, start: Expression, end: Expression, step: Expression | null, body: Statement[]): ForNumericStatement;
    function forGenericStatement(variables: Identifier[], iterators: Expression[], body: Statement[]): ForGenericStatement;
    function chunk(body: Statement[]): Chunk;
    function identifier(name: string): Identifier;
    function literal(type: tokenTypes.StringLiteral, value: string, raw: string, rawInterrupted?: string): StringLiteral;
    function literal(type: tokenTypes.NumericLiteral, value: number, raw: string): NumericLiteral;
    function literal(type: tokenTypes.BooleanLiteral, value: boolean, raw: 'true' | 'false'): BooleanLiteral;
    function literal(type: tokenTypes.NilLiteral, value: null, raw: 'nil'): NilLiteral;
    function literal(type: tokenTypes.VarargLiteral, value: '...', raw: '...'): VarargLiteral;
    function tableKey(key: Expression, value: Expression): TableKey;
    function tableKeyString(key: Identifier, value: Expression): TableKeyString;
    function tableValue(value: Expression): TableValue;
    function tableConstructorExpression(fields: Array<TableKey | TableKeyString | TableValue>): TableConstructorExpression;
    function binaryExpression(operator: BinaryOperator | ComparisonOperator, left: Expression, right: Expression): BinaryExpression;
    function binaryExpression(operator: 'and' | 'or', left: Expression, right: Expression): LogicalExpression;
    function unaryExpression(operator: UnaryOperator, argument: Expression): UnaryExpression;
    function memberExpression(base: Expression, indexer: '.' | ':', identifier: Identifier): MemberExpression;
    function indexExpression(base: Expression, index: Expression): IndexExpression;
    function callExpression(base: Expression, args: Expression[]): CallExpression;
    function tableCallExpression(base: Expression, argument: Expression[]): TableCallExpression;
    function stringCallExpression(base: Expression, argument: Expression): StringCallExpression;
    function comment(value: string, raw: string, rawInterrupted?: string): Comment;
//#endregion
}

// Keep this lower-case the same as in the pico8parse.js file itself.
export enum tokenTypes {
    EOF = 1,
    StringLiteral = 2,
    Keyword = 4,
    Identifier = 8,
    NumericLiteral = 16,
    Punctuator = 32,
    BooleanLiteral = 64,
    NilLiteral = 128,
    VarargLiteral = 256,
}

export interface Parser {
    /**
     * The main parser.
     * @example
     * var parser = require('pico8parse');
     * parser.parse('i = 0');
     */
    parse(code: string, options: Partial<Options> & { wait: true }): Parser;
    parse(code: string, options?: Partial<Options>): ast.Chunk;
    parse(options?: Partial<Options>): Parser;
    /** Write to the source code buffer without beginning the parse. */
    write(segment: string): Parser;
    /** Send an EOF and begin parsing. */
    end(segment?: string): ast.Chunk;
    /**
     * The lexer, or the tokenizer reads the input string character by character
     * and derives a token left-right. To be as efficient as possible the lexer
     * prioritizes the common cases such as identifiers. It also works with
     * character codes instead of characters as string comparisons was the
     * biggest bottleneck of the parser.
     *
     * If `options.comments` is enabled, all comments encountered will be stored
     * in an array which later will be appended to the chunk object. If disabled,
     * they will simply be disregarded.
     *
     * When the lexer has derived a valid token, it will be returned as an object
     * containing its value and as well as its position in the input string (this
     * is always enabled to provide proper debug messages).
     *
     * `lex()` starts lexing and returns the following token in the stream.
     */
    lex(): ast.Token;
}

/**
 * This is temporary and may be changed.
 *
 * Prefer instanceof checking against this rather than the engine built-in SyntaxError
 * (see https://github.com/fstirlitz/luaparse/releases/tag/v0.3.1 and
 * https://github.com/fstirlitz/luaparse/issues/67).
 */
export class SyntaxError extends Error {
    index: number;
    line: number;
    column: number;
}

export const version: string;
/**
 * As this parser is a bit different from Lua's own, the error messages
 * will be different in some situations.
 *
 * This maps from an error key to a user-friendly string describing the error.
 * Each string may contain "%n" sequences to be interpolated with error-dependent
 * contextual information (n is an integer, counting from 1).
 *
 * @example { unexpected: 'unexpected %1 \'%2\' near \'%3\'', ... }
 */
export const errors: Record<string, string>;

export const defaultOptions: Partial<Options>;
export const versionFeatures: Record<LuaVersion, boolean>;

export const parse: Parser['parse'];
export const write: Parser['write'];
export const end: Parser['end'];
export const lex: Parser['lex'];

export as namespace pico8parse;
