import * as ESTree from "estree";

declare namespace ESTraverse {
    const Syntax: Syntax;

    const VisitorKeys: VisitorKeys;

    enum VisitorOption {
        Break,
        Skip,
        Remove,
    }

    class Controller {
        /**
         * Traverse the AST.
         */
        traverse(root: ESTree.Node, visitor: Visitor): void;

        /**
         * Traverse and replace the AST.
         */
        replace(root: ESTree.Node, visitor: Visitor): ESTree.Node;

        /**
         * The current node.
         */
        current(): ESTree.Node;

        /**
         * The type of current node.
         */
        type(): string;

        /**
         * Obtain the property paths array from root to the current node.
         */
        path(): Array<string | number> | null;

        /**
         * An array of parent elements.
         */
        parents(): ESTree.Node[];

        /**
         * Notify the controller to break the traversals, skip the child nodes of current node or remove the
         * current node.
         */
        notify(flag: VisitorOption): void;

        /**
         * Break the traversals.
         */
        break(): void;

        /**
         * Skip the child nodes of current node.
         */
        skip(): void;

        /**
         * Remove the current node.
         */
        remove(): void;
    }

    function traverse(root: ESTree.Node, visitor: Visitor): void;

    function replace(root: ESTree.Node, visitor: Visitor): ESTree.Node;

    function attachComments(tree: ESTree.Node, providedComments: ESTree.Comment[], tokens: ESTree.Node[]): ESTree.Node;

    function cloneEnvironment(): typeof ESTraverse;

    type NodeType =
        | "AssignmentExpression"
        | "AssignmentPattern"
        | "ArrayExpression"
        | "ArrayPattern"
        | "ArrowFunctionExpression"
        | "AwaitExpression"
        | "BlockStatement"
        | "BinaryExpression"
        | "BreakStatement"
        | "CallExpression"
        | "CatchClause"
        | "ClassBody"
        | "ClassDeclaration"
        | "ClassExpression"
        | "ComprehensionBlock"
        | "ComprehensionExpression"
        | "ConditionalExpression"
        | "ContinueStatement"
        | "DebuggerStatement"
        | "DirectiveStatement"
        | "DoWhileStatement"
        | "EmptyStatement"
        | "ExportAllDeclaration"
        | "ExportDefaultDeclaration"
        | "ExportNamedDeclaration"
        | "ExportSpecifier"
        | "ExpressionStatement"
        | "ForStatement"
        | "ForInStatement"
        | "ForOfStatement"
        | "FunctionDeclaration"
        | "FunctionExpression"
        | "GeneratorExpression"
        | "Identifier"
        | "IfStatement"
        | "ImportExpression"
        | "ImportDeclaration"
        | "ImportDefaultSpecifier"
        | "ImportNamespaceSpecifier"
        | "ImportSpecifier"
        | "Literal"
        | "LabeledStatement"
        | "LogicalExpression"
        | "MemberExpression"
        | "MetaProperty"
        | "MethodDefinition"
        | "ModuleSpecifier"
        | "NewExpression"
        | "ObjectExpression"
        | "ObjectPattern"
        | "Program"
        | "Property"
        | "RestElement"
        | "ReturnStatement"
        | "SequenceExpression"
        | "SpreadElement"
        | "Super"
        | "SwitchStatement"
        | "SwitchCase"
        | "TaggedTemplateExpression"
        | "TemplateElement"
        | "TemplateLiteral"
        | "ThisExpression"
        | "ThrowStatement"
        | "TryStatement"
        | "UnaryExpression"
        | "UpdateExpression"
        | "VariableDeclaration"
        | "VariableDeclarator"
        | "WhileStatement"
        | "WithStatement"
        | "YieldExpression";

    interface Syntax extends Record<NodeType, NodeType> {}

    interface VisitorKeys extends Record<NodeType, string[]> {}

    interface Visitor {
        enter?:
            | ((this: Controller, node: ESTree.Node, parent: ESTree.Node | null) => VisitorOption | ESTree.Node | void)
            | undefined;

        leave?:
            | ((this: Controller, node: ESTree.Node, parent: ESTree.Node | null) => VisitorOption | ESTree.Node | void)
            | undefined;

        fallback?: "iteration" | ((this: Controller, node: ESTree.Node) => string[]) | undefined;

        keys?: Record<string, string[]> | undefined;
    }
}

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = ESTraverse;
