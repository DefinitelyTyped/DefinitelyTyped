// Type definitions for synchronous-autocomplete 2.3
// Project: https://github.com/derhuerst/synchronous-autocomplete
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = createAutocomplete;

/**
 * Fast, simple [autocompletion](https://en.wikipedia.org/wiki/Autocomplete). Also supports
 * [Levenshtein](https://en.wikipedia.org/wiki/Levenshtein_distance)-based fuzzy search.
 * Uses precomputed indexes to be fast.
 *
 * Let's understand the terminology used by this tool:
 *
 * - *item*: A thing to search for. In our example, apple, banana and pomegranate each are an *item*.
 * - *weight*: How important an *item* is.
 * - *token*: A word from the fully normalized item name. For example, to find an item named `Hey There!`,
 *   you may process its name into the *tokens* `hey` & `there`.
 * - *fragment*: A word from the normalized search query, which may partially match a *token*. E.g. the
 *   *fragment* `ther` (from the search query `Hey Ther`) partially matches the *token* `there`.
 * - *relevance*: How well an item fits to the search query.
 * - *score*: A combination of an item's *weight* and *relevance*. Used to rank search results.
 *
 * @param tokens Must be an object with an array of internal *item* IDs per *token*.
 * @param scores Must be an object with a *token* score per *token*.
 * @param weights Must be an array with an *item* weight per internal *item* ID.
 * @param nrOfTokens Must be an array with the number of *tokens* per internal *item* ID.
 * @param originalIds Must be an array with the (real) *item* ID per internal *item* ID.
 * @param tokenizerFn Must be a function that, given a search query, returns an array of *fragments*.
 *
 * @example
 * import createAutocomplete = require('synchronous-autocomplete');
 * import normalize = require('normalize-for-search');
 *
 * const items = [ {
 *   id: 'apple',
 *   name: 'Juicy sour Apple.',
 *   weight: 3
 * }, {
 *   id: 'banana',
 *   name: 'Sweet juicy Banana!',
 *   weight: 2
 * }, {
 *   id: 'pome',
 *   name: 'Sour Pomegranate',
 *   weight: 5
 * } ];
 *
 * const tokens = { // internal item IDs, by token
 *   juicy: [0, 1],
 *   sour: [0, 3],
 *   apple: [0],
 *   sweet: [1],
 *   banana: [1],
 *   pomegranate: [3]
 * };
 * const weights = [ // item weights, by internal item ID
 *   3, // apple
 *   2, // banana
 *   5 // pome
 * ];
 * const nrOfTokens = [ // nr of tokens, by internal item ID
 *   3, // apple
 *   3, // banana
 *   2 // pome
 * ];
 * const scores = { // "uniqueness" of each token, by token
 *   juicy: 2 / 3, // 2 out of 3 items have the token "juicy"
 *   sour: 2 / 3,
 *   apple: 1 / 3,
 *   sweet: 1 / 3,
 *   banana: 1 / 3,
 *   pomegranate: 1 / 3
 * };
 * // In order to create smaller search indexes, we use numerical item IDs
 * // internally and maintain a mapping to their "real"/original IDs.
 * const originalIds = [
 *   'apple',
 *   'banana',
 *   'pome'
 * ];
 * const tokenize = (str: string) => {
 *   return normalize(str).replace(/[^\w\s]/g, '').split(/\s+/g);
 * }
 *
 * const autocomplete = createAutocomplete(tokens, scores, weights, nrOfTokens, originalIds, tokenize);
 *
 * autocomplete('bana');
 * // [ {
 * //   id: 'banana',
 * //   relevance: 0.66667,
 * //   score: 0.83995
 * // } ]
 *
 * autocomplete('sour');
 * // [ {
 * //   id: 'pomegranate',
 * //   relevance: 1.83333,
 * //   score: 3.13496
 * // }, {
 * //   id: 'apple',
 * //   relevance: 1.22222,
 * //   score: 1.76275
 * // } ]
 *
 * autocomplete('aplle', 3, true); // note the typo
 * // [ {
 * //   id: 'apple',
 * //   relevance: 0.22222,
 * //   score: 0.3205
 * // } ]
 */
declare function createAutocomplete<TId extends string>(
    tokens: createAutocomplete.Tokens,
    scores: createAutocomplete.Scores,
    weights: createAutocomplete.Weights,
    nrOfTokens: createAutocomplete.NrOfTokens,
    originalIds: createAutocomplete.OriginalIds<TId>,
    tokenizerFn: createAutocomplete.TokenizerFn,
): createAutocomplete.AutocompleteFn<TId>;

declare namespace createAutocomplete {
    interface Tokens {
        [key: string]: readonly number[];
    }

    interface Scores {
        [key: string]: number;
    }

    type Weights = readonly number[];
    type NrOfTokens = readonly number[];
    type OriginalIds<TId extends string> = readonly TId[];
    type TokenizerFn = (str: string) => readonly string[];

    interface AutocompleteFn<TId extends string> {
        (
            query: string,
            /** @default 6 */
            limit?: number,
            /** @default false */
            fuzzy?: boolean,
            /** @default true */
            completion?: boolean,
        ): Array<AutocompleteResult<TId>>;
        readonly internalId: typeof internalId;
        byFragment(fragment: string, completion?: boolean, fuzzy?: boolean): number[];
    }

    interface AutocompleteResult<TId extends string> {
        id: TId;
        relevance: number;
        score: number;
        weight: number;
        [internalId]: number;
    }
}

declare const internalId: unique symbol;
