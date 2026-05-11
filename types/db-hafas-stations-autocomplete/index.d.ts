export = autocomplete;

/**
 * Search & autocompletion for [Deutsche Bahn](https://en.wikipedia.org/wiki/Deutsche_Bahn) stations.
 * Pulls its data from [`db-hafas-stations`](https://github.com/derhuerst/db-hafas-stations).
 *
 * @example
 * import autocomplete = require('db-hafas-stations-autocomplete')
 *
 * autocomplete('Münch', 3)
 * // =>
 * // [
 * //   {
 * //     id: '624637',
 * //     relevance: 0.878345935,
 * //     score: 4.601702707916342,
 * //     weight: 143.8
 * //   },
 * //   {
 * //     id: '620368',
 * //     relevance: 0.878345935,
 * //     score: 4.601702707916342,
 * //     weight: 143.8
 * //   },
 * //   {
 * //     id: '8000261',
 * //     relevance: 0.878345935,
 * //     score: 4.601702707916342,
 * //     weight: 143.8
 * //   }
 * // ]
 */
declare function autocomplete(
    query: string,
    /** @default 6 */
    limit?: number,
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
