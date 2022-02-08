/**
 * Set of utils to handle unicode characters.
 *
 */
/**
 * Checks whether given `character` is a combining mark.
 *
 */
export function isCombiningMark(character: string): boolean;
/**
 * Checks whether given `character` is a high half of surrogate pair.
 *
 * Using UTF-16 terminology, a surrogate pair denotes UTF-16 character using two UTF-8 characters. The surrogate pair
 * consist of high surrogate pair character followed by low surrogate pair character.
 *
 */
export function isHighSurrogateHalf(character: string): boolean;
/**
 * Checks whether given `character` is a low half of surrogate pair.
 *
 * Using UTF-16 terminology, a surrogate pair denotes UTF-16 character using two UTF-8 characters. The surrogate pair
 * consist of high surrogate pair character followed by low surrogate pair character.
 *
 */
export function isLowSurrogateHalf(character: string): boolean;
/**
 * Checks whether given offset in a string is inside a surrogate pair (between two surrogate halves).
 *
 */
export function isInsideSurrogatePair(string: string, offset: number): boolean;
/**
 * Checks whether given offset in a string is between base character and combining mark or between two combining marks.
 *
 */
export function isInsideCombinedSymbol(string: string, offset: number): boolean;
