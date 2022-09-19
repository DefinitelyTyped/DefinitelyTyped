// Type definitions for acorn 8.8.0
// Project: https://github.com/acornjs/acorn
// Definitions by: Tyreal Hu <https://github.com/TyrealHu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export as namespace acorn
export = acorn

interface BaseNodeProps {
    type: string
    start: number
    end: number
    loc?: acorn.SourceLocation
    sourceFile?: string
    range?: [number, number]
}

type Expression =
    | ArrayExpression
    | AssignmentExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | ParenthesizedExpression
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | ArrowFunctionExpression
    | ClassExpression
    | MetaProperty
    | Super
    | TaggedTemplateExpression
    | TemplateLiteral
    | YieldExpression
    | AwaitExpression

type Statement =
    | BlockStatement
    | BreakStatement
    | ContinueStatement
    | DebuggerStatement
    | DoWhileStatement
    | EmptyStatement
    | ExpressionStatement
    | ForInStatement
    | ForStatement
    | FunctionDeclaration
    | IfStatement
    | LabeledStatement
    | ReturnStatement
    | SwitchStatement
    | ThrowStatement
    | TryStatement
    | VariableDeclaration
    | WhileStatement
    | WithStatement
    | ClassDeclaration
    | ExportAllDeclaration
    | ExportDefaultDeclaration
    | ExportNamedDeclaration
    | ForOfStatement
    | ImportDeclaration

type Pattern = AssignmentPattern | ArrayPattern | ObjectPattern

type LVal =
    | Identifier
    | MemberExpression
    | RestElement
    | AssignmentPattern
    | ArrayPattern
    | ObjectPattern


type PatternLike =
    | Identifier
    | RestElement
    | AssignmentPattern
    | ArrayPattern
    | ObjectPattern

type Declaration =
    | FunctionDeclaration
    | VariableDeclaration
    | ClassDeclaration
    | ExportAllDeclaration
    | ExportDefaultDeclaration
    | ExportNamedDeclaration
    | ImportDeclaration

interface Program extends BaseNodeProps {
    type: 'Program'
    sourceType: acorn.Options['sourceType']
    body: Array<Statement>
}

interface BreakStatement extends BaseNodeProps {
    type: 'BreakStatement'
    label: null | Identifier
}

interface ContinueStatement extends BaseNodeProps {
    type: 'ContinueStatement'
    label: null | Identifier
}

interface DebuggerStatement extends BaseNodeProps {
    type: 'DebuggerStatement'
}

interface DoWhileStatement extends BaseNodeProps {
    type: 'DoWhileStatement'
    body: Statement
    test: Expression
}

interface ForStatement extends BaseNodeProps {
    type: 'ForStatement'
    init: VariableDeclaration | Expression | null
    test: Expression | null
    update: Expression | null
    body: Statement
}

interface ForInStatement extends BaseNodeProps {
    type: 'ForInStatement'
    body: Statement
    left: VariableDeclaration | LVal
    right: Expression
}

interface ForOfStatement extends BaseNodeProps {
    type: 'ForOfStatement'
    body: Statement
    left: VariableDeclaration | LVal
    right: Expression
    await: boolean
}

interface IfStatement extends BaseNodeProps{
    type: 'IfStatement'
    test: Expression
    consequent: Statement
    alternate: Statement | null
}

interface ReturnStatement extends BaseNodeProps{
    type: 'ReturnStatement'
    argument: Expression | null
}

interface SwitchCase extends BaseNodeProps{
    type: 'SwitchCase'
    consequent: Array<Statement>
    test: Expression | null
}

interface SwitchStatement extends BaseNodeProps{
    type: 'SwitchStatement'
    discriminant: Expression;
    cases: Array<SwitchCase>;
}

interface ThrowStatement extends BaseNodeProps{
    type: 'ThrowStatement'
    argument: Expression
}

interface TryStatement extends BaseNodeProps{
    type: 'TryStatement'
    block: BlockStatement
    handler: CatchClause | null
    finalizer : BlockStatement | null
}

interface CatchClause extends BaseNodeProps{
    type: 'CatchClause'
    param: Identifier | ArrayPattern | ObjectPattern | null
    body: BlockStatement
}

interface VariableDeclaration extends BaseNodeProps{
    type: 'VariableDeclaration'
    declarations: Array<VariableDeclarator>
    kind: 'var' | 'let' | 'const'
}

interface VariableDeclarator extends BaseNodeProps{
    type: 'VariableDeclarator'
    id: LVal
    init: Expression | null
}

interface WhileStatement extends BaseNodeProps{
    type: 'WhileStatement'
    test: Expression
    body: Statement
}

interface WithStatement extends BaseNodeProps{
    type: 'WithStatement'
    object: Expression
    body: Statement
}

interface EmptyStatement extends BaseNodeProps{
    type: 'EmptyStatement'
}

interface LabeledStatement extends BaseNodeProps{
    type: 'LabeledStatement'
    body: Statement
    label: Identifier
}

interface ExpressionStatement extends BaseNodeProps{
    type: 'ExpressionStatement'
    expression: Expression
}

interface BlockStatement extends BaseNodeProps{
    type: 'BlockStatement'
    body: Array<Statement>
}

interface FunctionDeclaration extends BaseNodeProps{
    type: 'FunctionDeclaration'
    id: Identifier | null
    generator?: boolean
    async: boolean
    params: Array<Identifier | Pattern | RestElement>
    expression: boolean
    body: BlockStatement
}

interface FunctionExpression extends BaseNodeProps{
    type: 'FunctionExpression'
    id: Identifier | null
    generator?: boolean
    async: boolean
    params: Array<Identifier | Pattern | RestElement>
    expression: boolean
    body: BlockStatement
}

interface ClassDeclaration extends BaseNodeProps{
    type: 'ClassDeclaration'
    id: Identifier | null
    superClass: Expression | null
    body: ClassBody
}

interface ClassExpression extends BaseNodeProps{
    type: 'ClassExpression'
    id: Identifier | null
    superClass: Expression | null
    body: ClassBody
}

interface ClassBody extends BaseNodeProps {
    type: 'ClassBody'
    body: Array<StaticBlock | Identifier | MethodDefinition | PropertyDefinition>
}

interface MethodDefinition extends BaseNodeProps {
    type: 'MethodDefinition'
    static: boolean
    computed: boolean
    key: Identifier | Literal | Expression
    kind: 'get' | 'set' | 'method' | 'constructor'
    value: FunctionExpression | null
}

interface PropertyDefinition extends BaseNodeProps {
    type: 'PropertyDefinition'
    static: boolean
    computed: boolean
    key: Identifier | Literal | Expression
    value: Expression | null
}

interface StaticBlock extends BaseNodeProps {
    type: 'StaticBlock'
    body: Array<Statement>
}

interface ExportAllDeclaration extends BaseNodeProps {
    type: 'ExportAllDeclaration'
    exported: Identifier | Literal | null
    source: Literal
}

interface ExportDefaultDeclaration extends BaseNodeProps {
    type: 'ExportDefaultDeclaration'
    declaration: FunctionDeclaration | ClassDeclaration | Expression
}

interface ExportNamedDeclaration extends BaseNodeProps {
    type: 'ExportNamedDeclaration'
    declaration: Declaration | null
    specifiers: Array<ExportSpecifier>
    source: Literal | null
}

interface ExportSpecifier extends BaseNodeProps {
    type: 'ExportSpecifier'
    local: Identifier
    exported: Identifier | Literal
}

interface ImportDeclaration extends BaseNodeProps {
    type: 'ImportDeclaration'
    specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>
    source: Literal
}

interface ImportDefaultSpecifier extends BaseNodeProps {
    type: 'ImportDefaultSpecifier'
    local: Identifier
}

interface ImportNamespaceSpecifier extends BaseNodeProps {
    type: 'ImportNamespaceSpecifier'
    local: Identifier
}

interface ImportSpecifier extends BaseNodeProps {
    type: 'ImportSpecifier'
    local: Identifier
    imported: Identifier
}

interface SequenceExpression extends BaseNodeProps {
    type: 'SequenceExpression'
    expressions: Array<Expression>
}

interface YieldExpression extends BaseNodeProps {
    type: 'YieldExpression'
    delegate: boolean
    argument: Expression | null
}

interface AssignmentExpression extends BaseNodeProps {
    type: 'AssignmentExpression'
    operator: string
    left: LVal
    right: Expression
}

interface ConditionalExpression extends BaseNodeProps {
    type: 'ConditionalExpression'
    test: Expression
    consequent: Expression
    alternate: Expression
}

interface LogicalExpression extends BaseNodeProps {
    type: 'LogicalExpression'
    operator:
        | '||'
        | '&&'
        | '??'
    left: Expression
    right: Expression
}

interface BinaryExpression extends BaseNodeProps {
    type: 'BinaryExpression'
    operator:
        | '+'
        | '-'
        | '/'
        | '%'
        | '*'
        | '**'
        | '&'
        | '|'
        | '>>'
        | '>>>'
        | '<<'
        | '^'
        | '=='
        | '==='
        | '!='
        | '!=='
        | 'in'
        | 'instanceof'
        | '>'
        | '<'
        | '>='
        | '<='
        | '|>'
    left: Expression
    right: Expression
}

interface UpdateExpression extends BaseNodeProps {
    type: 'UpdateExpression'
    operator: '++' | '--'
    argument: Expression
    prefix: boolean
}

interface UnaryExpression extends BaseNodeProps {
    type: 'UnaryExpression'
    operator: 'void' | 'throw' | 'delete' | '!' | '+' | '-' | '~' | 'typeof'
    prefix: boolean
    argument: Expression
}

interface ChainExpression extends BaseNodeProps {
    type: 'ChainExpression'
    expression: ArrowFunctionExpression
}

interface MemberExpression extends BaseNodeProps {
    type: 'MemberExpression'
    object: Expression
    property: Expression | Identifier | PrivateIdentifier
    computed: boolean
    optional?: boolean
}

interface CallExpression extends BaseNodeProps {
    type: 'CallExpression'
    callee: Expression
    arguments: Array<Expression | SpreadElement | null>
    optional?: boolean
}

interface TaggedTemplateExpression extends BaseNodeProps {
    type: 'TaggedTemplateExpression'
    tag: Expression
    quasi: TemplateLiteral
}

interface ThisExpression extends BaseNodeProps {
    type: 'ThisExpression'
}

interface Super extends BaseNodeProps {
    type: 'Super'
}

interface Literal extends BaseNodeProps {
    type: 'Literal'
    value: string
    raw: string
    bigint?: string
    regex?: {
        pattern: string
        flags: string
    }
}

interface ParenthesizedExpression extends BaseNodeProps {
    type: 'ParenthesizedExpression'
    expression: Expression
}

interface ArrayExpression extends BaseNodeProps {
    type: 'ArrayExpression'
    elements: Array<Expression | SpreadElement | null>
}

interface Identifier extends BaseNodeProps {
    type: 'Identifier'
    name: string
}

interface MetaProperty extends BaseNodeProps {
    type: 'MetaProperty'
    meta: Identifier
    property: Identifier
}

interface ImportExpression extends BaseNodeProps {
    type: 'ImportExpression'
    source: Expression
}

interface NewExpression extends BaseNodeProps {
    type: 'NewExpression'
    callee: Expression
    arguments: Array<Expression | SpreadElement | null>
}

interface TemplateElement extends BaseNodeProps {
    type: 'TemplateElement'
    value: {
        raw: string
        cooked: null | string
    }
    tail: boolean
}

interface TemplateLiteral extends BaseNodeProps {
    type: 'TemplateLiteral'
    expressions: Array<Expression>
    quasis: Array<TemplateElement>
}

interface ObjectExpression extends BaseNodeProps {
    type: 'ObjectExpression'
    properties: Array<Property | SpreadElement | RestElement>
}

interface SpreadElement extends BaseNodeProps {
    type: 'SpreadElement'
    argument: Expression
}

interface Property extends BaseNodeProps {
    type: 'Property'
    method: boolean
    shorthand: boolean
    key: Identifier | Literal | Expression
    computed?: boolean
    kind: string
    value: Expression
}

interface PrivateIdentifier extends BaseNodeProps {
    type: 'PrivateIdentifier'
    name: string
}

interface ObjectPattern extends BaseNodeProps {
    type: 'ObjectPattern'
    properties: Array<Property | SpreadElement | RestElement>
}

interface ArrayPattern extends BaseNodeProps {
    type: 'ArrayPattern'
    elements: Array<PatternLike | LVal | null>
}

interface RestElement extends BaseNodeProps {
    type: 'RestElement'
    argument: LVal
}

interface AssignmentPattern extends BaseNodeProps {
    type: 'AssignmentPattern'
    left:
        | Identifier
        | ObjectPattern
        | ArrayPattern
        | MemberExpression
    right: Expression
}

interface ArrowFunctionExpression extends BaseNodeProps {
    type: 'ArrowFunctionExpression'
    async: boolean
    params: Array<Identifier | Pattern | RestElement>
    expression: boolean
    body: BlockStatement | Expression
    generator?: boolean
}

interface AwaitExpression extends BaseNodeProps {
    type: 'AwaitExpression'
    argument: Expression
}

declare namespace acorn {
    function parse(input: string, options: Options): Program

    function parseExpressionAt(input: string, pos: number, options: Options): Expression

    function tokenizer(input: string, options: Options): {
        getToken(): Token
        [Symbol.iterator](): Iterator<Token>
    }

    type ecmaVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 'latest'

    interface Options {
        ecmaVersion: ecmaVersion
        sourceType?: 'script' | 'module'
        onInsertedSemicolon?: (lastTokEnd: number, lastTokEndLoc?: Position) => void
        onTrailingComma?: (lastTokEnd: number, lastTokEndLoc?: Position) => void
        allowReserved?: boolean | 'never'
        allowReturnOutsideFunction?: boolean
        allowImportExportEverywhere?: boolean
        allowAwaitOutsideFunction?: boolean
        allowSuperOutsideMethod?: boolean
        allowHashBang?: boolean
        locations?: boolean
        onToken?: ((token: Token) => any) | Token[]
        onComment?: ((
            isBlock: boolean, text: string, start: number, end: number, startLoc?: Position,
            endLoc?: Position
        ) => void) | Comment[]
        ranges?: boolean
        program?: Node
        sourceFile?: string
        directSourceFile?: string
        preserveParens?: boolean
    }

    class Parser {
        // state.js
        lineStart: number;
        options: Options;
        curLine: number;
        start: number;
        end: number;
        input: string;
        type: TokenType;

        // state.js
        constructor(options: Options, input: string, startPos?: number)
        parse(this: Parser): Program

        // tokenize.js
        next(): void;
        nextToken(): void;

        // statement.js
        parseTopLevel(node: Node): Program;

        // node.js
        finishNode<T extends AcornNodeTypeString>(node: Node, type: T): AcornNodeTypeMap[T];
        finishNodeAt<T extends AcornNodeTypeString>(node: Node, type: T, pos: number, loc: Position): AcornNodeTypeMap[T];

        // location.js
        raise(pos: number, message: string) : void;
        raiseRecoverable?(pos: number, message: string) : void;

        // parseutils.js
        unexpected(pos: number) : void;

        // index.js
        static acorn: typeof acorn;

        // state.js
        static parse(this: typeof Parser, input: string, options: Options): Program
        static parseExpressionAt(this: typeof Parser, input: string, pos: number, options: Options): Expression
        static tokenizer(this: typeof Parser, input: string, options: Options): {
            getToken(): Token
            [Symbol.iterator](): Iterator<Token>
        }
        static extend(this: typeof Parser, ...plugins: ((BaseParser: typeof Parser) => typeof Parser)[]): typeof Parser
    }

    interface Position { line: number; column: number; offset: number }

    const defaultOptions: Options

    function getLineInfo(input: string, offset: number): Position

    class SourceLocation {
        start: Position
        end: Position
        source?: string | null
        constructor(p: Parser, start: Position, end: Position)
    }

    class Node {
        type: AcornNodeTypeString | ''
        start: number
        end: number
        loc?: SourceLocation
        sourceFile?: string
        range?: [number, number]
        constructor(parser: Parser, pos: number, loc?: SourceLocation)
    }

    class TokenType {
        label: string
        keyword: string
        beforeExpr: boolean
        startsExpr: boolean
        isLoop: boolean
        isAssign: boolean
        prefix: boolean
        postfix: boolean
        binop: number
        updateContext?: (prevType: TokenType) => void
        constructor(label: string, conf?: any)
    }

    const tokTypes: {
        num: TokenType
        regexp: TokenType
        string: TokenType
        name: TokenType
        privateId: TokenType
        eof: TokenType
        bracketL: TokenType
        bracketR: TokenType
        braceL: TokenType
        braceR: TokenType
        parenL: TokenType
        parenR: TokenType
        comma: TokenType
        semi: TokenType
        colon: TokenType
        dot: TokenType
        question: TokenType
        questionDot: TokenType
        arrow: TokenType
        template: TokenType
        invalidTemplate: TokenType
        ellipsis: TokenType
        backQuote: TokenType
        dollarBraceL: TokenType
        eq: TokenType
        assign: TokenType
        incDec: TokenType
        prefix: TokenType
        logicalOR: TokenType
        logicalAND: TokenType
        bitwiseOR: TokenType
        bitwiseXOR: TokenType
        bitwiseAND: TokenType
        equality: TokenType
        relational: TokenType
        bitShift: TokenType
        plusMin: TokenType
        modulo: TokenType
        star: TokenType
        slash: TokenType
        starstar: TokenType
        coalesce: TokenType
        _break: TokenType
        _case: TokenType
        _catch: TokenType
        _continue: TokenType
        _debugger: TokenType
        _default: TokenType
        _do: TokenType
        _else: TokenType
        _finally: TokenType
        _for: TokenType
        _function: TokenType
        _if: TokenType
        _return: TokenType
        _switch: TokenType
        _throw: TokenType
        _try: TokenType
        _var: TokenType
        _const: TokenType
        _while: TokenType
        _with: TokenType
        _new: TokenType
        _this: TokenType
        _super: TokenType
        _class: TokenType
        _extends: TokenType
        _export: TokenType
        _import: TokenType
        _null: TokenType
        _true: TokenType
        _false: TokenType
        _in: TokenType
        _instanceof: TokenType
        _typeof: TokenType
        _void: TokenType
        _delete: TokenType
    }

    class TokContext {
        constructor(token: string, isExpr: boolean, preserveSpace: boolean, override?: (p: Parser) => void)
    }

    const tokContexts: {
        b_stat: TokContext
        b_expr: TokContext
        b_tmpl: TokContext
        p_stat: TokContext
        p_expr: TokContext
        q_tmpl: TokContext
        f_expr: TokContext
        f_stat: TokContext
        f_expr_gen: TokContext
        f_gen: TokContext
    }

    function isIdentifierStart(code: number, astral?: boolean): boolean

    function isIdentifierChar(code: number, astral?: boolean): boolean

    interface AbstractToken {
    }

    interface Comment extends AbstractToken {
        type: 'Line' | 'Block'
        value: string
        start: number
        end: number
        loc?: SourceLocation
        range?: [number, number]
    }

    class Token {
        type: TokenType
        value: any
        start: number
        end: number
        loc?: SourceLocation
        range?: [number, number]
        constructor(p: Parser)
    }

    function isNewLine(code: number): boolean

    const lineBreak: RegExp

    const lineBreakG: RegExp

    const version: string

    interface AcornNodeTypeMap {
        Program: Program
        BreakStatement: BreakStatement
        ContinueStatement: ContinueStatement
        DebuggerStatement: DebuggerStatement
        DoWhileStatement: DoWhileStatement
        ForStatement: ForStatement
        ForInStatement: ForInStatement
        ForOfStatement: ForOfStatement
        IfStatement: IfStatement
        ReturnStatement: ReturnStatement
        ThrowStatement: ThrowStatement
        SwitchCase: SwitchCase
        SwitchStatement: SwitchStatement
        TryStatement: TryStatement
        CatchClause: CatchClause
        VariableDeclaration: VariableDeclaration
        VariableDeclarator: VariableDeclarator
        WhileStatement: WhileStatement
        WithStatement: WithStatement
        EmptyStatement: EmptyStatement
        LabeledStatement: LabeledStatement
        ExpressionStatement: ExpressionStatement
        BlockStatement: BlockStatement
        FunctionDeclaration: FunctionDeclaration
        FunctionExpression: FunctionExpression
        ClassDeclaration: ClassDeclaration
        ClassExpression: ClassExpression
        ClassBody: ClassBody
        MethodDefinition: MethodDefinition
        PropertyDefinition: PropertyDefinition
        StaticBlock: StaticBlock
        ExportAllDeclaration: ExportAllDeclaration
        ExportSpecifier: ExportSpecifier
        ExportNamedDeclaration: ExportNamedDeclaration
        ExportDefaultDeclaration: ExportDefaultDeclaration
        ImportDeclaration: ImportDeclaration
        ImportNamespaceSpecifier: ImportNamespaceSpecifier
        ImportDefaultSpecifier: ImportDefaultSpecifier
        ImportSpecifier: ImportSpecifier
        SequenceExpression: SequenceExpression
        YieldExpression: YieldExpression
        AssignmentExpression: AssignmentExpression
        ConditionalExpression: ConditionalExpression
        LogicalExpression: LogicalExpression
        BinaryExpression: BinaryExpression
        UpdateExpression: UpdateExpression
        UnaryExpression: UnaryExpression
        ChainExpression: ChainExpression
        MemberExpression: MemberExpression
        CallExpression: CallExpression
        TaggedTemplateExpression: TaggedTemplateExpression
        ThisExpression: ThisExpression
        Super: Super
        Literal: Literal
        ParenthesizedExpression: ParenthesizedExpression
        ArrayExpression: ArrayExpression
        Identifier: Identifier
        MetaProperty: MetaProperty
        ImportExpression: ImportExpression
        NewExpression: NewExpression
        TemplateElement: TemplateElement
        TemplateLiteral: TemplateLiteral
        ObjectExpression: ObjectExpression
        SpreadElement: SpreadElement
        Property: Property
        PrivateIdentifier: PrivateIdentifier
        ObjectPattern: ObjectPattern
        ArrayPattern: ArrayPattern
        RestElement: RestElement
        AssignmentPattern: AssignmentPattern
        ArrowFunctionExpression: ArrowFunctionExpression
        AwaitExpression: AwaitExpression
    }

    type AcornNodeType = AcornNodeTypeMap[keyof AcornNodeTypeMap]

    type AcornNodeTypeString = AcornNodeType["type"]
}
