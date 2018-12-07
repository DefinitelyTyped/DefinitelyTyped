// Type definitions for p-timeout 1.2
// Project: https://github.com/sindresorhus/p-timeout#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pTimeout;

declare function pTimeout<T>(input: PromiseLike<T>, ms: number, message?: string | pTimeout.TimeoutError): Promise<T>;
declare function pTimeout<T, R>(input: PromiseLike<T>, ms: number, fallback: () => R | Promise<R>): Promise<T | R>;

declare namespace pTimeout {
    class TimeoutError extends Error {
        readonly name: 'TimeoutError';
        constructor(message?: string);
    }
}
