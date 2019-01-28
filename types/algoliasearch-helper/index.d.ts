// Type definitions for algoliasearch-helper 2.26
// Project: https://community.algolia.com/algoliasearch-helper-js/
// Definitions by: Gordon Burgett <https://github.com/gburgett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Client} from 'algoliasearch'
import { EventEmitter } from 'events';

/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @param client an AlgoliaSearch client
 * @param index the name of the index to query
 * @param opts 
 */
declare function algoliasearchHelper(client: Client, index: string, opts: Partial<algoliasearchHelper.SearchParameters>): algoliasearchHelper.AlgoliaSearchHelper;

declare module algoliasearchHelper {
  export const version: string

  export class AlgoliaSearchHelper extends EventEmitter {
    public state: SearchParameters
    public lastResults: SearchResults
    public derivedHelpers: AlgoliaSearchHelper[]

    on(event: 'change', cb: (state: SearchParameters, lastResults?: SearchResults | null) => any): this
    on(event: 'search', cb: (state: SearchParameters, lastResults?: SearchResults | null) => any): this
    on(event: 'searchForFacetValues', cb: (state: SearchParameters, facet?: string, query?: string) => any): this
    on(event: 'searchOnce', cb: (state: SearchParameters) => any): this
    on(event: 'result', cb: (results: SearchResults, state?: SearchParameters) => any): this
    on(event: 'error', cb: (error: any) => any): this
    on(event: 'searchQueueEmpty', cb: () => any): this

    /**
     * Start the search with the parameters set in the state. When the
     * method is called, it triggers a `search` event. The results will
     * be available through the `result` event. If an error occurs, an
     * `error` will be fired instead.
     * @return {AlgoliaSearchHelper}
     * @fires search
     * @fires result
     * @fires error
     * @chainable
     */
    search(): this

    /**
     * Gets the search query parameters that would be sent to the Algolia Client
     * for the hits
     * @return {object} Query Parameters
     */
    getQuery(): { [param: string]: any }

    /**
     * Start a search using a modified version of the current state. This method does
     * not trigger the helper lifecycle and does not modify the state kept internally
     * by the helper. This second aspect means that the next search call will be the
     * same as a search call before calling searchOnce.
     * @param {object} options can contain all the parameters that can be set to SearchParameters
     * plus the index
     * @param {function} [callback] optional callback executed when the response from the
     * server is back.
     * @return {promise|undefined} if a callback is passed the method returns undefined
     * otherwise it returns a promise containing an object with two keys :
     *  - content with a SearchResults
     *  - state with the state used for the query as a SearchParameters
     * @example
     * // Changing the number of records returned per page to 1
     * // This example uses the callback API
     * var state = helper.searchOnce({hitsPerPage: 1},
     *   function(error, content, state) {
     *     // if an error occurred it will be passed in error, otherwise its value is null
     *     // content contains the results formatted as a SearchResults
     *     // state is the instance of SearchParameters used for this search
     *   });
     * @example
     * // Changing the number of records returned per page to 1
     * // This example uses the promise API
     * var state1 = helper.searchOnce({hitsPerPage: 1})
     *                 .then(promiseHandler);
     *
     * function promiseHandler(res) {
     *   // res contains
     *   // {
     *   //   content : SearchResults
     *   //   state   : SearchParameters (the one used for this specific search)
     *   // }
     * }
     */
    searchOnce(options: { [key: string]: any }): Promise<{ content: SearchResults, state: SearchParameters }>
    searchOnce(options: { [key: string]: any }, cb: (error: any, content: SearchResults, state: SearchParameters) => any): undefined

    /**
     * Search for facet values based on an query and the name of a faceted attribute. This
     * triggers a search and will return a promise. On top of using the query, it also sends
     * the parameters from the state so that the search is narrowed down to only the possible values.
     *
     * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
     * @param {string} facet the name of the faceted attribute
     * @param {string} query the string query for the search
     * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
     * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
     * it in the generated query.
     * @return {promise.<FacetSearchResult>} the results of the search
     */
    searchForFacetValues(facet: string, query: string, maxFacetHits: number, userState: any): Promise<AlgoliaSearchHelper.FacetSearchResult>

    /**
     * Sets the text query used for the search.
     *
     * This method resets the current page to 0.
     * @param  {string} q the user query
     * @return {AlgoliaSearchHelper}
     * @fires change
     * @chainable
     */
    setQuery(q: string): this

    /**
     * Remove all the types of refinements except tags. A string can be provided to remove
     * only the refinements of a specific attribute. For more advanced use case, you can
     * provide a function instead. This function should follow the
     * [clearCallback definition](#SearchParameters.clearCallback).
     *
     * This method resets the current page to 0.
     * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
     * @return {AlgoliaSearchHelper}
     * @fires change
     * @chainable
     * @example
     * // Removing all the refinements
     * helper.clearRefinements().search();
     * @example
     * // Removing all the filters on a the category attribute.
     * helper.clearRefinements('category').search();
     * @example
     * // Removing only the exclude filters on the category facet.
     * helper.clearRefinements(function(value, attribute, type) {
     *   return type === 'exclude' && attribute === 'category';
     * }).search();
     */
    clearRefinements(name?: string): this
    clearRefinements(func: (value: any, attribute?: string, type?: string) => boolean): this

    /**
     * Remove all the tag filters.
     *
     * This method resets the current page to 0.
     * @return {AlgoliaSearchHelper}
     * @fires change
     * @chainable
     */
    clearTags(): this

    /**
     * Updates the name of the index that will be targeted by the query.
     *
     * This method resets the current page to 0.
     * @param {string} name the index name
     * @return {AlgoliaSearchHelper}
     * @fires change
     * @chainable
     */
    setIndex(name: string): this

      addDisjunctiveFacetRefinement(...args: any[]): any
      addDisjunctiveRefine(...args: any[]): any
      addHierarchicalFacetRefinement(...args: any[]): any
      addNumericRefinement(...args: any[]): any
      addFacetRefinement(...args: any[]): any
      addRefine(...args: any[]): any
      addFacetExclusion(...args: any[]): any
      addExclude(...args: any[]): any
      addTag(...args: any[]): any
      removeNumericRefinement(...args: any[]): any
      removeDisjunctiveFacetRefinement(...args: any[]): any
      removeDisjunctiveRefine(...args: any[]): any
      removeHierarchicalFacetRefinement(...args: any[]): any
      removeFacetRefinement(...args: any[]): any
      removeRefine(...args: any[]): any
      removeFacetExclusion(...args: any[]): any
      removeExclude(...args: any[]): any
      removeTag(...args: any[]): any
      toggleFacetExclusion(...args: any[]): any
      toggleExclude(...args: any[]): any
      toggleRefinement(...args: any[]): any
      toggleFacetRefinement(...args: any[]): any
      toggleRefine(...args: any[]): any
      toggleTag(...args: any[]): any
      nextPage(...args: any[]): any
      previousPage(...args: any[]): any
      setCurrentPage(...args: any[]): any
      setPage(...args: any[]): any
      setQueryParameter(...args: any[]): any

  /**
   * Set the whole state (warning: will erase previous state)
   * @param {SearchParameters} newState the whole new state
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */
  setState(newState: Partial<SearchParameters>): this

  /**
   * Get the current search state stored in the helper. This object is immutable.
   * @param {string[]} [filters] optional filters to retrieve only a subset of the state
   * @return {SearchParameters|object} if filters is specified a plain object is
   * returned containing only the requested fields, otherwise return the unfiltered
   * state
   * @example
   * // Get the complete state as stored in the helper
   * helper.getState();
   * @example
   * // Get a part of the state with all the refinements on attributes and the query
   * helper.getState(['query', 'attribute:category']);
   */
  getState(): SearchParameters
  getState(filters: string[]): Partial<SearchParameters>

      getStateAsQueryString(...args: any[]): any
      setStateFromQueryString(...args: any[]): any
      overrideStateWithoutTriggeringChangeEvent(...args: any[]): any
      isRefined(...args: any[]): any
      hasRefinements(...args: any[]): any
      isExcluded(...args: any[]): any
      isDisjunctiveRefined(...args: any[]): any
      hasTag(...args: any[]): any
      isTagRefined(...args: any[]): any
      getIndex(...args: any[]): any
      getCurrentPage(...args: any[]): any
      getPage(...args: any[]): any
      getTags(...args: any[]): any
      getQueryParameter(...args: any[]): any
      getRefinements(...args: any[]): any
      getNumericRefinement(...args: any[]): any
      getHierarchicalFacetBreadcrumb(...args: any[]): any
      containsRefinement(...args: any[]): any
      clearCache(...args: any[]): any
      setClient(...args: any[]): any
      getClient(...args: any[]): any
      derive(...args: any[]): any
      detachDerivedHelper(...args: any[]): any
      hasPendingRequests(...args: any[]): any
      
  }

  module AlgoliaSearchHelper {
    /**
     * Structure of each result when using
     * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
     * @typedef FacetSearchHit
     * @type {object}
     * @property {string} value the facet value
     * @property {string} highlighted the facet value highlighted with the query string
     * @property {number} count number of occurrence of this facet value
     * @property {boolean} isRefined true if the value is already refined
     */
    interface FacetSearchHit {
      value: string
      highlighted: string
      count: number
      isRefined: boolean
    }

    /**
     * Structure of the data resolved by the
     * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
     * promise.
     * @typedef FacetSearchResult
     * @type {object}
     * @property {FacetSearchHit} facetHits the results for this search for facet values
     * @property {number} processingTimeMS time taken by the query inside the engine
     */
    interface FacetSearchResult {
      facetHits: FacetSearchHit
      processingTimeMS: number
    }
  }

  
  
  export class SearchParameters {
    [rawParam: string]: any
  
    /**
     * Targeted index. This parameter is mandatory.
     * @member {string}
     */
    index: string
  
    // Query
    /**
     * Query string of the instant search. The empty string is a valid query.
     * @member {string}
     * @see https://www.algolia.com/doc/rest#param-query
     */
    query: string
  
    // Facets
    /**
     * This attribute contains the list of all the conjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * @member {string[]}
     */
    facets: string[]
    /**
     * This attribute contains the list of all the disjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * @member {string[]}
     */
    disjunctiveFacets: string[]
    /**
     * This attribute contains the list of all the hierarchical facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * Hierarchical facets are a sub type of disjunctive facets that
     * let you filter faceted attributes hierarchically.
     * @member {string[]|object[]}
     */
    hierarchicalFacets: string[] | object[]
  
    // Refinements
    /**
     * This attribute contains all the filters that need to be
     * applied on the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */
    facetsRefinements: { [facet: string]: SearchParameters.FacetList }
    /**
     * This attribute contains all the filters that need to be
     * excluded from the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters excluded for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */
    facetsExcludes: { [facet: string]: SearchParameters.FacetList }
    /**
     * This attribute contains all the filters that need to be
     * applied on the disjunctive facets. Each facet must be properly
     * defined in the `disjunctiveFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */
    disjunctiveFacetsRefinements: { [facet: string]: SearchParameters.FacetList }
    /**
     * This attribute contains all the filters that need to be
     * applied on the numeric attributes.
     *
     * The key is the name of the attribute, and the value is the
     * filters to apply to this attribute.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `numericFilters` attribute.
     * @member {Object.<string, SearchParameters.OperatorList>}
     */
    numericRefinements: { [facet: string]: SearchParameters.OperatorList }
    /**
     * This attribute contains all the tags used to refine the query.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `tagFilters` attribute.
     * @member {string[]}
     */
    tagRefinements: string[]
    /**
     * This attribute contains all the filters that need to be
     * applied on the hierarchical facets. Each facet must be properly
     * defined in the `hierarchicalFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name. The FacetList values
     * are structured as a string that contain the values for each level
     * separated by the configured separator.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */
    hierarchicalFacetsRefinements: { [facet: string]: SearchParameters.FacetList }
  
    /**
     * Contains the numeric filters in the raw format of the Algolia API. Setting
     * this parameter is not compatible with the usage of numeric filters methods.
     * @see https://www.algolia.com/doc/javascript#numericFilters
     * @member {string}
     */
    numericFilters: string
  
    /**
     * Contains the tag filters in the raw format of the Algolia API. Setting this
     * parameter is not compatible with the of the add/remove/toggle methods of the
     * tag api.
     * @see https://www.algolia.com/doc/rest#param-tagFilters
     * @member {string}
     */
    tagFilters: string
  
    /**
     * Contains the optional tag filters in the raw format of the Algolia API.
     * @see https://www.algolia.com/doc/rest#param-tagFilters
     * @member {string}
     */
    optionalTagFilters: string
  
    /**
     * Contains the optional facet filters in the raw format of the Algolia API.
     * @see https://www.algolia.com/doc/rest#param-tagFilters
     * @member {string}
     */
    optionalFacetFilters: string
  
  
    // Misc. parameters
    /**
     * Number of hits to be returned by the search API
     * @member {number}
     * @see https://www.algolia.com/doc/rest#param-hitsPerPage
     */
    hitsPerPage: number
    /**
     * Number of values for each faceted attribute
     * @member {number}
     * @see https://www.algolia.com/doc/rest#param-maxValuesPerFacet
     */
    maxValuesPerFacet: number
    /**
     * The current page number
     * @member {number}
     * @see https://www.algolia.com/doc/rest#param-page
     */
    page: number
    /**
     * How the query should be treated by the search engine.
     * Possible values: prefixAll, prefixLast, prefixNone
     * @see https://www.algolia.com/doc/rest#param-queryType
     * @member {string}
     */
    queryType: string
    /**
     * How the typo tolerance behave in the search engine.
     * Possible values: true, false, min, strict
     * @see https://www.algolia.com/doc/rest#param-typoTolerance
     * @member {string}
     */
    typoTolerance: string
  
    /**
     * Number of characters to wait before doing one character replacement.
     * @see https://www.algolia.com/doc/rest#param-minWordSizefor1Typo
     * @member {number}
     */
    minWordSizefor1Typo: number
    /**
     * Number of characters to wait before doing a second character replacement.
     * @see https://www.algolia.com/doc/rest#param-minWordSizefor2Typos
     * @member {number}
     */
    minWordSizefor2Typos: number
    /**
     * Configure the precision of the proximity ranking criterion
     * @see https://www.algolia.com/doc/rest#param-minProximity
     */
    minProximity: any
    /**
     * Should the engine allow typos on numerics.
     * @see https://www.algolia.com/doc/rest#param-allowTyposOnNumericTokens
     * @member {boolean}
     */
    allowTyposOnNumericTokens: boolean
    /**
     * Should the plurals be ignored
     * @see https://www.algolia.com/doc/rest#param-ignorePlurals
     * @member {boolean}
     */
    ignorePlurals: boolean
    /**
     * Restrict which attribute is searched.
     * @see https://www.algolia.com/doc/rest#param-restrictSearchableAttributes
     * @member {string}
     */
    restrictSearchableAttributes: string
    /**
     * Enable the advanced syntax.
     * @see https://www.algolia.com/doc/rest#param-advancedSyntax
     * @member {boolean}
     */
    advancedSyntax: boolean
    /**
     * Enable the analytics
     * @see https://www.algolia.com/doc/rest#param-analytics
     * @member {boolean}
     */
    analytics: boolean
    /**
     * Tag of the query in the analytics.
     * @see https://www.algolia.com/doc/rest#param-analyticsTags
     * @member {string}
     */
    analyticsTags: string
    /**
     * Enable the synonyms
     * @see https://www.algolia.com/doc/rest#param-synonyms
     * @member {boolean}
     */
    synonyms: boolean
    /**
     * Should the engine replace the synonyms in the highlighted results.
     * @see https://www.algolia.com/doc/rest#param-replaceSynonymsInHighlight
     * @member {boolean}
     */
    replaceSynonymsInHighlight: boolean
    /**
     * Add some optional words to those defined in the dashboard
     * @see https://www.algolia.com/doc/rest#param-optionalWords
     * @member {string}
     */
    optionalWords: string
    /**
     * Possible values are "lastWords" "firstWords" "allOptional" "none" (default)
     * @see https://www.algolia.com/doc/rest#param-removeWordsIfNoResults
     * @member {string}
     */
    removeWordsIfNoResults: string
    /**
     * List of attributes to retrieve
     * @see https://www.algolia.com/doc/rest#param-attributesToRetrieve
     * @member {string}
     */
    attributesToRetrieve: string
    /**
     * List of attributes to highlight
     * @see https://www.algolia.com/doc/rest#param-attributesToHighlight
     * @member {string}
     */
    attributesToHighlight: string
    /**
     * Code to be embedded on the left part of the highlighted results
     * @see https://www.algolia.com/doc/rest#param-highlightPreTag
     * @member {string}
     */
    highlightPreTag: string
    /**
     * Code to be embedded on the right part of the highlighted results
     * @see https://www.algolia.com/doc/rest#param-highlightPostTag
     * @member {string}
     */
    highlightPostTag: string
    /**
     * List of attributes to snippet
     * @see https://www.algolia.com/doc/rest#param-attributesToSnippet
     * @member {string}
     */
    attributesToSnippet: string
    /**
     * Enable the ranking informations in the response, set to 1 to activate
     * @see https://www.algolia.com/doc/rest#param-getRankingInfo
     * @member {number}
     */
    getRankingInfo: number
    /**
     * Remove duplicates based on the index setting attributeForDistinct
     * @see https://www.algolia.com/doc/rest#param-distinct
     * @member {boolean|number}
     */
    distinct: boolean | number
    /**
     * Center of the geo search.
     * @see https://www.algolia.com/doc/rest#param-aroundLatLng
     * @member {string}
     */
    aroundLatLng: string
    /**
     * Center of the search, retrieve from the user IP.
     * @see https://www.algolia.com/doc/rest#param-aroundLatLngViaIP
     * @member {boolean}
     */
    aroundLatLngViaIP: boolean
    /**
     * Radius of the geo search.
     * @see https://www.algolia.com/doc/rest#param-aroundRadius
     * @member {number}
     */
    aroundRadius: number
    /**
     * Precision of the geo search.
     * @see https://www.algolia.com/doc/rest#param-aroundPrecision
     * @member {number}
     */
    minimumAroundRadius: number
    /**
     * Precision of the geo search.
     * @see https://www.algolia.com/doc/rest#param-minimumAroundRadius
     * @member {number}
     */
    aroundPrecision: number
    /**
     * Geo search inside a box.
     * @see https://www.algolia.com/doc/rest#param-insideBoundingBox
     * @member {string}
     */
    insideBoundingBox: string
    /**
     * Geo search inside a polygon.
     * @see https://www.algolia.com/doc/rest#param-insidePolygon
     * @member {string}
     */
    insidePolygon: string
    /**
     * Allows to specify an ellipsis character for the snippet when we truncate the text
     * (added before and after if truncated).
     * The default value is an empty string and we recommend to set it to "…"
     * @see https://www.algolia.com/doc/rest#param-insidePolygon
     * @member {string}
     */
    snippetEllipsisText: string
    /**
     * Allows to specify some attributes name on which exact won't be applied.
     * Attributes are separated with a comma (for example "name,address" ), you can also use a
     * JSON string array encoding (for example encodeURIComponent('["name","address"]') ).
     * By default the list is empty.
     * @see https://www.algolia.com/doc/rest#param-disableExactOnAttributes
     * @member {string|string[]}
     */
    disableExactOnAttributes: string|string[]
    /**
     * Applies 'exact' on single word queries if the word contains at least 3 characters
     * and is not a stop word.
     * Can take two values: true or false.
     * By default, its set to false.
     * @see https://www.algolia.com/doc/rest#param-enableExactOnSingleWordQuery
     * @member {boolean}
     */
    enableExactOnSingleWordQuery: boolean
  
    // Undocumented parameters, still needed otherwise we fail
    offset: any
    length: any

    constructor(newParameters?: Partial<SearchParameters>)
  
    /* Add a disjunctive facet to the disjunctiveFacets attribute of the helper configuration, if it isn't already present. */
    addDisjunctiveFacet(facet: string): SearchParameters
    /* Adds a refinement on a disjunctive facet. */
    addDisjunctiveFacetRefinement(facet: string, value: string): SearchParameters
    /* Exclude a value from a "normal" facet */
    addExcludeRefinement(facet: string, value: string): SearchParameters
    /* Add a facet to the facets attribute of the helper configuration, if it isn't already present. */
    addFacet(facet: string): SearchParameters
    /* Add a refinement on a "normal" facet */
    addFacetRefinement(facet: string, value: string): SearchParameters
    addHierarchicalFacet(facet: any): SearchParameters
    addHierarchicalFacetRefinement(facet: string, path: string): SearchParameters
    addNumericRefinement(attribute: string, operator: SearchParameters.Operator, value: number | number[]): SearchParameters
    addTagRefinement(tag: string): SearchParameters
    clearRefinements(attribute?: undefined | string | ((value: any, attribute?: string, type?: string) => any)): SearchParameters
    clearTags(): SearchParameters
    filter(filters: string[]): any
    getConjunctiveRefinements(facetName: string): string[]
    getDisjunctiveRefinements(facetName: string): string[]
    getExcludeRefinements(facetName: string): string[]
    getHierarchicalFacetBreadcrumb(facetName: string): string[]
    getHierarchicalFacetByName(hierarchicalFacetName: string): any
    getHierarchicalRefinement(facetName: string): string[]
    getNumericRefinements(facetName: string): SearchParameters.OperatorList[]
    getNumericRefinement(attribute: string, operator: SearchParameters.Operator): Array<number | number[]>
    getQueryParameter(paramName: string): any
    getRefinedDisjunctiveFacets(facet: string, value: any): string[]
    getRefinedHierarchicalFacets(facet: string, value: any): string[]
    getUnrefinedDisjunctiveFacets(): string[]
    isConjunctiveFacet(facet: string): boolean
    isDisjunctiveFacetRefined(facet: string, value?: string): boolean
    isDisjunctiveFacet(facet: string): boolean
    isExcludeRefined(facet: string, value?: string): boolean
    isFacetRefined(facet: string, value?: string): boolean
    isHierarchicalFacetRefined(facet: string, value?: string): boolean
    isHierarchicalFacet(facet: string): boolean
    isNumericRefined(attribute: string, operator: SearchParameters.Operator, value?: string): boolean
    isTagRefined(tag: string): boolean
    make(newParameters: Partial<SearchParameters>): SearchParameters
    removeExcludeRefinement(facet: string, value: string): SearchParameters
    removeFacet(facet: string): SearchParameters
    removeFacetRefinement(facet: string, value?: string): SearchParameters
    removeDisjunctiveFacet(facet: string): SearchParameters
    removeDisjunctiveFacetRefinement(facet: string, value?: string): SearchParameters
    removeHierarchicalFacet(facet: string): SearchParameters
    removeHierarchicalFacetRefinement(facet: string): SearchParameters
    removeTagRefinement(tag: string): SearchParameters
    setDisjunctiveFacets(facets: string[]): SearchParameters
    setFacets(facets: string[]): SearchParameters
    setHitsPerPage(n: number): SearchParameters
    setPage(newPage: number): SearchParameters
    setQueryParameters(params: { [key: string]: any }): SearchParameters
    setQueryParameter(parameter: string, value: any): SearchParameters
    setQuery(newQuery: string): SearchParameters
    setTypoTolerance(typoTolerance: string): SearchParameters
    toggleDisjunctiveFacetRefinement(facet: string, value: any): SearchParameters
    toggleExcludeFacetRefinement(facet: string, value: any): SearchParameters
    toggleConjunctiveFacetRefinement(facet: string, value: any): SearchParameters
    toggleHierarchicalFacetRefinement(facet: string, value: any): SearchParameters
    toggleFacetRefinement(facet: string, value: any): SearchParameters
    toggleTagRefinement(tag: string): SearchParameters
    validate(currentState: SearchParameters, parameters: Partial<SearchParameters>): null | Error
  }

  module SearchParameters {
    type FacetList = string[]
  
    type OperatorList = {
      [k in Operator]: Array<number | number[]>
    }
    type Operator = '=' | '>' | '>=' | '<' | '<=' | '!='
  }

  export class SearchResults {
    /**
     * query used to generate the results
     * @member {string}
     */
    query: string
    /**
     * The query as parsed by the engine given all the rules.
     * @member {string}
     */
    parsedQuery: string
    /**
     * all the records that match the search parameters. Each record is
     * augmented with a new attribute `_highlightResult`
     * which is an object keyed by attribute and with the following properties:
     *  - `value` : the value of the facet highlighted (html)
     *  - `matchLevel`: full, partial or none depending on how the query terms match
     * @member {object[]}
     */
    hits: any[]
    /**
     * index where the results come from
     * @member {string}
     */
    index: string
    /**
     * number of hits per page requested
     * @member {number}
     */
    hitsPerPage: number
    /**
     * total number of hits of this query on the index
     * @member {number}
     */
    nbHits: number
    /**
     * total number of pages with respect to the number of hits per page and the total number of hits
     * @member {number}
     */
    nbPages: number
    /**
     * current page
     * @member {number}
     */
    page: number
    /**
     * sum of the processing time of all the queries
     * @member {number}
     */
    processingTimeMS: number
    /**
     * The position if the position was guessed by IP.
     * @member {string}
     * @example "48.8637,2.3615",
     */
    aroundLatLng: string
    /**
     * The radius computed by Algolia.
     * @member {string}
     * @example "126792922",
     */
    automaticRadius: string
    /**
     * String identifying the server used to serve this request.
     * @member {string}
     * @example "c7-use-2.algolia.net",
     */
    serverUsed: string
    /**
     * Boolean that indicates if the computation of the counts did time out.
     * @deprecated
     * @member {boolean}
     */
    timeoutCounts: boolean
    /**
     * Boolean that indicates if the computation of the hits did time out.
     * @deprecated
     * @member {boolean}
     */
    timeoutHits: boolean

    /**
     * True if the counts of the facets is exhaustive
     * @member {boolean}
     */
    exhaustiveFacetsCount: boolean

    /**
     * True if the number of hits is exhaustive
     * @member {boolean}
     */
    exhaustiveNbHits: boolean


    /**
     * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
     * @member {object[]}
     */
    userData: any[]

    /**
     * queryID is the unique identifier of the query used to generate the current search results.
     * This value is only available if the `clickAnalytics` search parameter is set to `true`.
     * @member {string}
     */
    queryID: string

    /**
     * disjunctive facets results
     * @member {SearchResults.Facet[]}
     */
    disjunctiveFacets: SearchResults.Facet[]
    /**
     * disjunctive facets results
     * @member {SearchResults.HierarchicalFacet[]}
     */
    hierarchicalFacets: SearchResults.HierarchicalFacet[]

    /**
     * other facets results
     * @member {SearchResults.Facet[]}
     */
    facets: SearchResults.Facet[]

    public _rawResults: any
    public _state: SearchParameters

    constructor(state: SearchParameters, results: any[])

    /**
     * Get a facet object with its name
     * @deprecated
     * @param {string} name name of the faceted attribute
     * @return {SearchResults.Facet} the facet object
     */
    getFacetByName(name: string): SearchResults.Facet

    /**
     * Get a the list of values for a given facet attribute. Those values are sorted
     * refinement first, descending count (bigger value on top), and name ascending
     * (alphabetical order). The sort formula can overridden using either string based
     * predicates or a function.
     *
     * This method will return all the values returned by the Algolia engine plus all
     * the values already refined. This means that it can happen that the
     * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
     * might not be respected if you have facet values that are already refined.
     * @param {string} attribute attribute name
     * @param {object} opts configuration options.
     * @param {Array.<string> | function} opts.sortBy
     * When using strings, it consists of
     * the name of the [FacetValue](#SearchResults.FacetValue) or the
     * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
     * order (`asc` or `desc`). For example to order the value by count, the
     * argument would be `['count:asc']`.
     *
     * If only the attribute name is specified, the ordering defaults to the one
     * specified in the default value for this attribute.
     *
     * When not specified, the order is
     * ascending.  This parameter can also be a function which takes two facet
     * values and should return a number, 0 if equal, 1 if the first argument is
     * bigger or -1 otherwise.
     *
     * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
     * @return {FacetValue[]|HierarchicalFacet} depending on the type of facet of
     * the attribute requested (hierarchical, disjunctive or conjunctive)
     * @example
     * helper.on('results', function(content){
     *   //get values ordered only by name ascending using the string predicate
     *   content.getFacetValues('city', {sortBy: ['name:asc']});
     *   //get values  ordered only by count ascending using a function
     *   content.getFacetValues('city', {
     *     // this is equivalent to ['count:asc']
     *     sortBy: function(a, b) {
     *       if (a.count === b.count) return 0;
     *       if (a.count > b.count)   return 1;
     *       if (b.count > a.count)   return -1;
     *     }
     *   });
     * });
     */
    getFacetValues(attribute: string, opts: any): SearchResults.FacetValue[] | SearchResults.HierarchicalFacet

    /**
     * Returns the facet stats if attribute is defined and the facet contains some.
     * Otherwise returns undefined.
     * @param {string} attribute name of the faceted attribute
     * @return {object} The stats of the facet
     */
    getFacetStats(attribute: string): any

    /**
     * Returns all refinements for all filters + tags. It also provides
     * additional information: count and exhausistivity for each filter.
     *
     * See the [refinement type](#Refinement) for an exhaustive view of the available
     * data.
     *
     * @return {Array.<Refinement>} all the refinements
     */
    getRefinements(): Array<SearchResults.Refinement>
  }

  module SearchResults {
    /**
     * @typedef SearchResults.Facet
     * @type {object}
     * @property {string} name name of the attribute in the record
     * @property {object} data the faceting data: value, number of entries
     * @property {object} stats undefined unless facet_stats is retrieved from algolia
     */
    interface Facet { 
      name: string
      data: object
      stats: object
    }

    /**
     * @typedef SearchResults.HierarchicalFacet
     * @type {object}
     * @property {string} name name of the current value given the hierarchical level, trimmed.
     * If root node, you get the facet name
     * @property {number} count number of objects matching this hierarchical value
     * @property {string} path the current hierarchical value full path
     * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
     * @property {HierarchicalFacet[]} data sub values for the current level
     */
    interface HierarchicalFacet {
      name: string
      count: number
      path: string
      isRefined: boolean
      data: HierarchicalFacet[]
    }

    /**
     * @typedef SearchResults.FacetValue
     * @type {object}
     * @property {string} name the facet value itself
     * @property {number} count times this facet appears in the results
     * @property {boolean} isRefined is the facet currently selected
     * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
     */
    interface FacetValue {
      name: string
      count: number
      isRefined: boolean
      isExcluded: boolean
    }

    /**
     * @typedef Refinement
     * @type {object}
     * @property {string} type the type of filter used:
     * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
     * @property {string} attributeName name of the attribute used for filtering
     * @property {string} name the value of the filter
     * @property {number} numericValue the value as a number. Only for numeric filters.
     * @property {string} operator the operator used. Only for numeric filters.
     * @property {number} count the number of computed hits for this filter. Only on facets.
     * @property {boolean} exhaustive if the count is exhaustive
     */
    interface Refinement {
      type: `numeric` | `facet` | `exclude` | `disjunctive` | `hierarchical`
      attributeName: string
      name: string
      numericValue: number
      operator: string
      count: number
      exhaustive: boolean
    }
  }
}

export = algoliasearchHelper;
