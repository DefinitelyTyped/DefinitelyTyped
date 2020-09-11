import pull = require('..');

/**
 * Reduce stream into single value, then callback.
 */
declare function reduce<T, U>(
    reducer: (acc: U | null, data: T) => U,
    cb: (err: pull.EndOrError, result: U) => unknown,
): pull.Sink<T>;
declare function reduce<T, U>(
    reducer: (acc: U, data: T) => U,
    initial: U,
    cb: (err: pull.EndOrError, result: U) => unknown,
): pull.Sink<T>;
export = reduce;
