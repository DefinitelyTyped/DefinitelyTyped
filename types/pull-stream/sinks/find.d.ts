import pull = require('..');

declare function find<T>(cb?: (err: Error | null, results: T[]) => unknown): pull.Sink<T>;
declare function find<T>(test: ((data: T) => boolean) | keyof T, cb?: (err: Error | null, result: T) => unknown): pull.Sink<T>;
export = find;
