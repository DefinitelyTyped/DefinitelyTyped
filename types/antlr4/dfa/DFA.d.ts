import ATN from "../atn/ATN";
import HashSet from "../misc/HashSet";
import DFAState from "./DFAState";

export default class DFA {
    /**
     * From which ATN state did we create this DFA?
     */
    atnStartState: ATN;

    decision: number;

    s0: DFAState | null;

    /**
     * `true` if this DFA is for a precedence decision; otherwise,
     * `false`. This is the backing field for {@link isPrecedenceDfa},
     * {@link setPrecedenceDfa}
     */
    precedenceDfa: boolean;

    constructor(atnStartState: ATN, decision: number);

    /**
     * Get the start state for a specific precedence value.
     *
     * @param precedence The current precedence.
     * @return The start state corresponding to the specified precedence, or
     * `null` if no start state exists for the specified precedence.
     */
    getPrecedenceStartState(precedence: number): DFAState | null;

    /**
     * Set the start state for a specific precedence value.
     *
     * @param precedence The current precedence.
     * @param startState The start state corresponding to the specified
     * precedence.
     */
    setPrecedenceStartState(precedence: number, startState: DFAState): void;

    /**
     * Sets whether this is a precedence DFA. If the specified value differs
     * from the current DFA configuration, the following actions are taken;
     * otherwise no changes are made to the current DFA.
     *
     * - The {@link states} map is cleared
     * - If `precedenceDfa` is `false`, the initial state
     * {@link s0} is set to `null`; otherwise, it is initialized to a new
     * {@link DFAState} with an empty outgoing {@link DFAState.edges} array to
     * store the start states for individual precedence values.
     * - The {@link precedenceDfa} field is updated
     *
     * @param precedenceDfa `true` if this is a precedence DFA; otherwise, `false`.
     */
    setPrecedenceDfa(precedenceDfa: boolean): void;

    /**
     * Return a list of all states in this DFA, ordered by state number.
     */
    sortedStates(): DFAState[];

    toString(literalNames?: string[], symbolicNames?: string[]): string | null;

    toLexerString(): string | null;

    /**
     * A set of all DFA states. Use {@link Map} so we can get old state back
     * ({@link Set} only allows you to see if it's there).
     */
    get states(): HashSet;
}
