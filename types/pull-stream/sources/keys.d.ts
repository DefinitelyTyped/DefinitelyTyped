import pull = require('..');

/**
 * Stream the key names from an object (or array).
 */
declare function keys(obj: object | ReadonlyArray<any>, onAbort?: (err?: Error | null) => unknown): pull.Source<string>;
export = keys;
