// Type definitions for react-instantsearch-core 5.2
// Project: https://community.algolia.com/react-instantsearch/
// Definitions by: Gordon Burgett <https://github.com/gburgett>
//                 Justin Powell <https://github.com/jpowell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';

// Core
/**
 * Creates a specialized root InstantSearch component. It accepts
 * an algolia client and a specification of the root Element.
 * @param defaultAlgoliaClient - a function that builds an Algolia client
 * @param root - the defininition of the root of an InstantSearch sub tree.
 * @returns an InstantSearch root
 */
export function createInstantSearch(
  defaultAlgoliaClient: (appId: string, apiKey: string, options: { _useRequestCache: boolean }) => object,
  root: object
): React.ComponentClass<any>;

/**
 * Creates a specialized root Index component. It accepts
 * a specification of the root Element.
 * @param defaultRoot - the defininition of the root of an Index sub tree.
 * @return a Index root
 */
export function createIndex(defaultRoot: object): React.ComponentClass<any>;

export interface ConnectorDescription {
  displayName: string;
  propTypes?: any;
  defaultProps?: any;

  /**
   * This method should return the props to forward to the composed component.
   * props are the props that were provided to the higher-order component.
   * searchState holds the search state of all widgets. You can find the shape of all widgets search state in the corresponding guide.
   * searchResults holds the search results, search errors and search loading state, with the shape
   * {results: ?SearchResults, error: ?Error, searching: boolean, searchingForFacetValues: boolean}. The SearchResults type is described in the Helper’s documentation.
   * meta is the list of metadata from all widgets whose connector defines a getMetadata method.
   * searchForFacetValuesResults holds the search for facet values results.
   */
  getProvidedProps?(...args: any[]): any;

  /**
   * This method defines exactly how the refine prop of widgets affects the search state.
   * It takes in the current props of the higher-order component, the search state of all widgets, as well as all arguments passed
   * to the refine and createURL props of stateful widgets, and returns a new state.
   */
  refine?(...args: any[]): any;

  /**
   * This method applies the current props and state to the provided SearchParameters, and returns a new SearchParameters. The SearchParameters
   * type is described in the Helper’s documentation.
   * Every time the props or state of a widget change, all the getSearchParameters methods of all the registered widgets are called in a chain
   * to produce a new SearchParameters. Then, if the output SearchParameters differs from the previous one, a new search is triggered.
   * As such, the getSearchParameters method allows you to describe how the state and props of a widget should affect the search parameters.
   */
  getSearchParameters?(...args: any[]): any;

  /**
   * This method allows the widget to register a custom metadata object for any props and state combination.
   * If your widget is stateful, the corresponding URL key should be declared on the metadata object as the id property, so that the InstantSearch
   * component can determine which URL keys it controls and which are foreign and should be left intact.
   * The metadata object also allows you to declare any data that you would like to pass down to all other widgets. The list of metadata objects of
   * all components is available as the fourth argument to the getProvidedProps method.
   * The CurrentRefinements widget leverages this mechanism in order to allow any widget to declare the filters it has applied. If you want to add
   * your own filter, declare a filters property on your widget’s metadata
   */
  getMetadata?(...args: any[]): any;

  /**
   * This method needs to be implemented if you want to have the ability to perform a search for facet values inside your widget.
   * It takes in the current props of the higher-order component, the search state of all widgets, as well as all arguments passed to the searchForFacetValues
   * props of stateful widgets, and returns an object of the shape: {facetName: string, query: string, maxFacetHits?: number}. The default value for the
   * maxFacetHits is the one set by the API which is 10.
   */
  searchForFacetValues?(...args: any[]): any;

  /**
   * This method is called when a widget is about to unmount in order to clean the searchState.
   * It takes in the current props of the higher-order component and the searchState of all widgets and expect a new searchState in return.
   * props are the props that were provided to the higher-order component.
   * searchState holds the searchState of all widgets, with the shape {[widgetId]: widgetState}. Stateful widgets describe the format of their searchState
   * in their respective documentation entry.
   */
  cleanUp?(...args: any[]): any;
}

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
export function createConnector(connectorDesc: ConnectorDescription): (Composed: React.ComponentType<any>) => React.ComponentClass<any>;

// Utils
export const HIGHLIGHT_TAGS: {
  highlightPreTag: string,
  highlightPostTag: string,
};
export const version: string;
export function translatable(defaultTranslations: any): (Composed: React.ComponentType<any>) => React.ComponentClass<any>;

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
export function connectAutoComplete(Composed: React.ComponentType<any>): React.ComponentClass<any>;
export function connectBreadcrumb(Composed: React.ComponentType<any>): React.ComponentClass<any>;
export function connectConfigure(Composed: React.ComponentType<any>): React.ComponentClass<any>;
export function connectCurrentRefinements(Composed: React.ComponentType<any>): React.ComponentClass<any>;

export interface NESW {
  northEast: { lat: number, lng: number };
  southWest: { lat: number, lng: number };
}

export interface GeoSearchExposed {
  defaultRefinement?: NESW;
}
export interface GeoSearchProvided<THit = any> {
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
export function connectGeoSearch(stateless: React.StatelessComponent<GeoSearchProvided>): React.ComponentClass<GeoSearchExposed>;
export function connectGeoSearch<TProps extends Partial<GeoSearchProvided<THit>>, THit>(ctor: React.ComponentType<TProps>): ConnectedComponentClass<TProps, GeoSearchProvided<THit>, GeoSearchExposed>;

export function connectHierarchicalMenu(Composed: React.ComponentType<any>): React.ComponentClass<any>;
export function connectHighlight(Composed: React.ComponentType<any>): React.ComponentClass<any>;

/**
 * connectHits connector provides the logic to create connected components that will render the results retrieved from Algolia.
 * To configure the number of hits retrieved, use HitsPerPage widget, connectHitsPerPage connector or pass the hitsPerPage prop to a Configure widget.
 * Warning: you will need to use the objectID property available on every hit as a key when iterating over them. This will ensure you have the best possible UI experience especially on slow networks.
 *
 * https://community.algolia.com/react-instantsearch/connectors/connectHits.html
 */
export function connectHits<TProps extends { hits: THit[]}, THit>(ctor: React.ComponentType<TProps>): ConnectedComponentClass<TProps, {hits?: THit[]}>;

export function connectHitsPerPage(Composed: React.ComponentType<any>): React.ComponentClass<any>;
export function connectInfiniteHits(Composed: React.ComponentType<any>): React.ComponentClass<any>;

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
export function connectMenu(stateless: React.StatelessComponent<MenuProvided>): React.ComponentClass<MenuExposed>;
export function connectMenu<TProps extends Partial<MenuProvided>>(ctor: React.ComponentType<TProps>): ConnectedComponentClass<TProps, MenuProvided, MenuExposed>;

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
export function connectNumericMenu(stateless: React.StatelessComponent<NumericMenuProvided>): React.ComponentClass<NumericMenuExposed>;
export function connectNumericMenu<TProps extends Partial<NumericMenuProvided>>(ctor: React.ComponentType<TProps>): ConnectedComponentClass<TProps, NumericMenuProvided, NumericMenuExposed>;

export function connectPagination(Composed: React.ComponentType<any>): React.ComponentClass<any>;
export function connectPoweredBy(Composed: React.ComponentType<any>): React.ComponentClass<any>;
export function connectRange(Composed: React.ComponentType<any>): React.ComponentClass<any>;

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
export function connectRefinementList(stateless: React.StatelessComponent<RefinementListProvided>): React.ComponentClass<RefinementListExposed>;
export function connectRefinementList<TProps extends Partial<RefinementListProvided>>(ctor: React.ComponentType<TProps>):
  ConnectedComponentClass<TProps, RefinementListProvided, RefinementListExposed>;

export function connectScrollTo(Composed: React.ComponentType<any>): React.ComponentClass<any>;

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
export function connectSearchBox(stateless: React.StatelessComponent<SearchBoxProvided>): React.ComponentClass<SearchBoxExposed>;
export function connectSearchBox<TProps extends Partial<SearchBoxProvided>>(ctor: React.ComponentType<TProps>): ConnectedComponentClass<TProps, SearchBoxProvided, SearchBoxExposed>;

export function connectSortBy(Composed: React.ComponentType<any>): React.ComponentClass<any>;

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
export function connectStateResults(stateless: React.StatelessComponent<StateResultsProvided>): React.ComponentClass;
export function connectStateResults<TProps extends Partial<StateResultsProvided<TDoc>>, TDoc>(ctor: React.ComponentType<TProps>): ConnectedComponentClass<TProps, StateResultsProvided<TDoc>>;

export function connectStats(Composed: React.ComponentType<any>): React.ComponentClass<any>;
export function connectToggleRefinement(Composed: React.ComponentType<any>): React.ComponentClass<any>;

export interface AlgoliaError {
  stack: string;
  name: string;
  message: string;
  debugData: any[];
  statusCode: number;
}

type Omit<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>>;

export type ConnectedComponentClass<TProps, TProvidedProps, TExposedProps = {}>
  = React.ComponentClass<Omit<TProps, TProvidedProps> & TExposedProps>;

/**
 * The searchState contains all widgets states. If a widget uses an attribute,
 * we store it under its widget category to prevent collision.
 *
 * https://community.algolia.com/react-instantsearch/guide/Search_state.html
 */
export interface SearchState {
  range?: {
    [key: string]: {
      min: number;
      max: number;
    }
  };
  configure?: {
    aroundLatLng: boolean;
    [key: string]: any;
  };
  refinementList?: {
    [key: string]: string[]
  };
  hierarchicalMenu?: {
    [key: string]: string
  };
  menu?: {
    [key: string]: string
  };
  multiRange?: {
    [key: string]: string
  };
  toggle?: {
    [key: string]: boolean
  };
  hitsPerPage?: number;
  sortBy?: string;
  query?: string;
  page?: number;

  indices?: {
    [index: string]: {
      configure: {
        hitsPerPage: number,
      },
    }
  };
}

/**
 * The most basic possible document in an Algolia index:
 * a set of string-value pairs.
 */
export interface BasicDoc { [k: string]: string; }

/**
 * The shape of the searchResults object provided
 * via connectors
 * https://community.algolia.com/algoliasearch-helper-js/reference.html#searchresults
 */
export interface SearchResults<TDoc = BasicDoc> {
  query: string;
  hits: Array<Hit<TDoc>>;
  index: string;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  processingTimeMS: number;
  exhaustiveNbHits: true;
  disjunctiveFacets: any[];
  hierarchicalFacets: any[];
  facets: any[];
  aroundLatLng?: string;
  automaticRadius?: string;
}

/**
 * All the records that match the search parameters.
 * Each record is augmented with a new attribute `_highlightResult` which is an
 * object keyed by attribute and contains additional properties
 * https://community.algolia.com/algoliasearch-helper-js/reference.html#SearchResults#hits
 */
export type Hit<TDoc = BasicDoc> = TDoc & {
  objectID: string;
  '_highlightResult': HighlightResult<TDoc>;
};

export type HighlightResult<TDoc> =
  TDoc extends { [k: string]: any } ?
    { [K in keyof TDoc]: HighlightResultField<TDoc[K]> } :
    never;

type HighlightResultField<TField> =
  TField extends Array<infer TItem> ?
    HighlightResultArray<TItem> :
    TField extends string ?
      HighlightResultPrimitive :
      HighlightResult<TField>;

type HighlightResultArray<TItem> =
  TItem extends string ?
    HighlightResultPrimitive[] :
    Array<HighlightResult<TItem>>;

interface HighlightResultPrimitive {
  /** the value of the facet highlighted (html) */
  value: string;
  /** full, partial or none depending on how the query terms match */
  matchLevel: 'none' | 'partial' | 'full';
  matchedWords: string[];
  fullyHighlighted?: boolean;
}

// Turn off automatic exports - so we don't export internal types like Omit<>
export {};
