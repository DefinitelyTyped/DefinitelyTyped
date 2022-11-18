declare namespace MusicKit {
    /**
     * https://developer.apple.com/documentation/applemusicapi/search
     */
    interface APIResponse {
        request: {
            baseUrl: string;
            fetchOptions: {
                headers: HeadersInit;
            };
            path: string;
            queryParameters: QueryParameters;
            urlParameters: Record<string, any>;
            url: string;
        };
        response: Response;
    }

    type CatalogResourceAPIResponse<T> = Promise<
        APIResponse & {
            data: CatalogResourceResponse<T>;
        }
    >;

    type CatalogResourcesAPIResponse<T> = Promise<
        APIResponse & {
            data: CatalogResourcesResponse<T>;
        }
    >;

    type SearchCatalogAPIResponse<T extends SEARCH_RESOURCE_TYPE> = Promise<
        APIResponse & {
            data: SearchCatalogResponse<T>;
        }
    >;

    type SearchLibraryAPIResponse<T extends SEARCH_LIBRARY_RESOURCE_TYPE> = Promise<
        APIResponse & {
            data: SearchLibraryResponse<T>;
        }
    >;

    type SearchHintsAPIResponse = Promise<
        APIResponse & {
            data: SearchHintsResponse;
        }
    >;

    type SearchSuggestionsAPIResponse<T extends TermSuggestion | TopResultSuggestion<SEARCH_RESOURCE_TYPE>> = Promise<
        APIResponse & {
            data: SearchSuggestionsResponse<T>;
        }
    >;

    type ChartAPIResponse<T extends MUSIC_CATALOG_CHART_TYPE> = Promise<
        APIResponse & {
            data: ChartResponse<T>;
        }
    >;

    interface CatalogResourceResponse<T> {
        data: T[];
        next: never;
    }

    interface CatalogResourcesResponse<T> {
        data: T[];
        next?: string;
    }

    /**
     * An object that represents the autocomplete options for the hint.
     * https://developer.apple.com/documentation/applemusicapi/searchhintsresponse/results
     */
    interface SearchHintsResponseResults {
        terms: string[];
    }

    /**
     * The response to a request for search hints.
     * https://developer.apple.com/documentation/applemusicapi/searchhintsresponse
     */
    interface SearchHintsResponse {
        results: SearchHintsResponseResults;
    }

    /**
     * An object that represents the results of a search suggestions query.
     * https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse/results
     */
    interface SearchSuggestionsResponseResults<T> {
        suggestions: T[];
    }

    /**
     * A suggested search term from a search suggestion response.
     * https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse/results/termsuggestion
     */
    interface TermSuggestion {
        displayTerm: string;
        kind: 'terms';
        searchTerm: string;
    }

    /**
     * A suggested popular result for similar search prefix terms.
     * https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse/results/topresultsuggestion
     */
    interface TopResultSuggestion<T extends SEARCH_RESOURCE_TYPE> {
        content: T;
        kind: 'topResults';
    }

    /**
     * The response to a request for search suggestions.
     * https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse
     */
    interface SearchSuggestionsResponse<T extends TermSuggestion | TopResultSuggestion<SEARCH_RESOURCE_TYPE>> {
        results: SearchSuggestionsResponseResults<T>;
    }

    interface SearchResult<T> {
        data: T[];
        href?: string;
        next?: string;
    }

    /**
     * An object that represents the results of a catalog search query.
     * https://developer.apple.com/documentation/applemusicapi/searchresponse/results
     */
    type SearchCatalogResponseResults<T extends SEARCH_RESOURCE_TYPE> = {
        [P in T['type']]?: SearchResult<RESOURCE_BY_TYPE_PROPERTY[P]>;
    };

    /**
     * The response to a search request.
     * https://developer.apple.com/documentation/applemusicapi/searchresponse
     */
    interface SearchCatalogResponse<T extends SEARCH_RESOURCE_TYPE> {
        meta: {
            results: {
                order: Array<T['type']>;
                rawOrder: Array<T['type']>;
            };
        };
        results: SearchCatalogResponseResults<T>;
    }

    interface SearchLibraryResult<T> {
        data: T[];
        href?: string;
        next?: string;
    }

    /**
     * An object that represents the results of a library search query..
     * https://developer.apple.com/documentation/applemusicapi/librarysearchresponse/results
     */
    type SearchLibraryResponseResults<T extends SEARCH_LIBRARY_RESOURCE_TYPE> = {
        [P in T['type']]?: SearchLibraryResult<RESOURCE_BY_TYPE_PROPERTY[P]>;
    };

    /**
     * The response to a search request.
     * https://developer.apple.com/documentation/applemusicapi/searchresponse
     */
    interface SearchLibraryResponse<T extends SEARCH_LIBRARY_RESOURCE_TYPE> {
        meta: {
            results: {
                order: Array<T['type']>;
                rawOrder: Array<T['type']>;
            };
        };
        results: SearchLibraryResponseResults<T>;
    }

    interface ChartResponseResult<T> {
        chart: string;
        data: T[];
        href?: string;
        name: string;
        next?: string;
        orderId: string;
    }

    /**
     * A mapping of a requested type to an array of charts.
     * https://developer.apple.com/documentation/applemusicapi/chartresponse/results
     */
    type ChartResponseResults<SELECTED extends MUSIC_CATALOG_CHART_TYPE> = {
        [P in SELECTED['type']]: Array<ChartResponseResult<RESOURCE_BY_TYPE_PROPERTY[P]>>;
    };

    /**
     * The response to a request for a chart.
     * https://developer.apple.com/documentation/applemusicapi/chartresponse
     */
    interface ChartResponse<T extends MUSIC_CATALOG_CHART_TYPE> {
        meta: {
            results: {
                order: Array<T['type']>;
            };
        };
        results: ChartResponseResults<T>;
    }
}
