import * as React from 'react';
import {
  ClearRefinements,
  Configure,
  CurrentRefinements,
  DynamicWidgets,
  Highlight,
  Hits,
  HitsPerPage,
  Index,
  InstantSearch,
  Menu,
  MenuSelect,
  Pagination,
  RefinementList,
  SearchBox,
  SortBy,
} from 'react-instantsearch/dom';
import { Hit, InstantSearchProps } from 'react-instantsearch-core';

// DOM
() => {
  const App = () => (
    <InstantSearch searchClient={{}} indexName="bestbuy">
      <Search />
      <Index indexName="lol">
        <Search2 />
      </Index>
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
        <Hits hitComponent={Product2} />
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
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
      <div className="container">
        <SearchBox inputId="search-box" inputRef={inputRef} />
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
      <InstantSearch indexName="instant_search" searchClient={{}}>
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
//         indexName="instant_search"
//         searchClient={{}}
//       >
//         <Hits hitComponent={Hit} />
//       </InstantSearch>
//     );
//   }
// };

// https://community.algolia.com/react-instantsearch/guide/i18n.html
() => {
  const App = () => (
    <InstantSearch indexName="..." searchClient={{}}>
      <Menu attribute="fruits" translations={{ showMore: 'Voir plus' }} />
    </InstantSearch>
  );
};

// https://community.algolia.com/react-instantsearch/guide/Sorting_and_filtering.html
// TODO
// () => {
//   const App = () => (
//     <InstantSearch
//       indexName="..."
//       searchClient={{}}
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

// https://community.algolia.com/react-instantsearch/guide/Default_refinements.html
() => {
  const App = () => (
    <InstantSearch indexName="..." searchClient={{}}>
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
//       indexName="..."
//       searchClient={{}}
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
  // https://community.algolia.com/react-instantsearch/guide/Search_parameters.html
  <InstantSearch indexName="indexName" searchClient={{}}>
    <Configure distinct={1} />
    // widgets
  </InstantSearch>;
};

() => {
  function onSearchBoxChange(event: React.SyntheticEvent<HTMLInputElement>) {}

  function onSearchBoxKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {}

  function onSearchBoxReset(event: React.SyntheticEvent<HTMLFormElement>) {}

  function onSearchBoxSubmit(event: React.SyntheticEvent<HTMLFormElement>) {}

  <SearchBox
    onChange={onSearchBoxChange}
    onKeyDown={onSearchBoxKeyDown}
    onReset={onSearchBoxReset}
    onSubmit={onSearchBoxSubmit}
    submit={<></>}
  />;
};

import { findResultsState } from 'react-instantsearch-dom/server';
// import { createServer } from 'http';
declare function createServer(handler: (req: any, res: any) => any): any;
import { renderToString } from 'react-dom/server';

const test = () => {
  class App extends React.Component<InstantSearchProps & { something: boolean }> {
    render() {
      return (
        <InstantSearch {...this.props}>
          {this.props.something}
          <SearchBox />
          <Hits />
        </InstantSearch>
      );
    }
  }

  const server = createServer(async (req, res) => {
    const searchState = { query: 'chair' };
    const props = {
      searchClient: {},
      indexName: '',
      searchState,
      something: false,
    };
    const resultsState = await findResultsState(App, props);
    const appInitialState = {
      searchState,
      resultsState,
    };
    const appAsString = renderToString(<App {...props} {...appInitialState} />);
    res.send(
      `
  <!doctype html>
  <html>
    <body>
      <h1>Awesome server-side rendered search</h1>
      <did id="root">${appAsString}</div>
      <script>window.__APP_INITIAL_STATE__ = ${JSON.stringify(appInitialState)}</script>
      <script src="bundle.js"></script> <!-- this is the build of browser.js -->
    </body>
  </html>`
    );
  });
};

() => {
  // https://www.algolia.com/doc/api-reference/widgets/sort-by/react/
  <SortBy
    className="sort-by"
    id="sort-by"
    defaultRefinement={'dev_index'}
    items={[
      { value: 'dev_index', label: 'Relevance' },
      { value: 'dev_index_name_asc', label: 'Alphabetical' },
    ]}
    transformItems={items =>
      items.map(item => ({
        ...item,
        label: item.label.toUpperCase(),
      }))
    }
  />;
};

() => {
  // https://www.algolia.com/doc/api-reference/widgets/hits-per-page/react/
  <HitsPerPage
    className="hits-per-page"
    id="hits-per-page"
    items={[
      { value: 5, label: 'Show 5 hits' },
      { value: 10, label: 'Show 10 hits' },
    ]}
    defaultRefinement={5}
    // Optional parameters
    transformItems={items =>
      items.map(item => ({
        ...item,
        label: item.label.toUpperCase(),
      }))
    }
  />;
};

() => {
  // https://www.algolia.com/doc/api-reference/widgets/menu-select/react/
  <MenuSelect
    className="menu-select"
    id="menu-select"
    attribute="brand"
    // Optional parameters
    defaultRefinement="Apple"
    limit={20}
    transformItems={items =>
      items.map(item => ({
        ...item,
        label: item.label.toUpperCase(),
      }))
    }
    translations={{
      seeAllOption: 'See all',
    }}
  />;
};

() => {
  // https://www.algolia.com/doc/api-reference/widgets/dynamic-facets/react/
  <DynamicWidgets
    transformItems={item => item}
    fallbackComponent={RefinementList}
    facets={['*']}
    maxValuesPerFacet={20}
    className="test"
  >
    <RefinementList attribute="brand"/>
  </DynamicWidgets>;
};
