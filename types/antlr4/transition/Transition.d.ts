import IntervalSet from '../misc/IntervalSet';
import ATNState from '../state/ATNState';

/**
 * An ATN transition between any two ATN states.  Subclasses define
 * atom, set, epsilon, action, predicate, rule transitions.
 *
 * <p>This is a one way link.  It emanates from a state (usually via a list of
 * transitions) and has a target state.</p>
 *
 * <p>Since we never have to change the ATN transitions once we construct it,
 * we can fix these transitions as specific classes. The DFA transitions
 * on the other hand need to update the labels as it adds transitions to
 * the states. We'll use the term Edge for the DFA to distinguish them from
 * ATN transitions.</p>
 */
declare class Transition {
    target: ATNState;
    isEpsilon: boolean;
    label: IntervalSet | null;

    constructor(target: ATNState);
}

declare namespace Transition {
    const EPSILON: number;
    const RANGE: number;
    const RULE: number;
    const PREDICATE: number;
    const ATOM: number;
    const ACTION: number;
    const SET: number;
    const NOT_SET: number;
    const WILDCARD: number;
    const PRECEDENCE: number;
    const serializationNames: string[];
    namespace serializationTypes {
        import EpsilonTransition = Transition.EPSILON;
        export { EpsilonTransition };
        import RangeTransition = Transition.RANGE;
        export { RangeTransition };
        import RuleTransition = Transition.RULE;
        export { RuleTransition };
        import PredicateTransition = Transition.PREDICATE;
        export { PredicateTransition };
        import AtomTransition = Transition.ATOM;
        export { AtomTransition };
        import ActionTransition = Transition.ACTION;
        export { ActionTransition };
        import SetTransition = Transition.SET;
        export { SetTransition };
        import NotSetTransition = Transition.NOT_SET;
        export { NotSetTransition };
        import WildcardTransition = Transition.WILDCARD;
        export { WildcardTransition };
        import PrecedencePredicateTransition = Transition.PRECEDENCE;
        export { PrecedencePredicateTransition };
    }
}

export default Transition;
