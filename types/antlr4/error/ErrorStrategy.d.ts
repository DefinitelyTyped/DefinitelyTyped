import {Recognizer} from '../Recognizer';

export declare class ErrorStrategy {
    reset(recognizer: Recognizer): void

    recoverInline(recognizer: Recognizer): void;

    recover(recognizer: Recognizer, e: Error): void;

    sync(recognizer: Recognizer): void;

    inErrorRecoveryMode(recognizer: Recognizer): void;

    reportError(recognizer: Recognizer): void;
}


export declare class DefaultErrorStrategy extends ErrorStrategy {

}

export declare class BailErrorStrategy extends ErrorStrategy {

}
