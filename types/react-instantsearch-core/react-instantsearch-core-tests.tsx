import * as React from 'react';
import {
  createInstantSearch,
  createIndex,
  createConnector,
  SearchResults,
  connectStateResults,
  SearchBoxProvided,
  connectSearchBox,
  connectRefinementList,
  CurrentRefinementsProvided,
  connectCurrentRefinements,
  RefinementListProvided,
  Refinement
} from 'react-instantsearch-core';

() => {
  const InstantSearch = createInstantSearch(() => ({}), {Root: 'div', props: {className: `widget`}});

  <InstantSearch appId={'test'} apiKey={'test'}>
    <div></div>
  </InstantSearch>;
};

() => {
  const Index = createIndex({Root: 'div', props: {className: `widget`}});

  <Index indexName={'test'} root={{Root: 'div', props: {className: `widget`}}}>
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

() => {
  interface StateResultsProps {
    searchResults: SearchResults<{
      field1: string
      field2: number
      field3: { compound: string }
     }>;
    // partial of StateResultsProvided

    additionalProp: string;
  }

  const Stateless = ({ additionalProp, searchResults }: StateResultsProps) =>
    <div>
      <h1>{additionalProp}</h1>
      {searchResults.hits.map((h) => {
        // $ExpectType string
        const compound = h._highlightResult.field3!.compound!.value;
        return <span>{compound}</span>;
      })}
    </div>;
  const ComposedStateless = connectStateResults(Stateless);

  <ComposedStateless />; // $ExpectError

  <ComposedStateless additionalProp='test' />;

  class MyComponent extends React.Component<StateResultsProps> {
    render() {
      const { additionalProp, searchResults } = this.props;
      return <div>
      <h1>{additionalProp}</h1>
      {searchResults.hits.map((h) => {
        // $ExpectType string[]
        const words = h._highlightResult.field3!.compound!.matchedWords;
        return <span>{h.field2}: {words.join(',')}</span>;
      })}
    </div>;
    }
  }
  const ComposedMyComponent = connectStateResults(MyComponent);

  <ComposedMyComponent />; // $ExpectError

  <ComposedMyComponent additionalProp='test' />;
};

() => {
  const InstantSearch = createInstantSearch(
    () => null, // $ExpectError
    {}
  );
};

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

() => {
  const MyCurrentRefinements = ({refine, items, query}: CurrentRefinementsProvided) =>
    <>
      {items.map((refinement) => (
        <div key={refinement.id} onClick={() => refine(refinement.value) }>
          <label>{refinement.label}</label>
        </div>
      ))}
    </>;

  const ConnectedCurrentRefinements = connectCurrentRefinements(MyCurrentRefinements);

  <ConnectedCurrentRefinements clearsQuery={true} transformItems={(item) => item} />;
};

() => {
  function renderRefinement(
    label: string,
    value: Refinement['value'],
    refine: CurrentRefinementsProvided['refine'],
  ) {
    return <button className="badge badge-secondary" onClick={() => refine(value)}>
        {label}
      </button>;
  }

  const MyCurrentRefinements = connectCurrentRefinements(({refine, items, query}: CurrentRefinementsProvided) => {
    return <>
        {items.map((refinement) => {
          let str: string = refinement.currentRefinement; // $ExpectError
          /*
           * When existing several refinements for the same atribute name, then you get a
           * nested items object that contains a label and a value function to use to remove a single filter.
           * https://community.algolia.com/react-instantsearch/connectors/connectCurrentRefinements.html
           */
          if ('items' in refinement) {
            str = refinement.currentRefinement; // $ExpectError
            return <>
              {refinement.items.map((i) => renderRefinement(i.label, i.value, refine))}
            </>;
          }

          console.log(refinement.items); // $ExpectError
          return renderRefinement(refinement.currentRefinement, refinement.value, refine);
        })}
      </>;
  });
};

() => {
  const MyRefinementList = ({items, refine}: RefinementListProvided) =>
    <>
      {items.map((item) => (
        <button onClick={() => refine(item.value)}>
          {item.label}
        </button>
      ))}
    </>;
  const ConnectedRefinementList = connectRefinementList(MyRefinementList);

  <ConnectedRefinementList attribute={'test'} searchable={true} operator={'and'}
    showMore={true} limit={8} showMoreLimit={99} />;
};
