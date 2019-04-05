// Type definitions for jquery-typeahead
// Project: https://github.com/running-coder/jquery-typeahead
// Definitions by: Hamid Mayeli <https://github.com/HamidTheGeek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQuery {
    typeahead<T>(options: RunningCoder.Typeahead.Options): JQuery;
}

interface JQueryStatic {
    typeahead<T>(options: RunningCoder.Typeahead.Options): JQuery;
}

declare namespace RunningCoder.Typeahead {
    interface Options {
        /**
         * The jQuery input selector is only required if the Typeahead was initialized without a jQuery object. 
         * In that case, if no input is found, the Typeahead is dropped.
         */
        input?: string,

        /**
         * The number of characters typed inside the search input before searching for results. 
         * It is possible to set this option to 0 and combine it with `searchOnFocus: true` to display a set of results by default.
         * 
         * @default 2
         */
        minLength?: number,

        /**
         * The maximum number of characters typed inside the input to perform a search.
         * 
         * @default false
         */
        maxLength?: false | number,

        /**
         * The maximum number of search results that will appear inside the list. Set 0 to display ALL search results.
         * It is possible to combine `maxItem` with `maxItemPerGroup` to get different results.
         * 
         * @default 8
         */
        maxItem?: false | number,

        /**
         * By default, the typeahead will only load once the source data. 
         * Although you can change this behavior and request the data to be re-loaded on every "input" event (similar to keypress). - [Demo](http://www.runningcoder.org/jquerytypeahead/demo/#form-user_v1)
         * * Note that you can modify the Ajax request to send the query with `{{query}}` modifier.
         * 
         * @default false
         */
        dynamic?: boolean,

        /**
         * If `dynamic: true`, the delay (in milliseconds) will add a timer to prevent from sending a request on every key typed. 
         * Instead the request(s) will be sent once the delay expires.
         * 
         * @default 300
         */
        delay?: number,

        /**
         * Takes the default order in which the data was given. 
         * If `"asc"` or `"desc"` is set, they results will re-order based on display key.
         */
        order?: "asc" | "desc",

        /**
         * `false` The position of the matched query can be anywhere inside the result string
         * 
         * `true` The query can only be match if the result string starts by the query characters.
         * 
         * @default false
         */
        offset?: boolean,

        /**
         * A suggestion text will appear if there is an item inside the result list that starts by the user query.
         * Also pressing the right arrow at the end of the search input text will autocomplete the query with the suggested hint and call `callback.onClickBefore` with the selected item.
         *
         * @default false
         */
        hint?: boolean | CssObject,

        /**
         * If enabled, the query and search results will ignore accents (`ãàáäâẽèéëêìíïîõòóöôùúüûñç`) and display every matches regardless of the punctuation.  Ex: `é = e`, `À = a`, etc.
         * It is possible to set a custom accent object, by simply setting `from` and `to` keys
         * * Using this option on large data sets (10,000+ items) might impact your search performances.
         * 
         * @default false
         */
        accent?: boolean | any,
        searchOnFocus?: boolean,
        debug?: boolean,
        backdrop?: boolean | CssObject,
        correlativeTemplate?: boolean,
        emptyTemplate?: string | ((query?: string) => string | JQuery),
        source?: Source | Source[] | SourceTable,
        callback?: Callback,
        blurOnTab?: boolean,
        highlight?: "any" | boolean, // Added "any" to highlight any word in the template, by default true will only highlight display keys
        multiselect?: MultiSelectSettings, // Multiselect configuration object, see documentation for all options
        group?: boolean | string | GroupSetting, // Improved feature, boolean,string,object(key, template (string, function))
        groupOrder?: "asc" | "desc" | string[] | ((node?: JQuery, query?: string, result?: any, resultCount?: number, resultCountPerGroup?: number) => any), // New feature, order groups "asc", "desc", Array, Function
        maxItemPerGroup?: number, // Maximum number of result per Group
        dropdownFilter?: boolean | "string" | DropdownFilterItem[], // Take group options string and create a dropdown filter
        dynamicFilter?: false | DynamicFilterItem[], // Filter the typeahead results based on dynamic value, Ex: Players based on TeamID
        backdropOnFocus?: true, // Display the backdrop option as the Typeahead input is :focused
        cache?: boolean | "localStorage" | "sessionStorage", // Improved option, true OR 'localStorage' OR 'sessionStorage'
        ttl?: number, // Cache time to live in ms
        compression?: boolean, // Requires LZString library
        resultContainer?: "string" | JQuery | false, // List the results inside any container string or jQuery object
        generateOnLoad?: boolean, // Forces the source to be generated on page load even if the input is not focused!
        mustSelectItem?: boolean, // The submit function only gets called if an item is selected
        href?: string | ((item?: any) => string), // String or Function to format the url for right-click & open in new tab on link results
        display?: string[], // Allows search in multiple item keys ["display1", "display2"]
        template?: string | ((query?: string, item?: any) => string), // Display template of each of the result list
        templateValue?: string, // Set the input value template when an item is clicked
        groupTemplate?: null, // Set a custom template for the groups
        cancelButton?: boolean, // If text is detected in the input, a cancel button will be available to reset the input (pressing ESC also cancels)
        loadingAnimation?: true, // Display a loading animation when typeahead is doing request / searching for results
        filter?: boolean | ((item?: any, displayKey?: string) => boolean), // Set to false or function to bypass Typeahead filtering. WARNING: accent, correlativeTemplate, offset & matcher will not be interpreted
        matcher?: ((item?: any, displayKey?: string) => boolean), // Add an extra filtering function after the typeahead functions
        selector?: Selector
    }

    interface Source {
        minLength?: number,
        maxLength?: false | number,
        dynamic?: boolean,
        filter?: boolean | ((item?: any, displayKey?: string) => boolean),
        matcher?: ((item?: any, displayKey?: string) => boolean),
        cache?: boolean | "localStorage" | "sessionStorage",
        compression?: boolean,
        ttl?: number,
        data?: any[] | (() => any[]),
        template?: string | ((query?: string, item?: any) => string),
        display?: string | string[],
        ajax?: AJaxSettings | ((query?: string) => AJaxSettings)
    }

    interface AJaxSettings extends JQueryAjaxSettings {
        path?: string,
        done?: (data?: JQuery, textStatus?: string, jqXHR?: JQueryXHR) => void,
        fail?: (jqXHR?: JQueryXHR, textStatus?: string, errorThrown?: any) => void,
        always?: (data?: JQuery, textStatus?: string, jqXHR?: JQueryXHR) => void,
        then?: (jqXHR?: JQueryXHR, textStatus?: string) => void
    }

    interface SourceTable {
        [key: string]: Source
    }

    interface CssObject {
        [key: string]: string
    }

    interface DynamicFilterItem {
        selector: string
        key: string,
    }

    interface DropdownFilterItem {
        key: string,
        template: string | ((item: any) => string),
        value: string,
        all: string
    }

    interface GroupSetting {
        key: string,
        template: string | ((item: any) => string)
    }

    interface MultiSelectSettings {
        limit?: number,
        limitTemplate?: string | ((query?: string) => any),
        matchOn?: string | any[],
        cancelOnBackspace?: boolean,
        href?: string | ((item?: any) => any),
        data?: any[] | (() => any[] | any),
        callback?: MultiSelectSettingsCallback
    }

    interface MultiSelectSettingsCallback {
        onClick?: (node?: JQuery, item?: any, event?: JQueryEventObject) => any;
        onCancel?: (node?: JQuery, item?: any, event?: JQueryEventObject) => any;
    }

    interface Callback {
        onInit?: (node?: JQuery) => void,
        onNavigateBefore?: (node?: JQuery, query?: string, event?: JQueryEventObject) => void,
        onNavigateAfter?: (node?: JQuery, lis?: JQuery, a?: JQuery, item?: any, query?: string, event?: JQueryEventObject) => void,
        onClickAfter?: (node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void,
        onResult?: (node?: JQuery, query?: string, result?: any, resultCount?: number) => void,
        onMouseEnter?: (node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void,
        onMouseLeave?: (node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void,
        onClick?: (node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void,
        onSubmit?: (node?: JQuery, form?: any, item?: any, event?: JQueryEventObject) => void,
        onSendRequest?: (node?: JQuery, query?: string) => void,
        onReceiveRequest?: (node?: JQuery, query?: string) => void,
        onShowLayout?: (node?: JQuery, query?: string) => void,
        onHideLayout?: (node?: JQuery, query?: string) => void,
        onLayoutBuiltBefore?: (node?: JQuery, query?: string, result?: any, resultHtmlList?: JQuery) => JQuery,
        onPopulateSource?: (node?: JQuery, data?: any[], group?: any, path?: any) => any[],
        onReady?: (node?: JQuery) => void, // When the Typeahead initial preparation is completed
        onSearch?: (node?: JQuery, query?: string) => void, // When data is being fetched & analyzed to give search results
        onLayoutBuiltAfter?: (node?: JQuery, query?: string, result?: any) => void, // Modify the dom right after the results gets inserted in the result container
        onEnter?: (node?: JQuery, item?: any, result?: any, event?: JQueryEventObject) => void, // When an item in the result list is focused
        onLeave?: (node?: JQuery, item?: any, result?: any, event?: JQueryEventObject) => void, // When an item in the result list is blurred
        onClickBefore?: (node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void, // Possibility to e.preventDefault() to prevent the Typeahead behaviors
        onDropdownFilter?: (node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void, // When the dropdownFilter is changed, trigger this callback
        onCacheSave?: (node?: JQuery, data?: any, group?: any, path?: any) => void, // Perform operation on the source data before it gets in Typeahead cache
        onCancel?: (node?: JQuery, event?: JQueryEventObject) => void, // Triggered if the typeahead had text inside and is cleared
    }

    interface Selector {
        container?: string,
        result?: string,
        list?: string,
        group?: string,
        item?: string,
        empty?: string,
        display?: string,
        query?: string,
        filter?: string,
        filterButton?: string,
        dropdown?: string,
        dropdownItem?: string,
        labelContainer?: string,
        label?: string,
        button?: string,
        backdrop?: string,
        hint?: string,
        cancelButton?: string
    }
}
