declare module goog {
    function require(name: 'goog.crypt.baseN'): typeof goog.crypt.baseN;
}

declare module goog.crypt.baseN {

    /**
     * Base-2, i.e. '01'.
     * @type {string}
     */
    var BASE_BINARY: string;

    /**
     * Base-8, i.e. '01234567'.
     * @type {string}
     */
    var BASE_OCTAL: string;

    /**
     * Base-10, i.e. '0123456789'.
     * @type {string}
     */
    var BASE_DECIMAL: string;

    /**
     * Base-16 using lower case, i.e. '0123456789abcdef'.
     * @type {string}
     */
    var BASE_LOWERCASE_HEXADECIMAL: string;

    /**
     * Base-16 using upper case, i.e. '0123456789ABCDEF'.
     * @type {string}
     */
    var BASE_UPPERCASE_HEXADECIMAL: string;

    /**
     * The more-known version of the BASE-64 encoding.  Uses + and / characters.
     * @type {string}
     */
    var BASE_64: string;

    /**
     * URL-safe version of the BASE-64 encoding.
     * @type {string}
     */
    var BASE_64_URL_SAFE: string;

    /**
     * Converts a number from one numeric base to another.
     *
     * The bases are represented as strings, which list allowed digits.  Each digit
     * should be unique.  The bases can either be user defined, or any of
     * goog.crypt.baseN.BASE_xxx.
     *
     * The number is in human-readable format, most significant digit first, and is
     * a non-negative integer.  Base designators such as $, 0x, d, b or h (at end)
     * will be interpreted as digits, so avoid them.  Leading zeros will be trimmed.
     *
     * Note: for huge bases the result may be inaccurate because of overflowing
     * 64-bit doubles used by JavaScript for integer calculus.  This may happen
     * if the product of the number of digits in the input and output bases comes
     * close to 10^16, which is VERY unlikely (100M digits in each base), but
     * may be possible in the future unicode world.  (Unicode 3.2 has less than 100K
     * characters.  However, it reserves some more, close to 1M.)
     *
     * @param {string} number The number to convert.
     * @param {string} inputBase The numeric base the number is in (all digits).
     * @param {string} outputBase Requested numeric base.
     * @return {string} The converted number.
     */
    function recodeString(number: string, inputBase: string, outputBase: string): string;
}
