// Type definitions for algoliasearch-client-javascript 3.34.0
// Project: https://github.com/algolia/algoliasearch-client-javascript
// Definitions by: Baptiste Coquelle <https://github.com/cbaptiste>
//                 Haroen Viaene <https://github.com/haroenv>
//                 Samuel Vaillant <https://github.com/samouss>
//                 Kai Eichinger <https://github.com/keichinger>
//                 Nery Ortez <https://github.com/neryortez>
//                 Antoine Rousseau <https://github.com/antoinerousseau>
//                 Luca Pasquale <https://github.com/lucapasquale>
//                 Alexandre Deve <https://github.com/adeve>
//                 Dan Grayson <https://github.com/dan-grayson>
//                 Peter Esenwa <https://github.com/PeterEsenwa>
//                 Samuel Bodin <https://github.com/bodinsamuel>
//                 Richard Scotten <https://github.com/rscotten>
//                 Chris Moyer <https://github.com/kopertio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

declare namespace algoliasearch {
  /**
   * Interface for the algolia client object
   */
  interface Client {
    /**
     * Initialization of the index
     */
    initIndex(indexName: string): Index;
    /**
     * Query on multiple index
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
     */
    clearCache(): void;
    /**
     * kill alive connections
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
     */
    listIndexes(cb: (err: Error, res: any) => void): void;
    /**
     * List all your indices along with their associated information (number of entries, disk size, etc.)
     */
    listIndexes(): Promise<any>;
    /**
     * Delete a specific index
     */
    deleteIndex(name: string, cb: (err: Error, res: Task) => void): void;
    /**
     * Delete a specific index
     */
    deleteIndex(name: string): Promise<Task>;
    /**
     * Copy an index from a specific index to a new one
     */
    copyIndex(
      from: string,
      to: string,
      cb: (err: Error, res: UpdateIndexTask) => void
    ): void;
    /**
     * Copy settings of an index from a specific index to a new one
     */
    copyIndex(
      from: string,
      to: string,
      scope: ('settings' | 'synonyms' | 'rules')[],
      cb: (err: Error, res: UpdateIndexTask) => void
    ): void;
    /**
     * Copy settings of an index from a specific index to a new one
     */
    copyIndex(
      from: string,
      to: string,
      scope?: ('settings' | 'synonyms' | 'rules')[]
    ): Promise<UpdateIndexTask>;
    /**
     * Move index to a new one (and will overwrite the original one)
     */
    moveIndex(
      from: string,
      to: string,
      cb: (err: Error, res: UpdateIndexTask) => void
    ): void;
    /**
     * Move index to a new one (and will overwrite the original one)
     */
    moveIndex(from: string, to: string): Promise<UpdateIndexTask>;
    /**
     * Generate a public API key
     */
    generateSecuredApiKey(key: string, filters: SecuredApiOptions): string;
    /**
     * Perform multiple operations with one API call to reduce latency
     */
    batch(action: Action[], cb: (err: Error, res: BatchTask) => void): void;
    /**
     * Perform multiple operations with one API call to reduce latency
     */
    batch(action: Action[]): Promise<BatchTask>;
    /**
     * Lists global API Keys
     */
    listApiKeys(cb: (err: Error, res: ApiKey[]) => void): void;
    /**
     * Lists global API Keys
     */
    listApiKeys(): Promise<ApiKey[]>;
    /**
     * Add global API Keys
     */
    addApiKey(
      scopes: string[],
      cb: (err: Error, res: AddApiKeyTask) => void
    ): void;
    /**
     * Add global API Key
     */
    addApiKey(
      scopes: string[],
      options: ApiKeyOptions,
      cb: (err: Error, res: AddApiKeyTask) => void
    ): void;
    /**
     * Add global API Keys
     */
    addApiKey(
      scopes: string[],
      options?: ApiKeyOptions
    ): Promise<AddApiKeyTask>;
    /**
     * Update global API key
     */
    updateApiKey(
      key: string,
      scopes: string[],
      cb: (err: Error, res: UpdateApiKeyTask) => void
    ): void;
    /**
     * Update global API key
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: ApiKeyOptions,
      cb: (err: Error, res: UpdateApiKeyTask) => void
    ): void;
    /**
     * Update global API key
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options?: ApiKeyOptions
    ): Promise<UpdateApiKeyTask>;
    /**
     * Gets the rights of a global key
     */
    getApiKey(key: string, cb: (err: Error, res: ApiKey) => void): void;
    /**
     * Gets the rights of a global key
     */
    getApiKey(key: string): Promise<ApiKey>;
    /**
     * Deletes a global key
     */
    deleteApiKey(
      key: string,
      cb: (err: Error, res: DeleteApiKeyTask) => void
    ): void;
    /**
     * Deletes a global key
     */
    deleteApiKey(key: string): Promise<DeleteApiKeyTask>;
    /**
     * Get 1000 last events
     */
    getLogs(
      options: LogsOptions,
      cb: (err: Error, res: { logs: Log[] }) => void
    ): void;
    /**
     * Get 1000 last events
     */
    getLogs(options: LogsOptions): Promise<{ logs: Log[] }>;
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
     */
    getObject(objectID: string, cb: (err: Error, res: {}) => void): void;
    /**
     * Gets specific attributes from an object
     */
    getObject(
      objectID: string,
      attributes: string[],
      cb: (err: Error, res: {}) => void
    ): void;
    /**
     * Gets a list of objects
     */
    getObjects(
      objectIDs: string[],
      cb: (err: Error, res: { results: {}[] }) => void
    ): void;
    /**
     * Add a specific object
     */
    addObject(object: {}, cb: (err: Error, res: Task) => void): void;
    /**
     * Add a list of objects
     */
    addObject(
      object: {},
      objectID: string,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Add list of objects
     */
    addObjects(objects: {}[], cb: (err: Error, res: MultiObjectTask) => void): void;
    /**
     * Add list of objects
     */
    addObjects(objects: {}[]): Promise<MultiObjectTask>;
    /**
     * Add or replace a specific object
     */
    saveObject(object: {}, cb: (err: Error, res: Task) => void): void;
    /**
     * Add or replace several objects
     */
    saveObjects(objects: object[], cb: (err: Error, res: Task) => void): void;
    /**
     * Update parameters of a specific object
     */
    partialUpdateObject(object: {}, cb: (err: Error, res: Task) => void): void;
    partialUpdateObject(object: {}, createIfNotExists: boolean, cb: (err: Error, res: Task) => void): void;
    /**
     * Update parameters of a list of objects
     */
    partialUpdateObjects(objects: {}[], cb: (err: Error, res: Task) => void): void;
    partialUpdateObjects(objects: {}[], createIfNotExists: boolean, cb: (err: Error, res: Task) => void): void;
    /**
     * Delete a specific object
     */
    deleteObject(objectID: string, cb: (err: Error, res: Task) => void): void;
    /**
     * Delete a list of objects
     */
    deleteObjects(
      objectIDs: string[],
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Delete objects that matches the query
     */
    deleteByQuery(query: string, cb: (err: Error, res: any) => void): void;
    /**
     * Delete objects that matches the query
     */
    deleteByQuery(
      query: string,
      params: {},
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Delete objects that matches the query
     */
    deleteBy(params: {}, cb: (err: Error, res: Task) => void): void;
    /**
     * Wait for an indexing task to be compete
     */
    waitTask(taskID: number, cb: (err: Error, res: TaskStatus) => void): void;
    /**
     * Get an index settings
     */
    getSettings(cb: (err: Error, res: IndexSettings) => void): void;
    /**
     * Set an index settings
     */
    setSettings(
      settings: IndexSettings,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Set an index settings
     */
    setSettings(
      settings: IndexSettings,
      extra: { forwardToReplicas: boolean },
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Clear cache of an index
     */
    clearCache(): void;
    /**
     * Clear an index content
     */
    clearIndex(cb: (err: Error, res: Task) => void): void;
    /**
     * Save a synonym object
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
     */
    deleteSynonym(
      identifier: string,
      options: SynonymOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Clear all synonyms of an index
     */
    clearSynonyms(
      options: SynonymOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Get a specific synonym
     */
    getSynonym(
      identifier: string,
      cb: (err: Error, res: Synonym) => void
    ): void;
    /**
     * Search a synonyms
     */
    searchSynonyms(
      options: SearchSynonymOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * Save a rule object
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
     */
    deleteRule(
      identifier: string,
      options: RuleOption,
      cb: (err: Error, res: Task) => void
    ): void;
    /**
     * Clear all rules of an index
     */
    clearRules(options: RuleOption, cb: (err: Error, res: Task) => void): void;
    /**
     * Get a specific rule
     */
    getRule(identifier: string, cb: (err: Error, res: Rule) => void): void;
    /**
     * Search a rules
     */
    searchRules(
      options: SearchRuleOptions,
      cb: (err: Error, res: any) => void
    ): void;
    /**
     * List index user keys
     */
    listApiKeys(cb: (err: Error, res: ApiKey[]) => void): void;
    /**
     * Add key for this index
     */
    addApiKey(
      scopes: string[],
      cb: (err: Error, res: AddApiKeyTask) => void
    ): void;
    /**
     * Add key for this index
     */
    addApiKey(
      scopes: string[],
      options: ApiKeyOptions,
      cb: (err: Error, res: AddApiKeyTask) => void
    ): void;
    /**
     * Update a key for this index
     */
    updateApiKey(
      key: string,
      scopes: string[],
      cb: (err: Error, res: UpdateApiKeyTask) => void
    ): void;
    /**
     * Update a key for this index
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: ApiKeyOptions,
      cb: (err: Error, res: UpdateApiKeyTask) => void
    ): void;
    /**
     * Gets the rights of an index specific key
     */
    getApiKey(key: string, cb: (err: Error, res: ApiKey) => void): void;
    /**
     * Deletes an index specific key
     */
    deleteApiKey(
      key: string,
      cb: (err: Error, res: DeleteApiKeyTask) => void
    ): void;
    /**
     * Gets specific attributes from an object
     */
    getObject(objectID: string, attributes?: string[]): Promise<{}>;
    /**
     * Gets a list of objects
     */
    getObjects(objectIDs: string[]): Promise<{ results: {}[] }>;
    /**
     * Add a list of objects
     */
    addObject(object: {}, objectID?: string): Promise<Task>;
    /**
     * Add list of objects
     */
    addObjects(objects: {}[]): Promise<Task>;
    /**
     * Add or replace a specific object
     */
    saveObject(object: {}): Promise<Task>;
    /**
     * Add or replace several objects
     */
    saveObjects(objects: object[]): Promise<Task>;
    /**
     * Update parameters of a specific object
     */
    partialUpdateObject(object: {}): Promise<Task>;
    partialUpdateObject(object: {}, createIfNotExists: boolean): Promise<Task>;
    /**
     * Update parameters of a list of objects
     */
    partialUpdateObjects(objects: {}[]): Promise<Task>;
    partialUpdateObjects(objects: {}[], createIfNotExists?: boolean): Promise<Task>;
    /**
     * Delete a specific object
     */
    deleteObject(objectID: string): Promise<Task>;
    /**
     * Delete a list of objects
     */
    deleteObjects(objectIDs: string[]): Promise<Task>;
    /**
     * Delete objects that matches the query
     */
    deleteByQuery(query: string, params?: {}): Promise<any>;
    /**
     * Delete objects that matches the query
     */
    deleteBy(params: {}): Promise<Task>;
    /**
     * Wait for an indexing task to be compete
     */
    waitTask(taskID: number): Promise<TaskStatus>;
    /**
     * Get an index settings
     */
    getSettings(): Promise<IndexSettings>;
    /**
     * Set an index settings
     */
    setSettings(settings: IndexSettings, extra?: { forwardToReplicas: boolean }): Promise<Task>;
    /**
     * Search in an index
     */
    search<T=any>(params: QueryParameters): Promise<Response<T>>;
    /**
     * Search in an index
     */
    search<T=any>(
      params: QueryParameters,
      cb: (err: Error, res: Response<T>) => void
    ): void;
    /**
     * Search in an index
     */
    searchForFacetValues(
      options: SearchForFacetValues.Parameters
    ): Promise<SearchForFacetValues.Response>;
    /**
     * Search in an index
     */
    searchForFacetValues(
      options: SearchForFacetValues.Parameters,
      cb: (err: Error, res: SearchForFacetValues.Response) => void
    ): void;
    /**
     * Browse an index
     */
    browse(query: string, parameters: BrowseParameters, cb: (err: Error, res: BrowseResponse) => void): void;
    /**
     * Browse an index
     */
    browse(query: string, cb: (err: Error, res: BrowseResponse) => void): void;
    /**
     * Browse an index
     */
    browse(query: string, parameters?: BrowseParameters): Promise<BrowseResponse>;
    /**
     * Browse an index from a cursor
     */
    browseFrom(
      cursor: string,
      cb: (err: Error, res: BrowseResponse) => void
    ): void;
    /**
     * Browse an index from a cursor
     */
    browseFrom(cursor: string): Promise<BrowseResponse>;
    /**
     * Browse an entire index
     */
    browseAll(query?: string, parameters?: BrowseParameters): Browser;
    /**
     * Clear an index content
     */
    clearIndex(): Promise<Task>;
    /**
     * Save a synonym object
     */
    saveSynonym(synonym: Synonym, options: SynonymOption): Promise<Task>;
    /**
     * Save a synonym object
     */
    batchSynonyms(synonyms: Synonym[], options: SynonymOption): Promise<Task>;
    /**
     * Delete a specific synonym
     */
    deleteSynonym(objectID: string, options: SynonymOption): Promise<Task>;
    /**
     * Clear all synonyms of an index
     */
    clearSynonyms(options: SynonymOption): Promise<Task>;
    /**
     * Get a specific synonym
     */
    getSynonym(objectID: string): Promise<Synonym>;
    /**
     * Search a synonyms
     */
    searchSynonyms(options: SearchSynonymOptions): Promise<any>;
    /**
     * Save a rule object
     */
    saveRule(rule: Rule, options: RuleOption): Promise<Task>;
    /**
     * Save a rule object
     */
    batchRules(rules: Rule[], options: RuleOption): Promise<Task>;
    /**
     * Delete a specific rule
     */
    deleteRule(identifier: string, options: RuleOption): Promise<Task>;
    /**
     * Clear all query rules of an index
     */
    clearRules(options: RuleOption): Promise<Task>;
    /**
     * Get a specific query rule
     */
    getRule(identifier: string): Promise<Rule>;
    /**
     * Search for query rules
     */
    searchRules(options: SearchRuleOptions): Promise<any>;
    /**
     * List index user keys
     */
    listApiKeys(): Promise<ApiKey[]>;
    /**
     * Add key for this index
     */
    addApiKey(
      scopes: string[],
      options?: ApiKeyOptions
    ): Promise<AddApiKeyTask>;
    /**
     * Update a key for this index
     */
    updateApiKey(key: string, scopes: string[]): Promise<UpdateApiKeyTask>;
    /**
     * Update a key for this index
     */
    updateApiKey(
      key: string,
      scopes: string[],
      options: ApiKeyOptions
    ): Promise<UpdateApiKeyTask>;
    /**
     * Gets the rights of an index specific key
     */
    getApiKey(key: string): Promise<ApiKey>;
    /**
     * Deletes an index specific key
     */
    deleteApiKey(key: string): Promise<DeleteApiKeyTask>;
  }
  /**
   * Interface describing available options when initializing a client
   */
  interface ClientOptions {
    /**
     * Timeout for requests to our servers, in milliseconds
     * default: 15s (node), 2s (browser)
     */
    timeout?: number;
    /**
     * Protocol to use when communicating with algolia
     * default: current protocol(browser), https(node)
     */
    protocol?: string;
    /**
     * (node only) httpAgent instance to use when communicating with  servers.
     */
    httpAgent?: any;
    /**
     * read: array of read hosts to use to call  servers, computed automatically
     * write: array of read hosts to use to call  servers, computed automatically
     */
    hosts?: { read?: string[]; write?: string[] };
    /**
     * enable the experimental feature: caching requests instead of responses
     */
    _useRequestCache?: boolean
  }
  /**
   * Interface describing options available for gettings the logs
   */
  interface LogsOptions {
    /**
     * Specify the first entry to retrieve (0-based, 0 is the most recent log entry).
     * default: 0
     */
    offset?: number;
    /**
     * Specify the maximum number of entries to retrieve starting at the offset.
     * default: 10
     * maximum: 1000
     */
    length?: number;
    /**
     * @deprecated
     * Retrieve only logs with an HTTP code different than 200 or 201
     */
    onlyErrors?: boolean;
    /**
     * Specify the type of logs to retrieve
     * 'query' Retrieve only the queries
     * 'build' Retrieve only the build operations
     * 'error' Retrieve only the errors (same as onlyErrors parameters)
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
     */
    indexName: string;
    /**
     * Object
     */
    body: {};
  }
  /**
   * Describes the option used when creating user key
   */
  interface ApiKeyOptions {
    /**
     * Add a validity period. The key will be valid for a specific period of time (in seconds).
     */
    validity?: number;
    /**
     * Specify the maximum number of API calls allowed from an IP address per hour
     */
    maxQueriesPerIPPerHour?: number;
    /**
     * Specify the maximum number of hits this API key can retrieve in one call
     */
    maxHitsPerQuery?: boolean;
    /**
     * Specify the list of targeted indices
     */
    indexes?: string[];
    /**
     * Specify the list of referers
     */
    referers?: string[];
    /**
     * Specify the list of query parameters
     */
    queryParameters?: QueryParameters;
    /**
     * Specify a description to describe where the key is used.
     */
    description?: string;
  }
  /**
   * Describes option used when making operation on synonyms
   */
  interface SynonymOption {
    /**
     * You can forward all settings updates to the replicas of an index
     */
    forwardToReplicas?: boolean;
    /**
     * Replace all existing synonyms on the index with the content of the batch
     */
    replaceExistingSynonyms?: boolean;
  }
  /**
   * Describes options used when searching for synonyms
   */
  interface SearchSynonymOptions {
    /**
     * The actual search query to find synonyms
     */
    query?: string;
    /**
     * The page to fetch when browsing through several pages of results
     * default: 0
     */
    page?: number;
    /**
     * Restrict the search to a specific type of synonym
     * Use an empty string to search all types (default behavior)
     */
    type?: string;
    /**
     * Number of hits per page
     * default: 100
     */
    hitsPerPage?: number;
  }
  /**
   * Describes option used when making operation on query rules
   */
  interface RuleOption {
    /**
     * You can forward all settings updates to the replicas of an index
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
  type BrowseParameters = Omit<
    QueryParameters,
    | "typoTolerance"
    | "distinct"
    | "facets"
    | "getRankingInfo"
    | "attributesToHighlight"
    | "attributesToSnippet"
  >
  interface Browser {
    on(type: "error", cb: (err: Error) => void): void
    on(type: "end", cb: () => void): void
    on(type: "stop", cb: () => void): void
    on(type: "result", cb: (content: BrowseResponse) => void): void
    stop(): void
  }
  /**
   * Describes a synonym object
   */
  interface Synonym {
    /**
     * ObjectID of the synonym
     */
    objectID: string;
    /**
     * Type of synonym
     */
    type: 'synonym' | 'oneWaySynonym';
    /**
     * Values used for the synonym
     */
    synonyms: string[];
  }
  /**
   * Describes a query rule object
   */
  interface Rule {
    /**
     * ObjectID of the synonym
     */
    objectID: string;
    /**
     * Condition of the rule
     */
    condition?: {
      /**
       * Query pattern
       */
      pattern?: string;
      /**
       * Whether the pattern must match the beginning or the end of the query string, or both, or none.
       */
      anchoring?: 'is' | 'startsWith' | 'endsWith' | 'contains';
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
   *
   * @see https://www.algolia.com/doc/api-reference/api-methods/generate-secured-api-key/
   */
  interface SecuredApiOptions extends QueryParameters {
    /**
     * Filter the query with numeric, facet or/and tag filters
     * default: ""
     */
    filters?: string;
    /**
     * Defines the expiration date of the API key
     */
    validUntil?: number;
    /**
     * Restricts the key to a list of index names allowed for the secured API key
     */
    restrictIndices?: string | string[];
    /**
     * Allows you to restrict a single user to performing a maximum of N API calls per hour
     */
    userToken?: string;
  }
  interface QueryParameters {
   /**
    * Query string used to perform the search
    * default: ''
    */
   query?: string;
   /**
    * Filter the query with numeric, facet or/and tag filters
    * default: ""
    */
   filters?: string;
   /**
    * A string that contains the list of attributes you want to retrieve in order to minimize the size of the JSON answer.
    * default: *
    */
   attributesToRetrieve?: string[];
   /**
    * List of attributes you want to use for textual search
    * default: attributeToIndex
    */
   restrictSearchableAttributes?: string[];
   /**
    * You can use facets to retrieve only a part of your attributes declared in attributesForFaceting attributes
    * default: []
    */
   facets?: string[];
    /**
    * Force faceting to be applied after de-duplication (via the Distinct setting).
    * When using the distinct setting in combination with faceting, facet counts may be higher than expected.
    * This is because the engine, by default, computes faceting before applying de-duplication (distinct).
    * When facetingAfterDistinct is set to true, the engine calculates faceting after the de-duplication has been applied.
    * default ""
    */
    facetingAfterDistinct?: boolean;
    /**
     * Limit the number of facet values returned for each facet.
     * default: 100
     */
    maxValuesPerFacet?: number;
    /**
     * Default list of attributes to highlight. If set to null, all indexed attributes are highlighted.
     * default: null
     */
    attributesToHighlight?: string[];
    /**
     * Default list of attributes to snippet alongside the number of words to return
     * default: null
     */
    attributesToSnippet?: string[];
    /**
     * Specify the string that is inserted before the highlighted parts in the query result
     * default: <em>
     */
    highlightPreTag?: string;
    /**
     * Specify the string that is inserted after the highlighted parts in the query result
     * default: </em>
     */
    highlightPostTag?: string;
    /**
     * String used as an ellipsis indicator when a snippet is truncated.
     * default: …
     */
    snippetEllipsisText?: string;
    /**
     * If set to true, restrict arrays in highlights and snippets to items that matched the query at least partially else return all array items in highlights and snippets
     * default: false
     */
    restrictHighlightAndSnippetArrays?: boolean;
    /**
     * Pagination parameter used to select the number of hits per page
     * default: 20
     */
    hitsPerPage?: number;
    /**
     * Pagination parameter used to select the page to retrieve.
     * default: 0
     */
    page?: number;
    /**
     * Offset of the first hit to return
     * default: null
     */
    offset?: number;
    /**
     * Number of hits to return.
     * default: null
     */
    length?: number;
    /**
     * The minimum number of characters needed to accept one typo.
     * default: 4
     */
    minWordSizefor1Typo?: number;
    /**
     * The minimum number of characters needed to accept two typo.
     * fault: 8
     */
    minWordSizefor2Typos?: number;
    /**
     * This option allows you to control the number of typos allowed in the result set:
     * default: true
     * 'true' The typo tolerance is enabled and all matching hits are retrieved
     * 'false' The typo tolerance is disabled. All results with typos will be hidden.
     * 'min' Only keep results with the minimum number of typos
     * 'strict' Hits matching with 2 typos are not retrieved if there are some matching without typos.
     */
    typoTolerance?: boolean | 'min' | 'strict';
    /**
     * If set to false, disables typo tolerance on numeric tokens (numbers).
     * default:
     */
    allowTyposOnNumericTokens?: boolean;
    /**
     * If set to true, plural won't be considered as a typo
     * default: false
     */
    ignorePlurals?: boolean;
    /**
     * List of attributes on which you want to disable typo tolerance
     * default: []
     */
    disableTypoToleranceOnAttributes?: string[];
    /**
     * Search for entries around a given location
     * default: ""
     */
    aroundLatLng?: string;
    /**
     * Search for entries around a given latitude/longitude automatically computed from user IP address.
     * default: ""
     */
    aroundLatLngViaIP?: boolean;
    /**
     * Control the radius associated with a geo search. Defined in meters.
     * default: null
     * You can specify aroundRadius=all if you want to compute the geo distance without filtering in a geo area
     */
    aroundRadius?: number | 'all';
    /**
     * Control the precision of a geo search
     * default: null
     */
    aroundPrecision?: number;
    /**
     * Define the minimum radius used for a geo search when aroundRadius is not set.
     * default: null
     */
    minimumAroundRadius?: number;
    /**
     * Search entries inside a given area defined by the two extreme points of a rectangle
     * default: null
     */
    insideBoundingBox?: number[][];
    /**
     * Selects how the query words are interpreted
     * default: 'prefixLast'
     * 'prefixAll' All query words are interpreted as prefixes. This option is not recommended.
     * 'prefixLast' Only the last word is interpreted as a prefix (default behavior).
     * 'prefixNone' No query word is interpreted as a prefix. This option is not recommended.
     */
    queryType?: "prefixAll"|"prefixLast"|"prefixNone";
    /**
     * Search entries inside a given area defined by a set of points
     * defauly: ''
     */
    insidePolygon?: number[][];
    /**
     * This option is used to select a strategy in order to avoid having an empty result page
     * default: 'none'
     * 'lastWords' When a query does not return any results, the last word will be added as optional
     * 'firstWords' When a query does not return any results, the first word will be added as optional
     * 'allOptional' When a query does not return any results, a second trial will be made with all words as optional
     * 'none' No specific processing is done when a query does not return any results
     */
    removeWordsIfNoResults?: "none"|"lastWords"|"firstWords"|"allOptional";
    /**
     * Enables the advanced query syntax
     * default: false
     */
    advancedSyntax?: boolean;
    /**
     * A string that contains the comma separated list of words that should be considered as optional when found in the query
     * default: []
     */
    optionalWords?: string[];
    /**
     * Determines how to calculate the total score for filtering
     * default: false
     * https://www.algolia.com/doc/api-reference/api-parameters/sumOrFiltersScores/
     */
    sumOrFiltersScores?: boolean;
    /**
     * Remove stop words from the query before executing it
     * default: false
     * true|false: enable or disable stop words for all 41 supported languages; or
     * a list of language ISO codes (as a comma-separated string) for which stop words should be enable
     */
    removeStopWords?: boolean|string[];
    /**
     * List of attributes on which you want to disable the computation of exact criteria
     * default: []
     */
    disableExactOnAttributes?: string[];
    /**
     * This parameter control how the exact ranking criterion is computed when the query contains one word
     * default: attribute
     * 'none': no exact on single word query
     * 'word': exact set to 1 if the query word is found in the record
     * 'attribute': exact set to 1 if there is an attribute containing a string equals to the query
     */
    exactOnSingleWordQuery?: "attribute"|"none"|"word";
    /**
     * Specify the list of approximation that should be considered as an exact match in the ranking formula
     * default: ['ignorePlurals', 'singleWordSynonym']
     * 'ignorePlurals': alternative words added by the ignorePlurals feature
     * 'singleWordSynonym': single-word synonym (For example "NY" = "NYC")
     * 'multiWordsSynonym': multiple-words synonym
     */
    alternativesAsExact?: Array<"ignorePlurals"|"singleWordSynonym"|"multiWordsSynonym">;
    /**
     * If set to 1, enables the distinct feature, disabled by default, if the attributeForDistinct index setting is set.
     */
    distinct?: number|boolean;
    /**
     * If set to true, the result hits will contain ranking information in the _rankingInfo attribute.
     * default: false
     */
    getRankingInfo?: boolean;
    /**
     * @deprecated Use `numericAttributesForFiltering` instead
     * All numerical attributes are automatically indexed as numerical filters
     */
    numericAttributesToIndex?: string[];
    /**
     * All numerical attributes are automatically indexed as numerical filters
     */
    numericAttributesForFiltering?: string[];
    /**
     * @deprecated please use filters instead
     * A string that contains the comma separated list of numeric filters you want to apply.
     */
    numericFilters?: string[];
    /**
     * @deprecated
     *
     * Filter the query by a set of tags.
     * Default: []
     */
    tagFilters?: (string|string[])[];
    /**
     * Filter the query by a set of facets.
     * Default: []
     */
    facetFilters?: Array<string|string[]>;
    /**
     * If set to false, this query will not be taken into account in the analytics feature.
     * default true
     */
    analytics?: boolean;
    /**
     * If set to true, enables the Click Analytics feature
     * default false
     */
    clickAnalytics?: boolean;
    /**
     * If set, tag your query with the specified identifiers
     * default: []
     */
    analyticsTags?: string[];
    /**
     * If set to false, the search will not use the synonyms defined for the targeted index.
     * default: true
     */
    synonyms?: boolean;
    /**
     * If set to false, words matched via synonym expansion will not be replaced by the matched synonym in the highlighted result.
     * default: true
     */
    replaceSynonymsInHighlight?: boolean;
    /**
     * Configure the precision of the proximity ranking criterion
     * default: 1
     */
    minProximity?: number;

    nbShards?: number;
    userData?: string | object;
    /**
     * Associates a certain user token with the current search
     * https://www.algolia.com/doc/api-reference/api-parameters/userToken/
     */
    userToken?: string;

    sortFacetValuesBy?: 'count' | 'alpha';

    ruleContexts?: string[];

    /**
     * allow the usage of an AB-test. This parameter is only allowed for queries, not for settings.
     * default: true
     */
    enableABTest?: boolean;
  }

  namespace SearchForFacetValues {
    interface Parameters extends QueryParameters {
      /**
       * The facet to search in
       */
      facetName: string;
      /**
       * The query for the search in this facet
       */
      facetQuery: string;
      /**
       * The maximum number of facets to fetch
       */
      maxFacetHits?: number;
    }

    interface Response {
      facetHits: { value: string; highlighted: string; count: number }[];
      exhaustiveFacetsCount: boolean;
      processingTimeMS: number;
    }
  }

  interface Log {
    timestamp: string;
    method: string;
    answer_code: number;
    query_body: string;
    answer: string;
    url: string;
    ip: string;
    query_headers: string;
    sha1: string;
    nb_api_calls: string;
    index: string;
    query_params: string;
    query_nb_hits: string;
    processing_time_ms: string;
    exhaustive_faceting?: false;
    exhaustive_nb_hits?: false;
  }

  interface Task {
    taskID: number;
    createdAt: string;
    objectID?: string;
  }

  /**
   */
  interface MultiObjectTask {
    objectIDs: string[];
    taskID: number;
  }

  /**
   */
  interface UpdateIndexTask {
    updatedAt: string;
    taskID: number;
  }

  /**
   */
  interface BatchTask {
    objectIDs: string[];
    taskID: Record<string, number>;
  }

  interface TaskStatus {
    status: 'published' | 'notPublished';
    pendingTask: boolean;
  }

  interface ApiKey {
    value: string;
    createdAt: number;
    acl: (
      | 'search'
      | 'browse'
      | 'addObject'
      | 'deleteObject'
      | 'deleteIndex'
      | 'settings'
      | 'editSettings'
      | 'analytics'
      | 'listIndexes'
      | 'logs'
      | 'seeUnretrievableAttributes')[];
    validity: number;
    indexes?: string[];
    description?: string;
  }

  interface AddApiKeyTask {
    key: string;
    createdAt: string;
  }

  interface UpdateApiKeyTask {
    key: string;
    updatedAt: string;
  }

  interface DeleteApiKeyTask {
    deletedAt: string;
  }

  interface IndexSettings {
    /**
     * The list of attributes you want index
     * default: *
     */
    attributesToIndex?: string[];
    /**
     * The list of attributes you want to use for faceting
     * default: null
     */
    attributesForFaceting?: string[];
    /**
     * The list of attributes that cannot be retrieved at query time
     * default: null
     */
    unretrievableAttributes?: string[];
    /**
     * List of attributes you want to use for textual search
     * default: []
     */
    searchableAttributes?: string[];
    /**
     * A string that contains the list of attributes you want to retrieve in order to minimize the size of the JSON answer
     * default: *
     */
    attributesToRetrieve?: string[];
    /**
     * Controls the way results are sorted
     * default: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom']
     */
    ranking?: string[];
    /**
     * Lets you specify part of the ranking
     * default: []
     */
    customRanking?: string[];
    /**
     * The list of indices on which you want to replicate all write operations
     * default: []
     */
    replicas?: string[];
    /**
     * Limit the number of facet values returned for each facet
     * default: ""
     */
    maxValuesPerFacet?: number;
    /**
     * Default list of attributes to highlight. If set to null, all indexed attributes are highlighted.
     * default: null
     */
    attributesToHighlight?: string[];
    /**
     * Default list of attributes to snippet alongside the number of words to return
     * default: null
     */
    attributesToSnippet?: string[];
    /**
     * Specify the string that is inserted before the highlighted parts in the query result
     * default: <em>
     */
    highlightPreTag?: string;
    /**
     * Specify the string that is inserted after the highlighted parts in the query result
     * default: </em>
     */
    highlightPostTag?: string;
    /**
     * String used as an ellipsis indicator when a snippet is truncated.
     * default: …
     */
    snippetEllipsisText?: string;
    /**
     * If set to true, restrict arrays in highlights and snippets to items that matched the query at least partially else return all array items in highlights and snippets
     * default: false
     */
    restrictHighlightAndSnippetArrays?: boolean;
    /**
     * Pagination parameter used to select the number of hits per page
     * default: 20
     */
    hitsPerPage?: number;
    /**
     * The minimum number of characters needed to accept one typo
     * default: 4
     */
    minWordSizefor1Typo?: number;
    /**
     * The minimum number of characters needed to accept two typos.
     * default: 8
     */
    minWordSizefor2Typos?: number;
    /**
     * This option allows you to control the number of typos allowed in the result set
     * default: true
     * 'true' The typo tolerance is enabled and all matching hits are retrieved (default behavior).
     * 'false' The typo tolerance is disabled. All results with typos will be hidden.
     * 'min' Only keep results with the minimum number of typos. For example, if one result matches without typos, then all results with typos will be hidden.
     * 'strict' Hits matching with 2 typos are not retrieved if there are some matching without typos.
     */
    typoTolerance?: boolean | 'min' | 'strict';
    /**
     * If set to false, disables typo tolerance on numeric tokens (numbers).
     * default: true
     */
    allowTyposOnNumericTokens?: boolean;
    /**
     * If set to true, plural won't be considered as a typo
     * default: false
     */
    ignorePlurals?: boolean;
    /**
     * List of attributes on which you want to disable typo tolerance
     * default: ""
     */
    disableTypoToleranceOnAttributes?: string;
    /**
     * Specify the separators (punctuation characters) to index.
     * default: ""
     */
    separatorsToIndex?: string;
    /**
     * Selects how the query words are interpreted
     * default: 'prefixLast'
     * 'prefixAll' All query words are interpreted as prefixes. This option is not recommended.
     * 'prefixLast' Only the last word is interpreted as a prefix (default behavior).
     * 'prefixNone' No query word is interpreted as a prefix. This option is not recommended.
     */
    queryType?: 'prefixAll' | 'prefixLast' | 'prefixNone';
    /**
     * This option is used to select a strategy in order to avoid having an empty result page
     * default: 'none'
     * 'lastWords' When a query does not return any results, the last word will be added as optional
     * 'firstWords' When a query does not return any results, the first word will be added as optional
     * 'allOptional' When a query does not return any results, a second trial will be made with all words as optional
     * 'none' No specific processing is done when a query does not return any results
     */
    removeWordsIfNoResults?: string;
    /**
     * Enables the advanced query syntax
     * default: false
     */
    advancedSyntax?: boolean;
    /**
     * A string that contains the comma separated list of words that should be considered as optional when found in the query
     * default: []
     */
    optionalWords?: string[];
    /**
     * Remove stop words from the query before executing it
     * default: false
     * true|false: enable or disable stop words for all 41 supported languages; or
     * a list of language ISO codes (as a comma-separated string) for which stop words should be enable
     */
    removeStopWords?: boolean | string[];
    /**
     * List of attributes on which you want to apply word-splitting ("decompounding") for
     * each of the languages supported (German, Dutch, and Finnish as of 05/2018)
     * default: {de: [], nl: [], fi: []}
     */
    decompoundedAttributes?: { [key in Partial<'nl' | 'de' | 'fi'>]: string[] };
    /**
     * List of attributes on which you want to disable prefix matching
     * default: []
     */
    disablePrefixOnAttributes?: string[];
    /**
     * List of attributes on which you want to disable the computation of exact criteria
     * default: []
     */
    disableExactOnAttributes?: string[];
    /**
     * This parameter control how the exact ranking criterion is computed when the query contains one word
     * default: attribute
     * 'none': no exact on single word query
     * 'word': exact set to 1 if the query word is found in the record
     * 'attribute': exact set to 1 if there is an attribute containing a string equals to the query
     */
    exactOnSingleWordQuery?: string;
    /**
     * Specify the list of approximation that should be considered as an exact match in the ranking formula
     * default: ['ignorePlurals', 'singleWordSynonym']
     * 'ignorePlurals': alternative words added by the ignorePlurals feature
     * 'singleWordSynonym': single-word synonym (For example "NY" = "NYC")
     * 'multiWordsSynonym': multiple-words synonym
     */
    alternativesAsExact?: (
      | "ignorePlurals"
      | "singleWordSynonym"
      | "multiWordsSynonym")[];
    /**
     * The name of the attribute used for the Distinct feature
     * default: null
     */
    attributeForDistinct?: string;
    /**
     * If set to 1, enables the distinct feature, disabled by default, if the attributeForDistinct index setting is set.
     */
    distinct?: boolean | number;
    /**
     * All numerical attributes are automatically indexed as numerical filters
     * default ''
     */
    numericAttributesToIndex?: string[];
    /**
     * Allows compression of big integer arrays.
     * default: false
     */
    allowCompressionOfIntegerArray?: boolean;
    /**
     * Specify alternative corrections that you want to consider.
     * default: []
     */
    altCorrections?: {}[];
    /**
     * Configure the precision of the proximity ranking criterion
     * default: 1
     */
    minProximity?: number;
    /**
     * This is an advanced use-case to define a token substitutable by a list of words without having the original token searchable
     * default: {}
     */
    placeholders?: {
      [name: string]: string[],
    };
    /**
     * List of attributes on which to do a decomposition of camel case words.
     */
    camelCaseAttributes?: string[];
    /**
     * Controls how facet values are sorted.
     */
    sortFacetValuesBy?: 'count' | 'alpha';
    /**
     * Sets the languages to be used by language-specific settings and functionalities
     * such as ignorePlurals, removeStopWords, and CJK word-detection.
     */
    queryLanguages?: Array<'af' | 'ar' | 'az' | 'bg' | 'bn' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'eo' | 'es' | 'et' | 'eu' | 'fa' | 'fi' | 'fo' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hu' | 'hy' | 'id' | 'is' | 'it' | 'ja' | 'ka' | 'kk' | 'ko' | 'ku' | 'ky' | 'lt' | 'lv' | 'mi' | 'mn' | 'mr' | 'ms' | 'mt' | 'nb' | 'nl' | 'no' | 'ns' | 'pl' | 'ps' | 'pt' | 'pt-br' | 'qu' | 'ro' | 'ru' | 'sk' | 'sq' | 'sv' | 'sw' | 'ta' | 'te' | 'th' | 'tl' | 'tn' | 'tr' | 'tt' | 'uk' | 'ur' | 'uz' | 'zh'>;
    /**
     * Set the maximum number of hits accessible via pagination.
     * We set the max number of *hits*, not max number of pages.
     * Works with the page and hitsByPage settings to establish the full paging logic.
     * https://www.algolia.com/doc/api-reference/api-parameters/paginationLimitedTo/?language=javascript
     */
    paginationLimitedTo?: number
  }

  interface Response<T=any> {

    /**
     * Contains all the hits matching the query
     */
    hits: T[];

    /**
     * Current page
     */
    page: number;

    /**
     * Number of total hits matching the query
     */
    nbHits: number;

    /**
     * Number of pages
     */
    nbPages: number;

    /**
     * Number of hits per pages
     */
    hitsPerPage: number;

    /**
     * Engine processing time (excluding network transfer)
     */
    processingTimeMS: number;

    /**
     * Query used to perform the search
     */
    query: string;

    /**
     * A markup text indicating which parts of the original query have been removed
     * in order to retrieve a non-empty result set.
     * The removed parts are surrounded by <em> tags.
     * Only returned when removeWordsIfNoResults is set to lastWords or firstWords.
     */
    queryAfterRemoval?: string;

    /**
     * GET parameters used to perform the search
     */
    params: string;

    /**
     * Used to return warnings about the query.
     */
    message?: string;

    /**
     * The computed geo location. Warning: for legacy reasons, this parameter is
     * a string and not an object. Format: ${lat},${lng}, where the latitude and
     * longitude are expressed as decimal floating point numbers.
     * Only returned when aroundLatLngViaIP or aroundLatLng is set.
     */
    aroundLatLng?: string;

    /**
     * The automatically computed radius. For legacy reasons, this parameter is a
     * string and not an integer.
     * Only returned for geo queries without an explicitly specified radius (see aroundRadius).
     */
    automaticRadius?: string;

    /**
     * Actual host name of the server that processed the request. Our DNS
     * supports automatic failover and load balancing, so this may differ from
     * the host name used in the request.
     * Returned only if getRankingInfo is set to true.
     */
    serverUsed?: string;

    /**
     * Index name used for the query. In the case of an A/B test, the targeted
     * index isn’t always the index used by the query.
     * Returned only if getRankingInfo is set to true.
     */
    indexUsed?: string;

    /**
     * If a search encounters an index that is being A/B tested, abTestVariantID
     * reports the variant ID of the index used (note, this is the ID not the name).
     * The variant ID is the position in the array of variants (starting at 1).
     *
     * For example, abTestVariantID=1 is variant A (the main index), abTestVariantID=2
     * is variant B (the replica you chose when creating the A/B test , or the queries
     * with the changed query parameters if the A/B test is based on query parameters).
     * Returned only if getRankingInfo is set to true.
     */
    abTestVariantID?: number;

    /**
     * The query string that will be searched, after normalization. Normalization
     * includes removing stop words (if removeStopWords is enabled), and transforming
     * portions of the query string into phrase queries (see advancedSyntax).
     * Returned only if getRankingInfo is set to true.
     */
    parsedQuery?: string;

    /**
     * A mapping of each facet name to the corresponding facet counts.
     */
    facets?: {
      [facetName: string]: { [facetValue: string]: number };
    };

    /**
     * Statistics for numerical facets.
     */
    facets_stats?: {
      [facetName: string]: {
        avg: number,
        max: number,
        min: number,
        sum: number,
      };
    };

    /**
     * The index name is only set when searching multiple indices.
     */
    index?: string;

    /**
     * Whether the query was processed. Only returned when strategy: stopIfEnoughmatches.
     */
    processed?: boolean;

    /**
     * The cursor is only set when browsing the index.
     */
    cursor?: string;

    /**
     * Whether the nbHits is exhaustive (true) or approximate (false).
     * An approximation is done when the query takes more than 50ms to be processed
     * (this can happen when using complex filters on millions on records).
     */
    exhaustiveNbHits: boolean;

    /**
     * Whether the facet count is exhaustive (true) or approximate (false).
     */
    exhaustiveFacetsCount: boolean;

    /**
     * user data is returned if a matching query rule was set up to do so
     */
    userData?: Array<{ [key: string]: any }>;

    /**
     * The unique identifier of this search, only returned if clickAnalytics: true
     */
    queryID?: string;
  }

  interface MultiResponse<T=any> {
    results: Response<T>[];
  }

  namespace Places {
    interface LanguageInterface {
      /**
       * If specified, restrict the search results to a single language. You can pass two letters country codes (ISO 639-1).
       * Warning: language parameter is case sensitive and should be lowercase otherwise it will fallback to default language.
       * https://community.algolia.com/places/api-clients.html#api-options-language
       */
      language: string
    }

    interface PlaceInterface {
        /**
         * Endpoint to search.
         * https://community.algolia.com/places/api-clients.html#endpoints
         */

        /**
         * If specified, restrict the search results to a single language. You can pass two letters country codes (ISO 639-1).
         * Warning: language parameter is case sensitive and should be lowercase otherwise it will fallback to default language.
         * https://community.algolia.com/places/api-clients.html#api-options-language
         */

        search(e: QueryInterface, cb: (err: Error, response: ResultSearchInterface<HitInterface>) => void): void;
        search(e: QueryInterface & LanguageInterface, cb: (err: Error, response: ResultSearchInterface<LocalizedHitInterface>) => void): void;

        /**
         * Endpoint to search.
         * https://community.algolia.com/places/api-clients.html#endpoints
         */
        search(e: QueryInterface): Promise<ResultSearchInterface<HitInterface>>;
        search(e: QueryInterface & LanguageInterface): Promise<ResultSearchInterface<LocalizedHitInterface>>;

        /**
         * Reverse geocoding means converting a location (latitude and longitude) to a readable address.
         * https://community.algolia.com/places/api-clients.html#endpoints
         */
        reverse(e: QueryReverseInterface, cb: (err: Error, response: ResultSearchInterface<HitInterface>) => void): void;
        reverse(e: QueryReverseInterface & LanguageInterface, cb: (err: Error, response: ResultSearchInterface<LocalizedHitInterface>) => void): void;


        /**
         * Reverse geocoding means converting a location (latitude and longitude) to a readable address.
         * https://community.algolia.com/places/api-clients.html#endpoints
         */
        reverse(e: QueryReverseInterface): Promise<ResultSearchInterface<HitInterface>>;
        reverse(e: QueryReverseInterface  & LanguageInterface): Promise<ResultSearchInterface<LocalizedHitInterface>>;
    }

    /**
     * Restrict the search results to a specific type.
     * https://community.algolia.com/places/api-clients.html#api-options-type
     */
    interface QueryInterface {
        /**
         * Query used to perform the search.
         */
        query?: string;
        /**
         * Restrict the search results to a specific type.
         * https://community.algolia.com/places/api-clients.html#api-options-type
         */
        type?: "city" | "country" | "address" | "busStop" | "trainStation" | "townhall" | "airport";
        /**
         * Restrict the search results to a specific type.
         * https://community.algolia.com/places/api-clients.html#api-options-type
         */
        hitsPerPage?: number;
        /**
         * If specified, restrict the search results to a specific list of comma-separated countries. You can pass two letters country codes (ISO 3166-1).
         * Default: Search on the whole planet.
         * Warning: country codes must be lower-cased.
         * https://community.algolia.com/places/api-clients.html#api-options-countries
         */
        countries?: string;
        /**
         * Force to first search around a specific latitude longitude.
         * The option value must be provided as a string: latitude,longitude like 12.232,23.1.
         * The default is to search around the location of the user determined via their IP address (geoip).
         * https://community.algolia.com/places/api-clients.html#api-options-aroundLatLng
         */
        aroundLatLng?: string;
        /**
         * Whether or not to first search around the geolocation of the user found via their IP address. This is true by default.
         * https://community.algolia.com/places/api-clients.html#api-options-aroundLatLngViaIP
         */
        aroundLatLngViaIP?: string;
        /**
         * Radius in meters to search around the latitude/longitude. Otherwise a default radius is automatically computed given the area density.
         * https://community.algolia.com/places/api-clients.html#api-options-aroundRadius
         */
        aroundRadius?: number;
        /**
         * Controls whether the _rankingInfo object should be included in the hits. This defaults to false.
         * The _rankingInfo object for a Places query is slightly different from a regular Algolia query
         * and you can read up more about the difference and how to leverage them in our guide.
         * https://community.algolia.com/places/api-clients.html#api-options-getRankingInfo
         */
        getRankingInfo?: boolean;
    }

    /**
     * Params for endpoint reverse.
     * https://community.algolia.com/places/api-clients.html#reverse-geocoding
     */
    interface QueryReverseInterface {
        /**
         * Force to first search around a specific latitude longitude.
         * The option value must be provided as a string: latitude,longitude like 12.232,23.1.
         * The default is to search around the location of the user determined via their IP address (geoip).
         * https://community.algolia.com/places/api-clients.html#api-options-aroundLatLng
         */
        aroundLatLng: string;
        /**
         * Restrict the search results to a specific type.
         * https://community.algolia.com/places/api-clients.html#api-options-type
         */
        hitsPerPage?: number;
    }

    /**
     * Result of search.
     * https://community.algolia.com/places/api-clients.html#json-answer
     */
    interface ResultSearchInterface<T extends HitInterface | LocalizedHitInterface> {
        /**
         * Contains all the hits matching the query.
         * https://community.algolia.com/places/api-clients.html#json-answer
         */
        hits: T[];
        /**
         * Query fallback if query retrieve any result
         * https://community.algolia.com/places/api-clients.html#json-answer
         */
        degradedQuery: boolean;
        /**
         * Number of total hits matching the query.
         * https://community.algolia.com/places/api-clients.html#json-answer
         */
        nbHits: number;
        /**
         * GET parameters used to perform the search.
         * https://community.algolia.com/places/api-clients.html#json-answer
         */
        params: string;
        /**
         * Engine processing time (excluding network transfer).
         * https://community.algolia.com/places/api-clients.html#json-answer
         */
        processingTimeMS: number;
        /**
         * Query used to perform the search.
         * https://community.algolia.com/places/api-clients.html#json-answer
         */
        query: string;
    }

    /**
     * Hit of search localized.
     * https://community.algolia.com/places/api-clients.html#api-suggestion-name
     */
    interface LocalizedHitInterface {
        /**
         * List of associated administrative region names.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-administrative
         */
        administrative?: string[];
        /**
         * Associated country name.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-country
         */
        country: string;
        /**
         * Two letters country code (ISO 639-1).
         * https://community.algolia.com/places/api-clients.html#api-suggestion-countryCode
         */
        country_code: string;
        /**
         * List of the associated county names. If no language parameter is specified, retrieves all of them.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-county
         */
        county?: string[];
        /**
         * https://community.algolia.com/places/api-clients.html#api-suggestion-city
         * List of the associated city names. If no language parameter is specified, retrieves all of them.
         */
        city?: string[];
        /**
         * List of associated postcodes.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-postcode
         */
        postcode?: string[];
        /**
         * Associated population.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-population
         */
        population?: number;
        /**
         * Associated list of latitude and longitude.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-latlng
         */
        _geoloc: { lat: number; lng: number };
        /**
         * The associated highlighting information.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-highlightResult
         */
        _highlightResult: {
            administrative: highlightResultValueInterface;
            country: highlightResultValueInterface;
            county?: highlightResultValueInterface;
            locale_names: highlightResultValueInterface[];
            postcode: highlightResultValueInterface[];
        }
        /**
         * https://community.algolia.com/places/api-clients.html#api-suggestion-name
         * List of names of the place. If no language parameter is specified, retrieves all of them.
         */
        locale_names: string[];
        admin_level: number;
        district?: string;
        importance: number;
        is_city: boolean;
        is_country: boolean;
        is_highway: boolean;
        is_popular: boolean;
        is_suburb: boolean;
        objectID: string;
        _tags: string[];
    }

    /**
     * Hit of search.
     * https://community.algolia.com/places/api-clients.html#api-suggestion-name
     */
    interface HitInterface {
        /**
         * List of associated administrative region names.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-administrative
         */
        administrative?: string[];
        /**
         * Associated country name.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-country
         */
        country: { default: string; [key: string]: string };
        /**
         * Two letters country code (ISO 639-1).
         * https://community.algolia.com/places/api-clients.html#api-suggestion-countryCode
         */
        country_code: string;
        /**
         * List of the associated county names. If no language parameter is specified, retrieves all of them.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-county
         */
        county?: { default: string[]; [key: string]: string[] };
        /**
         * https://community.algolia.com/places/api-clients.html#api-suggestion-city
         * List of the associated city names. If no language parameter is specified, retrieves all of them.
         */
        city?: { default: string[]; [key: string]: string[] };
        /**
         * Associated population.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-population
         */
        population?: number;
        /**
         * List of associated postcodes.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-postcode
         */
        postcode?: string[];
        /**
         * Associated list of latitude and longitude.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-latlng
         */
        _geoloc: { lat: number; lng: number };
        /**
         * The associated highlighting information.
         * https://community.algolia.com/places/api-clients.html#api-suggestion-highlightResult
         */
        _highlightResult: {
          administrative: highlightResultValueInterface;
          country: highlightResultValueInterface;
          county?: highlightResultValueInterface;
          locale_names: highlightResultValueInterface[];
          postcode: highlightResultValueInterface[];
      }
        /**
         * https://community.algolia.com/places/api-clients.html#api-suggestion-name
         * List of names of the place. If no language parameter is specified, retrieves all of them.
         */
        locale_names: { default: string[]; [key: string]: string[] };
        admin_level: number;
        district?: string;
        importance: number;
        is_city: boolean;
        is_country: boolean;
        is_highway: boolean;
        is_popular: boolean;
        is_suburb: boolean;
        objectID: string;
        _tags: string[];
    }

    /**
     * Interface use in HitInterface for some key of highlightResult.
     */
    interface highlightResultValueInterface {
      fullyHighlighted?: boolean;
      matchLevel: string;
      matchedWords: string[];
      value: string;
    }
  }

}

interface AlgoliasearchInstance {
    (
        applicationId: string,
        apiKey: string,
        options?: algoliasearch.ClientOptions,
    ): algoliasearch.Client;
}

interface AlgoliaStatic extends AlgoliasearchInstance {
    initPlaces(apiKey: string, applicationId: string): algoliasearch.Places.PlaceInterface;
}

declare const algoliasearch: AlgoliaStatic;

export = algoliasearch;
export as namespace algoliasearch;
