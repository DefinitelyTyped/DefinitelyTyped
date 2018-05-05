// Type definitions for map-promise-limit 1.0
// Project: https://github.com/dbrockman/promise-map-limit
// Definitions by: Joseph Kohlmann <https://github.com/kohlmannj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = mapPromiseLimit;

declare function mapPromiseLimit<T, R>(
iterable: Iterable<T>,
concurrency: number,
iteratee: mapPromiseLimit.IIteratee<T, R>
): Promise<R[]>;

declare namespace mapPromiseLimit {
    type IIteratee<T, R> = (value: T) => Promise<R> | R;
}
