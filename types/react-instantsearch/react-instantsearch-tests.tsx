import * as React from "react";

import { connectMenu, connectRefinementList, connectStateResults, SearchState, StateResultsProvided } from "react-instantsearch/connectors";
import { InstantSearch, SearchBox, Index, Hits, Highlight, Menu } from "react-instantsearch/dom";
import { values } from 'lodash';

// https://community.algolia.com/react-instantsearch/guide/Search_state.html
() => {
  const searchState: SearchState = {
    range: {
      price: {
        min: 20,
        max: 3000
      }
    },
    configure: {
      aroundLatLng: true,
    },
    refinementList: {
      fruits: ['lemon', 'orange']
    },
    hierarchicalMenu: {
      products: 'Laptops > Surface'
    },
    menu: {
      brands: 'Sony'
    },
    multiRange: {
      rank: '2:5'
    },
    toggle: {
      freeShipping: true
    },
    relevancyStrictness: 98,
    hitsPerPage: 10,
    sortBy: 'mostPopular',
    query: 'ora',
    page: 2
  };
};

() => {
  const searchState: SearchState = {
    query: 'ora', // shared state between all indices
    page: 2, // shared state between all indices
    indices: {
      index1: {
        configure: {
          hitsPerPage: 3,
        },
      },
      index2: {
        configure: {
          hitsPerPage: 10,
        },
      },
    },
  };
};

// https://community.algolia.com/react-instantsearch/guide/Custom_connectors.html
// TODO
// () => {
//   const CoolWidget = createConnector({
//     displayName: 'CoolWidget',

//     getProvidedProps(props, searchState) {
//       // Since the `queryAndPage` searchState entry isn't necessarily defined, we need
//       // to default its value.
//       const [query, page] = searchState.queryAndPage || ['', 0];

//       // Connect the underlying component to the `queryAndPage` searchState entry.
//       return {
//         query,
//         page,
//       };
//     },

//     refine(props, searchState, newQuery, newPage) {
//       // When the underlying component calls its `refine` prop, update the searchState
//       // with the new query and page.
//       return {
//         // `searchState` represents the search state of *all* widgets. We need to extend it
//         // instead of replacing it, otherwise other widgets will lose their
//         // respective state.
//         ...searchState,
//         queryAndPage: [newQuery, newPage],
//       };
//     },
//   })(props =>
//     <div>
//       The query is {props.query}, the page is {props.page}.
//       {/*
//         Clicking on this button will update the searchState to:
//         {
//           ...otherSearchState,
//           query: 'algolia',
//           page: 20,
//         }
//       */}
//       <button onClick={() => props.refine('algolia', 20)} />
//       {/*
//         Clicking on this button will update the searchState to:
//         {
//           ...otherSearchState,
//           query: 'instantsearch',
//           page: 15,
//         }
//       */}
//       <button onClick={() => props.refine('instantsearch', 15)} />
//     </div>
//   );
// };

// TODO
// () => {
//   const Widget = () => null;

//   const CoolWidget = createConnector({
//     // displayName, getProvidedProps, refine

//     getSearchParameters(searchParameters, props, searchState) {
//       // Since the `queryAndPage` state entry isn't necessarily defined, we need
//       // to default its value.
//       const [query, page] = searchState.queryAndPage || ['', 0];

//       // When the `queryAndPage` state entry changes, update the query and page of
//       // search.
//       return searchParameters
//         .setQuery(query)
//         .setPage(page);
//     },
//   })(Widget);
// };

// TODO
// () => {
//   const Widget = () => null;

//   const CoolWidget = createConnector({
//     // displayName, getProvidedProps, refine, getSearchParameters

//     getMetadata(props, searchState) {
//       // Since the `queryAndPage` searchState entry isn't necessarily defined, we need
//       // to default its value.
//       const [query, page] = searchState.queryAndPage || ['', 0];

//       const filters = [];
//       if (query !== '') {
//         filters.push({
//           // Unique identifier for this filter.
//           key: `queryAndPage.query`,
//           // String label (or node) that should appear in the CurrentRefinements
//           // component.
//           label: `Query: ${query}`,
//           // Describes how clearing this filter affects the InstantSearch searchState.
//           // In our case, clearing the query just resets it to an empty string
//           // without affecting the page.
//           clear: nextSearchState => {
//             return {
//               ...nextSearchState,
//               // Do not depend on the current `searchState` here. Since filters can be
//               // cleared in batches, the `searchState` parameter is not up-to-date when
//               // this method is called.
//               queryAndPage: ['', nextSearchState.queryAndPage[1]],
//             };
//           },
//         });
//       }

//       if (page !== 0) {
//         filters.push({
//           key: `queryAndPage.page`,
//           label: `Page: ${page}`,
//           clear: nextSearchState => {
//             return {
//               ...nextSearchState,
//               queryAndPage: [nextSearchState.queryAndPage[0], 0],
//             };
//           },
//         });
//       }

//       return {
//         // This widget manipulates the `queryAndPage` state entry.
//         id: 'queryAndPage',
//         filters,
//       };
//     },
//   })(Widget);
// };

// TODO
// () => {
//   const Widget = () => null;

//   const CoolWidget = createConnector({
//     // displayName, getProvidedProps, refine, getSearchParameters, getMetadata

//     searchForFacetValues(props, searchState, nextRefinement) {
//       return {facetName: props.attribute, query: nextRefinement};
//     },
//   })(Widget);
// };

// TODO
// () => {
//   const Widget = () => null;

//   const CoolWidget = createConnector({
//     // displayName, getProvidedProps, refine, getSearchParameters, getMetadata

//     cleanUp(props, searchState) {
//       return omit('queryAndPage', searchState);
//     },
//   })(Widget);
// };

// https://community.algolia.com/react-instantsearch/guide/Conditional_display.html
() => {
  const Content = connectStateResults(
    ({ searchState }) =>
      searchState && searchState.query
        ? <div>
            The query {searchState.query} exists
          </div>
        : <div>No query</div>
  );
};

() => {
  const Content = connectStateResults(
    ({ searchState, searchResults }) =>
      searchResults && searchResults.nbHits !== 0
        ? <div>Some results</div>
        : <div>
            No results has been found for {searchState.query}
          </div>
  );
};

() => {
  const Content = connectStateResults(
    ({ error }) =>
      error ? <div>Some error</div> : <div>No error</div>
  );
};

() => {
  const Content = connectStateResults(
    ({ searching }) =>
      searching ? <div>We are searching</div> : <div>Search finished</div>
  );
};

() => {
  const Content = connectStateResults(
    ({ searchingForFacetValues }) =>
      searchingForFacetValues ? <div>We are searching</div> : <div>Search finished</div>
  );
};

() => {
  const App = () => (
    <InstantSearch indexName="first" searchClient={{}}>
      <SearchBox />
      <AllResults>
        <div>
          <Index indexName="first">
            <IndexResults>
              <div>
                <div>first: </div>
                <Hits />
              </div>
            </IndexResults>
          </Index>
          <Index indexName="second">
            <IndexResults>
              <div>
                <div>second: </div>
                <Hits />
              </div>
            </IndexResults>
          </Index>
          <Index indexName="third">
            <IndexResults>
              <div>
                <div>third: </div>
                <Hits />
              </div>
            </IndexResults>
          </Index>
        </div>
      </AllResults>
    </InstantSearch>
  );

  const IndexResults = connectStateResults(
    ({ searchState, searchResults, children }: React.PropsWithChildren<StateResultsProvided>) =>
      searchResults && searchResults.nbHits !== 0 ? (
        children as React.ReactElement
      ) : (
        <div>
          No results has been found for {searchState.query} and index{' '}
          {searchResults ? searchResults.index : ''}
        </div>
      )
  );

  const AllResults = connectStateResults(({ allSearchResults, children }: React.PropsWithChildren<StateResultsProvided>) => {
    const hasResults =
      allSearchResults &&
        values(allSearchResults).some(results => results.nbHits > 0);

    return !hasResults ? (
      <div>
        <div>No results in category, products or brand</div>
        <Index indexName="first" />
        <Index indexName="second" />
        <Index indexName="third" />
      </div>
    ) : (
      children as React.ReactElement
    );
  });
};

() => {
  const RefinementListWithSearchBox = connectRefinementList(props => {
    const values = props.items.map(item => {
      const label = item._highlightResult
        ? <Highlight attribute="label" hit={item}/>
        : item.label;

      return (
        <li key={item.label}>
          <span onClick={() => props.refine(item.value)}>
            {label} {item.isRefined ? '- selected' : ''}
          </span>
        </li>
      );
    });

    return (
      <div>
        <input type="search" onInput={e => props.searchForItems((e.target as HTMLInputElement).value)}/>
        <ul>{values}</ul>
      </div>
    );
  });

  return <RefinementListWithSearchBox attribute="products" />;
};

// https://community.algolia.com/react-instantsearch/guide/Virtual_widgets.html
() => {
  const VirtualMenu = connectMenu(() => null);
  const Hoodies = () => <VirtualMenu attribute="clothes" defaultRefinement="hoodies" />;

  const App = () => (
    <InstantSearch
      indexName="..."
      searchClient={{}}
    >
      <SearchBox defaultRefinement="hi" />
      <Hoodies />
      <Menu attribute="fruits" defaultRefinement="Orange" />
    </InstantSearch>
  );
};
