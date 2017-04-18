declare module goog {
    function require(name: 'goog.i18n.DateTimeFormat'): typeof goog.i18n.DateTimeFormat;
    function require(name: 'goog.i18n.DateTimeFormat.Format'): typeof goog.i18n.DateTimeFormat.Format;
}

declare module goog.i18n {

    /**
     * Construct a DateTimeFormat object based on current locale.
     * @constructor
     * @param {string|number} pattern pattern specification or pattern type.
     * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use for this
     *     instance rather than the global symbols.
     * @final
     */
    class DateTimeFormat {
        constructor(pattern: string|number, opt_dateTimeSymbols?: Object);
        
        /**
         * Format the given date object according to preset pattern and current lcoale.
         * @param {goog.date.DateLike} date The Date object that is being formatted.
         * @param {goog.i18n.TimeZone=} opt_timeZone optional, if specified, time
         *    related fields will be formatted based on its setting. When this field
         *    is not specified, "undefined" will be pass around and those function
         *    that really need time zone service will create a default one.
         * @return {string} Formatted string for the given date.
         *    Throws an error if the date is null or if one tries to format a date-only
         *    object (for instance goog.date.Date) using a pattern with time fields.
         */
        format(date: goog.date.DateLike, opt_timeZone?: goog.i18n.TimeZone): string;
        
        /**
         * Localizes a string potentially containing numbers, replacing ASCII digits
         * with native digits if specified so by the locale. Leaves other characters.
         * @param {number|string} input the string to be localized, using ASCII digits.
         * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use rather than
         *     the global symbols.
         * @return {string} localized string, potentially using native digits.
         */
        static localizeNumbers(input: number|string, opt_dateTimeSymbols?: Object): string;
    }
}

declare module goog.i18n.DateTimeFormat {

    /**
     * Enum to identify predefined Date/Time format pattern.
     * @enum {number}
     */
    type Format = number;
    var Format: {
        FULL_DATE: Format;
        LONG_DATE: Format;
        MEDIUM_DATE: Format;
        SHORT_DATE: Format;
        FULL_TIME: Format;
        LONG_TIME: Format;
        MEDIUM_TIME: Format;
        SHORT_TIME: Format;
        FULL_DATETIME: Format;
        LONG_DATETIME: Format;
        MEDIUM_DATETIME: Format;
        SHORT_DATETIME: Format;
    };

    /**
     * These are token types, corresponding to above token definitions.
     * @enum {number}
     * @private
     */
    type PartTypes_ = number;
    var PartTypes_: {
        QUOTED_STRING: PartTypes_;
        FIELD: PartTypes_;
        LITERAL: PartTypes_;
    };
}
