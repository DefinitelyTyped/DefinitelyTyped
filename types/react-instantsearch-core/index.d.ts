// Type definitions for react-instantsearch-core 5.2
// Project: https://community.algolia.com/react-instantsearch/
// Definitions by: Gordon Burgett <https://github.com/gburgett>
//                 Justin Powell <https://github.com/jpowell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';

import { ConnectedComponentType, Hit, SearchResults, SearchState, BasicDoc, AlgoliaError } from './types';

export { Hit, HighlightResult, SearchResults, SearchState, AlgoliaError } from './types';

// Core
/**
 * Creates a specialized root InstantSearch component. It accepts
 * an algolia client and a specification of the root Element.
 * @param defaultAlgoliaClient - a function that builds an Algolia client
 * @param root - the defininition of the root of an InstantSearch sub tree.
 * @returns an InstantSearch root
 */
export function createInstantSearch(defaultAlgoliaClient: (...args: any[]) => any, root: any): any;

/**
 * Creates a specialized root Index component. It accepts
 * a specification of the root Element.
 * @param defaultRoot - the defininition of the root of an Index sub tree.
 * @return a Index root
 */
export function createIndex(defaultRoot: any): any;

/**
 * Connectors are the HOC used to transform React components
 * into InstantSearch widgets.
 * In order to simplify the construction of such connectors
 * `createConnector` takes a description and transform it into
 * a connector.
 * @param connectorDesc the description of the connector
 * @return a function that wraps a component into
 * an instantsearch connected one.
 */
export function createConnector(connectorDesc: any): (Composed: React.ComponentType<any>) => React.ComponentType<any>;

// Utils
export const HIGHLIGHT_TAGS: {
  highlightPreTag: string,
  highlightPostTag: string,
};
export const version: string;
export function translatable(defaultTranslations: any): (Composed: React.ComponentType<any>) => React.ComponentType<any>;

// Widgets
/**
 * Configure is a widget that lets you provide raw search parameters
 * to the Algolia API.
 *
 * Any of the props added to this widget will be forwarded to Algolia. For more information
 * on the different parameters that can be set, have a look at the
 * [reference](https://www.algolia.com/doc/api-client/javascript/search#search-parameters).
 *
 * This widget can be used either with react-dom and react-native. It will not render anything
 * on screen, only configure some parameters.
 */
export class Configure extends React.Component<any, any> {}

// Connectors
export function connectAutoComplete(Composed: React.ComponentType<any>): React.ComponentType<any>;
export function connectBreadcrumb(Composed: React.ComponentType<any>): React.ComponentType<any>;
export function connectConfigure(Composed: React.ComponentType<any>): React.ComponentType<any>;
export function connectCurrentRefinements(Composed: React.ComponentType<any>): React.ComponentType<any>;

export interface NESW {
  northEast: { lat: number, lng: number };
  southWest: { lat: number, lng: number };
}

export interface GeoSearchExposed {
  defaultRefinement?: NESW;
}
export interface GeoSearchProvided<THit> {
  /** a function to toggle the refinement */
  refine: (refinement: NESW) => void;
  /** a function to generate a URL for the corresponding search state */
  createURL: (...args: any[]) => any;
  /** the records that matched the search */
  hits: THit[];
  /** true if the current refinement is set with the map bounds */
  isRefinedWithMap: boolean;
  /** the refinement currently applied */
  currentRefinement: NESW;
  /** the position of the search */
  position: { lat: number, lng: number };
}
/**
 * The GeoSearch connector provides the logic to build a widget that will display the results on a map.
 * It also provides a way to search for results based on their position. The connector provides function to manage the
 * search experience (search on map interaction).
 *
 * https://community.algolia.com/react-instantsearch/connectors/connectGeoSearch.html
 */
export function connectGeoSearch<TProps extends GeoSearchProvided<THit>, THit>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, GeoSearchProvided<THit>, GeoSearchExposed>;
export function connectHierarchicalMenu(Composed: React.ComponentType<any>): React.ComponentType<any>;
export function connectHighlight(Composed: React.ComponentType<any>): React.ComponentType<any>;

/**
 * connectHits connector provides the logic to create connected components that will render the results retrieved from Algolia.
 * To configure the number of hits retrieved, use HitsPerPage widget, connectHitsPerPage connector or pass the hitsPerPage prop to a Configure widget.
 * Warning: you will need to use the objectID property available on every hit as a key when iterating over them. This will ensure you have the best possible UI experience especially on slow networks.
 *
 * https://community.algolia.com/react-instantsearch/connectors/connectHits.html
 */
export function connectHits<TProps extends { hits: THit[]}, THit>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, {hits?: THit[]}>;

export function connectHitsPerPage(Composed: React.ComponentType<any>): React.ComponentType<any>;
export function connectInfiniteHits(Composed: React.ComponentType<any>): React.ComponentType<any>;

export interface MenuProvided {
  items: Array<{count: number, isRefined: boolean, label: string, value: string}>;
  currentRefinement: string;
  refine: (...args: any[]) => any;
  createURL: (...args: any[]) => any;
  searchForItems: (...args: any[]) => any;
  isFromSearch: boolean;
}
export interface MenuExposed {
  attribute: string;
  showMore?: boolean;
  limit?: number;
  showMoreLimit?: number;
  defaultRefinement?: string;
  transformItems?: (...args: any[]) => any;
  searchable?: boolean;
}
/**
 * connectMenu connector provides the logic to build a widget that will give the user the ability to choose a single value for a specific facet.
 *
 * https://community.algolia.com/react-instantsearch/connectors/connectMenu.html
 */
export function connectMenu<TProps extends MenuProvided>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, MenuProvided, MenuExposed>;

export interface NumericMenuProvided {
  /** the list of ranges the NumericMenu can display. */
  items: Array<{isRefined: boolean, label: string, value: string, noRefinement: boolean}>;
  /**
   * the refinement currently applied. follow the shape of a string with a pattern of '{start}:{end}' which corresponds to the current selected item.
   * For instance, when the selected item is {start: 10, end: 20}, the searchState of the widget is '10:20'. When start isn’t defined, the searchState
   * of the widget is ':{end}', and the same way around when end isn’t defined. However, when neither start nor end are defined, the searchState is an empty string.
   */
  currentRefinement: string;
  /** a function to select a range. */
  refine: (...args: any[]) => any;
  /** a function to generate a URL for the corresponding search state */
  createURL: (...args: any[]) => any;
}
export interface NumericMenuExposed {
  id?: string;
  /** the name of the attribute in the records */
  attribute: string;
  /** List of options. With a text label, and upper and lower bounds. */
  items: Array<{
    label: string | JSX.Element;
    start?: number;
    end?: number;
  }>;
  /** the value of the item selected by default, follow the shape of a string with a pattern of '{start}:{end}'. */
  defaultRefinement?: string;
  /** (...args: any[]) => any to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return. */
  transformItems?: (...args: any[]) => any;
}
/**
 * connectNumericMenu connector provides the logic to build a widget that will give the user the ability to select a range value for a numeric attribute.
 * Ranges are defined statically.
 *
 * https://community.algolia.com/react-instantsearch/connectors/connectNumericMenu.html
 */
export function connectNumericMenu<TProps extends NumericMenuProvided>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, NumericMenuProvided, NumericMenuExposed>;
export function connectPagination(Composed: React.ComponentType<any>): React.ComponentType<any>;
export function connectPoweredBy(Composed: React.ComponentType<any>): React.ComponentType<any>;
export function connectRange(Composed: React.ComponentType<any>): React.ComponentType<any>;

export interface RefinementListProvided {
  /** a function to toggle a refinement */
  refine: (...args: any[]) => any;
  /** a function to generate a URL for the corresponding search state */
  createURL: (...args: any[]) => any;
  /** the refinement currently applied */
  currentRefinement: string[];
  /** the list of items the RefinementList can display. */
  items: Array<Hit<{ count: number, isRefined: boolean, label: string, value: string }>>;
  /** a function to toggle a search inside items values */
  searchForItems: (...args: any[]) => any;
  /** a boolean that says if the items props contains facet values from the global search or from the search inside items. */
  isFromSearch: boolean;
}
export interface RefinementListExposed {
  /** the name of the attribute in the record */
  attribute: string;
  /** allow search inside values */
  searchable?: boolean;
  /** How to apply the refinements. Possible values: ‘or’ or ‘and’. */
  operator?: 'or' | 'and';
  /** true if the component should display a button that will expand the number of items */
  showMore?: boolean;
  /** the minimum number of displayed items */
  limit?: number;
  /** the maximun number of displayed items. Only used when showMore is set to true */
  showMoreLimit?: number;
  /**
   * the values of the items selected by default. The searchState of this widget takes the form of a list of strings,
   * which correspond to the values of all selected refinements. However, when there are no refinements selected,
   * the value of the searchState is an empty string.
   */
  defaultRefinement?: string[];
  /** (...args: any[]) => any to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return. */
  transformItems?: (...args: any[]) => any;
}

/**
 * connectRefinementList connector provides the logic to build a widget that will give the user the ability to choose multiple values for a specific facet.
 *
 * https://community.algolia.com/react-instantsearch/connectors/connectRefinementList.html
 */
export function connectRefinementList<TProps extends RefinementListProvided>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, RefinementListProvided, RefinementListExposed>;
export function connectScrollTo(Composed: React.ComponentType<any>): React.ComponentType<any>;

export interface SearchBoxProvided {
  /** a function to change the current query */
  refine: (...args: any[]) => any;
  /** the current query used */
  currentRefinement: string;
  /** a flag that indicates if InstantSearch has detected that searches are stalled */
  isSearchStalled: boolean;
}
export interface SearchBoxExposed {
  /** Provide a default value for the query */
  defaultRefinement?: string;
}
export function connectSearchBox<TProps extends SearchBoxProvided>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, SearchBoxProvided, SearchBoxExposed>;
export function connectSortBy(Composed: React.ComponentType<any>): React.ComponentType<any>;

export interface StateResultsProvided<TDoc = BasicDoc> {
  /** The search state of the instant search component.  */
  searchState: SearchState;
  /**
   * The search results.
   * In case of multiple indices: if used under <Index>, results will be those of the corresponding index
   * otherwise it’ll be those of the root index
   */
  searchResults: SearchResults<TDoc>;
  /** In case of multiple indices you can retrieve all the results */
  allSearchResults: { [index: string]: SearchResults<TDoc> };
  /** If there is a search in progress. */
  searching: boolean;
  /** Flag that indicates if React InstantSearch has detected that searches are stalled. */
  isSearchStalled: any;
  /** If the search failed, the error will be logged here. */
  error: AlgoliaError;
  /** If there is a search in a list in progress. */
  searchingForFacetValues: any;
}
/**
 * The connectStateResults connector provides a way to access the `searchState` and the `searchResults` of InstantSearch.
 * For instance this connector allows you to create results/noResults or query/noQuery pages.
 *
 * https://community.algolia.com/react-instantsearch/connectors/connectStateResults.html
 */
export function connectStateResults(stateless: React.StatelessComponent<StateResultsProvided>): React.ComponentType;
export function connectStateResults<TProps extends StateResultsProvided<TDoc>, TDoc>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, StateResultsProvided<TDoc>>;

export function connectStats(Composed: React.ComponentType<any>): React.ComponentType<any>;
export function connectToggleRefinement(Composed: React.ComponentType<any>): React.ComponentType<any>;
