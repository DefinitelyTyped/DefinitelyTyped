/**
 * Unicode-enabled extra utility functions not always needed.
 */
declare namespace UnicodeUtilsExtra {
    function formatCodePoint(codePoint: number): string;
    /**
     * Get a list of formatted (string) Unicode code-points from a String
     */
    function getCodePointsFormatted(str: string): string[];

    function zeroPaddedHex(codePoint: number, len: number): string;
    /**
     * Returns a double-quoted PHP string with all non-printable and
     * non-US-ASCII sequences escaped.
     */

    function phpEscape(s: string): string;
    /**
     * Returns a double-quoted Java or JavaScript string with all
     * non-printable and non-US-ASCII sequences escaped.
     */

    function jsEscape(s: string): string;
    /**
     * Returns a double-quoted C string with all non-printable and
     * non-US-ASCII sequences escaped.
     */
    function cEscape(s: string): string;
    /**
     * Returns a double-quoted Objective-C string with all non-printable
     * and non-US-ASCII sequences escaped.
     */
    function objcEscape(s: string): string;
    /**
     * Returns a double-quoted Python string with all non-printable
     * and non-US-ASCII sequences escaped.
     */
    function pyEscape(s: string): string;
}

// tslint:disable-next-line export-just-namespace
export = UnicodeUtilsExtra;
