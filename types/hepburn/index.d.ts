/**
 * Converts a string containing Kana, either Hiragana or Katakana, to Romaji.
 */
export function fromKana(str: string): string;

/**
 * Converts a string containing Romaji to Hiragana.
 */
export function toHiragana(str: string): string;

/**
 * Converts a string containing Romaji to Katakana.
 */
export function toKatakana(str: string): string;

/**
 * Cleans up a romaji string, changing old romaji forms into the more-modern Hepburn form (for further processing).
 * Generally matches the style used by Wapro romaji.
 * A larger guide to modern romaji conventions was used in building this method.
 */
export function cleanRomaji(str: string): string;

/**
 * Splits a `str` containing Katakana or Hiragana into a syllables array.
 */
export function splitKana(str: string): string[];

/**
 * Splits a `str` containing Romaji into a syllables array.
 */
export function splitRomaji(str: string): string[];

/**
 * Returns true if `str` contains Hiragana.
 */
export function containsHiragana(str: string): boolean;

/**
 * Returns true if `str` contains Katakana.
 */
export function containsKatakana(str: string): boolean;

/**
 * Returns true if `str` contains any Kana.
 */
export function containsKana(str: string): boolean;

/**
 * Returns true if `str` contains any Kanji.
 */
export function containsKanji(str: string): boolean;
