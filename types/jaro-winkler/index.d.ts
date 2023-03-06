// Type definitions for jaro-winkler 0.2
// Project: https://github.com/jordanthomas/jaro-winkler
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Takes two strings and compares them. Returns a value from 0 to 1, 0 meaning that
 * the strings are not at all similar.
 */
declare function distance(x: string, y: string): number;
export = distance;
