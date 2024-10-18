import PredictionContext from "../context/PredictionContext";
import HashCode from "../misc/HashCode";
import ATNState from "../state/ATNState";
import SemanticContext from "./SemanticContext";

export interface ATNConfigConfig extends Pick<ATNConfig, "state" | "alt" | "context" | "semanticContext"> {
    reachesIntoOuterContext: number;
    precedenceFilterSuppressed: boolean;
}

export default class ATNConfig {
    state: ATNState;
    alt: number;

    /**
     * The stack of invoking states leading to the rule/states associated
     * with this config.  We track only those contexts pushed during
     * execution of the ATN simulator
     */
    context: PredictionContext;

    semanticContext: SemanticContext;

    /**
     * We cannot execute predicates dependent upon local context unless
     * we know for sure we are in the correct context. Because there is
     * no way to do this efficiently, we simply cannot evaluate
     * dependent predicates unless we are in the rule that initially
     * invokes the ATN simulator.
     * closure() tracks the depth of how far we dip into the
     * outer context: depth < 0.  Note that it may not be totally
     * accurate depth since I don't ever decrement
     */
    reachesIntoOuterContext: number;

    precedenceFilterSuppressed: boolean;

    /**
     * The syntactic context is a graph-structured stack node whose
     * path(s) to the root is the rule invocation(s)
     * chain used to arrive at the state.  The semantic context is
     * the tree of semantic predicates encountered before reaching
     * an ATN state
     */
    constructor(params?: ATNConfig, config?: ATNConfigConfig);

    checkContext(state: ATNState, config: ATNConfig): void;

    hashCode(): number;

    updateHashCode(hash: HashCode): void;

    /**
     * An ATN configuration is equal to another if both have
     * the same state, they predict the same alternative, and
     * syntactic/semantic contexts are the same
     */
    equals(other: ATNConfig): any;

    hashCodeForConfigSet(): number;

    equalsForConfigSet(other: ATNConfig): boolean;

    toString(): string;
}
