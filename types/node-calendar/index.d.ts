// Type definitions for node-calendar v0.1.4
// Project: https://www.npmjs.com/package/node-calendar
// Definitions by: Luzian Zagadinow <https://github.com/luzianz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IWeekRow<T> extends Array<T> {
    [dayIndex: number]: T;
}

interface IMonthGrid<T> extends Array<IWeekRow<T>> {
    [weekRowIndex: number]: IWeekRow<T>;
}

interface IMonthRow<T> extends Array<IMonthGrid<T>> {
    [monthColumnIndex: number]: IMonthGrid<T>;
}

interface IYearGrid<T> extends Array<IMonthRow<T>> {
    [monthRowIndex: number]: IMonthRow<T>;
}

/**
 * This module allows you to output calendars like the Unix cal program, and provides
 * additional useful functions related to the calendar. By default, these calendars
 * have Monday as the first day of the week, and Sunday as the last (the European
 * convention). Use setfirstweekday() to set the first day of the week to Sunday
 * (6) or to any other weekday. Parameters that specify dates are given as integers.
 */
declare module 'node-calendar' {
    /** 0 */
    export var MONDAY: number;
    
    /** 1 */
    export var TUESDAY: number;
    
    /** 2 */
    export var WEDNESDAY: number;
    
    /** 3 */
    export var THURSDAY: number;
    
    /** 4 */
    export var FRIDAY: number;
    
    /** 5 */
    export var SATURDAY: number;
    
    /** 6 */
    export var SUNDAY: number;

    
    /** 1 */
    export var JANUARY: number;
    
    /** 2 */
    export var FEBRUARY: number;
    
    /** 3 */
    export var MARCH: number;
    
    /** 4 */
    export var APRIL: number;
    
    /** 5 */
    export var MAY: number;
    
    /** 6 */
    export var JUNE: number;
    
    /** 7 */
    export var JULY: number;
    
    /** 8 */
    export var AUGUST: number;
    
    /** 9 */
    export var SEPTEMBER: number;
    
    /** 10 */
    export var OCTOBER: number;
    
    /** 11 */
    export var NOVEMBER: number;
    
    /** 12 */
    export var DECEMBER: number;
    
    /**
     * [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
     */
    export var day_name: string[];
    
    /**
     * [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
     */
    export var day_abbr: string[];
    
    /**
     * [ '', 'January', 'February', 'March',
     * 'April', 'May', 'June', 'July', 'August',
     * 'September', 'October', 'November', 'December' ]
     */
    export var month_name: string[];
    
    /**
     * [ '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
     * 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
     */
    export var month_abbr: string[];
    
    /**
     * Base calendar class. This class doesn't do any formatting. It simply provides
     * data to subclasses.
     */
    export class Calendar {
        /**
         * @param {number} firstweekday
         *  Numerical day of the week the calendar weeks should start.
         *  (0=MON, 1=TUE, ...) Default: 0
         */
        constructor(firstweekday?: number);
        
        /**
         * Numerical day of the week the calendar weeks should start.
         * (0=MON, 1=TUE, ...)
         * 
         * @method getfirstweekday
         */
        getfirstweekday(): number;
        
        /**
         * Numerical day of the week the calendar weeks should start.
         * (0=MON, 1=TUE, ...)
         * 
         * @param {number} firstweekday
         *  Numerical day of the week the calendar weeks should start.
         *  (0=MON, 1=TUE, ...) Default: 0
         */
        setfirstweekday(firstweekday: number): void;
        
        /**
         * One week of weekday numbers starting with the configured first one.
         */
        iterweekdays(): number[];
        
        /**
         * Dates for one month. The array will contain Date values and will always
         * iterate through complete weeks, so it will yield dates outside the
         * specified month.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated.
         * 
         * @param {number} month
         *  Month for which the calendar should be generated.
         */
        itermonthdates(year: number, month: number): Date[];
        
        /**
         * Like itermonthdates(), but will yield day numbers. For days outside
         * the specified month the day number is 0.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated.
         * 
         * @param {number} month
         *  Month for which the calendar should be generated.
         */
        itermonthdays(year: number, month: number): number[];
        
        /**
         * Like itermonthdates(), but will yield [day number, weekday number]
         * arrays. For days outside the specified month the day number is 0.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated.
         * 
         * @param {number} month
         *  Month for which the calendar should be generated.
         */
        itermonthdays2(year: number, month: number): [number, number][];
        
        /**
         * A matrix (array of array) representing a month's calendar.
         * Each row represents a week; week entries are Date values.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated.
         * 
         * @param {number} month
         *  Month for which the calendar should be generated.
         */
        monthdatescalendar(year: number, month: number): IMonthGrid<Date>;
        
        /**
         * A matrix representing a month's calendar. Each row represents a week;
         * days outside this month are zero.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated.
         * 
         * @param {number} month
         *  Month for which the calendar should be generated.
         */
        monthdayscalendar(year: number, month: number): IMonthGrid<number>;
        
        /**
         * Return a matrix representing a month's calendar. Each row represents
         * a week; week entries are [day number, weekday number] arrays. Day numbers
         * outside this month are zero.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated.
         * 
         * @param {number} month
         *  Month for which the calendar should be generated.
         */
        monthdays2calendar(year: number, month: number): IMonthGrid<[number, number]>;
        
        /**
         * The specified year ready for formatting. The return value is an array
         * of month rows. Each month row contains up to width months. Each month
         * contains between 4 and 6 weeks and each week contains 1-7 days. Days
         * are Date objects.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated.
         * 
         * @param {number} width
         *  The number of months to include in each row. Default: 3
         */
        yeardatescalendar(year: number, width?: number): IYearGrid<Date>;
        
        /**
         * the specified year ready for formatting (similar to yeardatescalendar()).
         * Entries in the week arrays are day numbers. Day numbers outside this
         * month are zero.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated
         * 
         * @param {number} width
         *  The number of months to include in each row. Default: 3
         */
        yeardayscalendar(year: number, width?: number): IYearGrid<number>;
        
        /**
         * The specified year ready for formatting (similar to yeardatescalendar()).
         * Entries in the week arrays are [day number, weekday number] arrays.
         * Day numbers outside this month are zero.
         * 
         * @param {number} year
         *  Year for which the calendar should be generated
         * 
         * @param {number} width
         *  The number of months to include in each row. Default: 3
         */
        yeardays2calendar(year: number, width?: number): IYearGrid<[number, number]>;
    }
    
    /**
     * @param {number} year
     *  Year to test.
     * 
     * @return {boolean}
     *  true for leap years, false for non-leap years.
     */
    export function isleap(year: number): boolean;
    
    /**
     * @param {number} y1
     *  Beginning year in the range to test.
     * 
     * @param {number} y2
     *  Ending year in the range to test.
     * 
     * @return {number}
     *  Number of leap years in range (y1...y2). Assumes y1 <= y2.
     */
    export function leapdays(y1: number, y2: number): number;
    
    /**
     * @param {number} year
     *  Year for which the range should be calculated.
     * 
     * @param {number} month
     *  Month for which the range should be calculated.
     * 
     * @throws {IllegalMonthError} if the provided month is invalid.
     * 
     * @return {[number, number]}
     *  starting weekday (0-6 ~ Mon-Sun) and number of days (28-31) for year, month.
     */
    export function monthrange(year: number, month: number): [number, number];
    
    /**
     * Sets the locale for use in extracting month and weekday names.
     * 
     * @param {string} locale
     *  Locale to set on the calendar object. Default: en_US
     * 
     * @throws {IllegalLocaleError} if the provided locale is invalid.
     */
    export function setlocale(locale?: string): void;
    
    /**
     * Unrelated but handy function to calculate Unix timestamp from GMT.
     * 
     * @param timegmt {[number, number, number, number, number, number]}
     *  An array containing the elements from a time structure dataset.
     *  Format: [tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec]
     * 
     * @throws {IllegalMonthError} if the provided month element is invalid.
     * 
     * @throws {IllegalDayError} if the provided day element is invalid.
     * 
     * @throws {IllegalTimeError} if any of the the provided time elements are invalid.
     * 
     * @return {number}
     *  Unix timestamp from GMT.
     */
    export function timegm(timegmt: [number, number, number, number, number, number]): number;
    
    /**
     * @param {number} year
     *  Year for which the weekday should be calculated.
     * 
     * @param {number} month
     *  Month for which the weekday should be calculated.
     * 
     * @param {number} day
     *  Day for which the weekday should be calculated.
     * 
     * @throws {IllegalMonthError} if the provided month element is invalid.
     * 
     * @throws {IllegalDayError} if the provided day element is invalid.
     * 
     * @return {number}
     *  weekday (0-6 ~ Mon-Sun) for year (1970-...), month (1-12), day (1-31).
     */
    export function weekday(year: number, month: number, day: number): number;
    
    /** Error indicating a nonexistent or unsupported locale specified. */
    export class IllegalLocaleError implements Error {
        public name: string;
        public message: string;
        
        /**
         * @param {string} message
         *  Optional custom error message.
         */
        constructor(message?: string)
    }
    
    /** Error indicating a day index specified outside of the valid range. */
    export class IllegalDayError implements Error {
        public name: string;
        public message: string;
        
        /**
         * @param {string} message
         *  Optional custom error message.
         */
        constructor(message?: string)
    }
    
    /** Error indicating a month index specified outside of the expected range (1-12 ~ Jan-Dec). */
    export class IllegalMonthError implements Error {
        public name: string;
        public message: string;
        
        /**
         * @param {string} message
         *  Optional custom error message.
         */
        constructor(message?: string)
    }
    
    /** Error indicating a time element is outside of the valid range. */
    export class IllegalTimeError implements Error {
        public name: string;
        public message: string;
        
        /**
         * @param {string} message
         *  Optional custom error message.
         */
        constructor(message?: string)
    }
    
    /** Error indicating a weekday index specified outside of the expected range (0-6 ~ Mon-Sun). */
    export class IllegalWeekdayError implements Error {
        public name: string;
        public message: string;
        
        /**
         * @param {string} message
         *  Optional custom error message.
         */
        constructor(message?: string)
    }
}
