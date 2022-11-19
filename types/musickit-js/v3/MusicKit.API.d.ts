declare namespace MusicKit {
    /**
     * An object that represents artwork for a music item.
     * https://developer.apple.com/documentation/musickit/artwork
     */
    interface Artwork {
        bgColor: string;
        height: number;
        width: number;
        textColor1: string;
        textColor2: string;
        textColor3: string;
        textColor4: string;
        url: string;
    }

    /**
     * An object that represents a description attribute.
     * https://developer.apple.com/documentation/applemusicapi/descriptionattribute/
     */
    interface DescriptionAttribute {
        short: string;
        standard: string;
    }

    /**
     * An object that represents editorial notes.
     * https://developer.apple.com/documentation/musickit/editorialnotes
     */
    interface EditorialNotes {
        hashValue: number;
        name?: string;
        short?: string;
        standard?: string;
        tagline?: string;
    }

    /**
     * Information about an error that occurred while processing a request.
     * https://developer.apple.com/documentation/applemusicapi/error
     */
    interface Error {
        code: string;
        detail: string;
        id: string;
        source: {
            parameter: string;
            pointer: string;
        };
        status: string;
        title: string;
    }

    /**
     * An object that represents play parameters for resources.
     * https://developer.apple.com/documentation/applemusicapi/playparameters
     */
    interface PlayParameters {
        id: string;
        kind: string;
    }

    /**
     * An object that represents a preview for resources.
     * https://developer.apple.com/documentation/applemusicapi/preview
     */
    interface Preview {
        artwork: Artwork;
        url: string;
        hlsUrl: string;
    }

    /**
     * A to-one or to-many relationship from one resource object to others.
     * https://developer.apple.com/documentation/applemusicapi/relationship
     */
    interface Relationship<T> {
        href?: string;
        next?: string;
        data: T[];
        meta?: Record<string, any>;
    }

    /**
     * A to-one or to-many relationship view from one resource object to others representing interesting associations.
     * https://developer.apple.com/documentation/applemusicapi/view
     */
    interface View<T> {
        href?: string;
        next?: string;
        attributes?: {
            title: string;
        };
        data: T[];
        meta?: Record<string, any>;
    }

    interface CatalogResourceAPI<T extends CATALOG_RESOURCE_TYPE> {
        queryParameters: GetCatalogResourceQueryParameters<T>;
        response: CatalogResourceAPIResponse<T>;
    }

    interface CatalogResourcesAPI<T extends CATALOG_RESOURCE_TYPE> {
        queryParameters: GetCatalogResourcesQueryParameters<T>;
        response: CatalogResourcesAPIResponse<T>;
    }

    interface SearchCatalogAPI<T extends CATALOG_RESOURCE_TYPE> {
        queryParameters: SearchCatalogQueryParameters<T>;
        response: SearchCatalogAPIResponse<T>;
    }

    interface ChartAPI<T extends MUSIC_CATALOG_CHART_TYPE> {
        queryParameters: GetCatalogChartsQueryParameters<T>;
        response: ChartAPIResponse<T>;
    }

    interface LibraryResourceAPI<T extends LIBRARY_RESOURCE_TYPE> {
        queryParameters: GetLibraryResourceQueryParameters<T>;
        response: LibraryResourceAPIResponse<T>;
    }

    interface LibraryResourcesAPI<T extends LIBRARY_RESOURCE_TYPE> {
        queryParameters: GetLibraryResourcesQueryParameters<T>;
        response: LibraryResourcesAPIResponse<T>;
    }

    interface SearchLibraryAPI<T extends LIBRARY_RESOURCE_TYPE> {
        queryParameters: SearchLibraryQueryParameters<T>;
        response: SearchLibraryAPIResponse<T>;
    }

    interface SearchSuggestionsAPI<T extends TermSuggestion | TopResultSuggestion<CATALOG_RESOURCE_TYPE>> {
        queryParameters: GetCatalogSearchSuggestionsQueryParameters<T>;
        response: SearchSuggestionsAPIResponse<T>;
    }

    interface SearchHintsAPI {
        queryParameters: GetCatalogSearchHintsQueryParameters;
        response: SearchHintsAPIResponse;
    }

    /**
     * This class represents the Apple Music API.
     * https://js-cdn.music.apple.com/musickit/v3/docs/?path=/story/reference-javascript-api--page
     */
    interface MediaAPIV3 {
        /**
         * The storefront used for making calls to the API.
         */
        storefrontId: string;
        /**
         * An instance of MusicKitAPI is made available on configured instances of MusicKit as the property api.
         * The primary use of the API class is to facilitate making requests to the Apple Music API, which is done via the ‘passthrough API’ method api.music(...).
         * https://js-cdn.music.apple.com/musickit/v3/docs/?path=/story/reference-javascript-api--page
         * @param path The path to the Apple Music API endpoint, without a hostname, and including a leading slash /
         * @param queryParameters An object with query parameters which will be appended to the request URL.
         * @param options An object with additional options to control how requests are made
         */
        music<T>(
            path: string,
            queryParameters?: T extends LibraryResourceAPI<infer U>
                ? LibraryResourceAPI<U>['queryParameters']
                : T extends CatalogResourcesAPI<infer U>
                ? CatalogResourcesAPI<U>['queryParameters']
                : T extends LibraryResourcesAPI<infer U>
                ? LibraryResourcesAPI<U>['queryParameters']
                : T extends CatalogResourceAPI<infer U>
                ? CatalogResourceAPI<U>['queryParameters']
                : T extends SearchCatalogAPI<infer U>
                ? SearchCatalogAPI<U>['queryParameters']
                : T extends ChartAPI<infer U>
                ? ChartAPI<U>['queryParameters']
                : T extends SearchLibraryAPI<infer U>
                ? SearchLibraryAPI<U>['queryParameters']
                : T extends SearchSuggestionsAPI<infer U>
                ? SearchSuggestionsAPI<U>['queryParameters']
                : T extends SearchHintsAPI
                ? SearchHintsAPI['queryParameters']
                : QueryParameters,

            options?: { fetchOptions: { method: 'GET' | 'POST' | 'DELETE' | 'PUT' } },
        ): unknown extends T
            ? Promise<APIResponse & { data: unknown }>
            : T extends CatalogResourceAPI<infer U>
            ? CatalogResourceAPI<U>['response']
            : T extends CatalogResourcesAPI<infer U>
            ? CatalogResourcesAPI<U>['response']
            : T extends LibraryResourceAPI<infer U>
            ? LibraryResourceAPI<U>['response']
            : T extends LibraryResourcesAPI<infer U>
            ? LibraryResourcesAPI<U>['response']
            : T extends SearchCatalogAPI<infer U>
            ? SearchCatalogAPI<U>['response']
            : T extends ChartAPI<infer U>
            ? ChartAPI<U>['response']
            : T extends SearchLibraryAPI<infer U>
            ? SearchLibraryAPI<U>['response']
            : T extends SearchSuggestionsAPI<infer U>
            ? SearchSuggestionsAPI<U>['response']
            : T extends SearchHintsAPI
            ? SearchHintsAPI['response']
            : never;
    }
}
