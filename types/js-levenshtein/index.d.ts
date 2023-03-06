// Type definitions for js-levenshtein 1.1
// Project: https://github.com/gustf/js-levenshtein
// Definitions by: Pyry Rouvila <https://github.com/naftis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Calculates Levenshtein distance between two strings
 */
declare function levenshtein(compareFrom: string, compareTo: string): number;

export = levenshtein;
