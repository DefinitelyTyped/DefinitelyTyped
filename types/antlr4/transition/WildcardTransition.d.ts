import Transition from "./Transition";

export default class WildcardTransition extends Transition {
    readonly serializationType: number;

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
}
