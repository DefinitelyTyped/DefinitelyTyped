// Type definitions for babel-types 7.0
// Project: https://github.com/babel/babel/tree/master/packages/babel-types
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Sam Baxter <https://github.com/baxtersa>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Boris Cherny <https://github.com/bcherny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface Comment {
    value: string;
    start: number;
    end: number;
    loc: SourceLocation;
}

export interface CommentBlock extends Comment {
    type: "CommentBlock";
}

export interface CommentLine extends Comment {
    type: "CommentLine";
}

export interface SourceLocation {
    start: {
        line: number;
        column: number;
    };

    end: {
        line: number;
        column: number;
    };
}

export interface Node {
    type: string;
    leadingComments?: Comment[];
    innerComments?: Comment[];
    trailingComments?: Comment[];
    start: number;
    end: number;
    loc: SourceLocation;
}

export interface ArrayExpression extends Node {
    type: "ArrayExpression";
    elements: Array<null | Expression | SpreadElement>;
}

export interface AssignmentExpression extends Node {
    type: "AssignmentExpression";
    operator: "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=";
    left: LVal;
    right: Expression;
}

export interface BinaryExpression extends Node {
    type: "BinaryExpression";
    operator: "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=";
    left: Expression;
    right: Expression;
}

export interface Directive extends Node {
    type: "Directive";
    value: DirectiveLiteral;
}

export interface DirectiveLiteral extends Node {
    type: "DirectiveLiteral";
    value: string;
}

export interface BlockStatement extends Node {
    type: "BlockStatement";
    directives?: Directive[];
    body: Statement[];
}

export interface BreakStatement extends Node {
    type: "BreakStatement";
    label: Identifier;
}

export interface CallExpression extends Node {
    type: "CallExpression";
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
}

export interface CatchClause extends Node {
    type: "CatchClause";
    param: Identifier;
    body: BlockStatement;
}

export interface ConditionalExpression extends Node {
    type: "ConditionalExpression";
    test: Expression;
    consequent: Expression;
    alternate: Expression;
}

export interface ContinueStatement extends Node {
    type: "ContinueStatement";
    label: Identifier;
}

export interface DebuggerStatement extends Node {
    type: "DebuggerStatement";
}

export interface DoWhileStatement extends Node {
    type: "DoWhileStatement";
    test: Expression;
    body: Statement;
}

export interface EmptyStatement extends Node {
    type: "EmptyStatement";
}

export interface ExpressionStatement extends Node {
    type: "ExpressionStatement";
    expression: Expression;
}

export interface File extends Node {
    type: "File";
    program: Program;
    comments: Comment[];
    tokens: any[];
}

export interface ForInStatement extends Node {
    type: "ForInStatement";
    left: VariableDeclaration | LVal;
    right: Expression;
    body: Statement;
}

export interface ForStatement extends Node {
    type: "ForStatement";
    init: VariableDeclaration | Expression;
    test: Expression;
    update: Expression;
    body: Statement;
}

export interface FunctionDeclaration extends Node {
    type: "FunctionDeclaration";
    id: Identifier;
    params: LVal[];
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

export interface FunctionExpression extends Node {
    type: "FunctionExpression";
    id: Identifier;
    params: LVal[];
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

export interface Identifier extends Node {
    type: "Identifier";
    name: string;
    typeAnnotation?: TypeAnnotation;
}

export interface IfStatement extends Node {
    type: "IfStatement";
    test: Expression;
    consequent: Statement;
    alternate: Statement;
}

export interface LabeledStatement extends Node {
    type: "LabeledStatement";
    label: Identifier;
    body: Statement;
}

export interface StringLiteral extends Node {
    type: "StringLiteral";
    value: string;
}

export interface NumericLiteral extends Node {
    type: "NumericLiteral";
    value: number;
}

export interface NullLiteral extends Node {
    type: "NullLiteral";
}

export interface BooleanLiteral extends Node {
    type: "BooleanLiteral";
    value: boolean;
}

export interface RegExpLiteral extends Node {
    type: "RegExpLiteral";
    pattern: string;
    flags?: string;
}

export interface LogicalExpression extends Node {
    type: "LogicalExpression";
    operator: "||" | "&&";
    left: Expression;
    right: Expression;
}

export interface MemberExpression extends Node {
    type: "MemberExpression";
    object: Expression | Super;
    property: Expression;
    computed: boolean;
}

export interface NewExpression extends Node {
    type: "NewExpression";
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
}

export interface Program extends Node {
    type: "Program";
    sourceType: "script" | "module";
    directives?: Directive[];
    body: Array<Statement | ModuleDeclaration>;
}

export interface ObjectExpression extends Node {
    type: "ObjectExpression";
    properties: Array<ObjectProperty | ObjectMethod | SpreadProperty>;
}

export interface ObjectMethod extends Node {
    type: "ObjectMethod";
    key: Expression;
    kind: "get" | "set" | "method";
    shorthand: boolean;
    computed: boolean;
    value: Expression;
    decorators?: Decorator[];
    id: Identifier;
    params: LVal[];
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

export interface ObjectProperty extends Node {
    type: "ObjectProperty";
    key: Expression;
    computed: boolean;
    value: Expression;
    decorators?: Decorator[];
    shorthand: boolean;
}

export interface RestElement extends Node {
    type: "RestElement";
    argument: LVal;
    typeAnnotation?: TypeAnnotation;
}

export interface ReturnStatement extends Node {
    type: "ReturnStatement";
    argument: Expression;
}

export interface SequenceExpression extends Node {
    type: "SequenceExpression";
    expressions: Expression[];
}

export interface SwitchCase extends Node {
    type: "SwitchCase";
    test: Expression;
    consequent: Statement[];
}

export interface SwitchStatement extends Node {
    type: "SwitchStatement";
    discriminant: Expression;
    cases: SwitchCase[];
}

export interface ThisExpression extends Node {
    type: "ThisExpression";
}

export interface ThrowStatement extends Node {
    type: "ThrowStatement";
    argument: Expression;
}

export interface TryStatement extends Node {
    type: "TryStatement";
    block: BlockStatement;
    handler: CatchClause;
    finalizer: BlockStatement;
}

export interface UnaryExpression extends Node {
    type: "UnaryExpression";
    operator: "-" | "+" | "!" | "~" | "typeof" | "void" | "delete";
    prefix: boolean;
    argument: Expression;
}

export interface UpdateExpression extends Node {
    type: "UpdateExpression";
    operator: "++" | "--";
    prefix: boolean;
    argument: Expression;
}

export interface VariableDeclaration extends Node {
    type: "VariableDeclaration";
    declarations: VariableDeclarator[];
    kind: "var" | "let" | "const";
}

export interface VariableDeclarator extends Node {
    type: "VariableDeclarator";
    id: LVal;
    init: Expression;
}

export interface WhileStatement extends Node {
    type: "WhileStatement";
    test: Expression;
    body: Statement;
}

export interface WithStatement extends Node {
    type: "WithStatement";
    object: Expression;
    body: BlockStatement | Statement;
}

export interface AssignmentPattern extends Node {
    type: "AssignmentPattern";
    left: Identifier;
    right: Expression;
}

export interface ArrayPattern extends Node {
    type: "ArrayPattern";
    elements: Expression[];
    typeAnnotation?: TypeAnnotation;
}

export interface ArrowFunctionExpression extends Node {
    type: "ArrowFunctionExpression";
    id: Identifier;
    params: LVal[];
    body: BlockStatement | Expression;
    generator: boolean;
    async: boolean;
    expression: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

export interface ClassBody extends Node {
    type: "ClassBody";
    body: Array<ClassMethod | ClassProperty>;
}

export interface ClassDeclaration extends Node {
    type: "ClassDeclaration";
    id: Identifier;
    superClass: Expression;
    body: ClassBody;
    decorators?: Decorator[];
    implements?: ClassImplements[];
    mixins?: any[];
    typeParameters?: TypeParameterDeclaration;
    superTypeParameters?: TypeParameterInstantiation;
}

export interface ClassExpression extends Node {
    type: "ClassExpression";
    id: Identifier;
    superClass: Expression;
    body: ClassBody;
    decorators?: Decorator[];
    implements?: ClassImplements[];
    mixins?: any[];
    typeParameters?: TypeParameterDeclaration;
    superTypeParameters?: TypeParameterInstantiation;
}

export interface ExportAllDeclaration extends Node {
    type: "ExportAllDeclaration";
    source: StringLiteral;
}

export interface ExportDefaultDeclaration extends Node {
    type: "ExportDefaultDeclaration";
    declaration: Declaration | Expression;
}

export interface ExportNamedDeclaration extends Node {
    type: "ExportNamedDeclaration";
    declaration: Declaration;
    specifiers: ExportSpecifier[];
    source: StringLiteral | null;
}

export interface ExportSpecifier extends Node {
    type: "ExportSpecifier";
    local: Identifier;
    imported: Identifier;
    exported: Identifier;
}

export interface ForOfStatement extends Node {
    type: "ForOfStatement";
    left: VariableDeclaration | LVal;
    right: Expression;
    body: Statement;
}

export interface ImportDeclaration extends Node {
    type: "ImportDeclaration";
    specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>;
    source: StringLiteral;
}

export interface ImportDefaultSpecifier extends Node {
    type: "ImportDefaultSpecifier";
    local: Identifier;
}

export interface ImportNamespaceSpecifier extends Node {
    type: "ImportNamespaceSpecifier";
    local: Identifier;
}

export interface ImportSpecifier extends Node {
    type: "ImportSpecifier";
    local: Identifier;
    imported: Identifier;
}

export interface MetaProperty extends Node {
    type: "MetaProperty";
    meta: Identifier;
    property: Identifier;
}

export interface ClassMethod extends Node {
    type: "ClassMethod";
    key: Expression;
    value?: FunctionExpression;
    kind: "constructor" | "method" | "get" | "set";
    computed: boolean;
    static: boolean;
    decorators?: Decorator[];
    id: Identifier;
    params: LVal[];
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    expression: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

// See: https://github.com/babel/babel/blob/master/doc/ast/spec.md#objectpattern
export interface AssignmentProperty extends Node {
    type: "ObjectProperty";
    key: Expression;
    computed: boolean;
    value: Pattern;
    decorators?: Decorator[];
    shorthand: boolean;
}

export interface ObjectPattern extends Node {
    type: "ObjectPattern";
    properties: Array<AssignmentProperty | RestProperty>;
    typeAnnotation?: TypeAnnotation;
}

export interface SpreadElement extends Node {
    type: "SpreadElement";
    argument: Expression;
}

export interface Super extends Node {
    type: "Super";
}

export interface TaggedTemplateExpression extends Node {
    type: "TaggedTemplateExpression";
    tag: Expression;
    quasi: TemplateLiteral;
}

export interface TemplateElement extends Node {
    type: "TemplateElement";
    tail: boolean;
    value: {
        cooked: string;
        raw: string;
    };
}

export interface TemplateLiteral extends Node {
    type: "TemplateLiteral";
    quasis: TemplateElement[];
    expressions: Expression[];
}

export interface YieldExpression extends Node {
    type: "YieldExpression";
    argument: Expression;
    delegate: boolean;
}

export interface AnyTypeAnnotation extends Node {
    type: "AnyTypeAnnotation";
}

export interface ArrayTypeAnnotation extends Node {
    type: "ArrayTypeAnnotation";
    elementType: FlowTypeAnnotation;
}

export interface BooleanTypeAnnotation extends Node {
    type: "BooleanTypeAnnotation";
}

export interface BooleanLiteralTypeAnnotation extends Node {
    type: "BooleanLiteralTypeAnnotation";
}

export interface NullLiteralTypeAnnotation extends Node {
    type: "NullLiteralTypeAnnotation";
}

export interface ClassImplements extends Node {
    type: "ClassImplements";
    id: Identifier;
    typeParameters: TypeParameterInstantiation;
}

export interface ClassProperty extends Node {
    type: "ClassProperty";
    key: Identifier;
    value: Expression;
    decorators?: Decorator[];
    typeAnnotation?: TypeAnnotation;
}

export interface DeclareClass extends Node {
    type: "DeclareClass";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    extends: InterfaceExtends[];
    body: ObjectTypeAnnotation;
}

export interface DeclareFunction extends Node {
    type: "DeclareFunction";
    id: Identifier;
}

export interface DeclareInterface extends Node {
    type: "DeclareInterface";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    extends: InterfaceExtends[];
    body: ObjectTypeAnnotation;
}

export interface DeclareModule extends Node {
    type: "DeclareModule";
    id: StringLiteral | Identifier;
    body: BlockStatement;
}

export interface DeclareTypeAlias extends Node {
    type: "DeclareTypeAlias";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    right: FlowTypeAnnotation;
}

export interface DeclareVariable extends Node {
    type: "DeclareVariable";
    id: Identifier;
}

export interface ExistentialTypeParam extends Node {
    type: "ExistentialTypeParam";
}

export interface FunctionTypeAnnotation extends Node {
    type: "FunctionTypeAnnotation";
    typeParameters: TypeParameterDeclaration;
    params: FunctionTypeParam[];
    rest: FunctionTypeParam;
    returnType: FlowTypeAnnotation;
}

export interface FunctionTypeParam extends Node {
    type: "FunctionTypeParam";
    name: Identifier;
    typeAnnotation: FlowTypeAnnotation;
}

export interface GenericTypeAnnotation extends Node {
    type: "GenericTypeAnnotation";
    id: Identifier;
    typeParameters: TypeParameterInstantiation;
}

export interface InterfaceExtends extends Node {
    type: "InterfaceExtends";
    id: Identifier;
    typeParameters: TypeParameterInstantiation;
}

export interface InterfaceDeclaration extends Node {
    type: "InterfaceDeclaration";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    extends: InterfaceExtends[];
    mixins?: any[];
    body: ObjectTypeAnnotation;
}

export interface IntersectionTypeAnnotation extends Node {
    type: "IntersectionTypeAnnotation";
    types: FlowTypeAnnotation[];
}

export interface MixedTypeAnnotation extends Node {
    type: "MixedTypeAnnotation";
}

export interface NullableTypeAnnotation extends Node {
    type: "NullableTypeAnnotation";
    typeAnnotation: FlowTypeAnnotation;
}

export interface NumericLiteralTypeAnnotation extends Node {
    type: "NumericLiteralTypeAnnotation";
}

export interface NumberTypeAnnotation extends Node {
    type: "NumberTypeAnnotation";
}

export interface StringLiteralTypeAnnotation extends Node {
    type: "StringLiteralTypeAnnotation";
}

export interface StringTypeAnnotation extends Node {
    type: "StringTypeAnnotation";
}

export interface ThisTypeAnnotation extends Node {
    type: "ThisTypeAnnotation";
}

export interface TupleTypeAnnotation extends Node {
    type: "TupleTypeAnnotation";
    types: FlowTypeAnnotation[];
}

export interface TypeofTypeAnnotation extends Node {
    type: "TypeofTypeAnnotation";
    argument: FlowTypeAnnotation;
}

export interface TypeAlias extends Node {
    type: "TypeAlias";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    right: FlowTypeAnnotation;
}

export interface TypeAnnotation extends Node {
    type: "TypeAnnotation";
    typeAnnotation: FlowTypeAnnotation;
}

export interface TypeCastExpression extends Node {
    type: "TypeCastExpression";
    expression: Expression;
    typeAnnotation: FlowTypeAnnotation;
}

export interface TypeParameter extends Node {
    type: "TypeParameterDeclaration";
    bound: TypeAnnotation | null;
    default: Flow | null;
    name: string | null;
}

export interface TypeParameterDeclaration extends Node {
    type: "TypeParameterDeclaration";
    params: Identifier[];
}

export interface TypeParameterInstantiation extends Node {
    type: "TypeParameterInstantiation";
    params: FlowTypeAnnotation[];
}

export interface ObjectTypeAnnotation extends Node {
    type: "ObjectTypeAnnotation";
    properties: ObjectTypeProperty[];
    indexers: ObjectTypeIndexer[];
    callProperties: ObjectTypeCallProperty[];
}

export interface ObjectTypeCallProperty extends Node {
    type: "ObjectTypeCallProperty";
    value: FlowTypeAnnotation;
}

export interface ObjectTypeIndexer extends Node {
    type: "ObjectTypeIndexer";
    id: Expression;
    key: FlowTypeAnnotation;
    value: FlowTypeAnnotation;
}

export interface ObjectTypeProperty extends Node {
    type: "ObjectTypeProperty";
    key: Expression;
    value: FlowTypeAnnotation;
}

export interface QualifiedTypeIdentifier extends Node {
    type: "QualifiedTypeIdentifier";
    id: Identifier;
    qualification: Identifier | QualifiedTypeIdentifier;
}

export interface UnionTypeAnnotation extends Node {
    type: "UnionTypeAnnotation";
    types: FlowTypeAnnotation[];
}

export interface VoidTypeAnnotation extends Node {
    type: "VoidTypeAnnotation";
}

export interface JSXAttribute extends Node {
    type: "JSXAttribute";
    name: JSXIdentifier | JSXNamespacedName;
    value: JSXElement | StringLiteral | JSXExpressionContainer | null;
}

export interface JSXClosingElement extends Node {
    type: "JSXClosingElement";
    name: JSXIdentifier | JSXMemberExpression;
}

export interface JSXElement extends Node {
    type: "JSXElement";
    openingElement: JSXOpeningElement;
    closingElement: JSXClosingElement;
    children: Array<JSXElement | JSXExpressionContainer | JSXText>;
    selfClosing?: boolean;
}

export interface JSXEmptyExpression extends Node {
    type: "JSXEmptyExpression";
}

export interface JSXExpressionContainer extends Node {
    type: "JSXExpressionContainer";
    expression: Expression;
}

export interface JSXIdentifier extends Node {
    type: "JSXIdentifier";
    name: string;
}

export interface JSXMemberExpression extends Node {
    type: "JSXMemberExpression";
    object: JSXMemberExpression | JSXIdentifier;
    property: JSXIdentifier;
}

export interface JSXNamespacedName extends Node {
    type: "JSXNamespacedName";
    namespace: JSXIdentifier;
    name: JSXIdentifier;
}

export interface JSXOpeningElement extends Node {
    type: "JSXOpeningElement";
    name: JSXIdentifier | JSXMemberExpression;
    selfClosing: boolean;
    attributes: JSXAttribute[];
}

export interface JSXSpreadAttribute extends Node {
    type: "JSXSpreadAttribute";
    argument: Expression;
}

export interface JSXText extends Node {
    type: "JSXText";
    value: string;
}

export interface Noop extends Node {
    type: "Noop";
}

export interface ParenthesizedExpression extends Node {
    type: "ParenthesizedExpression";
    expression: Expression;
}

export interface AwaitExpression extends Node {
    type: "AwaitExpression";
    argument: Expression;
}

export interface BindExpression extends Node {
    type: "BindExpression";
    object: Expression;
    callee: Expression;
}

export interface Decorator extends Node {
    type: "Decorator";
    expression: Expression;
}

export interface DoExpression extends Node {
    type: "DoExpression";
    body: BlockStatement;
}

export interface ExportDefaultSpecifier extends Node {
    type: "ExportDefaultSpecifier";
    exported: Identifier;
}

export interface ExportNamespaceSpecifier extends Node {
    type: "ExportNamespaceSpecifier";
    exported: Identifier;
}

export interface RestProperty extends Node {
    type: "RestProperty";
    argument: LVal;
}

export interface SpreadProperty extends Node {
    type: "SpreadProperty";
    argument: Expression;
}

export interface TSAnyKeyword extends Node {
    type: "TSAnyKeyword";
}

export interface TSArrayType extends Node {
    type: "TSArrayType";
    elementType: TSType;
}

export interface TSAsExpression extends Node {
    type: "TSAsExpression";
    expression: Expression;
    typeAnnotation: TSType;
}

export interface TSBooleanKeyword extends Node {
    type: "TSBooleanKeyword";
}

export interface TSCallSignatureDeclaration extends Node {
    type: "TSCallSignatureDeclaration";
    typeParameters: TypeParameterDeclaration | null;
    parameters: Array<Identifier | RestElement> | null;
    typeAnnotation: TSTypeAnnotation | null;
}

export interface TSConstructSignatureDeclaration extends Node {
    type: "TSConstructSignatureDeclaration";
    typeParameters: TypeParameterDeclaration | null;
    parameters: Array<Identifier | RestElement> | null;
    typeAnnotation: TSTypeAnnotation | null;
}

export interface TSConstructorType extends Node {
    type: "TSConstructorType";
    typeParameters: TypeParameterDeclaration | null;
    typeAnnotation: TSTypeAnnotation | null;
    parameters: Array<Identifier | RestElement> | null;
}

export interface TSDeclareFunction extends Node {
    type: "TSDeclareFunction";
    id: Identifier | null;
    typeParameters: TypeParameterDeclaration | Noop | null;
    params: LVal[];
    returnType: TypeAnnotation | TSTypeAnnotation | Noop | null;
    async: boolean;
    declare: boolean | null;
    generator: boolean;
}

export interface TSDeclareMethod extends Node {
    type: "TSDeclareMethod";
    decorators: Decorator[] | null;
    key: Expression;
    typeParameters: TypeParameterDeclaration | Noop | null;
    params: LVal[];
    returnType: TypeAnnotation | TSTypeAnnotation | Noop | null;
    abstract: boolean | null;
    access: "public" | "private" | "protected" | null;
    accessibility: "public" | "private" | "protected" | null;
    async: boolean;
    computed: boolean;
    generator: boolean;
    kind: "get" | "set" | "method" | "constructor";
    optional: boolean | null;
    static: boolean | null;
}

export interface TSEnumDeclaration extends Node {
    type: "TSEnumDeclaration";
    id: Identifier;
    members: TSEnumMember[];
    const: boolean | null;
    declare: boolean | null;
    initializer: Expression | null;
}

export interface TSEnumMember extends Node {
    type: "TSEnumMember";
    id: Identifier | StringLiteral;
    initializer: Expression | null;
}

export interface TSExportAssignment extends Node {
    type: "TSExportAssignment";
    expression: Expression;
}

export interface TSExpressionWithTypeArguments extends Node {
    type: "TSExpressionWithTypeArguments";
    expression: TSEntityName;
    typeParameters: TypeParameterInstantiation | null;
}

export interface TSExternalModuleReference extends Node {
    type: "TSExternalModuleReference";
    expression: StringLiteral;
}

export interface TSFunctionType extends Node {
    type: "TSFunctionType";
    typeParameters: TypeParameterDeclaration | null;
    typeAnnotation: TSTypeAnnotation | null;
    parameters: Array<Identifier | RestElement> | null;
}

export interface TSImportEqualsDeclaration extends Node {
    type: "TSImportEqualsDeclaration";
    id: Identifier;
    moduleReference: TSEntityName | TSExternalModuleReference;
    isExport: boolean | null;
}

export interface TSIndexSignature extends Node {
    type: "TSIndexSignature";
    parameters: Identifier[];
    typeAnnotation: TSTypeAnnotation | null;
    readonly: boolean | null;
}

export interface TSIndexedAccessType extends Node {
    type: "TSIndexedAccessType";
    objectType: TSType;
    indexType: TSType;
}

export interface TSInterfaceBody extends Node {
    type: "TSInterfaceBody";
    body: TSTypeElement[];
}

export interface TSInterfaceDeclaration extends Node {
    type: "TSInterfaceDeclaration";
    id: Identifier;
    typeParameters: TypeParameterDeclaration | null;
    extends: TSExpressionWithTypeArguments[] | null;
    body: TSInterfaceBody;
    declare: boolean | null;
}

export interface TSIntersectionType extends Node {
    type: "TSIntersectionType";
    types: TSType[];
}

export interface TSLiteralType extends Node {
    type: "TSLiteralType";
    literal: NumericLiteral | StringLiteral | BooleanLiteral;
}

export interface TSMappedType extends Node {
    type: "TSMappedType";
    typeParameter: TypeParameter;
    typeAnnotation: TSType | null;
    optional: boolean | null;
    readonly: boolean | null;
}

export interface TSMethodSignature extends Node {
    type: "TSMethodSignature";
    key: Expression;
    typeParameters: TypeParameterDeclaration | null;
    parameters: Array<Identifier | RestElement> | null;
    typeAnnotation: TSTypeAnnotation | null;
    computed: boolean | null;
    optional: boolean | null;
}

export interface TSModuleBlock extends Node {
    type: "TSModuleBlock";
    body: Statement[];
}

export interface TSModuleDeclaration extends Node {
    type: "TSModuleDeclaration";
    id: Identifier | StringLiteral;
    body: TSModuleBlock | TSModuleDeclaration;
    declare: boolean | null;
    global: boolean | null;
}

export interface TSNamespaceExportDeclaration extends Node {
    type: "TSNamespaceExportDeclaration";
    id: Identifier;
}

export interface TSNeverKeyword extends Node {
    type: "TSNeverKeyword";
}

export interface TSNonNullExpression extends Node {
    type: "TSNonNullExpression";
    expression: Expression;
}

export interface TSNullKeyword extends Node {
    type: "TSNullKeyword";
}

export interface TSNumberKeyword extends Node {
    type: "TSNumberKeyword";
}

export interface TSObjectKeyword extends Node {
    type: "TSObjectKeyword";
}

export interface TSParameterProperty extends Node {
    type: "TSParameterProperty";
    parameter: Identifier | AssignmentPattern;
    accessibility: 'public' | 'private' | 'protected' | null;
    readonly: boolean | null;
}

export interface TSParenthesizedType extends Node {
    type: "TSParenthesizedType";
    typeAnnotation: TSType;
}

export interface TSPropertySignature extends Node {
    type: "TSPropertySignature";
    key: Expression;
    typeAnnotation: TSTypeAnnotation | null;
    initializer: Expression | null;
    computed: boolean | null;
    optional: boolean | null;
    readonly: boolean | null;
}

export interface TSQualifiedName extends Node {
    type: "TSQualifiedName";
    left: TSEntityName;
    right: Identifier;
}

export interface TSStringKeyword extends Node {
    type: "TSStringKeyword";
}

export interface TSSymbolKeyword extends Node {
    type: "TSSymbolKeyword";
}

export interface TSThisType extends Node {
    type: "TSThisType";
}

export interface TSTupleType extends Node {
    type: "TSTupleType";
    elementTypes: TSType[];
}

export interface TSTypeAliasDeclaration extends Node {
    type: "TSTypeAliasDeclaration";
    id: Identifier;
    typeParameters: TypeParameterDeclaration | null;
    typeAnnotation: TSType;
    declare: boolean | null;
}

export interface TSTypeAnnotation extends Node {
    type: "TSTypeAnnotation";
    typeAnnotation: TSType;
}

export interface TSTypeAssertion extends Node {
    type: "TSTypeAssertion";
    typeAnnotation: TSType;
    expression: Expression;
}

export interface TSTypeLiteral extends Node {
    type: "TSTypeLiteral";
    members: TSTypeElement[];
}

export interface TSTypeOperator extends Node {
    type: "TSTypeOperator";
    typeAnnotation: TSType;
    operator: string | null;
}

export interface TSTypeParameter extends Node {
    type: "TSTypeParameter";
    constraint: TSType | null;
    default: TSType | null;
    name: string | null;
}

export interface TSTypeParameterDeclaration extends Node {
    type: "TSTypeParameterDeclaration";
    params: TSTypeParameter[];
}

export interface TSTypeParameterInstantiation extends Node {
    type: "TSTypeParameterInstantiation";
    params: TSType[];
}

export interface TSTypePredicate extends Node {
    type: "TSTypePredicate";
    parameterName: Identifier | TSThisType;
    typeAnnotation: TSTypeAnnotation;
}

export interface TSTypeQuery extends Node {
    type: "TSTypeQuery";
    exprName: TSEntityName;
}

export interface TSTypeReference extends Node {
    type: "TSTypeReference";
    typeName: TSEntityName;
    typeParameters: TypeParameterInstantiation | null;
}

export interface TSUndefinedKeyword extends Node {
    type: "TSUndefinedKeyword";
}

export interface TSUnionType extends Node {
    type: "TSUnionType";
    types: TSType[];
}

export interface TSVoidKeyword extends Node {
    type: "TSVoidKeyword";
}

export type Expression = ArrayExpression | AssignmentExpression | BinaryExpression | CallExpression
    | ConditionalExpression | FunctionExpression | Identifier | StringLiteral | NumericLiteral | BooleanLiteral
    | NullLiteral | RegExpLiteral | LogicalExpression | MemberExpression | NewExpression | ObjectExpression
    | SequenceExpression | ThisExpression | UnaryExpression | UpdateExpression | ArrowFunctionExpression
    | ClassExpression | MetaProperty | Super | TaggedTemplateExpression | TemplateLiteral | YieldExpression
    | TypeCastExpression | JSXElement | JSXEmptyExpression | JSXIdentifier | JSXMemberExpression
    | ParenthesizedExpression | AwaitExpression | BindExpression | DoExpression | TSAsExpression
    | TSNonNullExpression | TSTypeAssertion;

export type Binary = BinaryExpression | LogicalExpression;

export type Scopable = BlockStatement | CatchClause | DoWhileStatement | ForInStatement | ForStatement
    | FunctionDeclaration | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement
    | ArrowFunctionExpression | ClassDeclaration | ClassExpression | ForOfStatement | ClassMethod;

export type BlockParent = BlockStatement | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration
    | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement | ArrowFunctionExpression
    | ForOfStatement | ClassMethod;

export type Block = BlockStatement | Program;

export type Statement = BlockStatement | BreakStatement | ContinueStatement | DebuggerStatement | DoWhileStatement
    | EmptyStatement | ExpressionStatement | ForInStatement | ForStatement | FunctionDeclaration | IfStatement
    | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | VariableDeclaration
    | WhileStatement | WithStatement | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration
    | ExportNamedDeclaration | ForOfStatement | ImportDeclaration | DeclareClass | DeclareFunction | DeclareInterface
    | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias | TSDeclareFunction
    | TSEnumDeclaration | TSExportAssignment | TSImportEqualsDeclaration | TSInterfaceDeclaration
    | TSModuleDeclaration | TSNamespaceExportDeclaration | TSTypeAliasDeclaration;

export type Terminatorless = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement | YieldExpression | AwaitExpression;
export type CompletionStatement = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement;
export type Conditional = ConditionalExpression | IfStatement;
export type Loop = DoWhileStatement | ForInStatement | ForStatement | WhileStatement | ForOfStatement;
export type While = DoWhileStatement | WhileStatement;
export type ExpressionWrapper = ExpressionStatement | TypeCastExpression | ParenthesizedExpression;
export type For = ForInStatement | ForStatement | ForOfStatement;
export type ForXStatement = ForInStatement | ForOfStatement;
export type Function = FunctionDeclaration | FunctionExpression | ObjectMethod | ArrowFunctionExpression | ClassMethod;
export type FunctionParent = FunctionDeclaration | FunctionExpression | Program | ObjectMethod | ArrowFunctionExpression | ClassMethod;
export type Pureish = FunctionDeclaration | FunctionExpression | StringLiteral | NumericLiteral | BooleanLiteral | NullLiteral | ArrowFunctionExpression | ClassDeclaration | ClassExpression;

export type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration | ExportAllDeclaration
    | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration | DeclareClass | DeclareFunction
    | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias
    | TSDeclareFunction | TSEnumDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSTypeAliasDeclaration;

export type LVal = Identifier | MemberExpression | RestElement | AssignmentPattern | ArrayPattern | ObjectPattern
    | TSParameterProperty;
export type Literal = StringLiteral | NumericLiteral | BooleanLiteral | NullLiteral | RegExpLiteral | TemplateLiteral;
export type Immutable = StringLiteral | NumericLiteral | BooleanLiteral | NullLiteral | JSXAttribute | JSXClosingElement | JSXElement | JSXExpressionContainer | JSXOpeningElement;
export type UserWhitespacable = ObjectMethod | ObjectProperty | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeProperty;
export type Method = ObjectMethod | ClassMethod;
export type ObjectMember = ObjectMethod | ObjectProperty;
export type Property = ObjectProperty | ClassProperty;
export type UnaryLike = UnaryExpression | SpreadElement | RestProperty | SpreadProperty;
export type Pattern = AssignmentPattern | ArrayPattern | ObjectPattern;
export type Class = ClassDeclaration | ClassExpression;
export type ModuleDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration;
export type ExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration;
export type ModuleSpecifier = ExportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier | ExportDefaultSpecifier | ExportNamespaceSpecifier;

export type Flow = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation | BooleanLiteralTypeAnnotation
    | ClassImplements | ClassProperty | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule
    | DeclareTypeAlias | DeclareVariable | ExistentialTypeParam | FunctionTypeAnnotation | FunctionTypeParam
    | GenericTypeAnnotation | InterfaceExtends | InterfaceDeclaration | IntersectionTypeAnnotation
    | MixedTypeAnnotation | NullableTypeAnnotation | NumericLiteralTypeAnnotation | NumberTypeAnnotation
    | StringLiteralTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation
    | TypeofTypeAnnotation | TypeAlias | TypeAnnotation | TypeCastExpression | TypeParameterDeclaration
    | TypeParameterInstantiation | ObjectTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer
    | ObjectTypeProperty | QualifiedTypeIdentifier | UnionTypeAnnotation | VoidTypeAnnotation;

export type FlowTypeAnnotation = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation
    | BooleanLiteralTypeAnnotation | FunctionTypeAnnotation | GenericTypeAnnotation | IntersectionTypeAnnotation
    | MixedTypeAnnotation | NullableTypeAnnotation | NumericLiteralTypeAnnotation | NumberTypeAnnotation
    | StringLiteralTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation
    | TypeofTypeAnnotation | TypeAnnotation | ObjectTypeAnnotation | UnionTypeAnnotation | VoidTypeAnnotation;

export type FlowBaseAnnotation = AnyTypeAnnotation | BooleanTypeAnnotation | MixedTypeAnnotation | NumberTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | VoidTypeAnnotation;
export type FlowDeclaration = DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias;

export type JSX = JSXAttribute | JSXClosingElement | JSXElement | JSXEmptyExpression | JSXExpressionContainer
    | JSXIdentifier | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement | JSXSpreadAttribute | JSXText;

export type TSType = TSAnyKeyword | TSArrayType | TSBooleanKeyword | TSConstructorType | TSExpressionWithTypeArguments
    | TSFunctionType | TSIndexedAccessType | TSIntersectionType | TSLiteralType | TSMappedType | TSNeverKeyword
    | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSParenthesizedType | TSStringKeyword | TSSymbolKeyword
    | TSThisType | TSTupleType | TSTypeLiteral | TSTypeOperator | TSTypePredicate | TSTypeQuery | TSTypeReference
    | TSUndefinedKeyword | TSUnionType | TSVoidKeyword;

export type TSEntityName = Identifier | TSQualifiedName;

export type TSTypeElement = TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSIndexSignature
    | TSMethodSignature | TSPropertySignature;

export function arrayExpression(elements?: Array<null | Expression | SpreadElement>): ArrayExpression;
export function assignmentExpression(operator?: string, left?: LVal, right?: Expression): AssignmentExpression;
export function binaryExpression(
    operator?: "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=",
    left?: Expression,
    right?: Expression
): BinaryExpression;
export function directive(value?: DirectiveLiteral): Directive;
export function directiveLiteral(value?: string): DirectiveLiteral;
export function blockStatement(body?: Statement[], directives?: Directive[]): BlockStatement;
export function breakStatement(label?: Identifier): BreakStatement;
export function callExpression(callee?: Expression, _arguments?: Array<Expression | SpreadElement>): CallExpression;
export function catchClause(param?: Identifier, body?: BlockStatement): CatchClause;
export function conditionalExpression(test?: Expression, consequent?: Expression, alternate?: Expression): ConditionalExpression;
export function continueStatement(label?: Identifier): ContinueStatement;
export function debuggerStatement(): DebuggerStatement;
export function doWhileStatement(test?: Expression, body?: Statement): DoWhileStatement;
export function emptyStatement(): EmptyStatement;
export function expressionStatement(expression?: Expression): ExpressionStatement;
export function file(program?: Program, comments?: Comment[], tokens?: any[]): File;
export function forInStatement(left?: VariableDeclaration | LVal, right?: Expression, body?: Statement): ForInStatement;
export function forStatement(init?: VariableDeclaration | Expression, test?: Expression, update?: Expression, body?: Statement): ForStatement;
export function functionDeclaration(id?: Identifier, params?: LVal[], body?: BlockStatement, generator?: boolean, async?: boolean): FunctionDeclaration;
export function functionExpression(id?: Identifier, params?: LVal[], body?: BlockStatement, generator?: boolean, async?: boolean): FunctionExpression;
export function identifier(name?: string): Identifier;
export function ifStatement(test?: Expression, consequent?: Statement, alternate?: Statement): IfStatement;
export function labeledStatement(label?: Identifier, body?: Statement): LabeledStatement;
export function stringLiteral(value?: string): StringLiteral;
export function numericLiteral(value?: number): NumericLiteral;
export function nullLiteral(): NullLiteral;
export function booleanLiteral(value?: boolean): BooleanLiteral;
export function regExpLiteral(pattern?: string, flags?: string): RegExpLiteral;
export function logicalExpression(operator?: "||" | "&&", left?: Expression, right?: Expression): LogicalExpression;
export function memberExpression(object?: Expression | Super, property?: Expression, computed?: boolean): MemberExpression;
export function newExpression(callee?: Expression | Super, _arguments?: Array<Expression | SpreadElement>): NewExpression;
export function program(body?: Array<Statement | ModuleDeclaration>, directives?: Directive[]): Program;
export function objectExpression(properties?: Array<ObjectProperty | ObjectMethod | SpreadProperty>): ObjectExpression;
export function objectMethod(kind?: "get" | "set" | "method", key?: Expression, params?: LVal[], body?: BlockStatement, computed?: boolean): ObjectMethod;
export function objectProperty(key?: Expression, value?: Expression, computed?: boolean, shorthand?: boolean, decorators?: Decorator[]): ObjectProperty;
export function restElement(argument?: LVal, typeAnnotation?: TypeAnnotation): RestElement;
export function returnStatement(argument?: Expression): ReturnStatement;
export function sequenceExpression(expressions?: Expression[]): SequenceExpression;
export function switchCase(test?: Expression, consequent?: Statement[]): SwitchCase;
export function switchStatement(discriminant?: Expression, cases?: SwitchCase[]): SwitchStatement;
export function thisExpression(): ThisExpression;
export function throwStatement(argument?: Expression): ThrowStatement;
export function tryStatement(block?: BlockStatement, handler?: CatchClause, finalizer?: BlockStatement): TryStatement;
export function unaryExpression(operator?: "void" | "delete" | "!" | "+" | "-" | "++" | "--" | "~" | "typeof", argument?: Expression, prefix?: boolean): UnaryExpression;
export function updateExpression(operator?: "++" | "--", argument?: Expression, prefix?: boolean): UpdateExpression;
export function variableDeclaration(kind?: "var" | "let" | "const", declarations?: VariableDeclarator[]): VariableDeclaration;
export function variableDeclarator(id?: LVal, init?: Expression): VariableDeclarator;
export function whileStatement(test?: Expression, body?: BlockStatement | Statement): WhileStatement;
export function withStatement(object?: Expression, body?: BlockStatement | Statement): WithStatement;
export function assignmentPattern(left?: Identifier, right?: Expression): AssignmentPattern;
export function arrayPattern(elements?: Expression[], typeAnnotation?: TypeAnnotation): ArrayPattern;
export function arrowFunctionExpression(params?: LVal[], body?: BlockStatement | Expression, async?: boolean): ArrowFunctionExpression;
export function classBody(body?: Array<ClassMethod | ClassProperty>): ClassBody;
export function classDeclaration(id?: Identifier, superClass?: Expression, body?: ClassBody, decorators?: Decorator[]): ClassDeclaration;
export function classExpression(id?: Identifier, superClass?: Expression, body?: ClassBody, decorators?: Decorator[]): ClassExpression;
export function exportAllDeclaration(source?: StringLiteral): ExportAllDeclaration;
export function exportDefaultDeclaration(declaration?: FunctionDeclaration | ClassDeclaration | Expression): ExportDefaultDeclaration;
export function exportNamedDeclaration(declaration?: Declaration, specifiers?: ExportSpecifier[], source?: StringLiteral): ExportNamedDeclaration;
export function exportSpecifier(local?: Identifier, exported?: Identifier): ExportSpecifier;
export function forOfStatement(left?: VariableDeclaration | LVal, right?: Expression, body?: Statement): ForOfStatement;
export function importDeclaration(specifiers?: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>, source?: StringLiteral): ImportDeclaration;
export function importDefaultSpecifier(local?: Identifier): ImportDefaultSpecifier;
export function importNamespaceSpecifier(local?: Identifier): ImportNamespaceSpecifier;
export function importSpecifier(local?: Identifier, imported?: Identifier): ImportSpecifier;
export function metaProperty(meta?: string, property?: string): MetaProperty;
export function classMethod(kind?: "constructor" | "method" | "get" | "set", key?: Expression, params?: LVal[], body?: BlockStatement, computed?: boolean, _static?: boolean): ClassMethod;
export function objectPattern(properties?: Array<AssignmentProperty | RestProperty>, typeAnnotation?: TypeAnnotation): ObjectPattern;
export function spreadElement(argument?: Expression): SpreadElement;
export function taggedTemplateExpression(tag?: Expression, quasi?: TemplateLiteral): TaggedTemplateExpression;
export function templateElement(value?: { cooked?: string; raw?: string; }, tail?: boolean): TemplateElement;
export function templateLiteral(quasis?: TemplateElement[], expressions?: Expression[]): TemplateLiteral;
export function yieldExpression(argument?: Expression, delegate?: boolean): YieldExpression;
export function anyTypeAnnotation(): AnyTypeAnnotation;
export function arrayTypeAnnotation(elementType?: FlowTypeAnnotation): ArrayTypeAnnotation;
export function booleanTypeAnnotation(): BooleanTypeAnnotation;
export function booleanLiteralTypeAnnotation(): BooleanLiteralTypeAnnotation;
export function nullLiteralTypeAnnotation(): NullLiteralTypeAnnotation;
export function classImplements(id?: Identifier, typeParameters?: TypeParameterInstantiation): ClassImplements;
export function classProperty(key?: Identifier, value?: Expression, typeAnnotation?: TypeAnnotation, decorators?: Decorator[]): ClassProperty;
export function declareClass(id?: Identifier, typeParameters?: TypeParameterDeclaration, _extends?: InterfaceExtends[], body?: ObjectTypeAnnotation): DeclareClass;
export function declareFunction(id?: Identifier): DeclareFunction;
export function declareInterface(id?: Identifier, typeParameters?: TypeParameterDeclaration, _extends?: InterfaceExtends[], body?: ObjectTypeAnnotation): DeclareInterface;
export function declareModule(id?: StringLiteral | Identifier, body?: BlockStatement): DeclareModule;
export function declareTypeAlias(id?: Identifier, typeParameters?: TypeParameterDeclaration, right?: FlowTypeAnnotation): DeclareTypeAlias;
export function declareVariable(id?: Identifier): DeclareVariable;
export function existentialTypeParam(): ExistentialTypeParam;
export function functionTypeAnnotation(typeParameters?: TypeParameterDeclaration, params?: FunctionTypeParam[], rest?: FunctionTypeParam, returnType?: FlowTypeAnnotation): FunctionTypeAnnotation;
export function functionTypeParam(name?: Identifier, typeAnnotation?: FlowTypeAnnotation): FunctionTypeParam;
export function genericTypeAnnotation(id?: Identifier, typeParameters?: TypeParameterInstantiation): GenericTypeAnnotation;
export function interfaceExtends(id?: Identifier, typeParameters?: TypeParameterInstantiation): InterfaceExtends;
export function interfaceDeclaration(id?: Identifier, typeParameters?: TypeParameterDeclaration, _extends?: InterfaceExtends[], body?: ObjectTypeAnnotation): InterfaceDeclaration;
export function intersectionTypeAnnotation(types?: FlowTypeAnnotation[]): IntersectionTypeAnnotation;
export function mixedTypeAnnotation(): MixedTypeAnnotation;
export function nullableTypeAnnotation(typeAnnotation?: FlowTypeAnnotation): NullableTypeAnnotation;
export function numericLiteralTypeAnnotation(): NumericLiteralTypeAnnotation;
export function numberTypeAnnotation(): NumberTypeAnnotation;
export function stringLiteralTypeAnnotation(): StringLiteralTypeAnnotation;
export function stringTypeAnnotation(): StringTypeAnnotation;
export function thisTypeAnnotation(): ThisTypeAnnotation;
export function tupleTypeAnnotation(types?: FlowTypeAnnotation[]): TupleTypeAnnotation;
export function typeofTypeAnnotation(argument?: FlowTypeAnnotation): TypeofTypeAnnotation;
export function typeAlias(id?: Identifier, typeParameters?: TypeParameterDeclaration, right?: FlowTypeAnnotation): TypeAlias;
export function typeAnnotation(typeAnnotation?: FlowTypeAnnotation): TypeAnnotation;
export function typeCastExpression(expression?: Expression, typeAnnotation?: FlowTypeAnnotation): TypeCastExpression;
export function typeParameter(bound?: TypeAnnotation, default_?: Flow): TypeParameter;
export function typeParameterDeclaration(params?: Identifier[]): TypeParameterDeclaration;
export function typeParameterInstantiation(params?: FlowTypeAnnotation[]): TypeParameterInstantiation;
export function objectTypeAnnotation(properties?: ObjectTypeProperty[], indexers?: ObjectTypeIndexer[], callProperties?: ObjectTypeCallProperty[]): ObjectTypeAnnotation;
export function objectTypeCallProperty(value?: FlowTypeAnnotation): ObjectTypeCallProperty;
export function objectTypeIndexer(id?: Expression, key?: FlowTypeAnnotation, value?: FlowTypeAnnotation): ObjectTypeIndexer;
export function objectTypeProperty(key?: Expression, value?: FlowTypeAnnotation): ObjectTypeProperty;
export function qualifiedTypeIdentifier(id?: Identifier, qualification?: Identifier | QualifiedTypeIdentifier): QualifiedTypeIdentifier;
export function unionTypeAnnotation(types?: FlowTypeAnnotation[]): UnionTypeAnnotation;
export function voidTypeAnnotation(): VoidTypeAnnotation;
export function jSXAttribute(name?: JSXIdentifier | JSXNamespacedName, value?: JSXElement | StringLiteral | JSXExpressionContainer | null): JSXAttribute;
export function jSXClosingElement(name?: JSXIdentifier | JSXMemberExpression): JSXClosingElement;
export function jSXElement(openingElement?: JSXOpeningElement, closingElement?: JSXClosingElement, children?: Array<JSXElement | JSXExpressionContainer | JSXText>, selfClosing?: boolean): JSXElement;
export function jSXEmptyExpression(): JSXEmptyExpression;
export function jSXExpressionContainer(expression?: Expression): JSXExpressionContainer;
export function jSXIdentifier(name?: string): JSXIdentifier;
export function jSXMemberExpression(object?: JSXMemberExpression | JSXIdentifier, property?: JSXIdentifier): JSXMemberExpression;
export function jSXNamespacedName(namespace?: JSXIdentifier, name?: JSXIdentifier): JSXNamespacedName;
export function jSXOpeningElement(name?: JSXIdentifier | JSXMemberExpression, attributes?: JSXAttribute[], selfClosing?: boolean): JSXOpeningElement;
export function jSXSpreadAttribute(argument?: Expression): JSXSpreadAttribute;
export function jSXText(value?: string): JSXText;
export function noop(): Noop;
export function parenthesizedExpression(expression?: Expression): ParenthesizedExpression;
export function awaitExpression(argument?: Expression): AwaitExpression;
export function bindExpression(object?: Expression, callee?: Expression): BindExpression;
export function decorator(expression?: Expression): Decorator;
export function doExpression(body?: BlockStatement): DoExpression;
export function exportDefaultSpecifier(exported?: Identifier): ExportDefaultSpecifier;
export function exportNamespaceSpecifier(exported?: Identifier): ExportNamespaceSpecifier;
export function restProperty(argument?: LVal): RestProperty;
export function spreadProperty(argument?: Expression): SpreadProperty;

export function TSAnyKeyword(): TSAnyKeyword;
export function TSArrayType(elementType: TSType): TSArrayType;
export function TSAsExpression(expression: Expression, typeAnnotation: TSType): TSAsExpression;
export function TSBooleanKeyword(): TSBooleanKeyword;
export function TSCallSignatureDeclaration(typeParameters?: TypeParameterDeclaration, parameters?: Array<Identifier | RestElement>, typeAnnotation?: TSTypeAnnotation): TSCallSignatureDeclaration;
export function TSConstructSignatureDeclaration(typeParameters?: TypeParameterDeclaration, parameters?: Array<Identifier | RestElement>, typeAnnotation?: TSTypeAnnotation): TSTypeElement;
export function TSConstructorType(typeParameters?: TypeParameterDeclaration, typeAnnotation?: TSTypeAnnotation): TSConstructorType;
export function TSDeclareFunction(
    id: Identifier | undefined | null,
    typeParameters: TypeParameterDeclaration | Noop | undefined | null,
    params: LVal[],
    returnType: TypeAnnotation | TSTypeAnnotation | Noop | undefined | null): TSDeclareFunction;
export function TSDeclareMethod(
    decorators: Decorator[] | undefined | null,
    key: Expression,
    typeParameters: TypeParameterDeclaration | Noop | undefined | null,
    params: LVal[],
    returnType?: TypeAnnotation | TSTypeAnnotation | Noop): TSDeclareMethod;
export function TSEnumDeclaration(id: Identifier, members: TSEnumMember[]): TSEnumDeclaration;
export function TSEnumMember(id: Identifier | StringLiteral, initializer?: Expression): TSEnumMember;
export function TSExportAssignment(expression: Expression): TSExportAssignment;
export function TSExpressionWithTypeArguments(expression: TSEntityName, typeParameters?: TypeParameterInstantiation): TSExpressionWithTypeArguments;
export function TSExternalModuleReference(expression: StringLiteral): TSExternalModuleReference;
export function TSFunctionType(typeParameters?: TypeParameterDeclaration, typeAnnotation?: TSTypeAnnotation): TSFunctionType;
export function TSImportEqualsDeclaration(id: Identifier, moduleReference: TSEntityName | TSExternalModuleReference): TSImportEqualsDeclaration;
export function TSIndexSignature(parameters: Identifier[], typeAnnotation?: TSTypeAnnotation): TSIndexSignature;
export function TSIndexedAccessType(objectType: TSType, indexType: TSType): TSIndexedAccessType;
export function TSInterfaceBody(body: TSTypeElement[]): TSInterfaceBody;
export function TSInterfaceDeclaration(
    id: Identifier,
    typeParameters: TypeParameterDeclaration | undefined | null,
    extends_: TSExpressionWithTypeArguments[] | undefined | null,
    body: TSInterfaceBody): TSInterfaceDeclaration;
export function TSIntersectionType(types: TSType[]): TSIntersectionType;
export function TSLiteralType(literal: NumericLiteral | StringLiteral | BooleanLiteral): TSLiteralType;
export function TSMappedType(typeParameter: TypeParameter, typeAnnotation?: TSType): TSMappedType;
export function TSMethodSignature(key: Expression, typeParameters?: TypeParameterDeclaration, parameters?: Array<Identifier | RestElement>, typeAnnotation?: TSTypeAnnotation): TSMethodSignature;
export function TSModuleBlock(body: Statement[]): TSModuleBlock;
export function TSModuleDeclaration(id: Identifier | StringLiteral, body: TSModuleBlock | TSModuleDeclaration): TSModuleDeclaration;
export function TSNamespaceExportDeclaration(id: Identifier): TSNamespaceExportDeclaration;
export function TSNeverKeyword(): TSNeverKeyword;
export function TSNonNullExpression(expression: Expression): TSNonNullExpression;
export function TSNullKeyword(): TSNullKeyword;
export function TSNumberKeyword(): TSNumberKeyword;
export function TSObjectKeyword(): TSObjectKeyword;
export function TSParameterProperty(parameter: Identifier | AssignmentPattern): TSParameterProperty;
export function TSParenthesizedType(typeAnnotation: TSType): TSParenthesizedType;
export function TSPropertySignature(key: Expression, typeAnnotation?: TSTypeAnnotation, initializer?: Expression): TSPropertySignature;
export function TSQualifiedName(left: TSEntityName, right: Identifier): TSQualifiedName;
export function TSStringKeyword(): TSStringKeyword;
export function TSSymbolKeyword(): TSSymbolKeyword;
export function TSThisType(): TSThisType;
export function TSTupleType(elementTypes: TSType[]): TSTupleType;
export function TSTypeAliasDeclaration(id: Identifier, typeParameters: TypeParameterDeclaration | undefined | null, typeAnnotation: TSType): TSTypeAliasDeclaration;
export function TSTypeAnnotation(typeAnnotation: TSType): TSTypeAnnotation;
export function TSTypeAssertion(typeAnnotation: TSType, expression: Expression): TSTypeAssertion;
export function TSTypeLiteral(members: TSTypeElement[]): TSTypeLiteral;
export function TSTypeOperator(typeAnnotation: TSType): TSTypeOperator;
export function TSTypeParameter(constraint?: TSType, default_?: TSType): TSTypeParameter;
export function TSTypeParameterDeclaration(params: TSTypeParameter[]): TSTypeParameterDeclaration;
export function TSTypeParameterInstantiation(params: TSType[]): TSTypeParameterInstantiation;
export function TSTypePredicate(parameterName: Identifier | TSThisType, typeAnnotation: TSTypeAnnotation): TSTypePredicate;
export function TSTypeQuery(exprName: TSEntityName): TSTypeQuery;
export function TSTypeReference(typeName: TSEntityName, typeParameters?: TypeParameterInstantiation): TSTypeReference;
export function TSUndefinedKeyword(): TSUndefinedKeyword;
export function TSUnionType(types: TSType[]): TSUnionType;
export function TSVoidKeyword(): TSVoidKeyword;

export function isArrayExpression(node: object, opts?: object): node is ArrayExpression;
export function isAssignmentExpression(node: object, opts?: object): node is AssignmentExpression;
export function isBinaryExpression(node: object, opts?: object): node is BinaryExpression;
export function isDirective(node: object, opts?: object): node is Directive;
export function isDirectiveLiteral(node: object, opts?: object): node is DirectiveLiteral;
export function isBlockStatement(node: object, opts?: object): node is BlockStatement;
export function isBreakStatement(node: object, opts?: object): node is BreakStatement;
export function isCallExpression(node: object, opts?: object): node is CallExpression;
export function isCatchClause(node: object, opts?: object): node is CatchClause;
export function isConditionalExpression(node: object, opts?: object): node is ConditionalExpression;
export function isContinueStatement(node: object, opts?: object): node is ContinueStatement;
export function isDebuggerStatement(node: object, opts?: object): node is DebuggerStatement;
export function isDoWhileStatement(node: object, opts?: object): node is DoWhileStatement;
export function isEmptyStatement(node: object, opts?: object): node is EmptyStatement;
export function isExpressionStatement(node: object, opts?: object): node is ExpressionStatement;
export function isFile(node: object, opts?: object): node is File;
export function isForInStatement(node: object, opts?: object): node is ForInStatement;
export function isForStatement(node: object, opts?: object): node is ForStatement;
export function isFunctionDeclaration(node: object, opts?: object): node is FunctionDeclaration;
export function isFunctionExpression(node: object, opts?: object): node is FunctionExpression;
export function isIdentifier(node: object, opts?: object): node is Identifier;
export function isIfStatement(node: object, opts?: object): node is IfStatement;
export function isLabeledStatement(node: object, opts?: object): node is LabeledStatement;
export function isStringLiteral(node: object, opts?: object): node is StringLiteral;
export function isNumericLiteral(node: object, opts?: object): node is NumericLiteral;
export function isNullLiteral(node: object, opts?: object): node is NullLiteral;
export function isBooleanLiteral(node: object, opts?: object): node is BooleanLiteral;
export function isRegExpLiteral(node: object, opts?: object): node is RegExpLiteral;
export function isLogicalExpression(node: object, opts?: object): node is LogicalExpression;
export function isMemberExpression(node: object, opts?: object): node is MemberExpression;
export function isNewExpression(node: object, opts?: object): node is NewExpression;
export function isProgram(node: object, opts?: object): node is Program;
export function isObjectExpression(node: object, opts?: object): node is ObjectExpression;
export function isObjectMethod(node: object, opts?: object): node is ObjectMethod;
export function isObjectProperty(node: object, opts?: object): node is ObjectProperty;
export function isRestElement(node: object, opts?: object): node is RestElement;
export function isReturnStatement(node: object, opts?: object): node is ReturnStatement;
export function isSequenceExpression(node: object, opts?: object): node is SequenceExpression;
export function isSwitchCase(node: object, opts?: object): node is SwitchCase;
export function isSwitchStatement(node: object, opts?: object): node is SwitchStatement;
export function isThisExpression(node: object, opts?: object): node is ThisExpression;
export function isThrowStatement(node: object, opts?: object): node is ThrowStatement;
export function isTryStatement(node: object, opts?: object): node is TryStatement;
export function isUnaryExpression(node: object, opts?: object): node is UnaryExpression;
export function isUpdateExpression(node: object, opts?: object): node is UpdateExpression;
export function isVariableDeclaration(node: object, opts?: object): node is VariableDeclaration;
export function isVariableDeclarator(node: object, opts?: object): node is VariableDeclarator;
export function isWhileStatement(node: object, opts?: object): node is WhileStatement;
export function isWithStatement(node: object, opts?: object): node is WithStatement;
export function isAssignmentPattern(node: object, opts?: object): node is AssignmentPattern;
export function isArrayPattern(node: object, opts?: object): node is ArrayPattern;
export function isArrowFunctionExpression(node: object, opts?: object): node is ArrowFunctionExpression;
export function isClassBody(node: object, opts?: object): node is ClassBody;
export function isClassDeclaration(node: object, opts?: object): node is ClassDeclaration;
export function isClassExpression(node: object, opts?: object): node is ClassExpression;
export function isExportAllDeclaration(node: object, opts?: object): node is ExportAllDeclaration;
export function isExportDefaultDeclaration(node: object, opts?: object): node is ExportDefaultDeclaration;
export function isExportNamedDeclaration(node: object, opts?: object): node is ExportNamedDeclaration;
export function isExportSpecifier(node: object, opts?: object): node is ExportSpecifier;
export function isForOfStatement(node: object, opts?: object): node is ForOfStatement;
export function isImportDeclaration(node: object, opts?: object): node is ImportDeclaration;
export function isImportDefaultSpecifier(node: object, opts?: object): node is ImportDefaultSpecifier;
export function isImportNamespaceSpecifier(node: object, opts?: object): node is ImportNamespaceSpecifier;
export function isImportSpecifier(node: object, opts?: object): node is ImportSpecifier;
export function isMetaProperty(node: object, opts?: object): node is MetaProperty;
export function isClassMethod(node: object, opts?: object): node is ClassMethod;
export function isObjectPattern(node: object, opts?: object): node is ObjectPattern;
export function isSpreadElement(node: object, opts?: object): node is SpreadElement;
export function isSuper(node: object, opts?: object): node is Super;
export function isTaggedTemplateExpression(node: object, opts?: object): node is TaggedTemplateExpression;
export function isTemplateElement(node: object, opts?: object): node is TemplateElement;
export function isTemplateLiteral(node: object, opts?: object): node is TemplateLiteral;
export function isYieldExpression(node: object, opts?: object): node is YieldExpression;
export function isAnyTypeAnnotation(node: object, opts?: object): node is AnyTypeAnnotation;
export function isArrayTypeAnnotation(node: object, opts?: object): node is ArrayTypeAnnotation;
export function isBooleanTypeAnnotation(node: object, opts?: object): node is BooleanTypeAnnotation;
export function isBooleanLiteralTypeAnnotation(node: object, opts?: object): node is BooleanLiteralTypeAnnotation;
export function isNullLiteralTypeAnnotation(node: object, opts?: object): node is NullLiteralTypeAnnotation;
export function isClassImplements(node: object, opts?: object): node is ClassImplements;
export function isClassProperty(node: object, opts?: object): node is ClassProperty;
export function isDeclareClass(node: object, opts?: object): node is DeclareClass;
export function isDeclareFunction(node: object, opts?: object): node is DeclareFunction;
export function isDeclareInterface(node: object, opts?: object): node is DeclareInterface;
export function isDeclareModule(node: object, opts?: object): node is DeclareModule;
export function isDeclareTypeAlias(node: object, opts?: object): node is DeclareTypeAlias;
export function isDeclareVariable(node: object, opts?: object): node is DeclareVariable;
export function isExistentialTypeParam(node: object, opts?: object): node is ExistentialTypeParam;
export function isFunctionTypeAnnotation(node: object, opts?: object): node is FunctionTypeAnnotation;
export function isFunctionTypeParam(node: object, opts?: object): node is FunctionTypeParam;
export function isGenericTypeAnnotation(node: object, opts?: object): node is GenericTypeAnnotation;
export function isInterfaceExtends(node: object, opts?: object): node is InterfaceExtends;
export function isInterfaceDeclaration(node: object, opts?: object): node is InterfaceDeclaration;
export function isIntersectionTypeAnnotation(node: object, opts?: object): node is IntersectionTypeAnnotation;
export function isMixedTypeAnnotation(node: object, opts?: object): node is MixedTypeAnnotation;
export function isNullableTypeAnnotation(node: object, opts?: object): node is NullableTypeAnnotation;
export function isNumericLiteralTypeAnnotation(node: object, opts?: object): node is NumericLiteralTypeAnnotation;
export function isNumberTypeAnnotation(node: object, opts?: object): node is NumberTypeAnnotation;
export function isStringLiteralTypeAnnotation(node: object, opts?: object): node is StringLiteralTypeAnnotation;
export function isStringTypeAnnotation(node: object, opts?: object): node is StringTypeAnnotation;
export function isThisTypeAnnotation(node: object, opts?: object): node is ThisTypeAnnotation;
export function isTupleTypeAnnotation(node: object, opts?: object): node is TupleTypeAnnotation;
export function isTypeofTypeAnnotation(node: object, opts?: object): node is TypeofTypeAnnotation;
export function isTypeAlias(node: object, opts?: object): node is TypeAlias;
export function isTypeAnnotation(node: object, opts?: object): node is TypeAnnotation;
export function isTypeCastExpression(node: object, opts?: object): node is TypeCastExpression;
export function isTypeParameter(node: object, opts?: object): node is TypeParameter;
export function isTypeParameterDeclaration(node: object, opts?: object): node is TypeParameterDeclaration;
export function isTypeParameterInstantiation(node: object, opts?: object): node is TypeParameterInstantiation;
export function isObjectTypeAnnotation(node: object, opts?: object): node is ObjectTypeAnnotation;
export function isObjectTypeCallProperty(node: object, opts?: object): node is ObjectTypeCallProperty;
export function isObjectTypeIndexer(node: object, opts?: object): node is ObjectTypeIndexer;
export function isObjectTypeProperty(node: object, opts?: object): node is ObjectTypeProperty;
export function isQualifiedTypeIdentifier(node: object, opts?: object): node is QualifiedTypeIdentifier;
export function isUnionTypeAnnotation(node: object, opts?: object): node is UnionTypeAnnotation;
export function isVoidTypeAnnotation(node: object, opts?: object): node is VoidTypeAnnotation;
export function isJSXAttribute(node: object, opts?: object): node is JSXAttribute;
export function isJSXClosingElement(node: object, opts?: object): node is JSXClosingElement;
export function isJSXElement(node: object, opts?: object): node is JSXElement;
export function isJSXEmptyExpression(node: object, opts?: object): node is JSXEmptyExpression;
export function isJSXExpressionContainer(node: object, opts?: object): node is JSXExpressionContainer;
export function isJSXIdentifier(node: object, opts?: object): node is JSXIdentifier;
export function isJSXMemberExpression(node: object, opts?: object): node is JSXMemberExpression;
export function isJSXNamespacedName(node: object, opts?: object): node is JSXNamespacedName;
export function isJSXOpeningElement(node: object, opts?: object): node is JSXOpeningElement;
export function isJSXSpreadAttribute(node: object, opts?: object): node is JSXSpreadAttribute;
export function isJSXText(node: object, opts?: object): node is JSXText;
export function isNoop(node: object, opts?: object): node is Noop;
export function isParenthesizedExpression(node: object, opts?: object): node is ParenthesizedExpression;
export function isAwaitExpression(node: object, opts?: object): node is AwaitExpression;
export function isBindExpression(node: object, opts?: object): node is BindExpression;
export function isDecorator(node: object, opts?: object): node is Decorator;
export function isDoExpression(node: object, opts?: object): node is DoExpression;
export function isExportDefaultSpecifier(node: object, opts?: object): node is ExportDefaultSpecifier;
export function isExportNamespaceSpecifier(node: object, opts?: object): node is ExportNamespaceSpecifier;
export function isRestProperty(node: object, opts?: object): node is RestProperty;
export function isSpreadProperty(node: object, opts?: object): node is SpreadProperty;
export function isExpression(node: object, opts?: object): node is Expression;
export function isBinary(node: object, opts?: object): node is Binary;
export function isScopable(node: object, opts?: object): node is Scopable;
export function isBlockParent(node: object, opts?: object): node is BlockParent;
export function isBlock(node: object, opts?: object): node is Block;
export function isStatement(node: object, opts?: object): node is Statement;
export function isTerminatorless(node: object, opts?: object): node is Terminatorless;
export function isCompletionStatement(node: object, opts?: object): node is CompletionStatement;
export function isConditional(node: object, opts?: object): node is Conditional;
export function isLoop(node: object, opts?: object): node is Loop;
export function isWhile(node: object, opts?: object): node is While;
export function isExpressionWrapper(node: object, opts?: object): node is ExpressionWrapper;
export function isFor(node: object, opts?: object): node is For;
export function isForXStatement(node: object, opts?: object): node is ForXStatement;
// tslint:disable-next-line ban-types
export function isFunction(node: object, opts?: object): node is Function;
export function isFunctionParent(node: object, opts?: object): node is FunctionParent;
export function isPureish(node: object, opts?: object): node is Pureish;
export function isDeclaration(node: object, opts?: object): node is Declaration;
export function isLVal(node: object, opts?: object): node is LVal;
export function isLiteral(node: object, opts?: object): node is Literal;
export function isImmutable(node: object, opts?: object): node is Immutable;
export function isUserWhitespacable(node: object, opts?: object): node is UserWhitespacable;
export function isMethod(node: object, opts?: object): node is Method;
export function isObjectMember(node: object, opts?: object): node is ObjectMember;
export function isProperty(node: object, opts?: object): node is Property;
export function isUnaryLike(node: object, opts?: object): node is UnaryLike;
export function isPattern(node: object, opts?: object): node is Pattern;
export function isClass(node: object, opts?: object): node is Class;
export function isModuleDeclaration(node: object, opts?: object): node is ModuleDeclaration;
export function isExportDeclaration(node: object, opts?: object): node is ExportDeclaration;
export function isModuleSpecifier(node: object, opts?: object): node is ModuleSpecifier;
export function isFlow(node: object, opts?: object): node is Flow;
export function isFlowBaseAnnotation(node: object, opts?: object): node is FlowBaseAnnotation;
export function isFlowDeclaration(node: object, opts?: object): node is FlowDeclaration;
export function isJSX(node: object, opts?: object): node is JSX;
export function isNumberLiteral(node: object, opts?: object): node is NumericLiteral;
export function isRegexLiteral(node: object, opts?: object): node is RegExpLiteral;

export function isReferencedIdentifier(node: object, opts?: object): node is Identifier | JSXIdentifier;
export function isReferencedMemberExpression(node: object, opts?: object): node is MemberExpression;
export function isBindingIdentifier(node: object, opts?: object): node is Identifier;
export function isScope(node: object, opts?: object): node is Scopable;
export function isReferenced(node: object, opts?: object): boolean;
export function isBlockScoped(node: object, opts?: object): node is FunctionDeclaration | ClassDeclaration | VariableDeclaration;
export function isVar(node: object, opts?: object): node is VariableDeclaration;
export function isUser(node: object, opts?: object): boolean;
export function isGenerated(node: object, opts?: object): boolean;
export function isPure(node: object, opts?: object): boolean;

export function isTSAnyKeyword(node: object, opts?: object): node is TSAnyKeyword;
export function isTSArrayType(node: object, opts?: object): node is TSArrayType;
export function isTSAsExpression(node: object, opts?: object): node is TSAsExpression;
export function isTSBooleanKeyword(node: object, opts?: object): node is TSBooleanKeyword;
export function isTSCallSignatureDeclaration(node: object, opts?: object): node is TSCallSignatureDeclaration;
export function isTSConstructSignatureDeclaration(node: object, opts?: object): node is TSTypeElement;
export function isTSConstructorType(node: object, opts?: object): node is TSConstructorType;
export function isTSDeclareFunction(node: object, opts?: object): node is TSDeclareFunction;
export function isTSDeclareMethod(node: object, opts?: object): node is TSDeclareMethod;
export function isTSEnumDeclaration(node: object, opts?: object): node is TSEnumDeclaration;
export function isTSEnumMember(node: object, opts?: object): node is TSEnumMember;
export function isTSExportAssignment(node: object, opts?: object): node is TSExportAssignment;
export function isTSExpressionWithTypeArguments(node: object, opts?: object): node is TSExpressionWithTypeArguments;
export function isTSExternalModuleReference(node: object, opts?: object): node is TSExternalModuleReference;
export function isTSFunctionType(node: object, opts?: object): node is TSFunctionType;
export function isTSImportEqualsDeclaration(node: object, opts?: object): node is TSImportEqualsDeclaration;
export function isTSIndexSignature(node: object, opts?: object): node is TSIndexSignature;
export function isTSIndexedAccessType(node: object, opts?: object): node is TSIndexedAccessType;
export function isTSInterfaceBody(node: object, opts?: object): node is TSInterfaceBody;
export function isTSInterfaceDeclaration(node: object, opts?: object): node is TSInterfaceDeclaration;
export function isTSIntersectionType(node: object, opts?: object): node is TSIntersectionType;
export function isTSLiteralType(node: object, opts?: object): node is TSLiteralType;
export function isTSMappedType(node: object, opts?: object): node is TSMappedType;
export function isTSMethodSignature(node: object, opts?: object): node is TSMethodSignature;
export function isTSModuleBlock(node: object, opts?: object): node is TSModuleBlock;
export function isTSModuleDeclaration(node: object, opts?: object): node is TSModuleDeclaration;
export function isTSNamespaceExportDeclaration(node: object, opts?: object): node is TSNamespaceExportDeclaration;
export function isTSNeverKeyword(node: object, opts?: object): node is TSNeverKeyword;
export function isTSNonNullExpression(node: object, opts?: object): node is TSNonNullExpression;
export function isTSNullKeyword(node: object, opts?: object): node is TSNullKeyword;
export function isTSNumberKeyword(node: object, opts?: object): node is TSNumberKeyword;
export function isTSObjectKeyword(node: object, opts?: object): node is TSObjectKeyword;
export function isTSParameterProperty(node: object, opts?: object): node is TSParameterProperty;
export function isTSParenthesizedType(node: object, opts?: object): node is TSParenthesizedType;
export function isTSPropertySignature(node: object, opts?: object): node is TSPropertySignature;
export function isTSQualifiedName(node: object, opts?: object): node is TSQualifiedName;
export function isTSStringKeyword(node: object, opts?: object): node is TSStringKeyword;
export function isTSSymbolKeyword(node: object, opts?: object): node is TSSymbolKeyword;
export function isTSThisType(node: object, opts?: object): node is TSThisType;
export function isTSTupleType(node: object, opts?: object): node is TSTupleType;
export function isTSTypeAliasDeclaration(node: object, opts?: object): node is TSTypeAliasDeclaration;
export function isTSTypeAnnotation(node: object, opts?: object): node is TSTypeAnnotation;
export function isTSTypeAssertion(node: object, opts?: object): node is TSTypeAssertion;
export function isTSTypeLiteral(node: object, opts?: object): node is TSTypeLiteral;
export function isTSTypeOperator(node: object, opts?: object): node is TSTypeOperator;
export function isTSTypeParameter(node: object, opts?: object): node is TSTypeParameter;
export function isTSTypeParameterDeclaration(node: object, opts?: object): node is TSTypeParameterDeclaration;
export function isTSTypeParameterInstantiation(node: object, opts?: object): node is TSTypeParameterInstantiation;
export function isTSTypePredicate(node: object, opts?: object): node is TSTypePredicate;
export function isTSTypeQuery(node: object, opts?: object): node is TSTypeQuery;
export function isTSTypeReference(node: object, opts?: object): node is TSTypeReference;
export function isTSUndefinedKeyword(node: object, opts?: object): node is TSUndefinedKeyword;
export function isTSUnionType(node: object, opts?: object): node is TSUnionType;
export function isTSVoidKeyword(node: object, opts?: object): node is TSVoidKeyword;

// React specific
export interface ReactHelpers {
    isCompatTag(tagName?: string): boolean;
    buildChildren(node: object): Node[];
}
export const react: ReactHelpers;

export function assertArrayExpression(node: object, opts?: object): void;
export function assertAssignmentExpression(node: object, opts?: object): void;
export function assertBinaryExpression(node: object, opts?: object): void;
export function assertDirective(node: object, opts?: object): void;
export function assertDirectiveLiteral(node: object, opts?: object): void;
export function assertBlockStatement(node: object, opts?: object): void;
export function assertBreakStatement(node: object, opts?: object): void;
export function assertCallExpression(node: object, opts?: object): void;
export function assertCatchClause(node: object, opts?: object): void;
export function assertConditionalExpression(node: object, opts?: object): void;
export function assertContinueStatement(node: object, opts?: object): void;
export function assertDebuggerStatement(node: object, opts?: object): void;
export function assertDoWhileStatement(node: object, opts?: object): void;
export function assertEmptyStatement(node: object, opts?: object): void;
export function assertExpressionStatement(node: object, opts?: object): void;
export function assertFile(node: object, opts?: object): void;
export function assertForInStatement(node: object, opts?: object): void;
export function assertForStatement(node: object, opts?: object): void;
export function assertFunctionDeclaration(node: object, opts?: object): void;
export function assertFunctionExpression(node: object, opts?: object): void;
export function assertIdentifier(node: object, opts?: object): void;
export function assertIfStatement(node: object, opts?: object): void;
export function assertLabeledStatement(node: object, opts?: object): void;
export function assertStringLiteral(node: object, opts?: object): void;
export function assertNumericLiteral(node: object, opts?: object): void;
export function assertNullLiteral(node: object, opts?: object): void;
export function assertBooleanLiteral(node: object, opts?: object): void;
export function assertRegExpLiteral(node: object, opts?: object): void;
export function assertLogicalExpression(node: object, opts?: object): void;
export function assertMemberExpression(node: object, opts?: object): void;
export function assertNewExpression(node: object, opts?: object): void;
export function assertProgram(node: object, opts?: object): void;
export function assertObjectExpression(node: object, opts?: object): void;
export function assertObjectMethod(node: object, opts?: object): void;
export function assertObjectProperty(node: object, opts?: object): void;
export function assertRestElement(node: object, opts?: object): void;
export function assertReturnStatement(node: object, opts?: object): void;
export function assertSequenceExpression(node: object, opts?: object): void;
export function assertSwitchCase(node: object, opts?: object): void;
export function assertSwitchStatement(node: object, opts?: object): void;
export function assertThisExpression(node: object, opts?: object): void;
export function assertThrowStatement(node: object, opts?: object): void;
export function assertTryStatement(node: object, opts?: object): void;
export function assertUnaryExpression(node: object, opts?: object): void;
export function assertUpdateExpression(node: object, opts?: object): void;
export function assertVariableDeclaration(node: object, opts?: object): void;
export function assertVariableDeclarator(node: object, opts?: object): void;
export function assertWhileStatement(node: object, opts?: object): void;
export function assertWithStatement(node: object, opts?: object): void;
export function assertAssignmentPattern(node: object, opts?: object): void;
export function assertArrayPattern(node: object, opts?: object): void;
export function assertArrowFunctionExpression(node: object, opts?: object): void;
export function assertClassBody(node: object, opts?: object): void;
export function assertClassDeclaration(node: object, opts?: object): void;
export function assertClassExpression(node: object, opts?: object): void;
export function assertExportAllDeclaration(node: object, opts?: object): void;
export function assertExportDefaultDeclaration(node: object, opts?: object): void;
export function assertExportNamedDeclaration(node: object, opts?: object): void;
export function assertExportSpecifier(node: object, opts?: object): void;
export function assertForOfStatement(node: object, opts?: object): void;
export function assertImportDeclaration(node: object, opts?: object): void;
export function assertImportDefaultSpecifier(node: object, opts?: object): void;
export function assertImportNamespaceSpecifier(node: object, opts?: object): void;
export function assertImportSpecifier(node: object, opts?: object): void;
export function assertMetaProperty(node: object, opts?: object): void;
export function assertClassMethod(node: object, opts?: object): void;
export function assertObjectPattern(node: object, opts?: object): void;
export function assertSpreadElement(node: object, opts?: object): void;
export function assertSuper(node: object, opts?: object): void;
export function assertTaggedTemplateExpression(node: object, opts?: object): void;
export function assertTemplateElement(node: object, opts?: object): void;
export function assertTemplateLiteral(node: object, opts?: object): void;
export function assertYieldExpression(node: object, opts?: object): void;
export function assertAnyTypeAnnotation(node: object, opts?: object): void;
export function assertArrayTypeAnnotation(node: object, opts?: object): void;
export function assertBooleanTypeAnnotation(node: object, opts?: object): void;
export function assertBooleanLiteralTypeAnnotation(node: object, opts?: object): void;
export function assertNullLiteralTypeAnnotation(node: object, opts?: object): void;
export function assertClassImplements(node: object, opts?: object): void;
export function assertClassProperty(node: object, opts?: object): void;
export function assertDeclareClass(node: object, opts?: object): void;
export function assertDeclareFunction(node: object, opts?: object): void;
export function assertDeclareInterface(node: object, opts?: object): void;
export function assertDeclareModule(node: object, opts?: object): void;
export function assertDeclareTypeAlias(node: object, opts?: object): void;
export function assertDeclareVariable(node: object, opts?: object): void;
export function assertExistentialTypeParam(node: object, opts?: object): void;
export function assertFunctionTypeAnnotation(node: object, opts?: object): void;
export function assertFunctionTypeParam(node: object, opts?: object): void;
export function assertGenericTypeAnnotation(node: object, opts?: object): void;
export function assertInterfaceExtends(node: object, opts?: object): void;
export function assertInterfaceDeclaration(node: object, opts?: object): void;
export function assertIntersectionTypeAnnotation(node: object, opts?: object): void;
export function assertMixedTypeAnnotation(node: object, opts?: object): void;
export function assertNullableTypeAnnotation(node: object, opts?: object): void;
export function assertNumericLiteralTypeAnnotation(node: object, opts?: object): void;
export function assertNumberTypeAnnotation(node: object, opts?: object): void;
export function assertStringLiteralTypeAnnotation(node: object, opts?: object): void;
export function assertStringTypeAnnotation(node: object, opts?: object): void;
export function assertThisTypeAnnotation(node: object, opts?: object): void;
export function assertTupleTypeAnnotation(node: object, opts?: object): void;
export function assertTypeofTypeAnnotation(node: object, opts?: object): void;
export function assertTypeAlias(node: object, opts?: object): void;
export function assertTypeAnnotation(node: object, opts?: object): void;
export function assertTypeCastExpression(node: object, opts?: object): void;
export function assertTypeParameter(node: object, opts?: object): void;
export function assertTypeParameterDeclaration(node: object, opts?: object): void;
export function assertTypeParameterInstantiation(node: object, opts?: object): void;
export function assertObjectTypeAnnotation(node: object, opts?: object): void;
export function assertObjectTypeCallProperty(node: object, opts?: object): void;
export function assertObjectTypeIndexer(node: object, opts?: object): void;
export function assertObjectTypeProperty(node: object, opts?: object): void;
export function assertQualifiedTypeIdentifier(node: object, opts?: object): void;
export function assertUnionTypeAnnotation(node: object, opts?: object): void;
export function assertVoidTypeAnnotation(node: object, opts?: object): void;
export function assertJSXAttribute(node: object, opts?: object): void;
export function assertJSXClosingElement(node: object, opts?: object): void;
export function assertJSXElement(node: object, opts?: object): void;
export function assertJSXEmptyExpression(node: object, opts?: object): void;
export function assertJSXExpressionContainer(node: object, opts?: object): void;
export function assertJSXIdentifier(node: object, opts?: object): void;
export function assertJSXMemberExpression(node: object, opts?: object): void;
export function assertJSXNamespacedName(node: object, opts?: object): void;
export function assertJSXOpeningElement(node: object, opts?: object): void;
export function assertJSXSpreadAttribute(node: object, opts?: object): void;
export function assertJSXText(node: object, opts?: object): void;
export function assertNoop(node: object, opts?: object): void;
export function assertParenthesizedExpression(node: object, opts?: object): void;
export function assertAwaitExpression(node: object, opts?: object): void;
export function assertBindExpression(node: object, opts?: object): void;
export function assertDecorator(node: object, opts?: object): void;
export function assertDoExpression(node: object, opts?: object): void;
export function assertExportDefaultSpecifier(node: object, opts?: object): void;
export function assertExportNamespaceSpecifier(node: object, opts?: object): void;
export function assertRestProperty(node: object, opts?: object): void;
export function assertSpreadProperty(node: object, opts?: object): void;
export function assertExpression(node: object, opts?: object): void;
export function assertBinary(node: object, opts?: object): void;
export function assertScopable(node: object, opts?: object): void;
export function assertBlockParent(node: object, opts?: object): void;
export function assertBlock(node: object, opts?: object): void;
export function assertStatement(node: object, opts?: object): void;
export function assertTerminatorless(node: object, opts?: object): void;
export function assertCompletionStatement(node: object, opts?: object): void;
export function assertConditional(node: object, opts?: object): void;
export function assertLoop(node: object, opts?: object): void;
export function assertWhile(node: object, opts?: object): void;
export function assertExpressionWrapper(node: object, opts?: object): void;
export function assertFor(node: object, opts?: object): void;
export function assertForXStatement(node: object, opts?: object): void;
export function assertFunction(node: object, opts?: object): void;
export function assertFunctionParent(node: object, opts?: object): void;
export function assertPureish(node: object, opts?: object): void;
export function assertDeclaration(node: object, opts?: object): void;
export function assertLVal(node: object, opts?: object): void;
export function assertLiteral(node: object, opts?: object): void;
export function assertImmutable(node: object, opts?: object): void;
export function assertUserWhitespacable(node: object, opts?: object): void;
export function assertMethod(node: object, opts?: object): void;
export function assertObjectMember(node: object, opts?: object): void;
export function assertProperty(node: object, opts?: object): void;
export function assertUnaryLike(node: object, opts?: object): void;
export function assertPattern(node: object, opts?: object): void;
export function assertClass(node: object, opts?: object): void;
export function assertModuleDeclaration(node: object, opts?: object): void;
export function assertExportDeclaration(node: object, opts?: object): void;
export function assertModuleSpecifier(node: object, opts?: object): void;
export function assertFlow(node: object, opts?: object): void;
export function assertFlowBaseAnnotation(node: object, opts?: object): void;
export function assertFlowDeclaration(node: object, opts?: object): void;
export function assertJSX(node: object, opts?: object): void;
export function assertNumberLiteral(node: object, opts?: object): void;
export function assertRegexLiteral(node: object, opts?: object): void;

export function assertTSAnyKeyword(node: object, opts?: object): void;
export function assertTSArrayType(node: object, opts?: object): void;
export function assertTSAsExpression(node: object, opts?: object): void;
export function assertTSBooleanKeyword(node: object, opts?: object): void;
export function assertTSCallSignatureDeclaration(node: object, opts?: object): void;
export function assertTSConstructSignatureDeclaration(node: object, opts?: object): void;
export function assertTSConstructorType(node: object, opts?: object): void;
export function assertTSDeclareFunction(node: object, opts?: object): void;
export function assertTSDeclareMethod(node: object, opts?: object): void;
export function assertTSEnumDeclaration(node: object, opts?: object): void;
export function assertTSEnumMember(node: object, opts?: object): void;
export function assertTSExportAssignment(node: object, opts?: object): void;
export function assertTSExpressionWithTypeArguments(node: object, opts?: object): void;
export function assertTSExternalModuleReference(node: object, opts?: object): void;
export function assertTSFunctionType(node: object, opts?: object): void;
export function assertTSImportEqualsDeclaration(node: object, opts?: object): void;
export function assertTSIndexSignature(node: object, opts?: object): void;
export function assertTSIndexedAccessType(node: object, opts?: object): void;
export function assertTSInterfaceBody(node: object, opts?: object): void;
export function assertTSInterfaceDeclaration(node: object, opts?: object): void;
export function assertTSIntersectionType(node: object, opts?: object): void;
export function assertTSLiteralType(node: object, opts?: object): void;
export function assertTSMappedType(node: object, opts?: object): void;
export function assertTSMethodSignature(node: object, opts?: object): void;
export function assertTSModuleBlock(node: object, opts?: object): void;
export function assertTSModuleDeclaration(node: object, opts?: object): void;
export function assertTSNamespaceExportDeclaration(node: object, opts?: object): void;
export function assertTSNeverKeyword(node: object, opts?: object): void;
export function assertTSNonNullExpression(node: object, opts?: object): void;
export function assertTSNullKeyword(node: object, opts?: object): void;
export function assertTSNumberKeyword(node: object, opts?: object): void;
export function assertTSObjectKeyword(node: object, opts?: object): void;
export function assertTSParameterProperty(node: object, opts?: object): void;
export function assertTSParenthesizedType(node: object, opts?: object): void;
export function assertTSPropertySignature(node: object, opts?: object): void;
export function assertTSQualifiedName(node: object, opts?: object): void;
export function assertTSStringKeyword(node: object, opts?: object): void;
export function assertTSSymbolKeyword(node: object, opts?: object): void;
export function assertTSThisType(node: object, opts?: object): void;
export function assertTSTupleType(node: object, opts?: object): void;
export function assertTSTypeAliasDeclaration(node: object, opts?: object): void;
export function assertTSTypeAnnotation(node: object, opts?: object): void;
export function assertTSTypeAssertion(node: object, opts?: object): void;
export function assertTSTypeLiteral(node: object, opts?: object): void;
export function assertTSTypeOperator(node: object, opts?: object): void;
export function assertTSTypeParameter(node: object, opts?: object): void;
export function assertTSTypeParameterDeclaration(node: object, opts?: object): void;
export function assertTSTypeParameterInstantiation(node: object, opts?: object): void;
export function assertTSTypePredicate(node: object, opts?: object): void;
export function assertTSTypeQuery(node: object, opts?: object): void;
export function assertTSTypeReference(node: object, opts?: object): void;
export function assertTSUndefinedKeyword(node: object, opts?: object): void;
export function assertTSUnionType(node: object, opts?: object): void;
export function assertTSVoidKeyword(node: object, opts?: object): void;
