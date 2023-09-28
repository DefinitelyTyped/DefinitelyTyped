import RuleContext from "../context/RuleContext";
import HashCode from "../misc/HashCode";
import Recognizer from "../Recognizer";
import SemanticContext from "./SemanticContext";

export default class Predicate extends SemanticContext {
    readonly ruleIndex: number;
    readonly predIndex: number;
    readonly isCtxDependent: boolean;

    constructor(ruleIndex?: number, predIndex?: number, isCtxDependent?: boolean);

    evaluate(parser: Recognizer, outerContext: RuleContext): boolean;

    updateHashCode(hash: HashCode): void;

    equals(other: Predicate): boolean;
}
