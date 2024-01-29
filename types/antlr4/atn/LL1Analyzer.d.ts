import RuleContext from "../context/RuleContext";
import IntervalSet from "../misc/IntervalSet";
import ATNState from "../state/ATNState";
import BlockEndState from "../state/BlockEndState";
import Token from "../Token";

export default class LL1Analyzer {
    static readonly HIT_PRED: typeof Token.INVALID_TYPE;

    constructor(atn: ATNState);

    /**
     * Calculates the SLL(1) expected lookahead set for each outgoing transition
     * of an {@link ATNState}. The returned array has one element for each
     * outgoing transition in `s`. If the closure from transition
     * _i_ leads to a semantic predicate before matching a symbol, the
     * element at index _i_ of the result will be `null`.
     *
     * @param s the ATN state
     * @return the expected symbols for each outgoing transition of `s`.
     */
    getDecisionLookahead(s: ATNState): Array<IntervalSet | null> | null;

    /**
     * Compute set of tokens that can follow `s` in the ATN in the
     * specified `ctx`.
     *
     * If `ctx` is `null` and the end of the rule containing `s` is
     * reached, {@link Token.EPSILON} is added to the result set.
     * If `ctx` is not `null` and the end of the outermost rule is
     * reached, {@link Token.EOF} is added to the result set.
     *
     * @param s the ATN state
     * @param stopState the ATN state to stop at. This can be
     * a {@link BlockEndState} to detect epsilon paths through a closure.
     * @param ctx the complete parser context, or {@code null} if the context
     * should be ignored
     *
     * @return The set of tokens that can follow `s` in the ATN in the specified `ctx`.
     */
    LOOK(s: ATNState, stopState: ATNState | BlockEndState, ctx: RuleContext): IntervalSet;
}
