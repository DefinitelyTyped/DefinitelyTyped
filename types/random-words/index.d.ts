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
declare function words(options: words.Options | number): string[];

declare namespace words {
    const wordList: string[];

    interface Options {
        exactly?: number | undefined;
        formatter?: WordFormatter | undefined;
        join?: string | undefined;
        max?: number | undefined;
        maxLength?: number | undefined;
        min?: number | undefined;
        separator?: string | undefined;
        wordsPerString?: number | undefined;
    }

    type WordFormatter = (word: string, relativeIndex?: number) => string;
}

export = words;
