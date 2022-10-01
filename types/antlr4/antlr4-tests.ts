import * as antlr4 from 'antlr4';

import { TerminalNode } from 'antlr4/tree/Tree';

export declare class CLexer extends antlr4.Lexer {
    readonly channelNames: string[];
    readonly modeNames: string[];
    readonly symbolicNames: string[];
    readonly grammarFileName: string;

    constructor(input: antlr4.InputStream);
}

export interface PrimaryExpressionContext extends antlr4.ParserRuleContext {
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

interface GenericSelectionContext extends antlr4.ParserRuleContext {
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

export interface GenericAssocListContext extends antlr4.ParserRuleContext {
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

export interface GenericAssociationContext extends antlr4.ParserRuleContext {
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

export interface PostfixExpressionContext extends antlr4.ParserRuleContext {
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

export interface ArgumentExpressionListContext extends antlr4.ParserRuleContext {
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

export interface UnaryExpressionContext extends antlr4.ParserRuleContext {
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

export interface UnaryOperatorContext extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface CastExpressionContext extends antlr4.ParserRuleContext {
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

export interface MultiplicativeExpressionContext extends antlr4.ParserRuleContext {
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

export interface AdditiveExpressionContext extends antlr4.ParserRuleContext {
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

export interface ShiftExpressionContext extends antlr4.ParserRuleContext {
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

export interface RelationalExpressionContext extends antlr4.ParserRuleContext {
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

export interface EqualityExpressionContext extends antlr4.ParserRuleContext {
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

export interface AndExpressionContext extends antlr4.ParserRuleContext {
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

export interface ExclusiveOrExpressionContext extends antlr4.ParserRuleContext {
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

export interface InclusiveOrExpressionContext extends antlr4.ParserRuleContext {
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

export interface LogicalAndExpressionContext extends antlr4.ParserRuleContext {
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

export interface LogicalOrExpressionContext extends antlr4.ParserRuleContext {
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

export interface ConditionalExpressionContext extends antlr4.ParserRuleContext {
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

export interface AssignmentExpressionContext extends antlr4.ParserRuleContext {
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

export interface AssignmentOperatorContext extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface ExpressionContext extends antlr4.ParserRuleContext {
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

export interface ConstantExpressionContext extends antlr4.ParserRuleContext {
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

export interface DeclarationContext extends antlr4.ParserRuleContext {
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

export interface DeclarationSpecifiersContext extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DeclarationSpecifiers2Context extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface DeclarationSpecifierContext extends antlr4.ParserRuleContext {
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

export interface InitDeclaratorListContext extends antlr4.ParserRuleContext {
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

export interface InitDeclaratorContext extends antlr4.ParserRuleContext {
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

export interface StorageClassSpecifierContext extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface TypeSpecifierContext extends antlr4.ParserRuleContext {
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

export interface StructOrUnionSpecifierContext extends antlr4.ParserRuleContext {
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

export interface StructOrUnionContext extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface StructDeclarationListContext extends antlr4.ParserRuleContext {
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

export interface StructDeclarationContext extends antlr4.ParserRuleContext {
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

export interface SpecifierQualifierListContext extends antlr4.ParserRuleContext {
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

export interface StructDeclaratorListContext extends antlr4.ParserRuleContext {
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

export interface StructDeclaratorContext extends antlr4.ParserRuleContext {
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

export interface EnumSpecifierContext extends antlr4.ParserRuleContext {
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

export interface EnumeratorListContext extends antlr4.ParserRuleContext {
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

export interface EnumeratorContext extends antlr4.ParserRuleContext {
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

export interface EnumerationConstantContext extends antlr4.ParserRuleContext {
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

export interface AtomicTypeSpecifierContext extends antlr4.ParserRuleContext {
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

export interface TypeQualifierContext extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface FunctionSpecifierContext extends antlr4.ParserRuleContext {
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

export interface AlignmentSpecifierContext extends antlr4.ParserRuleContext {
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

export interface DeclaratorContext extends antlr4.ParserRuleContext {
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

export interface DirectDeclaratorContext extends antlr4.ParserRuleContext {
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

export interface GccDeclaratorExtensionContext extends antlr4.ParserRuleContext {
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

export interface GccAttributeSpecifierContext extends antlr4.ParserRuleContext {
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

export interface GccAttributeListContext extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface GccAttributeContext extends antlr4.ParserRuleContext {
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

export interface NestedParenthesesBlockContext extends antlr4.ParserRuleContext {
    removeLastChild(): any;

    getChildCount(): any;

    getSourceInterval(): any;

    isEmpty(): any;

    getRuleContext(): any;

    getPayload(): any;

    getText(): any;

    getAltNumber(): any;
}

export interface PointerContext extends antlr4.ParserRuleContext {
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

export interface TypeQualifierListContext extends antlr4.ParserRuleContext {
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

export interface ParameterTypeListContext extends antlr4.ParserRuleContext {
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

export interface ParameterListContext extends antlr4.ParserRuleContext {
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

export interface ParameterDeclarationContext extends antlr4.ParserRuleContext {
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

export interface IdentifierListContext extends antlr4.ParserRuleContext {
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

export interface TypeNameContext extends antlr4.ParserRuleContext {
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

export interface AbstractDeclaratorContext extends antlr4.ParserRuleContext {
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

export interface DirectAbstractDeclaratorContext extends antlr4.ParserRuleContext {
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

export interface TypedefNameContext extends antlr4.ParserRuleContext {
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

export interface InitializerContext extends antlr4.ParserRuleContext {
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

export interface InitializerListContext extends antlr4.ParserRuleContext {
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

export interface DesignationContext extends antlr4.ParserRuleContext {
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

export interface DesignatorListContext extends antlr4.ParserRuleContext {
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

export interface DesignatorContext extends antlr4.ParserRuleContext {
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

export interface StaticAssertDeclarationContext extends antlr4.ParserRuleContext {
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

export interface StatementContext extends antlr4.ParserRuleContext {
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

export interface LabeledStatementContext extends antlr4.ParserRuleContext {
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

export interface CompoundStatementContext extends antlr4.ParserRuleContext {
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

export interface BlockItemListContext extends antlr4.ParserRuleContext {
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

export interface BlockItemContext extends antlr4.ParserRuleContext {
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

export interface ExpressionStatementContext extends antlr4.ParserRuleContext {
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

export interface SelectionStatementContext extends antlr4.ParserRuleContext {
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

export interface IterationStatementContext extends antlr4.ParserRuleContext {
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

export interface ForConditionContext extends antlr4.ParserRuleContext {
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

export interface ForDeclarationContext extends antlr4.ParserRuleContext {
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

export interface ForExpressionContext extends antlr4.ParserRuleContext {
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

export interface JumpStatementContext extends antlr4.ParserRuleContext {
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

export interface CompilationUnitContext extends antlr4.ParserRuleContext {
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

export interface TranslationUnitContext extends antlr4.ParserRuleContext {
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

export interface ExternalDeclarationContext extends antlr4.ParserRuleContext {
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

export interface FunctionDefinitionContext extends antlr4.ParserRuleContext {
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

export interface DeclarationListContext extends antlr4.ParserRuleContext {
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

export declare class CParser extends antlr4.Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: antlr4.CommonTokenStream);

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

const inputStream = new antlr4.InputStream('int x = 10;');
const lexer = new CLexer(inputStream);
const tokenStream = new antlr4.CommonTokenStream(lexer);
const parser = new CParser(tokenStream);

// execute the parse, and generate the parse tree
const tree = parser.compilationUnit();
console.log(tree);

// fix Token.d.ts:
function getOriginalText(ctx: antlr4.ParserRuleContext): string {
    const a: number = ctx.start.start;
    const b: number = ctx.stop.stop;
    // WRONG: const wrong = ctx.start.getInputStream().getText(new Interval(a, b));
    const text = ctx.start.getInputStream().getText(a, b);
    return text;
}

// fix InputStream.d.ts
function LA(code: string, offset: number): number {
    return new antlr4.InputStream(code).LA(offset);
}
function LT(code: string, offset: number): number {
    return new antlr4.InputStream(code).LT(offset);
}

export default class ExcelVisitor extends antlr4.tree.ParseTreeVisitor {}
