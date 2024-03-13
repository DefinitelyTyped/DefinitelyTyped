/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

interface TimePickerHour {
    /** first displayed hour */
    starts?: number | undefined;
    /** last displayed hour */
    ends?: number | undefined;
}

interface TimePickerMinutes {
    /** first displayed minute */
    starts?: number | undefined;
    /** last displayed minute */
    ends?: number | undefined;
    /** interval of displayed minutes */
    interval?: number | undefined;
}

interface TimePickerOptions {
    /** 'focus' for popup on focus, */
    showOn?: string | undefined;

    /**
     * 'button' element that will trigger the timepicker.
     *
     * "button" for trigger button, or "both" for either (not yet implemented).
     */
    button?: string | undefined;

    // Localization

    /** Define the locale text for "Hours" */
    hourText?: string | undefined;

    /** Define the locale text for "Minute" */
    minuteText?: string | undefined;

    /** Define the locale text for periods. */
    amPmText?: [string, string] | undefined;

    /** Name of jQuery animation for popup */
    showAnim?: string | undefined;
    /** Options for enhanced animations */
    showOptions?: any;
    /** Display text following the input box, e.g. showing the format */
    appendText?: string | undefined;

    /** Define a callback function executed before the timepicker is shown */
    beforeShow?: (() => any) | undefined;
    /** Define a callback function when a hour / minutes is selected */
    onSelect?: ((timeText: string, inst: any) => any) | undefined;
    /** Define a callback function when the timepicker is closed */
    onClose?: ((timeText: string, inst: any) => any) | undefined;

    /** The character to use to separate hours and minutes. */
    timeSeparator?: string | undefined;
    /** The character to use to separate the time from the time period. */
    periodSeparator?: string | undefined;
    /** Define whether or not to show AM/PM with selected time */
    showPeriod?: boolean | undefined;
    /** Show the AM/PM labels on the left of the time picker */
    showPeriodLabels?: boolean | undefined;
    /** Define whether or not to show a leading zero for hours < 10. [true/false] */
    showLeadingZero?: boolean | undefined;
    /** Define whether or not to show a leading zero for minutes < 10. */
    showMinutesLeadingZero?: boolean | undefined;
    /** Selector for an alternate field to store selected time into */
    altField?: string | undefined;
    /**
     * Used as default time when input field is empty or for inline timePicker
     * (set to 'now' for the current time, '' for no highlighted time)
     */
    defaultTime?: string | undefined;
    /**
     * Position of the dialog relative to the input.
     *
     * See the position utility for more info : http://jqueryui.com/demos/position/
     */
    myPosition?: string | undefined;
    /**
     * Position of the input element to match
     *
     * Note : if the position utility is not loaded, the timepicker will attach left top to left bottom
     * See the position utility for more info : http://jqueryui.com/demos/position/
     */
    atPosition?: string | undefined;

    // NEW: 2011-02-03
    /** callback for enabling / disabling on selectable hours  ex : function(hour) { return true; } */
    onHourShow?: (() => any) | undefined;
    /** callback for enabling / disabling on time selection  ex : function(hour,minute) { return true; } */
    onMinuteShow?: (() => any) | undefined;

    hours?: TimePickerHour | undefined;
    minutes?: TimePickerMinutes | undefined;

    /** number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2 */
    rows?: number | undefined;
    // 2011-08-05 0.2.4
    /** display the hours section of the dialog */
    showHours?: boolean | undefined;
    /** display the minute section of the dialog */
    showMinutes?: boolean | undefined;
    /** optionally parse inputs of whole hours with minutes omitted */
    optionalMinutes?: boolean | undefined;

    // buttons
    /** shows an OK button to confirm the edit */
    showCloseButton?: boolean | undefined;

    /** Text for the confirmation button (ok button).*/
    closeButtonText?: string | undefined;

    /** Shows the 'now' button */
    showNowButton?: boolean | undefined;

    /** Text for the 'now' button.*/
    nowButtonText?: string | undefined;

    /** Shows the deselect time button */
    showDeselectButton?: boolean | undefined;

    /** Text for the deselect button */
    deselectButtonText?: string | undefined;
}

interface JQuery {
    timepicker(): JQuery;
    timepicker(methodName: "getTime"): string;
    timepicker(methodName: "getTimeAsDate"): Date;
    timepicker(methodName: "getHour"): number;
    timepicker(methodName: "getMinute"): number;
    timepicker(methodName: string): any;
    timepicker(methodName: string, methodParameter: any): any;
    timepicker(optionLiteral: string, optionName: string): any;
    timepicker(options: TimePickerOptions): JQuery;
}
