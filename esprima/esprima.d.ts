// Type definitions for Esprima v1.2.0
// Project: http://esprima.org
// Definitions by: teppeis <https://github.com/teppeis/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module esprima {
    var version: string;
    function parse(code: string, options?: Options): Syntax.Program;
    function tokenize(code: string, options?: Options): Array<Token>;

    interface Token {
        type: string
        value: string
    }

    interface Options {
        loc?: boolean
        range?: boolean
        raw?: boolean
        tokens?: boolean
        comment?: boolean
        attachComment?: boolean
        tolerant?: boolean
        source?: boolean
    }

    module Syntax {
        // Node
        interface Node {
            type: string
            loc?: LineLocation
            range?: number[]
            leadingComments?: Comment[]
            trailingComments?: Comment[]
        }
        interface LineLocation {
            start: Position
            end: Position
        }
        interface Position {
            line: number
            column: number
        }

        // Comment
        interface Comment extends Node {
            value: string
        }

        // Program
        interface Program extends Node {
            body: Statement[]
            comments?: Comment[]
        }

        // Function
        interface Function extends Node {
            id: Identifier // | null
            params: Identifier[]
            defaults: Expression[]
            rest: Identifier // | null
            body: BlockStatementOrExpression
            generator: boolean
            expression: boolean
        }
        interface BlockStatementOrExpression extends BlockStatement, Expression {
        }

        // Statement
        interface Statement extends Node {
        }
        interface EmptyStatement extends Statement {
        }
        interface BlockStatement extends Statement {
            body: Statement[]
        }
        interface ExpressionStatement extends Statement {
            expression: Expression
        }
        interface IfStatement extends Statement {
            test: Expression
            consequent: Statement
            alternate: Statement
        }
        interface LabeledStatement extends Statement {
            label: Identifier
            body: Statement
        }
        interface BreakStatement extends Statement {
            label: Identifier // | null
        }
        interface ContinueStatement extends Statement {
            label: Identifier // | null
        }
        interface WithStatement extends Statement {
            object: Expression
            body: Statement
        }
        interface SwitchStatement extends Statement {
            discriminant: Expression
            cases: SwitchCase[]
            lexical: boolean
        }
        interface ReturnStatement extends Statement {
            argument: Expression // | null
        }
        interface ThrowStatement extends Statement {
            argument: Expression
        }
        interface TryStatement extends Statement {
            block: BlockStatement
            handler: CatchClause // | null
            guardedHandlers: CatchClause[]
            finalizer: BlockStatement // | null
        }
        interface WhileStatement extends Statement {
            test: Expression
            body: Statement
        }
        interface DoWhileStatement extends Statement {
            body: Statement
            test: Expression
        }
        interface ForStatement extends Statement {
            init: VariableDeclaratorOrExpression // | null
            test: Expression // | null
            update: Expression // | null
            body: Statement
        }
        interface ForInStatement extends Statement {
            left: VariableDeclaratorOrExpression
            right: Expression
            body: Statement
            each: boolean
        }
        interface VariableDeclaratorOrExpression extends VariableDeclarator, Expression {
        }
        interface DebuggerStatement extends Statement {
        }
        interface StatementOrList extends Array<Statement>, Statement {
        }

        // Declaration
        interface Declaration extends Statement {
        }
        interface FunctionDeclaration extends Declaration {
            id: Identifier
            params: Identifier[] // Pattern
            defaults: Expression[]
            rest: Identifier
            body: BlockStatementOrExpression
            generator: boolean
            expression: boolean
        }
        interface VariableDeclaration extends Declaration {
            declarations: VariableDeclarator[]
            kind: string // "var" | "let" | "const"
        }
        interface VariableDeclarator extends Node {
            id: Identifier // Pattern
            init: Expression
        }

        // Expression
        interface Expression extends Node { // | Pattern
        }
        //interface Expression extends
        //    ThisExpression, ArrayExpression, ObjectExpression, FunctionExpression,
        //    ArrowFunctionExpression, SequenceExpression, UnaryExpression, BinaryExpression,
        //    AssignmentExpression, UpdateExpression, LogicalExpression, ConditionalExpression,
        //    NewExpression, CallExpression, MemberExpression {
        //}
        interface ThisExpression extends Expression {
        }
        interface ArrayExpression extends Expression {
            elements: Expression[] // [ Expression | null ]
        }
        interface ObjectExpression extends Expression {
            properties: Property[]
        }
        interface Property extends Node {
            key: LiteralOrIdentifier // Literal | Identifier
            value: Expression
            kind: string // "init" | "get" | "set"
        }
        interface LiteralOrIdentifier extends Literal, Identifier {
        }
        interface FunctionExpression extends Function, Expression {
        }
        interface ArrowFunctionExpression extends Function, Expression {
        }
        interface SequenceExpression extends Expression {
            expressions: Expression[]
        }
        interface UnaryExpression extends Expression {
            operator: string // UnaryOperator
            prefix: boolean
            argument: Expression
        }
        interface BinaryExpression extends Expression {
            operator: string // BinaryOperator
            left: Expression
            right: Expression
        }
        interface AssignmentExpression extends Expression {
            operator: string // AssignmentOperator
            left: Expression
            right: Expression
        }
        interface UpdateExpression extends Expression {
            operator: string // UpdateOperator
            argument: Expression
            prefix: boolean
        }
        interface LogicalExpression extends Expression {
            operator: string // LogicalOperator
            left: Expression
            right: Expression
        }
        interface ConditionalExpression extends Expression {
            test: Expression
            alternate: Expression
            consequent: Expression
        }
        interface NewExpression extends Expression {
            callee: Expression
            arguments: Expression[]
        }
        interface CallExpression extends Expression {
            callee: Expression
            arguments: Expression[]
        }
        interface MemberExpression extends Expression {
            object: Expression
            property: IdentifierOrExpression // Identifier | Expression
            computed: boolean
        }
        interface IdentifierOrExpression extends Identifier, Expression {
        }

        // Pattern
        // interface Pattern extends Node {
        // }

        // Clauses
        interface SwitchCase extends Node {
            test: Expression
            consequent: Statement[]
        }
        interface CatchClause extends Node {
            param: Identifier // Pattern
            guard: Expression
            body: BlockStatement
        }

        // Misc
        interface Identifier extends Node, Expression { // | Pattern
            name: string
        }
        interface Literal extends Node, Expression {
            value: any // string | boolean | null | number | RegExp
        }
    }
}

declare module "esprima" {
    export = esprima
}
