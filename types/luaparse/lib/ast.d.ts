export const enum Type {
    LabelStatement = "LabelStatement",
    BreakStatement = "BreakStatement",
    GotoStatement = "GotoStatement",
    ReturnStatement = "ReturnStatement",
    IfStatement = "IfStatement",
    IfClause = "IfClause",
    ElseifClause = "ElseifClause",
    ElseClause = "ElseClause",
    WhileStatement = "WhileStatement",
    DoStatement = "DoStatement",
    RepeatStatement = "RepeatStatement",
    LocalStatement = "LocalStatement",
    AssignmentStatement = "AssignmentStatement",
    CallStatement = "CallStatement",
    FunctionDeclaration = "FunctionDeclaration",
    ForNumericStatement = "ForNumericStatement",
    ForGenericStatement = "ForGenericStatement",
    Chunk = "Chunk",
    Identifier = "Identifier",
    StringLiteral = "StringLiteral",
    NumericLiteral = "NumericLiteral",
    BooleanLiteral = "BooleanLiteral",
    NilLiteral = "NilLiteral",
    VarargLiteral = "VarargLiteral",
    TableKey = "TableKey",
    TableKeyString = "TableKeyString",
    TableValue = "TableValue",
    TableConstructorExpression = "TableConstructorExpression",
    UnaryExpression = "UnaryExpression",
    BinaryExpression = "BinaryExpression",
    MemberExpression = "MemberExpression",
    IndexExpression = "IndexExpression",
    CallExpression = "CallExpression",
    TableCallExpression = "TableCallExpression",
    StringCallExpression = "StringCallExpression",
    Comment = "Comment"
}

export interface Base<TType extends Type> {
    type: TType;
}

export interface LabelStatement extends Base<Type.LabelStatement> {
    label: string;
}

export type BreakStatement = Base<Type.BreakStatement>;

export interface GotoStatement extends Base<Type.GotoStatement> {
    label: string;
}

export interface ReturnStatement extends Base<Type.ReturnStatement> {
    arguments: Expression[];
}

export interface IfStatement extends Base<Type.IfStatement> {
    clauses: IfClause[];
}

export interface IfClause extends Base<Type.IfClause> {
    condition: Expression;
    body: Statement[];
}

export interface ElseifClause extends Base<Type.ElseifClause> {
    condition: Expression;
    body: Statement[];
}

export interface ElseClause extends Base<Type.ElseClause> {
    body: Statement[];
}

export interface WhileStatement extends Base<Type.WhileStatement> {
    condition: Expression;
    body: Statement[];
}

export interface DoStatement extends Base<Type.DoStatement> {
    body: Statement[];
}

export interface RepeatStatement extends Base<Type.RepeatStatement> {
    condition: Expression;
    body: Statement[];
}

export interface LocalStatement extends Base<Type.LocalStatement> {
    variables: Identifier[];
    init: Expression[];
}

export interface AssignmentStatement extends Base<Type.AssignmentStatement> {
    variables: Array<IndexExpression | MemberExpression | Identifier>;
    init: Expression[];
}

export interface CallStatement extends Base<Type.CallStatement> {
    expression: CallExpression | StringCallExpression | TableCallExpression;
}

export interface FunctionDeclaration extends Base<Type.FunctionDeclaration> {
    identifier: Identifier | null;
    isLocal: boolean;
    parameters: Identifier[];
    body: Statement[];
}

export interface ForNumericStatement extends Base<Type.ForNumericStatement> {
    variable: Identifier;
    start: Expression;
    end: Expression;
    step: Expression | null;
    body: Statement[];
}

export interface ForGenericStatement extends Base<Type.ForGenericStatement> {
    variables: Identifier[];
    iterators: Expression[];
    body: Statement[];
}

export interface Chunk extends Base<Type.Chunk> {
    body: Statement[];
    comments: string[];
}

export interface Identifier extends Base<Type.Identifier> {
    name: string;
}

export interface StringLiteral extends Base<Type.StringLiteral> {
    value: string;
    raw: string;
}

export interface NumericLiteral extends Base<Type.NumericLiteral> {
    value: number;
    raw: string;
}

export interface BooleanLiteral extends Base<Type.BooleanLiteral> {
    value: boolean;
    raw: string;
}

export interface NilLiteral extends Base<Type.NilLiteral> {
    value: null;
    raw: string;
}

export interface VarargLiteral extends Base<Type.VarargLiteral> {
    value: string;
    raw: string;
}

export interface TableKey extends Base<Type.TableKey> {
    key: Expression;
    value: Expression;
}

export interface TableKeyString extends Base<Type.TableKeyString> {
    key: Identifier;
    value: Expression;
}

export interface TableValue extends Base<Type.TableValue> {
    value: Expression;
}

export interface TableConstructorExpression extends Base<Type.TableConstructorExpression> {
    fields: Array<TableKey | TableKeyString>;
}

export interface UnaryExpression extends Base<Type.UnaryExpression> {
    operator: "#" | "not";
    argument: Expression;
}

export interface BinaryExpression extends Base<Type.BinaryExpression> {
    operator: "+" | "-" | "*" | "/" | "%" | "^" | "==" | "~=" | "<=" | ">=" | "<" | ">" | "..";
    left: Expression;
    right: Expression;
}

export interface MemberExpression extends Base<Type.MemberExpression> {
    indexer: string;
    identifier: Identifier;
    base: Expression;
}

export interface IndexExpression extends Base<Type.IndexExpression> {
    base: Expression;
    index: Expression;
}

export interface CallExpression extends Base<Type.CallExpression> {
    base: Expression;
    arguments: Expression[];
}

export interface TableCallExpression extends Base<Type.TableCallExpression> {
    base: Expression;
    arguments: Expression[];
}

export interface StringCallExpression extends Base<Type.StringCallExpression> {
    base: Expression;
    argument: Expression;
}

export interface Comment extends Base<Type.Comment> {
    value: string;
    raw: string;
}

export type Node =
    LabelStatement |
    BreakStatement |
    GotoStatement |
    ReturnStatement |
    IfStatement |
    IfClause |
    ElseifClause |
    ElseClause |
    WhileStatement |
    DoStatement |
    RepeatStatement |
    LocalStatement |
    AssignmentStatement |
    CallStatement |
    FunctionDeclaration |
    ForNumericStatement |
    ForGenericStatement |
    Chunk |
    Identifier |
    StringLiteral |
    NumericLiteral |
    BooleanLiteral |
    NilLiteral |
    VarargLiteral |
    TableKey |
    TableKeyString |
    TableValue |
    TableConstructorExpression |
    BinaryExpression |
    UnaryExpression |
    MemberExpression |
    IndexExpression |
    CallExpression |
    TableCallExpression |
    StringCallExpression |
    Comment;

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
