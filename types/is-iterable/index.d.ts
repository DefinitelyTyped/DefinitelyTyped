export = isIterable;

/**
 * Checks if a given object is iterable.
 *
 * @example
 * import isIterable = require('is-iterable');
 *
 * isIterable([]); // true
 * isIterable({}); // false
 */
declare function isIterable(iterable: unknown): iterable is Iterable<unknown>;
