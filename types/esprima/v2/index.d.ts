/// <reference types="estree" />

export = esprima;
export as namespace esprima;
import * as ESTree from "estree";

declare namespace esprima {
    const version: string;

    function parse(code: string, options?: Options, delegate?: (node: ESTree.Node, meta: any) => void): ESTree.Program;
    function tokenize(code: string, options?: Options): Array<Token>;

    interface Token {
        type: string;
        value: string;
    }

    interface Options {
        loc?: boolean | undefined;
        range?: boolean | undefined;
        raw?: boolean | undefined;
        tokens?: boolean | undefined;
        comment?: boolean | undefined;
        attachComment?: boolean | undefined;
        tolerant?: boolean | undefined;
        source?: boolean | undefined;
        sourceType?: "script" | "module" | undefined;
    }

    const Syntax: {
        AssignmentExpression: "AssignmentExpression";
        AssignmentPattern: "AssignmentPattern";
        ArrayExpression: "ArrayExpression";
        ArrayPattern: "ArrayPattern";
        ArrowFunctionExpression: "ArrowFunctionExpression";
        BlockStatement: "BlockStatement";
        BinaryExpression: "BinaryExpression";
        BreakStatement: "BreakStatement";
        CallExpression: "CallExpression";
        CatchClause: "CatchClause";
        ClassBody: "ClassBody";
        ClassDeclaration: "ClassDeclaration";
        ClassExpression: "ClassExpression";
        ConditionalExpression: "ConditionalExpression";
        ContinueStatement: "ContinueStatement";
        DoWhileStatement: "DoWhileStatement";
        DebuggerStatement: "DebuggerStatement";
        EmptyStatement: "EmptyStatement";
        ExportAllDeclaration: "ExportAllDeclaration";
        ExportDefaultDeclaration: "ExportDefaultDeclaration";
        ExportNamedDeclaration: "ExportNamedDeclaration";
        ExportSpecifier: "ExportSpecifier";
        ExpressionStatement: "ExpressionStatement";
        ForStatement: "ForStatement";
        ForOfStatement: "ForOfStatement";
        ForInStatement: "ForInStatement";
        FunctionDeclaration: "FunctionDeclaration";
        FunctionExpression: "FunctionExpression";
        Identifier: "Identifier";
        IfStatement: "IfStatement";
        ImportDeclaration: "ImportDeclaration";
        ImportDefaultSpecifier: "ImportDefaultSpecifier";
        ImportNamespaceSpecifier: "ImportNamespaceSpecifier";
        ImportSpecifier: "ImportSpecifier";
        Literal: "Literal";
        LabeledStatement: "LabeledStatement";
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
}
