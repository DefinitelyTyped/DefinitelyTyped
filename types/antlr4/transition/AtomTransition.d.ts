import IntervalSet from "../misc/IntervalSet";
import ATNState from "../state/ATNState";
import Transition from "./Transition";

export default class AtomTransition extends Transition {
    readonly label: IntervalSet;
    readonly serializationType: number;

    constructor(target: ATNState, label: number);

    makeLabel(): IntervalSet;

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;

    toString(): string;
}
