// Type definitions for algoliasearch-client-js 3.35
// Project: https://github.com/algolia/algoliasearch-client-js
// Definitions by: Baptiste Coquelle <https://github.com/cbaptiste>
//                 Haroen Viaene <https://github.com/haroenv>
//                 Samuel Vaillant <https://github.com/samouss>
//                 Claas Brüggemann <https://github.com/ClaasBrueggemann>
//                 Kai Eichinger <https://github.com/keichinger>
//                 Nery Ortez <https://github.com/neryortez>
//                 Antoine Rousseau <https://github.com/antoinerousseau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
  QueryParameters,
  ClientOptions,
  MultiResponse,
  SearchForFacetValues,
  Response,
  BrowseParameters,
  BrowseResponse
} from 'algoliasearch';

declare namespace algoliasearch {
  /**
   * Interface for the algolia client object
   */
  interface Client {
    /**
     * Initialization of the index
     * https://github.com/algolia/algoliasearch-client-js#init-index---initindex
     */
    initIndex(indexName: string): Index;
    /**
     * Query on multiple index
     * https://github.com/algolia/algoliasearch-client-js#multiple-queries---multiplequeries
     */
    search<T=any>(
      queries: {
        indexName: string;
        query: string;
        params: QueryParameters;
      }[],
      cb: (err: Error, res: MultiResponse<T>) => void
    ): void;
    /**
     * Query on multiple index
     * https://github.com/algolia/algoliasearch-client-js#multiple-queries---multiplequeries
     */
    search<T=any>(
      queries: {
        indexName: string;
        query: string;
        params: QueryParameters;
      }[]
    ): Promise<MultiResponse<T>>;
    /**
     * Query for facet values of a specific facet
     */
    searchForFacetValues(
      queries: [{ indexName: string; params: SearchForFacetValues.Parameters }]
    ): Promise<SearchForFacetValues.Response[]>;
    /**
     * clear browser cache
     * https://github.com/algolia/algoliasearch-client-js#cache
     */
    clearCache(): void;
    /**
     * Add a header to be sent with all upcoming requests
     */
    setExtraHeader(name: string, value: string): void;
    /**
     * Get the value of an extra header
     */
    getExtraHeader(name: string): string;
    /**
     * remove an extra header for all upcoming requests
     */
    unsetExtraHeader(name: string): void;
    /**
     * add a header, used for flagging InstantSearch implementations
     */
    addAlgoliaAgent(agent: string): void;
  }

  /**
   * Interface for the index algolia object
   */
  interface Index {
    indexName: string;
    /**
     * Gets a specific object
     * https://algolia.com/doc/api-reference/api-methods/get-objects/#retrieve-only-one-object
     */
    getObject(objectID: string, cb: (err: Error, res: {}) => void): void;
    /**
     * Gets specific attributes from an object
     * https://algolia.com/doc/api-reference/api-methods/get-objects/#retrieve-only-one-object
     */
    getObject(
      objectID: string,
      attributes: string[],
      cb: (err: Error, res: {}) => void
    ): void;
    /**
     * Gets specific attributes from an object
     * https://algolia.com/doc/api-reference/api-methods/get-objects/#retrieve-only-one-object
     */
    getObject<T>(objectID: string, attributes?: string[]): Promise<T>;
    /**
     * Gets a list of objects
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObjects(
      objectIDs: string[],
      cb: (err: Error, res: { results: {}[] }) => void
    ): void;
    /**
     * Gets a list of objects
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObjects(objectIDs: string[]): Promise<{ results: {}[] }>;
    /**
     * Clear cache of an index
     * https://github.com/algolia/algoliasearch-client-js#cache
     */
    clearCache(): void;
    /**
     * Search in an index
     * https://github.com/algolia/algoliasearch-client-js#search-in-an-index---search
     */
    search<T=any>(
      params: QueryParameters,
      cb: (err: Error, res: Response<T>) => void
    ): void;
    /**
     * Search in an index
     * https://github.com/algolia/algoliasearch-client-js#search-in-an-index---search
     */
    search<T=any>(params: QueryParameters): Promise<Response<T>>;
    /**
     * Search in an index
     * https://www.algolia.com/doc/api-reference/api-methods/search-for-facet-values/
     */
    searchForFacetValues(
      options: SearchForFacetValues.Parameters
    ): Promise<SearchForFacetValues.Response>;
    /**
     * Search in an index
     * https://www.algolia.com/doc/api-reference/api-methods/search-for-facet-values/
     */
    searchForFacetValues(
      options: SearchForFacetValues.Parameters,
      cb: (err: Error, res: SearchForFacetValues.Response) => void
    ): void;
    /**
     * Browse an index
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browse(query: string, parameters: BrowseParameters, cb: (err: Error, res: BrowseResponse) => void): void;
    /**
     * Browse an index
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browse(query: string, cb: (err: Error, res: BrowseResponse) => void): void;
    /**
     * Browse an index
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browse(query: string, parameters?: BrowseParameters): Promise<BrowseResponse>;
    /**
     * Browse an index from a cursor
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browseFrom(
      cursor: string,
      cb: (err: Error, res: BrowseResponse) => void
    ): void;
    /**
     * Browse an index from a cursor
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browseFrom(cursor: string): Promise<BrowseResponse>;
  }
}

declare function algoliasearch(
  applicationId: string,
  apiKey: string,
  options?: ClientOptions
): algoliasearch.Client;
export = algoliasearch;
