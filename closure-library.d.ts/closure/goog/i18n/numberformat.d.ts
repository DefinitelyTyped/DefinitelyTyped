declare module goog {
    function require(name: 'goog.i18n.NumberFormat'): typeof goog.i18n.NumberFormat;
    function require(name: 'goog.i18n.NumberFormat.Format'): typeof goog.i18n.NumberFormat.Format;
    function require(name: 'goog.i18n.NumberFormat.CurrencyStyle'): typeof goog.i18n.NumberFormat.CurrencyStyle;
}

declare module goog.i18n {

    /**
     * Constructor of NumberFormat.
     * @param {number|string} pattern The number that indicates a predefined
     *     number format pattern.
     * @param {string=} opt_currency Optional international currency
     *     code. This determines the currency code/symbol used in format/parse. If
     *     not given, the currency code for current locale will be used.
     * @param {number=} opt_currencyStyle currency style, value defined in
     *        goog.i18n.NumberFormat.CurrencyStyle.
     * @constructor
     */
    class NumberFormat {
        constructor(pattern: number|string, opt_currency?: string, opt_currencyStyle?: number);
        
        /**
         * Set if the usage of Ascii digits in formatting should be enforced.
         * @param {boolean} doEnforce Boolean value about if Ascii digits should be
         *     enforced.
         */
        static setEnforceAsciiDigits(doEnforce: boolean): void;
        
        /**
         * Return if Ascii digits is enforced.
         * @return {boolean} If Ascii digits is enforced.
         */
        static isEnforceAsciiDigits(): boolean;
        
        /**
         * Sets minimum number of fraction digits.
         * @param {number} min the minimum.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setMinimumFractionDigits(min: number): goog.i18n.NumberFormat;
        
        /**
         * Sets maximum number of fraction digits.
         * @param {number} max the maximum.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setMaximumFractionDigits(max: number): goog.i18n.NumberFormat;
        
        /**
         * Sets number of significant digits to show. Only fractions will be rounded.
         * @param {number} number The number of significant digits to include.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setSignificantDigits(number: number): goog.i18n.NumberFormat;
        
        /**
         * Gets number of significant digits to show. Only fractions will be rounded.
         * @return {number} The number of significant digits to include.
         */
        getSignificantDigits(): number;
        
        /**
         * Sets whether trailing fraction zeros should be shown when significantDigits_
         * is positive. If this is true and significantDigits_ is 2, 1 will be formatted
         * as '1.0'.
         * @param {boolean} showTrailingZeros Whether trailing zeros should be shown.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setShowTrailingZeros(showTrailingZeros: boolean): goog.i18n.NumberFormat;
        
        /**
         * Sets a number to base the formatting on when compact style formatting is
         * used. If this is null, the formatting should be based only on the number to
         * be formatting.
         *
         * This base formatting number can be used to format the target number as
         * another number would be formatted. For example, 100,000 is normally formatted
         * as "100K" in the COMPACT_SHORT format. To instead format it as '0.1M', the
         * base number could be set to 1,000,000 in order to force all numbers to be
         * formatted in millions. Similarly, 1,000,000,000 would normally be formatted
         * as '1B' and setting the base formatting number to 1,000,000, would cause it
         * to be formatted instead as '1,000M'.
         *
         * @param {?number} baseFormattingNumber The number to base formatting on, or
         * null if formatting should not be based on another number.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setBaseFormatting(baseFormattingNumber: number): goog.i18n.NumberFormat;
        
        /**
         * Gets the number on which compact formatting is currently based, or null if
         * no such number is set. See setBaseFormatting() for more information.
         * @return {?number}
         */
        getBaseFormatting(): number;
        
        /**
         * Parses text string to produce a Number.
         *
         * This method attempts to parse text starting from position "opt_pos" if it
         * is given. Otherwise the parse will start from the beginning of the text.
         * When opt_pos presents, opt_pos will be updated to the character next to where
         * parsing stops after the call. If an error occurs, opt_pos won't be updated.
         *
         * @param {string} text The string to be parsed.
         * @param {Array<number>=} opt_pos Position to pass in and get back.
         * @return {number} Parsed number. This throws an error if the text cannot be
         *     parsed.
         */
        parse(text: string, opt_pos?: Array<number>): number;
        
        /**
         * Formats a Number to produce a string.
         *
         * @param {number} number The Number to be formatted.
         * @return {string} The formatted number string.
         */
        format(number: number): string;
        
        /**
         * Checks if the currency symbol comes before the value ($12) or after (12$)
         * Handy for applications that need to have separate UI fields for the currency
         * value and symbol, especially for input: Price: [USD] [123.45]
         * The currency symbol might be a combo box, or a label.
         *
         * @return {boolean} true if currency is before value.
         */
        isCurrencyCodeBeforeValue(): boolean;
    }
}

declare module goog.i18n.NumberFormat {

    /**
     * Standard number formatting patterns.
     * @enum {number}
     */
    type Format = number;
    var Format: {
        DECIMAL: Format;
        SCIENTIFIC: Format;
        PERCENT: Format;
        CURRENCY: Format;
        COMPACT_SHORT: Format;
        COMPACT_LONG: Format;
    };

    /**
     * Currency styles.
     * @enum {number}
     */
    type CurrencyStyle = number;
    var CurrencyStyle: {
        LOCAL: CurrencyStyle;
        PORTABLE: CurrencyStyle;
        GLOBAL: CurrencyStyle;
    };

    /**
     * Compacting styles.
     * @enum {number}
     */
    type CompactStyle = number;
    var CompactStyle: {
        NONE: CompactStyle;
        SHORT: CompactStyle;
        LONG: CompactStyle;
    };

    /**
     * Alias for the compact format 'unit' object.
     * @typedef {{
     *     prefix: string,
     *     suffix: string,
     *     divisorBase: number
     * }}
     */
    type CompactNumberUnit = {prefix: string; suffix: string; divisorBase: number};
}
