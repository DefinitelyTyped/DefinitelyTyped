// Type definitions for random-words 1.1
// Project: https://github.com/punkave/random-words#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * generates random words for use as sample text.
 * We use it to generate random blog posts when testing Apostrophe.
 */
declare function words(
    options?: words.Options & {
        join: string;
    },
): string;
declare function words(options: words.Options | number): string | string[];

declare namespace words {
    let wordList: string[];

    interface Options {
        exactly?: number;
        formatter?: WordFormatter;
        join?: string;
        max?: number;
        maxLength?: number;
        min?: number;
        separator?: string;
        wordsPerString?: number;
    }

    type WordFormatter = (word: string, relativeIndex?: number) => string;
}

export = words;
