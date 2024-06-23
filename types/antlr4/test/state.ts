import ATNState from "antlr4/state/ATNState";
import BasicState from "antlr4/state/BasicState";
import BlockEndState from "antlr4/state/BlockEndState";
import DecisionState from "antlr4/state/DecisionState";
import RuleStartState from "antlr4/state/RuleStartState";
import RuleStopState from "antlr4/state/RuleStopState";
import StarLoopbackState from "antlr4/state/StarLoopbackState";
import StarLoopEntryState from "antlr4/state/StarLoopEntryState";
import TokensStartState from "antlr4/state/TokensStartState";
import Transition from "antlr4/transition/Transition";

const atnStateInstance = new ATNState();
const transitionInstance = new Transition(atnStateInstance);

// ATNState
ATNState.INVALID_TYPE; // $ExpectType 0
ATNState.BASIC; // $ExpectType 1
ATNState.RULE_START; // $ExpectType 2
ATNState.BLOCK_START; // $ExpectType 3
ATNState.PLUS_BLOCK_START; // $ExpectType 4
ATNState.STAR_BLOCK_START; // $ExpectType 5
ATNState.TOKEN_START; // $ExpectType 6
ATNState.RULE_STOP; // $ExpectType 7
ATNState.BLOCK_END; // $ExpectType 8
ATNState.STAR_LOOP_BACK; // $ExpectType 9
ATNState.STAR_LOOP_ENTRY; // $ExpectType 10
ATNState.PLUS_LOOP_BACK; // $ExpectType 11
ATNState.LOOP_END; // $ExpectType 12
ATNState.INVALID_STATE_NUMBER; // $ExpectType -1
ATNState.serializationNames; // $ExpectType ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"]
atnStateInstance.atn; // $ExpectType ATN | null
atnStateInstance.stateNumber; // $ExpectType number
atnStateInstance.stateType; // $ExpectType number | null
atnStateInstance.ruleIndex; // $ExpectType number
atnStateInstance.epsilonOnlyTransitions; // $ExpectType boolean
atnStateInstance.transitions; // $ExpectType Transition[]
atnStateInstance.nextTokenWithinRule; // $ExpectType IntervalSet | null
atnStateInstance.toString(); // $ExpectType number
atnStateInstance.equals(atnStateInstance); // $ExpectType boolean
atnStateInstance.isNonGreedyExitState(); // $ExpectType boolean
atnStateInstance.addTransition(transitionInstance); // $ExpectType void
atnStateInstance.addTransition(transitionInstance, 0); // $ExpectType void

// BasicState
const basicStateInstance = new BasicState();
basicStateInstance.stateType; // $ExpectType number

// BlockEndState
const blockEndState = new BlockEndState();
blockEndState.stateType; // $ExpectType number
blockEndState.startState; // $ExpectType BlockEndState

// DecisionState
const decisionState = new DecisionState();
decisionState.decision; // $ExpectType number
decisionState.nonGreedy; // $ExpectType boolean

// RuleStartState
const ruleStartState = new RuleStartState();
ruleStartState.stateType; // $ExpectType number
ruleStartState.stopState; // $ExpectType RuleStopState
ruleStartState.isPrecedenceRule; // $ExpectType boolean

// RuleStopState
const ruleStopStateInstance = new RuleStopState();
ruleStopStateInstance.stateType; // $ExpectType number

// RuleStopState
const starLoopbackState = new StarLoopbackState();
starLoopbackState.stateType; // $ExpectType number

// StarLoopEntryState
const starLoopEntryState = new StarLoopEntryState();
starLoopEntryState.stateType; // $ExpectType number
starLoopEntryState.loopBackState; // $ExpectType StarLoopbackState | null
starLoopEntryState.isPrecedenceDecision; // $ExpectType boolean | null

// TokensStartState
const tokensStartState = new TokensStartState();
tokensStartState.stateType; // $ExpectType number
