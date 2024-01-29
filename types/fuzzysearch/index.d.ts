/**
 * Fuzzy searching allows for flexibly matching a string with partial input, useful for filtering data very quickly based on lightweight user input.
 */
declare function fuzzysearch(needle: string, haystack: string): boolean;

export = fuzzysearch;
