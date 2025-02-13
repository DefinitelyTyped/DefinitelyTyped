declare namespace MusicKit {
    type QueryParameters = Record<string, string | string[]>;

    interface ResourceQueryParameters<T extends RESOURCES> {
        extend?: T['type'];
        include?: T['relationships'];
        l?: string;
    }

    interface AllResourceQueryParameters<T extends RESOURCES> {
        extend?: T['type'];
        include?: T['relationships'];
        l?: string;
        limit?: number;
        offset?: string;
    }

    interface SearchQueryParameters {
        l?: string;
        limit?: number;
        offset?: string;
        term: Term;
    }

    /**
     * The entered text for the search with ‘+’ characters between each word, to replace spaces (for example term=james+br).
     */
    type Term = string;

    type OneOf<T> = { [K in keyof T]: Pick<T, K> }[keyof T];

    type OfUnion<T extends { type: string }> = {
        [P in T['type']]: Extract<T, { type: P }>;
    };
    type Handler<T> = {
        [P in keyof T]: (variant: T[P]) => any;
    };

    type GetCatalogResourceQueryParameters<T extends CATALOG_RESOURCE_TYPE> = ResourceQueryParameters<T> & {
        views: Array<keyof Required<T>['views']>;
    };

    type GetCatalogResourcesQueryParameters<T extends CATALOG_RESOURCE_TYPE> = ResourceQueryParameters<T> & {
        ids?: string[]
    };


    /**
     * Search the catalog by using a query.
     * https://developer.apple.com/documentation/applemusicapi/search_for_catalog_resources
     */
    type SearchCatalogQueryParameters<T extends CATALOG_RESOURCE_TYPE> = SearchQueryParameters & {
        with?: 'topResults';
        types: Array<T['type']>;
    };

    /**
     * Fetch a library resource by using its identifier.
     * https://developer.apple.com/documentation/applemusicapi/get_a_library_album
     */
    type GetLibraryResourceQueryParameters<T extends LIBRARY_RESOURCE_TYPE> = ResourceQueryParameters<T> & {
        views: never;
    }

    /**
     * Fetch one or more library resources by using their identifiers.
     * https://developer.apple.com/documentation/applemusicapi/get_multiple_library_albums
     */
    type GetLibraryResourcesQueryParameters<T extends LIBRARY_RESOURCE_TYPE> = ResourceQueryParameters<T> & {
        ids: `${string}${"."}${string}`[];
    };

    /**
     * Fetch all the library albums in alphabetical order.
     * https://developer.apple.com/documentation/applemusicapi/get_all_library_albums
     */
    type GetAllLibraryResourcesQueryParameters<T extends LIBRARY_RESOURCE_TYPE> = AllResourceQueryParameters<T>;


    /**
     * Search the library by using a query.
     * https://developer.apple.com/documentation/applemusicapi/search_for_library_resources
     */
    type SearchLibraryQueryParameters<T extends LIBRARY_RESOURCE_TYPE> = SearchQueryParameters & {
        types: Array<T['type']>;
    };

    /**
     * Fetch the search term results for a hint.
     * https://developer.apple.com/documentation/applemusicapi/get_catalog_search_hints
     */
    type GetCatalogSearchHintsQueryParameters = Omit<SearchQueryParameters, 'offset'>;

    /**
     * Fetch the search suggestions for a provided term input.
     * https://developer.apple.com/documentation/applemusicapi/get_catalog_search_suggestions
     */
    type GetCatalogSearchSuggestionsQueryParameters<
        T extends TermSuggestion | TopResultSuggestion<CATALOG_RESOURCE_TYPE>,
    > = GetCatalogSearchHintsQueryParameters & {
        kinds: Array<T['kind']>;
    } & (T extends TopResultSuggestion<infer U> ? { types: Array<U['type']> } : {});

    /**
     * Fetch one or more charts from the Apple Music Catalog.
     * https://developer.apple.com/documentation/applemusicapi/get_catalog_charts
     */
    type GetCatalogChartsQueryParameters<T extends MUSIC_CATALOG_CHART_TYPE> = Omit<SearchQueryParameters, 'term'> & {
        chart?: 'most-played';
        genre?: string;
        types: Array<T['type']>;
        with?: 'cityCharts' | 'dailyGlobalTopCharts';
    };

    /**
     * Fetch a station by using its identifier.
     * https://developer.apple.com/documentation/applemusicapi/get_catalog_top_charts_genres
     */
    type GetCatalogTopChartsGenresQueryParameters = ResourceQueryParameters<Genres> & {
        limit?: number;
        offset?: string;
    };

    /**
     * Remove a user’s resource rating by using the resource’s identifier.
     * https://developer.apple.com/documentation/applemusicapi/delete_a_personal_album_rating
     */
    interface DeleteRatingQueryParameters {
        l?: string;
    }
}
