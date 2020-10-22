// Type definitions for jQuery-timeentry.js 2.0.1
// Project: https://github.com/kbwood/timeentry
// Definitions by: Mark Nadig <https://github.com/marknadig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface ITimeEntryRegionalOptions {
    /**
     * Indicate whether to use 12-hour (false) or 24-hour (true) time. This is one of the regional settings fields.
     *
     * default: False
     */
    show24Hours?: boolean;
    /**
     * The separator between time portions. This is one of the regional settings fields.
     *
     * default: ':'
     */
    separator?: string;
    /**
     * The text that separates the time from the AM and PM indicators. This is one of the regional settings fields.
     *
     * default: ''
     */
    ampmPrefix?: string;
    /**
     * The AM and PM display text. This is one of the regional settings fields.
     *
     * default: ['AM','PM']
     */
    ampmNames?: string[];
    /**
     * The tooltip text for the spinner buttons. This is one of the regional settings fields.
     *
     * default: ['Now', 'Previous field', 'Next field', 'Increment', 'Decrement']
     */
    spinnerTexts?: string[];
}

interface ITimeEntryOptions extends ITimeEntryRegionalOptions {
    /**
     * Indicate whether or not the seconds part of the time should be displayed.
     *
     * default: False
     */
    showSeconds?: boolean;
    /**
     * Indicate whether to restrict hours to just those in one day (false) or to allow for any value for hours (true).
     *
     * default: false
     */
    unlimitedHours?: boolean;
    /**
     * Add content to display after each time field. This may contain HTML markup.
     *
     * default: ''
     */
    appendText?: string;
    /**
     * The increment/decrement values for each of the time portions - hours, minutes, and seconds.
     * Use this to constrain the portions, e.g. [1, 15, 0] restricts the times to quarter hours.
     *
     * default: [1,1,1]
     */
    timeSteps?: number[];
    /**
     * The number of the portion of the time field to highlight initially.
     * Use 0 for hours, 1 for minutes, etc., or null for the user selection.
     *
     * default: null
     */
    initialField?: number;
    /**
     * Set to true to allow direct entry of a time from the keyboard without needing to type separators,
     * i.e. the field moves on after two digits.
     *
     * default: false
     */
    noSeparatorEntry?: boolean;
    /**
     * true to have the tab key exit this field and move to the next one, or false to have the tab key step
     * through the date subfields.
     *
     * default: false
     */
    tabToExit?: boolean;
    /**
     * Set to true to use the mouse wheel for increment/decrement if possible, or false to never use it.
     *
     * default: true
     */
    useMouseWheel?: boolean;
    /**
     * The default time to show when no other value has been entered. This may be a Date object
     * (but the year/month/day values are ignored), a string in the current time format, a numeric
     * value as seconds offset from now, or a string value indicating a number and units, e.g. '+2h'.
     * In the latter case, use 'h' for hours, 'm' for minutes, or 's' for seconds. Letters may be upper
     * or lower case. Multiple offsets may be combined into one setting, e.g. '-2h -20m'. Prefix with '!'
     * to prevent a wrap around into another day. Leave as null to default to the current time.
     *
     * default: null
     */
    defaultTime?: Date | number | string;
    /**
     * The minimum time that may be selected, or null for no limit. See defaultTime for a description
     * of the possible formats. Use an array of number for hours, minutes, seconds in conjunction with unlimitedHours.
     *
     * default: null
     */
    minTime?: Date | number | number[] | string;
    /**
     * The maximum time that may be selected, or null for no limit. See defaultTime for a description of the possible
     * formats. Use an array of number for hours, minutes, seconds in conjunction with unlimitedHours.
     *
     * Note that the maxTime may be set to less than the minTime in which case the entered time is restricted to
     * the period between the minimum and the maximum on the "next day".
     *
     * default: null
     */
    maxTime?: Date | number | number[] | string;
    /**
     * The URL for the spinner images to use, or '' for no spinner. The file must contain seven images horizontally
     * for the normal view, then for each "button" pressed (now, previous, next, increment, and decrement), and,
     * finally, the disabled view.
     *
     * default: 'spinnerDefault.png'
     */
    spinnerImage?: string;
    /**
     * The dimensions of the spinner image for determining which "button" was clicked. The first two values are the
     * width and height of the individual images, the third is the size of the central button for setting the current
     * time, or 0 for no central button.
     *
     * default: [20, 20, 8]
     */
    spinnerSize?: number[];
    /**
     * The URL for an expanded spinner image to use, or '' for no expansion. The layout is the same as for
     * spinnerImage but should be a larger size. The expanded spinner appears when the user hovers over the
     * original spinner and disappears when they move off it.
     *
     * default: ''
     */
    spinnerBigImage?: string;
    /**
     * The dimensions of the expanded spinner image for determining which "button" was clicked. The first two values
     * are the width and height of the individual images, the third is the size of the central button for setting the
     * current time, or 0 for no central button.
     *
     * default: [40, 40, 16]
     */
    spinnerBigSize?: number[];
    /**
     * Set to true to have only the increment and decrement buttons on the spinner, or false for all the buttons.
     *
     * default: false
     */
    spinnerIncDecOnly?: boolean;
    /**
     * The times in milliseconds for the auto-repeat feature on the increment and decrement spinner buttons.
     * The first value is the initial delay and the second one is the subsequent delay. Hold the mouse button down
     * on these spinner buttons to trigger this feature. Use [0, 0] to disable the auto-repeat.
     *
     * default: [500, 250]
     */
    spinnerRepeat?: number[];
    /**
     * A function that accepts an input field and returns a settings object containing new settings for the time
     * entry for this field. For example, you can use it to set up a time range wherein both fields restrict the
     * possible values of the other field. this refers to the input field as well. Leave as null for no per-field
     * customisation.
     *
     * default: null
     */
    beforeShow?: Function;
    /**
     * A function that accepts the old and new times, and minimum and maximum times, and returns an updated time.
     * This refers to the associated input field. This call is made just before the time is updated into the field
     * allowing for additional restrictions to be applied. Leave as null for no additional restrictions.
     *
     * default: null
     */
    beforeSetTime?: Function;
}

interface ITimeEntry {
    /**
     * initialize TimeEntry plugin
     */
    (configOrFnName?: ITimeEntryOptions | string, nameOrOption?: any, value?: any): any; // functions accessed with string key :/
}

interface ITimeEntryLocales {
    [index: string]: ITimeEntryRegionalOptions;
}

interface ITimeEntryStatic {
    regionalOptions: ITimeEntryLocales;
    setDefaults(settings: ITimeEntryOptions): void;
}

interface JQuery {
    /**
     * initialize TimeEntry plugin
     */
    timeEntry: ITimeEntry;
}

interface JQueryStatic {
    timeEntry: ITimeEntryStatic;
}
