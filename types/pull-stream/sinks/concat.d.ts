import pull = require('..');

/**
 * Concat stream of strings into single string, then call `cb`.
 */
declare function concat(cb?: (err: pull.EndOrError, result: string) => unknown): pull.Sink<string>;
export = concat;
