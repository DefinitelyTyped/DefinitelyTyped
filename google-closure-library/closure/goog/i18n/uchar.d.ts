declare module goog {
    function require(name: 'goog.i18n.uChar'): typeof goog.i18n.uChar;
}

declare module goog.i18n.uChar {

    /**
     * Gets the U+ notation string of a Unicode character. Ex: 'U+0041' for 'A'.
     * @param {string} ch The given character.
     * @return {string} The U+ notation of the given character.
     */
    function toHexString(ch: string): string;

    /**
     * Gets Unicode value of the given character.
     * @param {string} ch The given character, which in the case of a supplementary
     * character is actually a surrogate pair. The remainder of the string is
     * ignored.
     * @return {number} The Unicode value of the character.
     */
    function toCharCode(ch: string): number;

    /**
     * Gets a character from the given Unicode value. If the given code point is not
     * a valid Unicode code point, null is returned.
     * @param {number} code The Unicode value of the character.
     * @return {?string} The character corresponding to the given Unicode value.
     */
    function fromCharCode(code: number): string;

    /**
     * Returns the Unicode code point at the specified index.
     *
     * If the char value specified at the given index is in the leading-surrogate
     * range, and the following index is less than the length of {@code string}, and
     * the char value at the following index is in the trailing-surrogate range,
     * then the supplementary code point corresponding to this surrogate pair is
     * returned.
     *
     * If the char value specified at the given index is in the trailing-surrogate
     * range, and the preceding index is not before the start of {@code string}, and
     * the char value at the preceding index is in the leading-surrogate range, then
     * the negated supplementary code point corresponding to this surrogate pair is
     * returned.
     *
     * The negation allows the caller to differentiate between the case where the
     * given index is at the leading surrogate and the one where it is at the
     * trailing surrogate, and thus deduce where the next character starts and
     * preceding character ends.
     *
     * Otherwise, the char value at the given index is returned. Thus, a leading
     * surrogate is returned when it is not followed by a trailing surrogate, and a
     * trailing surrogate is returned when it is not preceded by a leading
     * surrogate.
     *
     * @param {!string} string The string.
     * @param {number} index The index from which the code point is to be retrieved.
     * @return {number} The code point at the given index. If the given index is
     * that of the start (i.e. lead surrogate) of a surrogate pair, returns the code
     * point encoded by the pair. If the given index is that of the end (i.e. trail
     * surrogate) of a surrogate pair, returns the negated code pointed encoded by
     * the pair.
     */
    function getCodePointAround(string: string, index: number): number;

    /**
     * Determines the length of the string needed to represent the specified
     * Unicode code point.
     * @param {number} codePoint
     * @return {number} 2 if codePoint is a supplementary character, 1 otherwise.
     */
    function charCount(codePoint: number): number;

    /**
     * Determines whether the specified Unicode code point is in the supplementary
     * Unicode characters range.
     * @param {number} codePoint
     * @return {boolean} Whether then given code point is a supplementary character.
     */
    function isSupplementaryCodePoint(codePoint: number): boolean;

    /**
     * Gets whether the given code point is a leading surrogate character.
     * @param {number} codePoint
     * @return {boolean} Whether the given code point is a leading surrogate
     * character.
     */
    function isLeadSurrogateCodePoint(codePoint: number): boolean;

    /**
     * Gets whether the given code point is a trailing surrogate character.
     * @param {number} codePoint
     * @return {boolean} Whether the given code point is a trailing surrogate
     * character.
     */
    function isTrailSurrogateCodePoint(codePoint: number): boolean;

    /**
     * Composes a supplementary Unicode code point from the given UTF-16 surrogate
     * pair. If leadSurrogate isn't a leading surrogate code point or trailSurrogate
     * isn't a trailing surrogate code point, null is returned.
     * @param {number} lead The leading surrogate code point.
     * @param {number} trail The trailing surrogate code point.
     * @return {?number} The supplementary Unicode code point obtained by decoding
     * the given UTF-16 surrogate pair.
     */
    function buildSupplementaryCodePoint(lead: number, trail: number): number;

    /**
     * Gets the name of a character, if available, returns null otherwise.
     * @param {string} ch The character.
     * @return {?string} The name of the character.
     */
    function toName(ch: string): string;

    /**
     * Sets up the character map, lazily.  Some characters are indexed by their
     * decimal value.
     * @protected
     */
    function createCharData(): void;
}
