/**
 * Combine any JP string input with it's corresponding -kana transcription, to groups of original-kana pairs
 * useful for kanji-only furigana readability.
 *
 * @param aOriginal  - original JP string comprised of kanji / hiragana / katakana symbols
 * @param aKana - corresponding JP string in hiragana / katakana symbols only
 * @return combinedGroups - array of string pairs of original-to-kana combinations.
 */
export function combineOriginalAndKana(aOriginal: string, aKana: string): string[][];

export {};
