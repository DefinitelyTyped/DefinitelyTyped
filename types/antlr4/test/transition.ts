import IntervalSet from "antlr4/misc/IntervalSet";
import ATNState from "antlr4/state/ATNState";
import RuleStartState from "antlr4/state/RuleStartState";
import ActionTransition from "antlr4/transition/ActionTransition";
import AtomTransition from "antlr4/transition/AtomTransition";
import EpsilonTransition from "antlr4/transition/EpsilonTransition";
import PrecedencePredicateTransition from "antlr4/transition/PrecedencePredicateTransition";
import PredicateTransition from "antlr4/transition/PredicateTransition";
import RangeTransition from "antlr4/transition/RangeTransition";
import RuleTransition from "antlr4/transition/RuleTransition";
import SetTransition from "antlr4/transition/SetTransition";
import Transition from "antlr4/transition/Transition";
import WildcardTransition from "antlr4/transition/WildcardTransition";

const atnStateInstance = new ATNState();
const intervalSetInstance = new IntervalSet();
const ruleStartStateInstance = new RuleStartState();

// ActionTransition
const actionTransitionInstance = new ActionTransition(atnStateInstance, 0, 0, true);
actionTransitionInstance.serializationType; // $ExpectType number
actionTransitionInstance.ruleIndex; // $ExpectType number
actionTransitionInstance.actionIndex; // $ExpectType number
actionTransitionInstance.isCtxDependent; // $ExpectType boolean
actionTransitionInstance.matches(0, 0, 0); // $ExpectType false

// AtomTransition
const atomTransitionInstance = new AtomTransition(atnStateInstance, 0);
atomTransitionInstance.label; // $ExpectType IntervalSet
atomTransitionInstance.serializationType; // $ExpectType number
atomTransitionInstance.makeLabel(); // $ExpectType IntervalSet
atomTransitionInstance.matches(0, 0, 0); // $ExpectType boolean
atomTransitionInstance.toString(); // $ExpectType string

// EpsilonTransition
const epsilonTransitionInstance = new EpsilonTransition(atnStateInstance, 0);
epsilonTransitionInstance.serializationType; // $ExpectType number
epsilonTransitionInstance.outermostPrecedenceReturn; // $ExpectType number
epsilonTransitionInstance.matches(0, 0, 0); // $ExpectType false

// PrecedencePredicateTransition
const precedencePredicateTransitionInstance = new PrecedencePredicateTransition(atnStateInstance, 0);
precedencePredicateTransitionInstance.serializationType; // $ExpectType number
precedencePredicateTransitionInstance.precedence; // $ExpectType number
precedencePredicateTransitionInstance.matches(0, 0, 0); // $ExpectType false
precedencePredicateTransitionInstance.getPredicate(); // $ExpectType PrecedencePredicate

// PredicateTransition
const predicateTransitionInstance = new PredicateTransition(atnStateInstance, 0, 0, false);
predicateTransitionInstance.serializationType; // $ExpectType number
predicateTransitionInstance.ruleIndex; // $ExpectType number
predicateTransitionInstance.predIndex; // $ExpectType number
predicateTransitionInstance.isCtxDependent; // $ExpectType boolean
predicateTransitionInstance.matches(0, 0, 0); // $ExpectType false
predicateTransitionInstance.getPredicate(); // $ExpectType Predicate

// RangeTransition
const rangeTransitionInstance = new RangeTransition(atnStateInstance, 0, 0);
rangeTransitionInstance.serializationType; // $ExpectType number
rangeTransitionInstance.start; // $ExpectType number
rangeTransitionInstance.stop; // $ExpectType number
rangeTransitionInstance.label; // $ExpectType IntervalSet
rangeTransitionInstance.makeLabel(); // $ExpectType IntervalSet
rangeTransitionInstance.matches(0, 0, 0); // $ExpectType boolean

// RuleTransition
const ruleTransitionInstance = new RuleTransition(ruleStartStateInstance, 0, 0, atnStateInstance);
ruleTransitionInstance.ruleIndex; // $ExpectType number
ruleTransitionInstance.precedence; // $ExpectType number
ruleTransitionInstance.serializationType; // $ExpectType number
ruleTransitionInstance.followState; // $ExpectType ATNState
ruleTransitionInstance.matches(0, 0, 0); // $ExpectType false

// SetTransition
const setTransitionInstance = new SetTransition(atnStateInstance, intervalSetInstance);
setTransitionInstance.serializationType; // $ExpectType number
setTransitionInstance.matches(0, 0, 0); // $ExpectType boolean
setTransitionInstance.toString(); // $ExpectType string

// Transition

Transition.EPSILON; // $ExpectType 1
Transition.RANGE; // $ExpectType 2
Transition.RULE; // $ExpectType 3
Transition.PREDICATE; // $ExpectType 4
Transition.ATOM; // $ExpectType 5
Transition.ACTION; // $ExpectType 6
Transition.SET; // $ExpectType 7
Transition.NOT_SET; // $ExpectType 8
Transition.WILDCARD; // $ExpectType 9
Transition.PRECEDENCE; // $ExpectType 10
Transition.serializationNames; // $ExpectType ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"]
Transition.serializationTypes.EpsilonTransition; // $ExpectType 1
Transition.serializationTypes.RangeTransition; // $ExpectType 2
Transition.serializationTypes.RuleTransition; // $ExpectType 3
Transition.serializationTypes.PredicateTransition; // $ExpectType 4
Transition.serializationTypes.AtomTransition; // $ExpectType 5
Transition.serializationTypes.ActionTransition; // $ExpectType 6
Transition.serializationTypes.SetTransition; // $ExpectType 7
Transition.serializationTypes.NotSetTransition; // $ExpectType 8
Transition.serializationTypes.WildcardTransition; // $ExpectType 9
Transition.serializationTypes.PrecedencePredicateTransition; // $ExpectType 10
const transitionInstance = new Transition(atnStateInstance);
transitionInstance.target; // $ExpectType ATNState

// WildcardTransition
const wildcardTransition = new WildcardTransition(atnStateInstance);
wildcardTransition.serializationType; // $ExpectType number
