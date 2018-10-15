// Type definitions for match-sorter 2.2
// Project: https://github.com/kentcdodds/match-sorter#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace matchSorter {
    namespace rankings {
        const CASE_SENSITIVE_EQUAL: 9;
        const EQUAL: 8;
        const STARTS_WITH: 7;
        const WORD_STARTS_WITH: 6;
        const STRING_CASE: 5;
        const STRING_CASE_ACRONYM: 4;
        const CONTAINS: 3;
        const ACRONYM: 2;
        const MATCHES: 1;
        const NO_MATCH: 0;
    }
}

interface MinRanking {
    minRanking: number;
    key: string;
}

interface MaxRanking {
    maxRanking: number;
    key: string;
}

interface MinMaxRanking {
    minRanking: number;
    maxRanking: number;
    key: string;
}

interface Options<T> {
    keys?: Array<(string | ((item: T) => string) | MinRanking | MaxRanking | MinMaxRanking)>;
    threshold?: number;
    keepDiacritics?: boolean;
}

/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param items - the items to sort
 * @param value - the value to use for ranking
 * @param options - Some options to configure the sorter
 * @return the new sorted array
 */
declare function matchSorter<T>(items: T[], value: string, options?: Options<T>): T[];

export = matchSorter;
