declare namespace MusicKit {
    /**
     * The response to a request for search suggestions.
     * https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse
     */
    interface SearchResourcesResopnese<T extends CATALOG_RESOURCE_TYPE> {
        meta: {
            results: {
                order: Array<T['type']>;
                rawOrder: Array<T['type']>;
            };
        };
        results: SearchCatalogResponseResults<T>;
    }

    /**
     * The response to a search request.
     * https://developer.apple.com/documentation/applemusicapi/searchresponse
     */
    interface SearchLibraryResponse<T extends LIBRARY_RESOURCE_TYPE> {
        meta: {
            results: {
                order: Array<T['type']>;
                rawOrder: Array<T['type']>;
            };
        };
        results: SearchLibraryResponseResults<T>;
    }

    /**
     * The response to a request for search suggestions.
     * https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse
     */
    interface SearchTermsSuggestionsResopnese {
        results: {
            suggestions: SearchSuggestionsResponseResultsTermSuggestion[];
        }
    }

    interface SearchTopResultsSuggestionsResopnese {
        results: {
            suggestions: SearchSuggestionsResponseResultsTopResultSuggestion[];
        }
    }

    interface SearchAllSuggestionsResopnese {
        results: {
            suggestions: Array<SearchSuggestionsResponseResultsTermSuggestion | SearchSuggestionsResponseResultsTopResultSuggestion>;
        }
    }

    type SearchSuggestionsResponseResultsTermSuggestion = {
        displayTerm: string;
        kind: "terms";
        searchTerm: string;
    }

    type SearchSuggestionsResponseResultsTopResultSuggestion = {
        content: CATALOG_SEARCH_RESOURCE_TYPE;
        kind: "topResults";
    }

    /**
 * The response to a request for search suggestions.
 * https://developer.apple.com/documentation/applemusicapi/searchhintsresponse
 */
    interface SearchHintsResopnese {
        results: {
            term: string[];
        }
    }

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

    /**
     * The response for a direct resource relationship fetch.
     * https://developer.apple.com/documentation/applemusicapi/relationshipresponse
     */
    interface RelationshipResponse<T extends RESOURCES> {
        meta: {
            results: {
                order: Array<T['type']>;
            };
        };
        data: T[];
        next?: string;
    }

    interface RecentlyAddedResourcesResponse {
        data: Array<LibraryAlbums|LibraryPlaylists>;
        next?: getPath<GetRecentlyAddedResourcesAPIParameters>;
    }

    interface RecentlyPlayedResourcesResponse {
        data: Array<Albums|Playlists|Stations>;
        next?: getPath<GetRecentlyPlayedResourcesAPIParameters>;
    }

    interface PersonalDefaultRecommendationsResponse{
        data: Array<PersonalRecommendations>;
    }

    interface PersonalHeavyRotationContentResponse {
        data: Array<LibraryAlbums|LibrarySongs|LibraryPlaylists>;
    }
}

declare namespace MusicKit {

    interface SearchResult<T> {
        data: T[];
        href?: string;
        next?: string;
    }

    /**
     * An object that represents the results of a catalog search query.
     * https://developer.apple.com/documentation/applemusicapi/searchresponse/results
     */
    type SearchCatalogResponseResults<T extends CATALOG_RESOURCE_TYPE> = {
        [P in T['type']]?: SearchResult<RESOURCE_BY_TYPE_PROPERTY[P]>;
    };

        type a = SearchCatalogResponseResults<Albums>;


    interface SearchLibraryResult<T> {
        data: T[];
        href?: string;
        next?: string;
    }

    /**
     * An object that represents the results of a library search query..
     * https://developer.apple.com/documentation/applemusicapi/librarysearchresponse/results
     */
    type SearchLibraryResponseResults<T extends LIBRARY_RESOURCE_TYPE> = {
        [P in T['type']]?: SearchLibraryResult<RESOURCE_BY_TYPE_PROPERTY[P]>;
    };

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

}
