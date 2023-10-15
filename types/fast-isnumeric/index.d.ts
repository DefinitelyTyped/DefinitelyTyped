// Type definitions for fast-isnumeric 1.1
// Project: https://github.com/plotly/fast-isnumeric#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The fast way to check if a JS object is numeric
 * Inspired by is-number <https://github.com/jonschlinkert/is-number>
 * but significantly simplified and sped up by ignoring number and string constructors
 * ie these return false:
 *   new Number(1)
 *   new String('1')
 */
declare function isNumeric(n: any): boolean;

export = isNumeric;
