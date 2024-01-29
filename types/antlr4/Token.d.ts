import InputStream from "./InputStream";
import Lexer from "./Lexer";

export type TokenSourceTuple = [Lexer, InputStream] | [null, null];

export default class Token {
    static readonly INVALID_TYPE: 0;
    static readonly EPSILON: -2;
    static readonly MIN_USER_TOKEN_TYPE: 1;
    static readonly EOF: -1;
    static readonly DEFAULT_CHANNEL: 0;
    static readonly HIDDEN_CHANNEL: 1;

    source: TokenSourceTuple;
    type: number;

    /**
     * The parser ignores everything not on DEFAULT_CHANNEL
     */
    channel: number;

    /**
     * -1 if not implemented.
     */
    start: number;

    /**
     * -1 if not implemented.
     */
    stop: number;

    /**
     * from 0..n-1 of the token object in the input stream
     */
    tokenIndex: number;

    /**
     * line=1..n of the 1st character
     */
    line: number;

    /**
     * beginning of the line at which it occurs, 0..n-1
     */
    column: number;

    getTokenSource(): TokenSourceTuple;

    getInputStream(): InputStream;

    set text(text: string);

    get text(): string;
}
