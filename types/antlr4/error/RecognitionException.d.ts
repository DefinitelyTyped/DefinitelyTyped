import RuleContext from "../context/RuleContext";
import InputStream from "../InputStream";
import IntervalSet from "../misc/IntervalSet";
import Recognizer from "../Recognizer";
import Token from "../Token";

export interface RecognitionExceptionOpts {
    message: string;
    recognizer: Recognizer;
    input: InputStream;
    ctx: RuleContext;
}

/**
 * The root of the ANTLR exception hierarchy. In general, ANTLR tracks just
 * 3 kinds of errors: prediction errors, failed predicate errors, and
 * mismatched input errors. In each case, the parser knows where it is
 * in the input, where it is in the ATN, the rule invocation stack,
 * and what kind of problem occurred.
 */
export default class RecognitionException extends Error {
    readonly message: string;
    readonly recognizer: Recognizer;
    readonly input: InputStream;
    readonly ctx: RuleContext;

    /**
     * The current {@link Token} when an error occurred. Since not all streams
     * support accessing symbols by index, we have to track the {@link Token}
     * instance itself
     */
    offendingToken: Token;

    /**
     * Get the ATN state number the parser was in at the time the error
     * occurred. For {@link NoViableAltException} and
     * {@link LexerNoViableAltException} exceptions, this is the
     * {@link DecisionState} number. For others, it is the state whose outgoing
     * edge we couldn't match.
     */
    offendingState: -1;

    constructor(params: RecognitionExceptionOpts);

    /**
     * Gets the set of input symbols which could potentially follow the
     * previously matched symbol at the time this exception was thrown.
     *
     * If the set of expected tokens is not known and could not be computed,
     * this method returns `null`.
     *
     * @return The set of token types that could potentially follow the current
     * state in the ATN, or `null` if the information is not available.
     */
    getExpectedTokens(): IntervalSet;

    toString(): string;
}
