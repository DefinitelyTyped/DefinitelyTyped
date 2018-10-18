// Type definitions for snowball-stemmers 0.6
// Project: https://github.com/mazko/jssnowball#readme
// Definitions by: Ryan Volum <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Stemmer {
    stem(term: string): string;
}

export function newStemmer(locale: string): Stemmer;




