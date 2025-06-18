export = fuzzyFinder;

/**
 * Tiny fuzzy searcher.
 *
 * @example
 * import fuzzyFinder = require('fuzzy-finder')
 *
 * console.log(fuzzy('da', [
 *     'dota.js',
 *     'stratures.js',
 *     'structures.js',
 *     'database.db',
 *     'user-data.js',
 *     'dummy-data.txt',
 *     'other.js'
 * ]))
 * // [ { match: 'dota.js', rank: 0 },
 * //   { match: 'database.db', rank: 0 },
 * //   { match: 'user-data.js', rank: 5 },
 * //   { match: 'dummy-data.txt', rank: 0 } ]
 */
declare function fuzzyFinder(
    /** @default '' */
    str?: string,
    /** @default [] */
    args?: readonly string[],
): string[];
