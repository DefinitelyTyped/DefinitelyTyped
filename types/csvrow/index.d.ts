// Type definitions for csvrow 0.1
// Project: https://github.com/trentm/node-csvrow
// Definitions by: Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Parse a CSV row (i.e. a single row) into an array of strings.
 *
 * c.f. http://en.wikipedia.org/wiki/Comma-separated_values
 *
 * Limitations/Opinions:
 * - don't support elements with line-breaks
 * - leading a trailing spaces are trimmed, unless the entry is quoted
 *
 * @throws {TypeError} if the given CSV row is invalid
 *
 * @summary Parse a CSV row into an array of strings.
 */
export function parse(row: string): string[];

/**
 * Serialize the given array to a CSV row.
 */
export function stringify(columns: string[]): string;

/**
 * Normalize the given CSV line.
 */
export function normalize(row: string): string;
