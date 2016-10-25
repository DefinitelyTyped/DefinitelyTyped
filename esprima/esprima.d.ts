// Type definitions for Esprima v2.1.0
// Project: http://esprima.org
// Definitions by: teppeis <https://github.com/teppeis>, RReverser <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../estree/estree.d.ts" />

declare namespace esprima {

    const version: string;

    function parse(code: string, options?: Options): ESTree.Program;
    function tokenize(code: string, options?: Options): Array<Token>;

    interface Token {
        type: string;
        value: string;
    }

    interface Comment extends ESTree.Node {
        value: string;
    }

    interface Options {
        loc?: boolean;
        range?: boolean;
        raw?: boolean;
        tokens?: boolean;
        comment?: boolean;
        attachComment?: boolean;
        tolerant?: boolean;
        source?: boolean;
        sourceType?: 'script' | 'module';
    }

    const Syntax: {
        AssignmentExpression: string,
        AssignmentPattern: string,
        ArrayExpression: string,
        ArrayPattern: string,
        ArrowFunctionExpression: string,
        BlockStatement: string,
        BinaryExpression: string,
        BreakStatement: string,
        CallExpression: string,
        CatchClause: string,
        ClassBody: string,
        ClassDeclaration: string,
        ClassExpression: string,
        ConditionalExpression: string,
        ContinueStatement: string,
        DoWhileStatement: string,
        DebuggerStatement: string,
        EmptyStatement: string,
        ExportAllDeclaration: string,
        ExportDefaultDeclaration: string,
        ExportNamedDeclaration: string,
        ExportSpecifier: string,
        ExpressionStatement: string,
        ForStatement: string,
        ForOfStatement: string,
        ForInStatement: string,
        FunctionDeclaration: string,
        FunctionExpression: string,
        Identifier: string,
        IfStatement: string,
        ImportDeclaration: string,
        ImportDefaultSpecifier: string,
        ImportNamespaceSpecifier: string,
        ImportSpecifier: string,
        Literal: string,
        LabeledStatement: string,
        LogicalExpression: string,
        MemberExpression: string,
        MetaProperty: string,
        MethodDefinition: string,
        NewExpression: string,
        ObjectExpression: string,
        ObjectPattern: string,
        Program: string,
        Property: string,
        RestElement: string,
        ReturnStatement: string,
        SequenceExpression: string,
        SpreadElement: string,
        Super: string,
        SwitchCase: string,
        SwitchStatement: string,
        TaggedTemplateExpression: string,
        TemplateElement: string,
        TemplateLiteral: string,
        ThisExpression: string,
        ThrowStatement: string,
        TryStatement: string,
        UnaryExpression: string,
        UpdateExpression: string,
        VariableDeclaration: string,
        VariableDeclarator: string,
        WhileStatement: string,
        WithStatement: string,
        YieldExpression: string
    };

}

declare module "esprima" {
    export = esprima
}
