// Type definitions for unzalgo 3.0
// Project: https://github.com/kdex/unzalgo#readme
// Definitions by: Dacri Burdan <https://github.com/dburdan>
//                 Rodry <https://github.com/ImRodry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Computes a score ∈ [0, 1] for every word in the input string.
 * Each score represents the ratio of zalgo characters to total characters in a word.
 *
 * @param string The input string for which to compute scores.
 * @returns An array of scores where each score describes the zalgo ratio of a word.
 */
export function computeScores(string: string): number[];

/**
 * Determines if the string consists of zalgo text.
 * Note that the occurrence of a combining character is not enough to trigger the detection.
 * Instead, it computes a ratio for the input string and checks if it exceeds a given threshold.
 * Thus, internationalized strings aren't automatically classified as zalgo text.
 *
 * @param string A string for which a zalgo text check is run.
 * @param threshold A threshold ∈ [0, 1], 0.55 by default.
 * The higher the threshold, the more combining characters are needed for it to be detected as zalgo text.
 * @returns Whether the string is a zalgo text string.
 */
export function isZalgo(string: string, threshold?: number): boolean;

/**
 * Removes all zalgo characters for every word in a string if the word is classified as zalgo text.
 * If `targetDensity` is specified, not all the zalgo characters will be removed. Instead, they will be thinned out uniformly.
 *
 * @param string A string for which combining characters are removed for every word whose zalgo property is met.
 * @param options Options for cleaning.
 * @param options.detectionThreshold A threshold ∈ [0, 1], 0.55 by default
 * The higher the threshold, the more combining characters are needed for it to be detected as zalgo text.
 * @param options.targetDensity A threshold ∈ [0, 1], 0 by default.
 * The higher the density, the more zalgo characters will be part of the resulting string.
 * The result is guaranteed to have a zalgo-character density that is less than or equal to the one provided.
 * @returns A cleaned, more readable string.
 */
export function clean(string: string, options?: { detectionThreshold?: number; targetDensity?: number }): string;

export default clean;
