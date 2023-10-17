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
