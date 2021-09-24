/**
 * Unicode-enabled replacesments for basic String functions.
 *
 * All the functions in this module assume that the input string is a valid
 * UTF-16 encoding of a Unicode sequence. If it's not the case, the behavior
 * will be undefined.
 *
 * WARNING: Since this module is typechecks-enforced, you may find new bugs
 * when replacing normal String functions with ones provided here.
 */
declare namespace UnicodeUtils {
    /**
     * Get a list of Unicode code-points from a String
     */
    function getCodePoints(str: string): number[];
    /**
     * Return the length of the original Unicode character at given position in the
     * String by looking into the UTF-16 code unit; that is equal to 1 for any
     * non-surrogate characters in BMP ([U+0000..U+D7FF] and [U+E000, U+FFFF]); and
     * returns 2 for the hi/low surrogates ([U+D800..U+DFFF]), which are in fact
     * representing non-BMP characters ([U+10000..U+10FFFF]).
     *
     * Examples:
     * - '\u0020': 1
     * - '\u3020': 1
     * - '\uD835': 2
     * - '\uD835\uDDEF': 2
     * - '\uDDEF': 2
     */
    function getUTF16Length(str: string, pos: number): number;

    function hasSurrogateUnit(str: string): boolean;

    function isCodeUnitInSurrogateRange(codeUnit: number): boolean;
    /**
     * Returns whether the two characters starting at `index` form a surrogate pair.
     * For example, given the string s = "\uD83D\uDE0A", (s, 0) returns true and
     * (s, 1) returns false.
     */
    function isSurrogatePair(str: string, index: number): boolean;
    /**
     * Fully Unicode-enabled replacement for String#length
     */
    function strlen(str: string): number;
    /**
     * Fully Unicode-enabled replacement for String#substring()
     */
    function substring(str: string, start?: number, end?: number): string;
    /**
     * Fully Unicode-enabled replacement for String#substr()
     */
    function substr(str: string, start?: number, length?: number): string;
}

// tslint:disable-next-line export-just-namespace
export = UnicodeUtils;
