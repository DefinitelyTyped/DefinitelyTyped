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
    SourceUnit?: (node: SourceUnit) => false | any;
    PragmaDirective?: (node: PragmaDirective) => false | any;
    PragmaName?: (node: PragmaName) => false | any;
    PragmaValue?: (node: PragmaValue) => false | any;
    Version?: (node: Version) => false | any;
    VersionOperator?: (node: VersionOperator) => false | any;
    VersionConstraint?: (node: VersionConstraint) => false | any;
    ImportDeclaration?: (node: ImportDeclaration) => false | any;
    ImportDirective?: (node: ImportDirective) => false | any;
    ContractDefinition?: (node: ContractDefinition) => false | any;
    InheritanceSpecifier?: (node: InheritanceSpecifier) => false | any;
    ContractPart?: (node: ContractPart) => false | any;
    StateVariableDeclaration?: (node: StateVariableDeclaration) => false | any;
    UsingForDeclaration?: (node: UsingForDeclaration) => false | any;
    StructDefinition?: (node: StructDefinition) => false | any;
    ModifierDefinition?: (node: ModifierDefinition) => false | any;
    ModifierInvocation?: (node: ModifierInvocation) => false | any;
    FunctionDefinition?: (node: FunctionDefinition) => false | any;
    ReturnParameters?: (node: ReturnParameters) => false | any;
    ModifierList?: (node: ModifierList) => false | any;
    EventDefinition?: (node: EventDefinition) => false | any;
    EnumValue?: (node: EnumValue) => false | any;
    EnumDefinition?: (node: EnumDefinition) => false | any;
    ParameterList?: (node: ParameterList) => false | any;
    Parameter?: (node: Parameter) => false | any;
    EventParameterList?: (node: EventParameterList) => false | any;
    EventParameter?: (node: EventParameter) => false | any;
    FunctionTypeParameterList?: (node: FunctionTypeParameterList) => false | any;
    FunctionTypeParameter?: (node: FunctionTypeParameter) => false | any;
    VariableDeclaration?: (node: VariableDeclaration) => false | any;
    TypeName?: (node: TypeName) => false | any;
    UserDefinedTypeName?: (node: UserDefinedTypeName) => false | any;
    Mapping?: (node: Mapping) => false | any;
    FunctionTypeName?: (node: FunctionTypeName) => false | any;
    StorageLocation?: (node: StorageLocation) => false | any;
    StateMutability?: (node: StateMutability) => false | any;
    Block?: (node: Block) => false | any;
    Statement?: (node: Statement) => false | any;
    ExpressionStatement?: (node: ExpressionStatement) => false | any;
    IfStatement?: (node: IfStatement) => false | any;
    WhileStatement?: (node: WhileStatement) => false | any;
    SimpleStatement?: (node: SimpleStatement) => false | any;
    ForStatement?: (node: ForStatement) => false | any;
    InlineAssemblyStatement?: (node: InlineAssemblyStatement) => false | any;
    DoWhileStatement?: (node: DoWhileStatement) => false | any;
    ContinueStatement?: (node: ContinueStatement) => false | any;
    BreakStatement?: (node: BreakStatement) => false | any;
    ReturnStatement?: (node: ReturnStatement) => false | any;
    ThrowStatement?: (node: ThrowStatement) => false | any;
    VariableDeclarationStatement?: (node: VariableDeclarationStatement) => false | any;
    IdentifierList?: (node: IdentifierList) => false | any;
    ElementaryTypeName?: (node: ElementaryTypeName) => false | any;
    Expression?: (node: Expression) => false | any;
    PrimaryExpression?: (node: PrimaryExpression) => false | any;
    ExpressionList?: (node: ExpressionList) => false | any;
    NameValueList?: (node: NameValueList) => false | any;
    NameValue?: (node: NameValue) => false | any;
    FunctionCallArguments?: (node: FunctionCallArguments) => false | any;
    AssemblyBlock?: (node: AssemblyBlock) => false | any;
    AssemblyItem?: (node: AssemblyItem) => false | any;
    AssemblyExpression?: (node: AssemblyExpression) => false | any;
    AssemblyCall?: (node: AssemblyCall) => false | any;
    AssemblyLocalDefinition?: (node: AssemblyLocalDefinition) => false | any;
    AssemblyAssignment?: (node: AssemblyAssignment) => false | any;
    AssemblyIdentifierOrList?: (node: AssemblyIdentifierOrList) => false | any;
    AssemblyIdentifierList?: (node: AssemblyIdentifierList) => false | any;
    AssemblyStackAssignment?: (node: AssemblyStackAssignment) => false | any;
    LabelDefinition?: (node: LabelDefinition) => false | any;
    AssemblySwitch?: (node: AssemblySwitch) => false | any;
    AssemblyCase?: (node: AssemblyCase) => false | any;
    AssemblyFunctionDefinition?: (node: AssemblyFunctionDefinition) => false | any;
    AssemblyFunctionReturns?: (node: AssemblyFunctionReturns) => false | any;
    AssemblyFor?: (node: AssemblyFor) => false | any;
    AssemblyIf?: (node: AssemblyIf) => false | any;
    AssemblyLiteral?: (node: AssemblyLiteral) => false | any;
    SubAssembly?: (node: SubAssembly) => false | any;
    TupleExpression?: (node: TupleExpression) => false | any;
    ElementaryTypeNameExpression?: (node: ElementaryTypeNameExpression) => false | any;
    NumberLiteral?: (node: NumberLiteral) => false | any;
    Identifier?: (node: Identifier) => false | any;
    BinaryOperation?: (node: BinaryOperation) => false | any;
    Conditional?: (node: Conditional) => false | any;
}
export interface ParserOpts {
    tolerant?: boolean;
    range?: boolean;
    loc?: boolean;
}
export function parse(sourceCode: string, parserOpts: ParserOpts): ASTNode;
export function visit(ast: ASTNode, visitor: Visitor): void;
