import { ParserRuleContext } from '../ParserRuleContext';
import { Recognizer } from '../Recognizer';
import { InputStream } from '../InputStream';
import { Token } from '../Token';

export class RecognitionException extends Error {
    message: string;
    ctx: ParserRuleContext;
    recognizer: Recognizer;
    input: InputStream;
    offendingToken: Token;
    offendingState: -1;
    getExpectedTokens(): Token[];
    toString(): string;
}

export class LexerNoViableAltException extends RecognitionException {
}

export  class NoViableAltException extends RecognitionException {
}

export class InputMismatchException extends RecognitionException {
}

export class FailedPredicateException extends RecognitionException {
}

export class ParseCancellationException extends RecognitionException {
}
