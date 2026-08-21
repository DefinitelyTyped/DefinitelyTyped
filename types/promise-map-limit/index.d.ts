export = promiseMapLimit;

declare function promiseMapLimit<T, R>(
    iterable: Iterable<T>,
    concurrency: number,
    iteratee: promiseMapLimit.IIteratee<T, R>,
): Promise<R[]>;

declare namespace promiseMapLimit {
    type IIteratee<T, R> = (value: T) => Promise<R> | R;
}
