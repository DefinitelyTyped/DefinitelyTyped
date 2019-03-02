// Type definitions for p-retry 3.0
// Project: https://github.com/sindresorhus/p-retry#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { OperationOptions } from 'retry';

export = pRetry;

declare function pRetry<T>(input: (attemptCount: number) => PromiseLike<T> | T, options?: pRetry.Options): Promise<T>;

declare namespace pRetry {
    class AbortError extends Error {
        readonly name: 'AbortError';
        readonly originalError: Error;
        constructor(message: string | Error);
    }

    interface FailedAttemptError extends Error {
        attemptNumber: number;
        retriesLeft: number;
    }

    interface Options extends OperationOptions {
        onFailedAttempt?: (error: FailedAttemptError) => void;
    }
}
