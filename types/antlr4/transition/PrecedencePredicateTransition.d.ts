import AbstractPredicateTransition from "../atn/AbstractPredicateTransition";
import PrecedencePredicate from "../atn/PrecedencePredicate";
import ATNState from "../state/ATNState";

export default class PrecedencePredicateTransition extends AbstractPredicateTransition {
    readonly serializationType: number;
    readonly precedence: number;

    constructor(target: ATNState, precedence: number);

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): false;

    getPredicate(): PrecedencePredicate;
}
