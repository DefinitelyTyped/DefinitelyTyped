// Type definitions for Select2 3.2
// Project: http://ivaynberg.github.com/select2/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface Select2QueryOptions {
    term?: string;
    page?: number;
    context?: any;
    callback?: (result: { results: any; more: bool; context: any; }) => void;
}

interface AjaxFunction {
    (settings: JQueryAjaxSettings): JQueryXHR;
    (url: string, settings?: JQueryAjaxSettings): JQueryXHR;
}

interface Select2AjaxOptions {
    transport?: AjaxFunction;
    url?: string;
    dataType?: string;
    quietMillis?: number;
    data?: (term: string, page: number, context: any) => any;
    results?: (term: any, page: number, context: any) => any;
}

interface IdTextPair {
    id: any;
    text: string;
}

interface Select2Options {
    width?: string;
    minimumInputLength?: number;
    minimumResultsForSearch?: number;
    maximumSelectionSize?: number;
    placeholder?: string;
    separator?: string;
    allowClear?: bool;
    multiple?: bool;
    closeOnSelect?: bool;
    openOnEnter?: bool;
    id?: (object: any) => string;
    matcher?: (term: string, text: string, option: JQuery) => bool;
    formatSelection?: (object: any, container: JQuery) => string;
    formatResult?: (object: any, container: JQuery, query: any) => string;
    formatResultCssClass?: (object: any) => string;
    formatNoMatches?: (term: string) => string;
    formatSearching?: () => string;
    formatInputTooShort?: (term: string, minLength: number) => string;
    formatSelectionTooBig?: (maxSize: number) => string;
    formatLoadMore?: (pageNumber: number) => string;
    createSearchChoice?: (term: string, data: any) => any;
    initSelection?: (element: JQuery, callback: (data: any) => void ) => void;
    tokenizer?: (input: string, selection: any[], selectCallback: () => void , options: Select2Options) => string;
    tokenSeparators?: string[];
    query?: (options: Select2QueryOptions) => void;
    ajax?: Select2AjaxOptions;
    data?: any;
    tags?: any;
    containerCss?: any;
    containerCssClass?: any;
    dropdownCss?: any;
    dropdownCssClass?: any;
    escapeMarkup?: (markup: string) => string;
}

interface JQuery {
    select2(): JQuery;
    select2(it: IdTextPair): JQuery;
    select2(options: Select2Options): JQuery;
    select2(method: string, something: string): JQuery;
    select2(method: string, something: string[]): JQuery;
    select2(method: string, something: IdTextPair[]): JQuery;
    select2(method: string, options: IdTextPair): JQuery;
}
