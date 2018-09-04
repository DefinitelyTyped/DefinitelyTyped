// Type definitions for react-bootstrap-typeahead 3.2
// Project: https://github.com/ericgio/react-bootstrap-typeahead
// Definitions by: Guymestef <https://github.com/Guymestef>
//                 Rajab Shakirov <https://github.com/radziksh>
//                 Paito Anderson <https://github.com/PaitoAnderson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
// TODO: <Highlighter>, <Menu>, <MenuItem>, <Token> components

import * as React from 'react';

export interface TypeaheadProps<T> {
    /* For localized accessibility: Should return a string indicating the number of results for screen readers. Receives the current results. */
    a11yNumResults?: () => void;

    /* For localized accessibility: Should return a string indicating the number of selections for screen readers. Receives the current selections. */
    a11yNumSelected?: () => void;

    /* Specify menu alignment. The default value is justify, which makes the menu as wide as the input and truncates long values.
       Specifying left or right will align the menu to that side and the width will be determined by the length of menu item values. */
    align?: 'justify' | 'left' | 'right';

    /* Allows the creation of new selections on the fly. Any new items will be added to the list of selections,
       but not the list of original options unless handled as such by Typeahead's parent.
       The newly added item will always be returned as an object even if the other options are simply strings,
       so be sure your onChange callback can handle this. */
    allowNew?: boolean;

    /* Autofocus the input when the component initially mounts. */
    autoFocus?: boolean;

    /* Whether to render the menu inline or attach to document.body. */
    bodyContainer?: boolean;

    /* Specify the size of the input. */
    bsSize?: 'large' | 'lg' | 'small' | 'sm';

    /* Whether or not filtering should be case-sensitive. */
    caseSensitive?: boolean;

    /* Displays a button to clear the input when there are selections. */
    clearButton?: boolean;

    /* The initial value displayed in the text input. */
    defaultInputValue?: string;

    /* Specify any pre-selected options. Use only if you want the component to be uncontrolled. */
    defaultSelected?: T[];

    /* Whether to disable the input. Will also disable selections when multiple={true}. */
    disabled?: boolean;

    /* Specify whether the menu should appear above the input. */
    dropup?: boolean;

    /* Message displayed in the menu when there are no valid results.
       Passing a falsy value will hide the menu if no matches are found. */
    emptyLabel?: string;

    /* Either an array of fields in option to search, or a custom filtering callback. */
    filterBy?: (string[] | ((option: T | string, text: string) => boolean));

    /* Highlights the menu item if there is only one result and allows selecting that item by hitting enter.
       Does not work with allowNew. */
    highlightOnlyResult?: boolean;

    /* Whether the filter should ignore accents and other diacritical marks. */
    ignoreDiacritics?: boolean;

    /* Props to be applied directly to the input. onBlur, onChange, onFocus, and onKeyDown are ignored. */
    inputProps?: object;

    /* Bootstrap 4 only. Adds the `is-invalid` classname to the `form-control`. */
    isInvalid?: boolean;

    /* Indicate whether an asynchronous data fetch is happening. */
    isLoading?: boolean;

    /* Bootstrap 4 only. Adds the `is-valid` classname to the `form-control`. */
    isValid?: boolean;

    /* Specify which option key to use for display or a render function. By default, the selector will use the label key. */
    labelKey?: string | ((option: T | string) => string);

    /* Maximum height of the dropdown menu. */
    maxHeight?: string;

    /* Maximum number of results to display by default. Mostly done for performance reasons
       so as not to render too many DOM nodes in the case of large data sets. */
    maxResults?: number;

    /* Number of input characters that must be entered before showing results. */
    minLength?: number;

    /* Whether or not multiple selections are allowed. */
    multiple?: boolean;

    /* Provides the ability to specify a prefix before the user-entered text to indicate that the selection will be new. No-op unless allowNew={true}. */
    newSelectionPrefix?: string;

    /* Invoked when the input is blurred. Receives an event. */
    onBlur?: (e: Event) => any;

    /* Invoked whenever items are added or removed. Receives an array of the selected options. */
    onChange?: (selected: T[]) => any;

    /* Invoked when the input is focused. Receives an event. */
    onFocus?: (e: Event) => any;

    /* Invoked when the input value changes. Receives the string value of the input, as well as the original event. */
    onInputChange?: (input: string, e: Event) => any;

    /* Invoked when a key is pressed. Receives an event. */
    onKeyDown?: (e: Event) => any;

    /* Invoked when the menu is hidden. */
    onMenuHide?: (e: Event) => any;

    /* Invoked when the menu is shown. */
    onMenuShow?: (e: Event) => any;

    /* Invoked when the pagination menu item is clicked. */
    onPaginate?: (e: Event) => any;

    /* Full set of options, including any pre-selected options. */
    options: T[];

    /* Give user the ability to display additional results if the number of results exceeds maxResults. */
    paginate?: boolean;

    /* Prompt displayed when large data sets are paginated. */
    paginationText?: string;

    /* Placeholder text for the input. */
    placeholder?: string;

    /* Callback for custom menu rendering. */
    renderMenu?: (results: Array<T | string>, menuProps: any) => any;

    /* Provides a hook for customized rendering of menu item contents. */
    renderMenuItemChildren?: (option: T, props: TypeaheadProps<T>, index: number) => any;

    /* Provides a hook for customized rendering of tokens when multiple selections are enabled. */
    renderToken?: (selectedItem: T | string, onRemove: () => void) => any;

    /* The selected option(s) displayed in the input. Use this prop if you want to control the component via its parent. */
    selected?: T[];

    /* Allows selecting the hinted result by pressing enter. */
    selectHintOnEnter?: boolean;
}

export const Typeahead: React.ClassicComponentClass<TypeaheadProps<any>>;

export interface AsyncTypeaheadProps<T> extends TypeaheadProps<T> {
    /* 	Delay, in milliseconds, before performing search. */
    delay?: number;

    /* Whether or not a request is currently pending. Necessary for the component to know when new results are available. */
    isLoading: boolean;

    /* Callback to perform when the search is executed. */
    onSearch: (query: string) => void;

    /* Message displayed in the menu when there is no user input. */
    promptText?: string;

    /* Message to display in the menu while the request is pending. */
    searchText?: string;

    /* Whether or not the component should cache query results. */
    useCache?: boolean;
}

export const AsyncTypeahead: React.ClassicComponentClass<AsyncTypeaheadProps<any>>;
