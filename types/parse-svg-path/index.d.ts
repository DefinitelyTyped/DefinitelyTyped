/**
 * A parsed SVG path command.
 * First element is the command letter (M, L, C, etc.), followed by numeric arguments.
 */
type PathCommand = [string, ...number[]];

/**
 * Parse an SVG path data string into an array of commands.
 *
 * Each command is an array where the first element is the command letter
 * and the remaining elements are the numeric arguments.
 *
 * @param path - SVG path data string (e.g., "M0 0 L10 10")
 * @returns Array of parsed commands
 *
 * @example
 * ```javascript
 * const parse = require('parse-svg-path');
 *
 * parse('M0 0 L10 10 Z');
 * // => [['M', 0, 0], ['L', 10, 10], ['Z']]
 *
 * parse('m10 10 h5 v5');
 * // => [['m', 10, 10], ['h', 5], ['v', 5]]
 * ```
 */
declare function parse(path: string): PathCommand[];

export = parse;
