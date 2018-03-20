// Type definitions for Select2 4.0.1
// Project: http://ivaynberg.github.com/select2/
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/// <reference types="jquery"/>

interface Select2QueryOptions {
    term?: string;
    page?: number;
    context?: any;
    callback?: (result: { results: any; more?: boolean; context?: any; }) => void;
}

interface AjaxFunction {
    (settings: JQueryAjaxSettings, success?: (data: any) => null, failure?: () => null): JQueryXHR;
}

interface Select2AjaxOptions extends JQueryAjaxSettings {
    transport?: AjaxFunction;
    /**
    * Url to make request to, Can be string or a function returning a string.
    */
    url?: any;
    dataType?: string;
    delay?: number;
    headers?: any;
    cache?: boolean;
    data?: (params: Select2QueryOptions, page: number, context: any) => any;
    results?: (term: any, page: number, context: any) => any;
    processResults?: (data: any, params: any) => any;
    templateResult?: (data: any) => any;
    templateSelection?: (data: any) => any;
}

interface IdTextPair {
    id: any;
    text: string;
}

interface Select2Options {
    amdBase?: string;
    amdLanguageBase?: string;
    width?: string;
    dropdownAutoWidth?: boolean;
    minimumInputLength?: number;
    maximumInputLength?: number;
    minimumResultsForSearch?: number;
    maximumSelectionLength?: number;
    placeholder?: string | IdTextPair;
    separator?: string;
    allowClear?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    closeOnSelect?: boolean;
    openOnEnter?: boolean;
    id?: (object: any) => string;
    matcher?: (term: string, text: string, option: any) => boolean;
    formatSelection?: (object: any, container: JQuery, escapeMarkup: (markup: string) => string) => string;
    formatResult?: (object: any, container: JQuery, query: any, escapeMarkup: (markup: string) => string) => string;
    formatResultCssClass?: (object: any) => string;
    formatNoMatches?: (term: string) => string;
    formatSearching?: () => string;
    formatInputTooShort?: (term: string, minLength: number) => string;
    formatSelectionTooBig?: (maxSize: number) => string;
    formatLoadMore?: (pageNumber: number) => string;
    createSearchChoice?: (term: string, data: any) => any;
    initSelection?: (element: JQuery, callback: (data: any) => void) => void;
    tokenizer?: (input: string, selection: any[], selectCallback: () => void, options: Select2Options) => string;
    tokenSeparators?: string[];
    query?: (options: Select2QueryOptions) => void;
    ajax?: Select2AjaxOptions;
    data?: any;
    tags?: any;
    createTag?: any;
    containerCss?: any;
    containerCssClass?: any;
    dropdownCss?: any;
    dropdownCssClass?: any;
    escapeMarkup?: (markup: string) => string;
    theme?: string;
    /**
    * Template can return both plain string that will be HTML escaped and a jquery object that can render HTML
    */
    templateSelection?: (object: Select2SelectionObject, container: JQuery) => any;
    templateResult?: (object: Select2SelectionObject) => any;
    language?: string | string[] | {};
    selectOnClose?: boolean;
    sorter?: (data: any[]) => any[];
    dropdownParent?: JQuery;
    debug?: boolean;
    dropdownAdapter?: any;
    selectionAdapter?: any;
    resultsAdapter?: any;
}

interface Select2JQueryEventObject extends JQueryEventObject {
    val: any;
    added: any;
    removed: any;
    choice: {
        id: any;
        text: string;
    };
}

interface Select2SelectionObject {
    loading: boolean;
    disabled: boolean;
    element: HTMLOptionElement;
    id: string;
    selected: boolean;
    text: string;
    title: string;
}

interface Select2Plugin {
    amd: any;

    (): JQuery;
    (it: IdTextPair): JQuery;

	/**
	 * Get the id value of the current selection
	 */
    (method: 'val'): any;
	/**
	 * Set the id value of the current selection
	 * @params value Value to set the id to
	 * @params triggerChange Should a change event be triggered
	 */
    (method: 'val', value: any, triggerChange?: boolean): any;
	/**
	 * Get the data object of the current selection
	 */
    (method: 'data'): any;
	/**
	 * Set the data of the current selection
	 * @params value Object to set the data to
	 * @params triggerChange Should a change event be triggered
	 */
    (method: 'data', value: any, triggerChange?: boolean): any;
	/**
	 * Reverts changes to DOM done by Select2. Any selection done via Select2 will be preserved.
	 */
    (method: 'destroy'): JQuery;
	/**
	 * Opens the dropdown
	 */
    (method: 'open'): JQuery;
	/**
	 * Closes the dropdown
	 */
    (method: 'close'): JQuery;
	/**
	 * Enables or disables Select2 and its underlying form component
	 * @param value True if it should be enabled false if it should be disabled
	 */
    (method: 'enable', value: boolean): JQuery;
	/**
	 * Toggles readonly mode on Select2 and its underlying form component
	 * @param value True if it should be readonly false if it should be read write
	 */
    (method: 'readonly', value: boolean): JQuery;
	/**
	 * Retrieves the main container element that wraps all of DOM added by Select2
	 */
    (method: 'container'): JQuery;
	/**
	 * Notifies Select2 that a drag and drop sorting operation has started
	 */
    (method: 'onSortStart'): JQuery;
	/**
	 * Notifies Select2 that a drag and drop sorting operation has finished
	 */
    (method: 'onSortEnd'): JQuery;

    (method: string): any;
    (method: string, value: any, trigger?: boolean): any;
    (options: Select2Options): JQuery;
}

interface JQuery {
    select2: Select2Plugin;
    off(events?: "change", selector?: any, handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;

    on(events: "change", selector?: string, data?: any, handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "change", selector?: string, handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "change", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-opening", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-open", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-close", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-highlight", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-selecting", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-removing", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-removed", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-loaded", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-focus", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-blur", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-opening", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-open", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-close", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-highlight", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-selecting", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-removing", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-removed", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-loaded", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-focus", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-blur", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
}

declare class Select2 {
    constructor(element: JQuery, options: Select2Options);
    focus(): void;
    destroy(): void;
    on(event: string, callback: Function): void;
    selection: any;
    dropdown: any;
    results: any;
    $container: JQuery;
    $dropdown: JQuery;
    $selection: JQuery;
    $results: JQuery;
    options: { options: Select2Options };
}
