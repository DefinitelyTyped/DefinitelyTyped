// Type definitions for babylon-walk 3.10
// Project: https://github.com/pugjs/babylon-walk
// Definitions by: Marek Buchar <https://github.com/czbuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as babelTypes from 'babel-types';

export type coreTypes = babelTypes.ArrayExpression | babelTypes.AssignmentExpression | babelTypes.BinaryExpression |
    babelTypes.Directive | babelTypes.DirectiveLiteral | babelTypes.BlockStatement | babelTypes.BreakStatement |
    babelTypes.CallExpression | babelTypes.CatchClause | babelTypes.ConditionalExpression |
    babelTypes.ContinueStatement | babelTypes.DebuggerStatement | babelTypes.DoWhileStatement |
    babelTypes.EmptyStatement | babelTypes.ExpressionStatement | babelTypes.File | babelTypes.ForInStatement |
    babelTypes.ForStatement | babelTypes.FunctionDeclaration | babelTypes.FunctionExpression | babelTypes.Identifier |
    babelTypes.IfStatement | babelTypes.LabeledStatement | babelTypes.StringLiteral | babelTypes.NumericLiteral |
    babelTypes.NullLiteral | babelTypes.BooleanLiteral | babelTypes.RegExpLiteral | babelTypes.LogicalExpression |
    babelTypes.MemberExpression | babelTypes.NewExpression | babelTypes.Program | babelTypes.ObjectExpression |
    babelTypes.ObjectMethod | babelTypes.ObjectProperty | babelTypes.RestElement | babelTypes.ReturnStatement |
    babelTypes.SequenceExpression | babelTypes.SwitchCase | babelTypes.SwitchStatement | babelTypes.ThisExpression |
    babelTypes.ThrowStatement | babelTypes.TryStatement | babelTypes.UnaryExpression | babelTypes.UpdateExpression |
    babelTypes.VariableDeclaration | babelTypes.VariableDeclarator | babelTypes.WhileStatement |
    babelTypes.WithStatement;

export type es2015Types = babelTypes.AssignmentPattern | babelTypes.ArrayPattern | babelTypes.ArrowFunctionExpression |
    babelTypes.ClassBody | babelTypes.ClassDeclaration | babelTypes.ClassExpression |
    babelTypes.ExportAllDeclaration | babelTypes.ExportDefaultDeclaration | babelTypes.ExportNamedDeclaration |
    babelTypes.ExportSpecifier | babelTypes.ForOfStatement | babelTypes.ImportDeclaration |
    babelTypes.ImportDefaultSpecifier | babelTypes.ImportNamespaceSpecifier | babelTypes.ImportSpecifier |
    babelTypes.MetaProperty | babelTypes.ClassMethod | babelTypes.ObjectPattern | babelTypes.SpreadElement |
    babelTypes.Super | babelTypes.TaggedTemplateExpression | babelTypes.TemplateElement | babelTypes.TemplateLiteral |
    babelTypes.YieldExpression | babelTypes.AwaitExpression | babelTypes.BindExpression | babelTypes.ClassProperty |
    babelTypes.Decorator | babelTypes.DoExpression | babelTypes.ExportDefaultSpecifier |
    babelTypes.ExportNamespaceSpecifier;

export type flowTypes = babelTypes.AnyTypeAnnotation | babelTypes.ArrayTypeAnnotation | babelTypes.BooleanTypeAnnotation |
    babelTypes.BooleanLiteralTypeAnnotation | babelTypes.NullLiteralTypeAnnotation | babelTypes.ClassImplements |
    babelTypes.DeclareClass | babelTypes.DeclareFunction | babelTypes.DeclareInterface | babelTypes.DeclareModule |
    babelTypes.DeclareTypeAlias | babelTypes.DeclareVariable | babelTypes.FunctionTypeAnnotation |
    babelTypes.FunctionTypeParam | babelTypes.GenericTypeAnnotation | babelTypes.InterfaceExtends |
    babelTypes.InterfaceDeclaration | babelTypes.IntersectionTypeAnnotation | babelTypes.MixedTypeAnnotation |
    babelTypes.NullableTypeAnnotation | babelTypes.NumberTypeAnnotation | babelTypes.ObjectTypeAnnotation |
    babelTypes.ObjectTypeCallProperty | babelTypes.ObjectTypeIndexer | babelTypes.ObjectTypeProperty |
    babelTypes.QualifiedTypeIdentifier | babelTypes.StringLiteralTypeAnnotation | babelTypes.StringTypeAnnotation |
    babelTypes.ThisTypeAnnotation | babelTypes.TupleTypeAnnotation | babelTypes.TypeofTypeAnnotation |
    babelTypes.TypeAlias | babelTypes.TypeAnnotation | babelTypes.TypeCastExpression |
    babelTypes.TypeParameterDeclaration | babelTypes.TypeParameterInstantiation | babelTypes.UnionTypeAnnotation |
    babelTypes.VoidTypeAnnotation;

export type jsxTypes = babelTypes.JSXAttribute | babelTypes.JSXClosingElement | babelTypes.JSXElement |
    babelTypes.JSXEmptyExpression | babelTypes.JSXExpressionContainer | babelTypes.JSXIdentifier |
    babelTypes.JSXMemberExpression | babelTypes.JSXNamespacedName | babelTypes.JSXOpeningElement |
    babelTypes.JSXSpreadAttribute | babelTypes.JSXText;

export type miscTypes = babelTypes.Noop | babelTypes.ParenthesizedExpression;

export type NodeTypes = coreTypes | es2015Types | flowTypes | jsxTypes | miscTypes;

export interface coreVisitors<V> {
    ArrayExpression?: V; AssignmentExpression?: V; BinaryExpression?: V; Directive?: V; DirectiveLiteral?: V;
    BlockStatement?: V; BreakStatement?: V; CallExpression?: V; CatchClause?: V; ConditionalExpression?: V;
    ContinueStatement?: V; DebuggerStatement?: V; DoWhileStatement?: V; EmptyStatement?: V; ExpressionStatement?: V;
    File?: V; ForInStatement?: V; ForStatement?: V; FunctionDeclaration?: V; FunctionExpression?: V; Identifier?: V;
    IfStatement?: V; LabeledStatement?: V; StringLiteral?: V; NumericLiteral?: V; NullLiteral?: V; BooleanLiteral?: V;
    RegExpLiteral?: V; LogicalExpression?: V; MemberExpression?: V; NewExpression?: V; Program?: V;
    ObjectExpression?: V; ObjectMethod?: V; ObjectProperty?: V; RestElement?: V; ReturnStatement?: V;
    SequenceExpression?: V; SwitchCase?: V; SwitchStatement?: V; ThisExpression?: V; ThrowStatement?: V;
    TryStatement?: V; UnaryExpression?: V; UpdateExpression?: V; VariableDeclaration?: V; VariableDeclarator?: V;
    WhileStatement?: V; WithStatement?: V;
}

export interface es2015Visitors<V> {
    AssignmentPattern?: V; ArrayPattern?: V; ArrowFunctionExpression?: V; ClassBody?: V; ClassDeclaration?: V;
    ClassExpression?: V; ExportAllDeclaration?: V; ExportDefaultDeclaration?: V; ExportNamedDeclaration?: V;
    ExportSpecifier?: V; ForOfStatement?: V; ImportDeclaration?: V; ImportDefaultSpecifier?: V;
    ImportNamespaceSpecifier?: V; ImportSpecifier?: V; MetaProperty?: V; ClassMethod?: V; ObjectPattern?: V;
    SpreadElement?: V; Super?: V; TaggedTemplateExpression?: V; TemplateElement?: V; TemplateLiteral?: V;
    YieldExpression?: V; AwaitExpression?: V; BindExpression?: V; ClassProperty?: V; Decorator?: V; DoExpression?: V;
    ExportDefaultSpecifier?: V; ExportNamespaceSpecifier?: V;
}

export interface flowVisitors<V> {
    AnyTypeAnnotation?: V; ArrayTypeAnnotation?: V; BooleanTypeAnnotation?: V; BooleanLiteralTypeAnnotation?: V;
    NullLiteralTypeAnnotation?: V; ClassImplements?: V; DeclareClass?: V; DeclareFunction?: V; DeclareInterface?: V;
    DeclareModule?: V; DeclareTypeAlias?: V; DeclareVariable?: V; FunctionTypeAnnotation?: V; FunctionTypeParam?: V;
    GenericTypeAnnotation?: V; InterfaceExtends?: V; InterfaceDeclaration?: V; IntersectionTypeAnnotation?: V;
    MixedTypeAnnotation?: V; NullableTypeAnnotation?: V; NumberTypeAnnotation?: V; ObjectTypeAnnotation?: V;
    ObjectTypeCallProperty?: V; ObjectTypeIndexer?: V; ObjectTypeProperty?: V; QualifiedTypeIdentifier?: V;
    StringLiteralTypeAnnotation?: V; StringTypeAnnotation?: V; ThisTypeAnnotation?: V; TupleTypeAnnotation?: V;
    TypeofTypeAnnotation?: V; TypeAlias?: V; TypeAnnotation?: V; TypeCastExpression?: V; TypeParameterDeclaration?: V;
    TypeParameterInstantiation?: V; UnionTypeAnnotation?: V; VoidTypeAnnotation?: V;
}

export interface jsxVisitors<V> {
    JSXAttribute?: V; JSXClosingElement?: V; JSXElement?: V; JSXEmptyExpression?: V; JSXExpressionContainer?: V;
    JSXIdentifier?: V; JSXMemberExpression?: V; JSXNamespacedName?: V; JSXOpeningElement?: V; JSXSpreadAttribute?: V;
    JSXText?: V;
}

export interface miscVisitors<V> {
    Noop?: V; ParenthesizedExpression?: V;
}

export interface visitors<V> extends coreVisitors<V>, es2015Visitors<V>, flowVisitors<V>, jsxVisitors<V>, miscVisitors<V> {
}

export type Visitor = (commentBlock: NodeTypes, state: any) => void;

export type SimpleVisitor = (node: NodeTypes, state: any) => void;

export type AncestorVisitor = (node: NodeTypes, state: any, ancestors: babelTypes.Node[]) => void;

export type AncestorStatelessVisitor = (node: NodeTypes, state: any, ancestors: babelTypes.Node[]) => void;

export type RecursiveVisitor = (node: NodeTypes, state: any, next: (node: babelTypes.Node) => void) => void;

export function simple(node: NodeTypes, visitors: visitors<SimpleVisitor>, state: any): void;
export function ancestor(node: NodeTypes, visitors: visitors<AncestorVisitor>, state: any): void;
export function recursive(node: NodeTypes, visitors: visitors<RecursiveVisitor>, state: any): void;
