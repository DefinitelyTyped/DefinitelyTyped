// Type definitions for p-limit 2.1
// Project: https://github.com/sindresorhus/p-limit#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Linus Unnebäck <https://github.com/LinusU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export = pLimit;

/**
 * Run multiple promise-returning & async functions with limited concurrency.
 * @param concurrency Concurrency limit. Minimum: `1`.
 * @returns A `limit` function.
 */
declare function pLimit(concurrency: number): pLimit.Limit;

declare namespace pLimit {
    interface Limit {
        /**
         * Returns the promise returned by calling `fn(...args)`.
         *
         * @param fn Promise-returning/async function.
         * @param args Any arguments to pass through to `fn`.
         * Support for passing arguments on to the `fn` is provided in order to be able to avoid
         * creating unnecessary closures. You probably don't need this optimization unless you're
         * pushing a lot of functions.
         */
        <TArgs extends any[], R>(
            fn: (...args: TArgs) => PromiseLike<R> | R,
            ...args: TArgs
        ): Promise<R>;

        /**
         * The number of promises that are currently running.
         */
        readonly activeCount: number;

        /**
         * The number of promises that are waiting to run (i.e. their internal `fn` was not called yet).
         */
        readonly pendingCount: number;
    }
}
