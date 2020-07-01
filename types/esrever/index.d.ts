// Type definitions for esrever 0.2
// Project: https://github.com/mathiasbynens/esrever
// Definitions by: Yuichiro Tsuchiya <https://github.com/tuttieee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace esrever;

/**
 * A string representing the semantic version number.
 */
export const version: string;

/**
 * This function takes a string and returns the reversed version of that string,
 * correctly accounting for Unicode combining marks and astral symbols.
 */
export function reverse(text: string): string;
