import "./test/action";
import "./test/atn";
import "./test/context";
import "./test/dfa";
import "./test/error";
import "./test/misc";
import "./test/state";
import "./test/transition";
import "./test/tree";
import "./test/utils";

import antlr4 from "antlr4";

import BufferedTokenStream from "antlr4/BufferedTokenStream";
import CharStreams from "antlr4/CharStreams";
import CommonToken from "antlr4/CommonToken";
import CommonTokenFactory from "antlr4/CommonTokenFactory";
import CommonTokenStream from "antlr4/CommonTokenStream";
import ParserRuleContext from "antlr4/context/ParserRuleContext";
import RuleContext from "antlr4/context/RuleContext";
import ErrorListener from "antlr4/error/ErrorListener";
import RecognitionException from "antlr4/error/RecognitionException";
import FileStream from "antlr4/FileStream";
import InputStream from "antlr4/InputStream";
import Lexer from "antlr4/Lexer";
import IntervalSet from "antlr4/misc/IntervalSet";
import Parser from "antlr4/Parser";
import Recognizer from "antlr4/Recognizer";
import Token from "antlr4/Token";
import TokenSource from "antlr4/TokenSource";
import TokenStream from "antlr4/TokenStream";
import ParseTreeListener from "antlr4/tree/ParseTreeListener";
import TerminalNode from "antlr4/tree/TerminalNode";

const errorListenerInstance = new ErrorListener();
const intervalSetInstance = new IntervalSet();
const inputStreamInstance = new InputStream("");
const lexerInstance = new Lexer(inputStreamInstance);
const parserRuleContextInstance = new ParserRuleContext();
const parseTreeListenerInstance = new ParseTreeListener();
const recognizerInstance = new Recognizer();
const ruleContextInstance = new RuleContext();
const recognitionExceptionInstance = new RecognitionException({
    message: "",
    recognizer: recognizerInstance,
    input: inputStreamInstance,
    ctx: ruleContextInstance,
});
class TestTokenSource extends TokenSource {}
const testTokenSourceInstance = new TestTokenSource();
const tokenInstance = new Token();

// BufferedTokenStream
const bufferedTokenStreamInstance = new BufferedTokenStream(testTokenSourceInstance);
bufferedTokenStreamInstance.mark(); // $ExpectType number
bufferedTokenStreamInstance.release(0); // $ExpectType number
bufferedTokenStreamInstance.reset(); // $ExpectType void
bufferedTokenStreamInstance.seek(0); // $ExpectType void
bufferedTokenStreamInstance.get(0); // $ExpectType Token
bufferedTokenStreamInstance.consume(); // $ExpectType void
bufferedTokenStreamInstance.sync(0); // $ExpectType boolean
bufferedTokenStreamInstance.fetch(0); // $ExpectType number
bufferedTokenStreamInstance.getTokens(0, 0, {}); // $ExpectType Token[]
bufferedTokenStreamInstance.LA(0); // $ExpectType number
bufferedTokenStreamInstance.LB(0); // $ExpectType Token
bufferedTokenStreamInstance.LT(0); // $ExpectType Token
bufferedTokenStreamInstance.adjustSeekIndex(0); // $ExpectType number
bufferedTokenStreamInstance.lazyInit(); // $ExpectType void
bufferedTokenStreamInstance.setup(); // $ExpectType void
bufferedTokenStreamInstance.setTokenSource(testTokenSourceInstance); // $ExpectType void
bufferedTokenStreamInstance.nextTokenOnChannel(0); // $ExpectType number
bufferedTokenStreamInstance.nextTokenOnChannel(0, 0); // $ExpectType number
bufferedTokenStreamInstance.previousTokenOnChannel(0, 0); // $ExpectType number
bufferedTokenStreamInstance.getHiddenTokensToRight(0, 0); // $ExpectType Token[]
bufferedTokenStreamInstance.filterForChannel(0, 0, 0); // $ExpectType Token[] | null
bufferedTokenStreamInstance.getText(intervalSetInstance); // $ExpectType string
bufferedTokenStreamInstance.fill(); // $ExpectType void

// CharStreams
CharStreams.fromString(""); // $ExpectType InputStream
// $ExpectType void
CharStreams.fromBlob(
    {},
    "",
    (_is: InputStream) => undefined,
    (_ev: any) => undefined,
);
CharStreams.fromBuffer("", ""); // $ExpectType InputStream
CharStreams.fromPath("", "", (_err: any, _is: InputStream) => undefined); // $ExpectType void
CharStreams.fromPathSync("", ""); // $ExpectType InputStream

// CommonToken
CommonToken.EMPTY_SOURCE; // $ExpectType [null, null]
new CommonToken([lexerInstance, inputStreamInstance]);
new CommonToken([null, null]);
new CommonToken(undefined, 0);
new CommonToken(undefined, undefined, 0);
new CommonToken(undefined, undefined, undefined, 0);
new CommonToken(undefined, undefined, undefined, undefined, 0);
const commonTokenInstance = new CommonToken();
commonTokenInstance.clone(); // $ExpectType CommonToken

// CommonTokenFactory
CommonTokenFactory.DEFAULT; // $ExpectType CommonTokenFactory
const commonTokenFactoryInstance = new CommonTokenFactory(true);
commonTokenFactoryInstance.create([lexerInstance, inputStreamInstance], undefined, null, 0, 0, 0, 0, 0); // $ExpectType CommonToken
commonTokenFactoryInstance.create([null, null], undefined, null, 0, 0, 0, 0, 0); // $ExpectType CommonToken
commonTokenFactoryInstance.create(undefined, undefined, null, 0, 0, 0, 0, 0); // $ExpectType CommonToken
commonTokenFactoryInstance.create(undefined, 0, null, 0, 0, 0, 0, 0); // $ExpectType CommonToken
commonTokenFactoryInstance.create(undefined, undefined, "", 0, 0, 0, 0, 0); // $ExpectType CommonToken
commonTokenFactoryInstance.createThin(0, ""); // $ExpectType CommonToken

// CommonTokenStream
new CommonTokenStream(lexerInstance, 0);
const commonTokenStreamInstance = new CommonTokenStream(lexerInstance);
commonTokenStreamInstance.adjustSeekIndex(0); // $ExpectType number
commonTokenStreamInstance.getNumberOfOnChannelTokens(); // $ExpectType number

// FileStream
new FileStream("");
new FileStream("", true);

// InputStream
inputStreamInstance; // $ExpectType InputStream
inputStreamInstance.reset(); // $ExpectType void
inputStreamInstance.consume(); // $ExpectType void
inputStreamInstance.LA(0); // $ExpectType number
inputStreamInstance.LT(0); // $ExpectType number
inputStreamInstance.mark(); // $ExpectType -1
inputStreamInstance.release(0); // $ExpectType void
inputStreamInstance.seek(0); // $ExpectType void
inputStreamInstance.getText(0, 0); // $ExpectType string
inputStreamInstance.toString(); // $ExpectType string
inputStreamInstance.index; // $ExpectType number
inputStreamInstance.size; // $ExpectType number

// Lexer
Lexer.DEFAULT_MODE; // $ExpectType 0
Lexer.MORE; // $ExpectType -2
Lexer.SKIP; // $ExpectType -3
Lexer.DEFAULT_TOKEN_CHANNEL; // $ExpectType 0
Lexer.HIDDEN; // $ExpectType 1
Lexer.MIN_CHAR_VALUE; // $ExpectType 0
Lexer.MAX_CHAR_VALUE; // $ExpectType 1114111
new Lexer(null);
lexerInstance; // $ExpectType Lexer
lexerInstance.reset(); // $ExpectType void
lexerInstance.nextToken(); // $ExpectType Token
lexerInstance.skip(); // $ExpectType void
lexerInstance.more(); // $ExpectType void
lexerInstance.mode(0); // $ExpectType void
lexerInstance.pushMode(0); // $ExpectType void
lexerInstance.popMode(); // $ExpectType number
lexerInstance.emitToken(tokenInstance); // $ExpectType void
lexerInstance.emit(); // $ExpectType CommonToken
lexerInstance.emitEOF(); // $ExpectType CommonToken
lexerInstance.charIndex(); // $ExpectType number
lexerInstance.getAllTokens(); // $ExpectType Token[]
lexerInstance.notifyListeners(recognitionExceptionInstance); // $ExpectType void
lexerInstance.getErrorDisplay(""); // $ExpectType string
lexerInstance.getErrorDisplayForChar(""); // $ExpectType string
lexerInstance.getCharErrorDisplay(""); // $ExpectType string
lexerInstance.recover(recognitionExceptionInstance); // $ExpectType void
lexerInstance.inputStream; // $ExpectType InputStream
lexerInstance.type; // $ExpectType number
lexerInstance.line; // $ExpectType number
lexerInstance.column; // $ExpectType number
lexerInstance.text; // $ExpectType string

// Parser
const parserInstance = new Parser(commonTokenStreamInstance);
parserInstance.buildParseTrees; // $ExpectType boolean
parserInstance._errHandler; // $ExpectType ErrorStrategy
parserInstance.reset(); // $ExpectType void
parserInstance.match(); // $ExpectType Token
parserInstance.matchWildcard(); // $ExpectType Token
parserInstance.getParseListeners(); // $ExpectType ParseTreeListener[]
parserInstance.addParseListener(parseTreeListenerInstance); // $ExpectType void
parserInstance.removeParseListener(parseTreeListenerInstance); // $ExpectType void
parserInstance.removeParseListeners(); // $ExpectType void
parserInstance.triggerEnterRuleEvent(); // $ExpectType void
parserInstance.triggerExitRuleEvent(); // $ExpectType void
parserInstance.getTokenFactory(); // $ExpectType CommonTokenFactory
parserInstance.setTokenFactory(commonTokenFactoryInstance); // $ExpectType void
parserInstance.getATNWithBypassAlts(); // $ExpectType ATN
parserInstance.getInputStream(); // $ExpectType CommonTokenStream
parserInstance.setInputStream(commonTokenStreamInstance); // $ExpectType void
parserInstance.getTokenStream(); // $ExpectType CommonTokenStream
parserInstance.setTokenStream(commonTokenStreamInstance); // $ExpectType void
parserInstance.getCurrentToken(); // $ExpectType Token
parserInstance.notifyErrorListeners("", tokenInstance); // $ExpectType void
parserInstance.notifyErrorListeners("", tokenInstance, recognitionExceptionInstance); // $ExpectType void
parserInstance.consume(); // $ExpectType Token
parserInstance.addContextToParseTree(); // $ExpectType void
parserInstance.enterRule(parserRuleContextInstance, 0); // $ExpectType void
parserInstance.enterRule(parserRuleContextInstance, 0, 0); // $ExpectType void
parserInstance.exitRule(); // $ExpectType void
parserInstance.enterOuterAlt(); // $ExpectType void
parserInstance.getPrecedence(); // $ExpectType number
parserInstance.enterRecursionRule(parserRuleContextInstance, 0, undefined, 0); // $ExpectType void
parserInstance.enterRecursionRule(parserRuleContextInstance, 0, 0, 0); // $ExpectType void
parserInstance.pushNewRecursionContext(parserRuleContextInstance, 0); // $ExpectType void
parserInstance.pushNewRecursionContext(parserRuleContextInstance, 0, 0); // $ExpectType void
parserInstance.unrollRecursionContexts(parserRuleContextInstance); // $ExpectType void
parserInstance.getInvokingContext(0); // $ExpectType ParserRuleContext
parserInstance.inContext(parserRuleContextInstance); // $ExpectType boolean
parserInstance.isExpectedToken(tokenInstance); // $ExpectType boolean
parserInstance.getExpectedTokens(); // $ExpectType Token[]
parserInstance.getExpectedTokensWithinCurrentRule(); // $ExpectType Token[]
parserInstance.getRuleIndex(""); // $ExpectType number
parserInstance.getRuleInvocationStack(); // $ExpectType string[]
parserInstance.getRuleInvocationStack(parserRuleContextInstance); // $ExpectType string[]
parserInstance.getDFAStrings(); // $ExpectType string
parserInstance.dumpDFA(); // $ExpectType void
parserInstance.getSourceName(); // $ExpectType string
parserInstance.setTrace(true); // $ExpectType void

// Recognizer
recognizerInstance; // $ExpectType Recognizer
recognizerInstance.checkVersion(0); // $ExpectType void
recognizerInstance.addErrorListener(errorListenerInstance); // $ExpectType void
recognizerInstance.removeErrorListeners(); // $ExpectType void
recognizerInstance.getLiteralNames(); // $ExpectType (string | null)[]
recognizerInstance.getSymbolicNames(); // $ExpectType (string | null)[]
recognizerInstance.getTokenNames(); // $ExpectType string[]
recognizerInstance.getTokenTypeMap(); // $ExpectType Record<string, number>
recognizerInstance.getRuleIndexMap(); // $ExpectType Record<string, number>
recognizerInstance.getTokenType(""); // $ExpectType number
recognizerInstance.getErrorHeader(recognitionExceptionInstance); // $ExpectType string
recognizerInstance.getTokenErrorDisplay(tokenInstance); // $ExpectType string
recognizerInstance.getErrorListenerDispatch(); // $ExpectType ProxyErrorListener
recognizerInstance.sempred(parserRuleContextInstance, 0, 0); // $ExpectType boolean
recognizerInstance.precpred(parserRuleContextInstance, 0); // $ExpectType boolean
recognizerInstance.state; // $ExpectType number

// Token
Token.INVALID_TYPE; // $ExpectType 0
Token.EPSILON; // $ExpectType -2
Token.MIN_USER_TOKEN_TYPE; // $ExpectType 1
Token.EOF; // $ExpectType -1
Token.DEFAULT_CHANNEL; // $ExpectType 0
Token.HIDDEN_CHANNEL; // $ExpectType 1
tokenInstance; // $ExpectType Token
tokenInstance.source; // $ExpectType TokenSourceTuple
tokenInstance.type; // $ExpectType number
tokenInstance.channel; // $ExpectType number
tokenInstance.start; // $ExpectType number
tokenInstance.stop; // $ExpectType number
tokenInstance.tokenIndex; // $ExpectType number
tokenInstance.line; // $ExpectType number
tokenInstance.column; // $ExpectType number
tokenInstance.getTokenSource(); // $ExpectType TokenSourceTuple
tokenInstance.getInputStream(); // $ExpectType InputStream
tokenInstance.text; // $ExpectType string

// TokenStream
const tokenStreamInstance = new TokenStream();

// Tests from the 4.8 types implementation
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

const inputStream = new antlr4.InputStream("int x = 10;");
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
