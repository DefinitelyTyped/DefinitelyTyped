// Type definitions for fuzzysearch 1.0
// Project: https://github.com/bevacqua/fuzzysearch
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Fuzzy searching allows for flexibly matching a string with partial input, useful for filtering data very quickly based on lightweight user input.
 */
declare function fuzzysearch(needle: string, haystack: string): boolean;

export = fuzzysearch;
