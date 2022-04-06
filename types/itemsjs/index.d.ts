// Type definitions for itemsjs 2.1
// Project: https://github.com/itemsapi/itemsjs
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace itemsjs;

declare namespace itemsjs {
    interface Bucket<I extends {}> {
        key: keyof I & string;
        doc_count: number;
        selected: boolean;
    }

    type Buckets<I extends {}> = Array<Bucket<I>>;

    interface SearchAggregation<I extends {}, A extends string> {
        name: A;
        title: string;
        position: number;
        buckets: Buckets<I>;
    }

    interface Pagination {
        page: number;
        per_page: number;
        total: number;
    }

    interface SearchOptions<I extends {}, S extends string, A extends string> {
        query?: string | undefined;
        page?: number | undefined;
        per_page?: number | undefined;
        /** The name of a sort defined in the configuration's sortings, or a new custom one */
        sort?: S | Sorting<I> | undefined;
        filters?: Partial<Record<A, string[]>> | undefined;
        /** A custom function to filter values */
        filter?: ((item: I) => boolean) | undefined;
        /** A custom function to filter values before `filter` and `filters` are considered */
        prefilter?: ((item: I) => boolean) | undefined;
        isExactSearch?: boolean | undefined;
        removeStopWordFilter?: boolean | undefined;
    }

    interface AggregationOptions<A extends string> {
        name: A;
        page?: number | undefined;
        per_page?: number | undefined;
        query?: string | undefined;
        conjunction?: boolean | undefined;
    }

    interface SimilarOptions<I extends {}> {
        field: keyof I & string;
        minimum?: number | undefined;
        page?: number | undefined;
        per_page?: number | undefined;
    }

    interface itemsjs<I extends {}, S extends string, A extends string> {
        /** Search items */
        search(options?: SearchOptions<I, S, A>): {
            data: {
                items: I[];
                allFilteredItems: null;
                aggregations: Record<A, SearchAggregation<I, A>>;
            };
            pagination: Pagination;
            timings: {
                facets: number;
                search: number;
                sorting: number;
                total: number;
            };
        };

        /** Get data for aggregation */
        aggregation(options: AggregationOptions<A>): {
            data: { buckets: Buckets<I> };
            pagination: Pagination;
        };

        /**
         * Find similar items.
         * Uses the `id` key on items to check for uniqueness
         */
        similar(
            id: I extends { id: infer ID } ? ID : unknown,
            options: SimilarOptions<I>,
        ): {
            data: { items: Array<I & { _id: number; intersection_length: number }> };
            pagination: Pagination;
        };

        /** Reindex with an entirely new list of items */
        reindex(data: I[]): void;
    }

    type Order = 'asc' | 'desc';

    interface Sorting<I extends {}> {
        field: keyof I | Array<keyof I>;
        order: Order | Order[];
    }

    interface Aggregation {
        title: string;
        conjunction?: boolean;
        /** @default 10 */
        size?: number | undefined;
        /** @default 'count' */
        sort?: 'term' | 'count' | undefined;
        order?: Order | undefined;
        show_facet_stats?: boolean | undefined;
    }

    /** Configuration for itemsjs */
    interface Configuration<I extends {}, S extends string, A extends string> {
        sortings?: Record<S, Sorting<I>> | undefined;
        aggregations?: Record<A, Aggregation> | undefined;
        searchableFields?: Array<keyof I> | undefined;
        /** @default false */
        isExactSearch?: boolean | undefined;
    }
}

/**
 * Main itemsjs function
 * @param items The items to index
 * @param configuration itemsjs
 * @template I The type of items being indexed
 */
declare function itemsjs<I extends {} = Record<any, unknown>, S extends string = string, A extends string = string>(
    items: I[],
    configuration?: itemsjs.Configuration<I, S, A>,
): itemsjs.itemsjs<I, S, A>;

export = itemsjs;
