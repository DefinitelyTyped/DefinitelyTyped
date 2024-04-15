export = newDate;

/**
 * Returns a new Date object created from the input. The input can be:
 * - Date objects
 * - [date strings](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/parse)
 * - millisecond numbers
 * - second numbers
 * - millisecond strings
 * - second strings
 *
 * @example
 * import newDate = require('new-date');
 *
 * newDate(new Date);
 * newDate('Wed, 09 Aug 1995 00:00:00 GMT');
 * newDate('Aug 9, 1995');
 * newDate('2011-10-10T14:48:00');
 * newDate(1363288923637);
 * newDate(1363288923);
 * newDate('1363288923637');
 * newDate('1363288923');
 */
declare function newDate(val: Date | string | number): Date;
