import ATNState from "./ATNState";

/**
 * The last node in the ATN for a rule, unless that rule is the start symbol.
 * In that case, there is one transition to EOF. Later, we might encode
 * references to all calls to this rule to compute FOLLOW sets for
 * error handling
 */
export default class RuleStopState extends ATNState {
    stateType: number;
}
