import pull = require('..');

/**
 * Create a stream with a single value.
 */
declare function once<T>(value?: T, onAbort?: (err?: Error | null) => unknown): pull.Source<T>;
export = once;
