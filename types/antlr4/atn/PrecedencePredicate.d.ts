import ParserRuleContext from "../context/ParserRuleContext";
import HashCode from "../misc/HashCode";
import Parser from "../Parser";
import SemanticContext from "./SemanticContext";

export default class PrecedencePredicate extends SemanticContext {
    readonly precedence: number;

    constructor(precedence: number);

    evaluate(parser: Parser, outerContext: ParserRuleContext): boolean;

    evalPrecedence(parser: Parser, outerContext: ParserRuleContext): PrecedencePredicate;

    compareTo(other: PrecedencePredicate): number;

    updateHashCode(hash: HashCode): void;

    equals(other: PrecedencePredicate): boolean;
}
