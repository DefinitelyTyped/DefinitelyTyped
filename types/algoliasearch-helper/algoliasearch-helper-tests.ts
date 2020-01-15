import * as algoliasearch from 'algoliasearch';
import * as algoliasearchHelper from 'algoliasearch-helper';
// tslint:disable-next-line:no-duplicate-imports
import { SearchResults, SearchParameters } from 'algoliasearch-helper';

// https://community.algolia.com/algoliasearch-helper-js/reference.html#module:algoliasearchHelper

const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
const helper = algoliasearchHelper(client, 'bestbuy', {
  facets: ['shipping'],
  disjunctiveFacets: ['category']
});
helper.on('result', (result) => {
  console.log(result);
});
helper.toggleRefine('Movies & TV Shows')
      .toggleRefine('Free shipping')
      .search();

const updateTheResult = (results: SearchResults, state: SearchParameters) => {
  console.log(results, state);
};
helper.on('result', updateTheResult);
helper.once('result', updateTheResult);
helper.removeListener('result', updateTheResult);
helper.removeAllListeners('result');

() => {
  // Changing the number of records returned per page to 1
  // This example uses the callback API
  const state = helper.searchOnce({hitsPerPage: 1},
    (error, content: SearchResults, state: SearchParameters) => {});

  // Changing the number of records returned per page to 1
  // This example uses the promise API
  const state1 = helper.searchOnce({hitsPerPage: 1})
                  .then(promiseHandler);

  function promiseHandler(res: {content: SearchResults, state: SearchParameters}) {
    // res contains
    // {
    //   content : SearchResults
    //   state   : SearchParameters (the one used for this specific search)
    // }
  }
};

helper.setIndex('highestPrice_products').getIndex();
helper.setPage(0).nextPage().getPage();
helper.setPage(1).previousPage().getPage();
helper.setQueryParameter('hitsPerPage', 20).search();
const hitsPerPage = helper.getQueryParameter('hitsPerPage');
helper.addFacetRefinement('film-genre', 'comedy');
helper.addFacetRefinement('film-genre', 'science-fiction');

() => {
  const indexName = 'test';
  const helper2 = algoliasearchHelper(client, indexName, {
    facets: ['nameOfTheAttribute']
  });
};

// Removing all the refinements
helper.clearRefinements().search();

// Removing all the filters on a the category attribute.
helper.clearRefinements('category').search();

// Removing only the exclude filters on the category facet.
helper.clearRefinements((value, attribute, type) => {
  return type === 'exclude' && attribute === 'category';
}).search();

// https://community.algolia.com/algoliasearch-helper-js/reference.html#AlgoliaSearchHelper#hasRefinements

helper.hasRefinements('price'); // false
helper.addNumericRefinement('price', '>', 100);
helper.hasRefinements('price'); // true

helper.hasRefinements('color'); // false
helper.addFacetRefinement('color', 'blue');
helper.hasRefinements('color'); // true

helper.hasRefinements('material'); // false
helper.addDisjunctiveFacetRefinement('material', 'plastic');
helper.hasRefinements('material'); // true

helper.hasRefinements('categories'); // false
helper.toggleFacetRefinement('categories', 'kitchen > knife');
helper.hasRefinements('categories'); // true

// https://community.algolia.com/algoliasearch-helper-js/reference.html#AlgoliaSearchHelper#getRefinements

helper.addNumericRefinement('price', '>', 100);
helper.getRefinements('price');

helper.addFacetRefinement('color', 'blue');
helper.addFacetExclusion('color', 'red');
helper.getRefinements('color');

helper.addDisjunctiveFacetRefinement('material', 'plastic');

helper.addDisjunctiveFacetRefinement('tech', 'crt');
helper.addDisjunctiveFacetRefinement('tech', 'led');
helper.addDisjunctiveFacetRefinement('tech', 'plasma');

() => {
  const helper2 = algoliasearchHelper(client, 'test', {
      disjunctiveFacets: ['nameOfTheAttribute']
    });
};

// https://community.algolia.com/algoliasearch-helper-js/reference.html#AlgoliaSearchHelper#hasRefinements

// hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
helper.hasRefinements('price'); // false
helper.addNumericRefinement('price', '>', 100);
helper.hasRefinements('price'); // true

helper.hasRefinements('color'); // false
helper.addFacetRefinement('color', 'blue');
helper.hasRefinements('color'); // true

helper.hasRefinements('material'); // false
helper.addDisjunctiveFacetRefinement('material', 'plastic');
helper.hasRefinements('material'); // true

helper.hasRefinements('categories'); // false
helper.toggleFacetRefinement('categories', 'kitchen > knife');
helper.hasRefinements('categories'); // true

const params = helper.getState().getQueryParams();
client.search([{
  indexName: 'test',
  query: '',
  params
}]);

// https://community.algolia.com/algoliasearch-helper-js/reference.html#SearchResults#getFacetValues
helper.on('result', (content) => {
  // get values ordered only by name ascending using the string predicate
  content.getFacetValues('city', {sortBy: ['name:asc']});
  // get values  ordered only by count ascending using a function
  content.getFacetValues('city', {
    // this is equivalent to ['count:asc']
    sortBy(a: { count: number }, b: { count: number }) {
      if (a.count === b.count) return 0;
      if (a.count > b.count)   return 1;
      if (b.count > a.count)   return -1;
    }
  });
});

// https://community.algolia.com/algoliasearch-helper-js/reference.html#SearchParameters#addTagRefinement

const searchparameter = new SearchParameters();

// for price = 50 or 40
searchparameter.addNumericRefinement('price', '=', [50, 40]);

// for size = 38 and 40
searchparameter.addNumericRefinement('size', '=', 38);
searchparameter.addNumericRefinement('size', '=', 40);

let queryParameters = new SearchParameters({}); // everything is optional
queryParameters = new SearchParameters({
    advancedSyntax: true,
    allowTyposOnNumericTokens: true,
    analytics: true,
    analyticsTags: ['test'],
    aroundLatLng: 'latitude',
    aroundLatLngViaIP: true,
    aroundPrecision: 1,
    aroundRadius: 1,
    attributesToHighlight: ['test'],
    attributesToRetrieve: ['test'],
    attributesToSnippet: ['test'],
    disableExactOnAttributes: ['test'],
    disjunctiveFacets: ['test'],
    disjunctiveFacetsRefinements: { test: ['test'] },
    distinct: 2,
    enableExactOnSingleWordQuery: true,
    facets: ['test'],
    facetsExcludes: { test: ['test'] },
    facetsRefinements: { test: ['test'] },
    getRankingInfo: true,
    hierarchicalFacets: ['test'],
    hierarchicalFacetsRefinements: { test: ['test'] },
    highlightPostTag: 'test',
    highlightPreTag: 'test',
    hitsPerPage: 1,
    ignorePlurals: true,
    index: 'test',
    insideBoundingBox: [[1, 2, 3, 4]],
    insidePolygon: [[1, 2, 3, 4]],
    length: 2,
    maxValuesPerFacet: 1,
    minimumAroundRadius: 1,
    minProximity: 1,
    minWordSizefor1Typo: 1,
    minWordSizefor2Typos: 1,
    numericFilters: ['test'],
    numericRefinements: { test: { '=': [1], '>': [[2, 3]] } },
    offset: 1,
    optionalFacetFilters: 'test',
    optionalTagFilters: 'test',
    optionalWords: ['test'],
    page: 1,
    query: 'test',
    queryType: 'prefixAll',
    removeWordsIfNoResults: 'none',
    replaceSynonymsInHighlight: true,
    restrictSearchableAttributes: ['test'],
    snippetEllipsisText: '...',
    synonyms: true,
    tagFilters: ['test'],
    tagRefinements: ['test'],
    typoTolerance: true,
});

queryParameters.advancedSyntax;
queryParameters.allowTyposOnNumericTokens;
queryParameters.analytics;
queryParameters.analyticsTags;
queryParameters.aroundLatLng;
queryParameters.aroundLatLngViaIP;
queryParameters.aroundPrecision;
queryParameters.aroundRadius;
queryParameters.attributesToHighlight;
queryParameters.attributesToRetrieve;
queryParameters.attributesToSnippet;
queryParameters.disableExactOnAttributes;
queryParameters.disjunctiveFacets;
queryParameters.disjunctiveFacetsRefinements;
queryParameters.distinct;
queryParameters.enableExactOnSingleWordQuery;
queryParameters.facets;
queryParameters.facetsExcludes;
queryParameters.facetsRefinements;
queryParameters.getRankingInfo;
queryParameters.hierarchicalFacets;
queryParameters.hierarchicalFacetsRefinements;
queryParameters.highlightPostTag;
queryParameters.highlightPreTag;
queryParameters.hitsPerPage;
queryParameters.ignorePlurals;
queryParameters.index;
queryParameters.insideBoundingBox;
queryParameters.insidePolygon;
queryParameters.length;
queryParameters.maxValuesPerFacet;
queryParameters.minimumAroundRadius;
queryParameters.minProximity;
queryParameters.minWordSizefor1Typo;
queryParameters.minWordSizefor2Typos;
queryParameters.numericFilters;
queryParameters.numericRefinements;
queryParameters.offset;
queryParameters.optionalFacetFilters;
queryParameters.optionalTagFilters;
queryParameters.optionalWords;
queryParameters.page;
queryParameters.query;
queryParameters.queryType;
queryParameters.removeWordsIfNoResults;
queryParameters.replaceSynonymsInHighlight;
queryParameters.restrictSearchableAttributes;
queryParameters.snippetEllipsisText;
queryParameters.synonyms;
queryParameters.tagFilters;
queryParameters.tagRefinements;
queryParameters.typoTolerance;

queryParameters.addDisjunctiveFacet('test');
queryParameters.addDisjunctiveFacetRefinement('test', 'test');
queryParameters.addExcludeRefinement('test', 'test');
queryParameters.addFacet('test');
queryParameters.addFacetRefinement('test', 'test');
queryParameters.addHierarchicalFacet({});
queryParameters.addHierarchicalFacetRefinement('test', 'test');
queryParameters.addNumericRefinement('test', '>', [7]);
queryParameters.addTagRefinement('test');
queryParameters.clearRefinements('test');
queryParameters.clearTags();
queryParameters.filter(['test']);
queryParameters.getConjunctiveRefinements('test');
queryParameters.getDisjunctiveRefinements('test');
queryParameters.getExcludeRefinements('test');
queryParameters.getHierarchicalFacetBreadcrumb('test');
queryParameters.getHierarchicalFacetByName('test');
queryParameters.getHierarchicalRefinement('test');
queryParameters.getNumericRefinement('test', '=');
queryParameters.getNumericRefinements('test');
queryParameters.getQueryParameter('test');
queryParameters.getRefinedDisjunctiveFacets('test', {});
queryParameters.getRefinedHierarchicalFacets('test', {});
queryParameters.getUnrefinedDisjunctiveFacets();
queryParameters.isConjunctiveFacet('test');
queryParameters.isDisjunctiveFacet('test');
queryParameters.isDisjunctiveFacetRefined('test', 'test');
queryParameters.isExcludeRefined('test', 'test');
queryParameters.isFacetRefined('test', 'test');
queryParameters.isHierarchicalFacet('test');
queryParameters.isHierarchicalFacetRefined('test', 'test');
queryParameters.isNumericRefined('test', '>', 'test');
queryParameters.isTagRefined('test');
queryParameters.removeDisjunctiveFacet('test');
queryParameters.removeDisjunctiveFacetRefinement('test', 'test');
queryParameters.removeExcludeRefinement('test', 'test');
queryParameters.removeFacet('test');
queryParameters.removeFacetRefinement('test', 'test');
queryParameters.removeHierarchicalFacet('test');
queryParameters.removeHierarchicalFacetRefinement('test');
queryParameters.removeTagRefinement('test');
queryParameters.setDisjunctiveFacets(['test']);
queryParameters.setFacets(['test']);
queryParameters.setHitsPerPage(1);
queryParameters.setPage(1);
queryParameters.setQuery('test');
queryParameters.setQueryParameter('test', {});
queryParameters.setQueryParameters({ test: {} });
queryParameters.setTypoTolerance('test');
queryParameters.toggleConjunctiveFacetRefinement('test', {});
queryParameters.toggleDisjunctiveFacetRefinement('test', {});
queryParameters.toggleExcludeFacetRefinement('test', {});
queryParameters.toggleFacetRefinement('test', {});
queryParameters.toggleHierarchicalFacetRefinement('test', {});
queryParameters.toggleTagRefinement('test');

// static methods
SearchParameters.make(queryParameters);
SearchParameters.validate(queryParameters, { queryType: 'prefixAll' });
