import pull = require('..');

/**
 * Read the stream into an array, then call `cb`.
 */
declare function collect<T>(cb?: (err: Error | null, results: T[]) => unknown): pull.Sink<T>;
export = collect;
