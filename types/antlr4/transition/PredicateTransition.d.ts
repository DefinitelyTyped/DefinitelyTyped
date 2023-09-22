import AbstractPredicateTransition from "../atn/AbstractPredicateTransition";
import Predicate from "../atn/Predicate";
import ATNState from "../state/ATNState";

export default class PredicateTransition extends AbstractPredicateTransition {
    readonly serializationType: number;
    readonly ruleIndex: number;
    readonly predIndex: number;
    readonly isCtxDependent: boolean;

    constructor(target: ATNState, ruleIndex: number, predIndex: number, isCtxDependent: boolean);

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): false;

    getPredicate(): Predicate;
}
