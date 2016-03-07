declare module goog {
    function require(name: 'goog.i18n.DateTimeParse'): typeof goog.i18n.DateTimeParse;
}

declare module goog.i18n {

    /**
     * Construct a DateTimeParse based on current locale.
     * @param {string|number} pattern pattern specification or pattern type.
     * @constructor
     * @final
     */
    class DateTimeParse {
        constructor(pattern: string|number);
        
        /**
         * Number of years prior to now that the century used to
         * disambiguate two digit years will begin
         *
         * @type {number}
         */
        static ambiguousYearCenturyStart: number;
        
        /**
         * Parse the given string and fill info into date object. This version does
         * not validate the input.
         * @param {string} text The string being parsed.
         * @param {goog.date.DateLike} date The Date object to hold the parsed date.
         * @param {number=} opt_start The position from where parse should begin.
         * @return {number} How many characters parser advanced.
         */
        parse(text: string, date: goog.date.DateLike, opt_start?: number): number;
        
        /**
         * Parse the given string and fill info into date object. This version will
         * validate the input and make sure it is a validate date/time.
         * @param {string} text The string being parsed.
         * @param {goog.date.DateLike} date The Date object to hold the parsed date.
         * @param {number=} opt_start The position from where parse should begin.
         * @return {number} How many characters parser advanced.
         */
        strictParse(text: string, date: goog.date.DateLike, opt_start?: number): number;
    }
}

declare module goog.i18n.DateTimeParse {

    /**
     * This class hold the intermediate parsing result. After all fields are
     * consumed, final result will be resolved from this class.
     * @constructor
     * @private
     */
    interface MyDate_ {
        
        /**
         * The date's era.
         * @type {?number}
         */
        era: number;
        
        /**
         * The date's year.
         * @type {?number}
         */
        year: number;
        
        /**
         * The date's month.
         * @type {?number}
         */
        month: number;
        
        /**
         * The date's day of month.
         * @type {?number}
         */
        day: number;
        
        /**
         * The date's hour.
         * @type {?number}
         */
        hours: number;
        
        /**
         * The date's before/afternoon denominator.
         * @type {?number}
         */
        ampm: number;
        
        /**
         * The date's minutes.
         * @type {?number}
         */
        minutes: number;
        
        /**
         * The date's seconds.
         * @type {?number}
         */
        seconds: number;
        
        /**
         * The date's milliseconds.
         * @type {?number}
         */
        milliseconds: number;
        
        /**
         * The date's timezone offset.
         * @type {?number}
         */
        tzOffset: number;
        
        /**
         * The date's day of week. Sunday is 0, Saturday is 6.
         * @type {?number}
         */
        dayOfWeek: number;
    }
}
