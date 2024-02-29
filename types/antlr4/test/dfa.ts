import atn from "antlr4/atn";
import ATNConfigSet from "antlr4/atn/ATNConfigSet";
import SemanticContext from "antlr4/atn/SemanticContext";
import RuleContext from "antlr4/context/RuleContext";
import dfa from "antlr4/dfa";
import DFAState from "antlr4/dfa/DFAState";
import Recognizer from "antlr4/Recognizer";

const { ATN } = atn;
const { DFA, DFASerializer, LexerDFASerializer, PredPrediction } = dfa;

class TestSemanticContext extends SemanticContext {
    evaluate(parser: Recognizer, outerContext: RuleContext): boolean {
        throw new Error("Method not implemented.");
    }
}

const atnConfigSetInstance = new ATNConfigSet(false);
const atnInstance = new ATN(0, 0);
const dfaStateInstance = new DFAState(0, atnConfigSetInstance);

const semanticContextInstance = new TestSemanticContext();

// DFA
const dfaInstance = new DFA(atnInstance, 0);
dfaInstance.atnStartState; // $ExpectType ATN
dfaInstance.decision; // $ExpectType number
dfaInstance.s0; // $ExpectType DFAState | null
dfaInstance.precedenceDfa; // $ExpectType boolean
dfaInstance.getPrecedenceStartState(0); // $ExpectType DFAState | null
dfaInstance.setPrecedenceStartState(0, dfaStateInstance); // $ExpectType void
dfaInstance.setPrecedenceDfa(true); // $ExpectType void
dfaInstance.sortedStates();
dfaInstance.toString(); // $ExpectType string | null
dfaInstance.toLexerString(); // $ExpectType string | null
dfaInstance.states; // $ExpectType HashSet

// DFASerializer
new DFASerializer(dfaInstance, [""]);
new DFASerializer(dfaInstance, undefined, [""]);
new DFASerializer(dfaInstance, [""], [""]);
const dfaSerializerInstance = new DFASerializer(dfaInstance);
dfaSerializerInstance.dfa; // $ExpectType DFA
dfaSerializerInstance.literalNames; // $ExpectType string[]
dfaSerializerInstance.symbolicNames; // $ExpectType string[]
dfaSerializerInstance.toString(); // $ExpectType string | null
dfaSerializerInstance.getEdgeLabel(0); // $ExpectType string
dfaSerializerInstance.getStateString(dfaStateInstance); // $ExpectType string

// DFAState
dfaStateInstance; // $ExpectType DFAState
dfaStateInstance.stateNumber; // $ExpectType number
dfaStateInstance.configs; // $ExpectType ATNConfigSet
dfaStateInstance.edges; // $ExpectType DFAState[]
dfaStateInstance.isAcceptState; // $ExpectType boolean
dfaStateInstance.prediction; // $ExpectType number
dfaStateInstance.lexerActionExecutor; // $ExpectType LexerActionExecutor
dfaStateInstance.requiresFullContext; // $ExpectType boolean
dfaStateInstance.predicates; // $ExpectType PredPrediction
dfaStateInstance.getAltSet(); // $ExpectType HashSet | null
dfaStateInstance.equals(dfaStateInstance); // $ExpectType boolean
dfaStateInstance.toString(); // $ExpectType string
dfaStateInstance.hashCode(); // $ExpectType number

// LexerDFASerializer
new LexerDFASerializer(dfaInstance);

// PredPrediction
const predPredictionInstance = new PredPrediction(semanticContextInstance, 0);
predPredictionInstance.alt; // $ExpectType number
predPredictionInstance.pred; // $ExpectType SemanticContext
predPredictionInstance.toString(); // $ExpectType string
