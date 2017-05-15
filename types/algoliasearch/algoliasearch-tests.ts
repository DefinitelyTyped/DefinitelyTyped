import algoliasearch = require('algoliasearch');
import { ClientOptions, SynonymOption, AlgoliaUserKeyOptions, SearchSynonymOptions,
    AlgoliaSecuredApiOptions, AlgoliaIndexSettings, AlgoliaQueryParameters, AlgoliaIndex } from "algoliasearch";

var _clientOptions: ClientOptions = {
    timeout : 12,
    protocol: "",
    httpAgent: ""
};

var _synonymOption: SynonymOption = {
    forwardToSlaves: false,
    replaceExistingSynonyms: false
};

var _algoliaUserKeyOptions : AlgoliaUserKeyOptions = {
    validity: 0,
    maxQueriesPerIPPerHour: 0,
    indexes: [""],
    queryParameters: { attributesToRetrieve: ["algolia"] },
    description: ""
};

var _searchSynonymOptions : SearchSynonymOptions = {
    query: "",
    page: 0,
    type: "",
    hitsPerPage: 0
};

var _algoliaSecuredApiOptions: AlgoliaSecuredApiOptions = {
    filters: "",
    validUntil: 0,
    restrictIndices: "",
    userToken: ""
};

var _algoliaIndexSettings : AlgoliaIndexSettings = {
    attributesToIndex: [""],
    attributesforFaceting: [""],
    unretrievableAttributes: [""],
    attributesToRetrieve: [""],
    ranking: [""],
    customRanking: [""],
    slaves: [""],
    maxValuesPerFacet: '',
    attributesToHighlight: [""],
    attributesToSnippet: [""],
    highlightPreTag: '',
    highlightPostTag: '',
    snippetEllipsisText: '',
    restrictHighlightAndSnippetArrays: false,
    hitsPerPage: 0,
    minWordSizefor1Typo: 0,
    minWordSizefor2Typos: 0,
    typoTolerance: false,
    allowTyposOnNumericTokens: false,
    ignorePlurals: false,
    disableTypoToleranceOnAttributes: '',
    separatorsToIndex: '',
    queryType: '',
    removeWordsIfNoResults: '',
    advancedSyntax: false,
    optionalWords: [""],
    removeStopWords: [""],
    disablePrefixOnAttributes: [""],
    disableExactOnAttributes: [""],
    exactOnSingleWordQuery: '',
    alternativesAsExact: false,
    attributeForDistinct: "",
    distinct: false,
    numericAttributesToIndex: [""],
    allowCompressionOfIntegerArray: false,
    altCorrections: [{}],
    minProximity: 0,
    placeholders: ''
};

var _algoliaQueryParameters : AlgoliaQueryParameters = {
    query: '',
    filters: '',
    attributesToRetrieve: [""],
    restrictSearchableAttributes: [""],
    facets: '',
    maxValuesPerFacet: '',
    attributesToHighlight: [''],
    attributesToSnippet: [''],
    highlightPreTag: '',
    highlightPostTag: '',
    snippetEllipsisText: '',
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
    disableTypoToleranceOnAttributes: '',
    aroundLatLng: '',
    aroundLatLngViaIP: '',
    aroundRadius: '',
    aroundPrecision: 0,
    minimumAroundRadius: 0,
    insideBoundingBox: '',
    queryType: '',
    insidePolygon: '',
    removeWordsIfNoResults: '',
    advancedSyntax: false,
    optionalWords: [''],
    removeStopWords: [''],
    disableExactOnAttributes: [''],
    exactOnSingleWordQuery: '',
    alternativesAsExact: true,
    distinct: 0,
    getRankingInfo: false,
    numericAttributesToIndex: [''],
    numericFilters: [''],
    tagFilters: '',
    facetFilters: '',
    analytics: false,
    analyticsTags: [''],
    synonyms: true,
    replaceSynonymsInHighlight: false,
    minProximity: 0
};

var index: AlgoliaIndex = algoliasearch('', '').initIndex('');

var search = index.search({query: ""});
index.search({query: ""}, function(err, res){});


