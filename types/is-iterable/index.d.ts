// Type definitions for is-iterable 1.1
// Project: https://github.com/hemanth/is-iterable#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
