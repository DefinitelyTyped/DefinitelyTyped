// Type definitions for snowball-stemmers 0.6
// Project: https://github.com/mazko/jssnowball#readme
// Definitions by: Ryan Volum <https://github.com/ryanvolum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Stemmer {
    stem(term: string): string;
}

export function newStemmer(locale: string): Stemmer;

export function algorithms(): string[];
