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
}

export interface LabelStatement extends Base<"LabelStatement"> {
    label: Identifier;
}

export type BreakStatement = Base<"BreakStatement">;

export interface GotoStatement extends Base<"GotoStatement"> {
    label: Identifier;
}

export interface ReturnStatement extends Base<"ReturnStatement"> {
    arguments: Expression[];
}

export interface IfStatement extends Base<"IfStatement"> {
    clauses: Array<IfClause | ElseifClause | ElseClause>;
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
}

export interface Identifier extends Base<"Identifier"> {
    name: string;
}

export interface StringLiteral extends Base<"StringLiteral"> {
    value: string;
    raw: string;
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
    operator: "not" | "-" | "~" | "#";
    argument: Expression;
}

export interface BinaryExpression extends Base<"BinaryExpression"> {
    operator: "+" | "-" | "*" | "%" | "^" | "/" | "//" | "&" | "|" | "~" | "<<" | ">>" | ".." | "~=" | "=="  | "<" | "<=" | ">" | ">=";
    left: Expression;
    right: Expression;
}

export interface LogicalExpression extends Base<"LogicalExpression"> {
    operator: "or" | "and";
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
    arguments: Expression;
}

export interface StringCallExpression extends Base<"StringCallExpression"> {
    base: Expression;
    argument: Expression;
}

export interface Comment extends Base<"Comment"> {
    value: string;
    raw: string;
}

export type Expression =
    FunctionDeclaration |
    Identifier |
    StringLiteral |
    NumericLiteral |
    BooleanLiteral |
    NilLiteral |
    VarargLiteral |
    TableConstructorExpression |
    BinaryExpression |
    LogicalExpression |
    UnaryExpression |
    MemberExpression |
    IndexExpression |
    CallExpression |
    TableCallExpression |
    StringCallExpression;

export type Statement =
    LabelStatement |
    BreakStatement |
    GotoStatement |
    ReturnStatement |
    IfStatement |
    WhileStatement |
    DoStatement |
    RepeatStatement |
    LocalStatement |
    AssignmentStatement |
    CallStatement |
    FunctionDeclaration |
    ForNumericStatement |
    ForGenericStatement;

export type Node =
    Statement |
    Expression |
    IfClause |
    ElseifClause |
    ElseClause |
    Chunk |
    TableKey |
    TableKeyString |
    TableValue |
    Comment;
