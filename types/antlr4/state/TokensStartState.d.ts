import DecisionState from "./DecisionState";

/**
 * The Tokens rule start state linking to each lexer rule start state
 */
export default class TokensStartState extends DecisionState {
    stateType: number;
}
