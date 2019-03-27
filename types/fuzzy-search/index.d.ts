// Type definitions for fuzzy-search 2.1
// Project: https://github.com/wouter2203/fuzzy-search#readme
// Definitions by: Alex Deas <https://github.com/alex-deas>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare class FuzzySearch<T extends object | string> {
    haystack: T[];
    keys: string[];
    options: Required<FuzzySearch.Options>;

    static isMatch(item: string, query: string, caseSensitive: boolean): number;

    constructor(haystack: T[], keys?: string[], options?: FuzzySearch.Options);
    search(needle?: string): T[];
}

declare namespace FuzzySearch {
    interface Options {
        caseSensitive?: boolean;
        sort?: boolean;
    }
}

export = FuzzySearch;
