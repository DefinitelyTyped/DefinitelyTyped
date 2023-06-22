import { NrOfTokens, OriginalIds, Scores, TokenizerFn, Tokens, Weights } from './';

export = buildIndex;

/**
 * Builds an index from a list of items;
 *
 * @example
 * import buildIndex = require('synchronous-autocomplete/build');
 * import createAutocomplete = require('synchronous-autocomplete');
 *
 * const tokenize = (str: string) => str.split(/\s+/g);
 * // create index
 * const { tokens, weights, nrOfTokens, scores, originalIds } = buildIndex(
 *   tokenize,
 *   [
 *     {
 *       id: 'apple',
 *       name: 'Juicy sour Apple.',
 *       weight: 3,
 *     },
 *     {
 *       id: 'banana',
 *       name: 'Sweet juicy Banana!',
 *       weight: 2,
 *     },
 *   ],
 * );
 * // create autocomplete
 * const autocomplete = createAutocomplete(tokens, scores, weights, nrOfTokens, originalIds, tokenize);
 */
declare function buildIndex<TId extends string>(
    tokenizerFn: TokenizerFn,
    items: ReadonlyArray<buildIndex.Item<TId>>,
): buildIndex.Index<TId>;

declare namespace buildIndex {
    interface Index<TId extends string> {
        tokens: Tokens;
        scores: Scores;
        weights: Weights;
        nrOfTokens: NrOfTokens;
        originalIds: OriginalIds<TId>;
    }

    interface Item<TId extends string> {
        id: TId;
        name: string;
        weight: number;
        [key: string]: unknown;
    }
}
