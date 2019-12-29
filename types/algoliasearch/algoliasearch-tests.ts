import * as algoliasearch from 'algoliasearch';
import {
    ClientOptions,
    SynonymOption,
    ApiKeyOptions,
    SearchSynonymOptions,
    SecuredApiOptions,
    Index,
    Response,
    IndexSettings,
    QueryParameters,
    ApiKey,
    MultiResponse,
    Client,
} from 'algoliasearch';
import * as algoliasearchLite from 'algoliasearch/lite';

let _algoliaResponse: Response = {
    hits: [{}, {}],
    page: 0,
    nbHits: 12,
    nbPages: 6,
    hitsPerPage: 2,
    processingTimeMS: 32,
    query: '',
    params: '',
    index: '',
    exhaustiveFacetsCount: true,
    exhaustiveNbHits: false,
};

let _clientOptions: ClientOptions = {
    timeout: 12,
    protocol: '',
    httpAgent: '',
};

let _synonymOption: SynonymOption = {
    forwardToReplicas: false,
    replaceExistingSynonyms: false,
};

let _algoliaApiKeyOptions: ApiKeyOptions = {
    validity: 0,
    maxQueriesPerIPPerHour: 0,
    indexes: [''],
    queryParameters: { attributesToRetrieve: ['algolia'] },
    description: '',
};

let _searchSynonymOptions: SearchSynonymOptions = {
    query: '',
    page: 0,
    type: '',
    hitsPerPage: 0,
};

let _algoliaSecuredApiOptions: SecuredApiOptions = {
    filters: '',
    validUntil: 0,
    restrictIndices: '',
    userToken: '',
};

let _algoliaSecuredApiOptionsAdvanced: SecuredApiOptions = {
  filters: '',
  validUntil: 0,
  restrictIndices: ['', ''],
  userToken: '',
  attributesToRetrieve: ['foo', 'bar'],
  restrictSearchableAttributes: [''],
};

let _algoliaIndexSettings: IndexSettings = {
    attributesToIndex: [''],
    attributesForFaceting: [''],
    unretrievableAttributes: [''],
    attributesToRetrieve: [''],
    ranking: [''],
    customRanking: [''],
    replicas: [''],
    maxValuesPerFacet: 100,
    attributesToHighlight: [''],
    attributesToSnippet: [''],
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
    queryType: 'prefixAll',
    removeWordsIfNoResults: '',
    advancedSyntax: false,
    optionalWords: [''],
    removeStopWords: [''],
    disablePrefixOnAttributes: [''],
    disableExactOnAttributes: [''],
    exactOnSingleWordQuery: '',
    alternativesAsExact: ['ignorePlurals'],
    attributeForDistinct: '',
    distinct: false,
    numericAttributesToIndex: [''],
    allowCompressionOfIntegerArray: false,
    altCorrections: [{}],
    minProximity: 0,
    placeholders: { '': [''] },
    camelCaseAttributes: [''],
    sortFacetValuesBy: 'count',
    queryLanguages: ['fr', 'es'],
    paginationLimitedTo: 500,
};

let _algoliaQueryParameters: QueryParameters = {
    query: '',
    filters: '',
    attributesToRetrieve: [''],
    restrictSearchableAttributes: [''],
    facets: [''],
    facetingAfterDistinct: true,
    maxValuesPerFacet: 2,
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
    disableTypoToleranceOnAttributes: [''],
    aroundLatLng: '',
    aroundLatLngViaIP: true,
    aroundRadius: 0,
    aroundPrecision: 0,
    minimumAroundRadius: 0,
    insideBoundingBox: [[0]],
    queryType: 'prefixAll',
    insidePolygon: [[0]],
    removeWordsIfNoResults: 'firstWords',
    advancedSyntax: false,
    optionalWords: [''],
    removeStopWords: [''],
    disableExactOnAttributes: [''],
    exactOnSingleWordQuery: 'attribute',
    alternativesAsExact: ['ignorePlurals'],
    distinct: 0,
    getRankingInfo: false,
    numericAttributesToIndex: [''],
    numericAttributesForFiltering: [''],
    numericFilters: [''],
    tagFilters: [''],
    facetFilters: ['', ['']],
    analytics: false,
    clickAnalytics: true,
    analyticsTags: [''],
    synonyms: true,
    replaceSynonymsInHighlight: false,
    minProximity: 0,
    sortFacetValuesBy: 'alpha',
};

let _apiKey: ApiKey = {
    value: '0eb3e6308abccdf9b67d70ddacb418b4',
    createdAt: 1513462891,
    acl: ['search'],
    validity: 0,
};

let client: Client = algoliasearch('', '');
let index: Index = client.initIndex('');

let search = index.search({ query: '' });

index.search({ query: '' }, (err, res) => {});

// partialUpdateObject
index.partialUpdateObject({}, () => {});
index.partialUpdateObject({}, false, () => {});
index.partialUpdateObject({}).then(() => {});
index.partialUpdateObject({}, false).then(() => {});

// partialUpdateObjects
index.partialUpdateObjects([{}], () => {});
index.partialUpdateObjects([{}], false, () => {});
index.partialUpdateObjects([{}]).then(() => {});
index.partialUpdateObjects([{}], false).then(() => {});

let indexName: string = index.indexName;

// complete copy
client.copyIndex('from', 'to').then(() => {});
client.copyIndex('from', 'to', () => {});
// with scope
client.copyIndex('from', 'to', ['settings']).then(() => {});
client.copyIndex('from', 'to', ['synonyms', 'rules'], () => {});

// Browsing
const browser = index.browseAll();
index.browseAll('query');
index.browseAll('', {
    filters: 'dog',
});

let hits: Object[] = [];

browser.on('result', function onResult(content) {
    hits = hits.concat(content.hits);
});

browser.on('end', function onEnd() {
    const _message = `We got ${hits.length} hits`;
});

browser.on('error', function onError(err) {
    throw err;
});

browser.stop();

index.setSettings({ hitsPerPage: 10 }, () => {});
index.setSettings({ hitsPerPage: 10 }, { forwardToReplicas: true }, () => {});
index.setSettings({ hitsPerPage: 10 }).then(() => {});
index.setSettings({ hitsPerPage: 10 }, { forwardToReplicas: true }).then(() => {});

index.browse('', {
    advancedSyntax: false,
    attributesToRetrieve: ['dogs'],
});
client.copyIndex('from', 'to', ['settings']).then(() => {});
client.copyIndex('from', 'to', ['synonyms', 'rules'], () => {});

const liteClient: algoliasearchLite.Client = algoliasearchLite('', '');

liteClient.search([], (err: Error, res: MultiResponse) => {});
liteClient.search([]).then((res: MultiResponse) => {});
type Res = { zipzop: true };
liteClient.search<Res>([]).then((res: MultiResponse<Res>) => {});
