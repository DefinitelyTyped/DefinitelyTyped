import LexerAction from 'antlr4/action/LexerAction';
import atn from 'antlr4/atn';
import ATNConfig, { ATNConfigConfig } from 'antlr4/atn/ATNConfig';
import ATNConfigSet from 'antlr4/atn/ATNConfigSet';
import ATNDeserializationOptions from 'antlr4/atn/ATNDeserializationOptions';
import LexerActionExecutor from 'antlr4/atn/LexerActionExecutor';
import LexerActionType from 'antlr4/atn/LexerActionType';
import { SimState } from 'antlr4/atn/LexerATNSimulator';
import Predicate from 'antlr4/atn/Predicate';
import PredictionContextCache from 'antlr4/atn/PredictionContextCache';
import CommonTokenStream from 'antlr4/CommonTokenStream';
import ParserRuleContext from 'antlr4/context/ParserRuleContext';
import PredictionContext from 'antlr4/context/PredictionContext';
import DFA from 'antlr4/dfa/DFA';
import DFAState from 'antlr4/dfa/DFAState';
import PredPrediction from 'antlr4/dfa/PredPrediction';
import NoViableAltException from 'antlr4/error/NoViableAltException';
import InputStream from 'antlr4/InputStream';
import Lexer from 'antlr4/Lexer';
import BitSet from 'antlr4/misc/BitSet';
import HashSet from 'antlr4/misc/HashSet';
import Parser from 'antlr4/Parser';
import ATNState from 'antlr4/state/ATNState';
import DecisionState from 'antlr4/state/DecisionState';
import TokenStream from 'antlr4/TokenStream';
import Transition from 'antlr4/transition/Transition';

const { ATN, ATNDeserializer, LexerATNSimulator, ParserATNSimulator, PredictionMode } = atn;

const atnConfigInstance = new ATNConfig();
const atnConfigSetInstance = new ATNConfigSet(false);
const atnStateInstance = new ATNState();
const bitsetInstance = new BitSet();
const bitsetCollection = [bitsetInstance];
const decisionStateInstance = new DecisionState();
const dfaStateInstance = new DFAState(0, atnConfigSetInstance);
const hashSetInstance = new HashSet();
const inputStreamInstance = new InputStream('');
const lexerActionExecutorInstance = new LexerActionExecutor();
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
const predPredictionInstance = new PredPrediction(predicateInstance, 0);
const simStateInstance = new SimState();
const tokenStreamInstance = new TokenStream();
const transitionInstance = new Transition(atnStateInstance);

const predictionContextInstance = new PredictionContext(0);

new LexerActionExecutor([new LexerAction(LexerActionType.CHANNEL)]);

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

// Predicate
new Predicate(0);
new Predicate(undefined, 0);
new Predicate(undefined, 0, true);
new Predicate(0, 0, false);

// ATN
const atnInstance = new ATN(0, 0);
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
