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
        /** @default 1 */
        page?: number | undefined;
        /** @default 12 */
        per_page?: number | undefined;
        /** The name of a sort defined in the configuration's sortings, or a new custom one */
        sort?: S | Sorting<I> | undefined;
        filters?: Partial<Record<A, string[]>> | undefined;
        /** A custom function to filter values */
        filter?: ((item: I) => boolean) | undefined;
        /** @default false */
        isExactSearch?: boolean | undefined;
        /** @default false */
        removeStopWordFilter?: boolean | undefined;
        /** @default false */
        is_all_filtered_items?: boolean | undefined;
    }

    interface AggregationOptions<A extends string> {
        name: A;
        /** @default 1 */
        page?: number | undefined;
        /** @default 10 */
        per_page?: number | undefined;
        query?: string | undefined;
        conjunction?: boolean | undefined;
    }

    interface SimilarOptions<I extends {}> {
        field: keyof I & string;
        /** @default 0 */
        minimum?: number | undefined;
        /** @default 1 */
        page?: number | undefined;
        /** @default 10 */
        per_page?: number | undefined;
    }

    interface ItemsJs<I extends {}, S extends string, A extends string> {
        /** Search items */
        search(options?: SearchOptions<I, S, A>): {
            data: {
                items: I[];
                allFilteredItems: I[] | null;
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
        order?: Order | Order[] | undefined;
    }

    interface Aggregation {
        title: string;
        conjunction?: boolean | undefined;
        /** @default 10 */
        size?: number | undefined;
        /** @default 'count' */
        sort?: 'term' | 'count' | undefined;
        /** @default 'asc' */
        order?: Order | undefined;
        /** @default false */
        show_facet_stats?: boolean | undefined;
    }

    /** Configuration for itemsjs */
    interface Configuration<I extends {}, S extends string, A extends string> {
        sortings?: Record<S, Sorting<I>> | undefined;
        aggregations?: Record<A, Aggregation> | undefined;
        /** @default [] */
        searchableFields?: Array<keyof I> | undefined;
        /** @default true */
        native_search_enabled?: boolean | undefined;
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
): itemsjs.ItemsJs<I, S, A>;

export = itemsjs;
