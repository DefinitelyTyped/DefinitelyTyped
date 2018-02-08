// Type definitions for algoliasearch-client-js 3.24.8
// Project: https://github.com/algolia/algoliasearch-client-js
// Definitions by: Baptiste Coquelle <https://github.com/cbaptiste>
//                 Haroen Viaene <https://github.com/haroenv>
//                 Aurélien Hervé <https://github.com/aherve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace algoliasearch {
  interface AlgoliaResponse {
    /**
     * Contains all the hits matching the query
     * https://github.com/algolia/algoliasearch-client-js#response-format
     */
    hits: any[];
    /**
     * Current page
     * https://github.com/algolia/algoliasearch-client-js#response-format
     */
    page: number;
    /**
     * Number of total hits matching the query
     * https://github.com/algolia/algoliasearch-client-js#response-format
     */
    nbHits: number;
    /**
     * Number of pages
     * https://github.com/algolia/algoliasearch-client-js#response-format
     */
    nbPages: number;
    /**
     * Number of hits per pages
     * https://github.com/algolia/algoliasearch-client-js#response-format
     */
    hitsPerPage: number;
    /**
     * Engine processing time (excluding network transfer)
     * https://github.com/algolia/algoliasearch-client-js#response-format
     */
    processingTimeMS: number;
    /**
     * Query used to perform the search
     * https://github.com/algolia/algoliasearch-client-js#response-format
     */
    query: string;
    /**
     * GET parameters used to perform the search
     * https://github.com/algolia/algoliasearch-client-js#response-format
     */
    params: string;
  }
  interface AlgoliaMultiResponse {
    results: AlgoliaResponse[];
  }
  /*
  Interface for the algolia client object
  */
  interface AlgoliaClient {
    /**
     * Initialization of the index
     * @param name: index name
     * return algolia index object
     * https://github.com/algolia/algoliasearch-client-js#init-index---initindex
     */
    initIndex(name: string): AlgoliaIndex;
    /**
     * Query on multiple index
     * @param queries index name, query and query parameters
     * @param cb callback(err, res)
     * https://github.com/algolia/algoliasearch-client-js#multiple-queries---multiplequeries
     */
    search(
      queries: {
        indexName: string;
        query: string;
        params: AlgoliaQueryParameters;
      }[],
      cb: (err: Error, res: AlgoliaMultiResponse) => void
    ): void;
    /**
     * Query on multiple index
     * @param queries index name, query and query parameters
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#multiple-queries---multiplequeries
     */
    search(queries: {
      indexName: string;
      query: string;
      params: AlgoliaQueryParameters;
    }[]): Promise<AlgoliaMultiResponse>;
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
     * remove an extra header for all upcoming requests
     */
    unsetExtraHeader(name: string): void;
    /**
     * List all your indices along with their associated information (number of entries, disk size, etc.)
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#list-indices---listindexes
     */
    listIndexes(cb: (err: Error, res: any) => void): void;
    /**
     * List all your indices along with their associated information (number of entries, disk size, etc.)
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#list-indices---listindexes
     */
    listIndexes(): Promise<any>;
    /**
     * Delete a specific index
     * @param name
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#delete-index---deleteindex
     */
    deleteIndex(name: string, cb: (err: Error, res: any) => void): void;
    /**
     * Delete a specific index
     * @param name
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#delete-index---deleteindex
     */
    deleteIndex(name: string): Promise<any>;
    /**
     * Copy an  index from a specific index to a new one
     * @param from origin index
     * @param to destination index
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#copy-index---copyindex
     */
    copyIndex(
      from: string,
      to: string,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Copy an  index from a specific index to a new one
     * @param from origin index
     * @param to destination index
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#copy-index---copyindex
     */
    copyIndex(from: string, to: string): Promise<any>;
    /**
     * Move index to a new one (and will overwrite the original one)
     * @param from origin index
     * @param to destination index
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#move-index---moveindex
     */
    moveIndex(
      from: string,
      to: string,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Move index to a new one (and will overwrite the original one)
     * @param from origin index
     * @param to destination index
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#move-index---moveindex
     */
    moveIndex(from: string, to: string): Promise<any>;
    /**
     * Generate a public API key
     * @param key api key
     * @param filters
     * https://github.com/algolia/algoliasearch-client-js#generate-key---generatesecuredapikey
     */
    generateSecuredApiKey(
      key: string,
      filters: AlgoliaSecuredApiOptions
    ): string;
    /**
     * Perform multiple operations with one API call to reduce latency
     * @param action
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#custom-batch---batch
     */
    batch(action: AlgoliaAction[], cb: (err: Error, res: any) => void): void;
    /**
     * Perform multiple operations with one API call to reduce latency
     * @param action
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#custom-batch---batch
     */
    batch(action: AlgoliaAction[]): Promise<any>;
    /**
     * Lists global API Keys
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    listApiKeys(cb: (err: Error, res: any) => void): void;
    /**
     * Lists global API Keys
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    listApiKeys(): Promise<any>;
    /**
     * Add global API Keys
     * @param scopes
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(scopes: string[], cb: (err: Error, res: any) => void): void;
    /**
     * Add global API Key
     * @param scopes
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(
      scopes: string[],
      options: AlgoliaApiKeyOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Add global API Keys
     * @param scopes
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(scopes: string[], options?: AlgoliaApiKeyOptions): Promise<any>;
    /**
     * Update global API key
     * @param key
     * @param scopes
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Update global API key
     * @param key
     * @param scopes
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: AlgoliaApiKeyOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Update global API key
     * @param key
     * @param scopes
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options?: AlgoliaApiKeyOptions
    ): Promise<any>;
    /**
     * Gets the rights of a global key
     * @param key
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    getApiKey(key: string, cb: (err: Error, res: any) => void): void;
    /**
     * Gets the rights of a global key
     * @param key
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    getApiKey(key: string): Promise<any>;
    /**
     * Deletes a global key
     * @param key
     * @param cb(err,res)
     * https://github.com/algolia/algoliasearch-client-js#delete-user-key---deleteapikey
     */
    deleteApiKey(key: string, cb: (err: Error, res: any) => void): void;
    /**
     * Deletes a global key
     * @param key
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#delete-user-key---deleteapikey
     */
    deleteApiKey(key: string): Promise<any>;
    /**
     * Get 1000 last events
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#get-logs---getlogs
     */
    getLogs(options: LogsOptions, cb: (err: Error, res: any) => void): void;
    /**
     * Get 1000 last events
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#get-logs---getlogs
     */
    getLogs(options: LogsOptions): Promise<any>;
  }
  /**
   * Interface for the index algolia object
   */
  interface AlgoliaIndex {
    /**
     * Gets a specific object
     * @param objectID
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObject(objectID: string, cb: (err: Error, res: any) => void): void;
    /**
     * Gets specific attributes from an object
     * @param objectID
     * @param attributes
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObject(
      objectID: string,
      attributes: string[],
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Gets a list of objects
     * @param objectIDs
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObjects(objectIDs: string[], cb: (err: Error, res: any) => void): void;
    /**
     * Add a specific object
     * @param object without objectID
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObject(object: {}, cb: (err: Error, res: any) => void): void;
    /**
     * Add a list of objects
     * @param object with objectID
     * @param objectID
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObject(
      object: {},
      objectID: string,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Add list of objects
     * @param objects
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObjects(objects: {}[], cb: (err: Error, res: any) => void): void;
    /**
     * Add or replace a specific object
     * @param object
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    saveObject(object: {}, cb: (err: Error, res: any) => void): void;
    /**
     * Add or replace several objects
     * @param objects
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    saveObjects(objects: object[], cb: (err: Error, res: any) => void): void;
    /**
     * Update parameters of a specific object
     * @param object
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    partialUpdateObject(object: {}, cb: (err: Error, res: any) => void): void;
    /**
     * Update parameters of a list of objects
     * @param objects
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    partialUpdateObjects(
      objects: {}[],
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Delete a specific object
     * @param objectID
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#delete-objects---deleteobjects
     */
    deleteObject(objectID: string, cb: (err: Error, res: any) => void): void;
    /**
     * Delete a list of objects
     * @param objectIDs
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#delete-objects---deleteobjects
     */
    deleteObjects(
      objectIDs: string[],
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Delete objects that matches the query
     * @param query
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#delete-by-query---deletebyquery
     */
    deleteByQuery(query: string, cb: (err: Error, res: any) => void): void;
    /**
     * Delete objects that matches the query
     * @param query
     * @param params of the object
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#delete-by-query---deletebyquery
     */
    deleteByQuery(
      query: string,
      params: {},
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Delete objects that matches the query
     * @param query
     * @param params of the object
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#delete-by-query---deleteby
     */
    deleteBy(params: {}, cb: (err: Error, res: any) => void): void;
    /**
     * Wait for an indexing task to be compete
     * @param taskID
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#wait-for-operations---waittask
     */
    waitTask(taskID: number, cb: (err: Error, res: any) => void): void;
    /**
     * Get an index settings
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#get-settings---getsettings
     */
    getSettings(cb: (err: Error, res: any) => void): void;
    /**
     * Set an index settings
     * @param settings
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#set-settings---setsettings
     */
    setSettings(
      settings: AlgoliaIndexSettings,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Clear cache of an index
     * https://github.com/algolia/algoliasearch-client-js#cache
     */
    clearCache(): void;
    /**
     * Clear an index content
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#clear-index---clearindex
     */
    clearIndex(cb: (err: Error, res: any) => void): void;
    /**
     * Save a synonym object
     * @param synonym
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#save-synonym---savesynonym
     */
    saveSynonym(
      synonym: AlgoliaSynonym,
      options: SynonymOption,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Save a synonym object
     * @param synonyms
     * @param options
     * @param cb(err, res)
     */
    batchSynonyms(
      synonyms: AlgoliaSynonym[],
      options: SynonymOption,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Delete a specific synonym
     * @param identifier
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#batch-synonyms---batchsynonyms
     */
    deleteSynonym(
      identifier: string,
      options: SynonymOption,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Clear all synonyms of an index
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#clear-all-synonyms---clearsynonyms
     */
    clearSynonyms(
      options: SynonymOption,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Get a specific synonym
     * @param identifier
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#get-synonym---getsynonym
     */
    getSynonym(identifier: string, cb: (err: Error, res: any) => void): void;
    /**
     * Search a synonyms
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#search-synonyms---searchsynonyms
     */
    searchSynonyms(
      options: SearchSynonymOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Save a rule object
     * @param rule
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#save-rule---saverule
     */
    saveRule(
      rule: AlgoliaRule,
      options: RuleOption,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Save a rule object
     * @param rules
     * @param options
     * @param cb(err, res)
     */
    batchRules(
      rules: AlgoliaRule[],
      options: RuleOption,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Delete a specific rule
     * @param identifier
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#batch-rules---batchrules
     */
    deleteRule(
      identifier: string,
      options: RuleOption,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Clear all rules of an index
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#clear-all-rules---clearrules
     */
    clearRules(options: RuleOption, cb: (err: Error, res: any) => void): void;
    /**
     * Get a specific rule
     * @param identifier
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#get-rule---getrule
     */
    getRule(identifier: string, cb: (err: Error, res: any) => void): void;
    /**
     * Search a rules
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#search-rules---searchrules
     */
    searchRules(
      options: SearchRuleOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * List index user keys
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#list-api-keys---listapikeys
     */
    listApiKeys(cb: (err: Error, res: any) => void): void;
    /**
     * Add key for this index
     * @param scopes
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(scopes: string[], cb: (err: Error, res: any) => void): void;
    /**
     * Add key for this index
     * @param scopes
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(
      scopes: string[],
      options: AlgoliaApiKeyOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Update a key for this index
     * @param key
     * @param scopes
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Update a key for this index
     * @param key
     * @param scopes
     * @param options
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: AlgoliaApiKeyOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Gets the rights of an index specific key
     * @param key
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#get-key-permissions---getapikeyacl
     */
    getApiKey(key: string, cb: (err: Error, res: any) => void): void;
    /**
     * Deletes an index specific key
     * @param key
     * @param cb(err, res)
     * https://github.com/algolia/algoliasearch-client-js#delete-user-key---deleteapikey
     */
    deleteApiKey(key: string, cb: (err: Error, res: any) => void): void;
    /**
     * Gets specific attributes from an object
     * @param objectID
     * @param attributes
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObject(objectID: string, attributes?: string[]): Promise<any>;
    /**
     * Gets a list of objects
     * @param objectIDs
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#find-by-ids---getobjects
     */
    getObjects(objectIDs: string[]): Promise<any>;
    /**
     * Add a list of objects
     * @param object with objectID
     * @param objectID
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObject(object: {}, objectID?: string): Promise<any>;
    /**
     * Add list of objects
     * @param objects
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#add-objects---addobjects
     */
    addObjects(objects: [{}]): Promise<any>;
    /**
     * Add or replace a specific object
     * @param object
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    saveObject(object: {}): Promise<any>;
    /**
     * Add or replace several objects
     * @param objects
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    saveObjects(objects: object[]): Promise<any>;
    /**
     * Update parameters of a specific object
     * @param object
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    partialUpdateObject(object: {}): Promise<any>;
    /**
     * Update parameters of a list of objects
     * @param objects
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#update-objects---saveobjects
     */
    partialUpdateObjects(objects: [{}]): Promise<any>;
    /**
     * Delete a specific object
     * @param objectID
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#delete-objects---deleteobjects
     */
    deleteObject(objectID: string): Promise<any>;
    /**
     * Delete a list of objects
     * @param objectIDs
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#delete-objects---deleteobjects
     */
    deleteObjects(objectIDs: string[]): Promise<any>;
    /**
     * Delete objects that matches the query
     * @param query
     * @param params of the object
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#delete-by-query---deletebyquery
     */
    deleteByQuery(query: string, params?: {}): Promise<any>;
    /**
     * Delete objects that matches the query
     * @param params of the search
     * return {Promise}
     * https://www.algolia.com/doc/api-reference/api-methods/delete-by-query/
     */
    deleteBy(params: {}): Promise<any>;
    /**
     * Wait for an indexing task to be compete
     * @param taskID
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#wait-for-operations---waittask
     */
    waitTask(taskID: number): Promise<any>;
    /**
     * Get an index settings
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#get-settings---getsettings
     */
    getSettings(): Promise<any>;
    /**
     * Set an index settings
     * @param settings
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#set-settings---setsettings
     */
    setSettings(settings: AlgoliaIndexSettings): Promise<any>;
    /**
     * Search in an index
     * @param params query parameter
     * return {Promise}
     * @param err() error callback
     * https://github.com/algolia/algoliasearch-client-js#search-in-an-index---search
     */
    search(params: AlgoliaQueryParameters): Promise<AlgoliaResponse>;
    /**
     * Search in an index
     * @param params query parameter
     * @param cb(err, res)
     * @param err() error callback
     * https://github.com/algolia/algoliasearch-client-js#search-in-an-index---search
     */
    search(
      params: AlgoliaQueryParameters,
      cb: (err: Error, res: AlgoliaResponse) => void
    ): void;
    /**
     * Search in an index
     * @param params query parameter
     * return {Promise}
     * @param err() error callback
     * https://www.algolia.com/doc/api-reference/api-methods/search-for-facet-values/
     */
    searchForFacetValues({
      facetName,
      facetQuery,
      ...qp,
    }: {
      facetName: string;
      facetQuery: string;
    } & AlgoliaQueryParameters): Promise<any>;
    /**
     * Search in an index
     * @param params query parameter
     * @param cb(err, res)
     * @param err() error callback
     * https://www.algolia.com/doc/api-reference/api-methods/search-for-facet-values/
     */
    searchForFacetValues(
      {
        facetName,
        facetQuery,
        ...qp,
      }: {
        facetName: string;
        facetQuery: string;
      } & AlgoliaQueryParameters,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Browse an index
     * @param query
     * @param cb(err, content)
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browse(query: string, cb: (err: Error, res: any) => void): void;
    /**
     * Browse an index
     * @param query
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browse(query: string): Promise<AlgoliaBrowseResponse>;
    /**
     * Browse an index from a cursor
     * @param cursor
     * @param cb(err, content)
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browseFrom(cursor: string, cb: (err: Error, res: any) => void): void;
    /**
     * Browse an index from a cursor
     * @param cursor
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browseFrom(cursor: string): Promise<AlgoliaBrowseResponse>;
    /**
     * Browse an entire index
     * return Promise
     * https://github.com/algolia/algoliasearch-client-js#backup--export-an-index---browse
     */
    browseAll(): Promise<AlgoliaResponse>;
    /**
     * Clear an index content
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#clear-index---clearindex
     */
    clearIndex(): Promise<any>;
    /**
     * Save a synonym object
     * @param synonym
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#save-synonym---savesynonym
     */
    saveSynonym(synonym: AlgoliaSynonym, options: SynonymOption): Promise<any>;
    /**
     * Save a synonym object
     * @param synonyms
     * @param options
     * return {Promise}
     */
    batchSynonyms(
      synonyms: AlgoliaSynonym[],
      options: SynonymOption
    ): Promise<any>;
    /**
     * Delete a specific synonym
     * @param identifier
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#batch-synonyms---batchsynonyms
     */
    deleteSynonym(identifier: string, options: SynonymOption): Promise<any>;
    /**
     * Clear all synonyms of an index
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#clear-all-synonyms---clearsynonyms
     */
    clearSynonyms(options: SynonymOption): Promise<any>;
    /**
     * Get a specific synonym
     * @param identifier
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#get-synonym---getsynonym
     */
    getSynonym(identifier: string): Promise<any>;
    /**
     * Search a synonyms
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#search-synonyms---searchsynonyms
     */
    searchSynonyms(options: SearchSynonymOptions): Promise<any>;
    /**
     * Save a rule object
     * @param rule
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#save-rule---saverule
     */
    saveRule(rule: AlgoliaRule, options: RuleOption): Promise<any>;
    /**
     * Save a rule object
     * @param rules
     * @param options
     * return {Promise}
     */
    batchRules(rules: AlgoliaRule[], options: RuleOption): Promise<any>;
    /**
     * Delete a specific rule
     * @param identifier
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#batch-rules---batchrules
     */
    deleteRule(identifier: string, options: RuleOption): Promise<any>;
    /**
     * Clear all query rules of an index
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#clear-all-rules---clearrules
     */
    clearRules(options: RuleOption): Promise<any>;
    /**
     * Get a specific query rule
     * @param identifier
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#get-rule---getrule
     */
    getRule(identifier: string): Promise<any>;
    /**
     * Search for query rules
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#search-rules---searchrules
     */
    searchRules(options: SearchRuleOptions): Promise<any>;
    /**
     * List index user keys
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#list-api-keys---listapikeys
     */
    listApiKeys(): Promise<any>;
    /**
     * Add key for this index
     * @param scopes
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#add-user-key---addapikey
     */
    addApiKey(scopes: string[], options?: AlgoliaApiKeyOptions): Promise<any>;
    /**
     * Update a key for this index
     * @param key
     * @param scopes
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(key: string, scopes: string[]): Promise<any>;
    /**
     * Update a key for this index
     * @param key
     * @param scopes
     * @param options
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#update-user-key---updateapikey
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: AlgoliaApiKeyOptions
    ): Promise<any>;
    /**
     * Gets the rights of an index specific key
     * @param key
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#get-key-permissions---getapikeyacl
     */
    getApiKey(key: string): Promise<any>;
    /**
     * Deletes an index specific key
     * @param key
     * return {Promise}
     * https://github.com/algolia/algoliasearch-client-js#delete-user-key---deleteapikey
     */
    deleteApiKey(key: string): Promise<any>;
  }
  /*
Interface describing available options when initializing a client
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
     * (node only) httpAgent instance to use when communicating with Algolia servers.
     * https://github.com/algolia/algoliasearch-client-js#client-options
     */
    httpAgent?: any;
    /**
     * read: array of read hosts to use to call Algolia servers, computed automatically
     * write: array of read hosts to use to call Algolia servers, computed automatically
     * https://github.com/algolia/algoliasearch-client-js#client-options
     */
    hosts?: { read?: string[]; write?: string[] };
  }
  /*
Interface describing options available for gettings the logs
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
  }
  /**
   * Describe the action object used for batch operation
   */
  interface AlgoliaAction {
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
  interface AlgoliaApiKeyOptions {
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
    queryParameters?: AlgoliaQueryParameters;
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
  interface AlgoliaBrowseResponse {
    cursor?: string;
    hits: any[];
    params: string;
    query: string;
    processingTimeMS: number;
  }
  /**
   * Describes a synonym object
   */
  interface AlgoliaSynonym {
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
  interface AlgoliaRule {
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
  interface AlgoliaSecuredApiOptions {
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

  /**
   * Describes the settings available for configure your index
   */
  interface AlgoliaIndexSettings {
    /**
     * The list of attributes you want index
     * default: *
     * https://github.com/algolia/algoliasearch-client-js#attributestoindex
     */
    attributesToIndex?: string[];
    /**
     * The list of attributes you want to use for faceting
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#attributesforfaceting
     */
    attributesForFaceting?: string[];
    /**
     * The list of attributes that cannot be retrieved at query time
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#unretrievableattributes
     */
    unretrievableAttributes?: string[];
    /**
     * A string that contains the list of attributes you want to retrieve in order to minimize the size of the JSON answer
     * default: *
     * https://github.com/algolia/algoliasearch-client-js#attributestoretrieve
     */
    attributesToRetrieve?: string[];
    /**
     * Controls the way results are sorted
     * default: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom']
     * https://github.com/algolia/algoliasearch-client-js#ranking
     */
    ranking?: string[];
    /**
     * Lets you specify part of the ranking
     * default: []
     * https://github.com/algolia/algoliasearch-client-js#customranking
     */
    customRanking?: string[];
    /**
     * The list of indices on which you want to replicate all write operations
     * default: []
     * https://github.com/algolia/algoliasearch-client-js#replicas
     */
    replicas?: string[];
    /**
     * Limit the number of facet values returned for each facet
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#maxvaluesperfacet
     */
    maxValuesPerFacet?: string;
    /**
     * Default list of attributes to highlight. If set to null, all indexed attributes are highlighted.
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#attributestohighlight
     */
    attributesToHighlight?: string[];
    /**
     * Default list of attributes to snippet alongside the number of words to return
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#attributestosnippet
     */
    attributesToSnippet?: string[];
    /**
     * Specify the string that is inserted before the highlighted parts in the query result
     * default: <em>
     * https://github.com/algolia/algoliasearch-client-js#highlightpretag
     */
    highlightPreTag?: string;
    /**
     * Specify the string that is inserted after the highlighted parts in the query result
     * default: </em>
     * https://github.com/algolia/algoliasearch-client-js#highlightposttag
     */
    highlightPostTag?: string;
    /**
     * String used as an ellipsis indicator when a snippet is truncated.
     * default: …
     * https://github.com/algolia/algoliasearch-client-js#snippetellipsistext
     */
    snippetEllipsisText?: string;
    /**
     * If set to true, restrict arrays in highlights and snippets to items that matched the query at least partially else return all array items in highlights and snippets
     * default: false
     * https://github.com/algolia/algoliasearch-client-js#restricthighlightandsnippetarrays
     */
    restrictHighlightAndSnippetArrays?: boolean;
    /**
     * Pagination parameter used to select the number of hits per page
     * default: 20
     * https://github.com/algolia/algoliasearch-client-js#hitsperpage
     */
    hitsPerPage?: number;
    /**
     * The minimum number of characters needed to accept one typo
     * default: 4
     * https://github.com/algolia/algoliasearch-client-js#minwordsizefor1typo
     */
    minWordSizefor1Typo?: number;
    /**
     * The minimum number of characters needed to accept two typos.
     * default: 8
     * https://github.com/algolia/algoliasearch-client-js#highlightposttag
     */
    minWordSizefor2Typos?: number;
    /**
     * This option allows you to control the number of typos allowed in the result set
     * default: true
     * 'true' The typo tolerance is enabled and all matching hits are retrieved (default behavior).
     * 'false' The typo tolerance is disabled. All results with typos will be hidden.
     * 'min' Only keep results with the minimum number of typos. For example, if one result matches without typos, then all results with typos will be hidden.
     * 'strict' Hits matching with 2 typos are not retrieved if there are some matching without typos.
     * https://github.com/algolia/algoliasearch-client-js#typotolerance
     */
    typoTolerance?: any;
    /**
     * If set to false, disables typo tolerance on numeric tokens (numbers).
     * default: true
     * https://github.com/algolia/algoliasearch-client-js#allowtyposonnumerictokens
     */
    allowTyposOnNumericTokens?: boolean;
    /**
     * If set to true, plural won't be considered as a typo
     * default: false
     * https://github.com/algolia/algoliasearch-client-js#ignoreplurals
     */
    ignorePlurals?: boolean;
    /**
     * List of attributes on which you want to disable typo tolerance
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#disabletypotoleranceonattributes
     */
    disableTypoToleranceOnAttributes?: string;
    /**
     * Specify the separators (punctuation characters) to index.
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#separatorstoindex
     */
    separatorsToIndex?: string;
    /**
     * Selects how the query words are interpreted
     * default: 'prefixLast'
     * 'prefixAll' All query words are interpreted as prefixes. This option is not recommended.
     * 'prefixLast' Only the last word is interpreted as a prefix (default behavior).
     * 'prefixNone' No query word is interpreted as a prefix. This option is not recommended.
     * https://github.com/algolia/algoliasearch-client-js#querytype
     */
    queryType?: any;
    /**
     * This option is used to select a strategy in order to avoid having an empty result page
     * default: 'none'
     * 'lastWords' When a query does not return any results, the last word will be added as optional
     * 'firstWords' When a query does not return any results, the first word will be added as optional
     * 'allOptional' When a query does not return any results, a second trial will be made with all words as optional
     * 'none' No specific processing is done when a query does not return any results
     * https://github.com/algolia/algoliasearch-client-js#removewordsifnoresults
     */
    removeWordsIfNoResults?: string;
    /**
     * Enables the advanced query syntax
     * default: false
     * https://github.com/algolia/algoliasearch-client-js#advancedsyntax
     */
    advancedSyntax?: boolean;
    /**
     * A string that contains the comma separated list of words that should be considered as optional when found in the query
     * default: []
     * https://github.com/algolia/algoliasearch-client-js#optionalwords
     */
    optionalWords?: string[];
    /**
     * Remove stop words from the query before executing it
     * default: false
     * true|false: enable or disable stop words for all 41 supported languages; or
     * a list of language ISO codes (as a comma-separated string) for which stop words should be enable
     * https://github.com/algolia/algoliasearch-client-js#removestopwords
     */
    removeStopWords?: string[];
    /**
     * List of attributes on which you want to disable prefix matching
     * default: []
     * https://github.com/algolia/algoliasearch-client-js#disableprefixonattributes
     */
    disablePrefixOnAttributes?: string[];
    /**
     * List of attributes on which you want to disable the computation of exact criteria
     * default: []
     * https://github.com/algolia/algoliasearch-client-js#disableexactonattributes
     */
    disableExactOnAttributes?: string[];
    /**
     * This parameter control how the exact ranking criterion is computed when the query contains one word
     * default: attribute
     * 'none': no exact on single word query
     * 'word': exact set to 1 if the query word is found in the record
     * 'attribute': exact set to 1 if there is an attribute containing a string equals to the query
     * https://github.com/algolia/algoliasearch-client-js#exactonsinglewordquery
     */
    exactOnSingleWordQuery?: string;
    /**
     * Specify the list of approximation that should be considered as an exact match in the ranking formula
     * default: ['ignorePlurals', 'singleWordSynonym']
     * 'ignorePlurals': alternative words added by the ignorePlurals feature
     * 'singleWordSynonym': single-word synonym (For example "NY" = "NYC")
     * 'multiWordsSynonym': multiple-words synonym
     * https://github.com/algolia/algoliasearch-client-js#alternativesasexact
     */
    alternativesAsExact?: any;
    /**
     * The name of the attribute used for the Distinct feature
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#attributefordistinct
     */
    attributeForDistinct?: string;
    /**
     * If set to 1, enables the distinct feature, disabled by default, if the attributeForDistinct index setting is set.
     * https://github.com/algolia/algoliasearch-client-js#distinct
     */
    distinct?: any;
    /**
     * All numerical attributes are automatically indexed as numerical filters
     * default ''
     * https://github.com/algolia/algoliasearch-client-js#numericattributestoindex
     */
    numericAttributesToIndex?: string[];
    /**
     * Allows compression of big integer arrays.
     * default: false
     * https://github.com/algolia/algoliasearch-client-js#allowcompressionofintegerarray
     */
    allowCompressionOfIntegerArray?: boolean;
    /**
     * Specify alternative corrections that you want to consider.
     * default: []
     * https://github.com/algolia/algoliasearch-client-js#altcorrections
     */
    altCorrections?: [{}];
    /**
     * Configure the precision of the proximity ranking criterion
     * default: 1
     * https://github.com/algolia/algoliasearch-client-js#minproximity
     */
    minProximity?: number;
    /**
     * This is an advanced use-case to define a token substitutable by a list of words without having the original token searchable
     * default: ''
     * https://github.com/algolia/algoliasearch-client-js#placeholders
     */
    placeholders?: any;
  }

  interface AlgoliaQueryParameters {
    /**
     * Query string used to perform the search
     * default: ''
     * https://github.com/algolia/algoliasearch-client-js#query
     */
    query?: string;
    /**
     * Filter the query with numeric, facet or/and tag filters
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#filters
     */
    filters?: string;
    /**
     * A string that contains the list of attributes you want to retrieve in order to minimize the size of the JSON answer.
     * default: *
     * https://github.com/algolia/algoliasearch-client-js#attributestoretrieve
     */
    attributesToRetrieve?: string[];
    /**
     * List of attributes you want to use for textual search
     * default: attributeToIndex
     * https://github.com/algolia/algoliasearch-client-js#restrictsearchableattributes
     */
    restrictSearchableAttributes?: string[];
    /**
     * You can use facets to retrieve only a part of your attributes declared in attributesForFaceting attributes
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#facets
     */
    facets?: string;
    /**
     * Limit the number of facet values returned for each facet.
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#maxvaluesperfacet
     */
    maxValuesPerFacet?: string;
    /**
     * Default list of attributes to highlight. If set to null, all indexed attributes are highlighted.
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#attributestohighlight
     */
    attributesToHighlight?: string[];
    /**
     * Default list of attributes to snippet alongside the number of words to return
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#attributestosnippet
     */
    attributesToSnippet?: string[];
    /**
     * Specify the string that is inserted before the highlighted parts in the query result
     * default: <em>
     * https://github.com/algolia/algoliasearch-client-js#highlightpretag
     */
    highlightPreTag?: string;
    /**
     * Specify the string that is inserted after the highlighted parts in the query result
     * default: </em>
     * https://github.com/algolia/algoliasearch-client-js#highlightposttag
     */
    highlightPostTag?: string;
    /**
     * String used as an ellipsis indicator when a snippet is truncated.
     * default: …
     * https://github.com/algolia/algoliasearch-client-js#snippetellipsistext
     */
    snippetEllipsisText?: string;
    /**
     * If set to true, restrict arrays in highlights and snippets to items that matched the query at least partially else return all array items in highlights and snippets
     * default: false
     * https://github.com/algolia/algoliasearch-client-js#restricthighlightandsnippetarrays
     */
    restrictHighlightAndSnippetArrays?: boolean;
    /**
     * Pagination parameter used to select the number of hits per page
     * default: 20
     * https://github.com/algolia/algoliasearch-client-js#hitsperpage
     */
    hitsPerPage?: number;
    /**
     * Pagination parameter used to select the page to retrieve.
     * default: 0
     * https://github.com/algolia/algoliasearch-client-js#page
     */
    page?: number;
    /**
     * Offset of the first hit to return
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#offset
     */
    offset?: number;
    /**
     * Number of hits to return.
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#length
     */
    length?: number;
    /**
     * The minimum number of characters needed to accept one typo.
     * default: 4
     * https://github.com/algolia/algoliasearch-client-js#minwordsizefor1typo
     */
    minWordSizefor1Typo?: number;
    /**
     * The minimum number of characters needed to accept two typo.
     * fault: 8
     * https://github.com/algolia/algoliasearch-client-js#minwordsizefor2typos
     */
    minWordSizefor2Typos?: number;
    /**
     * This option allows you to control the number of typos allowed in the result set:
     * default: true
     * 'true' The typo tolerance is enabled and all matching hits are retrieved
     * 'false' The typo tolerance is disabled. All results with typos will be hidden.
     * 'min' Only keep results with the minimum number of typos
     * 'strict' Hits matching with 2 typos are not retrieved if there are some matching without typos.
     * https://github.com/algolia/algoliasearch-client-js#minwordsizefor2typos
     */
    typoTolerance?: boolean;
    /**
     * If set to false, disables typo tolerance on numeric tokens (numbers).
     * default:
     * https://github.com/algolia/algoliasearch-client-js#allowtyposonnumerictokens
     */
    allowTyposOnNumericTokens?: boolean;
    /**
     * If set to true, plural won't be considered as a typo
     * default: false
     * https://github.com/algolia/algoliasearch-client-js#ignoreplurals
     */
    ignorePlurals?: boolean;
    /**
     * List of attributes on which you want to disable typo tolerance
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#disabletypotoleranceonattributes
     */
    disableTypoToleranceOnAttributes?: string;
    /**
     * Search for entries around a given location
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#aroundlatlng
     */
    aroundLatLng?: string;
    /**
     * Search for entries around a given latitude/longitude automatically computed from user IP address.
     * default: ""
     * https://github.com/algolia/algoliasearch-client-js#aroundlatlngviaip
     */
    aroundLatLngViaIP?: string;
    /**
     * Control the radius associated with a geo search. Defined in meters.
     * default: null
     * You can specify aroundRadius=all if you want to compute the geo distance without filtering in a geo area
     * https://github.com/algolia/algoliasearch-client-js#aroundradius
     */
    aroundRadius?: number | 'all';
    /**
     * Control the precision of a geo search
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#aroundprecision
     */
    aroundPrecision?: number;
    /**
     * Define the minimum radius used for a geo search when aroundRadius is not set.
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#minimumaroundradius
     */
    minimumAroundRadius?: number;
    /**
     * Search entries inside a given area defined by the two extreme points of a rectangle
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#insideboundingbox
     */
    insideBoundingBox?: number[][];
    /**
     * Selects how the query words are interpreted
     * default: 'prefixLast'
     * 'prefixAll' All query words are interpreted as prefixes. This option is not recommended.
     * 'prefixLast' Only the last word is interpreted as a prefix (default behavior).
     * 'prefixNone' No query word is interpreted as a prefix. This option is not recommended.
     * https://github.com/algolia/algoliasearch-client-js#querytype
     */
    queryType?: any;
    /**
     * Search entries inside a given area defined by a set of points
     * defauly: ''
     * https://github.com/algolia/algoliasearch-client-js#insidepolygon
     */
    insidePolygon?: number[][];
    /**
     * This option is used to select a strategy in order to avoid having an empty result page
     * default: 'none'
     * 'lastWords' When a query does not return any results, the last word will be added as optional
     * 'firstWords' When a query does not return any results, the first word will be added as optional
     * 'allOptional' When a query does not return any results, a second trial will be made with all words as optional
     * 'none' No specific processing is done when a query does not return any results
     * https://github.com/algolia/algoliasearch-client-js#removewordsifnoresults
     */
    removeWordsIfNoResults?: string;
    /**
     * Enables the advanced query syntax
     * default: false
     * https://github.com/algolia/algoliasearch-client-js#advancedsyntax
     */
    advancedSyntax?: boolean;
    /**
     * A string that contains the comma separated list of words that should be considered as optional when found in the query
     * default: []
     * https://github.com/algolia/algoliasearch-client-js#optionalwords
     */
    optionalWords?: string[];
    /**
     * Remove stop words from the query before executing it
     * default: false
     * true|false: enable or disable stop words for all 41 supported languages; or
     * a list of language ISO codes (as a comma-separated string) for which stop words should be enable
     * https://github.com/algolia/algoliasearch-client-js#removestopwords
     */
    removeStopWords?: string[];
    /**
     * List of attributes on which you want to disable the computation of exact criteria
     * default: []
     * https://github.com/algolia/algoliasearch-client-js#disableexactonattributes
     */
    disableExactOnAttributes?: string[];
    /**
     * This parameter control how the exact ranking criterion is computed when the query contains one word
     * default: attribute
     * 'none': no exact on single word query
     * 'word': exact set to 1 if the query word is found in the record
     * 'attribute': exact set to 1 if there is an attribute containing a string equals to the query
     * https://github.com/algolia/algoliasearch-client-js#exactonsinglewordquery
     */
    exactOnSingleWordQuery?: string;
    /**
     * Specify the list of approximation that should be considered as an exact match in the ranking formula
     * default: ['ignorePlurals', 'singleWordSynonym']
     * 'ignorePlurals': alternative words added by the ignorePlurals feature
     * 'singleWordSynonym': single-word synonym (For example "NY" = "NYC")
     * 'multiWordsSynonym': multiple-words synonym
     * https://github.com/algolia/algoliasearch-client-js#alternativesasexact
     */
    alternativesAsExact?: any;
    /**
     * If set to 1, enables the distinct feature, disabled by default, if the attributeForDistinct index setting is set.
     * https://github.com/algolia/algoliasearch-client-js#distinct
     */
    distinct?: any;
    /**
     * If set to true, the result hits will contain ranking information in the _rankingInfo attribute.
     * default: false
     * https://github.com/algolia/algoliasearch-client-js#getrankinginfo
     */
    getRankingInfo?: boolean;
    /**
     * All numerical attributes are automatically indexed as numerical filters
     * default: ''
     * https://github.com/algolia/algoliasearch-client-js#numericattributestoindex
     */
    numericAttributesToIndex?: string[];
    /**
     * @deprecated please use filters instead
     * A string that contains the comma separated list of numeric filters you want to apply.
     * https://github.com/algolia/algoliasearch-client-js#numericfilters-deprecated
     */
    numericFilters?: string[];
    /**
     * @deprecated
     * Filter the query by a set of tags.
     * https://github.com/algolia/algoliasearch-client-js#tagfilters-deprecated
     */
    tagFilters?: string;
    /**
     * @deprecated
     * Filter the query by a set of facets.
     * https://github.com/algolia/algoliasearch-client-js#facetfilters-deprecated
     */
    facetFilters?: string;
    /**
     * If set to false, this query will not be taken into account in the analytics feature.
     * default true
     * https://github.com/algolia/algoliasearch-client-js#analytics
     */
    analytics?: boolean;
    /**
     * If set, tag your query with the specified identifiers
     * default: null
     * https://github.com/algolia/algoliasearch-client-js#analyticstags
     */
    analyticsTags?: string[];
    /**
     * If set to false, the search will not use the synonyms defined for the targeted index.
     * default: true
     * https://github.com/algolia/algoliasearch-client-js#synonyms
     */
    synonyms?: boolean;
    /**
     * If set to false, words matched via synonym expansion will not be replaced by the matched synonym in the highlighted result.
     * default: true
     * https://github.com/algolia/algoliasearch-client-js#replacesynonymsinhighlight
     */
    replaceSynonymsInHighlight?: boolean;
    /**
     * Configure the precision of the proximity ranking criterion
     * default: 1
     * https://github.com/algolia/algoliasearch-client-js#minproximity
     */
    minProximity?: number;
  }
}

declare function algoliasearch(
  applicationId: string,
  apiKey: string,
  options?: algoliasearch.ClientOptions
): algoliasearch.AlgoliaClient;
export = algoliasearch;
