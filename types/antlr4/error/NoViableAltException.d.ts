import ATNConfigSet from "../atn/ATNConfigSet";
import ParserRuleContext from "../context/ParserRuleContext";
import Parser from "../Parser";
import Token from "../Token";
import TokenStream from "../TokenStream";
import RecognitionException from "./RecognitionException";

/**
 * Indicates that the parser could not decide which of two or more paths
 * to take based upon the remaining input. It tracks the starting token
 * of the offending input and also knows where the parser was
 * in the various paths when the error. Reported by `reportNoViableAlternative()`
 */
export default class NoViableAltException extends RecognitionException {
    readonly deadEndConfigs: ATNConfigSet;
    readonly startToken: Token;

    constructor(
        recognizer: Parser,
        input: TokenStream | undefined,
        startToken: Token | undefined,
        offendingToken: Token | undefined,
        deadEndConfigs: ATNConfigSet,
        ctx?: ParserRuleContext,
    );
}
