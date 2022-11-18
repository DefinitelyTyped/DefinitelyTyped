declare namespace MusicKit {
    /**
     * https://developer.apple.com/documentation/applemusicapi/search
     */
    interface APIResponse<T> {
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
        data: T;
    }

    /**
     * A response object that contains no content.
     * https://developer.apple.com/documentation/applemusicapi/emptybodyresponse
     */
    interface EmptyBodyResponse {}

    /**
     * A response object indicating that an error occurred while processing the request.
     * https://developer.apple.com/documentation/applemusicapi/errorsresponse
     */
    interface ErrorsResponse {
        errors: Error[];
    }

    /**
     * A response object indicating that the request’s authorization is missing or invalid.
     * https://developer.apple.com/documentation/applemusicapi/unauthorizedresponse
     */
    type UnauthorizedResponse = Record<string, any>;

    /**
     * A response object indicating that the request wasn’t accepted due to an issue with the authentication.
     * https://developer.apple.com/documentation/applemusicapi/forbiddenresponse
     */
    interface ForbiddenResponse {
        errors: Error[];
    }

    /**
     * A response object composed of resource objects for the request.
     * https://developer.apple.com/documentation/applemusicapi/resourcecollectionresponse
     */
    interface ResourceCollectionResponse<T extends RESOURCES> {
        data: T[];
    }

    /**
     * A response object composed of paginated resource objects for the request.
     * https://developer.apple.com/documentation/applemusicapi/paginatedresourcecollectionresponse
     */
    interface PaginatedResourceCollectionResponse<T extends RESOURCES> {
        data: T[];
        next?: string;
    }

    /**
     * The response for a direct resource relationship fetch.
     * https://developer.apple.com/documentation/applemusicapi/relationshipresponse
     */
    interface RelationshipResponse<T extends RESOURCES> {
        data: T[];
        meta?: Record<string, any>;
        next?: string;
    }

    /**
     * The response for a direct resource view fetch.
     * https://developer.apple.com/documentation/applemusicapi/relationshipviewresponse
     */
    interface RelationshipViewResponse<T extends RESOURCES> {
        data: T[];
        meta?: Record<string, any>;
        next?: string;
        attributes?: Record<string, any>;
    }

    /**
     * The response to a request for search hints.
     * https://developer.apple.com/documentation/applemusicapi/searchhintsresponse
     */
    interface SearchHintsResponse {
        results: {
            terms: string[];
        };
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
    interface TopResultSuggestion<T extends CATALOG_RESOURCE_TYPE> {
        content: T;
        kind: 'topResults';
    }

    /**
     * The response to a request for search suggestions.
     * https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse
     */
    interface SearchSuggestionsResponse<T extends TermSuggestion | TopResultSuggestion<CATALOG_RESOURCE_TYPE>> {
        results: {
            suggestions: T[];
        };
    }

    /**
     * The response to a search request.
     * https://developer.apple.com/documentation/applemusicapi/searchresponse
     */
    interface SearchCatalogResponse<T extends CATALOG_RESOURCE_TYPE> {
        meta: {
            results: {
                order: Array<T['type']>;
                rawOrder: Array<T['type']>;
            };
        };
        results: {
            [P in T['type']]?: {
                data: RESOURCE_BY_TYPE_PROPERTY[P][];
                href?: `/v1/catalog/${StorefrontId}/search?limit=${number}&term=${string}&types=${T['type']}`;
                next?: `/v1/catalog/${StorefrontId}/search?offset=${number}&term=${string}&types=${T['type']}`;
            };
        } & {
            top?: {
                data: CATALOG_RESOURCE_TYPE;
            };
        };
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
        results: {
            [P in T['type']]?: {
                data: RESOURCE_BY_TYPE_PROPERTY[P][];
                href?: string;
                next?: string;
            };
        };
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
        results: {
            [P in T['type']]: Array<{
                chart: string;
                data: RESOURCE_BY_TYPE_PROPERTY[P][];
                href?: string;
                name: string;
                next?: string;
                orderId: string;
            }>;
        };
    }
}
