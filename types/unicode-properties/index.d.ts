// Type definitions for unicode-properties 1.3
// Project: https://github.com/foliojs/unicode-properties
// Definitions by: Lionel Rowe <https://github.com/lionel-rowe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Checks the Unicode general category for the given code point
 *
 * @param codePoint The Unicode code point to analyze
 * @returns The Unicode general category for the given code point
 */
export function getCategory(codePoint: number): string;

/**
 * Checks the script for the given code point
 *
 * @param codePoint The Unicode code point to analyze
 * @returns The script for the given code point
 */
export function getScript(codePoint: number): string;

/**
 * Checks the canonical combining class for the given code point
 *
 * @param codePoint The Unicode code point to analyze
 * @returns The canonical combining class for the given code point
 */
export function getCombiningClass(codePoint: number): string;

/**
 * Checks the East Asian width for the given code point
 *
 * @param codePoint The Unicode code point to analyze
 * @returns The East Asian width for the given code point
 */
export function getEastAsianWidth(codePoint: number): string;

/**
 * Checks the numeric value for the given code point, or null if there is no numeric value for that code point
 *
 * @param codePoint The Unicode code point to analyze
 * @returns The numeric value for the given code point
 */
export function getNumericValue(codePoint: number): number | null;

/**
 * Checks whether the code point is an alphabetic character
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is an alphabetic character
 */
export function isAlphabetic(codePoint: number): boolean;

/**
 * Checks whether the code point is a digit
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is a digit
 */
export function isDigit(codePoint: number): boolean;

/**
 * Checks whether the code point is a punctuation character
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is a punctuation character
 */
export function isPunctuation(codePoint: number): boolean;

/**
 * Checks whether the code point is lower case
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is lower case
 */
export function isLowerCase(codePoint: number): boolean;

/**
 * Checks whether the code point is upper case
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is upper case
 */
export function isUpperCase(codePoint: number): boolean;

/**
 * Checks whether the code point is title case
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is title case
 */
export function isTitleCase(codePoint: number): boolean;

/**
 * Checks whether the code point is whitespace: specifically, whether the category is one of Zs, Zl, or Zp
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is whitespace: specifically, whether the category is one of Zs, Zl, or Zp
 */
export function isWhiteSpace(codePoint: number): boolean;

/**
 * Checks whether the code point is a base form. A code point of base form does not graphically combine with preceding characters
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is a base form. A code point of base form does not graphically combine with preceding characters
 */
export function isBaseForm(codePoint: number): boolean;

/**
 * Checks whether the code point is a mark character (e.g. accent)
 *
 * @param codePoint The Unicode code point to analyze
 * @returns Whether the code point is a mark character (e.g. accent)
 */
export function isMark(codePoint: number): boolean;
