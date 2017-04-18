declare module goog {
    function require(name: 'goog.format'): typeof goog.format;
}

declare module goog.format {

    /**
     * Tokens used within insertWordBreaks.
     * @private
     * @enum {number}
     */
    type WbrToken_ = number;
    var WbrToken_: {
        LT: WbrToken_;
        GT: WbrToken_;
        AMP: WbrToken_;
        SEMI_COLON: WbrToken_;
        SPACE: WbrToken_;
    };

    /**
     * Constant for the WBR replacement used by insertWordBreaks.  Safari requires
     * <wbr></wbr>, Opera needs the &shy; entity, though this will give a visible
     * hyphen at breaks.  IE8 uses a zero width space.
     * Other browsers just use <wbr>.
     * @type {string}
     */
    var WORD_BREAK_HTML: string;

    /**
     * Formats a number of bytes in human readable form.
     * 54, 450K, 1.3M, 5G etc.
     * @param {number} bytes The number of bytes to show.
     * @param {number=} opt_decimals The number of decimals to use.  Defaults to 2.
     * @return {string} The human readable form of the byte size.
     */
    function fileSize(bytes: number, opt_decimals?: number): string;

    /**
     * Checks whether string value containing scaling units (K, M, G, T, P, m,
     * u, n) can be converted to a number.
     *
     * Where there is a decimal, there must be a digit to the left of the
     * decimal point.
     *
     * Negative numbers are valid.
     *
     * Examples:
     *   0, 1, 1.0, 10.4K, 2.3M, -0.3P, 1.2m
     *
     * @param {string} val String value to check.
     * @return {boolean} True if string could be converted to a numeric value.
     */
    function isConvertableScaledNumber(val: string): boolean;

    /**
     * Converts a string to numeric value, taking into account the units.
     * If string ends in 'B', use binary conversion.
     * @param {string} stringValue String to be converted to numeric value.
     * @return {number} Numeric value for string.
     */
    function stringToNumericValue(stringValue: string): number;

    /**
     * Converts a string to number of bytes, taking into account the units.
     * Binary conversion.
     * @param {string} stringValue String to be converted to numeric value.
     * @return {number} Numeric value for string.
     */
    function stringToNumBytes(stringValue: string): number;

    /**
     * Converts a numeric value to string representation. SI conversion.
     * @param {number} val Value to be converted.
     * @param {number=} opt_decimals The number of decimals to use.  Defaults to 2.
     * @return {string} String representation of number.
     */
    function numericValueToString(val: number, opt_decimals?: number): string;

    /**
     * Converts number of bytes to string representation. Binary conversion.
     * Default is to return the additional 'B' suffix, e.g. '10.5KB' to minimize
     * confusion with counts that are scaled by powers of 1000.
     * @param {number} val Value to be converted.
     * @param {number=} opt_decimals The number of decimals to use.  Defaults to 2.
     * @param {boolean=} opt_suffix If true, include trailing 'B' in returned
     *     string.  Default is true.
     * @param {boolean=} opt_useSeparator If true, number and scale will be
     *     separated by a no break space. Default is false.
     * @return {string} String representation of number of bytes.
     */
    function numBytesToString(val: number, opt_decimals?: number, opt_suffix?: boolean, opt_useSeparator?: boolean): string;

    /**
     * Inserts word breaks into an HTML string at a given interval.
     *
     * This method is as aggressive as possible, using a full table of Unicode
     * characters where it is legal to insert word breaks; however, this table
     * comes at a 2.5k pre-gzip (~1k post-gzip) size cost.  Consider using
     * insertWordBreaksBasic to minimize the size impact.
     *
     * @param {string} str HTML to insert word breaks into.
     * @param {number=} opt_maxlen Maximum length after which to ensure there is a
     *     break.  Default is 10 characters.
     * @return {string} The string including word breaks.
     */
    function insertWordBreaks(str: string, opt_maxlen?: number): string;

    /**
     * Inserts word breaks into an HTML string at a given interval.
     *
     * This method is less aggressive than insertWordBreaks, only inserting
     * breaks next to punctuation and between Latin or Cyrillic characters.
     * However, this is good enough for the common case of URLs.  It also
     * works for all Latin and Cyrillic languages, plus CJK has no need for word
     * breaks.  When this method is used, goog.i18n.GraphemeBreak may be dead
     * code eliminated.
     *
     * @param {string} str HTML to insert word breaks into.
     * @param {number=} opt_maxlen Maximum length after which to ensure there is a
     *     break.  Default is 10 characters.
     * @return {string} The string including word breaks.
     */
    function insertWordBreaksBasic(str: string, opt_maxlen?: number): string;
}
