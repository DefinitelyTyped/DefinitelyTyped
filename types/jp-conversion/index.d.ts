// Type definitions for jp-conversion 0.0
// Project: https://github.com/Pomax/node-jp-conversion
// Definitions by: Nicolas Newman <https://github.com/NicolasNewman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function convert(
    input: string,
): false | { kanji: false | string; hiragana: false | string; katakana: false | string; romaji: false | string };
export function romanise(kana: string): string;
