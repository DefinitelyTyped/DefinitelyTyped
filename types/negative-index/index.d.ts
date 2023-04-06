// Type definitions for negative-index 1.0
// Project: https://github.com/dy/negative-index#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = negativeIndex;

/**
 * Convert negative index to positive starting from the end. Same way
 * [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
 * arguments work.
 *
 * @example
 * import idx = require('negative-index');
 *
 * idx(-5, 8); // 3
 * idx(5, 8); // 5
 *
 * @example
 * // Works well for normalizing real numbers offset, like time etc:
 *
 * import normOffset = require('negative-index');
 *
 * const time = -.15, duration = 2.45;
 *
 * normOffset(time, duration); // 2.3
 */
declare function negativeIndex(index: number, length: number): number;
