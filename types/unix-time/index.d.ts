export = unixTime;

/**
 * Convert a date to a [unix timestamp](http://en.wikipedia.org/wiki/Unix_timestamp) because every
 * other analytics service under the sun seems to use this.
 *
 * @example
 * import unixTime = require('unix-time');
 *
 * unixTime(new Date()); // 1374016861
 */
declare function unixTime(date: string | number | Date): number;
