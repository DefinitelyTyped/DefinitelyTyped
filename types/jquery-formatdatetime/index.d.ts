// Type definitions for JQuery formatDateTime 1.1
// Project: https://github.com/agschwender/jquery.formatDateTime
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export type Options = Partial<{
    /**
     * Names of the months, e.g. January
     */
    monthNames: string[];

    /**
     * Shortened names of the months, e.g. Jan
     */
    monthNamesShort: string[];

    /**
     * Names of the days, e.g. Sunday
     */
    dayNames: string[];

    /**
     * Shortened names of the days, e.g. Sun
     */
    dayNamesShort: string[];

    /**
     * Names of the 12-hour clock periods, e.g. AM
     */
    ampmNames: string[];

    /**
     * Callback to convert number to ordinal suffix, e.g. 1 to st
     */
    getSuffix: ((num: number) => string);

    /**
     * Attribute which contains the datetime
     */
    attribute: string;

    /**
     * Attribute which contains the datetime format
     */
    formatAttribute: string;

    /**
     * Render dates in UTC instead of local timezone
     */
    utc: boolean;
}>;

declare global {
    interface JQuery {
        formatDateTime(format: string, options?: Options): JQuery;
    }

    interface JQueryStatic {
        formatDateTime(format: string, date: Date, options?: Options): string;
    }
}
