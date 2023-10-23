/**
 * Returns true if all characters in str is hiragana or whitespace.
 * If include_punctuation is true, punctuation characters will also be accepted.
 */
export function isHiragana(str: string, includePunctuation?: boolean): boolean;

/**
 * Returns true if all characters in str is katakana or whitespace.
 * If include_punctuation is true, punctuation characters will also be accepted.
 */
export function isKatakana(str: string, includePunctuation?: boolean): boolean;

/**
 * Returns true if all characters in str is kanji or whitespace.
 * If include_punctuation is true, punctuation characters will also be accepted.
 */
export function isKanji(str: string, includePunctuation?: boolean): boolean;

/**
 * Returns true if all characters in str is punctuation or whitespace.
 */
export function isPunctuation(str: string): boolean;

/**
 * Returns true if all characters in str is romaji or whitespace.
 * If include_punctuation is true, punctuation characters will also be accepted.
 */
export function isRomaji(str: string, includePunctuation?: boolean): boolean;

/**
 * Splits a hiragana or katakana string into separate characters, grouped with small characters.
 */
export function splitKanaString(str: string): string[];

/**
 * Return a string based on str where all hiragana characters are replaced with katakana.
 */
export function hiraganaToKatakana(str: string): string;

/**
 * Return a string based on str where all katakana characters are replaced with hiragana.
 */
export function katakanaToHiragana(str: string): string;

/**
 * Returns a string based on str where all hiragana and katakana are replaced with romaji.
 */
export function kanaToRomaji(str: string): string;

/**
 * Returns a string based on str with all romaji replaced with hiragana.
 */
export function romajiToHiragana(str: string): string;

/**
 * Returns a string based on str with all romaji replaced with katakana.
 */
export function romajiToKatakana(str: string): string;
