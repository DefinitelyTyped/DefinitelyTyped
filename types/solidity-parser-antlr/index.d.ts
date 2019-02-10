// Type definitions for solidity-parser-antlr 0.2
// Project: https://github.com/federicobond/solidity-parser-antlr
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 Alex Browne <https://github.com/albrow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface LineColumn {
    line: number;
    column: number;
}
export interface Location {
    start: LineColumn;
    end: LineColumn;
}
export interface BaseASTNode {
    type: string;
    range?: [number, number];
    loc?: Location;
}
export interface SourceUnit extends BaseASTNode {
    children: ASTNode[]; // TODO: Can be more precise
} // tslint:disable-line:no-empty-interface
export interface PragmaDirective extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface PragmaName extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface PragmaValue extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface Version extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface VersionOperator extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface VersionConstraint extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ImportDeclaration extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ImportDirective extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ContractDefinition extends BaseASTNode {
    name: string;
    subNodes: ASTNode[]; // TODO: Can be more precise
}
export interface InheritanceSpecifier extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ContractPart extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface StateVariableDeclaration extends BaseASTNode {
    variables: VariableDeclaration[];
}
export interface UsingForDeclaration extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface StructDefinition extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ModifierDefinition extends BaseASTNode {
    name: string;
}
export interface ModifierInvocation extends BaseASTNode {
    name: string;
}
export interface FunctionDefinition extends BaseASTNode {
    name: string;
    parameters: ParameterList;
    body: Block | null;
}
export interface ReturnParameters extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ModifierList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface EventDefinition extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface EnumValue extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface EnumDefinition extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ParameterList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface Parameter extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface EventParameterList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface EventParameter extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface FunctionTypeParameterList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface FunctionTypeParameter extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface VariableDeclaration extends BaseASTNode {
    visibility: "public" | "private";
    isStateVar: boolean;
}
export interface TypeName extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface UserDefinedTypeName extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface Mapping extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface FunctionTypeName extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface StorageLocation extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface StateMutability extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface Block extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface Statement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ExpressionStatement extends BaseASTNode {
    expression: ASTNode;
}
export interface IfStatement extends BaseASTNode {
    trueBody: ASTNode;
    falseBody: ASTNode;
}
export interface WhileStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface SimpleStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ForStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface InlineAssemblyStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface DoWhileStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ContinueStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface BreakStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ReturnStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ThrowStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface VariableDeclarationStatement extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface IdentifierList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ElementaryTypeName extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface Expression extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface PrimaryExpression extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ExpressionList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface NameValueList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface NameValue extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface FunctionCallArguments extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyBlock extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyItem extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyExpression extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyCall extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyLocalDefinition extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyAssignment extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyIdentifierOrList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyIdentifierList extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyStackAssignment extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface LabelDefinition extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblySwitch extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyCase extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyFunctionDefinition extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyFunctionReturns extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyFor extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyIf extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface AssemblyLiteral extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface SubAssembly extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface TupleExpression extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface ElementaryTypeNameExpression extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface NumberLiteral extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export interface Identifier extends BaseASTNode {} // tslint:disable-line:no-empty-interface
export type BinOp =
    | "+"
    | "-"
    | "*"
    | "/"
    | "**"
    | "%"
    | "<<"
    | ">>"
    | "&&"
    | "||"
    | "&"
    | "|"
    | "^"
    | "<"
    | ">"
    | "<="
    | ">="
    | "=="
    | "!="
    | "="
    | "|="
    | "^="
    | "&="
    | "<<="
    | ">>="
    | "+="
    | "-="
    | "*="
    | "/="
    | "%=";
export interface BinaryOperation extends BaseASTNode {
    left: ASTNode;
    right: ASTNode;
    operator: BinOp;
}
export interface Conditional extends BaseASTNode {
    trueExpression: ASTNode;
    falseExpression: ASTNode;
}

export type ASTNode =
    | SourceUnit
    | PragmaDirective
    | PragmaName
    | PragmaValue
    | Version
    | VersionOperator
    | VersionConstraint
    | ImportDeclaration
    | ImportDirective
    | ContractDefinition
    | InheritanceSpecifier
    | ContractPart
    | StateVariableDeclaration
    | UsingForDeclaration
    | StructDefinition
    | ModifierDefinition
    | ModifierInvocation
    | FunctionDefinition
    | ReturnParameters
    | ModifierList
    | EventDefinition
    | EnumValue
    | EnumDefinition
    | ParameterList
    | Parameter
    | EventParameterList
    | EventParameter
    | FunctionTypeParameterList
    | FunctionTypeParameter
    | VariableDeclaration
    | TypeName
    | UserDefinedTypeName
    | Mapping
    | FunctionTypeName
    | StorageLocation
    | StateMutability
    | Block
    | Statement
    | ExpressionStatement
    | IfStatement
    | WhileStatement
    | SimpleStatement
    | ForStatement
    | InlineAssemblyStatement
    | DoWhileStatement
    | ContinueStatement
    | BreakStatement
    | ReturnStatement
    | ThrowStatement
    | VariableDeclarationStatement
    | IdentifierList
    | ElementaryTypeName
    | Expression
    | PrimaryExpression
    | ExpressionList
    | NameValueList
    | NameValue
    | FunctionCallArguments
    | AssemblyBlock
    | AssemblyItem
    | AssemblyExpression
    | AssemblyCall
    | AssemblyLocalDefinition
    | AssemblyAssignment
    | AssemblyIdentifierOrList
    | AssemblyIdentifierList
    | AssemblyStackAssignment
    | LabelDefinition
    | AssemblySwitch
    | AssemblyCase
    | AssemblyFunctionDefinition
    | AssemblyFunctionReturns
    | AssemblyFor
    | AssemblyIf
    | AssemblyLiteral
    | SubAssembly
    | TupleExpression
    | ElementaryTypeNameExpression
    | NumberLiteral
    | Identifier
    | BinaryOperation
    | Conditional;
export interface Visitor {
    SourceUnit?: (node: SourceUnit) => any;
    PragmaDirective?: (node: PragmaDirective) => any;
    PragmaName?: (node: PragmaName) => any;
    PragmaValue?: (node: PragmaValue) => any;
    Version?: (node: Version) => any;
    VersionOperator?: (node: VersionOperator) => any;
    VersionConstraint?: (node: VersionConstraint) => any;
    ImportDeclaration?: (node: ImportDeclaration) => any;
    ImportDirective?: (node: ImportDirective) => any;
    ContractDefinition?: (node: ContractDefinition) => any;
    InheritanceSpecifier?: (node: InheritanceSpecifier) => any;
    ContractPart?: (node: ContractPart) => any;
    StateVariableDeclaration?: (node: StateVariableDeclaration) => any;
    UsingForDeclaration?: (node: UsingForDeclaration) => any;
    StructDefinition?: (node: StructDefinition) => any;
    ModifierDefinition?: (node: ModifierDefinition) => any;
    ModifierInvocation?: (node: ModifierInvocation) => any;
    FunctionDefinition?: (node: FunctionDefinition) => any;
    ReturnParameters?: (node: ReturnParameters) => any;
    ModifierList?: (node: ModifierList) => any;
    EventDefinition?: (node: EventDefinition) => any;
    EnumValue?: (node: EnumValue) => any;
    EnumDefinition?: (node: EnumDefinition) => any;
    ParameterList?: (node: ParameterList) => any;
    Parameter?: (node: Parameter) => any;
    EventParameterList?: (node: EventParameterList) => any;
    EventParameter?: (node: EventParameter) => any;
    FunctionTypeParameterList?: (node: FunctionTypeParameterList) => any;
    FunctionTypeParameter?: (node: FunctionTypeParameter) => any;
    VariableDeclaration?: (node: VariableDeclaration) => any;
    TypeName?: (node: TypeName) => any;
    UserDefinedTypeName?: (node: UserDefinedTypeName) => any;
    Mapping?: (node: Mapping) => any;
    FunctionTypeName?: (node: FunctionTypeName) => any;
    StorageLocation?: (node: StorageLocation) => any;
    StateMutability?: (node: StateMutability) => any;
    Block?: (node: Block) => any;
    Statement?: (node: Statement) => any;
    ExpressionStatement?: (node: ExpressionStatement) => any;
    IfStatement?: (node: IfStatement) => any;
    WhileStatement?: (node: WhileStatement) => any;
    SimpleStatement?: (node: SimpleStatement) => any;
    ForStatement?: (node: ForStatement) => any;
    InlineAssemblyStatement?: (node: InlineAssemblyStatement) => any;
    DoWhileStatement?: (node: DoWhileStatement) => any;
    ContinueStatement?: (node: ContinueStatement) => any;
    BreakStatement?: (node: BreakStatement) => any;
    ReturnStatement?: (node: ReturnStatement) => any;
    ThrowStatement?: (node: ThrowStatement) => any;
    VariableDeclarationStatement?: (node: VariableDeclarationStatement) => any;
    IdentifierList?: (node: IdentifierList) => any;
    ElementaryTypeName?: (node: ElementaryTypeName) => any;
    Expression?: (node: Expression) => any;
    PrimaryExpression?: (node: PrimaryExpression) => any;
    ExpressionList?: (node: ExpressionList) => any;
    NameValueList?: (node: NameValueList) => any;
    NameValue?: (node: NameValue) => any;
    FunctionCallArguments?: (node: FunctionCallArguments) => any;
    AssemblyBlock?: (node: AssemblyBlock) => any;
    AssemblyItem?: (node: AssemblyItem) => any;
    AssemblyExpression?: (node: AssemblyExpression) => any;
    AssemblyCall?: (node: AssemblyCall) => any;
    AssemblyLocalDefinition?: (node: AssemblyLocalDefinition) => any;
    AssemblyAssignment?: (node: AssemblyAssignment) => any;
    AssemblyIdentifierOrList?: (node: AssemblyIdentifierOrList) => any;
    AssemblyIdentifierList?: (node: AssemblyIdentifierList) => any;
    AssemblyStackAssignment?: (node: AssemblyStackAssignment) => any;
    LabelDefinition?: (node: LabelDefinition) => any;
    AssemblySwitch?: (node: AssemblySwitch) => any;
    AssemblyCase?: (node: AssemblyCase) => any;
    AssemblyFunctionDefinition?: (node: AssemblyFunctionDefinition) => any;
    AssemblyFunctionReturns?: (node: AssemblyFunctionReturns) => any;
    AssemblyFor?: (node: AssemblyFor) => any;
    AssemblyIf?: (node: AssemblyIf) => any;
    AssemblyLiteral?: (node: AssemblyLiteral) => any;
    SubAssembly?: (node: SubAssembly) => any;
    TupleExpression?: (node: TupleExpression) => any;
    ElementaryTypeNameExpression?: (node: ElementaryTypeNameExpression) => any;
    NumberLiteral?: (node: NumberLiteral) => any;
    Identifier?: (node: Identifier) => any;
    BinaryOperation?: (node: BinaryOperation) => any;
    Conditional?: (node: Conditional) => any;
}
export interface ParserOpts {
    tolerant?: boolean;
    range?: boolean;
    loc?: boolean;
}
export function parse(sourceCode: string, parserOpts: ParserOpts): ASTNode;
export function visit(ast: ASTNode, visitor: Visitor): void;
