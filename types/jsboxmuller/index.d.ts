// Type definitions for jsboxmuller 1.1
// Project: https://github.com/kcwiakala/jsboxmuller
// Definitions by: Ethan Brown <https://github.com/EthanRBrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = jsBoxMuller;

/**
 * Generates normally-distributed pseudo-random numbers using the polar form of the
 * Box-Muller transform (https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform).
 *
 * Note that the documentation for the jsboxmuller package incorrectly referrs to the
 * second argument as "variance", when it is really standard deviation (the square root
 * of variance); it is labeled correctly here.
 *
 * @param mean - The mean of the normal distribution; defaults to 0 if not provided.
 * @param stdDev - The standarad deviation of the distribtion; defaults to 1 if not provided.
 */
declare function jsBoxMuller(mean?: number, stdDev?: number): number;
