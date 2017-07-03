import * as algoliasearch from "algoliasearch";
import { ClientOptions, SynonymOption, AlgoliaUserKeyOptions, SearchSynonymOptions, AlgoliaResponse,
    AlgoliaSecuredApiOptions, AlgoliaIndexSettings, AlgoliaQueryParameters, AlgoliaIndex } from "algoliasearch";

let _algoliaResponse: AlgoliaResponse = {
    hits: [{}, {}],
    page: 0,
    nbHits: 12,
    nbPages: 6,
    hitsPerPage: 2,
    processingTimeMS: 32,
    query: "",
    params: "",
};

let _clientOptions: ClientOptions = {
    timeout: 12,
    protocol: "",
    httpAgent: "",
};

let _synonymOption: SynonymOption = {
    forwardToSlaves: false,
    replaceExistingSynonyms: false,
};

let _algoliaUserKeyOptions: AlgoliaUserKeyOptions = {
    validity: 0,
    maxQueriesPerIPPerHour: 0,
    indexes: [""],
    queryParameters: { attributesToRetrieve: ["algolia"] },
    description: "",
};

let _searchSynonymOptions: SearchSynonymOptions = {
    query: "",
    page: 0,
    type: "",
    hitsPerPage: 0,
};

let _algoliaSecuredApiOptions: AlgoliaSecuredApiOptions = {
    filters: "",
    validUntil: 0,
    restrictIndices: "",
    userToken: "",
};

let _algoliaIndexSettings: AlgoliaIndexSettings = {
    attributesToIndex: [""],
    attributesforFaceting: [""],
    unretrievableAttributes: [""],
    attributesToRetrieve: [""],
    ranking: [""],
    customRanking: [""],
    slaves: [""],
    maxValuesPerFacet: "",
    attributesToHighlight: [""],
    attributesToSnippet: [""],
    highlightPreTag: "",
    highlightPostTag: "",
    snippetEllipsisText: "",
    restrictHighlightAndSnippetArrays: false,
    hitsPerPage: 0,
    minWordSizefor1Typo: 0,
    minWordSizefor2Typos: 0,
    typoTolerance: false,
    allowTyposOnNumericTokens: false,
    ignorePlurals: false,
    disableTypoToleranceOnAttributes: "",
    separatorsToIndex: "",
    queryType: "",
    removeWordsIfNoResults: "",
    advancedSyntax: false,
    optionalWords: [""],
    removeStopWords: [""],
    disablePrefixOnAttributes: [""],
    disableExactOnAttributes: [""],
    exactOnSingleWordQuery: "",
    alternativesAsExact: false,
    attributeForDistinct: "",
    distinct: false,
    numericAttributesToIndex: [""],
    allowCompressionOfIntegerArray: false,
    altCorrections: [{}],
    minProximity: 0,
    placeholders: "",
};

let _algoliaQueryParameters: AlgoliaQueryParameters = {
    query: "",
    filters: "",
    attributesToRetrieve: [""],
    restrictSearchableAttributes: [""],
    facets: "",
    maxValuesPerFacet: "",
    attributesToHighlight: [""],
    attributesToSnippet: [""],
    highlightPreTag: "",
    highlightPostTag: "",
    snippetEllipsisText: "",
    restrictHighlightAndSnippetArrays: false,
    hitsPerPage: 0,
    page: 0,
    offset: 0,
    length: 0,
    minWordSizefor1Typo: 0,
    minWordSizefor2Typos: 0,
    typoTolerance: false,
    allowTyposOnNumericTokens: false,
    ignorePlurals: false,
    disableTypoToleranceOnAttributes: "",
    aroundLatLng: "",
    aroundLatLngViaIP: "",
    aroundRadius: "",
    aroundPrecision: 0,
    minimumAroundRadius: 0,
    insideBoundingBox: "",
    queryType: "",
    insidePolygon: "",
    removeWordsIfNoResults: "",
    advancedSyntax: false,
    optionalWords: [""],
    removeStopWords: [""],
    disableExactOnAttributes: [""],
    exactOnSingleWordQuery: "",
    alternativesAsExact: true,
    distinct: 0,
    getRankingInfo: false,
    numericAttributesToIndex: [""],
    numericFilters: [""],
    tagFilters: "",
    facetFilters: "",
    analytics: false,
    analyticsTags: [""],
    synonyms: true,
    replaceSynonymsInHighlight: false,
    minProximity: 0,
};

let index: AlgoliaIndex = algoliasearch("", "").initIndex("");

let search = index.search({query: ""});
             index.search({query: ""}, (err, res) => {});
