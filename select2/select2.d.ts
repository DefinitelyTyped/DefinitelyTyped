// Type definitions for Select2 3.2
// Project: http://ivaynberg.github.com/select2/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface Select2QueryOptions {
    term?: string;
    page?: number;
    context?: any;
    callback?: (result: { results: any; more?: boolean; context?: any; }) => void;
}

interface AjaxFunction {
    (settings: JQueryAjaxSettings): JQueryXHR;
    (url: string, settings?: JQueryAjaxSettings): JQueryXHR;
}

interface Select2AjaxOptions {
    transport?: AjaxFunction;
    /**
    * Url to make request to, Can be string or a function returning a string.
    */
    url?: any;
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
    dropdownAutoWidth?: boolean;
    minimumInputLength?: number;
    minimumResultsForSearch?: number;
    maximumSelectionSize?: number;
    placeholder?: string;
    separator?: string;
    allowClear?: boolean;
    multiple?: boolean;
    closeOnSelect?: boolean;
    openOnEnter?: boolean;
    id?: (object: any) => string;
    matcher?: (term: string, text: string, option: any) => boolean;
    formatSelection?: (object: any, container: JQuery, escapeMarkup:(markup: string) => string) => string;
    formatResult?: (object: any, container: JQuery, query: any, escapeMarkup: (markup: string) => string) => string;
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

interface Select2JQueryEventObject extends JQueryEventObject {
    val: any;
    added: any;
    removed: any;
}

interface JQuery {
    off(events?: "change", selector?: any, handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;

    on(events: "change", selector?: string, data?: any, handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "change", selector?: string, handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "change", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;

    select2(): JQuery;
    select2(it: IdTextPair): JQuery;

    /**
    * Get the id value of the current selection
    */
    select2(method: 'val'): any;
    /**
    * Set the id value of the current selection
    * @params value Value to set the id to
    * @params triggerChange Should a change event be triggered
    */
    select2(method: 'val', value: any, triggerChange?: boolean): any;
    /**
    * Get the data object of the current selection
    */
    select2(method: 'data'): any;
    /**
    * Set the data of the current selection
    * @params value Object to set the data to
    * @params triggerChange Should a change event be triggered
    */
    select2(method: 'data', value: any, triggerChange?: boolean): any;
    /**
    * Reverts changes to DOM done by Select2. Any selection done via Select2 will be preserved.
    */
    select2(method: 'destroy'): JQuery;
    /**
    * Opens the dropdown
    */
    select2(method: 'open'): JQuery;
    /**
    * Closes the dropdown
    */
    select2(method: 'close'): JQuery;
    /**
    * Enables or disables Select2 and its underlying form component
    * @param value True if it should be enabled false if it should be disabled
    */
    select2(method: 'enable', value: boolean): JQuery;
    /**
    * Toggles readonly mode on Select2 and its underlying form component
    * @param value True if it should be readonly false if it should be read write
    */
    select2(method: 'readonly', value: boolean): JQuery;
    /**
    * Retrieves the main container element that wraps all of DOM added by Select2
    */
    select2(method: 'container'): JQuery;
    /**
    * Notifies Select2 that a drag and drop sorting operation has started
    */
    select2(method: 'onSortStart'): JQuery;
    /**
    * Notifies Select2 that a drag and drop sorting operation has finished
    */
    select2(method: 'onSortEnd'): JQuery;

    select2(method: string): any;
    select2(method: string, value: any, trigger?: boolean): any;
    select2(options: Select2Options): JQuery;
}
