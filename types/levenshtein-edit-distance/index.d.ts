// Type definitions for levenshtein-edit-distance 2.0
// Project: https://words.github.io/levenshtein-edit-distance/
// Definitions by: Ryan Blackman <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function levenshtein(value: string, other: string, insensitive?: boolean): number;

export = levenshtein;
