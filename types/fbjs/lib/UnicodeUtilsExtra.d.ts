/**
 * Unicode-enabled extra utility functions not always needed.
 */
declare namespace UnicodeUtilsExtra {
    /**
     * @param {number} codePoint  Valid Unicode code-point
     * @return {string}           A formatted Unicode code-point string
     *                            of the format U+XXXX, U+XXXXX, or U+XXXXXX
     */

    var formatCodePoint: (codePoint: number) => string;
    /**
     * Get a list of formatted (string) Unicode code-points from a String
     *
     * @param {string} str        Valid Unicode string
     * @return {array<string>}    A list of formatted code-point strings
     */
    var getCodePointsFormatted: (str: string) => Array<string>;
    /**
     * @param {number} codePoint  Valid Unicode code-point
     * @param {number} len        Zero-padded minimum width of result
     * @return {string}           A zero-padded hexadecimal string (00XXXX)
     */

    var zeroPaddedHex: (codePoint: number, len: number) => string;
    /**
     * Returns a double-quoted PHP string with all non-printable and
     * non-US-ASCII sequences escaped.
     *
     * @param {string} str Valid Unicode string
     * @return {string}    Double-quoted string with Unicode sequences escaped
     */

    var phpEscape: (s: string) => string;
    /**
     * Returns a double-quoted Java or JavaScript string with all
     * non-printable and non-US-ASCII sequences escaped.
     *
     * @param {string} str Valid Unicode string
     * @return {string}    Double-quoted string with Unicode sequences escaped
     */

    var jsEscape: (s: string) => string;
    /**
     * Returns a double-quoted C string with all non-printable and
     * non-US-ASCII sequences escaped.
     *
     * @param {string} str Valid Unicode string
     * @return {string}    Double-quoted string with Unicode sequences escaped
     */
    var cEscape: (s: string) => string;
    /**
     * Returns a double-quoted Objective-C string with all non-printable
     * and non-US-ASCII sequences escaped.
     *
     * @param {string} str Valid Unicode string
     * @return {string}    Double-quoted string with Unicode sequences escaped
     */
    var objcEscape: (s: string) => string;
    /**
     * Returns a double-quoted Python string with all non-printable
     * and non-US-ASCII sequences escaped.
     *
     * @param {string} str Valid Unicode string
     * @return {string}    Double-quoted string with Unicode sequences escaped
     */
    var pyEscape: (s: string) => string;
}
export = UnicodeUtilsExtra;
