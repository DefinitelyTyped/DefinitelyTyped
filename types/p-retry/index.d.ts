// Type definitions for p-retry 1.0
// Project: https://github.com/sindresorhus/p-retry#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { OperationOptions } from 'retry';

export = pRetry;

declare function pRetry<T>(input: (attemptCount: number) => PromiseLike<T> | T, options?: OperationOptions): Promise<T>;

declare namespace pRetry {
    class AbortError extends Error {
        readonly name: 'AbortError';
        readonly originalError: Error;
        constructor(message: string | Error);
    }
}
