import IntervalSet from "../misc/IntervalSet";
import ATNState from "../state/ATNState";
import Transition from "./Transition";

export default class SetTransition extends Transition {
    readonly serializationType: number;

    constructor(target: ATNState, set: IntervalSet);

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;

    toString(): string;
}
