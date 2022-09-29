// Type definitions for db-stations-autocomplete 3.0
// Project: https://github.com/derhuerst/db-stations-autocomplete
// Definitions by: Freerk-Ole Zakfeld <https://github.com/fzakfeld>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = autocomplete;

/**
 * Provides a stations search for [Deutsche Bahn](https://en.wikipedia.org/wiki/Deutsche_Bahn).
 * Pulls its data from [`db-stations`](https://github.com/derhuerst/db-stations).
 *
 * @example
 * import autocomplete = require('db-stations-autocomplete')
 *
 * autocomplete('Münch', 3)
 * // =>
 * // [ {
 * //     id: '8000261', // München Hbf
 * //     relevance: 0.8794466403162056,
 * //     score: 11.763480191996974,
 * //     weight: 2393.2
 * // }, {
 * //     id: '8004128', // München Donnersbergerbrücke
 * //     relevance: 0.8794466403162056,
 * //     score: 9.235186720706798,
 * //     weight: 1158
 * // }, {
 * //     id: '8004132', // München Karlsplatz
 * //     relevance: 0.8794466403162056,
 * //     score: 9.144716179768407,
 * //     weight: 1124.3
 * // } ]
 */
declare function autocomplete(
    query: string,
    /** @default 3 */
    results?: number,
    /**
     * If you set `fuzzy` to `true`, words with a
     * [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) `<= 3` will be taken into account.
     * This is a lot slower though.
     *
     * @default false
     */
    fuzzy?: boolean,
    /**
     * Setting `completion` to `false` speeds things up.
     *
     * @default true
     */
    completion?: boolean,
): autocomplete.Result[];

declare namespace autocomplete {
    interface Result {
        id: string;
        relevance: number;
        score: number;
        weight: number;
    }
}
