// Type definitions for junk 2.1
// Project: https://github.com/sindresorhus/junk#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns `true` if `filename` matches a junk file.
 */
export function is(filename: string): boolean;
/**
 * Returns `true` if `filename` doesn't match a junk file.
 */
export function not(filename: string): boolean;
/**
 * Regex used for matching.
 */
export const regex: RegExp;
