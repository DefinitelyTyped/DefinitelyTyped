export function convert(
    input: string,
): false | { kanji: false | string; hiragana: false | string; katakana: false | string; romaji: false | string };
export function romanise(kana: string): string;
