declare module 'react-instantsearch/connectors' {
  import { AlgoliaError, BasicDoc, ConnectedComponentType, ISearchResults, ISearchState } from 'react-instantsearch/types'

  export function connectConfigure(...args: any[]): any

  type NESW = { northEast: { lat: number, lng: number }, southWest: { lat: number, lng: number } }

  interface IGeoSearchExposed {
    defaultRefinement?: NESW
  }
  interface IGeoSearchProvided<THit> {
    /** a function to toggle the refinement */
    refine?: (refinement: NESW) => void
    /** a function to generate a URL for the corresponding search state */
    createURL?: Function
    /** the records that matched the search */
    hits: THit[]
    /** true if the current refinement is set with the map bounds */
    isRefinedWithMap?: boolean
    /** the refinement currently applied */
    currentRefinement?: NESW
    /** the position of the search */
    position?: { lat: number, lng: number }
  }
  /**
   * The GeoSearch connector provides the logic to build a widget that will display the results on a map.
   * It also provides a way to search for results based on their position. The connector provides function to manage the
   * search experience (search on map interaction).
   * 
   * https://community.algolia.com/react-instantsearch/connectors/connectGeoSearch.html
   */
  export function connectGeoSearch<TProps extends IGeoSearchProvided<THit>, THit>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, IGeoSearchProvided<THit>, IGeoSearchExposed>
  export function connectCurrentRefinements(...args: any[]): any
  export function connectHierarchicalMenu(...args: any[]): any
  export function connectHighlight(...args: any[]): any

  /**
   * connectHits connector provides the logic to create connected components that will render the results retrieved from Algolia.
   * To configure the number of hits retrieved, use HitsPerPage widget, connectHitsPerPage connector or pass the hitsPerPage prop to a Configure widget.
   * Warning: you will need to use the objectID property available on every hit as a key when iterating over them. This will ensure you have the best possible UI experience especially on slow networks.
   *
   * https://community.algolia.com/react-instantsearch/connectors/connectHits.html
   */
  export function connectHits<TProps extends { hits: THit[]}, THit>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, {hits?: THit[]}>

  export function connectAutoComplete(...args: any[]): any
  export function connectHitsPerPage(...args: any[]): any
  export function connectInfiniteHits(...args: any[]): any

  interface IMenuProvided {
    items?: Array<{count: number, isRefined: boolean, label: string, value: string}>,
    currentRefinement?: string,
    refine?: Function,
    createURL?: Function,
    searchForItems?: Function,
    isFromSearch?: boolean
  }
  interface IMenuExposed {
    attribute: string
    showMore?: boolean,
    limit?: number,
    showMoreLimit?: number,
    defaultRefinement?: string,
    transformItems?: Function,
    searchable?: boolean,
  }
  /**
   * connectMenu connector provides the logic to build a widget that will give the user the ability to choose a single value for a specific facet.
   *
   * https://community.algolia.com/react-instantsearch/connectors/connectMenu.html
   */
  export function connectMenu<TProps extends IMenuProvided>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, IMenuProvided, IMenuExposed>

  interface INumericMenuProvided {
    /** the list of ranges the NumericMenu can display. */
    items?: Array<{isRefined: boolean, label: string, value: string, noRefinement: boolean}>,
    /**
     * the refinement currently applied. follow the shape of a string with a pattern of '{start}:{end}' which corresponds to the current selected item.
     * For instance, when the selected item is {start: 10, end: 20}, the searchState of the widget is '10:20'. When start isn’t defined, the searchState
     * of the widget is ':{end}', and the same way around when end isn’t defined. However, when neither start nor end are defined, the searchState is an empty string.
     */
    currentRefinement?: string,
    /** a function to select a range. */
    refine?: Function,
    /** a function to generate a URL for the corresponding search state */
    createURL?: Function
  }
  interface INumericMenuExposed {
    id?: string
    /** the name of the attribute in the records */
    attribute: string
    /** List of options. With a text label, and upper and lower bounds. */
    items: Array<{
      label: string | JSX.Element,
      start?: number,
      end?: number,
    }>
    /** the value of the item selected by default, follow the shape of a string with a pattern of '{start}:{end}'. */
    defaultRefinement?: string
    /** Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return. */
    transformItems?: Function
  }
  /**
   * connectNumericMenu connector provides the logic to build a widget that will give the user the ability to select a range value for a numeric attribute.
   * Ranges are defined statically.
   *
   * https://community.algolia.com/react-instantsearch/connectors/connectNumericMenu.html
   */
  export function connectNumericMenu<TProps extends INumericMenuProvided>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, INumericMenuProvided, INumericMenuExposed>
  export function connectPagination(...args: any[]): any
  export function connectPoweredBy(...args: any[]): any
  export function connectRange(...args: any[]): any

  interface IRefinementListProvided {
    /** a function to toggle a refinement */
    refine: Function,
    /** a function to generate a URL for the corresponding search state */
    createURL: Function,
    /** the refinement currently applied */
    currentRefinement: string[],
    /** the list of items the RefinementList can display. */
    items: Array<{ count: number, isRefined: boolean, label: string, value: string }>,
    /** a function to toggle a search inside items values */
    searchForItems: Function,
    /** a boolean that says if the items props contains facet values from the global search or from the search inside items. */
    isFromSearch: boolean
  }
  interface IRefinementListExposed {
    /** the name of the attribute in the record */
    attribute: string,
    /** allow search inside values */
    searchable?: boolean
    /** How to apply the refinements. Possible values: ‘or’ or ‘and’. */
    operator?: 'or' | 'and'
    /** true if the component should display a button that will expand the number of items */
    showMore?: boolean
    /** the minimum number of displayed items */
    limit?: number
    /** the maximun number of displayed items. Only used when showMore is set to true */
    showMoreLimit?: number
    /**
     * the values of the items selected by default. The searchState of this widget takes the form of a list of strings, which correspond to the values of all selected refinements. However, when there are no refinements selected, the value of the searchState is an empty string.
     */
    defaultRefinement: string[]
    /** Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return. */
    transformItems?: Function
  }

  /**
   * connectRefinementList connector provides the logic to build a widget that will give the user the ability to choose multiple values for a specific facet.
   * 
   * https://community.algolia.com/react-instantsearch/connectors/connectRefinementList.html
   */
  export function connectRefinementList<TProps extends IRefinementListProvided>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, IRefinementListProvided, IRefinementListExposed>
  export function connectScrollTo(...args: any[]): any
  export function connectBreadcrumb(...args: any[]): any

  export interface ISearchBoxProvided {
    /** a function to change the current query */
    refine?: Function
    /** the current query used */
    currentRefinement?: string
    /** a flag that indicates if InstantSearch has detected that searches are stalled */
    isSearchStalled?: boolean
  }
  export interface ISearchBoxExposed {
    /** Provide a default value for the query */
    defaultRefinement?: string
  }
  export function connectSearchBox<TProps extends ISearchBoxProvided>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, ISearchBoxProvided, ISearchBoxExposed>
  export function connectSortBy(...args: any[]): any
  export function connectStats(...args: any[]): any
  export function connectToggleRefinement(...args: any[]): any

  export interface IStateResultsProvided<TDoc = BasicDoc> {
    /** The search state of the instant search component.  */
    searchState?: ISearchState,
    /**
     * The search results.
     * In case of multiple indices: if used under <Index>, results will be those of the corresponding index
     * otherwise it’ll be those of the root index
     */
    searchResults?: ISearchResults<TDoc>,
    /** In case of multiple indices you can retrieve all the results */
    allSearchResults?: ISearchResults<TDoc>,
    /** If there is a search in progress. */
    searching?: boolean,
    /** Flag that indicates if React InstantSearch has detected that searches are stalled. */
    isSearchStalled?: any,
    /** If the search failed, the error will be logged here. */
    error?: AlgoliaError,
    /** If there is a search in a list in progress. */
    searchingForFacetValues?: any
  }
  /**
   * The connectStateResults connector provides a way to access the `searchState` and the `searchResults` of InstantSearch.
   * For instance this connector allows you to create results/noResults or query/noQuery pages.
   *
   * https://community.algolia.com/react-instantsearch/connectors/connectStateResults.html
   */
  export function connectStateResults<TProps extends IStateResultsProvided<TDoc>, TDoc>(ctor: React.ComponentType<TProps>): ConnectedComponentType<TProps, IStateResultsProvided<TDoc>>

}
