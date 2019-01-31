// Type definitions for match-sorter 2.3
// Project: https://github.com/kentcdodds/match-sorter#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
//                 Christian Ruigrok <https://github.com/chrisru>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

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

type ExtendedKeyOptions<T> = { key: string | ((item: T) => string) } & (
    | { minRanking: number }
    | { maxRanking: number }
    | { threshold: number });

interface Options<T> {
    keys?: Array<string | ((item: T) => string) | ExtendedKeyOptions<T>>;
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
declare function matchSorter<T>(
    items: ReadonlyArray<T>,
    value: string,
    options?: Options<T>
): T[];

export = matchSorter;
