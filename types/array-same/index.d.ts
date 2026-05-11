export = hasSameElements;

/**
 * Check one or more array whether they have the same items as `source`.
 *
 * @example
 * import hasSameElements = require('array-same');
 *
 * hasSameElements([1, 2], [2, 1]); // true
 * hasSameElements([1, 2, 3], [1, 2]); // false
 */
declare function hasSameElements<T>(source: readonly T[], ...args: ReadonlyArray<readonly T[]>): boolean;
