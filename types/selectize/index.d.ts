declare namespace Selectize {
    // see https://github.com/brianreavis/selectize.js/blob/master/docs/usage.md
    // option identifiers are parameterized by T; data is parameterized by U
    interface IOptions<T, U> {
        // General
        // ------------------------------------------------------------------------------------------------------------

        /**
         * An array of the initial selected values. By default this is populated from the original input element.
         */
        items?: T[] | undefined;

        /**
         * The placeholder of the control (displayed when nothing is selected / typed).
         * Defaults to input element's placeholder, unless this one is specified.
         */
        placeholder?: string | undefined;

        /**
         * The string to separate items by. This option is only used when Selectize is instantiated from a
         * <input type="text"> element.
         *
         * Default: ','
         */
        delimiter?: string | undefined;

        /**
         * Enable or disable international character support.
         *
         * Default: true
         */
        diacritics?: boolean | undefined;

        /**
         * Allows the user to create a new items that aren't in the list of options.
         * This option can be any of the following: "true", "false" (disabled), or a function that accepts two
         * arguments: "input" and "callback". The callback should be invoked with the final data for the option.
         *
         * Default: false
         */
        create?: any;

        /**
         * If true, when user exits the field (clicks outside of input or presses ESC) new option is created and
         * selected (if `create`-option is enabled).
         *
         * Default: false
         */
        createOnBlur?: boolean | undefined;

        /**
         * Specifies a RegExp or String containing a regular expression that the current search filter must match to
         * be allowed to be created. May also be a predicate function that takes the filter text and returns whether
         * it is allowed.
         *
         * Default: null
         */
        createFilter?: any;

        /**
         * Toggles match highlighting within the dropdown menu.
         *
         * Default: true
         */
        highlight?: boolean | undefined;

        /**
         * If false, items created by the user will not show up as available options once they are unselected.
         *
         * Default: true
         */
        persist?: boolean | undefined;

        /**
         * Show the dropdown immediately when the control receives focus.
         *
         * Default: true
         */
        openOnFocus?: boolean | undefined;

        /**
         * The max number of items to render at once in the dropdown list of options.
         *
         * Default: 1000
         */
        maxOptions?: number | undefined;

        /**
         * The max number of items the user can select.
         *
         * Default: Infinity
         */
        maxItems?: number | undefined;

        /**
         * If true, the items that are currently selected will not be shown in the dropdown list of available options.
         *
         * Default: false
         */
        hideSelected?: boolean | undefined;

        /**
         * If true, the dropdown will be closed after a selection is made.
         *
         * Default: false
         */
        closeAfterSelect?: boolean | undefined;

        /**
         * If true, Selectize will treat any options with a "" value like normal. This defaults to false to
         * accomodate the common <select> practice of having the first empty option act as a placeholder.
         *
         * Default: false
         */
        allowEmptyOption?: boolean | undefined;

        /**
         * The animation duration (in milliseconds) of the scroll animation triggered when going [up] and [down] in
         * the options dropdown.
         *
         * Default: 60
         */
        scrollDuration?: number | undefined;

        /**
         * The number of milliseconds to wait before requesting options from the server or null.
         * If null, throttling is disabled.
         *
         * Default: 300
         */
        loadThrottle?: number | undefined;

        /**
         * If true, the "load" function will be called upon control initialization (with an empty search).
         * Alternatively it can be set to "focus" to call the "load" function when control receives focus.
         *
         * Default: false
         */
        preload?: boolean | "focus" | undefined;

        /**
         * The element the dropdown menu is appended to. This should be "body" or null.
         * If null, the dropdown will be appended as a child of the selectize control.
         *
         * Default: null
         */
        dropdownParent?: string | undefined;

        /**
         * Sets if the "Add..." option should be the default selection in the dropdown.
         *
         * Default: false
         */
        addPrecedence?: boolean | undefined;

        /**
         * If true, the tab key will choose the currently selected item.
         *
         * Default: false
         */
        selectOnTab?: boolean | undefined;

        /**
         * Plugins to use
         *
         * Default: null
         */
        plugins?: string[] | IPluginOption[] | { [name: string]: any } | undefined;

        // Data / Searching
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Options available to select; array of objects. If your element is <select> with <option>s specified this
         * property gets populated accordingly. Setting this property is convenient if you have your data as an
         * array and want to automatically generate the <option>s.
         *
         * Default: []
         */
        options?: U[] | undefined;

        /**
         * The <option> attribute from which to read JSON data about the option.
         *
         * Default: "data-data"
         */
        dataAttr?: string | undefined;

        /**
         * The name of the property to use as the "value" when an item is selected.
         *
         * Default: "value"
         */
        valueField?: string | undefined;

        /**
         * Option groups that options will be bucketed into.
         * If your element is a <select> with <optgroup>s this property gets populated automatically.
         * Make sure each object in the array has a property named whatever "optgroupValueField" is set to.
         */
        optgroups?: U[] | undefined;

        /**
         * The name of the option group property that serves as its unique identifier.
         *
         * Default: "value"
         */
        optgroupValueField?: string | undefined;

        /**
         * The name of the property to render as an option / item label (not needed when custom rendering
         * functions are defined).
         *
         * Default: "text"
         */
        labelField?: string | undefined;

        /**
         * The name of the property to render as an option group label (not needed when custom rendering
         * functions are defined).
         *
         * Default: "label"
         */
        optgroupLabelField?: string | undefined;

        /**
         * The name of the property to group items by.
         *
         * Default: "optgroup"
         */
        optgroupField?: string | undefined;

        /**
         * The name of the property to disabled option and optgroup.
         *
         * Default: 'disabled'
         */
        disabledField?: string | undefined;

        /**
         * A single field or an array of fields to sort by. Each item in the array should be an object containing at
         * least a "field" property. Optionally, "direction" can be set to "asc" or "desc". The order of the array
         * defines the sort precedence.
         *
         * Unless present, a special "$score" field will be automatically added to the beginning of the sort list.
         * This will make results sorted primarily by match quality (descending).
         *
         * Default: "$order"
         */
        sortField?: string | { field: string; direction?: "asc" | "desc" | undefined }[] | undefined;

        /**
         * An array of property names to analyze when filtering options.
         *
         * Default: ["text"]
         */
        searchField?: string | string[] | undefined;

        /**
         * When searching for multiple terms (separated by a space), this is the operator used. Can be "and" or "or".
         *
         * Default: "and"
         */
        searchConjunction?: string | undefined;

        /**
         * If truthy, Selectize will make all optgroups be in the same order as they were added (by the `$order`
         * property). Otherwise, it will order based on the score of the results in each.
         *
         * Default: false
         */
        lockOptgroupOrder?: boolean | undefined;

        /**
         * An array of optgroup values that indicates the order they should be listed in in the dropdown.
         * If not provided, groups will be ordered by the ranking of the options within them.
         *
         * Default: null
         */
        optgroupOrder?: string[] | undefined;

        /**
         * Copy the original input classes to the Dropdown element.
         *
         * Default: true
         */
        copyClassesToDropdown?: boolean | undefined;

        // Callbacks
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Invoked when new options should be loaded from the server.
         */
        load?(query: string, callback: Function): any;

        /**
         * Overrides the scoring function used to sort available options. The provided function should return a
         * function that returns a number greater than or equal to zero to represent the "score" of an item
         * (the function's first argument). If 0, the option is declared not a match.
         */
        score?(search: ISearch): (item: any) => number;

        /**
         * Invoked once the control is completely initialized.
         */
        onInitialize?(): any;

        /**
         * Invoked when the control gains focus.
         */
        onFocus?(): any;

        /**
         * Invoked when the control loses focus.
         */
        onBlur?(): any;

        /**
         * Invoked when the value of the control changes.
         *
         * If single select, value is of type T.
         * If multi select, value is of type T[].
         */
        onChange?(value: any): any;

        /**
         * Invoked when an item is selected.
         */
        onItemAdd?(value: T, item: JQuery): any;

        /**
         * Invoked when an item is deselected.
         */
        onItemRemove?(value: T): any;

        /**
         * Invoked when the control is manually cleared via the clear() method.
         */
        onClear?(): any;

        /**
         * Invoked when the user attempts to delete the current selection.
         */
        onDelete?(values: T[]): any;

        /**
         * Invoked when a new option is added to the available options list.
         */
        onOptionAdd?(value: T, data: U): any;

        /**
         * Invoked when an option is removed from the available options.
         */
        onOptionRemove?(value: T): any;

        /**
         * Invoked when the dropdown opens.
         */
        onDropdownOpen?(dropdown: JQuery): any;

        /**
         * Invoked when the dropdown closes.
         */
        onDropdownClose?(dropdown: JQuery): any;

        /**
         * Invoked when the user types while filtering options.
         */
        onType?(srt: string): any;

        /**
         * Invoked when new options have been loaded and added to the control (via the "load" option or "load" API method).
         */
        onLoad?(data: U[]): any;

        // Rendering
        // ------------------------------------------------------------------------------------------------------------

        render?: ICustomRenderers<U> | undefined;
    }

    /**
     * Custom rendering functions. Each function should accept two arguments: "data" and "escape" and return
     * HTML (string) with a single root element. The "escape" argument is a function that takes a string and
     * escapes all special HTML characters. This is very important to use to prevent XSS vulnerabilities.
     */
    interface ICustomRenderers<U> {
        // An option in the dropdown list of available options.
        option?(data: U, escape: (input: string) => string): string;

        // An item the user has selected.
        item?(data: U, escape: (input: string) => string): string;

        // The "create new" option at the bottom of the dropdown. The data contains one property: "input"
        // (which is what the user has typed).
        option_create?(data: U, escape: (input: string) => string): string;

        // The header of an option group.
        optgroup_header?(data: U, escape: (input: string) => string): string;

        // The wrapper for an optgroup. The "html" property in the data will be the raw html of the optgroup's header
        // and options.
        optgroup?(data: U, escape: (input: string) => string): string;
    }

    // see https://github.com/brianreavis/selectize.js/blob/master/docs/api.md
    interface IApi<T, U> {
        /**
         * An array of selected values.
         */
        items: T[];

        /**
         * An object containing the entire pool of options. The object is keyed by each object's value.
         */
        options: { [value: string]: U };

        // Dropdown Options
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Adds an available option. If it already exists, nothing will happen.
         * Note: this does not refresh the options list dropdown (use refreshOptions() for that).
         */
        addOption(data: U): void;

        /**
         * Updates an option available for selection. If it is visible in the selected items or options dropdown,
         * it will be re-rendered automatically.
         */
        updateOption(value: T, data: U): void;

        /**
         * Removes the option identified by the given value.
         */
        removeOption(value: T): void;

        /**
         * Removes all options from the control.
         */
        clearOptions(): void;

        /**
         * Retrieves the jQuery element for the option identified by the given value.
         */
        getOption(value: T): JQuery;

        /**
         * Retrieves the jQuery element for the previous or next option, relative to the currently highlighted option.
         * The "direction" argument should be 1 for "next" or -1 for "previous".
         */
        getAdjacentOption(value: T, direction: number): void;

        /**
         * Refreshes the list of available options shown in the autocomplete dropdown menu.
         */
        refreshOptions(triggerDropdown: boolean): void;

        // Selected Items
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Resets / clears all selected items from the control.
         */
        clear(silent?: boolean): void;

        /**
         * Returns the jQuery element of the item matching the given value.
         */
        getItem(value: T): JQuery;

        /**
         * "Selects" an item. Adds it to the list at the current caret position.
         */
        addItem(value: T, silent?: boolean): void;

        /**
         * Removes the selected item matching the provided value.
         */
        removeItem(value: T, silent?: boolean): void;

        /**
         * Invokes the "create" method provided in the selectize options that should provide the data for the
         * new item, given the user input. Once this completes, it will be added to the item list.
         */
        createItem(value: T, triggerDropdown?: boolean, callback?: (data?: any) => void): void;

        /**
         * Re-renders the selected item lists.
         */
        refreshItems(): void;

        // Optgroups
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Registers a new optgroup for options to be bucketed into.
         * The "id" argument refers to a value of the property in option identified by the "optgroupField" setting.
         */
        addOptionGroup(id: string, data: U): void;

        // Events
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Adds an event listener.
         */
        on(eventName: string, handler: Function): void;

        /**
         * Removes an event listener. If no handler is provided, all event listeners are removed.
         */
        off(eventName: string, handler?: Function): void;

        /**
         * Triggers event listeners.
         */
        trigger(eventName: string, ...args: any[]): void;

        // Dropdown Actions
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Shows the autocomplete dropdown containing the available options.
         */
        open(): void;

        /**
         * Closes the autocomplete dropdown menu.
         */
        close(): void;

        /**
         * Calculates and applies the appropriate position of the dropdown.
         */
        positionDropdown(): void;

        // Other
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Destroys the control and unbinds event listeners so that it can be garbage collected.
         */
        destroy(): void;

        /**
         * Loads options by invoking the the provided function. The function should accept one argument (callback)
         * and invoke the callback with the results once they are available.
         */
        load(callback: (results: any) => any): void;

        /**
         * Brings the control into focus.
         */
        focus(): void;

        /**
         * Forces the control out of focus.
         */
        blur(): void;

        /**
         * Disables user input on the control (note: the control can still receive focus).
         */
        lock(): void;

        /**
         * Re-enables user input on the control.
         */
        unlock(): void;

        /**
         * Disables user input on the control completely. While disabled, it cannot receive focus.
         */
        disable(): void;

        /**
         * Enables the control so that it can respond to focus and user input.
         */
        enable(): void;

        /**
         * Returns the value of the control. If multiple items can be selected (e.g. <select multiple>), this
         * returns an array. If only one item can be selected, this returns a string.
         */
        getValue(): any;

        /**
         * Resets the selected items to the given value(s).
         */
        setValue(value: T, silent?: boolean): void;
        setValue(value: T[], silent?: boolean): void;

        /**
         * Moves the caret to the specified position ("index" being the index in the list of selected items).
         */
        setCaret(index: number): void;

        /**
         * Returns whether or not the user can select more items.
         */
        isFull(): boolean;

        /**
         * Clears the render cache. Takes an optional template argument (e.g. "option", "item") to clear only that cache.
         */
        clearCache(template?: string): void;

        /**
         * When the `settings.placeholder` value is changed, the new placeholder will be displayed.
         */
        updatePlaceholder(): void;
    }

    interface ISearchToken {
        regex: RegExp;
        string: string;
    }

    interface ISearchResult {
        id: string;
        score: number;
    }

    interface ISearch {
        /**
         * Original search options.
         */
        options: any;

        /**
         * The raw user input
         */
        query: string;

        /**
         * An array containing parsed search tokens. A token is an object containing two properties: "string" and "regex".
         */
        tokens: ISearchToken[];

        /**
         * The total number of results.
         */
        total: number;

        /**
         * A list of matched results. Each result is an object containing two properties: "score" and "id".
         */
        items: ISearchResult[];
    }

    // see https://github.com/selectize/selectize.js/blob/master/docs/plugins.md
    interface IPluginOption {
        name: string;
        options: any;
    }
}

interface JQuery {
    selectize(options?: Selectize.IOptions<any, any>): JQuery;
}

interface HTMLElement {
    selectize: Selectize.IApi<any, any>;
}
