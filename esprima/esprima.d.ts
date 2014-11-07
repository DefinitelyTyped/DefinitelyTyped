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
            body: SomeStatement[]
            comments?: Comment[]
        }

        // Function
        interface Function extends Node {
            id: Identifier // | null
            params: Identifier[]
            defaults: SomeExpression[]
            rest: Identifier // | null
            body: BlockStatementOrExpression
            generator: boolean
            expression: boolean
        }
        interface BlockStatementOrExpression extends Array<SomeStatement>, BlockStatement, SomeExpression {
            body: BlockStatementOrExpression
        }

        // Statement
        interface Statement extends Node {
        }
        interface EmptyStatement extends Statement {
        }
        interface BlockStatement extends Statement {
            body: SomeStatement[]
        }
        interface ExpressionStatement extends Statement {
            expression: SomeExpression
        }
        interface IfStatement extends Statement {
            test: SomeExpression
            consequent: SomeStatement
            alternate: SomeStatement
        }
        interface LabeledStatement extends Statement {
            label: Identifier
            body: SomeStatement
        }
        interface BreakStatement extends Statement {
            label: Identifier // | null
        }
        interface ContinueStatement extends Statement {
            label: Identifier // | null
        }
        interface WithStatement extends Statement {
            object: SomeExpression
            body: SomeStatement
        }
        interface SwitchStatement extends Statement {
            discriminant: SomeExpression
            cases: SwitchCase[]
            lexical: boolean
        }
        interface ReturnStatement extends Statement {
            argument: SomeExpression // | null
        }
        interface ThrowStatement extends Statement {
            argument: SomeExpression
        }
        interface TryStatement extends Statement {
            block: BlockStatement
            handler: CatchClause // | null
            guardedHandlers: CatchClause[]
            finalizer: BlockStatement // | null
        }
        interface WhileStatement extends Statement {
            test: SomeExpression
            body: SomeStatement
        }
        interface DoWhileStatement extends Statement {
            body: SomeStatement
            test: SomeExpression
        }
        interface ForStatement extends Statement {
            init: VariableDeclaratorOrExpression // | null
            test: SomeExpression // | null
            update: SomeExpression // | null
            body: SomeStatement
        }
        interface ForInStatement extends Statement {
            left: VariableDeclaratorOrExpression
            right: SomeExpression
            body: SomeStatement
            each: boolean
        }
        interface VariableDeclaratorOrExpression extends VariableDeclarator, SomeExpression {
        }
        interface DebuggerStatement extends Statement {
        }
        interface SomeStatement extends 
            EmptyStatement, ExpressionStatement, BlockStatement, IfStatement,
            LabeledStatement, BreakStatement, ContinueStatement, WithStatement,
            SwitchStatement, ReturnStatement, ThrowStatement, TryStatement,
            WhileStatement, DoWhileStatement, ForStatement, ForInStatement, DebuggerStatement {
            body: SomeStatementOrList
        }
        interface SomeStatementOrList extends Array<SomeStatement>, SomeStatement {
        }

        // Declration
        interface Declration extends Statement {
        }
        interface FunctionDeclration extends Declration {
            id: Identifier
            params: Identifier[] // Pattern
            defaults: SomeExpression[]
            rest: Identifier
            body: BlockStatementOrExpression
            generator: boolean
            expression: boolean
        }
        interface VariableDeclaration extends Declration {
            declarations: VariableDeclarator[]
            kind: string // "var" | "let" | "const"
        }
        interface VariableDeclarator extends Node {
            id: Identifier // Pattern
            init: SomeExpression
        }

        // Expression
        interface Expression extends Node { // | Pattern
        }
        interface SomeExpression extends 
            ThisExpression, ArrayExpression, ObjectExpression, FunctionExpression,
            ArrowFunctionExpression, SequenceExpression, UnaryExpression, BinaryExpression,
            AssignmentExpression, UpdateExpression, LogicalExpression, ConditionalExpression,
            NewExpression, CallExpression, MemberExpression {
        }
        interface ThisExpression extends Expression {
        }
        interface ArrayExpression extends Expression {
            elements: SomeExpression[] // [ Expression | null ]
        }
        interface ObjectExpression extends Expression {
            properties: Property[]
        }
        interface Property extends Node {
            key: LiteralOrIdentifier // Literal | Identifier
            value: SomeExpression
            kind: string // "init" | "get" | "set"
        }
        interface LiteralOrIdentifier extends Literal, Identifier {
        }
        interface FunctionExpression extends Function, Expression {
        }
        interface ArrowFunctionExpression extends Function, Expression {
        }
        interface SequenceExpression extends Expression {
            expressions: SomeExpression[]
        }
        interface UnaryExpression extends Expression {
            operator: string // UnaryOperator
            prefix: boolean
            argument: SomeExpression
        }
        interface BinaryExpression extends Expression {
            operator: string // BinaryOperator
            left: SomeExpression
            right: SomeExpression
        }
        interface AssignmentExpression extends Expression {
            operator: string // AssignmentOperator
            left: SomeExpression
            right: SomeExpression
        }
        interface UpdateExpression extends Expression {
            operator: string // UpdateOperator
            argument: SomeExpression
            prefix: boolean
        }
        interface LogicalExpression extends Expression {
            operator: string // LogicalOperator
            left: SomeExpression
            right: SomeExpression
        }
        interface ConditionalExpression extends Expression {
            test: SomeExpression
            alternate: SomeExpression
            consequent: SomeExpression
        }
        interface NewExpression extends Expression {
            callee: SomeExpression
            arguments: SomeExpression[]
        }
        interface CallExpression extends Expression {
            callee: SomeExpression
            arguments: SomeExpression[]
        }
        interface MemberExpression extends Expression {
            object: SomeExpression
            property: IdentifierOrExpression // Identifier | Expression
            computed: boolean
        }
        interface IdentifierOrExpression extends Identifier, SomeExpression {
        }

        // Pattern
        // interface Pattern extends Node { 
        // }                                

        // Clauses
        interface SwitchCase extends Node {
            test: SomeExpression
            consequent: SomeStatement[]
        }
        interface CatchClause extends Node {
            param: Identifier // Pattern
            guard: SomeExpression
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
