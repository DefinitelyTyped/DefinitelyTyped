import IntervalSet from "../misc/IntervalSet";
import ATNState from "../state/ATNState";
import Transition from "./Transition";

export default class RangeTransition extends Transition {
    readonly serializationType: number;
    readonly start: number;
    readonly stop: number;
    readonly label: IntervalSet;

    constructor(target: ATNState, start: number, stop: number);

    makeLabel(): IntervalSet;

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
}
