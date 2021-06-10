import { Interval, InputStream, CommonTokenStream, Lexer, Parser, ParserRuleContext } from 'antlr4';
import { TerminalNode } from 'antlr4/tree/Tree';

export declare class CLexer extends Lexer {
    readonly channelNames: string[];
    readonly modeNames: string[];
    readonly symbolicNames: string[];
    readonly grammarFileName: string;

    constructor(input: InputStream);
}

export interface PrimaryExpressionContext extends ParserRuleContext {
    Identifier(): TerminalNode;

    Constant(): TerminalNode;

    expression(): ExpressionContext;

    genericSelection(): GenericSelectionContext;

    compoundStatement(): CompoundStatementContext;

    unaryExpression(): UnaryExpressionContext;

    typeName(): TypeNameContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

interface GenericSelectionContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext;

    genericAssocList(): GenericAssocListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface GenericAssocListContext extends ParserRuleContext {
    genericAssociation(): GenericAssociationContext;

    genericAssocList(): GenericAssocListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface GenericAssociationContext extends ParserRuleContext {
    typeName(): TypeNameContext;

    assignmentExpression(): AssignmentExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface PostfixExpressionContext extends ParserRuleContext {
    primaryExpression(): PrimaryExpressionContext;

    typeName(): TypeNameContext;

    initializerList(): InitializerListContext;

    postfixExpression(): PostfixExpressionContext;

    expression(): ExpressionContext;

    argumentExpressionList(): ArgumentExpressionListContext;

    Identifier(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ArgumentExpressionListContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext;

    argumentExpressionList(): ArgumentExpressionListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface UnaryExpressionContext extends ParserRuleContext {
    postfixExpression(): PostfixExpressionContext;

    unaryExpression(): UnaryExpressionContext;

    unaryOperator(): UnaryOperatorContext;

    castExpression(): CastExpressionContext;

    typeName(): TypeNameContext;

    Identifier(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface UnaryOperatorContext extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface CastExpressionContext extends ParserRuleContext {
    typeName(): TypeNameContext;

    castExpression(): CastExpressionContext;

    unaryExpression(): UnaryExpressionContext;

    DigitSequence(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface MultiplicativeExpressionContext extends ParserRuleContext {
    castExpression(): CastExpressionContext;

    multiplicativeExpression(): MultiplicativeExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface AdditiveExpressionContext extends ParserRuleContext {
    multiplicativeExpression(): MultiplicativeExpressionContext;

    additiveExpression(): AdditiveExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ShiftExpressionContext extends ParserRuleContext {
    additiveExpression(): AdditiveExpressionContext;

    shiftExpression(): ShiftExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface RelationalExpressionContext extends ParserRuleContext {
    shiftExpression(): ShiftExpressionContext;

    relationalExpression(): RelationalExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface EqualityExpressionContext extends ParserRuleContext {
    relationalExpression(): RelationalExpressionContext;

    equalityExpression(): EqualityExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface AndExpressionContext extends ParserRuleContext {
    equalityExpression(): EqualityExpressionContext;

    andExpression(): AndExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ExclusiveOrExpressionContext extends ParserRuleContext {
    andExpression(): AndExpressionContext;

    exclusiveOrExpression(): ExclusiveOrExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface InclusiveOrExpressionContext extends ParserRuleContext {
    exclusiveOrExpression(): ExclusiveOrExpressionContext;

    inclusiveOrExpression(): InclusiveOrExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface LogicalAndExpressionContext extends ParserRuleContext {
    inclusiveOrExpression(): InclusiveOrExpressionContext;

    logicalAndExpression(): LogicalAndExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface LogicalOrExpressionContext extends ParserRuleContext {
    logicalAndExpression(): LogicalAndExpressionContext;

    logicalOrExpression(): LogicalOrExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ConditionalExpressionContext extends ParserRuleContext {
    logicalOrExpression(): LogicalOrExpressionContext;

    expression(): ExpressionContext;

    conditionalExpression(): ConditionalExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface AssignmentExpressionContext extends ParserRuleContext {
    conditionalExpression(): ConditionalExpressionContext;

    unaryExpression(): UnaryExpressionContext;

    assignmentOperator(): AssignmentOperatorContext;

    assignmentExpression(): AssignmentExpressionContext;

    DigitSequence(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface AssignmentOperatorContext extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ExpressionContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext;

    expression(): ExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ConstantExpressionContext extends ParserRuleContext {
    conditionalExpression(): ConditionalExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DeclarationContext extends ParserRuleContext {
    declarationSpecifiers(): DeclarationSpecifiersContext;

    initDeclaratorList(): InitDeclaratorListContext;

    staticAssertDeclaration(): StaticAssertDeclarationContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DeclarationSpecifiersContext extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DeclarationSpecifiers2Context extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DeclarationSpecifierContext extends ParserRuleContext {
    storageClassSpecifier(): StorageClassSpecifierContext;

    typeSpecifier(): TypeSpecifierContext;

    typeQualifier(): TypeQualifierContext;

    functionSpecifier(): FunctionSpecifierContext;

    alignmentSpecifier(): AlignmentSpecifierContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface InitDeclaratorListContext extends ParserRuleContext {
    initDeclarator(): InitDeclaratorContext;

    initDeclaratorList(): InitDeclaratorListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface InitDeclaratorContext extends ParserRuleContext {
    declarator(): DeclaratorContext;

    initializer(): InitializerContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StorageClassSpecifierContext extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface TypeSpecifierContext extends ParserRuleContext {
    atomicTypeSpecifier(): AtomicTypeSpecifierContext;

    structOrUnionSpecifier(): StructOrUnionSpecifierContext;

    enumSpecifier(): EnumSpecifierContext;

    typedefName(): TypedefNameContext;

    constantExpression(): ConstantExpressionContext;

    typeSpecifier(): TypeSpecifierContext;

    pointer(): PointerContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StructOrUnionSpecifierContext extends ParserRuleContext {
    structOrUnion(): StructOrUnionContext;

    structDeclarationList(): StructDeclarationListContext;

    Identifier(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StructOrUnionContext extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StructDeclarationListContext extends ParserRuleContext {
    structDeclaration(): StructDeclarationContext;

    structDeclarationList(): StructDeclarationListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StructDeclarationContext extends ParserRuleContext {
    specifierQualifierList(): SpecifierQualifierListContext;

    structDeclaratorList(): StructDeclaratorListContext;

    staticAssertDeclaration(): StaticAssertDeclarationContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface SpecifierQualifierListContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext;

    specifierQualifierList(): SpecifierQualifierListContext;

    typeQualifier(): TypeQualifierContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StructDeclaratorListContext extends ParserRuleContext {
    structDeclarator(): StructDeclaratorContext;

    structDeclaratorList(): StructDeclaratorListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StructDeclaratorContext extends ParserRuleContext {
    declarator(): DeclaratorContext;

    constantExpression(): ConstantExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface EnumSpecifierContext extends ParserRuleContext {
    enumeratorList(): EnumeratorListContext;

    Identifier(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface EnumeratorListContext extends ParserRuleContext {
    enumerator(): EnumeratorContext;

    enumeratorList(): EnumeratorListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface EnumeratorContext extends ParserRuleContext {
    enumerationConstant(): EnumerationConstantContext;

    constantExpression(): ConstantExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface EnumerationConstantContext extends ParserRuleContext {
    Identifier(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface AtomicTypeSpecifierContext extends ParserRuleContext {
    typeName(): TypeNameContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface TypeQualifierContext extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface FunctionSpecifierContext extends ParserRuleContext {
    gccAttributeSpecifier(): GccAttributeSpecifierContext;

    Identifier(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface AlignmentSpecifierContext extends ParserRuleContext {
    typeName(): TypeNameContext;

    constantExpression(): ConstantExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DeclaratorContext extends ParserRuleContext {
    directDeclarator(): DirectDeclaratorContext;

    pointer(): PointerContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DirectDeclaratorContext extends ParserRuleContext {
    Identifier(): TerminalNode;

    declarator(): DeclaratorContext;

    DigitSequence(): TerminalNode;

    pointer(): PointerContext;

    directDeclarator(): DirectDeclaratorContext;

    typeSpecifier(): TypeSpecifierContext;

    typeQualifierList(): TypeQualifierListContext;

    assignmentExpression(): AssignmentExpressionContext;

    parameterTypeList(): ParameterTypeListContext;

    identifierList(): IdentifierListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface GccDeclaratorExtensionContext extends ParserRuleContext {
    gccAttributeSpecifier(): GccAttributeSpecifierContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface GccAttributeSpecifierContext extends ParserRuleContext {
    gccAttributeList(): GccAttributeListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface GccAttributeListContext extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface GccAttributeContext extends ParserRuleContext {
    argumentExpressionList(): ArgumentExpressionListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface NestedParenthesesBlockContext extends ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface PointerContext extends ParserRuleContext {
    typeQualifierList(): TypeQualifierListContext;

    pointer(): PointerContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface TypeQualifierListContext extends ParserRuleContext {
    typeQualifier(): TypeQualifierContext;

    typeQualifierList(): TypeQualifierListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ParameterTypeListContext extends ParserRuleContext {
    parameterList(): ParameterListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ParameterListContext extends ParserRuleContext {
    parameterDeclaration(): ParameterDeclarationContext;

    parameterList(): ParameterListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ParameterDeclarationContext extends ParserRuleContext {
    declarationSpecifiers(): DeclarationSpecifiersContext;

    declarator(): DeclaratorContext;

    declarationSpecifiers2(): DeclarationSpecifiers2Context;

    abstractDeclarator(): AbstractDeclaratorContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface IdentifierListContext extends ParserRuleContext {
    Identifier(): TerminalNode;

    identifierList(): IdentifierListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface TypeNameContext extends ParserRuleContext {
    specifierQualifierList(): SpecifierQualifierListContext;

    abstractDeclarator(): AbstractDeclaratorContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface AbstractDeclaratorContext extends ParserRuleContext {
    pointer(): PointerContext;

    directAbstractDeclarator(): DirectAbstractDeclaratorContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DirectAbstractDeclaratorContext extends ParserRuleContext {
    abstractDeclarator(): AbstractDeclaratorContext;

    typeQualifierList(): TypeQualifierListContext;

    assignmentExpression(): AssignmentExpressionContext;

    parameterTypeList(): ParameterTypeListContext;

    directAbstractDeclarator(): DirectAbstractDeclaratorContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface TypedefNameContext extends ParserRuleContext {
    Identifier(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface InitializerContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext;

    initializerList(): InitializerListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface InitializerListContext extends ParserRuleContext {
    initializer(): InitializerContext;

    designation(): DesignationContext;

    initializerList(): InitializerListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DesignationContext extends ParserRuleContext {
    designatorList(): DesignatorListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DesignatorListContext extends ParserRuleContext {
    designator(): DesignatorContext;

    designatorList(): DesignatorListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DesignatorContext extends ParserRuleContext {
    constantExpression(): ConstantExpressionContext;

    Identifier(): TerminalNode;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StaticAssertDeclarationContext extends ParserRuleContext {
    constantExpression(): ConstantExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StatementContext extends ParserRuleContext {
    labeledStatement(): LabeledStatementContext;

    compoundStatement(): CompoundStatementContext;

    expressionStatement(): ExpressionStatementContext;

    selectionStatement(): SelectionStatementContext;

    iterationStatement(): IterationStatementContext;

    jumpStatement(): JumpStatementContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface LabeledStatementContext extends ParserRuleContext {
    Identifier(): TerminalNode;

    statement(): StatementContext;

    constantExpression(): ConstantExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface CompoundStatementContext extends ParserRuleContext {
    blockItemList(): BlockItemListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface BlockItemListContext extends ParserRuleContext {
    blockItem(): BlockItemContext;

    blockItemList(): BlockItemListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface BlockItemContext extends ParserRuleContext {
    statement(): StatementContext;

    declaration(): DeclarationContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ExpressionStatementContext extends ParserRuleContext {
    expression(): ExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface SelectionStatementContext extends ParserRuleContext {
    expression(): ExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface IterationStatementContext extends ParserRuleContext {
    While(): TerminalNode;

    expression(): ExpressionContext;

    statement(): StatementContext;

    Do(): TerminalNode;

    For(): TerminalNode;

    forCondition(): ForConditionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ForConditionContext extends ParserRuleContext {
    forDeclaration(): ForDeclarationContext;

    expression(): ExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ForDeclarationContext extends ParserRuleContext {
    declarationSpecifiers(): DeclarationSpecifiersContext;

    initDeclaratorList(): InitDeclaratorListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ForExpressionContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext;

    forExpression(): ForExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface JumpStatementContext extends ParserRuleContext {
    Identifier(): TerminalNode;

    expression(): ExpressionContext;

    unaryExpression(): UnaryExpressionContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface CompilationUnitContext extends ParserRuleContext {
    EOF(): any;

    translationUnit(): TranslationUnitContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface TranslationUnitContext extends ParserRuleContext {
    externalDeclaration(): ExternalDeclarationContext;

    translationUnit(): TranslationUnitContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ExternalDeclarationContext extends ParserRuleContext {
    functionDefinition(): FunctionDefinitionContext;

    declaration(): DeclarationContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface FunctionDefinitionContext extends ParserRuleContext {
    declarator(): DeclaratorContext;

    compoundStatement(): CompoundStatementContext;

    declarationSpecifiers(): DeclarationSpecifiersContext;

    declarationList(): DeclarationListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DeclarationListContext extends ParserRuleContext {
    declaration(): DeclarationContext;

    declarationList(): DeclarationListContext;

    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export declare class CParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);

    primaryExpression(): PrimaryExpressionContext;

    genericSelection(): GenericSelectionContext;

    genericAssociation(): GenericAssociationContext;

    unaryExpression(): UnaryExpressionContext;

    unaryOperator(): UnaryOperatorContext;

    castExpression(): CastExpressionContext;

    conditionalExpression(): ConditionalExpressionContext;

    assignmentExpression(): AssignmentExpressionContext;

    assignmentOperator(): AssignmentOperatorContext;

    constantExpression(): ConstantExpressionContext;

    declaration(): DeclarationContext;

    declarationSpecifiers(): DeclarationSpecifiersContext;

    declarationSpecifiers2(): DeclarationSpecifiers2Context;

    declarationSpecifier(): DeclarationSpecifierContext;

    initDeclarator(): InitDeclaratorContext;

    storageClassSpecifier(): StorageClassSpecifierContext;

    structOrUnionSpecifier(): StructOrUnionSpecifierContext;

    structOrUnion(): StructOrUnionContext;

    structDeclaration(): StructDeclarationContext;

    specifierQualifierList(): SpecifierQualifierListContext;

    structDeclarator(): StructDeclaratorContext;

    enumSpecifier(): EnumSpecifierContext;

    enumerator(): EnumeratorContext;

    enumerationConstant(): EnumerationConstantContext;

    atomicTypeSpecifier(): AtomicTypeSpecifierContext;

    typeQualifier(): TypeQualifierContext;

    functionSpecifier(): FunctionSpecifierContext;

    alignmentSpecifier(): AlignmentSpecifierContext;

    declarator(): DeclaratorContext;

    gccDeclaratorExtension(): GccDeclaratorExtensionContext;

    gccAttributeSpecifier(): GccAttributeSpecifierContext;

    gccAttributeList(): GccAttributeListContext;

    gccAttribute(): GccAttributeContext;

    nestedParenthesesBlock(): NestedParenthesesBlockContext;

    pointer(): PointerContext;

    parameterTypeList(): ParameterTypeListContext;

    parameterDeclaration(): ParameterDeclarationContext;

    typeName(): TypeNameContext;

    abstractDeclarator(): AbstractDeclaratorContext;

    typedefName(): TypedefNameContext;

    initializer(): InitializerContext;

    designation(): DesignationContext;

    designator(): DesignatorContext;

    staticAssertDeclaration(): StaticAssertDeclarationContext;

    statement(): StatementContext;

    labeledStatement(): LabeledStatementContext;

    compoundStatement(): CompoundStatementContext;

    blockItem(): BlockItemContext;

    expressionStatement(): ExpressionStatementContext;

    selectionStatement(): SelectionStatementContext;

    iterationStatement(): IterationStatementContext;

    forCondition(): ForConditionContext;

    forDeclaration(): ForDeclarationContext;

    jumpStatement(): JumpStatementContext;

    compilationUnit(): CompilationUnitContext;

    externalDeclaration(): ExternalDeclarationContext;

    functionDefinition(): FunctionDefinitionContext;

    reset(): any;

    matchWildcard(): any;

    getParseListeners(): any;

    removeParseListeners(): any;

    triggerEnterRuleEvent(): any;

    triggerExitRuleEvent(): any;

    getTokenFactory(): any;

    getATNWithBypassAlts(): any;

    getInputStream(): any;

    getTokenStream(): any;

    getCurrentToken(): any;

    consume(): any;

    addContextToParseTree(): any;

    exitRule(): any;

    getPrecedence(): any;

    getExpectedTokens(): any;

    getExpectedTokensWithinCurrentRule(): any;

    getDFAStrings(): any;

    dumpDFA(): any;

    getSourceName(): any;

    removeErrorListeners(): any;

    getTokenTypeMap(): any;

    getRuleIndexMap(): any;

    getErrorListenerDispatch(): any;
}

const inputStream = new InputStream('int x = 10;');
const lexer = new CLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new CParser(tokenStream);

// execute the parse, and generate the parse tree
const tree = parser.compilationUnit();
console.log(tree);

// fix Token.d.ts:
function getOriginalText(ctx: ParserRuleContext): string {
    const a: number = ctx.start.start;
    const b: number = ctx.stop.stop;
    // WRONG: const wrong = ctx.start.getInputStream().getText(new Interval(a, b));
    const text = ctx.start.getInputStream().getText(a, b);
    return text;
}

// fix InputStream.d.ts
function LA(code: string, offset: number): number {
    return new InputStream(code).LA(offset);
}
function LT(code: string, offset: number): number {
    return new InputStream(code).LT(offset);
}
