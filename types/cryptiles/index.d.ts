// Type definitions for cryptiles 3.1
// Project: https://github.com/hapijs/cryptiles
// Definitions by: Alex Wendland <https://github.com/awendland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns a cryptographically strong pseudo-random data string. Takes a size argument for the length of the string.
 */
export function randomString(size: number): string;

/**
 * Returns a cryptographically strong pseudo-random data string consisting of only numerical digits (0-9).
 * Takes a size argument for the length of the string.
 */
export function randomDigits(size: number): string;

/**
 * Compare two strings using fixed time algorithm (to prevent time-based analysis of MAC digest match).
 * Returns true if the strings match, false if they differ.
 */
export function fixedTimeComparison(a: string, b: string): boolean;
