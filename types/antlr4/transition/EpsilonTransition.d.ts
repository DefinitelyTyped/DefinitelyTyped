import ATNState from "../state/ATNState";
import Transition from "./Transition";

export default class EpsilonTransition extends Transition {
    readonly serializationType: number;
    readonly outermostPrecedenceReturn: number;

    constructor(target: ATNState, outermostPrecedenceReturn: number);

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): false;
}
