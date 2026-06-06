/**
 * Aliases assigned to a Unicode codepoint, organized by category.
 */
export interface UnicodeAliases {
    /** Correction aliases */
    correction?: string[];
    /** Control character aliases */
    control?: string[];
    /** Figment aliases */
    figment?: string[];
    /** Alternate name aliases */
    alternate?: string[];
    /** Abbreviation aliases */
    abbreviation?: string[];
}

/**
 * Returns the name that has been assigned to a Unicode codepoint.
 *
 * Please note:
 * Some common codepoints do not have a name (e.g. C0 control characters like \n)
 *
 * Also see:
 * - unicodeCorrectName(char) - Checks if there is a corrected name first, if not,
 *                              fallbacks to this method
 * - unicodeReadableName(char) - Displays correct name or an applicable alias
 *
 * @param char Single character string or codepoint
 * @returns Name of character or undefined
 */
export function unicodeBaseName(char: string | number): string | undefined;

/**
 * Returns the name that has been assigned to a Unicode codepoint, but if the codepoint
 * has a correction alias, use this instead.
 *
 * Please note:
 * Some common codepoints do not have a name (e.g. C0 control characters like \n)
 *
 * Also see:
 * - unicodeReadableName(char) - Displays correct name or an applicable alias
 *
 * @param char Single character string or codepoint
 * @returns Corrected name of character or undefined
 */
export function unicodeCorrectName(char: string | number): string | undefined;

/**
 * Returns the aliases that have been assigned to a Unicode codepoint.
 *
 * Aliases can be of these categories (multiple aliases possible):
 *
 * - correction
 * - control
 * - figment
 * - alternate
 * - abbreviation
 *
 * @param char Single character string or codepoint
 * @returns Object containing aliases for this Unicode codepoint
 */
export function unicodeAliases(char: string | number): UnicodeAliases | undefined;

/**
 * Determine the basic type of codepoints. Required to be able to get the
 * Unicode label of a codepoint. This can be one of:
 *
 * - Graphic
 * - Format
 * - Control
 * - Private-use
 * - Surrogate
 * - Noncharacter
 * - Reserved
 *
 * @param char Single character string or codepoint
 * @returns Codepoint type
 */
export function unicodeType(char: string | number): string | undefined;

/**
 * Returns a label of a codepoint in the following format:
 * <type-hex>, e.g. <control-0009> for the tab character or
 * <noncharacter-FFFFF> for U+FFFFF
 *
 * It is only assigned to codepoints of a type other than
 * "Graphic" or "Format"
 *
 * @param char Single character string or codepoint
 * @returns A generic label for this codepoint
 */
export function unicodeLabel(char: string | number): string | undefined;

/**
 * Returns the best readable representation of a codepoint.
 *
 * 1) It is the corrected name of a the codepoint (if one exists)
 * 2) or it is an appropriate aliase (if one exists)
 * 3) or it is the codepoint label
 *
 * @param char Single character string or codepoint
 * @returns Unicode name, alias, or label for this character
 */
export function unicodeReadableName(char: string | number): string | undefined;

/**
 * Returns the name of a character that is made of a codepoint sequence (= more than
 * one codepoint involved), if one exists.
 *
 * @param char Single character string made of multiple codepoints
 * @returns Unicode sequence name
 */
export function unicodeSequenceName(char: string): string | undefined;

/**
 * Returns the name of a character that is made of a codepoint sequence (= more than
 * one codepoint involved), if one exists.
 *
 * Differently from unicodeSequenceName(char), it will only consider Emoji ZWJ sequences
 * that are fully qualified, meaning they all required variation selectors (VS16) in place
 *
 * @param char Single character string made of multiple codepoints
 * @returns Unicode sequence name
 */
export function unicodeQualifiedSequenceName(char: string): string | undefined;

/**
 * Returns the best name for the Unicode character (codepoint or codepoint sequence).
 *
 * At first, it will check if the codepoint sequence has a name, e.g. for
 * Emoji that are build up using multiple codepoints using unicodeSequenceName(char)
 *
 * If none is found, will use the unicodeReadableName(char) function to retrieve
 * the best name for that codepoint.
 *
 * @param char Single character string or codepoint
 * @returns Name of character
 */
export function unicodeName(char: string | number): string | undefined;
