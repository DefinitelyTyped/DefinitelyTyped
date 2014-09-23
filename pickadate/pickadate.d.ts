// Type definitions for pickadate.js 3.5.4
// Project: https://github.com/amsul/pickadate.js
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface PickadateApi {
    /**
     * Clear the value in the picker's input element.
     */
    clear(): PickadateApi;

    /**
     * Close the picker.
     *
     * @param keepFocus whether to retain focus on the input element (default: false)
     */
    close(keepFocus?: boolean): PickadateApi;

    /**
     * Get the properties, objects, and states of the picker.
     *
     * @param field one of [ "value", "select", "highlight", "view", "min", "max", "open", "start", "id", "disable", "enable" ]
     * @param format string formatter (available for certain fields)
     */
    get(field: string, format?: string): any;

    /**
     * Unbind callbacks that are bound using the `on` method.
     * @param methodName one of [ "open, "close", "render", "start", "stop", "set" ]
     */
    off(methodName: string, ...moreMethodNames: string[]): PickadateApi;

    /**
     * Attach an event handler for the picker. Only "set" events callbacks receive a "context" object.
     *
     * @param methodName event to attach handler to, one of [ "open", "close", "render", "start", "stop", or "set" ]
     * @param callback event handler
     */
    on(methodName: string, callback: (context?: any) => void): PickadateApi;

    /**
     * Open the picker.
     *
     * @param keepFocus whether to focus the input element (default: true)
     */
    open(keepFocus?: boolean): PickadateApi;

    /**
     * Refresh the picker after adding something to the holder.
     * By default, only the “face” of the picker (i.e. the box element), has its contents re-rendered.
     *
     * @param fromRoot whether to render the entire picker from the root up (default: false)
     */
    render(fromRoot?: boolean): PickadateApi;

    /**
     * Set the properties, objects, and states of the picker.
     *
     * @param field one of [ "clear", "select", "highlight", "view", "min", "max", "disable", "enable", "interval" ]
     * @param value the thing you want to set
     */
    set(field: string, value: any, options?: {[key: string]: any}): PickadateApi;
    /**
     * Batch set picker options after initialization.
     */
    set(values: {[field: string]: any}, options?: {[key: string]: any}): PickadateApi;

    /**
     * Rebuild the picker.
     */
    start(): PickadateApi;

    /**
     * Destroy the picker.
     */
    stop(): PickadateApi;

    /**
     * Trigger a picker event.
     * @param eventName the event to trigger
     */
    trigger(eventName: string): PickadateApi;

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

interface PickadateOptions {
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

    // Root container selector
    container?: string

    // Events
    onStart?: () => void;
    onRender?: () => void;
    onOpen?: () => void;
    onClose?: () => void;
    onSet?: (context: {[key: string]: any}) => void;
    onStop?: () => void;

    // Classes
    klass?: PickadateKlassOptions;
}

interface PickadateKlassOptions {
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

interface PickatimeOptions {
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

    // Root container selector
    container?: string

    // Events
    onStart?: () => void;
    onRender?: () => void;
    onOpen?: () => void;
    onClose?: () => void;
    onSet?: (context: {[key: string]: any}) => void;
    onStop?: () => void;

    // Classes
    klass?: PickatimeKlassOptions;
}

interface PickatimeKlassOptions {
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

interface JQuery {
    /**
     * Initialize a date picker.
     */
    pickadate(options?: PickadateOptions): any;

    /**
     * Access objects attached to the picker or invoke API methods after initialization.
     * If keyword is "picker", this returns a PickadateApi.
     * @param keyword "picker", an object name, or method name
     * @param arguments any arguments to pass to the method
     */
    pickadate(keyword: string, ...arguments: any[]): any;

    /**
     * Initialize a time picker.
     */
    pickatime(options?: PickatimeOptions): any;

    /**
     * Access objects attached to the picker or invoke API methods after initialization.
     * If keyword is "picker", this returns a PickadateApi.
     * @param keyword "picker", an object name, or method name
     * @param arguments any arguments to pass to the method
     */
    pickatime(keyword: string, ...arguments: any[]): any;
}

