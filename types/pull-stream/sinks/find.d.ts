import pull = require('..');

declare function find<T>(cb?: (err: pull.EndOrError, results: T[]) => unknown): pull.Sink<T>;
declare function find<T>(
    test: ((data: T) => boolean) | keyof T,
    cb?: (err: pull.EndOrError, result: T) => unknown,
): pull.Sink<T>;
export = find;
