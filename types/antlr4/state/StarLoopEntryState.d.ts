import DecisionState from "./DecisionState";
import StarLoopbackState from "./StarLoopbackState";

export default class StarLoopEntryState extends DecisionState {
    stateType: number;
    loopBackState: StarLoopbackState | null;
    isPrecedenceDecision: boolean | null;
}
