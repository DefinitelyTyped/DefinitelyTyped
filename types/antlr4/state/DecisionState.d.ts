import ATNState from "./ATNState";

export default class DecisionState extends ATNState {
    decision: number;
    nonGreedy: boolean;
}
