// Type definitions for fold-to-ascii 5.0
// Project: https://github.com/mplatt/fold-to-ascii
// Definitions by: Morgan Zolob <https://github.com/mogzol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Replace all known non-ASCII characters with appropriate replacements,
 * replace the unknown ones with a fallback
 *
 * @param str Input string containing ASCII and/or non-ASCII characters
 * @param replacement Fallback for unknown characters in the input string
 *                    (defaults to empty string)
 */
export function foldReplacing(str?: string, replacement?: string): string;

/**
 * Replace all known non-ASCII characters with appropriate replacements,
 * maintain the unknown ones
 *
 * @param str Input string containing ASCII and/or non-ASCII characters
 */
export function foldMaintaining(str?: string): string;
