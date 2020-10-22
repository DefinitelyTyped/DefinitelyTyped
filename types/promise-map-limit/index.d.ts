// Type definitions for promise-map-limit 1.0
// Project: https://github.com/dbrockman/promise-map-limit
// Definitions by: Joseph Kohlmann <https://github.com/kohlmannj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = promiseMapLimit;

declare function promiseMapLimit<T, R>(
iterable: Iterable<T>,
concurrency: number,
iteratee: promiseMapLimit.IIteratee<T, R>
): Promise<R[]>;

declare namespace promiseMapLimit {
    type IIteratee<T, R> = (value: T) => Promise<R> | R;
}
