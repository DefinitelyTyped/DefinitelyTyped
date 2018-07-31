// Type definitions for rword 2.2
// Project: https://github.com/Xyfir/rword#readme
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface GenerateOptions {
    /**
     * Allows you to set an exact length or range of lengths for words to return.
     */
    length?: number | string;
    /**
     * Words that don't match the regexp will not be returned.
     */
    contains?: string | RegExp;
    /**
     * Changes the capitalization of the words returned.
     */
    capitalize?: 'none' | 'all' | 'first';
}

/**
 * Generates words from the global words array.
 * @param count How many words to return. If 1 or not present, a string is
 *              returned. If greater than 1 an array of strings is returned.
 * @param options Allows you to modify the output and words that could be
 *                randomly chosen.
 */
export function generate(count?: 1, options?: GenerateOptions): string;
/**
 * Generates words from the global words array.
 * @param count How many words to return. If 1 or not present, a string is
 *              returned. If greater than 1 an array of strings is returned.
 * @param options Allows you to modify the output and words that could be
 *                randomly chosen.
 */
export function generate(count: number, options?: GenerateOptions): string[];

/**
 * Generates words from the global pool array. The pool is automatically
 * filled using rword.generate(500) and then words are taken out of that
 * array as needed. Faster than rword.generate() for generating small
 * amounts of words.
 *
 * You cannot request more than 10 words through this method.
 *
 * @param count How many words to return. If 1 or not present, a string is
 *              returned. If greater than 1 an array of strings is returned.
 */
export function generateFromPool(count?: 1): string;

/**
 * Generates words from the global pool array. The pool is automatically
 * filled using rword.generate(500) and then words are taken out of that
 * array as needed. Faster than rword.generate() for generating small
 * amounts of words.
 *
 * You cannot request more than 10 words through this method.
 *
 * @param count How many words to return. If 1 or not present, a string is
 *              returned. If greater than 1 an array of strings is returned.
 */
export function generateFromPool(count: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10): string[];

/**
 * Shuffles both the global words and pool arrays. This method can most
 * likely be ignored as it is automatically called on first run and then
 * every 10 to 30 minutes after.
 */
export function shuffle(): void;
