/// <reference types="jquery" />

interface JQuery {
    typeahead(options: RunningCoder.Typeahead.Options): JQuery;
}

interface JQueryStatic {
    typeahead(options: RunningCoder.Typeahead.Options): JQuery;
}

declare namespace RunningCoder.Typeahead {
    interface Options {
        /**
         * The jQuery input selector is only required if the Typeahead was initialized without a jQuery object.
         * In that case, if no input is found, the Typeahead is dropped.
         */
        input?: string | undefined;

        /**
         * The number of characters typed inside the search input before searching for results.
         * It is possible to set this option to 0 and combine it with `searchOnFocus: true` to display a set of results by default.
         *
         * @default 2
         */
        minLength?: number | undefined;

        /**
         * The maximum number of characters typed inside the input to perform a search.
         *
         * @default false
         */
        maxLength?: false | number | undefined;

        /**
         * The maximum number of search results that will appear inside the list. Set 0 to display ALL search results.
         * It is possible to combine `maxItem` with `maxItemPerGroup` to get different results.
         *
         * @default 8
         */
        maxItem?: false | number | undefined;

        /**
         * By default, the typeahead will only load once the source data.
         * Although you can change this behavior and request the data to be re-loaded on every "input" event (similar to
         * keypress). - [Demo](http://www.runningcoder.org/jquerytypeahead/demo/#form-user_v1)
         * * Note that you can modify the Ajax request to send the query with `{{query}}` modifier.
         *
         * @default false
         */
        dynamic?: boolean | undefined;

        /**
         * If `dynamic: true`, the delay (in milliseconds) will add a timer to prevent from sending a request on every key typed.
         * Instead the request(s) will be sent once the delay expires.
         *
         * @default 300
         */
        delay?: number | undefined;

        /**
         * Takes the default order in which the data was given.
         * If `"asc"` or `"desc"` is set, they results will re-order based on display key.
         */
        order?: "asc" | "desc" | undefined;

        /**
         * `false` The position of the matched query can be anywhere inside the result string
         *
         * `true` The query can only be match if the result string starts by the query characters.
         *
         * @default false
         */
        offset?: boolean | undefined;

        /**
         * A suggestion text will appear if there is an item inside the result list that starts by the user query.
         * Also pressing the right arrow at the end of the search input text will autocomplete the query with the suggested hint and call `callback.onClickBefore` with the selected item.
         *
         * @default false
         */
        hint?: boolean | CssObject | undefined;

        /**
         * If enabled, the query and search results will ignore accents (`ãàáäâẽèéëêìíïîõòóöôùúüûñç`) and display every matches regardless of the punctuation.  Ex: `é = e`, `À = a`, etc.
         * It is possible to set a custom accent object, by simply setting `from` and `to` keys
         * * Using this option on large data sets (10,000+ items) might impact your search performances.
         *
         * @default false
         */
        accent?: boolean | FromToPair | undefined;

        /**
         * The search result(s) will receive the <strong> HTML tag around the matched query.
         *
         * If set to `true`, only the display keys will be highlighted
         *
         * If set to `"any"`, any string within the template will be highlighted
         *
         * @default true
         */
        highlight?: "any" | boolean | undefined;

        /** `multiselect` configuration */
        multiselect?: MultiSelectSettings | undefined;

        /**
         * If set to `true`, the results will grouped by the group name specified inside `source`.
         *
         * If set to `string`, the results will be grouped by the corresponding object key.
         * Ex: group: `"conference"` will group the hockey teams by `"Western"` and `"Eastern"` conferences in [hockey_v1 demo](http://www.runningcoder.org/jquerytypeahead/demo/#form-hockey_v1)
         *
         * If an Object is set: `key`: Grouping key. `template`: Grouping template in the result list (custom header text), can be string or function.
         *
         * @default false
         */
        group?: boolean | string | GroupSetting | undefined;

        /**
         * By default, the groups will be output in the same order as they are defined in `source`.
         * Set `"asc"` or `"desc"` to have the group name sorted ascending or descending
         * Set an `Array` to specify the group order to appear in the search result
         */
        groupOrder?:
            | "asc"
            | "desc"
            | string[]
            | ((
                node?: JQuery,
                query?: string,
                result?: any,
                resultCount?: number,
                resultCountPerGroup?: number,
            ) => any[])
            | undefined;

        /** Set a maximum results per group if `group: true` configuration is enabled */
        maxItemPerGroup?: number | undefined;

        /**
         * If a string a specified, a dropdown filter will be created between the search input and the search submit button using the `source.group` as indexes.
         * The string value will appear at the end of the dropdown and will filter through all the sources.
         *
         * If an array of objects is set, the dropdownFilter will be built based on it. It is then possible to create filters based on item matching key:value. -
         * [Demo](http://www.runningcoder.org/jquerytypeahead/demo/#form-hockey_v1)
         */
        dropdownFilter?: boolean | "string" | DropdownFilterItem[] | undefined;

        /**
         * If filters objects are defined, the Typeahead source data will be filtered based on the `"selected"` / `"checked"` checkboxes,
         * radios and selects based on `"OR"` and `"AND"` filtering similar to database queries.
         * * `selector` is the jquery selector to reach the unique input type `"checkbox"`, `"radio"` or select tag
         * * `key` the object key that will be filtered, you can use "dot" notation to reach deep object properties,
         * but in that case extra processing will be performed. Ex `object.key.is.deep`
         * * `|` key prefix means "OR" filtering, the object key CAN match the value
         * * `&` key prefix means "AND" filtering, the object key HAS to match the value
         *
         * Ex `dynamicFilter: [{ selector: "#assassin", key: "|tags.Assassin" }],`
         */
        dynamicFilter?: false | DynamicFilterItem[] | undefined;

        /**
         * If set to `true`, html will be added to add a backdrop under the search input and results.
         * It is possible to override the css options by passing an object to this option.
         */
        backdrop?: boolean | CssObject | undefined;

        /**
         * If set to `true`, as soon as the Typeahead input is focused, the `backdrop` option will be displayed regardless.
         */
        backdropOnFocus?: true | undefined;

        /**
         * * If set to `true` or `localStorage`, the source data will be stored in `localStorage`.
         * * If set to `sessionStorage`, the source data will be stored in `sessionStorage`.
         */
        cache?: boolean | "localStorage" | "sessionStorage" | undefined;

        /** This is a `cache` configuration, it sets the storage time to live in milliseconds. */
        ttl?: number | undefined;

        /**
         * Enabling this option will compress the data inside Localstorage.
         * * Setting `compression: true` requires `cache: true` option to be enabled.
         */
        compression?: boolean | undefined;

        /**
         * If enabled, the typeahead will display results (if any) on input focus. You can combine this option with the input
         * attribute `"autofocus"` to display results when the page is loaded.
         */
        searchOnFocus?: boolean | undefined;

        /** Blur Typeahead when Tab key is pressed, if false Tab will go though search results */
        blurOnTab?: boolean | undefined;

        /**
         * If a jQuery string selector or jQuery object is specified, the typeahead results will appear in that container instead of the default one.
         * If the option is set to `false`, the HTML result list will not be built.
         * Use this option for filtering "already on page" HTML list elements with show / hide.
         */
        resultContainer?: "string" | false | JQuery | undefined;

        /**
         * If enabled, the source data will be generated (doing Ajax request and preparing to data to be searched)
         * on page load instead of waiting for the input to be focused.
         * * This option does not work well with `dynamic: true` unless some other configuration is adjusted.
         */
        generateOnLoad?: boolean | undefined;

        /**
         * If enabled, an item will HAVE TO be selected in order to submit the form.
         * Use this option if you want to restrict searching to your data set only.
         */
        mustSelectItem?: boolean | undefined;

        /**
         * If a string is defined, every result item will receive the string as href attribute replacing any `{{itemKey}}` by the `item's value`.
         * It is possible to apply an extra operation of `"slugify"` on the value `{{url|slugify}}`. - [Demo](http://www.runningcoder.org/jquerytypeahead/demo/#form-beer_v1)
         */
        href?: string | ((item?: any) => string) | undefined;

        /**
         * The key that will be searched for typeahead matching results inside source objects.
         * It is possible to search through multiple keys by simply adding them inside the configuration array.
         */
        display?: string[] | undefined;

        /**
         * The template is a HTML string containing keys that will replaced by match results object keys.
         * You MUST use `{{variable}}` delimiters for your string to be replaced.
         *
         * You can also reach multi-level deep object properties using regular `"."` format, `{{variable.secordlevel.thirdlevel}}`
         *
         * If you need to print the item values inside HTML data attributes, it is possible to use `{{variable|raw}}`.
         * That optional modifier will make sure to get the unmodified value.
         */
        template?: string | ((query?: string, item?: any) => string) | undefined;

        /**
         * In case there are no results to be displayed, a row will be displayed containing this template.
         * It is possible to display the query using `{{query}}` string.
         */
        emptyTemplate?: string | ((query?: string) => string | JQuery) | undefined;

        /**
         * When an item is selected / clicked, by default the `"Matched key"` will go inside the input.
         * By defining a `templateValue`, the text that will result in the input can be customized.
         */
        templateValue?: string | undefined;

        /**
         * This option provides a small `"x"` on the right side of the input to clear the text,
         * similar to some browser's default behavior with `input[type="search"]`.
         */
        cancelButton?: boolean | undefined;

        /**
         * If set to function, every element will be filtered using this custom rule AFTER the regular Typeahead filters have been applied.
         */
        filter?: boolean | ((item?: any, displayKey?: string) => boolean) | undefined;

        /**
         * By default, search text matching is reserved to `display` keys. A searched text can't match multiple keys.
         *
         * If the option is enabled with `true` or `array` of display keys, every item will reveive an additional key called `compiled`.
         * This key will then be searched first (using soften matching mechanism) for any matching results, then the `display` keys will
         * be searched (using a `"string perfect"` matching mechanism).
         *
         * If the option is set to true, the `template` option will be compiled into the `"compiled"` item key.
         *
         * It is also possible to set an Array of display keys instead of the complete template. Try it on
         * [Hockey_v1](http://www.runningcoder.org/jquerytypeahead/demo/#form-hockey_v1)
         */
        correlativeTemplate?: boolean | any[] | undefined;

        /**
         * The source option corresponds to the data set(s) that Typeahead will look through to find matches for the user query string.
         * Inside the source, you can have multiple lists of data (groups)
         * It is possible to send an async request inside the data function using `$.Deferred`
         * `source.group` configuration:
         */
        source?: Source | Source[] | SourceTable | undefined;

        /** Display debug information (RECOMMENDED for dev environment) */
        debug?: boolean | undefined;

        /**
         * The callbacks are used to customize and add functionality to your Typeahead instance. You will find plenty of examples in the Demo section.
         * There are 3 ways to define the callbacks:
         * * Function `(recommended)`: Anonymous function calling a local function with parameters.
         * * String: Function name (can be namespaced) located on the window scope without any parameters.
         * * Array: First element is the function name accessible from the window scope, second element is an array containing the parameters.
         */
        callback?: Callback | undefined;

        /** Set a custom template for the groups */
        groupTemplate?: null | undefined;

        /** Display a loading animation when typeahead is doing request / searching for results */
        loadingAnimation?: true | undefined;

        /** If set to function, every element will be filtered using this custom rule AFTER the regular Typeahead filters have been applied. */
        matcher?: ((item?: any, displayKey?: string) => boolean) | undefined;

        selector?: Selector | undefined;
    }

    interface Source {
        /** Overrides the default configuration for the specified group. */
        minLength?: number | undefined;

        /** Overrides the default configuration for the specified group. */
        maxLength?: false | number | undefined;

        /** Overrides the default configuration for the specified group. */
        dynamic?: boolean | undefined;

        /** Overrides the default configuration for the specified group. */
        filter?: boolean | ((item?: any, displayKey?: string) => boolean) | undefined;

        /** Overrides the default configuration for the specified group. */
        matcher?: ((item?: any, displayKey?: string) => boolean) | undefined;

        /** Overrides the default configuration for the specified group. */
        cache?: boolean | "localStorage" | "sessionStorage" | undefined;

        /** Overrides the default configuration for the specified group. */
        compression?: boolean | undefined;

        /** Overrides the default configuration for the specified group. */
        ttl?: number | undefined;

        /**  Array or function that returns an Array. The items in your array can either be strings or objects */
        data?: any[] | (() => any[]) | undefined;

        /** Overrides the default configuration for the specified group. */
        template?: string | ((query?: string, item?: any) => string) | undefined;

        /** Overrides the default configuration for the specified group. */
        display?: string | string[] | undefined;

        /** En extended version of `JQuery Ajax` */
        ajax?: AJaxSettings | ((query?: string) => AJaxSettings) | undefined;
    }

    interface AJaxSettings extends JQueryAjaxSettings {
        path?: string | undefined;
        done?: ((data?: JQuery, textStatus?: string, jqXHR?: JQueryXHR) => void) | undefined;
        fail?: ((jqXHR?: JQueryXHR, textStatus?: string, errorThrown?: any) => void) | undefined;
        always?: ((data?: JQuery, textStatus?: string, jqXHR?: JQueryXHR) => void) | undefined;
        then?: ((jqXHR?: JQueryXHR, textStatus?: string) => void) | undefined;
    }

    interface FromToPair {
        from: string;
        to: string;
    }

    interface SourceTable {
        [key: string]: Source;
    }

    interface CssObject {
        [key: string]: string;
    }

    interface DynamicFilterItem {
        selector: string;
        key: string;
    }

    interface DropdownFilterItem {
        key: string;
        template: string | ((item: any) => string);
        value: string;
        all: string;
    }

    interface GroupSetting {
        key: string;
        template: string | ((item: any) => string);
    }

    interface MultiSelectSettings {
        /** Optional limit of maximum items to select */
        limit?: number | undefined;

        /** Template when the limit is reached */
        limitTemplate?: string | ((query?: string) => string) | undefined;

        /** Unique item identifier to remove an item from the result list when selected (use any of the item key), by default a JSON of the item will be used */
        matchOn?: string | any[] | undefined;

        /** If true, the last label will be deleted if the query is empty and backspace is pressed */
        cancelOnBackspace?: boolean | undefined;

        /** Href link on the multiselect item */
        href?: string | ((item?: any) => string) | undefined;

        /** Default items when Typeahead is loade */
        data?: any[] | (() => any) | undefined;

        callback?: MultiSelectSettingsCallback | undefined;
    }

    interface MultiSelectSettingsCallback {
        /** Triggered when a multiselect item is clicked */
        onClick?: ((node?: JQuery, item?: any, event?: JQueryEventObject) => void) | undefined;

        /** Triggered when a multiselect item is canceled */
        onCancel?: ((node?: JQuery, item?: any, event?: JQueryEventObject) => void) | undefined;
    }

    interface Callback {
        /** Will be executed on Typeahead initialization, before anything else. */
        onInit?: ((node?: JQuery) => void) | undefined;

        /** Triggers when the Typeahead initial preparation is completed. */
        onReady?: ((node?: JQuery) => void) | undefined;

        /** Triggers when the Typeahead results layout is displayed. */
        onShowLayout?: ((node?: JQuery, query?: string) => void) | undefined;

        /** Triggers when the Typeahead results layout is requested to hide. */
        onHideLayout?: ((node?: JQuery, query?: string) => void) | undefined;

        /** Triggers every time a new search is executed in Typeahead. */
        onSearch?: ((node?: JQuery, query?: string) => void) | undefined;

        /** Whenever the result changes, this callback will be triggered. */
        onResult?: ((node?: JQuery, query?: string, result?: any, resultCount?: number) => void) | undefined;

        /**
         * When the result HTML is build, modify it before it get showed.
         * This callback should be used to modify the result DOM before it gets inserted into Typeahead.
         * * If you are using this callback, the resultHtmlList param needs to be returned at the end of your function.
         */
        onLayoutBuiltBefore?:
            | ((node?: JQuery, query?: string, result?: any, resultHtmlList?: JQuery) => JQuery)
            | undefined;

        /** Perform an action right after the result HTML gets inserted into Typeahead's DOM. */
        onLayoutBuiltAfter?: ((node?: JQuery, query?: string, result?: any) => void) | undefined;

        /**
         * When a key is pressed to navigate the results. It is possible to disable the input text change
         * when using up and down arrows when `event.preventInputChange` is set to true
         */
        onNavigateBefore?: ((node?: JQuery, query?: string, event?: JQueryEventObject) => void) | undefined;

        /** Called at the end of Navigate (once the `.active` class and other operations are completed). */
        onNavigateAfter?:
            | ((node?: JQuery, lis?: JQuery, a?: JQuery, item?: any, query?: string, event?: JQueryEventObject) => void)
            | undefined;

        /** Will be executed when a item is hovered inside the result list. */
        onMouseEnter?: ((node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void) | undefined;

        /** Will be executed when a result item is hovered out. */
        onMouseLeave?: ((node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void) | undefined;

        /**
         * Will be executed when a result item is clicked or the right arrow is pressed when an item is selected from
         * the results list. This function will trigger before the regular behaviors.
         */
        onClick?: ((node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void) | undefined;

        /**
         * Will be executed when a result item is clicked or the right arrow is pressed when an item is selected from
         * the results list. This function will trigger before the regular behaviors.
         */
        onClickBefore?: ((node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void) | undefined;

        /**
         * Will be executed when a result item is clicked or the right arrow is pressed when an item is selected from
         * the results list. This function will trigger after the regular behaviors.
         */
        onClickAfter?: ((node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void) | undefined;

        /** Will be executed when a dropdown filter is selected. Requires `dropdownFilter: true`. */
        onDropdownFilter?: ((node?: JQuery, a?: JQuery, item?: any, event?: JQueryEventObject) => void) | undefined;

        /** Gets called when the Ajax request(s) are sent. Either on initial requests or on every dynamic requests. */
        onSendRequest?: ((node?: JQuery, query?: string) => void) | undefined;

        /** Gets called when the Ajax request(s) are all received */
        onReceiveRequest?: ((node?: JQuery, query?: string) => void) | undefined;

        /**
         * Gets called after the Ajax requests are all received and the data is populated inside Typeahead.
         * This is the place where extra parsing or filtering should occure before the data gets available inside any Typeahead query
         * For example, the Backend sends the "display" key separated by underscores "_" instead of spaces " ".
         * * The `data` parameter HAS to be returned after it's transformed.
         */
        onPopulateSource?: ((node?: JQuery, data?: any[], group?: any, path?: any) => any[]) | undefined;

        /** Perform operation on the source data before it gets in Typeahead cache */
        onCacheSave?: ((node?: JQuery, data?: any, group?: any, path?: any) => void) | undefined;

        /**
         * Override the native onSubmit function by your own.
         * If after performing a set of action(s) you want to submit the form, simply do `form.submit()`.
         * * The item parameter is not always defined. An item object will be sent if the submit happens after an item from the list has been selected.
         */
        onSubmit?: ((node?: JQuery, form?: any, item?: any, event?: JQueryEventObject) => void) | undefined;

        /**
         * Any time there is text inside the input and it gets cleared (Backspace, Esc, Cancel button, etc).
         * It is possible to track back the event that cleared the input using event.originalEvent
         */
        onCancel?: ((node?: JQuery, event?: JQueryEventObject) => void) | undefined;

        /** When an item in the result list is focused */
        onEnter?: ((node?: JQuery, item?: any, result?: any, event?: JQueryEventObject) => void) | undefined;

        /** When an item in the result list is blurred */
        onLeave?: ((node?: JQuery, item?: any, result?: any, event?: JQueryEventObject) => void) | undefined;
    }

    interface Selector {
        container?: string | undefined;
        result?: string | undefined;
        list?: string | undefined;
        group?: string | undefined;
        item?: string | undefined;
        empty?: string | undefined;
        display?: string | undefined;
        query?: string | undefined;
        filter?: string | undefined;
        filterButton?: string | undefined;
        dropdown?: string | undefined;
        dropdownItem?: string | undefined;
        labelContainer?: string | undefined;
        label?: string | undefined;
        button?: string | undefined;
        backdrop?: string | undefined;
        hint?: string | undefined;
        cancelButton?: string | undefined;
    }
}
