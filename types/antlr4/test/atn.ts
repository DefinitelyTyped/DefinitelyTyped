import LexerAction from "antlr4/action/LexerAction";
import atn from "antlr4/atn";
import AbstractPredicateTransition from "antlr4/atn/AbstractPredicateTransition";
import ATNConfig, { ATNConfigConfig } from "antlr4/atn/ATNConfig";
import ATNConfigSet from "antlr4/atn/ATNConfigSet";
import ATNDeserializationOptions from "antlr4/atn/ATNDeserializationOptions";
import ATNSimulator from "antlr4/atn/ATNSimulator";
import LexerActionExecutor from "antlr4/atn/LexerActionExecutor";
import LexerActionType from "antlr4/atn/LexerActionType";
import LexerATNConfig from "antlr4/atn/LexerATNConfig";
import { SimState } from "antlr4/atn/LexerATNSimulator";
import LL1Analyzer from "antlr4/atn/LL1Analyzer";
import OrderedATNConfigSet from "antlr4/atn/OrderedATNConfigSet";
import PrecedencePredicate from "antlr4/atn/PrecedencePredicate";
import Predicate from "antlr4/atn/Predicate";
import PredictionContextCache from "antlr4/atn/PredictionContextCache";
import SemanticContext from "antlr4/atn/SemanticContext";
import CommonTokenStream from "antlr4/CommonTokenStream";
import ParserRuleContext from "antlr4/context/ParserRuleContext";
import PredictionContext from "antlr4/context/PredictionContext";
import RuleContext from "antlr4/context/RuleContext";
import DFA from "antlr4/dfa/DFA";
import DFAState from "antlr4/dfa/DFAState";
import PredPrediction from "antlr4/dfa/PredPrediction";
import NoViableAltException from "antlr4/error/NoViableAltException";
import InputStream from "antlr4/InputStream";
import Lexer from "antlr4/Lexer";
import BitSet from "antlr4/misc/BitSet";
import HashCode from "antlr4/misc/HashCode";
import HashSet from "antlr4/misc/HashSet";
import IntervalSet from "antlr4/misc/IntervalSet";
import Parser from "antlr4/Parser";
import Recognizer from "antlr4/Recognizer";
import ATNState from "antlr4/state/ATNState";
import BlockEndState from "antlr4/state/BlockEndState";
import DecisionState from "antlr4/state/DecisionState";
import TokenStream from "antlr4/TokenStream";
import Transition from "antlr4/transition/Transition";
import DoubleDict from "antlr4/utils/DoubleDict";

// TODO go through all the ATN's and ensure they're all type tested.

const { ATN, ATNDeserializer, LexerATNSimulator, ParserATNSimulator, PredictionMode } = atn;

class NewLexerAction extends LexerAction {}

const atnInstance = new ATN(0, 0);
const atnConfigInstance = new ATNConfig();
const atnConfigSetInstance = new ATNConfigSet(false);
const atnStateInstance = new ATNState();
const bitsetInstance = new BitSet();
const bitsetCollection = [bitsetInstance];
const blockEndStateInstance = new BlockEndState();
const decisionStateInstance = new DecisionState();
const dfaStateInstance = new DFAState(0, atnConfigSetInstance);
const hashCodeInstance = new HashCode();
const hashSetInstance = new HashSet();
const inputStreamInstance = new InputStream("");
const intervalSetInstance = new IntervalSet();
const lexerActionExecutorInstance = new LexerActionExecutor(null);
const lexerActionInstance = new NewLexerAction(LexerActionType.CHANNEL);
const lexerInstance = new Lexer(inputStreamInstance);
const commonTokenStreamInstance = new CommonTokenStream(lexerInstance);
const parserInstance = new Parser(commonTokenStreamInstance);
const noViableAltExceptionInstance = new NoViableAltException(
    parserInstance,
    undefined,
    undefined,
    undefined,
    atnConfigSetInstance,
);
const parserRuleContextInstance = new ParserRuleContext();
const predicateInstance = new Predicate();
const predictionContextCacheInstance = new PredictionContextCache();
const atnSimulatorInstance = new ATNSimulator(atnInstance, predictionContextCacheInstance);
const predPredictionInstance = new PredPrediction(predicateInstance, 0);
const simStateInstance = new SimState();
const tokenStreamInstance = new TokenStream();
const transitionInstance = new Transition(atnStateInstance);

const predictionContextInstance = new PredictionContext(0);

// AbstractPredicateTransition
class NewPredicateTransition implements AbstractPredicateTransition {
    target: ATNState;
    isEpsilon: boolean;
    label: IntervalSet | null;
}

// ATNConfig
const atnConfigConfig: ATNConfigConfig = {
    state: atnStateInstance,
    alt: 0,
    context: predictionContextInstance,
    semanticContext: predicateInstance,
    reachesIntoOuterContext: 0,
    precedenceFilterSuppressed: false,
};
new ATNConfig(atnConfigInstance);
new ATNConfig(undefined, atnConfigInstance);
new ATNConfig(atnConfigInstance, atnConfigConfig);

// ATNConfigSet
atnConfigSetInstance; // $ExpectType ATNConfigSet
atnConfigSetInstance.configLookup; // $ExpectType HashSet
atnConfigSetInstance.fullCtx; // $ExpectType boolean
atnConfigSetInstance.readOnly; // $ExpectType boolean
atnConfigSetInstance.configs; // $ExpectType ATNConfig[]
atnConfigSetInstance.uniqueAlt; // $ExpectType number
atnConfigSetInstance.conflictingAlts; // $ExpectType BitSet
atnConfigSetInstance.hasSemanticContext; // $ExpectType boolean
atnConfigSetInstance.dipsIntoOuterContext; // $ExpectType boolean
atnConfigSetInstance.cachedHashCode; // $ExpectType number
atnConfigSetInstance.add(atnConfigInstance); // $ExpectType boolean
atnConfigSetInstance.add(atnConfigInstance, new DoubleDict({})); // $ExpectType boolean
atnConfigSetInstance.getStates(); // $ExpectType HashSet
atnConfigSetInstance.getPredicates(); // $ExpectType SemanticContext[]
atnConfigSetInstance.optimizeConfigs(atnSimulatorInstance); // $ExpectType void
atnConfigSetInstance.addAll([atnConfigInstance]); // $ExpectType boolean
atnConfigSetInstance.equals(atnConfigSetInstance); // $ExpectType boolean
atnConfigSetInstance.hashCode(); // $ExpectType number
atnConfigSetInstance.updateHashCode(hashCodeInstance); // $ExpectType void
atnConfigSetInstance.isEmpty(); // $ExpectType boolean
atnConfigSetInstance.contains({}); // $ExpectType boolean
atnConfigSetInstance.containsFast({}); // $ExpectType boolean
atnConfigSetInstance.clear(); // $ExpectType void
atnConfigSetInstance.setReadonly(true); // $ExpectType void
atnConfigSetInstance.toString(); // $ExpectType string
atnConfigSetInstance.items; // $ExpectType ATNConfig[]
atnConfigSetInstance.length; // $ExpectType number

// ATN
atnInstance; // $ExpectType ATN
atnInstance.grammarType; // $ExpectType number
atnInstance.maxTokenType; // $ExpectType number
atnInstance.states; // $ExpectType number[]
atnInstance.decisionToState; // $ExpectType DecisionState[]
atnInstance.ruleToStartState; // $ExpectType RuleStartState[]
atnInstance.ruleToStopState; // $ExpectType RuleStopState[]
atnInstance.modeNameToStartState; // $ExpectType Record<string, TokensStartState>
atnInstance.ruleToTokenType; // $ExpectType number[]
atnInstance.lexerActions; // $ExpectType LexerAction[]
atnInstance.modeToStartState; // $ExpectType TokensStartState[]
atnInstance.nextTokensInContext(atnStateInstance); // $ExpectType IntervalSet
atnInstance.nextTokensInContext(atnStateInstance, parserRuleContextInstance); // $ExpectType IntervalSet
atnInstance.nextTokensNoContext(atnStateInstance); // $ExpectType IntervalSet
atnInstance.nextTokens(atnStateInstance); // $ExpectType IntervalSet
atnInstance.nextTokens(atnStateInstance, parserRuleContextInstance); // $ExpectType IntervalSet
atnInstance.addState(atnStateInstance); // $ExpectType void
atnInstance.removeState(atnStateInstance); // $ExpectType void
atnInstance.defineDecisionState(decisionStateInstance); // $ExpectType number
atnInstance.getDecisionState(0); // $ExpectType DecisionState
atnInstance.getExpectedTokens(0, parserRuleContextInstance); // $ExpectType IntervalSet

// ATNDeserializationOptions
ATNDeserializationOptions.defaultOptions; // $ExpectType ATNDeserializationOptions
const atnDeserializerOptionsInstance = new ATNDeserializationOptions();
new ATNDeserializationOptions(atnDeserializerOptionsInstance);
atnDeserializerOptionsInstance.readOnly; // $ExpectType boolean
atnDeserializerOptionsInstance.verifyATN; // $ExpectType boolean | null
atnDeserializerOptionsInstance.generateRuleBypassTransitions; // $ExpectType boolean

// ATNDeserializer
const atnDeserializerInstance = new ATNDeserializer();
new ATNDeserializer(atnDeserializerOptionsInstance);
atnDeserializerInstance.deserializationOptions; // $ExpectType ATNDeserializationOptions
atnDeserializerInstance.stateFactories; // $ExpectType ((() => BasicState) | null)[] | null
atnDeserializerInstance.actionFactories; // $ExpectType ((dataA: any, dataB: any) => LexerAction)[] | null
atnDeserializerInstance.data; // $ExpectType number[]
atnDeserializerInstance.pos; // $ExpectType number | undefined
atnDeserializerInstance.deserialize([0]); // $ExpectType ATN
atnDeserializerInstance.reset([0]); // $ExpectType boolean
atnDeserializerInstance.reset(""); // $ExpectType boolean
atnDeserializerInstance.skipUUID(); // $ExpectType void
atnDeserializerInstance.checkVersion(false); // $ExpectType void
atnDeserializerInstance.readATN(); // $ExpectType ATN
atnDeserializerInstance.readStates(atnInstance, false); // $ExpectType void
atnDeserializerInstance.readRules(atnInstance, false); // $ExpectType void
atnDeserializerInstance.readModes(atnInstance); // $ExpectType void
atnDeserializerInstance.readSets(atnInstance, [intervalSetInstance], () => 0); // $ExpectType void
atnDeserializerInstance.readEdges(atnInstance, [intervalSetInstance]); // $ExpectType void
atnDeserializerInstance.readDecisions(atnInstance); // $ExpectType void
atnDeserializerInstance.readLexerActions(atnInstance, false); // $ExpectType void
atnDeserializerInstance.generateRuleBypassTransitions(atnInstance); // $ExpectType void
atnDeserializerInstance.generateRuleBypassTransition(atnInstance, 0); // $ExpectType void
atnDeserializerInstance.stateIsEndStateFor(atnStateInstance, 0); // $ExpectType StarLoopEntryState | null
atnDeserializerInstance.markPrecedenceDecisions(atnInstance); // $ExpectType void
atnDeserializerInstance.verifyATN(atnInstance); // $ExpectType void
atnDeserializerInstance.checkCondition(false); // $ExpectType void
atnDeserializerInstance.checkCondition(true, ""); // $ExpectType void
atnDeserializerInstance.readInt(); // $ExpectType number | undefined
atnDeserializerInstance.readInt32(); // $ExpectType number
atnDeserializerInstance.edgeFactory(atnInstance, 0, 0, 0, 0, 0, 0, [intervalSetInstance]); // $ExpectType Transition
atnDeserializerInstance.stateFactory(0, 0); // $ExpectType BasicState | undefined
atnDeserializerInstance.lexerActionFactory(0, 0, 0); // $ExpectType LexerAction

// ATNSimulator
ATNSimulator.ERROR; // $ExpectType DFAState
atnSimulatorInstance; // $ExpectType ATNSimulator
atnSimulatorInstance.atn; // $ExpectType ATN
atnSimulatorInstance.sharedContextCache; // $ExpectType PredictionContextCache
atnSimulatorInstance.getCachedContext(predictionContextInstance); // $ExpectType PredictionContext

// LexerActionExecutor
new LexerActionExecutor([lexerActionInstance]);
LexerActionExecutor.append(lexerActionExecutorInstance, lexerActionInstance);
lexerActionExecutorInstance; // $ExpectType LexerActionExecutor
lexerActionExecutorInstance.lexerActions; // $ExpectType LexerAction[]
lexerActionExecutorInstance.cachedHashCode; // $ExpectType number
lexerActionExecutorInstance.fixOffsetBeforeMatch(0); // $ExpectType LexerActionExecutor
lexerActionExecutorInstance.execute(lexerInstance, inputStreamInstance, 0); // $ExpectType void
lexerActionExecutorInstance.hashCode(); // $ExpectType number
lexerActionExecutorInstance.updateHashCode(hashCodeInstance); // $ExpectType void
lexerActionExecutorInstance.equals(lexerActionExecutorInstance); // $ExpectType boolean

// LexerActionType
LexerActionType.CHANNEL; // $ExpectType LexerActionType.CHANNEL
LexerActionType.CUSTOM; // $ExpectType LexerActionType.CUSTOM
LexerActionType.MODE; // $ExpectType LexerActionType.MODE
LexerActionType.MORE; // $ExpectType LexerActionType.MORE
LexerActionType.POP_MODE; // $ExpectType LexerActionType.POP_MODE
LexerActionType.PUSH_MODE; // $ExpectType LexerActionType.PUSH_MODE
LexerActionType.SKIP; // $ExpectType LexerActionType.SKIP
LexerActionType.TYPE; // $ExpectType LexerActionType.TYPE

// LexerATNConfig
const lexerAtnConfigInstance = new LexerATNConfig(atnStateInstance, atnConfigInstance);
lexerAtnConfigInstance.lexerActionExecutor; // $ExpectType LexerActionExecutor | null
lexerAtnConfigInstance.passedThroughNonGreedyDecision; // $ExpectType boolean
lexerAtnConfigInstance.checkNonGreedyDecision(atnConfigInstance, atnStateInstance); // $ExpectType

// LexerATNSimulator
const dfaInstance = new DFA(atnInstance, 0);
LexerATNSimulator.debug; // $ExpectType false
LexerATNSimulator.dfa_debug; // $ExpectType false
LexerATNSimulator.MIN_DFA_EDGE; // $ExpectType 0
LexerATNSimulator.MAX_DFA_EDGE; // $ExpectType 127
const lexerAtnSimulatorInstance = new LexerATNSimulator(
    lexerInstance,
    atnInstance,
    [dfaInstance],
    predictionContextCacheInstance,
);
lexerAtnSimulatorInstance.decisionToDFA; // $ExpectType DFA[]
lexerAtnSimulatorInstance.recog; // $ExpectType Lexer
lexerAtnSimulatorInstance.startIndex; // $ExpectType number
lexerAtnSimulatorInstance.line; // $ExpectType number
lexerAtnSimulatorInstance.column; // $ExpectType number
lexerAtnSimulatorInstance.mode; // $ExpectType number
lexerAtnSimulatorInstance.copyState(lexerAtnSimulatorInstance); // $ExpectType void
lexerAtnSimulatorInstance.match(inputStreamInstance, 0); // $ExpectType number
lexerAtnSimulatorInstance.reset(); // $ExpectType void
lexerAtnSimulatorInstance.matchATN(inputStreamInstance); // $ExpectType number
lexerAtnSimulatorInstance.execATN(inputStreamInstance, dfaStateInstance); // $ExpectType number
lexerAtnSimulatorInstance.getExistingTargetState(dfaStateInstance, 0); // $ExpectType DFAState | null
lexerAtnSimulatorInstance.computeTargetState(inputStreamInstance, dfaStateInstance, 0); // $ExpectType DFAState
lexerAtnSimulatorInstance.failOrAccept(simStateInstance, inputStreamInstance, atnConfigSetInstance, 0); // $ExpectType number
lexerAtnSimulatorInstance.getReachableConfigSet(inputStreamInstance, atnConfigSetInstance, atnConfigSetInstance, 0); // $ExpectType void
lexerAtnSimulatorInstance.accept(inputStreamInstance, lexerActionExecutorInstance, 0, 0, 0, 0); // $ExpectType void
lexerAtnSimulatorInstance.accept(inputStreamInstance, null, 0, 0, 0, 0); // $ExpectType void
lexerAtnSimulatorInstance.getReachableTarget(transitionInstance, 0); // $ExpectType ATNState
lexerAtnSimulatorInstance.computeStartState(inputStreamInstance, decisionStateInstance); // $ExpectType OrderedATNConfigSet
lexerAtnSimulatorInstance.closure(inputStreamInstance, atnConfigInstance, atnConfigSetInstance, false, false, false); // $ExpectType boolean
// $ExpectType LexerATNConfig | null
lexerAtnSimulatorInstance.getEpsilonTarget(
    inputStreamInstance,
    atnConfigInstance,
    transitionInstance,
    atnConfigSetInstance,
    false,
    false,
);
lexerAtnSimulatorInstance.evaluatePredicate(inputStreamInstance, 0, 0, false); // $ExpectType boolean
lexerAtnSimulatorInstance.captureSimState(simStateInstance, inputStreamInstance, dfaStateInstance); // $ExpectType void
lexerAtnSimulatorInstance.addDFAEdge(dfaStateInstance, 0); // $ExpectType DFAState
lexerAtnSimulatorInstance.addDFAEdge(dfaStateInstance, 0, dfaStateInstance); // $ExpectType DFAState
lexerAtnSimulatorInstance.addDFAEdge(dfaStateInstance, 0, undefined, atnConfigSetInstance); // $ExpectType DFAState
lexerAtnSimulatorInstance.addDFAEdge(dfaStateInstance, 0, dfaStateInstance, atnConfigSetInstance); // $ExpectType DFAState
lexerAtnSimulatorInstance.addDFAState(atnConfigSetInstance); // $ExpectType DFAState
lexerAtnSimulatorInstance.getDFA(0); // $ExpectType DFA | undefined
lexerAtnSimulatorInstance.getText(inputStreamInstance); // $ExpectType string
lexerAtnSimulatorInstance.consume(inputStreamInstance); // $ExpectType void
lexerAtnSimulatorInstance.getTokenName(0); // $ExpectType string

// LL1Analyzer
LL1Analyzer.HIT_PRED; // $ExpectType 0
const ll1AnalyzerInstance = new LL1Analyzer(atnStateInstance);
ll1AnalyzerInstance.getDecisionLookahead(atnStateInstance); // $ExpectType (IntervalSet | null)[] | null
ll1AnalyzerInstance.LOOK(atnStateInstance, atnStateInstance, parserRuleContextInstance); // $ExpectType IntervalSet
ll1AnalyzerInstance.LOOK(atnStateInstance, blockEndStateInstance, parserRuleContextInstance); // $ExpectType IntervalSet

// OrderedATNConfigSet
new OrderedATNConfigSet();

// ParserATNSimulator
const parserATNSimulatorInstance = new ParserATNSimulator(
    parserInstance,
    atnInstance,
    [dfaInstance],
    predictionContextCacheInstance,
);
parserATNSimulatorInstance.parser; // $ExpectType Parser
parserATNSimulatorInstance.decisionToDFA; // $ExpectType DFA[]
parserATNSimulatorInstance.predictionMode; // $ExpectType number
parserATNSimulatorInstance._input; // $ExpectType TokenStream | null
parserATNSimulatorInstance._startIndex; // $ExpectType number
parserATNSimulatorInstance._outerContext; // $ExpectType ParserRuleContext
parserATNSimulatorInstance._dfa; // $ExpectType DFA
parserATNSimulatorInstance.mergeCache; // $ExpectType DoubleDict | null
parserATNSimulatorInstance.debug; // $ExpectType boolean
parserATNSimulatorInstance.debug_closure; // $ExpectType boolean
parserATNSimulatorInstance.debug_add; // $ExpectType boolean
parserATNSimulatorInstance.debug_list_atn_decisions; // $ExpectType boolean
parserATNSimulatorInstance.dfa_debug; // $ExpectType boolean
parserATNSimulatorInstance.retry_debug; // $ExpectType boolean
parserATNSimulatorInstance.reset(); // $ExpectType void
parserATNSimulatorInstance.adaptivePredict(tokenStreamInstance, 0, parserRuleContextInstance); // $ExpectType ParserATNSimulator
parserATNSimulatorInstance.execATN(dfaInstance, dfaStateInstance, tokenStreamInstance, 0, parserRuleContextInstance); // $ExpectType number
parserATNSimulatorInstance.getExistingTargetState(dfaStateInstance, 0); // $ExpectType DFAState
parserATNSimulatorInstance.computeTargetState(dfaInstance, dfaStateInstance, 0); // $ExpectType DFAState
parserATNSimulatorInstance.predicateDFAState(dfaStateInstance, decisionStateInstance); // $ExpectType void
// $ExpectType number
parserATNSimulatorInstance.execATNWithFullContext(
    dfaInstance,
    dfaStateInstance,
    atnConfigSetInstance,
    tokenStreamInstance,
    0,
    parserRuleContextInstance,
);
parserATNSimulatorInstance.computeReachSet(atnConfigSetInstance, 0, false); // $ExpectType ATNConfigSet
parserATNSimulatorInstance.removeAllConfigsNotInRuleStopState(atnConfigSetInstance, false); // $ExpectType ATNConfigSet
parserATNSimulatorInstance.computeStartState(atnStateInstance, parserRuleContextInstance, false); // $ExpectType ATNConfigSet
parserATNSimulatorInstance.applyPrecedenceFilter(atnConfigSetInstance); // $ExpectType ATNConfigSet
parserATNSimulatorInstance.getReachableTarget(transitionInstance, 0); // $ExpectType ATNState
parserATNSimulatorInstance.getPredsForAmbigAlts(bitsetInstance, atnConfigSetInstance, 0); // $ExpectType SemanticContext[]
parserATNSimulatorInstance.getPredicatePredictions(bitsetInstance, [predicateInstance]); // $ExpectType PredPrediction[] | null
// $ExpectType number
parserATNSimulatorInstance.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(
    atnConfigSetInstance,
    parserRuleContextInstance,
);
parserATNSimulatorInstance.getAltThatFinishedDecisionEntryRule(atnConfigSetInstance); // $ExpectType number
parserATNSimulatorInstance.splitAccordingToSemanticValidity(atnConfigSetInstance, parserRuleContextInstance); // $ExpectType ATNConfigSet[]
parserATNSimulatorInstance.evalSemanticContext([predPredictionInstance], parserRuleContextInstance, false); // $ExpectType BitSet
parserATNSimulatorInstance.closure(atnConfigInstance, atnConfigSetInstance, hashSetInstance, false, false, false); // $ExpectType void
// $ExpectType void
parserATNSimulatorInstance.closureCheckingStopState(
    atnConfigInstance,
    atnConfigSetInstance,
    hashSetInstance,
    false,
    false,
    0,
    false,
);
parserATNSimulatorInstance.canDropLoopEntryEdgeInLeftRecursiveRule(atnConfigInstance); // $ExpectType boolean
parserATNSimulatorInstance.getRuleName(0); // $ExpectType string
parserATNSimulatorInstance.getEpsilonTarget(atnConfigInstance, transitionInstance, false, false, false, false); // $ExpectType ATNConfig | null
parserATNSimulatorInstance.actionTransition(atnConfigInstance, transitionInstance); // $ExpectType ATNConfig
parserATNSimulatorInstance.precedenceTransition(atnConfigInstance, transitionInstance, false, false, false); // $ExpectType ATNConfig | null
parserATNSimulatorInstance.predTransition(atnConfigInstance, transitionInstance, false, false, false); // $ExpectType ATNConfig | null
parserATNSimulatorInstance.ruleTransition(atnConfigInstance, transitionInstance); // $ExpectType ATNConfig
parserATNSimulatorInstance.getConflictingAlts(atnConfigSetInstance); // $ExpectType BitSet
parserATNSimulatorInstance.getConflictingAltsOrUniqueAlt(atnConfigSetInstance); // $ExpectType BitSet
parserATNSimulatorInstance.getTokenName(0); // $ExpectType string
parserATNSimulatorInstance.getLookaheadName(tokenStreamInstance); // $ExpectType string
parserATNSimulatorInstance.dumpDeadEndConfigs(noViableAltExceptionInstance); // $ExpectType void
parserATNSimulatorInstance.noViableAlt(tokenStreamInstance, parserRuleContextInstance, atnConfigSetInstance, 0); // $ExpectType NoViableAltException
parserATNSimulatorInstance.getUniqueAlt(atnConfigSetInstance); // $ExpectType number
parserATNSimulatorInstance.addDFAEdge(dfaInstance, dfaStateInstance, 0, dfaStateInstance); // $ExpectType DFAState
parserATNSimulatorInstance.addDFAState(dfaInstance, dfaStateInstance); // $ExpectType DFAState
parserATNSimulatorInstance.reportAttemptingFullContext(dfaInstance, bitsetInstance, atnConfigSetInstance, 0, 0); // $ExpectType void
parserATNSimulatorInstance.reportContextSensitivity(dfaInstance, 0, atnConfigSetInstance, 0, 0); // $ExpectType void
// $ExpectType void
parserATNSimulatorInstance.reportAmbiguity(
    dfaInstance,
    dfaStateInstance,
    0,
    0,
    false,
    bitsetInstance,
    atnConfigSetInstance,
);

// PrecedencePredicate
const precedencePredicateInstance = new PrecedencePredicate(0);
precedencePredicateInstance.precedence; // $ExpectType number
precedencePredicateInstance.evaluate(parserInstance, parserRuleContextInstance); // $ExpectType boolean
precedencePredicateInstance.evalPrecedence(parserInstance, parserRuleContextInstance); // $ExpectType PrecedencePredicate
precedencePredicateInstance.compareTo(precedencePredicateInstance); // $ExpectType number
precedencePredicateInstance.updateHashCode(hashCodeInstance); // $ExpectType void
precedencePredicateInstance.equals(precedencePredicateInstance); // $ExpectType boolean

// Predicate
predicateInstance; // $ExpectType Predicate
new Predicate(0);
new Predicate(undefined, 0);
new Predicate(undefined, 0, true);
new Predicate(0, 0, false);
predicateInstance.ruleIndex; // $ExpectType number
predicateInstance.predIndex; // $ExpectType number
predicateInstance.isCtxDependent; // $ExpectType boolean
predicateInstance.evaluate(parserInstance, parserRuleContextInstance); // $ExpectType boolean
predicateInstance.updateHashCode(hashCodeInstance); // $ExpectType void
predicateInstance.equals(predicateInstance); // $ExpectType boolean

// PredictionContextCache
predictionContextCacheInstance; // $ExpectType PredictionContextCache
predictionContextCacheInstance.cache; // $ExpectType HashMap
predictionContextCacheInstance.add(predictionContextInstance); // $ExpectType PredictionContext
predictionContextCacheInstance.get(predictionContextInstance); // $ExpectType PredictionContext | null
predictionContextCacheInstance.length; // $ExpectType number

// PredictionMode
PredictionMode.SLL; // $ExpectType 0
PredictionMode.LL; // $ExpectType 1
PredictionMode.LL_EXACT_AMBIG_DETECTION; // $ExpectType 2
PredictionMode.hasSLLConflictTerminatingPrediction(0, atnConfigSetInstance); // $ExpectType boolean
PredictionMode.hasConfigInRuleStopState(atnConfigSetInstance); // $ExpectType boolean
PredictionMode.allConfigsInRuleStopStates(atnConfigSetInstance); // $ExpectType boolean
PredictionMode.resolvesToJustOneViableAlt(bitsetCollection); // $ExpectType number
PredictionMode.allSubsetsConflict(bitsetCollection); // $ExpectType boolean
PredictionMode.hasNonConflictingAltSet(bitsetCollection); // $ExpectType boolean
PredictionMode.hasConflictingAltSet(bitsetCollection); // $ExpectType boolean
PredictionMode.allSubsetsEqual(bitsetCollection); // $ExpectType boolean
PredictionMode.getUniqueAlt(bitsetCollection); // $ExpectType number
PredictionMode.getAlts(bitsetCollection); // $ExpectType BitSet
PredictionMode.getConflictingAltSubsets(atnConfigSetInstance); // $ExpectType
PredictionMode.getStateToAltMap(atnConfigSetInstance); // $ExpectType AltDict
PredictionMode.hasStateAssociatedWithOneAlt(atnConfigSetInstance); // $ExpectType boolean
PredictionMode.getSingleViableAlt(bitsetCollection); // $ExpectType number

// SemanticContext
SemanticContext.NONE; // $ExpectType Predicate
SemanticContext.andContext(predicateInstance, predicateInstance); // $ExpectType AND
SemanticContext.orContext(predicateInstance, predicateInstance); // $ExpectType OR
class NewSemanticContext extends SemanticContext {
    evaluate(_parser: Recognizer, _outerContext: RuleContext): boolean {
        throw new Error("Method not implemented.");
    }
    evalPrecedence(_parser: Recognizer, _outerContext: RuleContext): SemanticContext | null {
        throw new Error("Method not implemented.");
    }
}
const newSemanticContextInstance = new NewSemanticContext();
newSemanticContextInstance.hashCode(); // $ExpectType number
newSemanticContextInstance.evaluate(parserInstance, parserRuleContextInstance); // $ExpectType boolean
newSemanticContextInstance.evalPrecedence(parserInstance, parserRuleContextInstance); // $ExpectType SemanticContext | null
