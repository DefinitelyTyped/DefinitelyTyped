// Type definitions for is-number 7.0
// Project: https://github.com/jonschlinkert/is-number
// Definitions by: Harry Shipton <https://github.com/harryshipton>
//                 Jed Thompson <https://github.com/jedster1111>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = is_number;

/**
 * Will test to see if the argument is a valid number, excluding Infinity and NaN.
 * @param num Any value that should be tested for being a number
 * @returns true if the parameter is a valid number, otherwise false
 */
declare function is_number(num: any): num is number | string;
