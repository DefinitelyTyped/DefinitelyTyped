import ATNConfigSet from "../atn/ATNConfigSet";
import LexerActionExecutor from "../atn/LexerActionExecutor";
import HashSet from "../misc/HashSet";
import PredPrediction from "./PredPrediction";

/**
 * A DFA state represents a set of possible ATN configurations.
 * As Aho, Sethi, Ullman p. 117 says "The DFA uses its state
 * to keep track of all possible states the ATN can be in after
 * reading each input symbol. That is to say, after reading
 * input a1a2..an, the DFA is in a state that represents the
 * subset T of the states of the ATN that are reachable from the
 * ATN's start state along some path labeled a1a2..an."
 * In conventional NFA->>DFA conversion, therefore, the subset T
 * would be a bitset representing the set of states the
 * ATN could be in. We need to track the alt predicted by each
 * state as well, however. More importantly, we need to maintain
 * a stack of states, tracking the closure operations as they
 * jump from rule to rule, emulating rule invocations (method calls).
 * I have to add a stack to simulate the proper lookahead sequences for
 * the underlying LL grammar from which the ATN was derived.
 *
 * I use a set of ATNConfig objects not simple states. An ATNConfig
 * is both a state (ala normal conversion) and a RuleContext describing
 * the chain of rules (if any) followed to arrive at that state.
 *
 * A DFA state may have multiple references to a particular state,
 * but with different ATN contexts (with same or different alts)
 * meaning that state was reached via a different set of rule invocations.
 */
export default class DFAState {
    stateNumber: number;
    configs: ATNConfigSet;

    /**
     * `edges[symbol]` points to target of symbol. Shift up by 1 so (-1)
     * {@link Token.EOF} maps to `edges[0]`.
     */
    edges: DFAState[];

    isAcceptState: boolean;

    /**
     * if accept state, what ttype do we match or alt do we predict?
     * This is set to {@link ATN.INVALID_ALT_NUMBER} when {@link predicates}
     * `!=null` or {@link requiresFullContext}.
     */
    prediction: number;

    lexerActionExecutor: LexerActionExecutor;

    /**
     * Indicates that this state was created during SLL prediction that
     * discovered a conflict between the configurations in the state. Future
     * {@link ParserATNSimulator.execATN} invocations immediately jumped doing
     * full context prediction if this field is true.
     */
    requiresFullContext: boolean;

    /**
     * During SLL parsing, this is a list of predicates associated with the
     * ATN configurations of the DFA state. When we have predicates,
     * {@link requiresFullContext} is `false` since full context
     * prediction evaluates predicates on-the-fly. If this is not
     * null, then {@link prediction} is {@link ATN.INVALID_ALT_NUMBER}.
     *
     * We only use these for non-{@link requiresFullContext} but
     * conflicting states. That means we know from the context
     * (it's $ or we don't dip into outer context) that it's an
     * ambiguity not a conflict.
     *
     * This list is computed by {@link ParserATNSimulator.predicateDFAState}.
     */
    predicates: PredPrediction;

    constructor(stateNumber: number, configs: ATNConfigSet);

    /**
     * Get the set of all alts mentioned by all ATN configurations in this
     * DFA state.
     */
    getAltSet(): HashSet | null;

    /**
     * Two {@link DFAState} instances are equal if their ATN configuration sets
     * are the same. This method is used to see if a state already exists.
     *
     * Because the number of alternatives and number of ATN configurations are
     * finite, there is a finite number of DFA states that can be processed.
     * This is necessary to show that the algorithm terminates.
     *
     * Cannot test the DFA state numbers here because in {@link ParserATNSimulator.addDFAState}
     * we need to know if any other state exists that has this exact set of ATN configurations.
     * The {@link stateNumber} is irrelevant.
     */
    equals(other: DFAState): boolean;

    toString(): string;

    hashCode(): number;
}
