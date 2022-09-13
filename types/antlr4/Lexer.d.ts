import { Recognizer } from './Recognizer';
import { Token } from './Token';
import { RecognitionException } from './error/Errors';

export class Lexer extends Recognizer {
    inputStream: any;
    sourceName: any;
    type: any;
    line: any;
    column: any;
    text: string;

    reset(): void;

    nextToken(): Token;

    skip(): void;

    more(): void;

    pushMode(mode: any): void;

    popMode(): any;

    emitToken(): void;

    emit(): Token;

    emitEOF(): Token;

    charIndex(): number;

    getAllTokens(): Token[];

    notifyListeners(e: RecognitionException): void;

    getErrorDisplay(s: string): string;

    getErrorDisplayForChar(c: string): string;

    getCharErrorDisplay(c: string): string;

    recover(re: RecognitionException): void;

    static readonly DEFAULT_MODE: number;
    static readonly MORE: number;
    static readonly SKIP: number;
    static readonly DEFAULT_TOKEN_CHANNEL: any;
    static readonly HIDDEN: any;
    static readonly MIN_CHAR_VALUE: number;
    static readonly MAX_CHAR_VALUE: number;
}
