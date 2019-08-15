// Type definitions for solidity-parser-antlr 0.2
// Project: https://github.com/federicobond/solidity-parser-antlr
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 Alex Browne <https://github.com/albrow>
//                 Xiao Liang <https://github.com/yxliang01>
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

// Note: This should be consistent with the definition of type ASTNode
export type ASTNodeTypeString = 'SourceUnit'
| 'PragmaDirective'
| 'PragmaName'
| 'PragmaValue'
| 'Version'
| 'VersionOperator'
| 'VersionConstraint'
| 'ImportDeclaration'
| 'ImportDirective'
| 'ContractDefinition'
| 'InheritanceSpecifier'
| 'ContractPart'
| 'StateVariableDeclaration'
| 'UsingForDeclaration'
| 'StructDefinition'
| 'ModifierDefinition'
| 'ModifierInvocation'
| 'FunctionDefinition'
| 'ReturnParameters'
| 'ModifierList'
| 'EventDefinition'
| 'EnumValue'
| 'EnumDefinition'
| 'ParameterList'
| 'Parameter'
| 'EventParameterList'
| 'EventParameter'
| 'FunctionTypeParameterList'
| 'FunctionTypeParameter'
| 'VariableDeclaration'
| 'TypeName'
| 'UserDefinedTypeName'
| 'Mapping'
| 'FunctionTypeName'
| 'StorageLocation'
| 'StateMutability'
| 'Block'
| 'Statement'
| 'ExpressionStatement'
| 'IfStatement'
| 'WhileStatement'
| 'SimpleStatement'
| 'ForStatement'
| 'InlineAssemblyStatement'
| 'DoWhileStatement'
| 'ContinueStatement'
| 'BreakStatement'
| 'ReturnStatement'
| 'ThrowStatement'
| 'VariableDeclarationStatement'
| 'IdentifierList'
| 'ElementaryTypeName'
| 'Expression'
| 'PrimaryExpression'
| 'ExpressionList'
| 'NameValueList'
| 'NameValue'
| 'FunctionCallArguments'
| 'AssemblyBlock'
| 'AssemblyItem'
| 'AssemblyExpression'
| 'AssemblyCall'
| 'AssemblyLocalDefinition'
| 'AssemblyAssignment'
| 'AssemblyIdentifierOrList'
| 'AssemblyIdentifierList'
| 'AssemblyStackAssignment'
| 'LabelDefinition'
| 'AssemblySwitch'
| 'AssemblyCase'
| 'AssemblyFunctionDefinition'
| 'AssemblyFunctionReturns'
| 'AssemblyFor'
| 'AssemblyIf'
| 'AssemblyLiteral'
| 'SubAssembly'
| 'TupleExpression'
| 'ElementaryTypeNameExpression'
| 'NumberLiteral'
| 'Identifier'
| 'BinaryOperation'
| 'Conditional';

export interface BaseASTNode {
    type: ASTNodeTypeString;
    range?: [number, number];
    loc?: Location;
}
export interface SourceUnit extends BaseASTNode {
    type: 'SourceUnit';
    children: ASTNode[]; // TODO: Can be more precise
} // tslint:disable-line:no-empty-interface
export interface PragmaDirective extends BaseASTNode { type: 'PragmaDirective'; }
export interface PragmaName extends BaseASTNode { type: 'PragmaName'; }
export interface PragmaValue extends BaseASTNode { type: 'PragmaValue'; }
export interface Version extends BaseASTNode { type: 'Version'; }
export interface VersionOperator extends BaseASTNode { type: 'VersionOperator'; }
export interface VersionConstraint extends BaseASTNode { type: 'VersionConstraint'; }
export interface ImportDeclaration extends BaseASTNode { type: 'ImportDeclaration'; }
export interface ImportDirective extends BaseASTNode { type: 'ImportDirective'; }
export interface ContractDefinition extends BaseASTNode {
    type: 'ContractDefinition';
    name: string;
    subNodes: ASTNode[]; // TODO: Can be more precise
}
export interface InheritanceSpecifier extends BaseASTNode { type: 'InheritanceSpecifier'; }
export interface ContractPart extends BaseASTNode { type: 'ContractPart'; }
export interface StateVariableDeclaration extends BaseASTNode {
    type: 'StateVariableDeclaration';
    variables: VariableDeclaration[];
}
export interface UsingForDeclaration extends BaseASTNode { type: 'UsingForDeclaration'; }
export interface StructDefinition extends BaseASTNode { type: 'StructDefinition'; }
export interface ModifierDefinition extends BaseASTNode {
    type: 'ModifierDefinition';
    name: string;
}
export interface ModifierInvocation extends BaseASTNode {
    type: 'ModifierInvocation';
    name: string;
}
export interface FunctionDefinition extends BaseASTNode {
    type: 'FunctionDefinition';
    name: string;
    parameters: ParameterList;
    body: Block | null;
}
export interface ReturnParameters extends BaseASTNode { type: 'ReturnParameters'; }
export interface ModifierList extends BaseASTNode { type: 'ModifierList'; }
export interface EventDefinition extends BaseASTNode { type: 'EventDefinition'; }
export interface EnumValue extends BaseASTNode { type: 'EnumValue'; }
export interface EnumDefinition extends BaseASTNode { type: 'EnumDefinition'; }
export interface ParameterList extends BaseASTNode { type: 'ParameterList'; }
export interface Parameter extends BaseASTNode { type: 'Parameter'; }
export interface EventParameterList extends BaseASTNode { type: 'EventParameterList'; }
export interface EventParameter extends BaseASTNode { type: 'EventParameter'; }
export interface FunctionTypeParameterList extends BaseASTNode { type: 'FunctionTypeParameterList'; }
export interface FunctionTypeParameter extends BaseASTNode { type: 'FunctionTypeParameter'; }
export interface VariableDeclaration extends BaseASTNode {
    type: 'VariableDeclaration';
    visibility: "public" | "private";
    isStateVar: boolean;
}
export interface TypeName extends BaseASTNode { type: 'TypeName'; }
export interface UserDefinedTypeName extends BaseASTNode { type: 'UserDefinedTypeName'; }
export interface Mapping extends BaseASTNode { type: 'Mapping'; }
export interface FunctionTypeName extends BaseASTNode { type: 'FunctionTypeName'; }
export interface StorageLocation extends BaseASTNode { type: 'StorageLocation'; }
export interface StateMutability extends BaseASTNode { type: 'StateMutability'; }
export interface Block extends BaseASTNode { type: 'Block'; }
export interface Statement extends BaseASTNode { type: 'Statement'; }
export interface ExpressionStatement extends BaseASTNode {
    type: 'ExpressionStatement';
    expression: ASTNode;
}
export interface IfStatement extends BaseASTNode {
    type: 'IfStatement';
    trueBody: ASTNode;
    falseBody: ASTNode;
}
export interface WhileStatement extends BaseASTNode { type: 'WhileStatement'; }
export interface SimpleStatement extends BaseASTNode { type: 'SimpleStatement'; }
export interface ForStatement extends BaseASTNode { type: 'ForStatement'; }
export interface InlineAssemblyStatement extends BaseASTNode { type: 'InlineAssemblyStatement'; }
export interface DoWhileStatement extends BaseASTNode { type: 'DoWhileStatement'; }
export interface ContinueStatement extends BaseASTNode { type: 'ContinueStatement'; }
export interface BreakStatement extends BaseASTNode { type: 'BreakStatement'; }
export interface ReturnStatement extends BaseASTNode { type: 'ReturnStatement'; }
export interface ThrowStatement extends BaseASTNode { type: 'ThrowStatement'; }
export interface VariableDeclarationStatement extends BaseASTNode { type: 'VariableDeclarationStatement'; }
export interface IdentifierList extends BaseASTNode { type: 'IdentifierList'; }
export interface ElementaryTypeName extends BaseASTNode { type: 'ElementaryTypeName'; }
export interface Expression extends BaseASTNode { type: 'Expression'; }
export interface PrimaryExpression extends BaseASTNode { type: 'PrimaryExpression'; }
export interface ExpressionList extends BaseASTNode { type: 'ExpressionList'; }
export interface NameValueList extends BaseASTNode { type: 'NameValueList'; }
export interface NameValue extends BaseASTNode { type: 'NameValue'; }
export interface FunctionCallArguments extends BaseASTNode { type: 'FunctionCallArguments'; }
export interface AssemblyBlock extends BaseASTNode { type: 'AssemblyBlock'; }
export interface AssemblyItem extends BaseASTNode { type: 'AssemblyItem'; }
export interface AssemblyExpression extends BaseASTNode { type: 'AssemblyExpression'; }
export interface AssemblyCall extends BaseASTNode { type: 'AssemblyCall'; }
export interface AssemblyLocalDefinition extends BaseASTNode { type: 'AssemblyLocalDefinition'; }
export interface AssemblyAssignment extends BaseASTNode { type: 'AssemblyAssignment'; }
export interface AssemblyIdentifierOrList extends BaseASTNode { type: 'AssemblyIdentifierOrList'; }
export interface AssemblyIdentifierList extends BaseASTNode { type: 'AssemblyIdentifierList'; }
export interface AssemblyStackAssignment extends BaseASTNode { type: 'AssemblyStackAssignment'; }
export interface LabelDefinition extends BaseASTNode { type: 'LabelDefinition'; }
export interface AssemblySwitch extends BaseASTNode { type: 'AssemblySwitch'; }
export interface AssemblyCase extends BaseASTNode { type: 'AssemblyCase'; }
export interface AssemblyFunctionDefinition extends BaseASTNode { type: 'AssemblyFunctionDefinition'; }
export interface AssemblyFunctionReturns extends BaseASTNode { type: 'AssemblyFunctionReturns'; }
export interface AssemblyFor extends BaseASTNode { type: 'AssemblyFor'; }
export interface AssemblyIf extends BaseASTNode { type: 'AssemblyIf'; }
export interface AssemblyLiteral extends BaseASTNode { type: 'AssemblyLiteral'; }
export interface SubAssembly extends BaseASTNode { type: 'SubAssembly'; }
export interface TupleExpression extends BaseASTNode { type: 'TupleExpression'; }
export interface ElementaryTypeNameExpression extends BaseASTNode { type: 'ElementaryTypeNameExpression'; }
export interface NumberLiteral extends BaseASTNode { type: 'NumberLiteral'; }
export interface Identifier extends BaseASTNode { type: 'Identifier'; }
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
    type: 'BinaryOperation';
    left: ASTNode;
    right: ASTNode;
    operator: BinOp;
}
export interface Conditional extends BaseASTNode {
    type: 'Conditional';
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
