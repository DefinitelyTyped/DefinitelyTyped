/**
 * Creates a trie containing the given items.
 * @param items Array of items. Every item must be an object.
 * @param textKey Key that every item in items must have. item will be inserted to the trie based on item[textKey].
 * @param options Additional options
 */
declare function createTrie<T extends object>(
    items: T[],
    textKey: keyof T,
    options?: TrieOptions<T>,
): Trie<T>;

interface Trie<T> {
    /**
     * Returns items that match the given query.
     * @param query Non-blank query string. If query is blank, [] is returned..
     * @param options Additional query options.
     */
    getMatches(query: string, options?: MatchOptions): T[];
}

interface TrieOptions<T> {
    /**
     * Items comparator, similar to Array#sort's compareFunction.
     * It gets two items, and should return a number.
     *
     * Note: Matches in the first word (let's call it "group 1") are prioritized over matches in the second word ("group 2"),
     * which are prioritized over matches in the third word ("group 3"), and so on.
     * comparator will only sort the matches within each group.
     *
     * When comparator is not specified, items within each group will preserve their order in items.
     */
    comparator?: (a: T, b: T) => number;
    /**
     * Used to split items' textKey into words.
     * @default /\s+/
     */
    splitRegex?: RegExp;
}

interface MatchOptions {
    /**
     * Integer >= 1
     * For example: getMatches('me', { limit: 3 }) will return no more than 3 items that match 'me'.
     * @default Infinity
     */
    limit?: number;
    /**
     * Used to split the query into words.
     * @default /\s+/
     */
    splitRegex?: RegExp;
}

export = createTrie;
