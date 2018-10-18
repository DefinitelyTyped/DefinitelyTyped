// Type definitions for snowball-stemmers 0.6
// Project: https://github.com/mazko/jssnowball#readme
// Definitions by: Ryan Volum <http://github.com/ryanvolum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'snowball-stemmers' {
    export interface Stemmer {
        stem(term: string): string;
    }

    export function newStemmer(locale: string): Stemmer;

    export function algorithms(): string[];
}
