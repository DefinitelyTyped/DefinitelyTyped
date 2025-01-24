/**
 * Lucene Query String Builder
 */

export interface LuceneQueryStringBuilder {
    /**
     * Wraps a query with parentheses.
     * @param query - The query to group.
     */
    group(query: string): string;

    /**
     * Defines a custom query builder.
     * @param buildFn - A function that builds the query.
     */
    builder(buildFn: (data: any) => string): (data: any) => string;

    /**
     * Escapes and formats words as Lucene terms.
     * @param words - The words to format.
     */
    terms(words: string): string;

    /**
     * Escapes and formats words as Lucene terms.
     * @param words - The words to format.
     */
    term(words: string): string;

    /**
     * Boosts a term with a given weight.
     * @param term - The term to boost.
     * @param boost - The boost factor.
     */
    boost(term: string, boost: number): string;

    /**
     * Constructs a field query.
     * @param field - The field name.
     * @param query - The query value.
     */
    field(field: string, query: string): string;

    /**
     * Constructs a fuzzy search query.
     * @param term - The term for the fuzzy search.
     * @param similarity - A similarity factor between 0 and 1.
     */
    fuzzy(term: string, similarity?: number): string;

    /**
     * Constructs a proximity search query.
     * @param first - The first word.
     * @param second - The second word.
     * @param distance - The proximity distance.
     */
    proximity(first: string, second: string, distance: number): string;

    /**
     * Constructs a range query.
     * @param from - The lower bound.
     * @param to - The upper bound.
     * @param includeLeft - Whether the range includes the lower bound.
     * @param includeRight - Whether the range includes the upper bound.
     */
    range(from: string, to: string, includeLeft?: boolean, includeRight?: boolean): string;

    /**
     * Adds a required condition to a term.
     * @param term - The term to require.
     */
    required(term: string): string;

    /**
     * Combines queries with the OR operator.
     * @param left - The queries to combine from left.
     * @param right - The queries to combine from right.
     */
    or(left: string, right: string): string;

    /**
     * Combines queries with the AND operator.
     * @param left - The queries to combine from left.
     * @param right - The queries to combine from right.
     */
    and(left: string, right: string): string;

    /**
     * Combines queries with the NOT operator.
     * @param term - The queries to invert.
     */
    not(term: string): string;
}

export const lucene: LuceneQueryStringBuilder;
