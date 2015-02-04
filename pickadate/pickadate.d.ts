// Type definitions for pickadate.js 3.5.4
// Project: https://github.com/amsul/pickadate.js
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Pickadate {

    export interface Api {
        /**
        * Clear the value in the picker's input element.
        */
        clear(): Pickadate.Api;

        /**
        * Close the picker.
        *
        * @param keepFocus whether to retain focus on the input element (default: false)
        */
        close(keepFocus?: boolean): Pickadate.Api;

        /**
        * Get the properties, objects, and states of the picker.
        *
        * @param field one of [ "value", "select", "highlight", "view", "min", "max", "open", "start", "id", "disable", "enable" ]
        * @param format string formatter (available for certain fields)
        */
        get(field: string, format?: string): any;

        /**
        * Returns the string value of the picker’s input element.
        */
        get(field: "value"): string;

        /**
        * Returns a boolean value of whether the picker is open or not.
        */
        get(field: "open"): boolean;

        /**
        * Returns a boolean value of whether the picker has started or not.
        */
        get(field: "start"): boolean;

        /**
        * Returns a unique string that is the ID of the picker and it’s element. If the element has no ID, it is set to something random.
        */
        get(field: "id"): string;

        /**
        * "enable" and "disable" work together to determine which item objects to disable on the picker.
        *
        * "enable" returns 1 to represent a base enabled state, meaning that specific dates or times are disabled and all others are enabled;
        * or -1 to indicate a base disabled state, meaning that specific dates or times are enabled and all others are disabled.
        */
        get(field: "enable"): number;

        /**
        * If "enable" is 1, returns the collection of dates or times to disable. If "enable" is -1, returns the collection of dates or
        * times to *not* disable.
        */
        get(field: "disable"): any;

        /**
        * Unbind callbacks that are bound using the `on` method.
        * @param methodName one of [ "open, "close", "render", "start", "stop", "set" ]
        */
        off(methodName: string, ...moreMethodNames: string[]): Pickadate.Api;

        /**
        * Attach an event handler for the picker. Only "set" events callbacks receive a "context" object.
        *
        * @param methodName event to attach handler to, one of [ "open", "close", "render", "start", "stop", or "set" ]
        * @param callback event handler
        */
        on(methodName: string, callback: (context?: any) => void): Pickadate.Api;

        /**
        * Open the picker.
        *
        * @param keepFocus whether to focus the input element (default: true)
        */
        open(keepFocus?: boolean): Pickadate.Api;

        /**
        * Refresh the picker after adding something to the holder.
        * By default, only the "face" of the picker (i.e. the box element), has its contents re-rendered.
        *
        * @param fromRoot whether to render the entire picker from the root up (default: false)
        */
        render(fromRoot?: boolean): Pickadate.Api;

        /**
        * Set the properties, objects, and states of the picker.
        *
        * @param field one of [ "clear", "select", "highlight", "view", "min", "max", "disable", "enable", "interval" ]
        * @param value the thing you want to set
        */
        set(field: string, value: any, options?: {[key: string]: any}): Pickadate.Api;
        /**
        * Batch set picker options after initialization.
        */
        set(values: {[field: string]: any}, options?: {[key: string]: any}): Pickadate.Api;

        /**
        * Rebuild the picker.
        */
        start(): Pickadate.Api;

        /**
        * Destroy the picker.
        */
        stop(): Pickadate.Api;

        /**
        * Trigger a picker event.
        * @param eventName the event to trigger
        */
        trigger(eventName: string): Pickadate.Api;

        /**
        * The picker's relative <input> element.
        */
        $node: JQuery;

        /**
        * The picker's relative root holder element.
        */
        $root: JQuery;

        /**
        * The picker's relative hidden element, which is undefined if there's no formatSubmit option.
        * This is meant to be mostly for internal use.
        */
        _hidden: JQuery;
    }

    export interface DateApi extends Api {
        get(field: string, format?: string): any;

        /**
        * Returns the item object or formatted string of the date that is visually selected.
        * Defaults to null when there’s no value.
        */
        get(field: "select"): DateItem;
        get(field: "select", format: string): string;

        /**
        * Returns the item object or formatted string of the date that is visually highlighted.
        * Defaults to "today" when there’s no value.
        */
        get(field: "highlight"): DateItem;
        get(field: "highlight", format: string): string;

        /**
        * Returns the item object or formatted string of the date that determines the current view.
        * Defaults to the first day of the current month when there’s no value.
        */
        get(field: "view"): DateItem;
        get(field: "view", format: string): string;

        /**
        * Returns the item object or formatted string of the date that determines the lower limit.
        * Defaults to a -Infinity item object when it is not explicitly set in the options or through the picker’s API.
        */
        get(field: "min"): DateItem;
        get(field: "min", format: string): string;

        /**
        * Returns the item object or formatted string of the date that determines the upper limit.
        * Defaults to an Infinity item object when it is not explicitly set in the options or through the picker’s API.
        */
        get(field: "max"): DateItem;
        get(field: "max", format: string): string;
    }

    export interface DateItem {
        // The full year.
        year: number;

        // The month with zero-as-index.
        month: number;

        // The date of the month.
        date: number;

        // The day of the week with zero-as-index.
        day: number;

        // The underlying JavaScript Date object.
        obj: Date;

        // The "pick" value used for comparisons.
        pick: number;
    }

    export interface DateOptions {
        // String and translations
        monthsFull?: string[];
        monthsShort?: string[];
        weekdaysFull?: string[];
        weekdaysShort?: string[]
        showMonthsShort?: boolean;
        showWeekdaysFull?: boolean;

        // Button labels (if falsy, the corresponding button is disabled)
        today?: string;
        clear?: string;
        close?: string;

        // Accessibility labels
        labelMonthNext?: string;
        labelMonthPrev?: string;
        labelMonthSelect?: string;
        labelYearSelect?: string;

        // Formats
        format?: string;
        formatSubmit?: string;
        hiddenPrefix?: string;
        hiddenSuffix?: string;
        hiddenName?: string;

        // Editable input
        editable?: boolean;

        // Number of months to show in the month selection dropdown OR a boolean
        selectMonths?: any;
        // Number of years to show in the month selection dropdown OR a boolean
        selectYears?: any;

        // First day of the week
        firstDay?: number

        // Disable dates (elements can be Dates, [YEAR, MONTH, DATE] arrays, or integers of the week)
        disable?: any[];

        // Root container selector (string) or element (JQuery)
        container?: any;

        // Events
        onStart?: () => void;
        onRender?: () => void;
        onOpen?: () => void;
        onClose?: () => void;
        onSet?: (context: {[key: string]: any}) => void;
        onStop?: () => void;

        // Classes
        klass?: DateKlassOptions;
    }

    export interface DateKlassOptions {
        // The element states
        input?: string;
        active?: string;

        // The root picker and states
        picker?: string;
        opened?: string;
        focused?: string;

        // The picker holder
        holder?: string;

        // The picker frame, wrapper, and box
        frame?: string;
        wrap?: string;
        box?: string;

        // The picker header
        header?: string;

        // Month navigation
        navPrev?: string;
        navNext?: string;
        navDisabled?: string;

        // Month & year labels
        month?: string;
        year?: string;

        // Month & year dropdowns
        selectMonth?: string;
        selectYear?: string;

        // Table of dates
        table?: string;

        // Weekday labels
        weekdays?: string;

        // Day states
        day?: string;
        disabled?: string;
        selected?: string;
        highlighted?: string;
        now?: string;
        infocus?: string;
        outfocus?: string;

        // The picker footer
        footer?: string;

        // Today, clear, & close buttons
        buttonClear?: string;
        buttonClose?: string;
        buttonToday?: string
    }

    export interface TimeApi extends Api {
        get(field: string, format?: string): any;

        /**
        * Returns the item object or formatted string of the date that is visually selected.
        * Defaults to null when there’s no value.
        */
        get(field: "select"): TimeItem;
        get(field: "select", format: string): string;

        /**
        * Returns the item object or formatted string of the date that is visually highlighted.
        * Defaults to "now" when there’s no value.
        */
        get(field: "highlight"): TimeItem;
        get(field: "highlight", format: string): string;

        /**
        * Returns the item object or formatted string of the date that determines the current view.
        * Defaults to "now" when there’s no value.
        */
        get(field: "view"): TimeItem;
        get(field: "view", format: string): string;

        /**
        * Returns the item object or formatted string of the date that determines the lower limit.
        * Defaults to a -Infinity item object when it is not explicitly set in the options or through the picker’s API.
        */
        get(field: "min"): TimeItem;
        get(field: "min", format: string): string;

        /**
        * Returns the item object or formatted string of the date that determines the upper limit.
        * Defaults to an Infinity item object when it is not explicitly set in the options or through the picker’s API.
        */
        get(field: "max"): TimeItem;
        get(field: "max", format: string): string;
    }

    export interface TimeItem {
        // Hour of the day from 0 to 23.
        hour: number;

        // The minutes of the hour from 0 to 59 (based on the interval).
        mins: number;

        // The "pick" value used for comparisons.
        pick: number;
    }

    export interface TimeOptions {
        // Translations and clear button
        clear?: string;

        // Formats
        format?: string;
        formatLabel?: string;
        formatSubmit?: string;
        hiddenPrefix?: string;
        hiddenSuffix?: string;

        // Editable input
        editable?: boolean;

        // Time intervals
        interval?: number;

        // Time limits (can be Dates, arrays formatted as [HOUR, MINUTE], integers, or booleans)
        min?: any;
        max?: any;

        // Disable dates (elements can be Dates, [YEAR, MONTH, DATE] arrays, or integers of the week)
        disable?: any[];

        // Root container selector (string) or element (JQuery)
        container?: any;

        // Events
        onStart?: () => void;
        onRender?: () => void;
        onOpen?: () => void;
        onClose?: () => void;
        onSet?: (context: {[key: string]: any}) => void;
        onStop?: () => void;

        // Classes
        klass?: TimeKlassOptions;
    }

    export interface TimeKlassOptions {
        // The element states
        input?: string;
        active?: string;

        // The root picker and states
        picker?: string;
        opened?: string;
        focused?: string;

        // The picker holder
        holder?: string;

        // The picker frame, wrapper, and box
        frame?: string;
        wrap?: string;
        box?: string;

        // List of times
        list?: string;
        listItem?: string;

        // Time states
        disabled?: string;
        selected?: string;
        highlighted?: string;
        viewset?: string;
        now?: string;

        // Clear button
        buttonClear?: string;
    }
}

interface JQuery {
    /**
     * Access the API object after initialization.
     */
    pickadate(keyword: "picker"): Pickadate.DateApi;
    pickadate(objectName: "$node"): JQuery;
    pickadate(objectName: "$root"): JQuery;
    pickadate(objectName: "_hidden"): JQuery;

    /**
     * Invoke API methods after picker initialization.
     * @param methodName
     * @param arguments any arguments to pass to the method
     */
    pickadate(methodName: string, ...arguments: any[]): any;

    /**
     * Initialize a date picker.
     * @returns the original JQuery selection
     */
    pickadate(options?: Pickadate.DateOptions): JQuery;


    pickatime(keyword: "picker"): Pickadate.TimeApi;
    pickatime(objectName: "$node"): JQuery;
    pickatime(objectName: "$root"): JQuery;
    pickatime(objectName: "_hidden"): JQuery;

    /**
     * Invoke API methods after picker initialization.
     * @param methodName
     * @param arguments any arguments to pass to the method
     */
    pickatime(methodName: string, ...arguments: any[]): any;

    /**
     * Initialize a time picker.
     * @returns the original JQuery selection
     */
    pickatime(options?: Pickadate.TimeOptions): JQuery;
}

