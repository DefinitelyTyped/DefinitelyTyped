// Type definitions for unzalgo 2.1
// Project: https://github.com/kdex/unzalgo#readme
// Definitions by: Dacri Burdan <https://github.com/dburdan>
//                 Rodry <https://github.com/ImRodry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Computes a score ∈ `[0, 1]` for every word in the input string.
 * Each score represents the ratio of Zalgo characters to total characters in a word.
 *
 * @param string The input string for which to compute scores.
 * @returns An array of scores where each score describes the Zalgo ratio of a word.
 */
export function computeScores(string: string): number[];

/**
 * Determines if the given string has Zalgo text depending on the given treshold.
 * The higher this treshold is the more likely it is for the method to return `true`
 *
 * @param string A string for which a Zalgo text check is run.
 * @param threshold A threshold ∈ `[0, 1]`. The higher the threshold, the more extreme Zalgo text cases are allowed. Default is 0.55
 * @returns Whether the string is a Zalgo text string.
 */
export function isZalgo(text: string, threshold?: number): boolean;

/**
 * Removes all Zalgo text characters for every "likely Zalgo" word in `string`. Returns a representation of `string` without Zalgo text.
 *
 * @param string A string for which Zalgo text characters are removed for every word whose Zalgo property is met.
 * @param threshold A threshold ∈ `[0, 1]`. The higher the threshold, the more extreme Zalgo text cases are allowed. Default is 0.55
 * @returns A clean, readable string.
 */
export function clean(text: string, threshold?: number): string;

export default clean;
