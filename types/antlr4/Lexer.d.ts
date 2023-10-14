import CommonToken from "./CommonToken";
import RecognitionException from "./error/RecognitionException";
import InputStream from "./InputStream";
import Recognizer from "./Recognizer";
import Token from "./Token";

/**
 * A lexer is recognizer that draws input symbols from a character stream.
 * lexer grammars result in a subclass of this object. A Lexer object
 * uses simplified match() and error recovery mechanisms in the interest of speed.
 */
export default class Lexer extends Recognizer {
    static readonly DEFAULT_MODE: 0;
    static readonly MORE: -2;
    static readonly SKIP: -3;
    static readonly DEFAULT_TOKEN_CHANNEL: 0;
    static readonly HIDDEN: 1;
    static readonly MIN_CHAR_VALUE: 0x0000;
    static readonly MAX_CHAR_VALUE: 0x10ffff;

    constructor(input: InputStream | null);

    reset(): void;

    nextToken(): Token;

    skip(): void;

    more(): void;

    mode(m: number): void;

    pushMode(mode: number): void;

    popMode(): number;

    emitToken(token: Token): void;

    emit(): CommonToken;

    emitEOF(): CommonToken;

    charIndex(): number;

    getAllTokens(): Token[];

    notifyListeners(e: RecognitionException): void;

    getErrorDisplay(s: string): string;

    getErrorDisplayForChar(c: string): string;

    getCharErrorDisplay(c: string): string;

    /**
     * Lexers can normally match any char in it's vocabulary after matching
     * a token, so do the easy thing and just kill a character and hope
     * it all works out. You can instead use the rule invocation stack
     * to do sophisticated error recovery if you are in a fragment rule.
     */
    recover(re: RecognitionException): void;

    set inputStream(input: InputStream);
    get inputStream(): InputStream;
    set type(type: number);
    get type(): number;
    set line(line: number);
    get line(): number;
    set column(column: number);
    get column(): number;
    set text(text: string);
    get text(): string;
}
