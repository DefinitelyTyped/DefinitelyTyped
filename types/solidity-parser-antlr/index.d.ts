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
export interface SourceUnit extends BaseASTNode {} // tslint:disable-line:no-empty-interface
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
    SourceUnit?: (node: SourceUnit) => void;
    PragmaDirective?: (node: PragmaDirective) => void;
    PragmaName?: (node: PragmaName) => void;
    PragmaValue?: (node: PragmaValue) => void;
    Version?: (node: Version) => void;
    VersionOperator?: (node: VersionOperator) => void;
    VersionConstraint?: (node: VersionConstraint) => void;
    ImportDeclaration?: (node: ImportDeclaration) => void;
    ImportDirective?: (node: ImportDirective) => void;
    ContractDefinition?: (node: ContractDefinition) => void;
    InheritanceSpecifier?: (node: InheritanceSpecifier) => void;
    ContractPart?: (node: ContractPart) => void;
    StateVariableDeclaration?: (node: StateVariableDeclaration) => void;
    UsingForDeclaration?: (node: UsingForDeclaration) => void;
    StructDefinition?: (node: StructDefinition) => void;
    ModifierDefinition?: (node: ModifierDefinition) => void;
    ModifierInvocation?: (node: ModifierInvocation) => void;
    FunctionDefinition?: (node: FunctionDefinition) => void;
    ReturnParameters?: (node: ReturnParameters) => void;
    ModifierList?: (node: ModifierList) => void;
    EventDefinition?: (node: EventDefinition) => void;
    EnumValue?: (node: EnumValue) => void;
    EnumDefinition?: (node: EnumDefinition) => void;
    ParameterList?: (node: ParameterList) => void;
    Parameter?: (node: Parameter) => void;
    EventParameterList?: (node: EventParameterList) => void;
    EventParameter?: (node: EventParameter) => void;
    FunctionTypeParameterList?: (node: FunctionTypeParameterList) => void;
    FunctionTypeParameter?: (node: FunctionTypeParameter) => void;
    VariableDeclaration?: (node: VariableDeclaration) => void;
    TypeName?: (node: TypeName) => void;
    UserDefinedTypeName?: (node: UserDefinedTypeName) => void;
    Mapping?: (node: Mapping) => void;
    FunctionTypeName?: (node: FunctionTypeName) => void;
    StorageLocation?: (node: StorageLocation) => void;
    StateMutability?: (node: StateMutability) => void;
    Block?: (node: Block) => void;
    Statement?: (node: Statement) => void;
    ExpressionStatement?: (node: ExpressionStatement) => void;
    IfStatement?: (node: IfStatement) => void;
    WhileStatement?: (node: WhileStatement) => void;
    SimpleStatement?: (node: SimpleStatement) => void;
    ForStatement?: (node: ForStatement) => void;
    InlineAssemblyStatement?: (node: InlineAssemblyStatement) => void;
    DoWhileStatement?: (node: DoWhileStatement) => void;
    ContinueStatement?: (node: ContinueStatement) => void;
    BreakStatement?: (node: BreakStatement) => void;
    ReturnStatement?: (node: ReturnStatement) => void;
    ThrowStatement?: (node: ThrowStatement) => void;
    VariableDeclarationStatement?: (node: VariableDeclarationStatement) => void;
    IdentifierList?: (node: IdentifierList) => void;
    ElementaryTypeName?: (node: ElementaryTypeName) => void;
    Expression?: (node: Expression) => void;
    PrimaryExpression?: (node: PrimaryExpression) => void;
    ExpressionList?: (node: ExpressionList) => void;
    NameValueList?: (node: NameValueList) => void;
    NameValue?: (node: NameValue) => void;
    FunctionCallArguments?: (node: FunctionCallArguments) => void;
    AssemblyBlock?: (node: AssemblyBlock) => void;
    AssemblyItem?: (node: AssemblyItem) => void;
    AssemblyExpression?: (node: AssemblyExpression) => void;
    AssemblyCall?: (node: AssemblyCall) => void;
    AssemblyLocalDefinition?: (node: AssemblyLocalDefinition) => void;
    AssemblyAssignment?: (node: AssemblyAssignment) => void;
    AssemblyIdentifierOrList?: (node: AssemblyIdentifierOrList) => void;
    AssemblyIdentifierList?: (node: AssemblyIdentifierList) => void;
    AssemblyStackAssignment?: (node: AssemblyStackAssignment) => void;
    LabelDefinition?: (node: LabelDefinition) => void;
    AssemblySwitch?: (node: AssemblySwitch) => void;
    AssemblyCase?: (node: AssemblyCase) => void;
    AssemblyFunctionDefinition?: (node: AssemblyFunctionDefinition) => void;
    AssemblyFunctionReturns?: (node: AssemblyFunctionReturns) => void;
    AssemblyFor?: (node: AssemblyFor) => void;
    AssemblyIf?: (node: AssemblyIf) => void;
    AssemblyLiteral?: (node: AssemblyLiteral) => void;
    SubAssembly?: (node: SubAssembly) => void;
    TupleExpression?: (node: TupleExpression) => void;
    ElementaryTypeNameExpression?: (node: ElementaryTypeNameExpression) => void;
    NumberLiteral?: (node: NumberLiteral) => void;
    Identifier?: (node: Identifier) => void;
    BinaryOperation?: (node: BinaryOperation) => void;
    Conditional?: (node: Conditional) => void;
}
export interface ParserOpts {
    tolerant?: boolean;
    range?: boolean;
    loc?: boolean;
}
export function parse(sourceCode: string, parserOpts: ParserOpts): ASTNode;
export function visit(ast: ASTNode, visitor: Visitor): void;
