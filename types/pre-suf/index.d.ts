/**
 * Manipulate strings with prefixes and suffixes.
 */

/**
 * Ensures that the new string will have prefix at the beginning of str.
 * If str does not begin with prefix, prefix will be added to the beggining of str.
 */
export function ensureLeading(str: string, prefix: string): string;
/**
 * Removes the leading prefix of str.
 */
export function removeLeading(str: string, prefix: string): string;
/**
 * Ensures that the new string will have suffix at the end of str.
 * If str does not end with suffix, suffix will be added at the end of str.
 */
export function ensureEnding(str: string, suffix: string): string;
/**
 * Removes the ending suffix of str.
 */
export function removeEnding(str: string, suffix: string): string;
