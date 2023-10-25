/**
 * Parse the given ISO date `string` into a native `Date` object.
 *
 * @example
 * import isodate = require('@segment/isodate');
 *
 * const date = isodate.parse('2013-09-04T00:57:26.434Z');
 * date.toISOString(); // "2013-09-04T00:57:26.434Z"
 */
export function parse(iso: string): Date;

/**
 * Check if the given `string` is an ISO date string. `strict` mode will return false for
 * strings without a year, month and date; for example `2013` would be `false`.
 *
 * @example
 * import isodate = require('@segment/isodate');
 *
 * isodate.is('2013-09-04T00:57:26.434Z'); // true
 * isodate.is('string'); // false
 */
export function is(string: string, strict?: boolean): boolean;
