import * as React from 'react';
import {
  createInstantSearch,
  createIndex,
  createConnector
} from 'react-instantsearch-core';

() => {
  const InstantSearch = createInstantSearch(() => {}, {Root: 'div', props: {className: `widget`}});

  <InstantSearch>
    <div></div>
  </InstantSearch>;
};

() => {
  const Index = createIndex({Root: 'div', props: {className: `widget`}});

  <Index>
    <div></div>
  </Index>;
};

// https://community.algolia.com/react-instantsearch/guide/Custom_connectors.html
() => {
  const CoolWidget = createConnector({
    displayName: 'CoolWidget',

    getProvidedProps(props, searchState) {
      // Since the `queryAndPage` searchState entry isn't necessarily defined, we need
      // to default its value.
      const [query, page] = searchState.queryAndPage || ['', 0];

      // Connect the underlying component to the `queryAndPage` searchState entry.
      return {
        query,
        page,
      };
    },

    refine(props, searchState, newQuery, newPage) {
      // When the underlying component calls its `refine` prop, update the searchState
      // with the new query and page.
      return {
        // `searchState` represents the search state of *all* widgets. We need to extend it
        // instead of replacing it, otherwise other widgets will lose their
        // respective state.
        ...searchState,
        queryAndPage: [newQuery, newPage],
      };
    },
  })(props =>
    <div>
      The query is {props.query}, the page is {props.page}.
      {/*
        Clicking on this button will update the searchState to:
        {
          ...otherSearchState,
          query: 'algolia',
          page: 20,
        }
      */}
      <button onClick={() => props.refine('algolia', 20)} />
      {/*
        Clicking on this button will update the searchState to:
        {
          ...otherSearchState,
          query: 'instantsearch',
          page: 15,
        }
      */}
      <button onClick={() => props.refine('instantsearch', 15)} />
    </div>
  );

  <CoolWidget>
    <div></div>
  </CoolWidget>;
};
