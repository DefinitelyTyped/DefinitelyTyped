export as namespace dateFormat;

/**
 * @param date Defaults to the current date/time.
 * @param mask Defaults to `masks.default`.
 * @returns A formatted version of the given date.
 */
export default function dateFormat(date?: Date | string | number, mask?: string, utc?: boolean, gmt?: boolean): string;
export default function dateFormat(mask?: string, utc?: boolean, gmt?: boolean): string;

/**
 * Get proper timezone abbreviation or timezone offset.
 *
 * This will fall back to `GMT+xxxx` if it does not recognize the
 * timezone within the `timezone` RegEx above. Currently only common
 * American and Australian timezone abbreviations are supported.
 */
export function formatTimezone(date: string | Date): string;

/**
 * Predefined Formats
 */
export let masks: DateFormatMasks;

/**
 * Internationalization strings
 *
 * @example
 * import { i18n } from 'dateformat';
 *
 * i18n.dayNames = [
 *     'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
 *     'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
 * ];
 * i18n.monthNames = [
 *     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
 *     'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
 * ];
 * i18n.timeNames = [
 *     'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
 * ];
 */
export let i18n: DateFormatI18n;

export interface DateFormatMasks {
    /**
     * @default "ddd mmm dd yyyy HH:MM:ss"
     */
    default: string;
    /**
     * @default "m/d/yy"
     */
    shortDate: string;
    /**
     * @default "mm/dd/yyyy"
     */
    paddedShortDate: string;
    /**
     * @default "mmm d, yyyy"
     */
    mediumDate: string;
    /**
     * @default "mmmm d, yyyy"
     */
    longDate: string;
    /**
     * @default "dddd, mmmm d, yyyy"
     */
    fullDate: string;
    /**
     * @default "h:MM TT"
     */
    shortTime: string;
    /**
     * @default "h:MM:ss TT"
     */
    mediumTime: string;
    /**
     * @default "h:MM:ss TT Z"
     */
    longTime: string;
    /**
     * @default "yyyy-mm-dd"
     */
    isoDate: string;
    /**
     * @default "HH:MM:ss"
     */
    isoTime: string;
    /**
     * @default "yyyy-mm-dd'T'HH:MM:sso"
     */
    isoDateTime: string;
    /**
     * @default "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
     */
    isoUtcDateTime: string;
    /**
     * @default "ddd, dd mmm yyyy HH:MM:ss Z"
     */
    expiresHeaderFormat: string;
    [key: string]: string;
}

export interface DateFormatI18n {
    dayNames: string[];
    monthNames: string[];
    timeNames: string[];
}
