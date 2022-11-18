declare namespace MusicKit {
    type QueryParameters = Record<string, string | string[]>;

    interface ResourceQueryParameters<T extends RESOURCE[keyof RESOURCE]> {
        extend?: T['type'];
        include?: keyof T['relationships'];
        l?: string;
    }
    type ResourcesQueryParameters<T extends SEARCH_RESOURCE_TYPE | SEARCH_LIBRARY_RESOURCE_TYPE> =
        ResourceQueryParameters<T> & { ids: string[] };

    type ResourcesWithRelationQueryParameters<T extends SEARCH_RESOURCE_TYPE | SEARCH_LIBRARY_RESOURCE_TYPE> =
        ResourceQueryParameters<T> & { limit?: number };

    interface SearchQueryParameters {
        l?: string;
        limit?: number;
        offset?: string;
        term: Term;
    }

    /**
     * A protocol for music items that your app can fetch by using a catalog charts request.
     * https://developer.apple.com/documentation/musickit/musiccatalogchartrequestable
     */
    type MUSIC_CATALOG_CHART_TYPE = RESOURCE['Album' | 'MusicVideo' | 'Playlist' | 'Song'];

    /**
     * An object that represents the results of a catalog search query.
     * https://developer.apple.com/documentation/applemusicapi/searchresponse/results
     */
    type SEARCH_RESOURCE_TYPE =
        | Activities
        | Albums
        | AppleCurators
        | Artists
        | Curators
        | MusicVideos
        | Playlists
        | RecordLabels
        | Songs
        | Stations;

    type SEARCH_LIBRARY_RESOURCE_TYPE =
        | LibraryAlbums
        | LibraryArtists
        | LibraryMusicVideos
        | LibraryPlaylists
        | LibrarySongs;

    /**
     * The entered text for the search with ‘+’ characters between each word, to replace spaces (for example term=james+br).
     */
    type Term = string;

    interface GetCatalogResourceQueryParameters<T extends SEARCH_RESOURCE_TYPE> extends ResourceQueryParameters<T> {
        views?: T extends RESOURCE[keyof RESOURCE] ? Array<keyof T['views']> : never;
    }

    type GetCatalogResourcesQueryParameters<T extends SEARCH_RESOURCE_TYPE> = ResourcesQueryParameters<T>;

    /**
     * Search the catalog by using a query.
     * https://developer.apple.com/documentation/applemusicapi/search_for_catalog_resources
     */
    type SearchCatalogQueryParameters<T extends SEARCH_RESOURCE_TYPE> = SearchQueryParameters & {
        with?: 'topResults';
        types: Array<T['type']>;
    };

    /**
     * Fetch a library resource by using its identifier.
     * https://developer.apple.com/documentation/applemusicapi/get_a_library_album
     */
    type GetLibraryResourceQueryParameters<T extends SEARCH_LIBRARY_RESOURCE_TYPE> = ResourcesQueryParameters<T>;

    /**
     * Fetch one or more library resources by using their identifiers.
     * https://developer.apple.com/documentation/applemusicapi/get_multiple_library_albums
     */
    type GetLibraryResourcesQueryParameters<T extends SEARCH_LIBRARY_RESOURCE_TYPE> = ResourcesQueryParameters<T>;

    /**
     * Search the library by using a query.
     * https://developer.apple.com/documentation/applemusicapi/search_for_library_resources
     */
    type SearchLibraryQueryParameters<T extends SEARCH_LIBRARY_RESOURCE_TYPE> = SearchQueryParameters & {
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
        T extends TermSuggestion | TopResultSuggestion<SEARCH_RESOURCE_TYPE>,
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
