import BufferedTokenStream from "./BufferedTokenStream";
import Lexer from "./Lexer";
import Token from "./Token";

/**
 * This class extends {@link BufferedTokenStream} with functionality to filter
 * token streams to tokens on a particular channel (tokens where
 * {@link getChannel} returns a particular value).
 *
 * This token stream provides access to all tokens by index or when calling
 * methods like {@link getText}. The channel filtering is only used for code
 * accessing tokens via the lookahead methods {@link LA}, {@link LT}, and
 * {@link LB}.
 *
 * By default, tokens are placed on the default channel {@link Token.DEFAULT_CHANNEL}.
 *
 * Note: lexer rules which use the `->skip` lexer command or call
 * {@link Lexer.skip} do not produce tokens at all, so input text matched by
 * such a rule will not be available as part of the token stream, regardless of
 * channel.
 */
export default class CommonTokenStream extends BufferedTokenStream {
    constructor(lexer: Lexer, channel?: number);

    adjustSeekIndex(i: number): number;

    getNumberOfOnChannelTokens(): number;
}
