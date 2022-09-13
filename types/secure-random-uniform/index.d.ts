// Type definitions for secure-random-uniform 4.0
// Project: https://github.com/emilbayes/secure-random-uniform
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = secureRandom;

/**
 * Generate secure, random, uniform integers, compensating for modulo bias.
 *
 * @returns A number from the uniform distribution `[0, limit)` (limit exclusive). Note that limit
 * must not be larger than `2^53 - 1` (`Number.MAX_SAFE_INTEGER`).
 *
 * @example
 * import secureRandom = require('secure-random-uniform')
 *
 * // Numbers from [0, 2000)
 * secureRandom(2000)
 *
 * // Numbers from [100, 110)
 * secureRandom(10) + 100
 *
 * // Numbers from [-10, 10]
 * secureRandom(21) - 10
 */
declare function secureRandom(limit: number): number;
