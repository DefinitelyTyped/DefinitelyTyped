import pull = require('..');

/**
 * Stream the key names from an object (or array).
 */
declare function keys(obj: object | ReadonlyArray<any>): pull.Source<string>;
export = keys;
