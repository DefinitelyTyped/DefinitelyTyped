/// <reference types="jquery"/>

interface JQueryTimepickerOptions {
    // Override where the dropdown is appended.
    // Takes either a string to use as a selector, a function that gets passed the clicked input element as argument or a jquery object to use directly.
    // default: "body"
    appendTo?: string | ((clickedElement: JQuery) => JQuery) | JQuery | undefined;

    // A class name to apply to the HTML element that contains the timepicker dropdown.
    // default: null
    className?: string | undefined;

    // Close the timepicker when the window is scrolled. (Replicates <select> behavior.)
    // default: false
    closeOnWindowScroll?: boolean | undefined;

    // Disable selection of certain time ranges.
    // Input is an array of time pairs, like [['3:00am', '4:30am'], ['5:00pm', '8:00pm']].
    // The start of the interval will be disabled but the end won't. default: []
    disableTimeRanges?: string[][] | undefined;

    // Disable typing in the timepicker input box; force users to select from list. More information here.
    // default: false
    disableTextInput?: boolean | undefined;

    // Disable the onscreen keyboard for touch devices.
    // There can be instances where Firefox or Chrome have touch events enabled (such as on Surface tablets but not actually be a touch device.
    // In this case disableTouchKeyboard will prevent the timepicker input field from being focused. More information here.
    // default: false
    disableTouchKeyboard?: boolean | undefined;

    // The time against which showDuration will compute relative times. If this is a function, its result will be used.
    // default: minTime
    durationTime?: string | undefined;

    // Force update the time to step settings as soon as it loses focus.
    // default: false
    forceRoundTime?: boolean | undefined;

    // Language constants used in the timepicker.
    // Can override the defaults by passing an object with one or more of the following properties: decimal, mins, hr, hrs.
    // default: { am: 'am', pm: 'pm', AM: 'AM', PM: 'PM', decimal: '.', mins: 'mins', hr: 'hr', hrs: 'hrs' }
    lang?:
        | {
            am?: string | undefined;
            pm?: string | undefined;
            AM?: string | undefined;
            PM?: string | undefined;
            decimal?: string | undefined;
            mins?: string | undefined;
            hr?: string | undefined;
            hrs?: string | undefined;
        }
        | undefined;

    // Set this to override CSS styling and set the list width to match the input element's width.
    // Set to 1 to match input width, 2 to double input width, .5 to halve input width, etc. Set to null to let CSS determine the list width.
    // default: null (CSS styling)
    listWidth?: number | undefined;

    // The time that should appear last in the dropdown list. Can be used to limit the range of time options.
    // default: 24 hours after minTime
    maxTime?: string | undefined;

    // The time that should appear first in the dropdown list.
    // default: 12:00am
    minTime?: string | undefined;

    // Adds one or more custom options to the top of the dropdown. Can accept several different value types:
    // Boolean (true): Adds a "None" option that results in an empty input value
    // String: Adds an option with a custom label that results in an empty input value
    // Object: Similar to string, but allows customizing the element's class name and the resulting input value.
    // Can contain label, value, and className properties. value must be a string type.
    // Array: An array of strings or objects to add multiple non-time options
    // default: false
    noneOption?:
        | boolean
        | string
        | {
            label?: string;
            value?: string;
            className?: string;
        }
        | Array<
            | string
            | {
                label?: string;
                value?: string;
                className?: string;
            }
        >
        | undefined;

    // By default the timepicker dropdown will be aligned to the bottom right of the input element, or aligned to the top left if there isn't enough room below the input.
    // Force alignment with l (left), r (right), c (horizontal center), t (top), and b (bottom). Examples: tl, rb. default: 'l'
    orientation?: string | undefined;

    // Function used to compute rounded times. The function will receive time in seconds and a settings object as arguments.
    // The function should handle a null value for seconds. default: round to nearest step
    roundingFunction?: ((seconds: number | null, settings: JQueryTimepickerOptions) => number) | undefined;

    // If no time value is selected, set the dropdown scroll position to show the time provided, e.g. "09:00".
    // A time string, Date object, or integer (seconds past midnight) is acceptible, as well as the string 'now'.
    // default: null
    scrollDefault?: string | Date | number | undefined;

    // Update the input with the currently highlighted time value when the timepicker loses focus.
    // default: false
    selectOnBlur?: boolean | undefined;

    // Show "24:00" as an option when using 24-hour time format. You must also set timeFormat for this option to work.
    // default: false
    show2400?: boolean | undefined;

    // Shows the relative time for each item in the dropdown. minTime or durationTime must be set.
    // default: false
    showDuration?: boolean | undefined;

    // Display a timepicker dropdown when the input fires a particular event. Set to null or an empty array to disable automatic display. Setting should be an array of strings. default: ['focus']
    showOn?: string[] | null | undefined;

    // DEPRECATED: Display a timepicker dropdown when the input gains focus.
    // default: true
    showOnFocus?: boolean | undefined;

    // The amount of time, in minutes, between each item in the dropdown.
    // Alternately, you can specify a function to generate steps dynamically.
    // The function will receive a count integer (0, 1, 2...) and is expected to return a step integer.
    // default: 30
    step?: number | undefined;

    // When scrolling on the edge of the picker, it prevent parent containers () to scroll. default: false
    stopScrollPropagation?: boolean | undefined;

    // How times should be displayed in the list and input element. Uses PHP's date() formatting syntax.
    // Characters can be escaped with a preceeding double slash (e.g. H\\hi).
    // Alternatively, you can specify a function instead of a string, to use completely custom time formatting.
    // In this case, the format function receives a Date object and is expected to return a formatted time as a string. default: 'g:ia'
    timeFormat?: string | ((date: Date) => string) | undefined;

    // Highlight the nearest corresponding time option as a value is typed into the form input.
    // default: true
    typeaheadHighlight?: boolean | undefined;

    // Convert the input to an HTML <SELECT> control.
    // This is ideal for small screen devices, or if you want to prevent the user from entering arbitrary values.
    // This option is not compatible with the following options: appendTo, closeOnWindowScroll, disableTouchKeyboard, forceRoundTime, scrollDefault, selectOnBlur, typeAheadHighlight.
    // default: false
    useSelect?: boolean | undefined;

    // If a time greater than 24 hours (27:30, for example) is entered, apply modolo 24 to create a valid time.
    // Setting this to false will cause an input of 27:30 to result in a timeFormatError event.
    // default: true
    wrapHours?: boolean | undefined;
}

interface JQuery {
    timepicker(options: JQueryTimepickerOptions): JQuery;

    /** Get the time as an integer, expressed as seconds from 12am. */
    timepicker(methodName: "getSecondsFromMidnight"): number;

    /** Get the time using a Javascript Date object, relative to a Date object (default: today's date). */
    timepicker(methodName: "getTime", date?: Date): Date;

    /** Close the timepicker dropdown. */
    timepicker(methodName: "hide"): void;

    /** Check if the timepicker attached to *a specific input* is visible. Not compatible with the `useSelect` option. */
    timepicker(methodName: "isVisible"): boolean;

    /** Change the settings of an existing timepicker. Calling ```option``` on a visible timepicker will cause the picker to be hidden. */
    timepicker(methodName: "option", options: JQueryTimepickerOptions): void;

    /** Unbind an existing timepicker element. */
    timepicker(methodName: "remove"): void; // tslint:disable-line:unified-signatures

    /** Set the time using a Javascript Date object. */
    timepicker(methodName: "setTime", date: Date): void;

    /** Display the timepicker dropdown. */
    timepicker(methodName: "show"): void; // tslint:disable-line:unified-signatures
}
