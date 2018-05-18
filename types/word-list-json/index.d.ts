// Type definitions for word-list-json 0.2
// Project: https://github.com/sindresorhus/word-list
// Definitions by: Dovid Meiseles <https://github.com/dovidm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface Lengths {
    [key: string]: number;
}

export const lengths: Lengths;

type wordsArray = string[];
interface Words extends wordsArray {
    lengths: Lengths;
}

declare const words: Words;

export default words;
