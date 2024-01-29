import IntervalSet from "../misc/IntervalSet";
import ATNState from "../state/ATNState";

/**
 * An ATN transition between any two ATN states.  Subclasses define
 * atom, set, epsilon, action, predicate, rule transitions.
 *
 * This is a one way link.  It emanates from a state (usually via a list of
 * transitions) and has a target state.
 *
 * Since we never have to change the ATN transitions once we construct it,
 * we can fix these transitions as specific classes. The DFA transitions
 * on the other hand need to update the labels as it adds transitions to
 * the states. We'll use the term Edge for the DFA to distinguish them from
 * ATN transitions.
 */
export default class Transition {
    static readonly EPSILON: 1;
    static readonly RANGE: 2;
    static readonly RULE: 3;
    static readonly PREDICATE: 4;
    static readonly ATOM: 5;
    static readonly ACTION: 6;
    static readonly SET: 7;
    static readonly NOT_SET: 8;
    static readonly WILDCARD: 9;
    static readonly PRECEDENCE: 10;
    static readonly serializationNames: [
        "INVALID",
        "EPSILON",
        "RANGE",
        "RULE",
        "PREDICATE",
        "ATOM",
        "ACTION",
        "SET",
        "NOT_SET",
        "WILDCARD",
        "PRECEDENCE",
    ];
    static readonly serializationTypes: {
        EpsilonTransition: typeof Transition.EPSILON;
        RangeTransition: typeof Transition.RANGE;
        RuleTransition: typeof Transition.RULE;
        PredicateTransition: typeof Transition.PREDICATE;
        AtomTransition: typeof Transition.ATOM;
        ActionTransition: typeof Transition.ACTION;
        SetTransition: typeof Transition.SET;
        NotSetTransition: typeof Transition.NOT_SET;
        WildcardTransition: typeof Transition.WILDCARD;
        PrecedencePredicateTransition: typeof Transition.PRECEDENCE;
    };

    readonly target: ATNState;

    constructor(target: ATNState);
}
