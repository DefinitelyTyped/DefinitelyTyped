import ATNState from "../state/ATNState";
import Transition from "./Transition";

export default class ActionTransition extends Transition {
    readonly serializationType: number;
    readonly ruleIndex: number;
    readonly actionIndex: number;
    readonly isCtxDependent: boolean;

    constructor(target: ATNState, ruleIndex: number, actionIndex: number, isCtxDependent: boolean);

    matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): false;
}
