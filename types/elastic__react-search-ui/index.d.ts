// Type definitions for @elastic/react-search-ui 1.3
// Project: https://github.com/elastic/search-ui#readme
// Definitions by: Alex Atallah <https://github.com/alexanderatallah>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from 'react';

export type func = (...args: any[]) => any;
export type renderFunc = (...args: any[]) => JSX.Element;

/**
 * FIELDS
 */
export type FieldValue = string | number | boolean | Array<string | number | boolean>;

export interface FieldValueWrapper {
    // A raw field value, like 'I am a raw result', or 2, or true. Raw values may
    // or may not be html escaped, so *always* sanitize a raw value before rendering
    // it on a page as html.
    raw?: FieldValue;
    // A snippet value contains a highlighted value. I.e., 'I <em>am</em> a raw
    // result'. These are always sanitized and safe to render as html.
    snippet?: string;
}

/**
 * FACETS
 */
export type FacetType = "range" | "value";

export interface FacetValue {
    // Number of results for this filter
    count: number;
    // Filter to apply if selected
    value: FilterValue;
    // Whether or not this facet value is selected
    selected?: boolean;
}

export interface FacetT {
    data: FacetValue[];
    // Name of the field this facet is associated with
    field: string;
    type: FacetType;
}

/**
 * FILTERS
 */
export interface Filter {
    field: string;
    values: FilterValue[];
    type: FilterType;
}

export type FilterType = "all" | "any" | "none";

export type FilterValueValue = FieldValue;

export interface FilterValueRange {
    // Beginning of the range, like 1
    from?: FieldValue;
    // A unique name for this range, used for display
    name: string;
    // End of the range, like 100
    to?: FieldValue;
}

export type FilterValue = FilterValueRange | FilterValueValue;

/**
 * RESULTS
 */
// Typically an object where keys are the field names, and values are field values.
// Also could be literally any other arbitrary value depending on the particular Search API response.
// Default views in Search UI know what to do with FieldValueWrapper values, but not arbitrary values, so it
// is usually better to work with FieldValueWrapper values.
// We only accept FieldValueWrapper to help typing
//
// An example would be if a user requests "grouping" in an App Search API request. That will come back
// as "_group: {..}". It *should* be there in the Result so that a developer has it available to work
// with.
export interface ResultT {
    [key: string]: FieldValueWrapper;
}

/**
 * SORTING
 */

export type SortDirection = "asc" | "desc";

export interface SortOption {
    // A display name, like "Name"
    name?: string;
    // A field name, like "name".
    value?: string;
    // asc or desc
    direction?: SortDirection | "";
}

export interface Suggestion {
    suggestion?: string;
    highlight?: string;
    data?: object;
}

export interface AutocompleteSection {
    sectionTitle?: string;
}

/**
 * CONTAINERS
 */
export interface ErrorBoundaryProps {
    // Props
    children: JSX.Element;
    className?: string;
    view?: renderFunc;
    // State
    error?: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps> {}

export interface FacetProps {
    // Props

    className?: string;
    field: string;
    label: string;
    filterType?: FilterType;
    show?: number;
    view?: renderFunc;
    isFilterable?: boolean;

    // State

    filters?: Filter[];
    facets?: { [key: string]: FacetT[] };

    // Actions

    addFilter?: func;
    removeFilter?: func;
    setFilter?: func;
    a11yNotify?: func;
}

export class Facet extends Component<FacetProps> {}

export interface ResultProps {
    // Props

    className?: string;
    clickThroughTags?: string[];
    titleField?: string;
    urlField?: string;
    view?: renderFunc;
    result: ResultT;
    shouldTrackClickThrough?: boolean;

    // Actions

    trackClickThrough?: func;
}

export class Result extends Component<ResultProps> {}

export interface ResultsContainerProps {
    // Props

    className?: string;
    clickThroughTags?: string[];
    resultView?: renderFunc;
    titleField?: string;
    urlField?: string;
    view?: renderFunc;
    shouldTrackClickThrough?: boolean;

    // State

    results: ResultT[];
}

export class Results extends Component<ResultsContainerProps> {}

export interface SearchBoxProps {
    // Props

    autocompleteMinimumCharacters?: number;
    autocompleteResults?: boolean | {
    clickThroughTags?: string[];
    linkTarget?: string;
    sectionTitle?: string;
    shouldTrackClickThrough?: boolean;
    titleField: string;
    urlField: string
    };
    autocompleteSuggestions?: boolean | AutocompleteSection | {[key: string]: AutocompleteSection};
    autocompleteView?: renderFunc;
    className?: string;
    shouldClearFilters?: boolean;
    debounceLength?: number;
    inputProps?: Partial<HTMLInputElement>;
    inputView?: renderFunc;
    onSelectAutocomplete?: func;
    onSubmit?: func;
    searchAsYouType?: boolean;
    view?: renderFunc;

    // State

    autocompletedResults?: ResultT[];
    autocompletedSuggestions?: { [key: string]: Suggestion[] };
    searchTerm?: string;

    // Actions

    setSearchTerm?: func;
    trackAutocompleteClickThrough?: func;
}

export class SearchBox extends Component<SearchBoxProps> {}

export interface PagingInfoProps {
    // Props

    className?: string;
    view?: renderFunc;

    // State

    pagingStart?: number;
    pagingEnd?: number;
    resultSearchTerm?: string;
    totalResults?: number;
}

export class PagingInfo extends Component<PagingInfoProps> {}

export interface PagingProps {
    // Props

    className?: string;
    view?: renderFunc;

    // State

    current?: number;
    resultsPerPage?: number;
    totalPages?: number;

    // Action

    setCurrent?: func;
}

export class Paging extends Component<PagingProps> {}

export interface ResultsPerPageProps {
    // Props

    className?: string;
    view?: renderFunc;
    options?: number[];

    // State

    resultsPerPage?: number;

    // Actions

    setResultsPerPage?: func;
}

export class ResultsPerPage extends Component<ResultsPerPageProps> {}

export interface SortingProps {
    // Props

    className?: string;
    label?: string;
    sortOptions: SortOption[];
    view?: renderFunc;

    // State

    sortDirection?: "asc" | "desc" | "";
    sortField?: string;

    // Actions

    setSort?: func;
}

export class Sorting extends Component<SortingProps> {}

/**
 * SEARCH
 */
/**
 * Context
 */
export interface Context {
    // Search State

    current: number;
    filters?: Filter[];
    resultsPerPage?: number;
    searchTerm?: string;
    sortDirection?: SortDirection;
    sortField?: string;

    // Response State

    autocompletedResults: Result[]; // An array of results items fetched for an autocomplete dropdown.
    autocompletedResultsRequestId: string; // A unique ID for the current autocompleted search results.
    autocompletedSuggestions: {[key: string]: Suggestion[] }; // A keyed object of query suggestions. It's keyed by type since multiple types of query suggestions can be set here.
    autocompletedSuggestionsRequestId: string; // A unique ID for the current autocompleted suggestion results.
    facets?: Facet; // Will be populated if facets configured in Advanced Configuration.
    requestId: string; // A unique ID for the current search results.
    results: Result[]; // An array of result items.
    resultSearchTerm: string; // This is tied to the searchTerm for the current results.
    totalResults: number; // Total number of results found for the current query.

    // Application State

    error?: string; // Error message, if an error was thrown.
    isLoading: boolean; // Whether or not a search is currently being performed.
    wasSearched: boolean; // Has any query been performed since this driver was created? Can be useful for displaying initial states in the UI.;
}

export interface WithSearchProps {
    mapContextToProps?: (context: Context) => any;
    children: (props: any) => JSX.Element;
}

export class WithSearch extends Component<WithSearchProps> {}

export interface SearchProviderProps {
    config?: object;  // Matches the shape of SearchDriver, which needs to be typed
    children: JSX.Element;
}

export class SearchProvider extends Component<SearchProviderProps> {}
