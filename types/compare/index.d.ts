export = compare;

/**
 * Compare primitives the right way (using `<`, `>` and `==`).
 *
 * This function does the right thing with numbers and ascii strings. Normally
 * `String.prototype.localeCompare` is recommended for strings, but that can have nasty
 * side effects on some machines, eg.
 * ```
 * 'cu'.localeCompare('cs', 'hu')
 * ```
 * Compare the above in stock node (which doesn't come with `Intl`) and a browser of
 * your choice (which most likely has `Intl` support).
 *
 * @example
 * import compare = require('compare')
 * [1, 2, 10].sort() // [1, 10, 2]
 * [1, 2, 10].sort(compare) // [1, 2, 10]
 *
 * // Below is sorted correctly according to Hungarian, but runtimes without Intl
 * // support will reorder them
 * ['cu', 'cs'].sort((a, b) => a.localeCompare(b, 'hu'))
 * ['cu', 'cs'].sort(compare) // This will always sort the same
 */
declare function compare<T extends number | string>(left: T, right: T): -1 | 0 | 1;
