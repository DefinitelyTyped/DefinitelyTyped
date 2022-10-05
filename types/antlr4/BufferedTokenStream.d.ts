import Token from './Token';
import Interval from './misc/IntervalSet';
import TokenStream from './TokenStream';

/**
 * This implementation of {@link TokenStream} loads tokens from a
 * {@link TokenSource} on-demand, and places the tokens in a buffer to provide
 * access to any previous token by index.
 *
 * This token stream ignores the value of {@link Token.getChannel}. If your
 * parser requires the token stream filter tokens to only those on a particular
 * channel, such as {@link Token.DEFAULT_CHANNEL} or {@link Token.HIDDEN_CHANNEL},
 * use a filtering token stream such a {@link CommonTokenStream}.
 */
export default class BufferedTokenStream extends TokenStream {
    tokenSource: Token;

    /**
     * A collection of all tokens fetched from the token source. The list is
     * considered a complete view of the input once {@link fetchedEOF} is set
     * to `true`.
     */
    tokens: Token[];

    /**
     * The index into {@link tokens} of the current token (next token to
     * {@link consume}). {@link tokens}[ {@link p}] should be {@link LT(1)}.
     *
     * This field is set to -1 when the stream is first constructed or when
     * {@link setTokenSource} is called, indicating that the first token has
     * not yet been fetched from the token source. For additional information,
     * see the documentation of {@link InputStream} for a description of
     * Initializing Methods.
     */
    index: number;

    /**
     * Indicates whether the {@link Token.EOF} token has been fetched from
     * {@link tokenSource} and added to {@link tokens}.
     * This field improves performance for the following cases:
     *
     * - {@link consume}: The lookahead check in {@link consume} to prevent consuming
     * the EOF symbol is optimized by checking the values of {@link fetchedEOF} instead
     * of calling {@link LA}.
     * - {@link fetch}: The check to prevent adding multiple EOF symbols into {@link tokens}
     * is trivial with this field.
     */
    fetchedEOF: boolean;

    constructor(tokenSource: any);

    mark(): number;

    release(marker: number): number;

    reset(): void;

    seek(index: number): void;

    get(index: number): Token;

    consume(): void;

    /**
     * Make sure index `i` in tokens has a token.
     *
     * @return if a token is located at index `i`
     */
    sync(i: number): boolean;

    /**
     * Add `n` elements to buffer.
     *
     * @return The actual number of elements added to the buffer.
     */
    fetch(n: number): number;

    /**
     * Get all tokens from start..stop inclusively.
     */
    getTokens(start: number, stop: number, types: any): Token[];

    LA(i: number): Token['type'];

    LB(k: number): Token;

    LT(k: number): Token;

    /**
     * Allowed derived classes to modify the behavior of operations which change
     * the current stream position by adjusting the target token index of a seek
     * operation. The default implementation simply returns `i`. If an
     * exception is thrown in this method, the current stream index should not be
     * changed.
     *
     * For example, {@link CommonTokenStream} overrides this method to ensure
     * that the seek target is always an on-channel token.
     *
     * @param i The target token index.
     * @return The adjusted target token index.
     */
    adjustSeekIndex(i: number): number;

    lazyInit(): void;

    setup(): void;

    /**
     * Reset this token stream by setting its token source.
     */
    setTokenSource(tokenSource: any): void;

    /**
     * Given a starting index, return the index of the next token on channel.
     *
     * @return `i` if `tokens[i]` is on channel. `-1` if there are no tokens
     * on channel between `i` and `EOF`.
     */
    nextTokenOnChannel(i: number, channel?: number): number;

    /**
     * Given a starting index, return the index of the previous token on channel.
     *
     * @return `i` if `tokens[i]` is on channel. `-1` if there are no tokens
     * on channel between `i` and `0`.
     */
    previousTokenOnChannel(i: number, channel: number): number;

    /**
     * Collect all tokens on specified channel to the right of
     * the current token up until we see a token on `DEFAULT_TOKEN_CHANNEL` or
     * `EOF`. If channel is `-1`, find any non default channel token.
     */
    getHiddenTokensToRight(tokenIndex: number, channel: number): Token[];

    getSourceName(): any;

    filterForChannel(left: number, right: number, channel: number): any[] | null;

    /**
     * Get the text of all tokens in this buffer.
     */
    getText(interval: Interval): string;

    /**
     * Get all tokens from lexer until EOF.
     */
    fill(): void;
}
