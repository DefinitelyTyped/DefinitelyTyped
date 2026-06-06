import * as babelTypes from "babel-types";

export type coreTypes =
    | babelTypes.ArrayExpression
    | babelTypes.AssignmentExpression
    | babelTypes.BinaryExpression
    | babelTypes.Directive
    | babelTypes.DirectiveLiteral
    | babelTypes.BlockStatement
    | babelTypes.BreakStatement
    | babelTypes.CallExpression
    | babelTypes.CatchClause
    | babelTypes.ConditionalExpression
    | babelTypes.ContinueStatement
    | babelTypes.DebuggerStatement
    | babelTypes.DoWhileStatement
    | babelTypes.EmptyStatement
    | babelTypes.ExpressionStatement
    | babelTypes.File
    | babelTypes.ForInStatement
    | babelTypes.ForStatement
    | babelTypes.FunctionDeclaration
    | babelTypes.FunctionExpression
    | babelTypes.Identifier
    | babelTypes.IfStatement
    | babelTypes.LabeledStatement
    | babelTypes.StringLiteral
    | babelTypes.NumericLiteral
    | babelTypes.NullLiteral
    | babelTypes.BooleanLiteral
    | babelTypes.RegExpLiteral
    | babelTypes.LogicalExpression
    | babelTypes.MemberExpression
    | babelTypes.NewExpression
    | babelTypes.Program
    | babelTypes.ObjectExpression
    | babelTypes.ObjectMethod
    | babelTypes.ObjectProperty
    | babelTypes.RestElement
    | babelTypes.ReturnStatement
    | babelTypes.SequenceExpression
    | babelTypes.SwitchCase
    | babelTypes.SwitchStatement
    | babelTypes.ThisExpression
    | babelTypes.ThrowStatement
    | babelTypes.TryStatement
    | babelTypes.UnaryExpression
    | babelTypes.UpdateExpression
    | babelTypes.VariableDeclaration
    | babelTypes.VariableDeclarator
    | babelTypes.WhileStatement
    | babelTypes.WithStatement;

export type es2015Types =
    | babelTypes.AssignmentPattern
    | babelTypes.ArrayPattern
    | babelTypes.ArrowFunctionExpression
    | babelTypes.ClassBody
    | babelTypes.ClassDeclaration
    | babelTypes.ClassExpression
    | babelTypes.ExportAllDeclaration
    | babelTypes.ExportDefaultDeclaration
    | babelTypes.ExportNamedDeclaration
    | babelTypes.ExportSpecifier
    | babelTypes.ForOfStatement
    | babelTypes.ImportDeclaration
    | babelTypes.ImportDefaultSpecifier
    | babelTypes.ImportNamespaceSpecifier
    | babelTypes.ImportSpecifier
    | babelTypes.MetaProperty
    | babelTypes.ClassMethod
    | babelTypes.ObjectPattern
    | babelTypes.SpreadElement
    | babelTypes.Super
    | babelTypes.TaggedTemplateExpression
    | babelTypes.TemplateElement
    | babelTypes.TemplateLiteral
    | babelTypes.YieldExpression
    | babelTypes.AwaitExpression
    | babelTypes.BindExpression
    | babelTypes.ClassProperty
    | babelTypes.Decorator
    | babelTypes.DoExpression
    | babelTypes.ExportDefaultSpecifier
    | babelTypes.ExportNamespaceSpecifier;

export type flowTypes =
    | babelTypes.AnyTypeAnnotation
    | babelTypes.ArrayTypeAnnotation
    | babelTypes.BooleanTypeAnnotation
    | babelTypes.BooleanLiteralTypeAnnotation
    | babelTypes.NullLiteralTypeAnnotation
    | babelTypes.ClassImplements
    | babelTypes.DeclareClass
    | babelTypes.DeclareFunction
    | babelTypes.DeclareInterface
    | babelTypes.DeclareModule
    | babelTypes.DeclareTypeAlias
    | babelTypes.DeclareVariable
    | babelTypes.FunctionTypeAnnotation
    | babelTypes.FunctionTypeParam
    | babelTypes.GenericTypeAnnotation
    | babelTypes.InterfaceExtends
    | babelTypes.InterfaceDeclaration
    | babelTypes.IntersectionTypeAnnotation
    | babelTypes.MixedTypeAnnotation
    | babelTypes.NullableTypeAnnotation
    | babelTypes.NumberTypeAnnotation
    | babelTypes.ObjectTypeAnnotation
    | babelTypes.ObjectTypeCallProperty
    | babelTypes.ObjectTypeIndexer
    | babelTypes.ObjectTypeProperty
    | babelTypes.QualifiedTypeIdentifier
    | babelTypes.StringLiteralTypeAnnotation
    | babelTypes.StringTypeAnnotation
    | babelTypes.ThisTypeAnnotation
    | babelTypes.TupleTypeAnnotation
    | babelTypes.TypeofTypeAnnotation
    | babelTypes.TypeAlias
    | babelTypes.TypeAnnotation
    | babelTypes.TypeCastExpression
    | babelTypes.TypeParameterDeclaration
    | babelTypes.TypeParameterInstantiation
    | babelTypes.UnionTypeAnnotation
    | babelTypes.VoidTypeAnnotation;

export type jsxTypes =
    | babelTypes.JSXAttribute
    | babelTypes.JSXClosingElement
    | babelTypes.JSXElement
    | babelTypes.JSXEmptyExpression
    | babelTypes.JSXExpressionContainer
    | babelTypes.JSXIdentifier
    | babelTypes.JSXMemberExpression
    | babelTypes.JSXNamespacedName
    | babelTypes.JSXOpeningElement
    | babelTypes.JSXSpreadAttribute
    | babelTypes.JSXText;

export type miscTypes = babelTypes.Noop | babelTypes.ParenthesizedExpression;

export type NodeTypes = coreTypes | es2015Types | flowTypes | jsxTypes | miscTypes;

export interface coreVisitors<V> {
    ArrayExpression?: V | undefined;
    AssignmentExpression?: V | undefined;
    BinaryExpression?: V | undefined;
    Directive?: V | undefined;
    DirectiveLiteral?: V | undefined;
    BlockStatement?: V | undefined;
    BreakStatement?: V | undefined;
    CallExpression?: V | undefined;
    CatchClause?: V | undefined;
    ConditionalExpression?: V | undefined;
    ContinueStatement?: V | undefined;
    DebuggerStatement?: V | undefined;
    DoWhileStatement?: V | undefined;
    EmptyStatement?: V | undefined;
    ExpressionStatement?: V | undefined;
    File?: V | undefined;
    ForInStatement?: V | undefined;
    ForStatement?: V | undefined;
    FunctionDeclaration?: V | undefined;
    FunctionExpression?: V | undefined;
    Identifier?: V | undefined;
    IfStatement?: V | undefined;
    LabeledStatement?: V | undefined;
    StringLiteral?: V | undefined;
    NumericLiteral?: V | undefined;
    NullLiteral?: V | undefined;
    BooleanLiteral?: V | undefined;
    RegExpLiteral?: V | undefined;
    LogicalExpression?: V | undefined;
    MemberExpression?: V | undefined;
    NewExpression?: V | undefined;
    Program?: V | undefined;
    ObjectExpression?: V | undefined;
    ObjectMethod?: V | undefined;
    ObjectProperty?: V | undefined;
    RestElement?: V | undefined;
    ReturnStatement?: V | undefined;
    SequenceExpression?: V | undefined;
    SwitchCase?: V | undefined;
    SwitchStatement?: V | undefined;
    ThisExpression?: V | undefined;
    ThrowStatement?: V | undefined;
    TryStatement?: V | undefined;
    UnaryExpression?: V | undefined;
    UpdateExpression?: V | undefined;
    VariableDeclaration?: V | undefined;
    VariableDeclarator?: V | undefined;
    WhileStatement?: V | undefined;
    WithStatement?: V | undefined;
}

export interface es2015Visitors<V> {
    AssignmentPattern?: V | undefined;
    ArrayPattern?: V | undefined;
    ArrowFunctionExpression?: V | undefined;
    ClassBody?: V | undefined;
    ClassDeclaration?: V | undefined;
    ClassExpression?: V | undefined;
    ExportAllDeclaration?: V | undefined;
    ExportDefaultDeclaration?: V | undefined;
    ExportNamedDeclaration?: V | undefined;
    ExportSpecifier?: V | undefined;
    ForOfStatement?: V | undefined;
    ImportDeclaration?: V | undefined;
    ImportDefaultSpecifier?: V | undefined;
    ImportNamespaceSpecifier?: V | undefined;
    ImportSpecifier?: V | undefined;
    MetaProperty?: V | undefined;
    ClassMethod?: V | undefined;
    ObjectPattern?: V | undefined;
    SpreadElement?: V | undefined;
    Super?: V | undefined;
    TaggedTemplateExpression?: V | undefined;
    TemplateElement?: V | undefined;
    TemplateLiteral?: V | undefined;
    YieldExpression?: V | undefined;
    AwaitExpression?: V | undefined;
    BindExpression?: V | undefined;
    ClassProperty?: V | undefined;
    Decorator?: V | undefined;
    DoExpression?: V | undefined;
    ExportDefaultSpecifier?: V | undefined;
    ExportNamespaceSpecifier?: V | undefined;
}

export interface flowVisitors<V> {
    AnyTypeAnnotation?: V | undefined;
    ArrayTypeAnnotation?: V | undefined;
    BooleanTypeAnnotation?: V | undefined;
    BooleanLiteralTypeAnnotation?: V | undefined;
    NullLiteralTypeAnnotation?: V | undefined;
    ClassImplements?: V | undefined;
    DeclareClass?: V | undefined;
    DeclareFunction?: V | undefined;
    DeclareInterface?: V | undefined;
    DeclareModule?: V | undefined;
    DeclareTypeAlias?: V | undefined;
    DeclareVariable?: V | undefined;
    FunctionTypeAnnotation?: V | undefined;
    FunctionTypeParam?: V | undefined;
    GenericTypeAnnotation?: V | undefined;
    InterfaceExtends?: V | undefined;
    InterfaceDeclaration?: V | undefined;
    IntersectionTypeAnnotation?: V | undefined;
    MixedTypeAnnotation?: V | undefined;
    NullableTypeAnnotation?: V | undefined;
    NumberTypeAnnotation?: V | undefined;
    ObjectTypeAnnotation?: V | undefined;
    ObjectTypeCallProperty?: V | undefined;
    ObjectTypeIndexer?: V | undefined;
    ObjectTypeProperty?: V | undefined;
    QualifiedTypeIdentifier?: V | undefined;
    StringLiteralTypeAnnotation?: V | undefined;
    StringTypeAnnotation?: V | undefined;
    ThisTypeAnnotation?: V | undefined;
    TupleTypeAnnotation?: V | undefined;
    TypeofTypeAnnotation?: V | undefined;
    TypeAlias?: V | undefined;
    TypeAnnotation?: V | undefined;
    TypeCastExpression?: V | undefined;
    TypeParameterDeclaration?: V | undefined;
    TypeParameterInstantiation?: V | undefined;
    UnionTypeAnnotation?: V | undefined;
    VoidTypeAnnotation?: V | undefined;
}

export interface jsxVisitors<V> {
    JSXAttribute?: V | undefined;
    JSXClosingElement?: V | undefined;
    JSXElement?: V | undefined;
    JSXEmptyExpression?: V | undefined;
    JSXExpressionContainer?: V | undefined;
    JSXIdentifier?: V | undefined;
    JSXMemberExpression?: V | undefined;
    JSXNamespacedName?: V | undefined;
    JSXOpeningElement?: V | undefined;
    JSXSpreadAttribute?: V | undefined;
    JSXText?: V | undefined;
}

export interface miscVisitors<V> {
    Noop?: V | undefined;
    ParenthesizedExpression?: V | undefined;
}

export interface visitors<V>
    extends coreVisitors<V>, es2015Visitors<V>, flowVisitors<V>, jsxVisitors<V>, miscVisitors<V>
{
}

export type Visitor = (commentBlock: NodeTypes, state: any) => void;

export type SimpleVisitor = (node: NodeTypes, state: any) => void;

export type AncestorVisitor = (node: NodeTypes, state: any, ancestors: babelTypes.Node[]) => void;

export type AncestorStatelessVisitor = (node: NodeTypes, state: any, ancestors: babelTypes.Node[]) => void;

export type RecursiveVisitor = (node: NodeTypes, state: any, next: (node: babelTypes.Node) => void) => void;

export function simple(node: NodeTypes, visitors: visitors<SimpleVisitor>, state: any): void;
export function ancestor(node: NodeTypes, visitors: visitors<AncestorVisitor>, state: any): void;
export function recursive(node: NodeTypes, visitors: visitors<RecursiveVisitor>, state: any): void;
