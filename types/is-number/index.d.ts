// Type definitions for is-number 3.0
// Project: https://github.com/jonschlinkert/is-number
// Definitions by: Harry Shipton <https://github.com/harryshipton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = is_number;

/**
 * Will test to see if the argument is a valid number, excluding Infinity and NaN.
 * @param num Any value that should be tested for being a number
 * @returns true if the parameter is a valid number, otherwise false
 */
declare function is_number(num: any): boolean;
