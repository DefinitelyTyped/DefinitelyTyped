export = secureRandomBigint;

/**
 * Generate secure, random, uniform integers, compensating for modulo bias.
 *
 * @returns A number from the uniform distribution `[0, limit)` (limit exclusive).
 *
 * @example
 * import secureRandom = require('secure-random-uniform/bigint')
 *
 * // Numbers from [0, 2^64)
 * secureRandom(2n ** 64n)
 *
 * // Numbers from [0, googol)
 * secureRandom(10n ** 100n)
 */
declare function secureRandomBigint(limit: bigint): bigint;
