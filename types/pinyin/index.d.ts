// Type definitions for pinyin 2.8.3
// Project: https://github.com/hotoo/pinyin
// Definitions by: AnJun Wang <https://github.com/wanganjun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pinyin;

declare function pinyin(words: string, options?: Options): Array<Array<string>>;

declare namespace pinyin {
    export function compare(a: string, b: string): -1 | 0 | 1;
    export const STYLE_NORMAL: number;
    export const STYLE_TONE: number;
    export const STYLE_TONE2: number;
    export const STYLE_TO3NE: number;
    export const STYLE_INITIALS: number;
    export const STYLE_FIRST_LETTER: number;
}

interface Options {
    style?: number;
    segment?: boolean;
    heteronym?: boolean;
}
