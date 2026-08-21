export = sampleInteger;

/**
 * Exact sampling using integer weights. The sum of weights must be less than `Number.MAX_SAFE_INTEGER`.
 * The RNG is sampled until a suitable candidate is found. The expected number of samples is 2. If the
 * sum of weights is a power of 2, only a single sample is needed. It then does a linear pass over the
 * weights until the random number is less than the cumulative weights. Hence `O(n)`.
 *
 * @returns The index from the weights array, which can be used to index another data array or used directly.
 *
 * @example
 * // or exact sampling using integers
 * import sampleInteger = require('secure-weighted-sample/integer')
 * console.log(sampleInteger([8, 40, 16, 4, 6]))
 */
declare function sampleInteger(integerWeights: readonly number[]): number;
