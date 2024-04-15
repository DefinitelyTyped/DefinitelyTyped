import ATNState from "./ATNState";

/**
 * Terminal node of a simple `(a|b|c)` block.
 */
export default class BlockEndState extends ATNState {
    stateType: number;
    startState: BlockEndState;
}
