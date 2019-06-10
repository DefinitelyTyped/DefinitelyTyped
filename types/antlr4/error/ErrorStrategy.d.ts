import { Recognizer } from '../Recognizer';

export class ErrorStrategy {
    reset(recognizer: Recognizer): void;

    recoverInline(recognizer: Recognizer): void;

    recover(recognizer: Recognizer, e: Error): void;

    sync(recognizer: Recognizer): void;

    inErrorRecoveryMode(recognizer: Recognizer): void;

    reportError(recognizer: Recognizer): void;
}

export class DefaultErrorStrategy extends ErrorStrategy {
}

export class BailErrorStrategy extends ErrorStrategy {
}
