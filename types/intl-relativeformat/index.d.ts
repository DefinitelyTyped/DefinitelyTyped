// Type definitions for intl-relativeformat 2.1
// Project: https://github.com/yahoo/intl-relativeformat
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * This package aims to provide a way to format different variations of relative time.
 * You can use this package in the browser and on the server via Node.js.
 *
 * This implementation is very similar to moment.js, in concept, although it provides
 * only formatting features based on the Unicode CLDR locale data, an industry
 * standard that supports more than 200 languages.
 *
 * @see https://github.com/yahoo/intl-relativeformat
 */
export default class IntlRelativeFormat {
    /**
     * To format a date to relative time, use the IntlRelativeFormat constructor.
     * The constructor takes two parameters:
     *
     * @param locales A string with a BCP 47 language tag, or an array of
     * such strings. If you do not provide a locale, the default locale will be used.
     * When an array of locales is provided, each item and its ancestor locales are checked
     * and the first one with registered locale data is returned. See: Locale Resolution
     * for more details.
     * @see https://github.com/yahoo/intl-relativeformat#locale-resolution
     *
     * @param optionas object with user defined options for format styles.
     * See: Custom Options for more details.
     * @see https://github.com/yahoo/intl-relativeformat#custom-options
     * Note: The rf instance should be enough for your entire application,
     * unless you want to use custom options.
     */
    constructor(
        locales: string | string[],
        options?: Intl.DateTimeFormatOptions & {
            /**
             * By default, the relative time is computed to the best fit unit,
             * but you can explicitly call it to force units to be displayed in
             * "second", "second-short", "minute", "minute-short", "hour",
             * "hour-short", "day", "day-short", "month", "month-short",
             * "year" or "year-short":
             */
            units?:
                | "second"
                | "second-short"
                | "minute"
                | "minute-short"
                | "hour"
                | "hour-short"
                | "day"
                | "day-short"
                | "month"
                | "month-short"
                | "year"
                | "year-short";

            /**
             * By default, the relative time is computed as "best fit",
             * which means that instead of "1 day ago", it will display "yesterday",
             * or "in 1 year" will be "next year", etc. But you can force to always
             * use the "numeric" alternative:
             */
            style?: "best fit" | "numeric";
        }
    );

    /**
     * This method returns an object with the options values that were resolved
     * during instance creation. It currently only contains a locale property
     *
     *     var rf = new IntlRelativeFormat('en-us');
     *     console.log(rf.resolvedOptions().locale); // => "en-US"
     *
     * Notice how the specified locale was the all lower-case value: "en-us",
     * but it was resolved and normalized to: "en-US".
     */
    resolvedOptions(): { locale: string };

    /**
     * The format method (which takes a JavaScript date or timestamp) and optional
     * options arguments will compare the date with "now" (or options.now),
     * and returns the formatted string; e.g., "3 hours ago" in the corresponding
     * locale passed into the constructor.
     *
     *    var output = rf.format(new Date());
     *    console.log(output); // => "now"
     *
     * If you wish to specify a "now" value, it can be provided via options.now and
     *  will be used instead of querying Date.now() to get the current "now" value.
     */
    format(date: Date, options?: { now?: Date }): string;
}
