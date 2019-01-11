// Type definitions for js-levenshtein 1.1
// Project: https://github.com/gustf/js-levenshtein
// Definitions by: Kallu609 <https://github.com/Kallu609>
//                 Pyry Rouvila <https://github.com/naftis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Calculates Levenshtein distance between two strings
 */
declare function levenshtein(compareFrom: string, compareTo: string): number;

export = levenshtein;
