import * as React from 'react';
import { InstantSearch, Hits, Highlight, SearchBox, RefinementList, CurrentRefinements, ClearRefinements, Pagination, Menu, Configure, Index } from 'react-instantsearch/dom';
import { Hit, connectRefinementList, connectMenu } from 'react-instantsearch-core';

// DOM
// https://community.algolia.com/react-instantsearch/Getting_started.html
() => {
  const App1 = () => (
    <InstantSearch
      appId="latency"
      apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
      indexName="bestbuy"
    >
      <Search />
    </InstantSearch>
  );

  const App2 = () => (
    <InstantSearch
      searchClient={{}}
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
        indexName="instant_search"
        searchClient={{}}
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
    <InstantSearch
      indexName="..."
      searchClient={{}}
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
    <InstantSearch
      indexName="..."
      searchClient={{}}
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
  <InstantSearch
    indexName="indexName"
    searchClient={{}}
  >
    <Configure distinct={1}/>
    // widgets
  </InstantSearch>;
};

(() => {
  function onSearchBoxChange(event: React.SyntheticEvent<HTMLInputElement>) {
  }

  function onSearchBoxReset(event: React.SyntheticEvent<HTMLFormElement>) {
  }

  function onSearchBoxSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  }

  <SearchBox
      onChange={onSearchBoxChange} onReset={onSearchBoxReset} onSubmit={onSearchBoxSubmit}
      submit={<></>} />;
});

import { createInstantSearch } from 'react-instantsearch-dom/server';
// import { createServer } from 'http';
declare function createServer(handler: (req: any, res: any) => any): any;
import { renderToString } from 'react-dom/server';

() => {
  // https://community.algolia.com/react-instantsearch/guide/Server-side_rendering.html

  // Now we create a dedicated `InstantSearch` component
  const { InstantSearch, findResultsState } = createInstantSearch();

  class App extends React.Component<any> {
    render() {
      return (
        <InstantSearch
          indexName="indexName"
          searchClient={{}}
          searchState={this.props.searchState}
          resultsState={this.props.resultsState}
        >
          <SearchBox />
          <Hits />
        </InstantSearch>
      );
    }
  }

  const server = createServer(async (req, res) => {
    const searchState = {query: 'chair'};
    const resultsState = await findResultsState(App, {searchState});
    const appInitialState = {searchState, resultsState};
    const appAsString = renderToString(<App {...appInitialState} />);
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
