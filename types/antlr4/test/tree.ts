import CommonTokenStream from "antlr4/CommonTokenStream";
import ParserRuleContext from "antlr4/context/ParserRuleContext";
import InputStream from "antlr4/InputStream";
import Lexer from "antlr4/Lexer";
import Parser from "antlr4/Parser";
import Token from "antlr4/Token";
import ErrorNode from "antlr4/tree/ErrorNode";
import ParseTree from "antlr4/tree/ParseTree";
import ParseTreeListener from "antlr4/tree/ParseTreeListener";
import ParseTreeVisitor from "antlr4/tree/ParseTreeVisitor";
import ParseTreeWalker from "antlr4/tree/ParseTreeWalker";
import RuleNode from "antlr4/tree/RuleNode";
import SyntaxTree from "antlr4/tree/SyntaxTree";
import TerminalNode from "antlr4/tree/TerminalNode";
import Tree from "antlr4/tree/Tree";
import Trees from "antlr4/tree/Trees";

const inputStreamInstance = new InputStream("");
const lexerInstance = new Lexer(inputStreamInstance);
const commonTokenStreamInstance = new CommonTokenStream(lexerInstance);
const parserInstance = new Parser(commonTokenStreamInstance);
const parserRuleContextInstance = new ParserRuleContext();
const ruleNodeInstance = new RuleNode();
const tokenInstance = new Token();
const terminalNodeInstance = new TerminalNode(tokenInstance);

// ErrorNode
const errorNodeInstance = new ErrorNode(tokenInstance);
errorNodeInstance.isErrorNode(); // $ExpectType boolean

// ParseTree
const parseTreeInstance = new ParseTree();

// ParseTreeListener
const parseTreeListenerInstance = new ParseTreeListener();
parseTreeListenerInstance.visitTerminal(terminalNodeInstance); // $ExpectType void
parseTreeListenerInstance.visitErrorNode(errorNodeInstance); // $ExpectType void
parseTreeListenerInstance.enterEveryRule(parserRuleContextInstance); // $ExpectType void
parseTreeListenerInstance.exitEveryRule(parserRuleContextInstance); // $ExpectType void

// ParseTreeVisitor
const parseTreeVisitorInstance = new ParseTreeVisitor();
parseTreeVisitorInstance.visit(parseTreeInstance); // $ExpectType any
parseTreeVisitorInstance.visitChildren(ruleNodeInstance); // $ExpectType any
parseTreeVisitorInstance.visitTerminal(terminalNodeInstance); // $ExpectType void
parseTreeVisitorInstance.visitErrorNode(errorNodeInstance); // $ExpectType void

// ParseTreeWalker
ParseTreeWalker.DEFAULT; // $ExpectType ParseTreeWalker
const parserTreeWalkerInstance = new ParseTreeWalker();
parserTreeWalkerInstance.walk(parseTreeListenerInstance, parseTreeInstance); // $ExpectType void
parserTreeWalkerInstance.enterRule(parseTreeListenerInstance, ruleNodeInstance); // $ExpectType void
parserTreeWalkerInstance.exitRule(parseTreeListenerInstance, ruleNodeInstance); // $ExpectType void

// RuleNode
ruleNodeInstance; // $ExpectType RuleNode
ruleNodeInstance.getRuleContext(); // $ExpectType RuleContext

// SyntaxTree
new SyntaxTree();

// TerminalNode
terminalNodeInstance; // $ExpectType TerminalNode
terminalNodeInstance.parentCtx; // $ExpectType ParseTree
terminalNodeInstance.symbol; // $ExpectType Token
terminalNodeInstance.getChild(0); // $ExpectType null
terminalNodeInstance.getSymbol(); // $ExpectType Token
terminalNodeInstance.getParent(); // $ExpectType ParseTree
terminalNodeInstance.getPayload(); // $ExpectType Token
terminalNodeInstance.getSourceInterval(); // $ExpectType Interval
terminalNodeInstance.getChildCount(); // $ExpectType number
terminalNodeInstance.accept(parseTreeVisitorInstance); // $ExpectType ParseTreeVisitor
class TestParseTreeClass extends ParseTreeVisitor {}
const testParseTreeClassInstance = new TestParseTreeClass();
terminalNodeInstance.accept(testParseTreeClassInstance); // $ExpectType TestParseTreeClass
terminalNodeInstance.getText(); // $ExpectType string
terminalNodeInstance.toString(); // $ExpectType string

// Tree
class TestTree extends Tree {}
const testTreeInstance = new TestTree();

// Trees
Trees.toStringTree(testTreeInstance, [""], parserInstance); // $ExpectType string
Trees.toStringTree(testTreeInstance, [""]); // $ExpectType string
Trees.toStringTree(testTreeInstance); // $ExpectType string
Trees.toStringTree(testTreeInstance, undefined, parserInstance); // $ExpectType string
Trees.getNodeText(testTreeInstance, [""], parserInstance); // $ExpectType string
Trees.getNodeText(testTreeInstance, [""]); // $ExpectType string
Trees.getNodeText(testTreeInstance); // $ExpectType string
Trees.getNodeText(testTreeInstance, undefined, parserInstance); // $ExpectType string
Trees.getChildren(testTreeInstance); // $ExpectType Tree[]
Trees.getAncestors(testTreeInstance); // $ExpectType Tree[]
Trees.findAllTokenNodes(parseTreeInstance, 0); // $ExpectType ParseTree[]
Trees.findAllRuleNodes(parseTreeInstance, 0); // $ExpectType ParseTree[]
Trees.findAllNodes(parseTreeInstance, 0, true); // $ExpectType ParseTree[]
Trees.descendants(parseTreeInstance); // $ExpectType ParseTree[]
