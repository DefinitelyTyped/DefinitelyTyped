// Type definitions for toidentifier 1.0
// Project: https://github.com/component/toidentifier#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = toIdentifier;

/**
 * Convert a string of words to a JavaScript identifier.
 *
 * Given a string as the argument, it will be transformed according to the following
 * rules and the new string will be returned:
 *
 * 1. Split into words separated by space characters (`0x20`).
 * 1. Upper case the first character of each word.
 * 1. Join the words together with no separator.
 * 1. Remove all non-word (`[0-9a-z_]`) characters.
 *
 * @example
 * import toIdentifier = require('toidentifier')
 *
 * console.log(toIdentifier('Bad Request'))
 * // => "BadRequest"
 */
declare function toIdentifier(str: string): string;
