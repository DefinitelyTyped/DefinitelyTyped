import Parser from "../Parser";
import Token from "../Token";
import DefaultErrorStrategy from "./DefaultErrorStrategy";

/**
 * This implementation of {@link ErrorStrategy} responds to syntax errors
 * by immediately cancelling the parse operation with a
 * {@link ParseCancellationException}. The implementation ensures that the
 * {@link ParserRuleContext.exception} field is set for all parse tree nodes
 * that were not completed prior to encountering the error.
 *
 * This error strategy is useful in the following scenarios.
 *
 * - Two-stage parsing: This error strategy allows the first
 * stage of two-stage parsing to immediately terminate if an error is
 * encountered, and immediately fall back to the second stage. In addition to
 * avoiding wasted work by attempting to recover from errors here, the empty
 * implementation of {@link BailErrorStrategy.sync} improves the performance of
 * the first stage.
 *
 * - Silent validation: When syntax errors are not being reported or logged,
 * and the parse result is simply ignored if errors occur, the {@link BailErrorStrategy}
 * avoids wasting work on recovering from errors when the result will be ignored either way.
 *
 * `myparser.setErrorHandler(new BailErrorStrategy());`
 *
 * @see Parser.setErrorHandler(ANTLRErrorStrategy)
 */
export default class BailErrorStrategy extends DefaultErrorStrategy {
    /**
     * Make sure we don't attempt to recover inline; if the parser
     * successfully recovers, it won't throw an exception.
     */
    recoverInline(recognizer: Parser): Token;
}
