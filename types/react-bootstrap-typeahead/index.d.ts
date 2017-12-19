// Type definitions for react-bootstrap-typeahead 2.0
// Project: https://github.com/ericgio/react-bootstrap-typeahead
// Definitions by: Guymestef <https://github.com/Guymestef>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export interface TypeaheadProps<T> {
    a11yNumResults?: () => void;
    a11yNumSelected?: () => void;
    align?: 'justify' | 'left' | 'right';
    allowNew?: boolean;
    autoFocus?: boolean;
    bodyContainer?: boolean;
    bsSize?: 'large' | 'lg' | 'small' | 'sm';
    caseSensitive?: boolean;
    clearButton?: boolean;
    defaultSelected?: T[];
    disabled?: boolean;
    dropup?: boolean;
    emptyLabel?: string;
    filterBy?: (string[] | ((option: T | string, text: string) => boolean));
    highlightOnlyResult?: boolean;
    ignoreDiacritics?: boolean;
    inputProps?: object;
    labelKey?: string | ((option: T | string) => string);
    maxHeight?: number;
    maxResults?: number;
    minLength?: number;
    multiple?: boolean;
    newSelectionPrefix?: string;
    onBlur?: (e: Event) => any;
    onChange?: (selected: T[]) => any;
    onFocus?: (e: Event) => any;
    onInputChange?: (input: string) => any;
    onKeyDown?: (e: Event) => any;
    onMenuHide?: (e: Event) => any;
    onMenuShow?: (e: Event) => any;
    onPaginate?: (e: Event) => any;
    options: T[];
    paginate?: boolean;
    paginationText?: string;
    placeholder?: string;
    renderMenu?: (results: Array<T | string>, menuProps: any) => any;
    renderMenuItemChildren?: (option: T, props: TypeaheadProps<T>, index: number) => any;
    renderToken?: (selectedItem: T | string, onRemove: () => void) => any;
    selected?: T[];
    selectHintOnEnter?: boolean;
    submitFormOnEnter?: boolean;
}

export const Typeahead: React.ClassicComponentClass<TypeaheadProps<any>>;

export interface AsyncTypeaheadProps<T> extends TypeaheadProps<T> {
    delay?: number;
    isLoading: boolean;
    onSearch: (query: string) => void;
    promptText?: string;
    searchText?: string;
    useCache?: boolean;
}

export const AsyncTypeahead: React.ClassicComponentClass<AsyncTypeaheadProps<any>>;
