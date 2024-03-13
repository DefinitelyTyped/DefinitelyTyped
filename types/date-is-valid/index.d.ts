export = dateIsValid;

/**
 * Check if a date is valid or not.
 *
 * @param date The input date.
 * @returns `true` if the date is valid, `false` otherwise.
 *
 * @example
 * import dateIsValid = require("date-is-valid");
 *
 * console.log(dateIsValid(new Date()));
 * // => true
 *
 * console.log(dateIsValid(new Date("foo")));
 * // => false
 */
declare function dateIsValid(date: Date): boolean;
