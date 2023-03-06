import * as React from "react";

import { SearchBox, Hits } from "react-instantsearch-dom";
import { InstantSearch, Index, connectStateResults, StateResultsProvided } from 'react-instantsearch-native';
import { values } from 'lodash';

// https://community.algolia.com/react-instantsearch/guide/Conditional_display.html

const App2 = () => (
  <InstantSearch searchClient={{}} indexName="first">
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
