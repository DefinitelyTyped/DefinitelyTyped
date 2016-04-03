declare module goog {
    function require(name: 'goog.date.DateRange'): typeof goog.date.DateRange;
    function require(name: 'goog.date.DateRange.StandardDateRangeKeys'): typeof goog.date.DateRange.StandardDateRangeKeys;
    function require(name: 'goog.date.DateRange.Iterator'): typeof goog.date.DateRange.Iterator;
}

declare module goog.date {

    /**
     * Constructs a date range.
     * @constructor
     * @param {goog.date.Date} startDate The first date in the range.
     * @param {goog.date.Date} endDate The last date in the range.
     * @final
     */
    class DateRange {
        constructor(startDate: goog.date.Date, endDate: goog.date.Date);
        
        /**
         * The first possible day, as far as this class is concerned.
         * @type {goog.date.Date}
         */
        static MINIMUM_DATE: goog.date.Date;
        
        /**
         * The last possible day, as far as this class is concerned.
         * @type {goog.date.Date}
         */
        static MAXIMUM_DATE: goog.date.Date;
        
        /**
         * @return {goog.date.Date} The first date in the range.
         */
        getStartDate(): goog.date.Date;
        
        /**
         * @return {goog.date.Date} The last date in the range.
         */
        getEndDate(): goog.date.Date;
        
        /**
         * Tests if a date falls within this range.
         *
         * @param {goog.date.Date} date The date to test.
         * @return {boolean} Whether the date is in the range.
         */
        contains(date: goog.date.Date): boolean;
        
        /**
         * @return {!goog.date.DateRange.Iterator} An iterator over the date range.
         */
        iterator(): goog.date.DateRange.Iterator;
        
        /**
         * Tests two {@link goog.date.DateRange} objects for equality.
         * @param {goog.date.DateRange} a A date range.
         * @param {goog.date.DateRange} b A date range.
         * @return {boolean} Whether |a| is the same range as |b|.
         */
        static equals(a: goog.date.DateRange, b: goog.date.DateRange): boolean;
        
        /**
         * Returns the range from yesterday to yesterday.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that includes only yesterday.
         */
        static yesterday(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * Returns the range from today to today.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that includes only today.
         */
        static today(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * Returns the range that includes the seven days that end yesterday.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that includes the seven days that
         *     end yesterday.
         */
        static last7Days(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * Returns the range that starts the first of this month and ends the last day
         * of this month.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that starts the first of this month
         *     and ends the last day of this month.
         */
        static thisMonth(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * Returns the range that starts the first of last month and ends the last day
         * of last month.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that starts the first of last month
         *     and ends the last day of last month.
         */
        static lastMonth(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * Returns the seven-day range that starts on the first day of the week
         * (see {@link goog.i18n.DateTimeSymbols.FIRSTDAYOFWEEK}) on or before today.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that starts the Monday on or before
         *     today and ends the Sunday on or after today.
         */
        static thisWeek(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * Returns the seven-day range that ends the day before the first day of
         * the week (see {@link goog.i18n.DateTimeSymbols.FIRSTDAYOFWEEK}) that
         * contains today.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that starts seven days before the
         *     Monday on or before today and ends the Sunday on or before yesterday.
         */
        static lastWeek(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * Returns the range that starts seven days before the Monday on or before
         * today and ends the Friday before today.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that starts seven days before the
         *     Monday on or before today and ends the Friday before today.
         */
        static lastBusinessWeek(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * Returns the range that includes all days between January 1, 1900 and
         * December 31, 9999.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The range that includes all days between
         *     January 1, 1900 and December 31, 9999.
         */
        static allTime(opt_today?: goog.date.Date): goog.date.DateRange;
        
        /**
         * @param {string} dateRangeKey A standard date range key.
         * @param {goog.date.Date=} opt_today The date to consider today.
         *     Defaults to today.
         * @return {!goog.date.DateRange} The date range that corresponds to that key.
         * @throws {Error} If no standard date range with that key exists.
         */
        static standardDateRange(dateRangeKey: string, opt_today?: goog.date.Date): goog.date.DateRange;
    }
}

declare module goog.date.DateRange {

    /**
     * Standard date range keys. Equivalent to the enum IDs in
     * DateRange.java http://go/datarange.java
     *
     * @enum {string}
     */
    type StandardDateRangeKeys = string;
    var StandardDateRangeKeys: {
        YESTERDAY: StandardDateRangeKeys;
        TODAY: StandardDateRangeKeys;
        LAST_7_DAYS: StandardDateRangeKeys;
        THIS_MONTH: StandardDateRangeKeys;
        LAST_MONTH: StandardDateRangeKeys;
        THIS_WEEK: StandardDateRangeKeys;
        LAST_WEEK: StandardDateRangeKeys;
        LAST_BUSINESS_WEEK: StandardDateRangeKeys;
        ALL_TIME: StandardDateRangeKeys;
    };

    /**
     * Creates an iterator over the dates in a {@link goog.date.DateRange}.
     * @constructor
     * @extends {goog.iter.Iterator.<goog.date.Date>}
     * @param {goog.date.DateRange} dateRange The date range to iterate.
     * @final
     */
    class Iterator extends goog.iter.Iterator<goog.date.Date> {
        constructor(dateRange: goog.date.DateRange);
    }
}
