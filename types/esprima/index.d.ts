import * as ESTree from "estree";

export const version: string;

export function parseScript(
    input: string,
    config?: ParseOptions,
    delegate?: (node: ESTree.Node, meta: any) => void,
): Program;
export function parseModule(
    input: string,
    config?: ParseOptions,
    delegate?: (node: ESTree.Node, meta: any) => void,
): Program;
export function tokenize(input: string, config?: TokenizeOptions): Token[];

export interface Program extends ESTree.Program {
    tokens?: Token[] | undefined;
}

export interface Token {
    type: string;
    value: string;
}

export interface ParseOptions {
    jsx?: boolean | undefined;
    range?: boolean | undefined;
    loc?: boolean | undefined;
    tolerant?: boolean | undefined;
    tokens?: boolean | undefined;
    comment?: boolean | undefined;
}

export interface TokenizeOptions {
    tolerant?: boolean | undefined;
    range?: boolean | undefined;
    loc?: boolean | undefined;
    comment?: boolean | undefined;
}

export const Syntax: {
    ArrayExpression: "ArrayExpression";
    ArrayPattern: "ArrayPattern";
    ArrowFunctionExpression: "ArrowFunctionExpression";
    AssignmentExpression: "AssignmentExpression";
    AssignmentPattern: "AssignmentPattern";
    AwaitExpression: "AwaitExpression";
    BinaryExpression: "BinaryExpression";
    BlockStatement: "BlockStatement";
    BreakStatement: "BreakStatement";
    CallExpression: "CallExpression";
    CatchClause: "CatchClause";
    ClassBody: "ClassBody";
    ClassDeclaration: "ClassDeclaration";
    ClassExpression: "ClassExpression";
    ConditionalExpression: "ConditionalExpression";
    ContinueStatement: "ContinueStatement";
    DebuggerStatement: "DebuggerStatement";
    DoWhileStatement: "DoWhileStatement";
    EmptyStatement: "EmptyStatement";
    ExportAllDeclaration: "ExportAllDeclaration";
    ExportDefaultDeclaration: "ExportDefaultDeclaration";
    ExportNamedDeclaration: "ExportNamedDeclaration";
    ExportSpecifier: "ExportSpecifier";
    ExpressionStatement: "ExpressionStatement";
    ForInStatement: "ForInStatement";
    ForOfStatement: "ForOfStatement";
    ForStatement: "ForStatement";
    FunctionDeclaration: "FunctionDeclaration";
    FunctionExpression: "FunctionExpression";
    Identifier: "Identifier";
    IfStatement: "IfStatement";
    Import: "Import";
    ImportDeclaration: "ImportDeclaration";
    ImportDefaultSpecifier: "ImportDefaultSpecifier";
    ImportNamespaceSpecifier: "ImportNamespaceSpecifier";
    ImportSpecifier: "ImportSpecifier";
    LabeledStatement: "LabeledStatement";
    Literal: "Literal";
    LogicalExpression: "LogicalExpression";
    MemberExpression: "MemberExpression";
    MetaProperty: "MetaProperty";
    MethodDefinition: "MethodDefinition";
    NewExpression: "NewExpression";
    ObjectExpression: "ObjectExpression";
    ObjectPattern: "ObjectPattern";
    Program: "Program";
    Property: "Property";
    RestElement: "RestElement";
    ReturnStatement: "ReturnStatement";
    SequenceExpression: "SequenceExpression";
    SpreadElement: "SpreadElement";
    Super: "Super";
    SwitchCase: "SwitchCase";
    SwitchStatement: "SwitchStatement";
    TaggedTemplateExpression: "TaggedTemplateExpression";
    TemplateElement: "TemplateElement";
    TemplateLiteral: "TemplateLiteral";
    ThisExpression: "ThisExpression";
    ThrowStatement: "ThrowStatement";
    TryStatement: "TryStatement";
    UnaryExpression: "UnaryExpression";
    UpdateExpression: "UpdateExpression";
    VariableDeclaration: "VariableDeclaration";
    VariableDeclarator: "VariableDeclarator";
    WhileStatement: "WhileStatement";
    WithStatement: "WithStatement";
    YieldExpression: "YieldExpression";
};
