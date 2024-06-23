import ParserRuleContext from "../context/ParserRuleContext";
import IntervalSet from "../misc/IntervalSet";
import Parser from "../Parser";
import Token from "../Token";
import ErrorStrategy from "./ErrorStrategy";
import FailedPredicateException from "./FailedPredicateException";
import InputMismatchException from "./InputMismatchException";
import NoViableAltException from "./NoViableAltException";
import RecognitionException from "./RecognitionException";

/**
 * This is the default implementation of {@link ErrorStrategy} used for
 * error reporting and recovery in ANTLR parsers.
 */
export default class DefaultErrorStrategy extends ErrorStrategy {
    /**
     * Indicates whether the error strategy is currently "recovering from an
     * error". This is used to suppress reporting multiple error messages while
     * attempting to recover from a detected syntax error.
     *
     * @see inErrorRecoveryMode
     */
    errorRecoveryMode: boolean;

    /**
     * The index into the input stream where the last error occurred.
     * This is used to prevent infinite loops where an error is found
     * but no token is consumed during recovery...another error is found,
     * ad nauseum. This is a failsafe mechanism to guarantee that at least
     * one token/tree node is consumed for two errors.
     */
    lastErrorIndex: number;

    lastErrorStates: number[] | null;
    nextTokensContext: ParserRuleContext;
    nextTokenState: number;
    nextTokensState: number;

    /**
     * This method is called to enter error recovery mode when a recognition
     * exception is reported.
     */
    beginErrorCondition(recognizer: Parser): void;

    inErrorRecoveryMode(recognizer: Parser): boolean;

    /**
     * This method is called to leave error recovery mode after recovering from
     * a recognition exception.
     */
    endErrorCondition(recognizer: Parser): void;

    /**
     * The default implementation simply calls {@link endErrorCondition}.
     */
    reportMatch(recognizer: Parser): void;

    /**
     * The default implementation returns immediately if the handler is already
     * in error recovery mode. Otherwise, it calls {@link beginErrorCondition}
     * and dispatches the reporting task based on the runtime type of `e`
     * according to the following table.
     *
     * - {@link NoViableAltException}: Dispatches the call to {@link reportNoViableAlternative}
     * - {@link InputMismatchException}: Dispatches the call to {@link reportInputMismatch}
     * - {@link FailedPredicateException}: Dispatches the call to {@link reportFailedPredicate}
     * - All other types: calls {@link Parser.notifyErrorListeners} to report the exception
     */
    reportError(recognizer: Parser, e: RecognitionException): void;

    /**
     * This is called by {@link reportError} when the exception is a {@link NoViableAltException}.
     *
     * @see reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportNoViableAlternative(recognizer: Parser, e: NoViableAltException): void;

    /**
     * This is called by {@link reportError} when the exception is an
     * {@link InputMismatchException}.
     *
     * @see reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportInputMismatch(recognizer: Parser, e: InputMismatchException): void;

    /**
     * This is called by {@link reportError} when the exception is a
     * {@link FailedPredicateException}.
     *
     * @see reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportFailedPredicate(recognizer: Parser, e: FailedPredicateException): void;

    /**
     * This method is called to report a syntax error which requires the removal
     * of a token from the input stream. At the time this method is called, the
     * erroneous symbol is current `LT(1)` symbol and has not yet been
     * removed from the input stream. When this method returns,
     * `recognizer` is in error recovery mode.
     *
     * This method is called when {@link singleTokenDeletion} identifies
     * single-token deletion as a viable recovery strategy for a mismatched
     * input error.
     *
     * The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link beginErrorCondition} to
     * enter error recovery mode, followed by calling {@link ParsernotifyErrorListeners}.
     *
     * @param recognizer the parser instance
     */
    reportUnwantedToken(recognizer: Parser): void;

    /**
     * This method is called to report a syntax error which requires the
     * insertion of a missing token into the input stream. At the time this
     * method is called, the missing token has not yet been inserted. When this
     * method returns, `recognizer` is in error recovery mode.
     *
     * This method is called when {@link singleTokenInsertion} identifies
     * single-token insertion as a viable recovery strategy for a mismatched
     * input error.
     *
     * The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser.notifyErrorListeners}.
     *
     * @param recognizer the parser instance
     */
    reportMissingToken(recognizer: Parser): void;

    /**
     * The default implementation attempts to recover from the mismatched input
     * by using single token insertion and deletion as described below. If the
     * recovery attempt fails, this method throws an {@link InputMismatchException}.
     *
     * EXTRA TOKEN (single token deletion)
     *
     * `LA(1)` is not what we are looking for. If `LA(2)` has the
     * right token, however, then assume `LA(1)` is some extra spurious
     * token and delete it. Then consume and return the next token (which was
     * the `LA(2)` token) as the successful result of the match operation.
     *
     * This recovery strategy is implemented by {@link singleTokenDeletion}
     *
     * MISSING TOKEN (single token insertion)
     *
     * If current token (at `LA(1)`) is consistent with what could come
     * after the expected `LA(1)` token, then assume the token is missing
     * and use the parser's {@link TokenFactory} to create it on the fly. The
     * "insertion" is performed by returning the created token as the successful
     * result of the match operation.
     *
     * This recovery strategy is implemented by {@link singleTokenInsertion}.
     *
     * EXAMPLE
     *
     * For example, Input `i=(3;` is clearly missing the `')'`. When
     * the parser returns from the nested call to `expr`, it will have
     * call chain:
     *
     * stat -> expr -> atom
     *
     * and it will be trying to match the {@code ')'} at this point in the
     * derivation:
     *
     * =< ID '=' '(' INT ')' ('+' atom)* ';'
     * ^
     *
     * The attempt to match `')'` will fail when it sees `';'` and
     * call {@link recoverInline}. To recover, it sees that `LA(1)==';'`
     * is in the set of tokens that can follow the `')'` token reference
     * in rule `atom`. It can assume that you forgot the `')'`.
     */
    recoverInline(recognizer: Parser): Token;

    /**
     * This method implements the single-token insertion inline error recovery
     * strategy. It is called by {@link recoverInline} if the single-token
     * deletion strategy fails to recover from the mismatched input. If this
     * method returns `true`, `recognizer` will be in error recovery
     * mode.
     *
     * This method determines whether or not single-token insertion is viable by
     * checking if the `LA(1)` input symbol could be successfully matched
     * if it were instead the `LA(2)` symbol. If this method returns
     * `true`, the caller is responsible for creating and inserting a
     * token with the correct type to produce this behavior.
     *
     * @param recognizer the parser instance
     * @return `true` if single-token insertion is a viable recovery
     * strategy for the current mismatched input, otherwise `false`
     */
    singleTokenInsertion(recognizer: Parser): boolean;

    /**
     * This method implements the single-token deletion inline error recovery
     * strategy. It is called by {@link recoverInline} to attempt to recover
     * from mismatched input. If this method returns null, the parser and error
     * handler state will not have changed. If this method returns non-null,
     * `recognizer` will _not_ be in error recovery mode since the
     * returned token was a successful match.
     *
     * If the single-token deletion is successful, this method calls
     * {@link reportUnwantedToken} to report the error, followed by
     * {@link Parser.consume} to actually "delete" the extraneous token. Then,
     * before returning {@link reportMatch} is called to signal a successful
     * match.
     *
     * @param recognizer the parser instance
     * @return the successfully matched {@link Token} instance if single-token
     * deletion successfully recovers from the mismatched input, otherwise `null`
     */
    singleTokenDeletion(recognizer: Parser): Token;

    /**
     * Conjure up a missing token during error recovery.
     *
     * The recognizer attempts to recover from single missing
     * symbols. But, actions might refer to that missing symbol.
     * For example, x=ID {f($x);}. The action clearly assumes
     * that there has been an identifier matched previously and that
     * $x points at that token. If that token is missing, but
     * the next token in the stream is what we want we assume that
     * this token is missing and we keep going. Because we
     * have to return some token to replace the missing token,
     * we have to conjure one up. This method gives the user control
     * over the tokens returned for missing tokens. Mostly,
     * you will want to create something special for identifier
     * tokens. For literals such as '{' and ',', the default
     * action in the parser or tree parser works. It simply creates
     * a CommonToken of the appropriate type. The text will be the token.
     * If you change what tokens must be created by the lexer,
     * override this method to create the appropriate tokens.
     */
    getMissingSymbol(recognizer: Parser): Token;

    getExpectedTokens(recognizer: Parser): ReturnType<Parser["getExpectedTokens"]>;

    /**
     * How should a token be displayed in an error message? The default
     * is to display just the text, but during development you might
     * want to have a lot of information spit out. Override in that case
     * to use t.toString() (which, for CommonToken, dumps everything about
     * the token). This is better than forcing you to override a method in
     * your token objects because you don't have to go modify your lexer
     * so that it creates a new Java type.
     */
    getTokenErrorDisplay(t: Token): string;

    escapeWSAndQuote(s: string): string;

    /**
     * Compute the error recovery set for the current rule. During
     * rule invocation, the parser pushes the set of tokens that can
     * follow that rule reference on the stack; this amounts to
     * computing FIRST of what follows the rule reference in the
     * enclosing rule. See LinearApproximator.FIRST().
     * This local follow set only includes tokens
     * from within the rule; i.e., the FIRST computation done by
     * ANTLR stops at the end of a rule.
     *
     * EXAMPLE
     *
     * When you find a "no viable alt exception", the input is not
     * consistent with any of the alternatives for rule r. The best
     * thing to do is to consume tokens until you see something that
     * can legally follow a call to r//or* any rule that called r.
     * You don't want the exact set of viable next tokens because the
     * input might just be missing a token--you might consume the
     * rest of the input looking for one of the missing tokens.
     *
     * Consider grammar:
     *
     * a : '[' b ']'
     * | '(' b ')'
     * ;
     * b : c '^' INT ;
     * c : ID
     * | INT
     * ;
     *
     * At each rule invocation, the set of tokens that could follow
     * that rule is pushed on a stack. Here are the various
     * context-sensitive follow sets:
     *
     * FOLLOW(b1_in_a) = FIRST(']') = ']'
     * FOLLOW(b2_in_a) = FIRST(')') = ')'
     * FOLLOW(c_in_b) = FIRST('^') = '^'
     *
     * Upon erroneous input "[]", the call chain is
     *
     * a -> b -> c
     *
     * and, hence, the follow context stack is:
     *
     * depth follow set start of rule execution
     * 0 <EOF> a (from main())
     * 1 ']' b
     * 2 '^' c
     *
     * Notice that ')' is not included, because b would have to have
     * been called from a different context in rule a for ')' to be
     * included.
     *
     * For error recovery, we cannot consider FOLLOW(c)
     * (context-sensitive or otherwise). We need the combined set of
     * all context-sensitive FOLLOW sets--the set of all tokens that
     * could follow any reference in the call chain. We need to
     * resync to one of those tokens. Note that FOLLOW(c)='^' and if
     * we resync'd to that token, we'd consume until EOF. We need to
     * sync to context-sensitive FOLLOWs for a, b, and c: {']','^'}.
     * In this case, for input "[]", LA(1) is ']' and in the set, so we would
     * not consume anything. After printing an error, rule c would
     * return normally. Rule b would not find the required '^' though.
     * At this point, it gets a mismatched token error and throws an
     * exception (since LA(1) is not in the viable following token
     * set). The rule exception handler tries to recover, but finds
     * the same recovery set and doesn't consume anything. Rule b
     * exits normally returning to rule a. Now it finds the ']' (and
     * with the successful match exits errorRecovery mode).
     *
     * So, you can see that the parser walks up the call chain looking
     * for the token that was a member of the recovery set.
     *
     * Errors are not generated in errorRecovery mode.
     *
     * ANTLR's error recovery mechanism is based upon original ideas:
     *
     * "Algorithms + Data Structures = Programs" by Niklaus Wirth
     *
     * and
     *
     * "A note on error recovery in recursive descent parsers":
     * http://portal.acm.org/citation.cfm?id=947902.947905
     *
     * Later, Josef Grosch had some good ideas:
     *
     * "Efficient and Comfortable Error Recovery in Recursive Descent
     * Parsers":
     * ftp://www.cocolab.com/products/cocktail/doca4.ps/ell.ps.zip
     *
     * Like Grosch I implement context-sensitive FOLLOW sets that are combined
     * at run-time upon error to avoid overhead during parsing.
     */
    getErrorRecoverySet(recognizer: Parser): IntervalSet;

    consumeUntil(recognizer: Parser, set: IntervalSet): void;
}
