// Type definitions for date-is-valid 1.0
// Project: https://github.com/IonicaBizau/date-is-valid#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
