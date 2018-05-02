// Type definitions for algoliasearch-client-js 3.27.0
// Project: https://github.com/algolia/algoliasearch-client-js
// Definitions by: Baptiste Coquelle <https://github.com/cbaptiste>
//                 Haroen Viaene <https://github.com/haroenv>
//                 Aurélien Hervé <https://github.com/aherve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import {
  QueryParameters,
  IndexSettings,
  Response,
  MultiResponse,
  SearchForFacetValues,
  Log,
  Task,
} from './common';

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
    search(
      queries: {
        indexName: string;
        query: string;
        params: QueryParameters;
      }[],
      cb: (err: Error, res: MultiResponse) => void
    ): void;
    /**
     * Query on multiple index
     * https://github.com/algolia/algoliasearch-client-js#multiple-queries---multiplequeries
     */
    search(
      queries: {
        indexName: string;
        query: string;
        params: QueryParameters;
      }[]
    ): Promise<MultiResponse>;
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
     * kill alive connections
     * https://github.com/algolia/algoliasearch-client-js#keep-alive
     */
    destroy(): void;
    /**
     * Add a header to be sent with all upcoming requests
     */
    setExtraHeader(name: string, value: string): void;
    /**
     * Get the value of an extra header
     */
    getExtraHeader(name: string): string;
    /**
     * Remove an extra header for all upcoming requests
     */
    unsetExtraHeader(name: string): void;
    /**
     * List all your indices along with their associated information (number of entries, disk size, etc.)
     * https://github.com/algolia/algoliasearch-client-js#list-indices---listindexes
     */
    listIndexes(cb: (err: Error, res: any) => void): void;
    /**
     * List all your indices along with their associated information (number of entries, disk size, etc.)
     * https://github.com/algolia/algoliasearch-client-js#list-indices---listindexes
     */
    listIndexes(): Promise<any>;
    /**
     * Delete a specific index
     * https://github.com/algolia/algoliasearch-client-js#delete-index---deleteindex
     */
    deleteIndex(name: string, cb: (err: Error, res: Task) => void): void;
    /**
     * Delete a specific index
     * https://github.com/algolia/algoliasearch-client-js#delete-index---deleteindex
     */
    deleteIndex(name: string): Promise<Task>;
    /**
     * Copy an  index from a specific index to a new one
     * https://github.com/algolia/algoliasearch-client-js#copy-index---copyindex
     */
    copyIndex(
      from: string,
      to: string,
      scope: ('settings' | 'synonyms' | 'rules')[],
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Copy an  index from a specific index to a new one
     * https://github.com/algolia/algoliasearch-client-js#copy-index---copyindex
     */
    copyIndex(
      from: string,
      to: string,
      scope: ('settings' | 'synonyms' | 'rules')[]
    ): Promise<Task>;
    /**
     * Move index to a new one (and will overwrite the original one)
     * https://github.com/algolia/algoliasearch-client-js#move-index---moveindex
     */
    moveIndex(
      from: string,
      to: string,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Move index to a new one (and will overwrite the original one)
     * https://github.com/algolia/algoliasearch-client-js#move-index---moveindex
     */
    moveIndex(from: string, to: string): Promise<Task>;
    /**
     * Generate a public API key
     * https://github.com/algolia/algoliasearch-client-js#generate-key---generatesecuredapikey
     */
    generateSecuredApiKey(key: string, filters: SecuredApiOptions): string;
    /**
     * Perform multiple operations with one API call to reduce latency
     * https://github.com/algolia/algoliasearch-client-js#custom-batch---batch
     */
    batch(action: Action[], cb: (err: Error, res: Task) => void): void;
    /**
     * Perform multiple operations with one API call to reduce latency
     * https://github.com/algolia/algoliasearch-client-js#custom-batch---batch
     */
    batch(action: Action[]): Promise<Task>;
    /**
     * Lists global API Keys
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    listApiKeys(cb: (err: Error, res: any) => void): void;
    /**
     * Lists global API Keys
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    listApiKeys(): Promise<any>;
    /**
     * Add global API Keys
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(scopes: string[], cb: (err: Error, res: Task) => void): void;
    /**
     * Add global API Key
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(
      scopes: string[],
      options: ApiKeyOptions,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Add global API Keys
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(scopes: string[], options?: ApiKeyOptions): Promise<Task>;
    /**
     * Update global API key
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Update global API key
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: ApiKeyOptions,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Update global API key
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options?: ApiKeyOptions
    ): Promise<Task>;
    /**
     * Gets the rights of a global key
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    getApiKey(key: string, cb: (err: Error, res: any) => void): void;
    /**
     * Gets the rights of a global key
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    getApiKey(key: string): Promise<any>;
    /**
     * Deletes a global key
     * https://github.com/algolia/algoliasearch-client-js#delete-user-key---deleteapikey
     */
    deleteApiKey(key: string, cb: (err: Error, res: Task) => void): void;
    /**
     * Deletes a global key
     * https://github.com/algolia/algoliasearch-client-js#delete-user-key---deleteapikey
     */
    deleteApiKey(key: string): Promise<Task>;
    /**
     * Get 1000 last events
     * https://github.com/algolia/algoliasearch-client-js#get-logs---getlogs
     */
    getLogs(
      options: LogsOptions,
      cb: (err: Error, res: { logs: Log[] }) => void
    ): void;
    /**
     * Get 1000 last events
     * https://github.com/algolia/algoliasearch-client-js#get-logs---getlogs
     */
    getLogs(options: LogsOptions): Promise<{ logs: Log[] }>;
  }
  /**
   * Interface for the index algolia object
   */
  interface Index {
    /**
     * Gets a specific object
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObject(objectID: string, cb: (err: Error, res: {}) => void): void;
    /**
     * Gets specific attributes from an object
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObject(
      objectID: string,
      attributes: string[],
      cb: (err: Error, res: {}) => void
    ): void;
    /**
     * Gets a list of objects
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObjects(
      objectIDs: string[],
      cb: (err: Error, res: { results: {}[] }) => void
    ): void;
    /**
     * Add a specific object
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObject(object: {}, cb: (err: Error, res: Task) => void): void;
    /**
     * Add a list of objects
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObject(
      object: {},
      objectID: string,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Add list of objects
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObjects(objects: {}[], cb: (err: Error, res: Task) => void): void;
    /**
     * Add or replace a specific object
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    saveObject(object: {}, cb: (err: Error, res: Task) => void): void;
    /**
     * Add or replace several objects
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    saveObjects(objects: object[], cb: (err: Error, res: Task) => void): void;
    /**
     * Update parameters of a specific object
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    partialUpdateObject(object: {}, cb: (err: Error, res: Task) => void): void;
    /**
     * Update parameters of a list of objects
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    partialUpdateObjects(
      objects: {}[],
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Delete a specific object
     * https://github.com/algolia/algoliasearch-client-js#delete-objects---deleteobjects
     */
    deleteObject(objectID: string, cb: (err: Error, res: Task) => void): void;
    /**
     * Delete a list of objects
     * https://github.com/algolia/algoliasearch-client-js#delete-objects---deleteobjects
     */
    deleteObjects(
      objectIDs: string[],
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Delete objects that matches the query
     * https://github.com/algolia/algoliasearch-client-js#delete-by-query---deletebyquery
     */
    deleteByQuery(query: string, cb: (err: Error, res: any) => void): void;
    /**
     * Delete objects that matches the query
     * https://github.com/algolia/algoliasearch-client-js#delete-by-query---deletebyquery
     */
    deleteByQuery(
      query: string,
      params: {},
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Delete objects that matches the query
     * https://github.com/algolia/algoliasearch-client-js#delete-by-query---deleteby
     */
    deleteBy(params: {}, cb: (err: Error, res: Task) => void): void;
    /**
     * Wait for an indexing task to be compete
     * https://github.com/algolia/algoliasearch-client-js#wait-for-operations---waittask
     */
    waitTask(taskID: number, cb: (err: Error, res: any) => void): void;
    /**
     * Get an index settings
     * https://github.com/algolia/algoliasearch-client-js#get-settings---getsettings
     */
    getSettings(cb: (err: Error, res: IndexSettings) => void): void;
    /**
     * Set an index settings
     * https://github.com/algolia/algoliasearch-client-js#set-settings---setsettings
     */
    setSettings(
      settings: IndexSettings,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Clear cache of an index
     * https://github.com/algolia/algoliasearch-client-js#cache
     */
    clearCache(): void;
    /**
     * Clear an index content
     * https://github.com/algolia/algoliasearch-client-js#clear-index---clearindex
     */
    clearIndex(cb: (err: Error, res: Task) => void): void;
    /**
     * Save a synonym object
     * https://github.com/algolia/algoliasearch-client-js#save-synonym---savesynonym
     */
    saveSynonym(
      synonym: Synonym,
      options: SynonymOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Save a synonym object
     */
    batchSynonyms(
      synonyms: Synonym[],
      options: SynonymOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Delete a specific synonym
     * https://github.com/algolia/algoliasearch-client-js#batch-synonyms---batchsynonyms
     */
    deleteSynonym(
      identifier: string,
      options: SynonymOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Clear all synonyms of an index
     * https://github.com/algolia/algoliasearch-client-js#clear-all-synonyms---clearsynonyms
     */
    clearSynonyms(
      options: SynonymOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Get a specific synonym
     * https://github.com/algolia/algoliasearch-client-js#get-synonym---getsynonym
     */
    getSynonym(identifier: string, cb: (err: Error, res: Synonym) => void): void;
    /**
     * Search a synonyms
     * https://github.com/algolia/algoliasearch-client-js#search-synonyms---searchsynonyms
     */
    searchSynonyms(
      options: SearchSynonymOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Save a rule object
     * https://github.com/algolia/algoliasearch-client-js#save-rule---saverule
     */
    saveRule(
      rule: Rule,
      options: RuleOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Save a rule object
     */
    batchRules(
      rules: Rule[],
      options: RuleOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Delete a specific rule
     * https://github.com/algolia/algoliasearch-client-js#batch-rules---batchrules
     */
    deleteRule(
      identifier: string,
      options: RuleOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Clear all rules of an index
     * https://github.com/algolia/algoliasearch-client-js#clear-all-rules---clearrules
     */
    clearRules(options: RuleOption, cb: (err: Error, res: Task) => void): void;
    /**
     * Get a specific rule
     * https://github.com/algolia/algoliasearch-client-js#get-rule---getrule
     */
    getRule(identifier: string, cb: (err: Error, res: Rule) => void): void;
    /**
     * Search a rules
     * https://github.com/algolia/algoliasearch-client-js#search-rules---searchrules
     */
    searchRules(
      options: SearchRuleOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * List index user keys
     * https://github.com/algolia/algoliasearch-client-js#list-api-keys---listapikeys
     */
    listApiKeys(cb: (err: Error, res: any) => void): void;
    /**
     * Add key for this index
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(scopes: string[], cb: (err: Error, res: Task) => void): void;
    /**
     * Add key for this index
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(
      scopes: string[],
      options: ApiKeyOptions,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Update a key for this index
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Update a key for this index
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: ApiKeyOptions,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Gets the rights of an index specific key
     * https://github.com/algolia/algoliasearch-client-js#get-key-permissions---getapikeyacl
     */
    getApiKey(key: string, cb: (err: Error, res: any) => void): void;
    /**
     * Deletes an index specific key
     * https://github.com/algolia/algoliasearch-client-js#delete-user-key---deleteapikey
     */
    deleteApiKey(key: string, cb: (err: Error, res: Task) => void): void;
    /**
     * Gets specific attributes from an object
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObject(objectID: string, attributes?: string[]): Promise<{}>;
    /**
     * Gets a list of objects
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObjects(objectIDs: string[]): Promise<{ results: {}[] }>;
    /**
     * Add a list of objects
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObject(object: {}, objectID?: string): Promise<Task>;
    /**
     * Add list of objects
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObjects(objects: {}[]): Promise<Task>;
    /**
     * Add or replace a specific object
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    saveObject(object: {}): Promise<Task>;
    /**
     * Add or replace several objects
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    saveObjects(objects: object[]): Promise<Task>;
    /**
     * Update parameters of a specific object
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    partialUpdateObject(object: {}): Promise<Task>;
    /**
     * Update parameters of a list of objects
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    partialUpdateObjects(objects: {}[]): Promise<Task>;
    /**
     * Delete a specific object
     * https://github.com/algolia/algoliasearch-client-js#delete-objects---deleteobjects
     */
    deleteObject(objectID: string): Promise<Task>;
    /**
     * Delete a list of objects
     * https://github.com/algolia/algoliasearch-client-js#delete-objects---deleteobjects
     */
    deleteObjects(objectIDs: string[]): Promise<Task>;
    /**
     * Delete objects that matches the query
     * https://github.com/algolia/algoliasearch-client-js#delete-by-query---deletebyquery
     */
    deleteByQuery(query: string, params?: {}): Promise<any>;
    /**
     * Delete objects that matches the query
     * https://www.algolia.com/doc/api-reference/api-methods/delete-by-query/
     */
    deleteBy(params: {}): Promise<Task>;
    /**
     * Wait for an indexing task to be compete
     * https://github.com/algolia/algoliasearch-client-js#wait-for-operations---waittask
     */
    waitTask(taskID: number): Promise<any>;
    /**
     * Get an index settings
     * https://github.com/algolia/algoliasearch-client-js#get-settings---getsettings
     */
    getSettings(): Promise<IndexSettings>;
    /**
     * Set an index settings
     * https://github.com/algolia/algoliasearch-client-js#set-settings---setsettings
     */
    setSettings(settings: IndexSettings): Promise<Task>;
    /**
     * Search in an index
     * https://github.com/algolia/algoliasearch-client-js#search-in-an-index---search
     */
    search(params: QueryParameters): Promise<Response>;
    /**
     * Search in an index
     * https://github.com/algolia/algoliasearch-client-js#search-in-an-index---search
     */
    search(
      params: QueryParameters,
      cb: (err: Error, res: Response) => void
    ): void;
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
    browse(query: string, cb: (err: Error, res: BrowseResponse) => void): void;
    /**
     * Browse an index
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browse(query: string): Promise<BrowseResponse>;
    /**
     * Browse an index from a cursor
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browseFrom(cursor: string, cb: (err: Error, res: BrowseResponse) => void): void;
    /**
     * Browse an index from a cursor
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browseFrom(cursor: string): Promise<BrowseResponse>;
    /**
     * Browse an entire index
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browseAll(): Promise<Response>;
    /**
     * Clear an index content
     * https://github.com/algolia/algoliasearch-client-js#clear-index---clearindex
     */
    clearIndex(): Promise<Task>;
    /**
     * Save a synonym object
     * https://github.com/algolia/algoliasearch-client-js#save-synonym---savesynonym
     */
    saveSynonym(synonym: Synonym, options: SynonymOption): Promise<Task>;
    /**
     * Save a synonym object
     */
    batchSynonyms(synonyms: Synonym[], options: SynonymOption): Promise<Task>;
    /**
     * Delete a specific synonym
     * https://github.com/algolia/algoliasearch-client-js#batch-synonyms---batchsynonyms
     */
    deleteSynonym(objectID: string, options: SynonymOption): Promise<Task>;
    /**
     * Clear all synonyms of an index
     * https://github.com/algolia/algoliasearch-client-js#clear-all-synonyms---clearsynonyms
     */
    clearSynonyms(options: SynonymOption): Promise<Task>;
    /**
     * Get a specific synonym
     * https://github.com/algolia/algoliasearch-client-js#get-synonym---getsynonym
     */
    getSynonym(objectID: string): Promise<Synonym>;
    /**
     * Search a synonyms
     * https://github.com/algolia/algoliasearch-client-js#search-synonyms---searchsynonyms
     */
    searchSynonyms(options: SearchSynonymOptions): Promise<any>;
    /**
     * Save a rule object
     * https://github.com/algolia/algoliasearch-client-js#save-rule---saverule
     */
    saveRule(rule: Rule, options: RuleOption): Promise<Task>;
    /**
     * Save a rule object
     */
    batchRules(rules: Rule[], options: RuleOption): Promise<Task>;
    /**
     * Delete a specific rule
     * https://github.com/algolia/algoliasearch-client-js#batch-rules---batchrules
     */
    deleteRule(identifier: string, options: RuleOption): Promise<Task>;
    /**
     * Clear all query rules of an index
     * https://github.com/algolia/algoliasearch-client-js#clear-all-rules---clearrules
     */
    clearRules(options: RuleOption): Promise<Task>;
    /**
     * Get a specific query rule
     * https://github.com/algolia/algoliasearch-client-js#get-rule---getrule
     */
    getRule(identifier: string): Promise<Rule>;
    /**
     * Search for query rules
     * https://github.com/algolia/algoliasearch-client-js#search-rules---searchrules
     */
    searchRules(options: SearchRuleOptions): Promise<any>;
    /**
     * List index user keys
     * https://github.com/algolia/algoliasearch-client-js#list-api-keys---listapikeys
     */
    listApiKeys(): Promise<any>;
    /**
     * Add key for this index
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(scopes: string[], options?: ApiKeyOptions): Promise<Task>;
    /**
     * Update a key for this index
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(key: string, scopes: string[]): Promise<Task>;
    /**
     * Update a key for this index
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: ApiKeyOptions
    ): Promise<Task>;
    /**
     * Gets the rights of an index specific key
     * https://github.com/algolia/algoliasearch-client-js#get-key-permissions---getapikeyacl
     */
    getApiKey(key: string): Promise<any>;
    /**
     * Deletes an index specific key
     * https://github.com/algolia/algoliasearch-client-js#delete-user-key---deleteapikey
     */
    deleteApiKey(key: string): Promise<Task>;
  }
  /**
   * Interface describing available options when initializing a client
   */
  interface ClientOptions {
    /**
     * Timeout for requests to our servers, in milliseconds
     * default: 15s (node), 2s (browser)
     * https://github.com/algolia/algoliasearch-client-js#client-options
     */
    timeout?: number;
    /**
     * Protocol to use when communicating with algolia
     * default: current protocol(browser), https(node)
     * https://github.com/algolia/algoliasearch-client-js#client-options
     */
    protocol?: string;
    /**
     * (node only) httpAgent instance to use when communicating with  servers.
     * https://github.com/algolia/algoliasearch-client-js#client-options
     */
    httpAgent?: any;
    /**
     * read: array of read hosts to use to call  servers, computed automatically
     * write: array of read hosts to use to call  servers, computed automatically
     * https://github.com/algolia/algoliasearch-client-js#client-options
     */
    hosts?: { read?: string[]; write?: string[] };
  }
  /**
   * Interface describing options available for gettings the logs
   */
  interface LogsOptions {
    /**
     * Specify the first entry to retrieve (0-based, 0 is the most recent log entry).
     * default: 0
     * https://github.com/algolia/algoliasearch-client-js#get-logs---getlogs
     */
    offset?: number;
    /**
     * Specify the maximum number of entries to retrieve starting at the offset.
     * default: 10
     * maximum: 1000
     * https://github.com/algolia/algoliasearch-client-js#get-logs---getlogs
     */
    length?: number;
    /**
     * @deprecated
     * Retrieve only logs with an HTTP code different than 200 or 201
     * https://github.com/algolia/algoliasearch-client-js#get-logs---getlogs
     */
    onlyErrors?: boolean;
    /**
     * Specify the type of logs to retrieve
     * 'query' Retrieve only the queries
     * 'build' Retrieve only the build operations
     * 'error' Retrieve only the errors (same as onlyErrors parameters)
     * https://github.com/algolia/algoliasearch-client-js#get-logs---getlogs
     */
    type?: string;
    /**
     * The index to request logs from
     */
    indexName?: string;
  }
  /**
   * Describe the action object used for batch operation
   */
  interface Action {
    /**
     * Type of the batch action
     * https://github.com/algolia/algoliasearch-client-js#custom-batch---batch
     */
    action:
      | 'addObject'
      | 'updateObject'
      | 'partialUpdateObject'
      | 'partialUpdateObjectNoCreate'
      | 'deleteObject'
      | 'delete'
      | 'clear';
    /**
     * Name of the index where the bact will be performed
     * https://github.com/algolia/algoliasearch-client-js#custom-batch---batch
     */
    indexName: string;
    /**
     * Object
     * https://github.com/algolia/algoliasearch-client-js#custom-batch---batch
     */
    body: {};
  }
  /**
   * Describes the option used when creating user key
   */
  interface ApiKeyOptions {
    /**
     * Add a validity period. The key will be valid for a specific period of time (in seconds).
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    validity?: number;
    /**
     * Specify the maximum number of API calls allowed from an IP address per hour
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    maxQueriesPerIPPerHour?: number;
    /**
     * Specify the maximum number of hits this API key can retrieve in one call
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    maxHitsPerQuery?: boolean;
    /**
     * Specify the list of targeted indices
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    indexes?: string[];
    /**
     * Specify the list of referers
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    referers?: string[];
    /**
     * Specify the list of query parameters
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    queryParameters?: QueryParameters;
    /**
     * Specify a description to describe where the key is used.
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    description?: string;
  }
  /**
   * Describes option used when making operation on synonyms
   */
  interface SynonymOption {
    /**
     * You can forward all settings updates to the replicas of an index
     * https://github.com/algolia/algoliasearch-client-js#replica-settings
     */
    forwardToReplicas?: boolean;
    /**
     * Replace all existing synonyms on the index with the content of the batch
     * https://github.com/algolia/algoliasearch-client-js#batch-synonyms---batchsynonyms
     */
    replaceExistingSynonyms?: boolean;
  }
  /**
   * Describes options used when searching for synonyms
   */
  interface SearchSynonymOptions {
    /**
     * The actual search query to find synonyms
     * https://github.com/algolia/algoliasearch-client-js#search-synonyms---searchsynonyms
     */
    query?: string;
    /**
     * The page to fetch when browsing through several pages of results
     * default: 0
     * https://github.com/algolia/algoliasearch-client-js#search-synonyms---searchsynonyms
     */
    page?: number;
    /**
     * Restrict the search to a specific type of synonym
     * Use an empty string to search all types (default behavior)
     * https://github.com/algolia/algoliasearch-client-js#search-synonyms---searchsynonyms
     */
    type?: string;
    /**
     * Number of hits per page
     * default: 100
     * https://github.com/algolia/algoliasearch-client-js#search-synonyms---searchsynonyms
     */
    hitsPerPage?: number;
  }
  /**
   * Describes option used when making operation on query rules
   */
  interface RuleOption {
    /**
     * You can forward all settings updates to the replicas of an index
     * https://github.com/algolia/algoliasearch-client-js#replica-settings
     */
    forwardToReplicas?: boolean;
    /**
     * Replace all existing query rules on the index with the content of the batch
     */
    clearExistingRules?: boolean;
  }
  /**
   * Describes options used when searching for query rules
   */
  interface SearchRuleOptions {
    /**
     * The actual search query to find synonyms
     */
    query?: string;
    /**
     * When specified, restricts matches to rules with a specific anchoring type.
     * When omitted, all anchoring types may match.
     */
    anchoring?: string;
    /**
     * When specified, restricts matches to contextual rules with a specific context (exact match).
     * When omitted, any generic or contextual rule (with any context) may match.
     */
    context?: string;
    /**
     * Requested page (zero-based)
     * default: 0
     */
    page?: number;
    /**
     * Number of hits per page
     * default: 20
     */
    hitsPerPage?: number;
  }
  interface BrowseResponse {
    cursor?: string;
    hits: {}[];
    params: string;
    query: string;
    processingTimeMS: number;
  }
  /**
   * Describes a synonym object
   */
  interface Synonym {
    /**
     * ObjectID of the synonym
     * https://github.com/algolia/algoliasearch-client-js#save-synonym---savesynonym
     */
    objectID: string;
    /**
     * Type of synonym
     * https://github.com/algolia/algoliasearch-client-js#save-synonym---savesynonym
     */
    type: 'synonym' | 'oneWaySynonym';
    /**
     * Values used for the synonym
     * https://github.com/algolia/algoliasearch-client-js#save-synonym---savesynonym
     */
    synonyms: string[];
  }
  /**
   * Describes a query rule object
   */
  interface Rule {
    /**
     * ObjectID of the synonym
     * https://github.com/algolia/algoliasearch-client-js#save-synonym---savesynonym
     */
    objectID: string;
    /**
     * Condition of the rule
     */
    condition: {
      /**
       * Query pattern
       * syntax: https://www.algolia.com/doc/rest-api/query-rules/?language=php#query-pattern-syntax
       */
      pattern: string;
      /**
       * Whether the pattern must match the beginning or the end of the query string, or both, or none.
       */
      anchoring: 'is' | 'startsWith' | 'endsWith' | 'contains';
      /**
       * Rule context (format: [A-Za-z0-9_-]+).
       * When specified, the rule is contextual and applies only when the same context is specified
       * at query time (using the ruleContexts parameter).
       * When absent, the rule is generic and always applies
       * (provided that its other conditions are met, of course).
       */
      context?: string;
    };
    /**
     * Consequence of the rule. At least one of the following must be used:
     */
    consequence: {
      params?: {
        /**
         * When a string, it replaces the entire query string.
         * When an object, describes incremental edits to be made to the query string.
         */
        query?:
          | string
          | {
              /**
               * Tokens (literals or placeholders) from the query pattern
               * that should be removed from the query string.
               */
              remove: string[];
            };
        /**
         * Names of facets to which automatic filtering must be applied;
         * they must match the facet name of a facet value placeholder in the query pattern.
         */
        automaticFacetFilters?: string[];
        /**
         * Same as automaticFacetFilters, but for optionalFacetFilters.
         * The same syntax as query parameters can be used to specify a score: facetName<score=1>.
         */
        automaticOptionalFacetFilters?: string[];
      };
      /**
       * Objects to promote as hits. Each object must contain the following fields
       */
      promote?: {
        /**
         * Unique identifier of the object to promote
         */
        objectID: string;
        /**
         *  Promoted rank for the object (zero-based)
         */
        position: number;
      }[];
      /**
       *  Custom JSON object that will be appended to the userData array in the response.
       * This object is not interpreted by the API. It is limited to 1kB of minified JSON.
       */
      userData?: {};
    };
    /**
     * This field is intended for rule management purposes,
     * in particular to ease searching for rules and presenting them to human readers.
     * It is not interpreted by the API.
     */
    description?: string;
  }
  /**
   * Describes the options used when generating new api keys
   */
  interface SecuredApiOptions {
    /**
     * Filter the query with numeric, facet or/and tag filters
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#filters-1
     */
    filters?: string;
    /**
     * Defines the expiration date of the API key
     * https://github.com/algolia/algoliasearch-client-js#valid-until
     */
    validUntil?: number;
    /**
     * Restricts the key to a list of index names allowed for the secured API key
     * https://github.com/algolia/algoliasearch-client-js#index-restriction
     */
    restrictIndices?: string;
    /**
     * Allows you to restrict a single user to performing a maximum of N API calls per hour
     * https://github.com/algolia/algoliasearch-client-js#user-rate-limiting
     */
    userToken?: string;
  }
}

declare function algoliasearch(
  applicationId: string,
  apiKey: string,
  options?: algoliasearch.ClientOptions
): algoliasearch.Client;
export = algoliasearch;
