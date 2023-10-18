/// <reference types="jquery"/>

interface Select2QueryOptions {
    term?: string | undefined;
    page?: number | undefined;
    context?: any;
    callback?: ((result: { results: any; more?: boolean | undefined; context?: any }) => void) | undefined;
    element?: JQuery | undefined;
}

interface AjaxFunction {
    (settings: JQueryAjaxSettings): JQueryXHR;
    (url: string, settings?: JQueryAjaxSettings): JQueryXHR;
}

interface Select2AjaxOptions extends JQueryAjaxSettings {
    transport?: AjaxFunction | undefined;
    /**
     * Url to make request to, Can be string or a function returning a string.
     */
    url?: any;
    dataType?: string | undefined;
    quietMillis?: number | undefined;
    cache?: boolean | undefined;
    jsonpCallback?: any;
    data?: ((term: string, page: number, context: any) => any) | undefined;
    results?: ((term: any, page: number, context: any) => any) | undefined;
    params?: any;
}

interface IdTextPair {
    id: any;
    text: string;
}

interface Select2Options {
    width?: string | undefined;
    dropdownAutoWidth?: boolean | undefined;
    minimumInputLength?: number | undefined;
    maximumInputLength?: number | undefined;
    minimumResultsForSearch?: number | undefined;
    maximumSelectionSize?: number | undefined;
    placeholder?: string | undefined;
    separator?: string | undefined;
    allowClear?: boolean | undefined;
    multiple?: boolean | undefined;
    closeOnSelect?: boolean | undefined;
    openOnEnter?: boolean | undefined;
    id?: ((object: any) => string) | undefined;
    matcher?: ((term: string, text: string, option: any) => boolean) | undefined;
    formatSelection?:
        | ((object: any, container: JQuery, escapeMarkup: (markup: string) => string) => string)
        | undefined;
    formatResult?:
        | ((object: any, container: JQuery, query: any, escapeMarkup: (markup: string) => string) => string)
        | undefined;
    formatResultCssClass?: ((object: any) => string) | undefined;
    formatNoMatches?: ((term: string) => string) | undefined;
    formatSearching?: (() => string) | undefined;
    formatInputTooShort?: ((term: string, minLength: number) => string) | undefined;
    formatSelectionTooBig?: ((maxSize: number) => string) | undefined;
    formatLoadMore?: ((pageNumber: number) => string) | undefined;
    createSearchChoice?: ((term: string, data: any) => any) | undefined;
    initSelection?: ((element: JQuery, callback: (data: any) => void) => void) | undefined;
    tokenizer?:
        | ((
            input: string,
            selection: any[],
            selectCallback: (token?: any) => void,
            options: Select2Options,
        ) => string | undefined | null)
        | undefined;
    tokenSeparators?: string[] | undefined;
    query?: ((options: Select2QueryOptions) => void) | undefined;
    ajax?: Select2AjaxOptions | undefined;
    data?: any;
    tags?: any;
    containerCss?: any;
    containerCssClass?: any;
    dropdownCss?: any;
    dropdownCssClass?: any;
    escapeMarkup?: ((markup: string) => string) | undefined;
    nextSearchTerm?: ((selectedObject: object, currentSearchTerm: string) => string) | undefined;
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

interface Select2Plugin {
    (): JQuery;
    (it: IdTextPair): JQuery;

    /**
     * Get the id value of the current selection
     */
    (method: "val"): any;
    /**
     * Set the id value of the current selection
     * @param value Value to set the id to
     * @param triggerChange Should a change event be triggered
     */
    (method: "val", value: any, triggerChange?: boolean): any;
    /**
     * Get the data object of the current selection
     */
    (method: "data"): any;
    /**
     * Set the data of the current selection
     * @param value Object to set the data to
     * @param triggerChange Should a change event be triggered
     */
    (method: "data", value: any, triggerChange?: boolean): any;
    /**
     * Whether it is open
     */
    (method: "opened"): boolean;
    /**
     * Whether it is in focus
     */
    (method: "isFocused"): boolean;
    /**
     * Reverts changes to DOM done by Select2. Any selection done via Select2 will be preserved.
     */
    (method: "destroy"): JQuery;
    /**
     * Opens the dropdown
     */
    (method: "open"): JQuery;
    /**
     * Closes the dropdown
     */
    (method: "close"): JQuery;
    /**
     * Disables Select2
     */
    (method: "disable"): JQuery;
    /**
     * Enables or disables Select2 and its underlying form component
     * @param value True if it should be enabled false if it should be disabled
     */
    (method: "enable", value?: boolean): JQuery;
    /**
     * Enable its focus
     */
    (method: "focus"): JQuery;
    /**
     * Toggles readonly mode on Select2 and its underlying form component
     * @param value True if it should be readonly false if it should be read write
     */
    (method: "readonly", value: boolean): JQuery;
    /**
     * Retrieves the main container element that wraps all of DOM added by Select2
     */
    (method: "container"): JQuery;
    /**
     * Notifies Select2 that a drag and drop sorting operation has started
     */
    (method: "onSortStart"): JQuery;
    /**
     * Notifies Select2 that a drag and drop sorting operation has finished
     */
    (method: "onSortEnd"): JQuery;
    /**
     * Executes a new search using the provided value. Example: $("#tags").select2("search", "California")
     */
    (method: "search"): JQuery;

    (options: Select2Options): JQuery;

    /**
     * Select2 exposes its default options via the $.fn.select2.defaults
     * object. Properties changed in this object (same properties configurable
     * through the constructor) will take effect for every instance created
     * after the change.
     */
    defaults: Partial<Select2Options>;
}

interface JQuery {
    select2: Select2Plugin;
    off(events?: "change", selector?: any, handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;

    on(
        events: "change",
        selector?: string,
        data?: any,
        handler?: (eventObject: Select2JQueryEventObject) => any,
    ): JQuery;
    on(events: "change", selector?: string, handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "change", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-opening", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-open", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-close", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-highlight", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-selecting", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-clearing", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-removing", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-removed", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-loaded", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-focus", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
    on(events: "select2-blur", handler?: (eventObject: Select2JQueryEventObject) => any): JQuery;
}
