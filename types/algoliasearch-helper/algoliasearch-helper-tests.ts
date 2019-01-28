import * as algoliasearch from 'algoliasearch';
import * as algoliasearchHelper from 'algoliasearch-helper';
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
