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
     */
    function hasKana(str: string): boolean;

    /**
     * Whether the string includes any CJK Ideograph characters.
     */
    function hasIdeograph(str: string): boolean;

    /**
     * Whether the string includes any CJK Ideograph or Syllable characters.
     */
    function hasIdeoOrSyll(str: string): boolean;

    /**
     * Replace any Hiragana character with the matching Katakana
     */
    function hiraganaToKatakana(str: string): string;

    /**
     * Whether the string is exactly a sequence of Kana characters followed by one
     * Latin character.
     */
    function isKanaWithTrailingLatin(str: string): string;

    /**
     * Drops the trailing Latin character from a string that is exactly a sequence
     * of Kana characters followed by one Latin character.
     */
    function kanaRemoveTrailingLatin(str: string): string;
}

// tslint:disable-next-line export-just-namespace
export = UnicodeCJK;
