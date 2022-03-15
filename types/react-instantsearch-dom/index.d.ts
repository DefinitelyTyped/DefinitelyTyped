// Type definitions for react-instantsearch 6.12
// Project: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react, https://community.algolia.com/react-instantsearch/
// Definitions by: Gordon Burgett <https://github.com/gburgett>
//                 Justin Powell <https://github.com/jpowell>
//                 Haroen Viaene <https://github.com/haroenv>
//                 Samuel Vaillant <https://github.com/samouss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';

import { Hit, BasicDoc, DynamicWidgetsProps as CoreDynamicWidgetsProps } from 'react-instantsearch-core';

// Core
export { createConnector } from 'react-instantsearch-core';
export { HIGHLIGHT_TAGS } from 'react-instantsearch-core';
export { translatable } from 'react-instantsearch-core';

// Widget
export { Index } from 'react-instantsearch-core';
export { InstantSearch } from 'react-instantsearch-core';
export { InstantSearchProps } from 'react-instantsearch-core';
export { Configure } from 'react-instantsearch-core';
export { ExperimentalConfigureRelatedItems } from 'react-instantsearch-core';
export { QueryRuleContext } from 'react-instantsearch-core';

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
export { connectRelevantSort } from 'react-instantsearch-core';
export { connectSortBy } from 'react-instantsearch-core';
export { connectStateResults } from 'react-instantsearch-core';
export { connectStats } from 'react-instantsearch-core';
export { connectToggleRefinement } from 'react-instantsearch-core';
export { EXPERIMENTAL_connectConfigureRelatedItems } from 'react-instantsearch-core';
export { connectHitInsights } from 'react-instantsearch-core';
export { connectQueryRules } from 'react-instantsearch-core';

// DOM
interface CommonWidgetProps {
  /**
   * All static text rendered by widgets, such as “Load more”, “Show more” are translatable using the translations prop on relevant widgets.
   * This prop is a mapping of keys to translation values. Translation values can be either a String or a (...args: any[]) => any, as some take parameters.
   *
   * https://community.algolia.com/react-instantsearch/guide/i18n.html
   */
  translations?: {
    [key: string]: string | ((...args: any[]) => any);
  } | undefined;
}

export class Breadcrumb extends React.Component<any> {}
export class ClearRefinements extends React.Component<any> {}
export class CurrentRefinements extends React.Component<any> {}
export class HierarchicalMenu extends React.Component<any> {}
export class Highlight extends React.Component<any> {}

export interface RefinementItem<T> {
  value: T;
  label: string;
}

export interface HitsProps<T> {
  hitComponent?: React.ComponentType<{ hit: Hit<T> }> | undefined;
}
/**
 * Displays a list of hits.
 * To configure the number of hits being shown, use the HitsPerPage widget, connectHitsPerPage connector or the Configure widget.
 *
 * https://community.algolia.com/react-instantsearch/widgets/Hits.html
 */
export class Hits<T = BasicDoc> extends React.Component<HitsProps<T>> {}
export interface HitsPerPageProps {
  items: Array<RefinementItem<number>>;
  defaultRefinement: number;
  id?: string;
  className?: string;
  transformItems?(items: Array<RefinementItem<number>>): Array<RefinementItem<number>>;
}
export class HitsPerPage extends React.Component<HitsPerPageProps> {}
export class InfiniteHits extends React.Component<any> {}
export class Menu extends React.Component<any> {}
export interface MenuSelectProps {
  attribute: string;
  // Optional parameters
  id?: string;
  className?: string;
  defaultRefinement?: string;
  limit?: number;
  transformItems?(items: Array<RefinementItem<string>>): Array<RefinementItem<string>>;
  translations?: { seeAllOption?: string };
}
export class MenuSelect extends React.Component<MenuSelectProps> {}
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
  inputId?: string;
  className?: string;
  inputRef?: React.Ref<HTMLInputElement> | undefined;
  focusShortcuts?: string[] | undefined;
  autoFocus?: boolean | undefined;
  defaultRefinement?: string | undefined;
  searchAsYouType?: boolean | undefined;
  showLoadingIndicator?: boolean | undefined;

  submit?: JSX.Element | undefined;
  reset?: JSX.Element | undefined;
  loadingIndicator?: JSX.Element | undefined;

  onSubmit?: ((event: React.SyntheticEvent<HTMLFormElement>) => any) | undefined;
  onReset?: ((event: React.SyntheticEvent<HTMLFormElement>) => any) | undefined;
  onChange?: ((event: React.SyntheticEvent<HTMLInputElement>) => any) | undefined;
  onKeyDown?: ((event: React.KeyboardEvent<HTMLInputElement>) => any) | undefined;
}
/**
 * The SearchBox component displays a search box that lets the user search for a specific query.
 *
 * https://community.algolia.com/react-instantsearch/widgets/SearchBox.html
 */
export class SearchBox extends React.Component<SearchBoxProps> {}
export class Snippet extends React.Component<any> {}
export interface RelevantSortComponentProps {
  isRelevantSorted: boolean;
}
/**
 * The RelevantSort component displays an informative banner and a button that toggle the `relevancyStrictness` between 0 and the value setted on the dashboard.
 */
export class RelevantSort extends React.Component<{
  buttonTextComponent?: React.FunctionComponent<RelevantSortComponentProps> | undefined;
  textComponent?: React.FunctionComponent<RelevantSortComponentProps> | undefined;
}> {}

export interface SortByProps {
  items: Array<RefinementItem<string>>;
  defaultRefinement: string;
  id?: string;
  className?: string;
  transformItems?(items: Array<RefinementItem<string>>): Array<RefinementItem<string>>;
}
export class SortBy extends React.Component<SortByProps> {}
/**
 * The Stats component displays the total number of matching hits and the time it took to get them (time spent in the Algolia server).
 */
export class Stats extends React.Component<{
  translations?: {
    [key: string]: (n: number, ms: number, nSortedHits: number, areHitsSorted: boolean) => string;
  } | undefined;
}> {}
export class ToggleRefinement extends React.Component<any> {}

export class VoiceSearch extends React.Component<any> {}

export class QueryRuleCustomData extends React.Component<any> {}

// helper functions
export function getInsightsAnonymousUserToken(): string | undefined;
export function createClassNames(baseName: string): (...elements: string[]) => string | string[];

export interface VoiceSearchHelperParams {
  searchAsYouSpeak: boolean;
  language?: string | undefined;
  onQueryChange: (query: string) => void;
  onStateChange: () => void;
}

export type Status = 'initial' | 'askingPermission' | 'waiting' | 'recognizing' | 'finished' | 'error';

export interface VoiceListeningState {
  status: Status;
  transcript: string;
  isSpeechFinal: boolean;
  errorCode?: "no-speech" | "aborted" | "audio-capture" | "network" | "not-allowed" | "service-not-allowed" | "bad-grammar" | "language-not-supported" | undefined;
}

export interface VoiceSearchHelper {
  getState: () => VoiceListeningState;
  isBrowserSupported: () => boolean;
  isListening: () => boolean;
  toggleListening: () => void;
  dispose: () => void;
}

export function createVoiceSearchHelper(params: VoiceSearchHelperParams): VoiceSearchHelper;

export function createInfiniteHitsSessionStorageCache(...args: any[]): any;

export interface DynamicWidgetsProps extends CoreDynamicWidgetsProps {
    className?: string | undefined;
}

export class DynamicWidgets extends React.Component<DynamicWidgetsProps> {}
