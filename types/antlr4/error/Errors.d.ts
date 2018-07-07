import {ParserRuleContext} from '../ParserRuleContext';
import {Recognizer} from '../Recognizer';
import {InputStream} from '../InputStream';
import {Token} from '../Token';

export declare class RecognitionException extends Error {
    message: string;
    ctx: ParserRuleContext;
    recognizer: Recognizer;
    input: InputStream;
    offendingToken: Token;
    offendingState: -1;
    getExpectedTokens(): Token[];
    toString(): string;
}

export declare class LexerNoViableAltException extends RecognitionException {
}

export declare class NoViableAltException extends RecognitionException {
}

export declare class InputMismatchException extends RecognitionException {
}

export declare class FailedPredicateException extends RecognitionException {
}

export declare class ParseCancellationException extends RecognitionException {
}
