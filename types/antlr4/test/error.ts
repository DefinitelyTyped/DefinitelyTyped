import ATN from "antlr4/atn/ATN";
import ATNConfigSet from "antlr4/atn/ATNConfigSet";
import CommonTokenStream from "antlr4/CommonTokenStream";
import ParserRuleContext from "antlr4/context/ParserRuleContext";
import DFA from "antlr4/dfa/DFA";
import BailErrorStrategy from "antlr4/error/BailErrorStrategy";
import ConsoleErrorListener from "antlr4/error/ConsoleErrorListener";
import DefaultErrorStrategy from "antlr4/error/DefaultErrorStrategy";
import DiagnosticErrorListener from "antlr4/error/DiagnosticErrorListener";
import ErrorListener from "antlr4/error/ErrorListener";
import ErrorStrategy from "antlr4/error/ErrorStrategy";
import FailedPredicateException from "antlr4/error/FailedPredicateException";
import InputMismatchException from "antlr4/error/InputMismatchException";
import LexerNoViableAltException from "antlr4/error/LexerNoViableAltException";
import NoViableAltException from "antlr4/error/NoViableAltException";
import ParseCancellationException from "antlr4/error/ParseCancellationException";
import ProxyErrorListener from "antlr4/error/ProxyErrorListener";
import RecognitionException from "antlr4/error/RecognitionException";
import InputStream from "antlr4/InputStream";
import Lexer from "antlr4/Lexer";
import BitSet from "antlr4/misc/BitSet";
import IntervalSet from "antlr4/misc/IntervalSet";
import Parser from "antlr4/Parser";
import Token from "antlr4/Token";

const atnInstance = new ATN(0, 0);
const atnConfigSetInstance = new ATNConfigSet(false);
const bitsetInstance = new BitSet();
const dfaInstance = new DFA(atnInstance, 0);
const inputStreamInstance = new InputStream("");
const intervalSetInstance = new IntervalSet();
const lexerInstance = new Lexer(inputStreamInstance);
const parserInstance = new Parser(new CommonTokenStream(lexerInstance));
const parserRuleContextInstance = new ParserRuleContext();
const recognitionException = new RecognitionException({
    message: "",
    recognizer: parserInstance,
    input: inputStreamInstance,
    ctx: parserRuleContextInstance,
});
const tokenInstance = new Token();

// BailErrorStrategy
const bailErrorStrategyInstance = new BailErrorStrategy();
bailErrorStrategyInstance.recoverInline(parserInstance); // $ExpectType Token

// ConsoleErrorListener
ConsoleErrorListener.INSTANCE; // $ExpectType ConsoleErrorListener
new ConsoleErrorListener();

// DiagnosticErrorListener
const diagnosticErrorListener = new DiagnosticErrorListener(false);
diagnosticErrorListener.exactOnly; // $ExpectType boolean
diagnosticErrorListener.getDecisionDescription(parserInstance, dfaInstance); // $ExpectType string
diagnosticErrorListener.getConflictingAlts(bitsetInstance, atnConfigSetInstance); // $ExpectType BitSet

// ErrorListener
const errorListenerInstance = new ErrorListener();
errorListenerInstance.syntaxError(parserInstance, tokenInstance, 0, 0, "", recognitionException); // $ExpectType void
errorListenerInstance.reportAmbiguity(parserInstance, dfaInstance, 0, 0, false, bitsetInstance, atnConfigSetInstance); // $ExpectType void
// $ExpectType void
errorListenerInstance.reportAttemptingFullContext(
    parserInstance,
    dfaInstance,
    0,
    0,
    bitsetInstance,
    atnConfigSetInstance,
);
errorListenerInstance.reportContextSensitivity(parserInstance, dfaInstance, 0, 0, undefined, atnConfigSetInstance); // $ExpectType void

// ErrorStrategy
const errorStrategy = new ErrorStrategy();
errorStrategy.reset(parserInstance); // $ExpectType void
errorStrategy.recoverInline(parserInstance); // $ExpectType void
errorStrategy.recover(parserInstance, recognitionException); // $ExpectType void
errorStrategy.sync(parserInstance); // $ExpectType void
errorStrategy.inErrorRecoveryMode(parserInstance); // $ExpectType void
errorStrategy.reportError(parserInstance, recognitionException); // $ExpectType void

// FailedPredicateException
const failedPredicateException = new FailedPredicateException(parserInstance, "", "");
failedPredicateException.ruleIndex; // $ExpectType number
failedPredicateException.predicateIndex; // $ExpectType number
failedPredicateException.predicate; // $ExpectType string

// InputMismatchException
const inputMismatchExceptionInstance = new InputMismatchException({
    message: "",
    recognizer: parserInstance,
    input: inputStreamInstance,
    ctx: parserRuleContextInstance,
});

// LexerNoViableAltException
const lexerNoViableAltException = new LexerNoViableAltException(
    lexerInstance,
    inputStreamInstance,
    0,
    atnConfigSetInstance,
);
lexerNoViableAltException.startIndex; // $ExpectType number
lexerNoViableAltException.deadEndConfigs; // $ExpectType ATNConfigSet
lexerNoViableAltException.toString(); // $ExpectType string

// NoViableAltException
const noViableAltException = new NoViableAltException(
    parserInstance,
    undefined,
    undefined,
    undefined,
    atnConfigSetInstance,
);
new NoViableAltException(parserInstance, inputStreamInstance, undefined, undefined, atnConfigSetInstance);
new NoViableAltException(parserInstance, undefined, tokenInstance, undefined, atnConfigSetInstance);
new NoViableAltException(parserInstance, undefined, undefined, tokenInstance, atnConfigSetInstance);
new NoViableAltException(
    parserInstance,
    undefined,
    undefined,
    undefined,
    atnConfigSetInstance,
    parserRuleContextInstance,
);
new NoViableAltException(
    parserInstance,
    inputStreamInstance,
    tokenInstance,
    tokenInstance,
    atnConfigSetInstance,
    parserRuleContextInstance,
);
noViableAltException.deadEndConfigs; // $ExpectType ATNConfigSet
noViableAltException.startToken; // $ExpectType Token

// ParseCancellationException
new ParseCancellationException();

// ProxyErrorListener
const proxyErrorListener = new ProxyErrorListener([errorListenerInstance]);
proxyErrorListener.delegates; // $ExpectType ErrorListener[]

// RecognitionException
recognitionException; // $ExpectType RecognitionException
recognitionException.message; // $ExpectType string
recognitionException.recognizer; // $ExpectType Recognizer
recognitionException.input; // $ExpectType InputStream
recognitionException.ctx; // $ExpectType RuleContext
recognitionException.offendingToken; // $ExpectType Token
recognitionException.offendingState; // $ExpectType -1
recognitionException.getExpectedTokens(); // $ExpectType IntervalSet
recognitionException.toString(); // $ExpectType string

// DefaultErrorStrategy
const defaultErrorStrategyInstance = new DefaultErrorStrategy();
defaultErrorStrategyInstance.errorRecoveryMode; // $ExpectType boolean
defaultErrorStrategyInstance.lastErrorIndex; // $ExpectType number
defaultErrorStrategyInstance.lastErrorStates; // $ExpectTypenumber[] | null
defaultErrorStrategyInstance.nextTokensContext; // $ExpectType ParserRuleContext
defaultErrorStrategyInstance.nextTokenState; // $ExpectType number
defaultErrorStrategyInstance.nextTokensState; // $ExpectType number
defaultErrorStrategyInstance.beginErrorCondition(parserInstance); // $ExpectType void
defaultErrorStrategyInstance.inErrorRecoveryMode(parserInstance); // $ExpectType boolean
defaultErrorStrategyInstance.endErrorCondition(parserInstance); // $ExpectType void
defaultErrorStrategyInstance.reportMatch(parserInstance); // $ExpectType void
defaultErrorStrategyInstance.reportError(parserInstance, recognitionException); // $ExpectType void
defaultErrorStrategyInstance.reportNoViableAlternative(parserInstance, noViableAltException); // $ExpectType void
defaultErrorStrategyInstance.reportInputMismatch(parserInstance, inputMismatchExceptionInstance); // $ExpectType void
defaultErrorStrategyInstance.reportFailedPredicate(parserInstance, failedPredicateException); // $ExpectType void
defaultErrorStrategyInstance.reportUnwantedToken(parserInstance); // $ExpectType void
defaultErrorStrategyInstance.reportMissingToken(parserInstance); // $ExpectType void
defaultErrorStrategyInstance.recoverInline(parserInstance); // $ExpectType Token
defaultErrorStrategyInstance.singleTokenInsertion(parserInstance); // $ExpectType boolean
defaultErrorStrategyInstance.singleTokenDeletion(parserInstance); // $ExpectType Token
defaultErrorStrategyInstance.getMissingSymbol(parserInstance); // $ExpectType Token
defaultErrorStrategyInstance.getExpectedTokens(parserInstance); // $ExpectType Token[]
defaultErrorStrategyInstance.getTokenErrorDisplay(tokenInstance); // $ExpectType string
defaultErrorStrategyInstance.escapeWSAndQuote(""); // $ExpectType string
defaultErrorStrategyInstance.getErrorRecoverySet(parserInstance); // $ExpectType IntervalSet
defaultErrorStrategyInstance.consumeUntil(parserInstance, intervalSetInstance); // $ExpectType void
