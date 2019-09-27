// Type definitions for react-instantsearch 5.2
// Project: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react, https://community.algolia.com/react-instantsearch/
// Definitions by: Gordon Burgett <https://github.com/gburgett>
//                 Justin Powell <https://github.com/jpowell>
//                 Haroen Viaene <https://github.com/haroenv>
//                 Samuel Vaillant <https://github.com/samouss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';

import { Hit, BasicDoc } from 'react-instantsearch-core';

// Core
export { createConnector } from 'react-instantsearch-core';
export { HIGHLIGHT_TAGS } from 'react-instantsearch-core';
export { translatable } from 'react-instantsearch-core';

// Widget
export { Configure } from 'react-instantsearch-core';

// Connectors
export { connectAutoComplete } from 'react-instantsearch-core';
export { connectBreadcrumb } from 'react-instantsearch-core';
export { connectConfigure } from 'react-instantsearch-core';
export { connectCurrentRefinements } from 'react-instantsearch-core';
export { connectGeoSearch } from 'react-instantsearch-core';
export { connectHierarchicalMenu } from 'react-instantsearch-core';
export { connectHighlight } from 'react-instantsearch-core';
export { connectHits } from 'react-instantsearch-core';
export { connectHitsPerPage } from 'react-instantsearch-core';
export { connectInfiniteHits } from 'react-instantsearch-core';
export { connectMenu } from 'react-instantsearch-core';
export { connectNumericMenu } from 'react-instantsearch-core';
export { connectPagination } from 'react-instantsearch-core';
export { connectPoweredBy } from 'react-instantsearch-core';
export { connectRange } from 'react-instantsearch-core';
export { connectRefinementList } from 'react-instantsearch-core';
export { connectScrollTo } from 'react-instantsearch-core';
export { connectSearchBox } from 'react-instantsearch-core';
export { connectSortBy } from 'react-instantsearch-core';
export { connectStateResults } from 'react-instantsearch-core';
export { connectStats } from 'react-instantsearch-core';
export { connectToggleRefinement } from 'react-instantsearch-core';

// DOM
interface CommonWidgetProps {
  /**
   * All static text rendered by widgets, such as “Load more”, “Show more” are translatable using the translations prop on relevant widgets.
   * This prop is a mapping of keys to translation values. Translation values can be either a String or a (...args: any[]) => any, as some take parameters.
   *
   * https://community.algolia.com/react-instantsearch/guide/i18n.html
   */
  translations?: { [key: string]: string | ((...args: any[]) => any) };
}

interface InstantSearchBaseProps {
  indexName: string;
  createURL?: (...args: any[]) => any;
  searchState?: any;
  refresh?: boolean;
  onSearchStateChange?: (...args: any[]) => any;
  onSearchParameters?: (...args: any[]) => any;
  resultsState?: any;
  stalledSearchDelay?: number;
  root?: {
    Root: string | ((...args: any[]) => any);
    props?: object;
  };
}

export interface UsingSearchClientProps extends InstantSearchBaseProps {
  searchClient: any;
}

export interface UsingManualInfoProps extends InstantSearchBaseProps {
  apiKey: string;
  appId: string;
  algoliaClient?: any;
}

export type InstantSearchProps = UsingSearchClientProps | UsingManualInfoProps;

/**
 * <InstantSearch> is the root component of all React InstantSearch implementations. It provides all the connected components (aka widgets) a means to interact with the searchState.
 *
 * https://community.algolia.com/react-instantsearch/widgets/%3CInstantSearch%3E.html
 */
export class InstantSearch extends React.Component<InstantSearchProps> {}
export class Index extends React.Component<any> {}
export class Breadcrumb extends React.Component<any> {}
export class ClearRefinements extends React.Component<any> {}
export class CurrentRefinements extends React.Component<any> {}
export class HierarchicalMenu extends React.Component<any> {}
export class Highlight extends React.Component<any> {}

export interface HitsProps<T> {
  hitComponent?: React.ComponentType<{ hit: Hit<T> }>;
}
/**
 * Displays a list of hits.
 * To configure the number of hits being shown, use the HitsPerPage widget, connectHitsPerPage connector or the Configure widget.
 *
 * https://community.algolia.com/react-instantsearch/widgets/Hits.html
 */
export class Hits<T = BasicDoc> extends React.Component<HitsProps<T>> {}
export class HitsPerPage extends React.Component<any> {}
export class InfiniteHits extends React.Component<any> {}
export class Menu extends React.Component<any> {}
export class MenuSelect extends React.Component<any> {}
export class NumericMenu extends React.Component<any> {}
export class Pagination extends React.Component<any> {}
export class Panel extends React.Component<any> {}
export class PoweredBy extends React.Component<any> {}
export class RangeInput extends React.Component<any> {}
export class RangeSlider extends React.Component<any> {}
export class RatingMenu extends React.Component<any> {}
export class RefinementList extends React.Component<any> {}
export class ScrollTo extends React.Component<any> {}

export interface SearchBoxProps extends CommonWidgetProps {
  focusShortcuts?: string[];
  autoFocus?: boolean;
  defaultRefinement?: string;
  searchAsYouType?: boolean;
  showLoadingIndicator?: boolean;

  submit?: JSX.Element;
  reset?: JSX.Element;
  loadingIndicator?: JSX.Element;

  onSubmit?: (event: React.SyntheticEvent<HTMLFormElement>) => any;
  onReset?: (event: React.SyntheticEvent<HTMLFormElement>) => any;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => any;
}
/**
 * The SearchBox component displays a search box that lets the user search for a specific query.
 *
 * https://community.algolia.com/react-instantsearch/widgets/SearchBox.html
 */
export class SearchBox extends React.Component<SearchBoxProps> {}
export class Snippet extends React.Component<any> {}
export class SortBy extends React.Component<any> {}
/**
 * The Stats component displays the total number of matching hits and the time it took to get them (time spent in the Algolia server).
 */
export class Stats extends React.Component<{translations?: { [key: string]: (n: number, ms: number) => string }}> {}
export class ToggleRefinement extends React.Component<any> {}
