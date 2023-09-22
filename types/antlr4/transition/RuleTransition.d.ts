import ATNState from "../state/ATNState";
import RuleStartState from "../state/RuleStartState";
import Transition from "./Transition";

export default class RuleTransition extends Transition {
    readonly ruleIndex: number;
    readonly precedence: number;
    readonly serializationType: number;

    followState: ATNState;

    constructor(ruleStart: RuleStartState, ruleIndex: number, precedence: number, followState: ATNState);

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): false;
}
