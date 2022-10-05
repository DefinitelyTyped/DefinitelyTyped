import InputStream from './InputStream';
import Lexer from './Lexer';

export default class Token {
    static readonly INVALID_TYPE: number;
    static readonly EPSILON: number;
    static readonly MIN_USER_TOKEN_TYPE: number;
    static readonly EOF: number;
    static readonly DEFAULT_CHANNEL: number;
    static readonly HIDDEN_CHANNEL: number;

    source: [Lexer, InputStream] | [null, null];
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

    getTokenSource(): Token['source'];

    getInputStream(): InputStream;

    set text(text: string);

    get text(): string;
}
