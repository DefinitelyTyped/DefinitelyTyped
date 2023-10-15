// Type definitions for number-to-words 1.2
// Project: https://github.com/marlun78/number-to-words
// Definitions by: Frederick Fogerty <https://github.com/frederickfogerty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace numberToWords;

/**
 * Converts an integer into a string with an ordinal postfix. If number is decimal, the decimals will be removed.
 */
export function toOrdinal(number: string | number): string;

/**
 * Converts an integer into words. If number is decimal, the decimals will be removed.
 */
export function toWords(number: string | number): string;

/**
 * Converts a number into ordinal words. If number is decimal, the decimals will be removed.
 */
export function toWordsOrdinal(number: string | number): string;
