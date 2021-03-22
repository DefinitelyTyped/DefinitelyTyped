import * as React from 'react';
import {
  InstantSearch,
  Index,
  createConnector,
  SearchResults,
  connectStateResults,
  SearchBoxProvided,
  connectSearchBox,
  connectRefinementList,
  CurrentRefinementsProvided,
  connectCurrentRefinements,
  RefinementListProvided,
  Refinement,
  connectHighlight,
  connectHits,
  HighlightProvided,
  HighlightProps,
  AutocompleteProvided,
  connectAutoComplete,
  Hit,
  TranslatableProvided,
  translatable,
  ConnectorProvided,
  StateResultsProvided,
  ConnectorSearchResults,
  BasicDoc,
  AllSearchResults,
  connectStats,
    StatsProvided,
    connectHitInsights,
    InsightsClient,
    ConnectHitInsightsProvided,
} from 'react-instantsearch-core';

import { Hits } from 'react-instantsearch-dom';

() => {
  <Index indexName={'test'} indexId="id">
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
  })(props => (
    <div>
      The query is {props.query}, the page is {props.page}. This is an error:{' '}
      {
        props.somethingElse // $ExpectError
      }
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
  ));

  <CoolWidget>
    <div></div>
  </CoolWidget>;
};

() => {
  interface Provided {
    query: string;
    page: number;
  }

  interface Exposed {
    defaultRefinement: string;
    startAtPage: number;
  }

  const typedCoolConnector = createConnector<Provided, Exposed>({
    displayName: 'CoolWidget',

    getProvidedProps(props, searchState) {
      // Since the `queryAndPage` searchState entry isn't necessarily defined, we need
      // to default its value.
      const [query, page] = searchState.queryAndPage || [props.defaultRefinement, props.startAtPage];

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
  });

  const TypedCoolWidgetStateless = typedCoolConnector(props => (
    <div>
      The query is {props.query}, the page is {props.page}. This is an error:{' '}
      {
        props.somethingElse // $ExpectError
      }
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
  ));

  <TypedCoolWidgetStateless defaultRefinement={'asdf'} startAtPage={10} />;

  const TypedCoolWidget = typedCoolConnector(
    class extends React.Component<ConnectorProvided<Provided> & { passThruName: string }> {
      render() {
        const props = this.props;
        return (
          <div>
            The query is {props.query}, the page is {props.page}. The name is {props.passThruName}
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
      }
    }
  );

  <TypedCoolWidget defaultRefinement={'asdf'} startAtPage={10} passThruName={'test'} />;
};

() => {
  interface MyDoc {
    field1: string;
    field2: number;
    field3: { compound: string };
  }

  interface StateResultsProps {
    searchResults: SearchResults<MyDoc>;
    // partial of StateResultsProvided

    additionalProp: string;
  }

  const Stateless = connectStateResults((
    { searchResults, additionalProp } // $ExpectError
  ) => (
    <div>
      <h1>{additionalProp}</h1>
      {searchResults.hits.map(h => {
        return <span>{h._highlightResult.field1!.value}</span>;
      })}
    </div>
  ));

  <Stateless />;
  <Stateless additionalProp="test" />; // $ExpectError

  const StatelessWithType = ({ additionalProp, searchResults }: StateResultsProps) => (
    <div>
      <h1>{additionalProp}</h1>
      {searchResults.hits.map(h => {
        // $ExpectType string
        const compound = h._highlightResult.field3!.compound!.value;
        return <span>{compound}</span>;
      })}
    </div>
  );
  const ComposedStatelessWithType = connectStateResults(StatelessWithType);

  <ComposedStatelessWithType />; // $ExpectError

  <ComposedStatelessWithType additionalProp="test" />;

  class MyComponent extends React.Component<StateResultsProps> {
    render() {
      const { additionalProp, searchResults } = this.props;
      return (
        <div>
          <h1>{additionalProp}</h1>
          {searchResults.hits.map(h => {
            // $ExpectType string[]
            const words = h._highlightResult.field3!.compound!.matchedWords;
            return (
              <span>
                {h.field2}: {words.join(',')}
              </span>
            );
          })}
        </div>
      );
    }
  }
  const ComposedMyComponent = connectStateResults(MyComponent);

  <ComposedMyComponent />; // $ExpectError

  <ComposedMyComponent additionalProp="test" />;
};

() => {
  <InstantSearch searchClient={{}} indexName="xxx" />;

  <InstantSearch indexName="xxx" />; // $ExpectError
};

// https://community.algolia.com/react-instantsearch/guide/Connectors.html
() => {
  const MySearchBox = ({ currentRefinement, refine }: SearchBoxProvided) => (
    <input type="text" value={currentRefinement} onChange={e => refine(e.target.value)} />
  );

  // `ConnectedSearchBox` renders a `<MySearchBox>` widget that is connected to
  // the <InstantSearch> state, providing it with `currentRefinement` and `refine` props for
  // reading and manipulating the current query of the search.
  const ConnectedSearchBox = connectSearchBox(MySearchBox);
};

() => {
  const MyCurrentRefinements = ({ refine, items, query }: CurrentRefinementsProvided) => (
    <>
      {items.map(refinement => (
        <div key={refinement.id} onClick={() => refine(refinement.value)}>
          <label>{refinement.label}</label>
        </div>
      ))}
    </>
  );

  const ConnectedCurrentRefinements = connectCurrentRefinements(MyCurrentRefinements);

  <ConnectedCurrentRefinements clearsQuery={true} transformItems={item => item} />;
};

() => {
    const MyClearRefinements = ({ refine, items }: CurrentRefinementsProvided) => (
      <button onClick={() => refine(items)}>
        clear all
      </button>
    );

    const ConnectedClearRefinements = connectCurrentRefinements(MyClearRefinements);

    <ConnectedClearRefinements clearsQuery={true} transformItems={item => item} />;
};

() => {
  function renderRefinement(label: string, value: Refinement['value'], refine: CurrentRefinementsProvided['refine']) {
    return (
      <button className="badge badge-secondary" onClick={() => refine(value)}>
        {label}
      </button>
    );
  }

  const MyCurrentRefinements = connectCurrentRefinements(({ refine, items, query }: CurrentRefinementsProvided) => {
    return (
      <>
        {items.map(refinement => {
          /*
           * When existing several refinements for the same atribute name, then you get a
           * nested items object that contains a label and a value function to use to remove a single filter.
           * https://community.algolia.com/react-instantsearch/connectors/connectCurrentRefinements.html
           */
          if (refinement.items) {
            return <>{refinement.items.map(i => renderRefinement(i.label, i.value, refine))}</>;
          }

          // extra assert for typescript < 3.2
          if (typeof refinement.currentRefinement === 'string') {
            return renderRefinement(refinement.currentRefinement, refinement.value, refine);
          }
        })}
      </>
    );
  });
};

() => {
  const MyRefinementList = ({ items, refine }: RefinementListProvided) => (
    <>
      {items.map(item => (
        <button onClick={() => refine(item.value)}>{item.label}</button>
      ))}
    </>
  );
  const ConnectedRefinementList = connectRefinementList(MyRefinementList);

  <ConnectedRefinementList
    attribute={'test'}
    searchable={true}
    operator={'and'}
    showMore={true}
    limit={8}
    showMoreLimit={99}
  />;
};

() => {
  interface MyDoc {
    a: 1;
    b: {
      c: '2';
    };
  }

  const CustomHighlight = connectHighlight<MyDoc>(({ highlight, attribute, hit }) => {
    const highlights = highlight({
      highlightProperty: '_highlightResult',
      attribute,
      hit,
    });

    return <>{highlights.map(part => (part.isHighlighted ? <mark>{part.value}</mark> : <span>{part.value}</span>))}</>;
  });

  class CustomHighlight2 extends React.Component<HighlightProps & { limit: number }> {
    render() {
      const { highlight, attribute, hit, limit } = this.props;
      const highlights = highlight({
        highlightProperty: '_highlightResult',
        attribute,
        hit,
      });

      return (
        <>
          {highlights
            .slice(0, limit)
            .map(part => (part.isHighlighted ? <mark>{part.value}</mark> : <span>{part.value}</span>))}
        </>
      );
    }
  }
  const ConnectedCustomHighlight2 = connectHighlight(CustomHighlight2);

  const ConnectedStatelessHits = connectHits<MyDoc>(({ hits }) => (
    <p>
      <CustomHighlight attribute="name" hit={hits[0]} />
      <ConnectedCustomHighlight2 attribute="name" hit={hits[1]} limit={7} />
    </p>
  ));

  <ConnectedStatelessHits />;
};

// https://github.com/algolia/react-instantsearch/blob/master/examples/autocomplete/src/App-Mentions.js
() => {
  const Mention: any = null; // import Mention from 'antd/lib/mention';

  const AsyncMention = ({ hits, refine }: AutocompleteProvided) => (
    <Mention
      style={{ width: 500, height: 100 }}
      prefix="@"
      notFoundContent={'No suggestion'}
      placeholder="give someone an @-mention here"
      suggestions={hits.map(hit => hit.name)}
      onSearchChange={refine}
    />
  );

  const ConnectedAsyncMention = connectAutoComplete(AsyncMention);

  <ConnectedAsyncMention />;
};

() => {
  type Props = SearchBoxProvided &
    TranslatableProvided & {
      className?: string;
      showLoadingIndicator?: boolean;

      submit?: JSX.Element;
      reset?: JSX.Element;
      loadingIndicator?: JSX.Element;

      onSubmit?: (event: React.SyntheticEvent<HTMLFormElement>) => any;
      onReset?: (event: React.SyntheticEvent<HTMLFormElement>) => any;
      onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => any;
    };
  interface State {
    query: string | null;
  }

  class SearchBox extends React.Component<Props, State> {
    static defaultProps = {
      currentRefinement: '',
      className: 'ais-SearchBox',
      focusShortcuts: ['s', '/'],
      autoFocus: false,
      searchAsYouType: true,
      showLoadingIndicator: false,
      isSearchStalled: false,
      reset: <i className="material-icons">clear</i>,
      submit: <i className="material-icons">search</i>,
    };

    constructor(props: SearchBox['props']) {
      super(props);

      this.state = {
        query: null,
      };
    }

    getQuery = () => this.props.currentRefinement;

    onSubmit = (e: React.SyntheticEvent<any>) => {
      e.preventDefault();
      e.stopPropagation();

      const { refine, onSubmit } = this.props;

      if (onSubmit) {
        onSubmit(e);
      }
      return false;
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { onChange } = this.props;
      const value = event.target.value;

      this.setState({ query: value });

      if (onChange) {
        onChange(event);
      }
    }

    onReset = (event: React.FormEvent<HTMLFormElement>) => {
      const { refine, onReset } = this.props;

      refine('');

      this.setState({ query: '' });

      if (onReset) {
        onReset(event);
      }
    }

    render() {
      const { className, translate, loadingIndicator, submit, reset } = this.props;
      const query = this.getQuery();

      const isSearchStalled = this.props.showLoadingIndicator && this.props.isSearchStalled;

      const isCurrentQuerySubmitted = query && query === this.props.currentRefinement;

      const button = isSearchStalled ? 'loading' : isCurrentQuerySubmitted ? 'reset' : 'submit';

      return (
        <div className={className}>
          <form
            noValidate
            onSubmit={this.onSubmit}
            onReset={this.onReset}
            className={`${className}-${isSearchStalled ? 'form--stalledSearch' : 'form'}`}
            action=""
            role="search"
          >
            <button
              type="submit"
              title={translate('submitTitle')}
              className={`${className}-submit`}
              hidden={button !== 'submit'}
            >
              {submit}
            </button>
            <button
              type="reset"
              title={translate('resetTitle')}
              className={`${className}-reset`}
              hidden={button !== 'reset'}
            >
              {reset}
            </button>
            <span className={`${className}-loadingIndicator`} hidden={button !== 'loading'}>
              {loadingIndicator}
            </span>
            <input
              {...{
                onChange: this.onChange,
                value: query,
                type: 'search',
                placeholder: translate('placeholder'),
                autoComplete: 'off',
                autoCorrect: 'off',
                autoCapitalize: 'off',
                spellCheck: false,
                required: true,
                maxLength: 512,
                className: `${className}-input`,
              }}
            />
          </form>
        </div>
      );
    }
  }

  const TranslatableSearchBox = translatable({
    resetTitle: 'Clear the search query.',
    submitTitle: 'Submit your search query.',
    placeholder: 'Search here…',
  })(SearchBox);

  const ConnectedSearchBox = connectSearchBox(TranslatableSearchBox);

  <ConnectedSearchBox
    className="ais-search"
    loadingIndicator={<i className="material-icons">search</i>}
    onSubmit={evt => {
      console.log('submitted', evt);
    }}
  />;
};

// can we recreate connectStateResults from source using the createConnector typedef?
() => {
  function getIndexId(context: any): string {
    return context && context.multiIndexContext
      ? context.multiIndexContext.targetedIndex
      : context.ais.mainTargetedIndex;
  }

  function getResults<TDoc>(
    searchResults: { results: AllSearchResults<TDoc> },
    context: any
  ): SearchResults<TDoc> | null | undefined {
    const { results } = searchResults;
    if (results && !results.hits) {
      return results[getIndexId(context)] ? results[getIndexId(context)] : null;
    } else {
      return results ? results : null;
    }
  }

  const csr = createConnector({
    displayName: 'AlgoliaStateResults',

    getProvidedProps(props, searchState, searchResults) {
      const results = getResults(searchResults, this.context);

      return {
        searchState,
        searchResults: results,
        allSearchResults: searchResults.results,
        searching: searchResults.searching,
        isSearchStalled: searchResults.isSearchStalled,
        error: searchResults.error,
        searchingForFacetValues: searchResults.searchingForFacetValues,
        props,
      };
    },
  });

  const asConnectStateResults: typeof connectStateResults = csr;
};

() => {
  const TotalHits = ({ nbHits }: StatsProvided) => {
      return <span>Your search returned {nbHits} results.</span>;
  };

  const ConnectedTotalHits = connectStats(TotalHits);

  <ConnectedTotalHits />;
};

() => {
    const HitComponent = ({ hit, insights }: ConnectHitInsightsProvided) => (
        <button
            onClick={() => {
                insights('clickedObjectIDsAfterSearch', { eventName: 'hit clicked' });
            }}
        >
            <article>
                <h1>{hit.name}</h1>
            </article>
        </button>
    );

    const HitWithInsights = connectHitInsights(() => {})(HitComponent);

    <Hits hitComponent={HitWithInsights} />;
};
