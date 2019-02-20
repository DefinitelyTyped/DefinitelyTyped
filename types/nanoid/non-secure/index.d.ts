/**
 * Generate URL-friendly unique ID. This method use non-secure predictable
 * random generator.
 *
 * By default, ID will have 21 symbols to have a collision probability similar
 * to UUID v4.
 *
 * @param [size=21] The number of symbols in ID.
 *
 * @return Random string.
 *
 * @example
 * const nanoid = require('nanoid/non-secure')
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 */
declare function nanoid(size?: number): string;

export = nanoid;
