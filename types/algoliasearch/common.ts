export interface QueryParameters {
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
  maxValuesPerFacet?: number;
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

  nbShards?: number;
  userData?: string | object;
}

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
  nbPage: number;
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
  facets: {
    [facetName: string]: { [facetValue: string]: number };
  };
}

export namespace SearchForFacetValues {
  export interface Parameters extends QueryParameters {
    /**
     * The facet to search in
     */
    facetName: string;
    /**
     * The query for the search in this facet
     */
    facetQuery: string;
  }

  export interface Response {
    facetHits: { value: string; highlighted: string; count: number }[];
    exhaustiveFacetsCount: boolean;
    processingTimeMS: number;
  }
}

export interface Log {
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

export interface Task {
  taskID: number;
}

export interface IndexSettings {
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
   * List of attributes you want to use for textual search
   * default: []
   * https://github.com/algolia/algoliasearch-client-js#searchableattributes
   */
  searchableAttributes?: string[];
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
  maxValuesPerFacet?: number;
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
   * List of attributes on which you want to apply word-splitting ("decompounding") for
   * each of the languages supported (German, Dutch, and Finnish as of 05/2018)
   * default: {de: [], nl: [], fi: []}
   */
  decompoundedAttributes?: { [key in Partial<'nl' | 'de' | 'fi'>]: string[] };
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
  altCorrections?: {}[];
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

export interface Response {
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
  facets?: {
    [facetName: string]: { [facetValue: string]: number };
  };
}

export interface MultiResponse {
  results: Response[];
}
