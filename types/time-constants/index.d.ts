// Type definitions for time-constants 1.0
// Project: https://github.com/jimhigson/time-constants#readme
// Definitions by: Libin Varghese <https://github.com/libinvarghese>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = time_constants;

declare const time_constants: {
    MILLISECONDS_PER_SECOND: number;
    SECONDS_PER_MINUTE: number;
    MINUTES_PER_HOUR: number;
    HOURS_PER_DAY: number;
    DAYS_PER_WEEK: number;
    MONTHS_PER_YEAR: number;

    /**
     * Milliseconds in a second
     */
    SECOND: number;
    /**
     * Milliseconds in a minute
     */
    MINUTE: number;
    /**
     * Milliseconds in a hour
     */
    HOUR: number;
    /**
     * Milliseconds in a day
     */
    DAY: number;
    /**
     * Milliseconds in a week
     */
    WEEK: number;
    /**
     * Milliseconds in a year(365.24 days)
     */
    YEAR: number;
    /**
     * Milliseconds in a year(365 days)
     */
    NORMAL_YEAR: number;
    /**
     * Milliseconds in a leap year(366 days)
     */
    LEAP_YEAR: number;
    /**
     * Milliseconds in 10 years(1 year = 365.24)
     */
    DECADE: number;
    /**
     * Milliseconds in 1/2 years(1 year = 365.24)
     */
    HALF_YEAR: number;
    /**
     * Milliseconds in 1/12 years(1 year = 365.24)
     */
    AVERAGE_MONTH: number;

    /**
     * +100,000,000 days, the min and max dates allowed in ECMA Script.
     *
     * @see http://ecma-international.org/ecma-262/5.1/#sec-15.9.1.1
     */
    MAX_DATE: Date;
    /**
     * -100,000,000 days, the min and max dates allowed in ECMA Script.
     *
     * @see http://ecma-international.org/ecma-262/5.1/#sec-15.9.1.1
     */
    MIN_DATE: Date;
};
