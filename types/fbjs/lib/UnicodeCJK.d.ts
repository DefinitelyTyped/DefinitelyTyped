/**
 * Unicode algorithms for CJK (Chinese, Japanese, Korean) writing systems.
 *
 * Utilities for Hanzi/Kanji/Hanja logographs and Kanas (Katakana and Hiragana)
 * syllables.
 *
 * For Korean Hangul see module `UnicodeHangulKorean`.
 */
declare namespace UnicodeCJK {
    /**
     * Whether the string includes any Katakana or Hiragana characters.
     *
     * @param {string} str
     * @return {boolean}
     */
    var hasKana: (str) => boolean;

    /**
     * Whether the string includes any CJK Ideograph characters.
     *
     * @param {string} str
     * @return {boolean}
     */
    var hasIdeograph: (str) => boolean;

    /**
     * Whether the string includes any CJK Ideograph or Syllable characters.
     *
     * @param {string} str
     * @return {boolean}
     */
    var hasIdeoOrSyll: (str) => boolean;

    /**
     * Replace any Hiragana character with the matching Katakana
     *
     * @param {string} str
     * @output {string}
     */
    var hiraganaToKatakana: (str) => string;

    /**
     * Whether the string is exactly a sequence of Kana characters followed by one
     * Latin character.
     *
     * @param {string} str
     * @output {string}
     */
    var isKanaWithTrailingLatin: (str) => string;

    /**
     * Drops the trailing Latin character from a string that is exactly a sequence
     * of Kana characters followed by one Latin character.
     *
     * @param {string} str
     * @output {string}
     */
    var kanaRemoveTrailingLatin: (str: string) => string;
}
export = UnicodeCJK;
