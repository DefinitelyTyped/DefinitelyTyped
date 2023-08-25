import ATNState from "./ATNState";
import RuleStopState from "./RuleStopState";

export default class RuleStartState extends ATNState {
    stateType: number;
    stopState: RuleStopState;
    isPrecedenceRule: boolean;
}
