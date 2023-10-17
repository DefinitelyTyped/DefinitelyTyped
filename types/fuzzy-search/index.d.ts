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
        caseSensitive?: boolean | undefined;
        sort?: boolean | undefined;
    }
}

export = FuzzySearch;
