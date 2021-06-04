// Type definitions for cross-platform-terminal-characters 1.4
// Project: https://github.com/ehmicky/cross-platform-terminal-characters
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A `RegExp` that matches any character that **isn't** cross-platform compatible.
 *
 * @example
 * const { regex } = require('cross-platform-terminal-characters');
 *
 * console.log(regex.test('≈'));
 * // -> "false", i.e. cross-platform
 *
 * console.log(regex.test('≐'));
 * // -> "true", i.e. not cross-platform
 *
 * // Remove not cross-platform characters
 * console.log('example ≈ test ≐ text'.replace(regex, ''));
 * // -> "example ≈ test  text"
 */
export const regex: RegExp;

/**
 * An array of cross-platform compatible codepoint integers.
 *
 * @example
 * const { codepoints } = require('cross-platform-terminal-characters');
 *
 * console.log(codepoints)
 * // -> [0x0008, 0x0009, ..., 0x25cf]
 */
export const codepoints: number[];

/**
 * An array of cross-platform compatible single-character strings.
 *
 * @example
 * const { characters } = require('cross-platform-terminal-characters');
 *
 * console.log(characters)
 * // -> ['\b', '\t', ..., '●']
 */
export const characters: string[];
