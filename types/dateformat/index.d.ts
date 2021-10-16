// Type definitions for dateformat 5.0
// Project: https://github.com/felixge/node-dateformat
// Definitions by: Kombu <https://github.com/aicest>
//                 BendingBender <https://github.com/BendingBender>
//                 captain-igloo <https://github.com/captain-igloo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

/**
 * dateFormat()
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to masks.default.
 *
 * https://github.com/felixge/node-dateformat/blob/master/src/dateformat.js#L26
 */
export default function dateFormat(
    date?: Date | string | number,
    mask?: string,
    utc?: boolean,
    gmt?: boolean
): string;

export default function dateFormat(
    mask?: string,
    utc?: boolean,
    gmt?: boolean
): string;

/**
 * formatTimezone()
 *
 * Get proper timezone abbreviation or timezone offset.
 *
 * https://github.com/felixge/node-dateformat/blob/master/src/dateformat.js#L321
 */
export function formatTimezone(date: string | Date): string;

export const masks: DateFormatMasks;

export let i18n: DateFormatI18n;

/**
 * masks
 *
 * Predefined Formats
 *
 * @see https://github.com/felixge/node-dateformat/blob/master/src/dateformat.js#L157
 */
export interface DateFormatMasks {
    default: string;
    shortDate: string;
    paddedShortDate: string;
    mediumDate: string;
    longDate: string;
    fullDate: string;
    shortTime: string;
    mediumTime: string;
    longTime: string;
    isoDate: string;
    isoTime: string;
    isoDateTime: string;
    isoUtcDateTime: string;
    expiresHeaderFormat: string;
    [key: string]: string;
}

/**
 * Internationalization strings
 *
 * Example:
 *
 * @example ```
 * i18n = {
 *     dayNames: [
 *         'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
 *         'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
 *     ],
 *     monthNames: [
 *         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
 *         'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
 *     ],
 *     timeNames: [
 *         'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
 *     ]
 * };```
 *
 * @see https://github.com/felixge/node-dateformat/blob/master/src/dateformat.js#L175
 */
export interface DateFormatI18n {
    dayNames: string[];
    monthNames: string[];
    timeNames: string[];
}
