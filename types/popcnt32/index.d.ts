// Type definitions for popcnt32 1.0
// Project: https://github.com/emilbayes/popcnt32#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = popcnt32;

/**
 * Calculate population count (popcnt) on a 32-bit number, branch free.
 *
 * @return Number of 1-bits in `int`. Int is implicitly cast to a 32-bit unsigned int.
 * This means `popcnt32(-1) === 32` while `popcnt32(1) === 1`.
 *
 * @example
 * import popcnt32 = require('popcnt32')
 *
 * popcnt32(0b1) // 1
 * popcnt32(0b1000001) // 2
 */
declare function popcnt32(int: number): number;
