// Type definitions for arrify 1.0
// Project: https://github.com/sindresorhus/arrify
// Definitions by: AnJun Wang <https://github.com/wanganjun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @example
 * arrify(undefined) // returns []
 * @example
 * arrify(null)      // returns []
 * @example
 * arrify(1)         // returns [1]
 * @example
 * arrify([2, 3])    // returns [2, 3]
 */
declare function arrify<T>(val: undefined | null | T | T[]): T[];
export = arrify;
