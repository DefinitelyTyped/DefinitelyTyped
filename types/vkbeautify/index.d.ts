// Type definitions for vkbeautify 0.99
// Project: https://github.com/aabluedragon/vkbeautify
// Definitions by: Tim Schraepen <https://github.com/sch3lp/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Original project: https://github.com/vkiryukhin/vkBeautify

// beautifying
/**
 * Pretty print an xml string with the given number of whitespace, or with a given indentation pattern
 */
export function xml(text: string, amountOfWhitespaces?: number | string): string;

/**
 * Pretty print a json string with the given number of whitespace, or with a given indentation pattern
 */
export function json(text: string, amountOfWhitespaces?: number | string): string;

/**
 * Pretty print a css string with the given number of whitespace, or with a given indentation pattern
 */
export function css(text: string, amountOfWhitespaces?: number | string): string;

/**
 * Pretty print an sql string with the given number of whitespace, or with a given indentation pattern
 */
export function sql(text: string, amountOfWhitespaces?: number | string): string;

// minifying
/**
 * Minifiy an xml string, and preserve or remove comments (default)
 */
export function xmlmin(text: string, preserveComments?: boolean): string;
/**
 * Minifiy a json string
 */
export function jsonmin(text: string): string;
/**
 * Minifiy a css string, and preserve or remove comments (default)
 */
export function cssmin(text: string, preserveComments?: boolean): string;
/**
 * Minifiy an sql string
 */
export function sqlmin(text: string): string;
