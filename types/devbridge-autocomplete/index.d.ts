// Type definitions for Ajax Autocomplete for jQuery 1.1.3
// Project: https://github.com/devbridge/jQuery-Autocomplete/
// Definitions by: Markus Peloso <https://github.com/ToastHawaii/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

interface JQuery {
    /**
     * Sets up autocomplete for input field(s).
     * DevdrigeAutocomplete will not override a existing autocomplete. If one extists you can use
     * the alias method devbridgeAutocomplete;
     */
    autocomplete(options: Devbridge.AutocompleteOptions): void;
    /**
     * If function invoked without argument return instance of the first matched element
     */
    autocomplete(): Devbridge.Autocomplete;
    /**
     * you may update any option at any time.Options are listed above.
     */
    autocomplete(method: "setOptions", options: Devbridge.AutocompleteOptions): void;
    /**
     * clears suggestion cache and current suggestions suggestions.
     */
    autocomplete(method: "clear"): void;
    /**
     * clears suggestion cache.
     */
    autocomplete(method: "clearCache"): void;
    /**
     * deactivate autocomplete.
     */
    autocomplete(method: "disable"): void;
    /**
     * activates autocomplete if it was deactivated before.
     */
    autocomplete(method: "enable"): void;
    /**
     * hides suggestions.
     */
    autocomplete(method: "hide"): void;
    /**
     * destroys autocomplete instance. All events are detached and suggestion containers removed.
     */
    autocomplete(method: "dispose"): void;
    /**
     * Sets up autocomplete for input field(s).
     */
    devbridgeAutocomplete(options: Devbridge.AutocompleteOptions): void;
    /**
     * If function invoked without argument return instance of the first
     * matched element
     */
    devbridgeAutocomplete(): Devbridge.Autocomplete;
    /**
     * you may update any option at any time.Options are listed above.
     */
    devbridgeAutocomplete(method: "setOptions", options: Devbridge.AutocompleteOptions): void;

    /**
     * clears suggestion cache and current suggestions suggestions.
     */
    devbridgeAutocomplete(method: "clear"): void;
    /**
     * clears suggestion cache.
     */
    devbridgeAutocomplete(method: "clearCache"): void;
    /**
     * deactivate autocomplete.
     */
    devbridgeAutocomplete(method: "disable"): void;
    /**
     * activates autocomplete if it was deactivated before.
     */
    devbridgeAutocomplete(method: "enable"): void;
    /**
     * hides suggestions.
     */
    devbridgeAutocomplete(method: "hide"): void;
    /**
     * destroys autocomplete instance. All events are detached and suggestion containers removed.
     */
    devbridgeAutocomplete(method: "dispose"): void;
}

interface JQueryStatic {
    Autocomplete: typeof Devbridge.Autocomplete;
}

declare namespace Devbridge {
    class Autocomplete {
        static defaults: AutocompleteDefaultOptions;

        constructor(el: HTMLInputElement, options?: AutocompleteOptions);

        /**
         * you may update any option at any time.Options are listed above.
         */
        setOptions(options: AutocompleteOptions): void;

        /**
         * clears suggestion cache and current suggestions suggestions.
         */
        clear(): void;

        /**
         * clears suggestion cache.
         */
        clearCache(): void;

        /**
         * deactivate autocomplete.
         */
        disable(): void;

        /**
         * activates autocomplete if it was deactivated before.
         */
        enable(): void;

        /**
         * hides suggestions.
         */
        hide(): void;

        /**
         * destroys autocomplete instance. All events are detached and
         * suggestion containers removed.
         */
        dispose(): void;
    }

    interface AutocompleteOptions {
        /**
         * Server side URL or callback function that returns serviceUrl string.
         * Optional if local lookup data is provided.
         */
        serviceUrl?: string | (() => string) | null;
        /**
         * Any additional Ajax Settings that configure the jQuery Ajax request.
         */
        ajaxSettings?: JQueryAjaxSettings | {};
        /**
         * Lookup array for the suggestions. It may be array of strings or suggestion object literals.
         */
        lookup?: string[] | AutocompleteSuggestion[] | null;
        /**
         * An object literal with the following format: { value: 'string', data: any }.
         */
        suggestion?: AutocompleteSuggestion;
        /**
         * function (suggestion, query, queryLowerCase) {} filter function for local lookups.
         * By default it does partial string match (case insensitive).
         */
        lookupFilter?: (suggestion: AutocompleteSuggestion, query: string, queryLowerCase: string) => boolean;
        /**
         * Number of maximum results to display for local lookup. Default: no limit.
         */
        lookupLimit?: number | undefined;
        /**
         * function (suggestion) {} Callback function invoked when user selects suggestion from the
         * list. this inside callback refers to input HtmlElement.
         */
        onSelect?: (this: HTMLInputElement, suggestion: AutocompleteSuggestion) => void | null;
        /**
         * Minimum number of characters required to trigger autosuggest. Default: 1.
         */
        minChars?: number;
        /**
         * Maximum height of the suggestions container in pixels. Default: 300.
         */
        maxHeight?: number;
        /**
         * Number of miliseconds to defer ajax request. Default: 0.
         */
        deferRequestBy?: number;
        /**
         * Suggestions container width in pixels, e.g.: 300. Default: auto, takes input field width.
         */
        width?: number | "auto";
        /**
         * Additional parameters to pass with the request, optional.
         */
        params?: { [param: string]: any };
        /**
         * function (suggestion, currentValue) {} custom function to format suggestion entry inside
         * suggestions container, optional.
         */
        formatResult?: (suggestion: AutocompleteSuggestion, currentValue: string) => string;
        /**
         * String or RegExp, that splits input value and takes last part to as query for
         * suggestions. Useful when for example you need to fill list of coma separated values.
         */
        delimiter?: string | RegExp | null;
        /**
         * 'z-index' for suggestions container. Default: 9999.
         */
        zIndex?: number;
        /**
         * Ajax request type to get suggestions. Default: GET.
         */
        type?: string;
        /**
         * Boolean value indicating whether to cache suggestion results. Default false.
         */
        noCache?: boolean;
        /**
         * function (query) {} called before ajax request. this is bound to input element.
         */
        onSearchStart?: (this: HTMLInputElement, query: string) => boolean | void;
        /**
         * function (query, suggestions) {} called after ajax response is processed. this is bound
         * to input element. suggestions is an array containing the results.
         */
        onSearchComplete?: (this: HTMLInputElement, query: string, suggestions: AutocompleteSuggestion[]) => void;
        /**
         * function (query, jqXHR, textStatus, errorThrown) {} called if ajax request fails. this
         * is bound to input element.
         */
        onSearchError?: (this: HTMLInputElement, query: string, jqXHR: JQueryXHR, textStatus: string, errorThrown: any) => void;
        /**
         * function () {} called when input is altered after selection has been made. this is bound
         * to input element.
         */
        onInvalidateSelection?: (this: HTMLInputElement) => void;
        /**
         * Default: false
         */
        preserveInput?: boolean;
        /**
         * Default: 'autocomplete-suggestions'
         */
        containerClass?: string;
        /**
         * Boolean value indicating if select should be triggered if it matches suggestion. Default true.
         */
        triggerSelectOnValidInput?: boolean;
        /**
         * Boolean value indicating if it shoud prevent future ajax requests for queries with the
         * same root if no results were returned. E.g. if Jam returns no suggestions, it will not
         * fire for any future query that starts with Jam. Default true.
         */
        preventBadQueries?: boolean;
        /**
         * function (container) {} called before displaying the suggestions. You may manipulate
         * suggestions DOM before it is displayed.
         */
        beforeRender?: (this: HTMLInputElement, container: JQuery, suggestions: AutocompleteSuggestion[]) => void;
        /**
         * Default false. Set to true to leave the cursor in the input field after the user tabs to
         * select a suggestion.
         */
        tabDisabled?: boolean;

        currentRequest?: any | null;
        /**
         * Default query. The name of the request parameter that contains the query.
         */
        paramName?: string;
        /**
         * function(response, originalQuery) {} called after the result of the query is ready.
         * Converts the result into response.suggestions format.
         */
        transformResult?: (response: string, originalQuery: string) => void;
        /**
         * if set to true, first item will be selected when showing suggestions. Default value false.
         */
        autoSelectFirst?: boolean;
        /**
         * container where suggestions will be appended. Default value document.body. Can be jQuery
         * object, selector or html element. Make sure to set position: absolute or position:
         * relative for that element.
         */
        appendTo?: JQuery | string | Element;
        /**
         * type of data returned from server. Either 'text' (default) or 'jsonp', which will cause
         * the autocomplete to use jsonp. You may return a json object in your callback when using jsonp.
         */
        dataType?: "text" | "jsonp";
        /**
         * Default false. When no matching results, display a notification label.
         */
        showNoSuggestionNotice?: boolean;
        /**
         * Default No results. Text or htmlString or Element or jQuery object for no matching
         * results label.
         */
        noSuggestionNotice?: string | Element | JQuery;
        /**
         * Default: false. Suggestions are automatically positioned when their container is
         * appended to body (look at appendTo option), in other cases suggestions are rendered but
         * no positioning is applied. Set this option to force auto positioning in other cases.
         */
        forceFixPosition?: boolean;
        /**
         * Default bottom. Vertical orientation of the displayed suggestions, available values are
         * auto, top, bottom. If set to auto, the suggestions will be orientated it the way that
         * place them closer to middle of the view port.
         */
        orientation?: "auto" | "top" | "bottom";
    }

    interface AutocompleteDefaultOptions {
        /**
         * Server side URL or callback function that returns serviceUrl string. Optional if local
         * lookup data is provided.
         */
        serviceUrl: string | (() => string) | null;
        /**
         * Any additional Ajax Settings that configure the jQuery Ajax request.
         */
        ajaxSettings: JQueryAjaxSettings | {};
        /**
         * Lookup array for the suggestions. It may be array of strings or suggestion object literals.
         */
        lookup: string[] | AutocompleteSuggestion[] | null;
        /**
         * An object literal with the following format: { value: 'string', data: any }.
         */
        suggestion: AutocompleteSuggestion;
        /**
         * function (suggestion, query, queryLowerCase) {} filter function for local lookups. By
         * default it does partial string match (case insensitive).
         */
        lookupFilter: (suggestion: AutocompleteSuggestion, query: string, queryLowerCase: string) => boolean;
        /**
         * Number of maximum results to display for local lookup. Default: no limit.
         */
        lookupLimit: number | undefined;
        /**
         * function (suggestion) {} Callback function invoked when user selects suggestion from the
         * list. this inside callback refers to input HtmlElement.
         */
        onSelect: (this: HTMLInputElement, suggestion: AutocompleteSuggestion) => void | null;
        /**
         * Minimum number of characters required to trigger autosuggest. Default: 1.
         */
        minChars: number;
        /**
         * Maximum height of the suggestions container in pixels. Default: 300.
         */
        maxHeight: number;
        /**
         * Number of miliseconds to defer ajax request. Default: 0.
         */
        deferRequestBy: number;
        /**
         * Suggestions container width in pixels, e.g.: 300. Default: auto, takes input field width.
         */
        width: number | "auto";
        /**
         * Additional parameters to pass with the request, optional.
         */
        params: { [param: string]: any };
        /**
         * function (suggestion, currentValue) {} custom function to format suggestion entry inside
         * suggestions container, optional.
         */
        formatResult: (suggestion: AutocompleteSuggestion, currentValue: string) => string;
        /**
         * String or RegExp, that splits input value and takes last part to as query for
         * suggestions. Useful when for example you need to fill list of coma separated values.
         */
        delimiter: string | RegExp | null;
        /**
         * 'z-index' for suggestions container. Default: 9999.
         */
        zIndex: number;
        /**
         * Ajax request type to get suggestions. Default: GET.
         */
        type: string;
        /**
         * Boolean value indicating whether to cache suggestion results. Default false.
         */
        noCache: boolean;
        /**
         * function (query) {} called before ajax request. this is bound to input element.
         */
        onSearchStart: (this: HTMLInputElement, query: string) => boolean | void;
        /**
         * function (query, suggestions) {} called after ajax response is processed. this is bound
         * to input element. suggestions is an array containing the results.
         */
        onSearchComplete: (this: HTMLInputElement, query: string, suggestions: AutocompleteSuggestion[]) => void;
        /**
         * function (query, jqXHR, textStatus, errorThrown) {} called if ajax request fails. this is
         * bound to input element.
         */
        onSearchError: (this: HTMLInputElement, query: string, jqXHR: JQueryXHR, textStatus: string, errorThrown: any) => void;
        /**
         * function () {} called when input is altered after selection has been made. this is bound
         * to input element.
         */
        onInvalidateSelection: (this: HTMLInputElement) => void;
        /**
         * Default: false
         */
        preserveInput: boolean;
        /**
         * Default: 'autocomplete-suggestions'
         */
        containerClass: string;
        /**
         * Boolean value indicating if select should be triggered if it matches suggestion. Default true.
         */
        triggerSelectOnValidInput: boolean;
        /**
         * Boolean value indicating if it shoud prevent future ajax requests for queries with the
         * same root if no results were returned. E.g. if Jam returns no suggestions, it will not fire for any future query that starts with Jam. Default true.
         */
        preventBadQueries: boolean;
        /**
         * function (container) {} called before displaying the suggestions. You may manipulate
         * suggestions DOM before it is displayed.
         */
        beforeRender: (this: HTMLInputElement, container: JQuery, suggestions: AutocompleteSuggestion[]) => void;
        /**
         * Default false. Set to true to leave the cursor in the input field after the user tabs to
         * select a suggestion.
         */
        tabDisabled: boolean;

        currentRequest: any | null;
        /**
         * Default query. The name of the request parameter that contains the query.
         */
        paramName: string;
        /**
         * function(response, originalQuery) {} called after the result of the query is ready.
         * Converts the result into response.suggestions format.
         */
        transformResult: (response: string, originalQuery: string) => void;
        /**
         * if set to true, first item will be selected when showing suggestions. Default value false.
         */
        autoSelectFirst: boolean;
        /**
         * container where suggestions will be appended. Default value document.body. Can be jQuery
         * object, selector or html element. Make sure to set position: absolute or position: relative for that element.
         */
        appendTo: JQuery | string | Element;
        /**
         * type of data returned from server. Either 'text' (default) or 'jsonp', which will cause
         * the autocomplete to use jsonp. You may return a json object in your callback when using jsonp.
         */
        dataType: "text" | "jsonp";
        /**
         * Default false. When no matching results, display a notification label.
         */
        showNoSuggestionNotice: boolean;
        /**
         * Default No results. Text or htmlString or Element or jQuery object for no matching
         * results label.
         */
        noSuggestionNotice: string | Element | JQuery;
        /**
         * Default: false. Suggestions are automatically positioned when their container is
         * appended to body (look at appendTo option), in other cases suggestions are rendered but no positioning is applied. Set this option to force auto positioning in other cases.
         */
        forceFixPosition: boolean;
        /**
         * Default bottom. Vertical orientation of the displayed suggestions, available values are
         * auto, top, bottom. If set to auto, the suggestions will be orientated it the way that place them closer to middle of the view port.
         */
        orientation: "auto" | "top" | "bottom";
    }

    interface AutocompleteSuggestion {
        value: string;
        data: any;
    }
}