/**
 * Unicode algorithms for Hangul script, the Korean writing system
 *
 * Hangul script has three encoded models in Unicode:
 *
 * A) Conjoining Jamo (covers modern and historic elements)
 *    * U+1100..U+11FF ; Hangul Jamo
 *    * U+A960..U+A97F ; Hangul Jamo Extended-A
 *    * U+D7B0..U+D7FF ; Hangul Jamo Extended-B
 *
 * B) Conjoined Syllables (only covers modern Korean language)
 *    * U+AC00..U+D7AF ; Hangul Syllables
 *
 * C) Compatibility Jamo (one code-point for each "shape")
 *    * U+3130..U+318F ; Hangul Compatibility Jamo
 *
 * This modules helps you convert characters from one model to another.
 * Primary functionalities are:
 *
 * 1) Convert from any encodings to Conjoining Jamo characters (A),
 *    e.g. for prefix matching
 *
 * 2) Convert from any encodings to Syllable characters, when possible (B),
 *    e.g. to reach the normal Unicode form (NFC)
 */
declare namespace UnicodeHangulKorean {
    /**
     * Return Unicode characters as they are, except for Hangul characters, which
     * will be converted to the Conjoining Jamo form.
     */
    function toConjoiningJamo(str: string): string;
}

// eslint-disable-next-line export-just-namespace
export = UnicodeHangulKorean;
