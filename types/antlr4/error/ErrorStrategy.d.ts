import Parser from "../Parser";
import RecognitionException from "./RecognitionException";

export default class ErrorStrategy {
    reset(recognizer: Parser): void;

    recoverInline(recognizer: Parser): void;

    recover(recognizer: Parser, e: RecognitionException): void;

    sync(recognizer: Parser): void;

    inErrorRecoveryMode(recognizer: Parser): void;

    reportError(recognizer: Parser, e: RecognitionException): void;
}
