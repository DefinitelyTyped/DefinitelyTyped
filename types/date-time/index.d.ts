// Type definitions for date-time 2.1
// Project: https://github.com/sindresorhus/date-time
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DateTimeOptions {
    /**
     * Custom date.
     */
    date?: Date;
    /**
     * Show the date in the local time zone.
     */
    local?: boolean;
    /**
     * Show the UTC time zone postfix.
     */
    showTimeZone?: boolean;
    /**
     * Show the milliseconds in the date if any.
     */
    showMilliseconds?: boolean;
}

/**
 * Pretty datetime: 2014-01-09 06:46:01
 */
export default function(options?: DateTimeOptions): string;
