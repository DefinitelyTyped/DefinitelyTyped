import pull = require('..');

/**
 * Create a SourceStream that reads the values from an array or object and then stops.
 */
declare function values<T>(arrayOrObject?: Record<any, T> | ReadonlyArray<T>, onAbort?: (err?: Error | null) => unknown): pull.Source<T>;
export = values;
