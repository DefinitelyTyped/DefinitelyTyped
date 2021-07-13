export interface Base<TType extends string> {
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

export type UnaryOperator = 'not' | '-' | '~' | '#' | '@' | '$' | '%';
export type BinaryOperator =  '+' | '-' | '*' | '%' | '^' | '/' | '//' | '&' | '|' | '~' | '<<' | '>>' | '..' | '>>>' | '<<>' | '>><' | '^^' | '\\';
export type ComparisonOperator = '~=' | '==' | '<' | '<=' | '>' | '>=' | '!=';

export type IfStatementClauses = [IfClause, ...Array<ElseifClause | ElseClause>];

export interface LabelStatement extends Base<"LabelStatement"> {
    label: Identifier;
}

export interface BreakStatement extends Base<"BreakStatement"> {
}

export interface GotoStatement extends Base<"GotoStatement"> {
    label: Identifier;
}

export interface ReturnStatement extends Base<"ReturnStatement"> {
    arguments: Expression[];
}

export interface IfStatement extends Base<"IfStatement"> {
    clauses: IfStatementClauses;
}

export interface IfClause extends Base<"IfClause"> {
    condition: Expression;
    body: Statement[];
}

export interface ElseifClause extends Base<"ElseifClause"> {
    condition: Expression;
    body: Statement[];
}

export interface ElseClause extends Base<"ElseClause"> {
    body: Statement[];
}

export interface WhileStatement extends Base<"WhileStatement"> {
    condition: Expression;
    body: Statement[];
}

export interface DoStatement extends Base<"DoStatement"> {
    body: Statement[];
}

export interface RepeatStatement extends Base<"RepeatStatement"> {
    condition: Expression;
    body: Statement[];
}

export interface LocalStatement extends Base<"LocalStatement"> {
    variables: Identifier[];
    init: Expression[];
}

export interface AssignmentStatement extends Base<"AssignmentStatement"> {
    variables: Array<IndexExpression | MemberExpression | Identifier>;
    init: Expression[];
}

export interface AssignmentOperatorStatement extends Base<"AssignmentOperatorStatement"> {
    operator: BinaryOperator;
    variables: Array<IndexExpression | MemberExpression | Identifier>;
    init: Expression[];
}

export interface CallStatement extends Base<"CallStatement"> {
    expression: CallExpression | StringCallExpression | TableCallExpression;
}

export interface FunctionDeclaration extends Base<"FunctionDeclaration"> {
    identifier: Identifier | MemberExpression | null;
    isLocal: boolean;
    parameters: Array<Identifier | VarargLiteral>;
    body: Statement[];
}

export interface ForNumericStatement extends Base<"ForNumericStatement"> {
    variable: Identifier;
    start: Expression;
    end: Expression;
    step: Expression | null;
    body: Statement[];
}

export interface ForGenericStatement extends Base<"ForGenericStatement"> {
    variables: Identifier[];
    iterators: Expression[];
    body: Statement[];
}

export interface Chunk extends Base<"Chunk"> {
    body: Statement[];
    comments?: string[];
    globals?: Identifier[];
}

export interface Identifier extends Base<"Identifier"> {
    name: string;
    isLocal?: boolean;
}

export interface StringLiteral extends Base<"StringLiteral"> {
    value: string;
    raw: string;
    rawInterrupted?: string;
}

export interface NumericLiteral extends Base<"NumericLiteral"> {
    value: number;
    raw: string;
}

export interface BooleanLiteral extends Base<"BooleanLiteral"> {
    value: boolean;
    raw: string;
}

export interface NilLiteral extends Base<"NilLiteral"> {
    value: null;
    raw: string;
}

export interface VarargLiteral extends Base<"VarargLiteral"> {
    value: string;
    raw: string;
}

export interface TableKey extends Base<"TableKey"> {
    key: Expression;
    value: Expression;
}

export interface TableKeyString extends Base<"TableKeyString"> {
    key: Identifier;
    value: Expression;
}

export interface TableValue extends Base<"TableValue"> {
    value: Expression;
}

export interface TableConstructorExpression extends Base<"TableConstructorExpression"> {
    fields: Array<TableKey | TableKeyString | TableValue>;
}

export interface UnaryExpression extends Base<"UnaryExpression"> {
    operator: UnaryOperator;
    argument: Expression;
}

export interface BinaryExpression extends Base<"BinaryExpression"> {
    operator: BinaryOperator | ComparisonOperator;
    left: Expression;
    right: Expression;
}

export interface LogicalExpression extends Base<"LogicalExpression"> {
    operator: 'or' | 'and';
    left: Expression;
    right: Expression;
}

export interface MemberExpression extends Base<"MemberExpression"> {
    indexer: '.' | ':';
    identifier: Identifier;
    base: Expression;
}

export interface IndexExpression extends Base<"IndexExpression"> {
    base: Expression;
    index: Expression;
}

export interface CallExpression extends Base<"CallExpression"> {
    base: Expression;
    arguments: Expression[];
}

export interface TableCallExpression extends Base<"TableCallExpression"> {
    base: Expression;
    argument: Expression;
}

export interface StringCallExpression extends Base<"StringCallExpression"> {
    base: Expression;
    argument: Expression;
}

export interface Comment extends Base<"Comment"> {
    value: string;
    raw: string;
    rawInterrupted?: string;
}

export type Literal
    = StringLiteral
    | NumericLiteral
    | BooleanLiteral
    | NilLiteral
    | VarargLiteral;

export type Expression
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

export type Statement
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
    | CallStatement
    | FunctionDeclaration
    | ForNumericStatement
    | ForGenericStatement;

export type Node
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

// Keep this lower-case the same as in the luaparse.js file itself.
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

export interface Token {
    type: tokenTypes;
    value: string;
    line: number;
    lineStart: number;
    range: [number, number];
}

export interface ASTNodeSketching {
    labelStatement(label: Identifier): LabelStatement;
    breakStatement(): BreakStatement;
    gotoStatement(label: Identifier): GotoStatement;
    returnStatement(args: Expression[]): ReturnStatement;
    ifStatement(clauses: IfStatementClauses): IfStatement;
    ifClause(condition: Expression, body: Statement[]): IfClause;
    elseifClause(condition: Expression, body: Statement[]): ElseifClause;
    elseClause(body: Statement[]): ElseClause;
    whileStatement(condition: Expression, body: Statement[]): WhileStatement;
    doStatement(body: Statement[]): DoStatement;
    repeatStatement(condition: Expression, body: Statement[]): RepeatStatement;
    localStatement(variables: Identifier[], init: Expression[]): LocalStatement;
    assignmentStatement(variables: Array<Identifier | IndexExpression | MemberExpression>, init: Expression[]): AssignmentStatement;
    assignmentOperatorStatement(operator: BinaryOperator, variables: Array<Identifier | IndexExpression | MemberExpression>, init: Expression[]): AssignmentOperatorStatement;
    callStatement(expression: CallExpression | StringCallExpression | TableCallExpression): CallStatement;
    functionStatement(identifier: Identifier | MemberExpression | null, parameters: Array<Identifier | VarargLiteral>, isLocal: boolean, body: Statement[]): FunctionDeclaration;
    forNumericStatement(variable: Identifier, start: Expression, end: Expression, step: Expression | null, body: Statement[]): ForNumericStatement;
    forGenericStatement(variables: Identifier[], iterators: Expression[], body: Statement[]): ForGenericStatement;
    chunk(body: Statement[]): Chunk;
    identifier(name: string): Identifier;
    literal(type: tokenTypes.StringLiteral, value: string, raw: string, rawInterrupted?: string): StringLiteral;
    literal(type: tokenTypes.NumericLiteral, value: number, raw: string): NumericLiteral;
    literal(type: tokenTypes.BooleanLiteral, value: boolean, raw: 'true' | 'false'): BooleanLiteral;
    literal(type: tokenTypes.NilLiteral, value: null, raw: 'nil'): NilLiteral;
    literal(type: tokenTypes.VarargLiteral, value: '...', raw: '...'): VarargLiteral;
    tableKey(key: Expression, value: Expression): TableKey;
    tableKeyString(key: Identifier, value: Expression): TableKeyString;
    tableValue(value: Expression): TableValue;
    tableConstructorExpression(fields: Array<TableKey | TableKeyString | TableValue>): TableConstructorExpression;
    binaryExpression(operator: BinaryOperator | ComparisonOperator, left: Expression, right: Expression): BinaryExpression;
    binaryExpression(operator: 'and' | 'or', left: Expression, right: Expression): LogicalExpression;
    unaryExpression(operator: UnaryOperator, argument: Expression): UnaryExpression;
    memberExpression(base: Expression, indexer: '.' | ':', identifier: Identifier): MemberExpression;
    indexExpression(base: Expression, index: Expression): IndexExpression;
    callExpression(base: Expression, args: Expression[]): CallExpression;
    tableCallExpression(base: Expression, argument: Expression[]): TableCallExpression;
    stringCallExpression(base: Expression, argument: Expression): StringCallExpression;
    comment(value: string, raw: string, rawInterrupted?: string): Comment;
}

/**
 * The original luaparse describes a was to customize the building of the AST
 * (see https://fstirlitz.github.io/luaparse/#custom-ast)
 *
 * For that, this exposes the suite of functions that are called exactly before
 * finalizing a node.
 *
 * Reminder again that the `option.onCreateNode` callback should be preferred
 * (it is called after and with for parameter the result of the appropriate `ast.`
 * function, augmented by any location tracking).
 */
declare const ast: ASTNodeSketching;
export default ast;
