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
     *
     * @param {string} str        Valid Unicode string
     * @return {array<number>}    A list of code-points in [0..0x10FFFF]
     */
    var getCodePoints: (str) => Array<number>;
    /**
     * Return the length of the original Unicode character at given position in the
     * String by looking into the UTF-16 code unit; that is equal to 1 for any
     * non-surrogate characters in BMP ([U+0000..U+D7FF] and [U+E000, U+FFFF]); and
     * returns 2 for the hi/low surrogates ([U+D800..U+DFFF]), which are in fact
     * representing non-BMP characters ([U+10000..U+10FFFF]).
     *
     * Examples:
     * - '\u0020' => 1
     * - '\u3020' => 1
     * - '\uD835' => 2
     * - '\uD835\uDDEF' => 2
     * - '\uDDEF' => 2
     *
     * @param {string} str  Non-empty string
     * @param {number} pos  Position in the string to look for one code unit
     * @return {number}      Number 1 or 2
     */
    var getUTF16Length: (str: string, pos: number) => number;
    /**
     * @param {string} str  Non-empty string
     * @return {boolean}    True if the input includes any surrogate code units
     */
    var hasSurrogateUnit: (str: string) => boolean;
    /**
     * @param {number} codeUnit   A Unicode code-unit, in range [0, 0x10FFFF]
     * @return {boolean}          Whether code-unit is in a surrogate (hi/low) range
     */
    var isCodeUnitInSurrogateRange: (codeUnit: number) => boolean;
    /**
     * Returns whether the two characters starting at `index` form a surrogate pair.
     * For example, given the string s = "\uD83D\uDE0A", (s, 0) returns true and
     * (s, 1) returns false.
     *
     * @param {string} str
     * @param {number} index
     * @return {boolean}
     */
    var isSurrogatePair: (str: string, index: number) => Boolean;
    /**
     * Fully Unicode-enabled replacement for String#length
     *
     * @param {string} str  Valid Unicode string
     * @return {number}     The number of Unicode characters in the string
     */
    var strlen: (str: string) => number;
    /**
     * Fully Unicode-enabled replacement for String#substring()
     *
     * @param {string} str    Valid Unicode string
     * @param {number} start  Location in Unicode sequence to begin extracting
     * @param {?number} end   Location in Unicode sequence to end extracting
     *                        (default: end of the string)
     * @return {string}       Extracted sub-string
     */
    var substring: (str: string, start: number, end?: number) => string;
    /**
     * Fully Unicode-enabled replacement for String#substr()
     *
     * @param {string} str      Valid Unicode string
     * @param {number} start    Location in Unicode sequence to begin extracting
     * @param {?number} length  The number of Unicode characters to extract
     *                          (default: to the end of the string)
     * @return {string}         Extracted sub-string
     */
    var substr: (str: string, start: number, length?: number) => string;
}
export = UnicodeUtils;
