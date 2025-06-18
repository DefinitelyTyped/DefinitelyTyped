export as namespace itemsjs;

declare namespace itemsjs {
    interface Bucket<K> {
        key: K;
        doc_count: number;
        selected: boolean;
    }

    type Buckets<K> = Array<Bucket<K>>;

    interface SearchAggregation<Items extends Record<string, any>, Aggregations extends keyof Items & string> {
        name: Aggregations;
        title: string;
        position: number;
        buckets: Buckets<Items[Aggregations]>;
    }

    interface Pagination {
        page: number;
        per_page: number;
        total: number;
    }

    interface SearchOptions<
        Items extends Record<string, any>,
        Sortings extends string,
        Aggregations extends keyof Items & string,
        IdField extends keyof Items & string,
    > {
        query?: string | undefined;
        /** @default 1 */
        page?: number | undefined;
        /** @default 12 */
        per_page?: number | undefined;
        /** The name of a sort defined in the configuration's sortings, or a new custom one */
        sort?: Sortings | Sorting<Items> | undefined;
        filters?: Partial<Record<Aggregations, string[]>> | undefined;
        /** A custom function to filter values */
        filter?: ((item: Items) => boolean) | undefined;
        /** @default false */
        isExactSearch?: boolean | undefined;
        /** @default false */
        removeStopWordFilter?: boolean | undefined;
        /** @default false */
        is_all_filtered_items?: boolean | undefined;

        /** Restricts results to items whose values match the ID field (`id` by default or as defined in `custom_id_field`). */
        ids?: Items[IdField][];
    }

    interface AggregationOptions<Aggregations extends string> {
        name: Aggregations;
        /** @default 1 */
        page?: number | undefined;
        /** @default 10 */
        per_page?: number | undefined;
        query?: string | undefined;
        conjunction?: boolean | undefined;
    }

    interface SimilarOptions<Items extends Record<string, any>> {
        field: keyof Items & string;
        /** @default 0 */
        minimum?: number | undefined;
        /** @default 1 */
        page?: number | undefined;
        /** @default 10 */
        per_page?: number | undefined;
    }

    interface ItemsJs<
        Items extends Record<string, any>,
        Sortings extends string,
        Aggregations extends keyof Items & string,
        IdField extends keyof Items & string,
    > {
        /** Search items */
        search(options?: SearchOptions<Items, Sortings, Aggregations, IdField>): {
            data: {
                items: Items[];
                allFilteredItems: Items[] | null;
                aggregations: Record<Aggregations, SearchAggregation<Items, Aggregations>>;
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
        aggregation(options: AggregationOptions<Aggregations>): {
            data: { buckets: Buckets<Items[Aggregations]> };
            pagination: Pagination;
        };

        /**
         * Find similar items.
         * Uses the `id` key or the one set via `custom_id_field` to check for uniqueness..
         */
        similar(
            id: Items[IdField],
            options: SimilarOptions<Items>,
        ): {
            data: { items: Array<Items & { _id: number; intersection_length: number }> };
            pagination: Pagination;
        };

        /** Reindex with an entirely new list of items */
        reindex(data: Items[]): void;
    }

    type Order = "asc" | "desc";

    interface Sorting<Items extends Record<string, any>> {
        field: keyof Items | Array<keyof Items>;
        order?: Order | Order[] | undefined;
    }

    interface Aggregation {
        title: string;
        conjunction?: boolean | undefined;
        /** @default 10 */
        size?: number | undefined;
        /** @default 'count' */
        sort?: "term" | "count" | undefined;
        /** @default 'asc' */
        order?: Order | undefined;
        /** @default false */
        show_facet_stats?: boolean | undefined;
        /** @default false */
        hide_zero_doc_count?: boolean | undefined;
        /** @default true */
        chosen_filters_on_top?: boolean | undefined;
    }

    /** Configuration for itemsjs */
    interface Configuration<
        Items extends Record<string, any>,
        Sortings extends string,
        Aggregations extends keyof Items & string,
        IdField extends string = "id",
    > {
        sortings?: Record<Sortings, Sorting<Items>> | undefined;
        aggregations?: Record<Aggregations, Aggregation> | undefined;
        /** @default [] */
        searchableFields?: Array<keyof Items> | undefined;
        /** @default true */
        native_search_enabled?: boolean | undefined;
        /** @default 'id' — defines which field represents the unique ID */
        custom_id_field?: IdField;
    }
}

/**
 * Main itemsjs function
 * @param items The items to index
 * @param configuration Configuration options including sortings, aggregations, and optionally a custom ID field.
 * @template Items The type of items being indexed
 * @template Sortings The keys of sortings defined in the configuration.
 * @template Aggregations The keys of aggregations defined in the configuration.
 * @template IdField The field used as the unique identifier for items (defaults to "id").
 */
declare function itemsjs<
    Items extends Record<string, any> = Record<string, unknown>,
    Sortings extends string = string,
    Aggregations extends keyof Items & string = keyof Items & string,
    IdField extends keyof Items & string = "id",
>(
    items: Items[],
    configuration?: itemsjs.Configuration<Items, Sortings, Aggregations, IdField>,
): itemsjs.ItemsJs<Items, Sortings, Aggregations, IdField>;

export = itemsjs;
