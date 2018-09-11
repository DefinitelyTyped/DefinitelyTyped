// Type definitions for MagicSuggest 2.1.4
// Project: http://nicolasbize.com/magicsuggest
// Definitions by: Leonardo Chaia <https://github.com/leonardochaia>
// Definitions: https://github.com/leonardochaia/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
interface JQuery {
    /**
    * Initialize MagicSuggest on this selector
    */
    magicSuggest(configurationObject?: MagicSuggest.Configuration): MagicSuggest.Instance;
}

declare namespace MagicSuggest {
    interface Configuration {
        /* ********  CONFIGURATION PROPERTIES ************/
        /**
         * Restricts or allows the user to validate typed entries.
         * Defaults to true.
         */
        allowFreeEntries?: boolean;

        /**
         * Restricts or allows the user to add the same entry more than once
         * Defaults to false.
         */
        allowDuplicates?: boolean;

        /**
         * Additional config object passed to each $.ajax call
         */
        ajaxConfig?: JQueryAjaxSettings;

        /**
         * If a single suggestion comes out, it is preselected.
         */
        autoSelect?: boolean;

        /**
         * Auto select the first matching item with multiple items shown
         */
        selectFirst?: boolean;

        /**
         * Allow customization of query parameter
         */
        queryParam?: string;

        /**
         * A function triggered just before the ajax request is sent, similar to jQuery
         */
        beforeSend?: () => void;

        /**
         * A custom CSS class to apply to the field's underlying element.
         */
        cls?: string;

        /**
         * JSON Data source used to populate the combo box. 3 options are available here:
         * No Data Source (default)
         *    When left null, the combo box will not suggest anything. It can still enable the user to enter
         *    multiple entries if allowFreeEntries is * set to true (default).
         * Static Source
         *    You can pass an array of JSON objects, an array of strings or even a single CSV string as the
         *    data source.For ex. data: [* {id:0,name:"Paris"}, {id: 1, name: "New York"}]
         *    You can also pass any json object with the results property containing the json array.
         * Url
         *     You can pass the url from which the component will fetch its JSON data.Data will be fetched
         *     using a POST ajax request that will * include the entered text as 'query' parameter. The results
         *     fetched from the server can be:
         *     - an array of JSON objects (ex: [{id:...,name:...},{...}])
         *     - a string containing an array of JSON objects ready to be parsed (ex: "[{id:...,name:...},{...}]")
         *     - a JSON object whose data will be contained in the results property
         *      (ex: {results: [{id:...,name:...},{...}]
         * Function
         *     You can pass a function which returns an array of JSON objects  (ex: [{id:...,name:...},{...}])
         *     The function can return the JSON data or it can use the first argument as function to handle the data.
         *     Only one (callback function or return value) is needed for the function to succeed.
         *     See the following example:
         *     function (response) { var myjson = [{name: 'test', id: 1}]; response(myjson); return myjson; }
         */
        data?: any;

        /**
         * Additional parameters to the ajax call
         */
        dataUrlParams?: Object;

        /**
         * Start the component in a disabled state.
         */
        disabled?: boolean;

        /**
         * Name of JSON object property that defines the disabled behaviour
         */
        disabledField?: string;

        /**
         * Name of JSON object property displayed in the combo list
         */
        displayField?: string;

        /**
         * Set to false if you only want mouse interaction. In that case the combo will
         * automatically expand on focus.
         */
        editable?: boolean;

        /**
         * Set starting state for combo.
         */
        expanded?: boolean;

        /**
         * Automatically expands combo on focus.
         */
        expandOnFocus?: boolean;

        /**
         * JSON property by which the list should be grouped
         */
        groupBy?: string;

        /**
         * Set to true to hide the trigger on the right
         */
        hideTrigger?: boolean;

        /**
         * Set to true to highlight search input within displayed suggestions
         */
        highlight?: boolean;

        /**
         * A custom ID for this component
         */
        id?: string;

        /**
         * A class that is added to the info message appearing on the top-right part of the component
         */
        infoMsgCls?: string;

        /**
         * Additional parameters passed out to the INPUT tag. Enables usage of AngularJS's custom tags for ex.
         */
        inputCfg?: any;

        /**
         * The class that is applied to show that the field is invalid
         */
        invalidCls?: string;

        /**
         * Set to true to filter data results according to case. Useless if the data is fetched remotely
         */
        matchCase?: boolean;

        /**
         * Once expanded, the combo's height will take as much room as the # of available results.
         *    In case there are too many results displayed, this will fix the drop down height.
         */
        maxDropHeight?: number;

        /**
         * Defines how long the user free entry can be. Set to null for no limit.
         */
        maxEntryLength?: number;

        /**
         * A function that defines the helper text when the max entry length has been surpassed.
         */
        maxEntryRenderer?: (v?: number) => void;

        /**
         * The maximum number of results displayed in the combo drop down at once.
         */
        maxSuggestions?: number;

        /**
         * The maximum number of items the user can select if multiple selection is allowed.
         *    Set to null to remove the limit.
         */
        maxSelection?: number;

        /**
         * A function that defines the helper text when the max selection amount has been reached. The function has a single
         *    parameter which is the number of selected elements.
         */
        maxSelectionRenderer?: (v: number) => void;

        /**
         * The method used by the ajax request.
         */
        method?: string;

        /**
         * The minimum number of characters the user must type before the combo expands and offers suggestions.
         */
        minChars?: number;

        /**
         * A function that defines the helper text when not enough letters are set. The function has a single
         *    parameter which is the difference between the required amount of letters and the current one.
         */
        minCharsRenderer?: (v: number) => void;

        /**
         * Whether or not sorting / filtering should be done remotely or locally.
         * Use either 'local' or 'remote'
         */
        mode?: string;

        /**
         * The name used as a form element.
         */
        name?: string;

        /**
         * The text displayed when there are no suggestions.
         */
        noSuggestionText?: string;

        /**
         * The default placeholder text when nothing has been entered
         */
        placeholder?: string;

        /**
         * A function used to define how the items will be presented in the combo
         */
        renderer?: (item: any) => void;

        /**
         * Whether or not this field should be required
         */
        required?: boolean;

        /**
         * Set to true to render selection as a delimited string
         */
        resultAsString?: boolean;

        /**
         * Text delimiter to use in a delimited string.
         */
        resultAsStringDelimiter?: string;

        /**
         * Name of JSON object property that represents the list of suggested objects
         */
        resultsField?: string;

        /**
         * A custom CSS class to add to a selected item
         */
        selectionCls?: string;

        /**
         * An optional element replacement in which the selection is rendered
         */
        selectionContainer?: JQuery;

        /**
         * Where the selected items will be displayed. Only 'right', 'bottom' and 'inner' are valid values
         */
        selectionPosition?: string;

        /**
         * A function used to define how the items will be presented in the tag list
         */
        selectionRenderer?: (item: any) => void;

        /**
         * Set to true to stack the selectioned items when positioned on the bottom
         *    Requires the selectionPosition to be set to 'bottom'
         */
        selectionStacked?: boolean;

        /**
         * Direction used for sorting. Only 'asc' and 'desc' are valid values
         */
        sortDir?: string;

        /**
         * name of JSON object property for local result sorting.
         *    Leave null if you do not wish the results to be ordered or if they are already ordered remotely.
         */
        sortOrder?: string;

        /**
         * If set to boolean; suggestions will have to start by user input (and not simply contain it as a substring)
         */
        strictSuggest?: boolean;

        /**
         * Custom style added to the component container.
         */
        style?: string;

        /**
         * If set to boolean; the combo will expand / collapse when clicked upon
         */
        toggleOnClick?: boolean;


        /**
         * Amount (in ms) between keyboard registers.
         */
        typeDelay?: number;

        /**
         * If set to boolean; tab won't blur the component but will be registered as the ENTER key
         */
        useTabKey?: boolean;

        /**
         * If set to boolean; using comma will validate the user's choice
         */
        useCommaKey?: boolean;


        /**
         * Determines whether or not the results will be displayed with a zebra table style
         */
        useZebraStyle?: boolean;

        /**
         * initial value for the field
         */
        value?: any;

        /**
         * name of JSON object property that represents its underlying value
         */
        valueField?: string;

        /**
         * regular expression to validate the values against
         */
        vregex?: any;

        /**
         * type to validate against
         */
        vtype?: any;
    }

    interface Instance {
        /**
         * Add one or multiple json items to the current selection
         * @param items - json object or array of json objects
         * @param isSilent - (optional) set to true to suppress 'selectionchange' event from being triggered
         */
        addToSelection(objs: Array<any>, isSilent?: boolean): void;

        /**
         * Clears the current selection
         * @param isSilent - (optional) set to true to suppress 'selectionchange' event from being triggered
         */
        clear(isSilent?: boolean): void;

        /**
        * Collapse the drop down part of the combo
        */
        collapse(): void;

        /**
         * Set the component in a disabled state.
         */
        disable(): void;

        /**
        * Empties out the combo user text
        */
        empty(): void;

        /**
        * Set the component in a enable state.
        */
        enable(): void;

        /**
         * Retrieve component enabled status
         * @return {boolean}
         */
        isDisabled(): boolean;

        /**
         * Checks whether the field is valid or not
         * @return {boolean}
         */
        isValid(): boolean;

        /**
         * Gets the data params for current ajax request
         */
        getDataUrlParams(): Object;

        /**
         * Gets the name given to the form input
         */
        getName(): string;

        /**
         * Retrieve an array of selected json objects
         * @return {Array}
         */
        getSelection(): Array<any>;

        /**
         * Retrieve the current text entered by the user
         */
        getRawValue(): string;

        /**
         * Retrieve an array of selected values
         */
        getValue(): Array<any>;

        /**
         * Remove one or multiples json items from the current selection
         * @param items - json object or array of json objects
         * @param isSilent - (optional) set to true to suppress 'selectionchange' event from being triggered
         */
        removeFromSelection(items: any, isSilent: boolean): void;

        /**
         * Set up some combo data after it has been rendered
         * @param data
         */
        setData(data: any): void;

        /**
         * Get current data
         */
        getData(): any;

        /**
         * Sets the name for the input field so it can be fetched in the form
         * @param name
         */
        setName(name: string): void;

        /**
         * Sets the current selection with the JSON items provided
         * @param items
         * @param isSilent - (optional)
         */
        setSelection(items: Array<any>, isSilet?: boolean): void;

        /**
         * Sets a value for the combo box. Value must be an array of values with data type matching valueField one.
         * @param data
         */
        setValue(values: Array<any>): void;

        /**
         * Sets data params for subsequent ajax requests
         * @param params
         */
        setDataUrlParams(params: any): void;

    }
}
