import CommonTokenStream from "antlr4/CommonTokenStream";
import ParserRuleContext from "antlr4/context/ParserRuleContext";
import PredictionContext from "antlr4/context/PredictionContext";
import RuleContext from "antlr4/context/RuleContext";
import InputStream from "antlr4/InputStream";
import Lexer from "antlr4/Lexer";
import HashCode from "antlr4/misc/HashCode";
import Parser from "antlr4/Parser";
import Token from "antlr4/Token";
import ParseTreeListener from "antlr4/tree/ParseTreeListener";
import ParseTreeVisitor from "antlr4/tree/ParseTreeVisitor";

const parserInstance = new Parser(new CommonTokenStream(new Lexer(new InputStream(""))));
const parseTreeListenerInstance = new ParseTreeListener();
const tokenInstance = new Token();

// ParserRuleContext
ParserRuleContext.EMPTY; // $ExpectType ParserRuleContext
const parserRuleContextInstance = new ParserRuleContext();
new ParserRuleContext(parserRuleContextInstance);
new ParserRuleContext(undefined, 0);
new ParserRuleContext(parserRuleContextInstance, 0);
parserRuleContextInstance.start; // $ExpectType Token
parserRuleContextInstance.stop; // $ExpectType Token
parserRuleContextInstance.ruleIndex; // $ExpectType number
parserRuleContextInstance.exception; // $ExpectType RecognitionException
parserRuleContextInstance.copyFrom(parserRuleContextInstance); // $ExpectType void
parserRuleContextInstance.enterRule(parseTreeListenerInstance); // $ExpectType void
parserRuleContextInstance.exitRule(parseTreeListenerInstance); // $ExpectType void
parserRuleContextInstance.addChild(parserRuleContextInstance); // $ExpectType TerminalNode
parserRuleContextInstance.removeLastChild(); // $ExpectType void
parserRuleContextInstance.addTokenNode(tokenInstance); // $ExpectType Token
parserRuleContextInstance.addErrorNode(tokenInstance); // $ExpectType ErrorNode
parserRuleContextInstance.getChild(0); // $ExpectType ParseTree | null
parserRuleContextInstance.getChild(0, ParserRuleContext); // $ExpectType ParserRuleContext | null
parserRuleContextInstance.getToken(0, 0); // $ExpectType Token
parserRuleContextInstance.getTokens(0); // $ExpectType Token[]
parserRuleContextInstance.getTypedRuleContext(ParserRuleContext, 0); // $ExpectType ParserRuleContext
parserRuleContextInstance.getTypedRuleContexts(ParserRuleContext); // $ExpectType ParserRuleContext[]

// PredictionContext
PredictionContext.EMPTY; // $ExpectType null
PredictionContext.EMPTY_RETURN_STATE; // $ExpectType 2147483647
PredictionContext.globalNodeCount; // $ExpectType 1
PredictionContext.id; // $ExpectType number
const predictionContextInstance = new PredictionContext(0);
predictionContextInstance.isEmpty(); // $ExpectType boolean
predictionContextInstance.hasEmptyPath(); // $ExpectType boolean
predictionContextInstance.hashCode(); // $ExpectType number
predictionContextInstance.updateHashCode(new HashCode()); // $ExpectType void

// RuleContext
new RuleContext();
new RuleContext(parserRuleContextInstance);
new RuleContext(undefined, 0);
const ruleContextInstance = new RuleContext(parserRuleContextInstance, 0);
ruleContextInstance.parentCtx; // $ExpectType RuleContext
ruleContextInstance.invokingState; // $ExpectType number
ruleContextInstance.depth(); // $ExpectType number
ruleContextInstance.isEmpty(); // $ExpectType boolean
ruleContextInstance.getSourceInterval(); // $ExpectType Interval
ruleContextInstance.getRuleContext(); // $ExpectType RuleContext
ruleContextInstance.getPayload(); // $ExpectType RuleContext
ruleContextInstance.getText(); // $ExpectType string
ruleContextInstance.getAltNumber(); // $ExpectType 0
ruleContextInstance.setAltNumber(0); // $ExpectType void
ruleContextInstance.getChild(0); // $ExpectType RuleContext | null
ruleContextInstance.getChildCount(); // $ExpectType number
ruleContextInstance.accept(new ParseTreeVisitor()); // $ExpectType void
ruleContextInstance.toStringTree([""], parserInstance); // $ExpectType string
ruleContextInstance.toString([""], parserRuleContextInstance); // $ExpectType string
