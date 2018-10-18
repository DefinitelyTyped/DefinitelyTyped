import * as React from "react";
import { InstantSearch, Hits, Highlight, SearchBox, RefinementList, CurrentRefinements, ClearRefinements, Pagination, Menu, Configure, createConnector, Index } from 'react-instantsearch/dom';
import { connectHighlight, connectSearchBox, connectMenu, connectRefinementList, connectStateResults, SearchBoxProvided, Hit, SearchState } from "react-instantsearch/connectors";
import { orderBy, omit, values } from 'lodash';
import { createInstantSearch } from "react-instantsearch-core";

// DOM
// https://community.algolia.com/react-instantsearch/Getting_started.html
() => {
  const App = () => (
    <InstantSearch
      appId="latency"
      apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
      indexName="bestbuy"
    >
      <Search />
    </InstantSearch>
  );

  function Search() {
    return (
      <div className="container">
        <Hits />
      </div>
    );
  }

  function Product({ hit }: { hit: Hit }) {
    return <div>{hit.name}</div>;
  }

  function Search2() {
    return (
      <div>
        <Hits hitComponent={Product} />
      </div>
    );
  }

  function Product2({ hit }: { hit: Hit }) {
    return (
      <div style={{ marginTop: '10px' }}>
        <span className="hit-name">
          <Highlight attribute="name" hit={hit} />
        </span>
      </div>
    );
  }

  function Search3() {
    return (
      <div className="container">
        <SearchBox />
        <RefinementList attribute="category" />
        <Hits hitComponent={Product} />
      </div>
    );
  }

  function Search4() {
    return (
      <div className="container">
        <CurrentRefinements />
        <ClearRefinements />
        <SearchBox />
        <RefinementList attribute="category" />
        <Hits hitComponent={Product} />
        <Pagination />
      </div>
    );
  }
};

// https://community.algolia.com/react-instantsearch/guide//Highlighting_results.html
() => {
  const Hit = ({ hit }: { hit: Hit }) => (
    <p>
      <Highlight attribute="description" hit={hit} tagName="mark" />
    </p>
  );

  function App() {
    return (
      <InstantSearch
        appId="latency"
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        indexName="instant_search"
      >
        <Hits hitComponent={Hit} />
      </InstantSearch>
    );
  }
};

// TODO
// () => {
//   const CustomHighlight = connectHighlight(
//     ({ highlight, attribute, hit, highlightProperty }) => {
//       const parsedHit = highlight({
//         attribute,
//         hit,
//         highlightProperty: '_highlightResult'
//       });
//       const highlightedHits = parsedHit.map(part => {
//         if (part.isHighlighted) return <mark>{part.value}</mark>;
//         return part.value;
//       });
//       return <div>{highlightedHits}</div>;
//     }
//   );

//   const Hit = ({ hit }: { hit: Hit }) => (
//     <p>
//       <CustomHighlight attribute="description" hit={hit} />
//     </p>
//   );

//   function App() {
//     return (
//       <InstantSearch
//         appId="latency"
//         apiKey="6be0576ff61c053d5f9a3225e2a90f76"
//         indexName="instant_search"
//       >
//         <Hits hitComponent={Hit} />
//       </InstantSearch>
//     );
//   }
// };

// https://community.algolia.com/react-instantsearch/guide/i18n.html
() => {
  const App = () => (
    <InstantSearch
      appId="..."
      apiKey="..."
      indexName="..."
    >
      <Menu
        attribute="fruits"
        translations={{ showMore: 'Voir plus' }}
      />
    </InstantSearch>
  );
};

// https://community.algolia.com/react-instantsearch/guide/Sorting_and_filtering.html
// TODO
// () => {
//   const App = () => (
//     <InstantSearch
//       appId="..."
//       apiKey="..."
//       indexName="..."
//     >
//       <SearchBox defaultRefinement="hi" />
//       <RefinementList
//         attribute="category"
//         transformItems={items =>
//           orderBy(items, ['label', 'count'], ['asc', 'desc'])
//         }
//       />
//     </InstantSearch>
//   );
// };

// https://community.algolia.com/react-instantsearch/guide/Connectors.html
() => {
  const MySearchBox = ({currentRefinement, refine}: SearchBoxProvided) =>
    <input
      type="text"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
    />;

  // `ConnectedSearchBox` renders a `<MySearchBox>` widget that is connected to
  // the <InstantSearch> state, providing it with `currentRefinement` and `refine` props for
  // reading and manipulating the current query of the search.
  const ConnectedSearchBox = connectSearchBox(MySearchBox);
};

// https://community.algolia.com/react-instantsearch/guide/Default_refinements.html
() => {
  const App = () => (
    <InstantSearch
      appId="..."
      apiKey="..."
      indexName="..."
    >
      <SearchBox defaultRefinement="hi" />
      <Menu attribute="fruits" defaultRefinement="Orange" />
    </InstantSearch>
  );
};

// TODO
// () => {
//   const VirtualMenu = connectMenu(() => null);

//   const App = () => (
//     <InstantSearch
//       appId="..."
//       apiKey="..."
//       indexName="..."
//     >
//       <div>
//         <CurrentRefinements
//           transformItems={items =>
//             items.filter(item => item.currentRefinement !== 'Orange')
//           }
//         />
//         <SearchBox/>
//         <VirtualMenu attribute="fruits" defaultRefinement="Orange" />
//         <Menu attribute="origin" defaultRefinement="Spain" />
//       </div>
//     </InstantSearch>
//   );
// };

// https://community.algolia.com/react-instantsearch/guide/Searching_in_Lists.html

<RefinementList attribute="products" searchable />;

() => {
  const RefinementListWithSearchBox = connectRefinementList(props => {
    const values = props.items.map(item => {
      const label = item._highlightResult
        ? <Highlight attribute="label" hit={item}/>
        : item.label;

      return (
        <li key={item.value}>
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
      appId="..."
      apiKey="..."
      indexName="..."
    >
      <SearchBox defaultRefinement="hi" />
      <Hoodies />
      <Menu attribute="fruits" defaultRefinement="Orange" />
    </InstantSearch>
  );
};

// https://community.algolia.com/react-instantsearch/guide/Search_parameters.html
<InstantSearch
  appId="appId"
  apiKey="apiKey"
  indexName="indexName"
>
  <Configure distinct={1}/>
  // widgets
</InstantSearch>;

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
    <InstantSearch appId="" apiKey="" indexName="first">
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
    ({ searchState, searchResults, children }) =>
      searchResults && searchResults.nbHits !== 0 ? (
        children as React.ReactElement<any>
      ) : (
        <div>
          No results has been found for {searchState.query} and index{' '}
          {searchResults ? searchResults.index : ''}
        </div>
      )
  );

  const AllResults = connectStateResults(({ allSearchResults, children }) => {
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
      children as React.ReactElement<any>
    );
  });
};

// https://github.com/algolia/react-instantsearch/blob/master/packages/react-instantsearch-dom/src/widgets/InstantSearch.js
() => {
  const InstantSearch = createInstantSearch(
    () => ({}),
    {
      Root: 'div',
      props: {
        className: 'ais-InstantSearch__root',
      },
    }
  );

  <InstantSearch />;
};
