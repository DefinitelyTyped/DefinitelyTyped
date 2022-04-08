// Type definitions for jQuery UI Timepicker 0.3
// Project: http://fgelinas.com/code/timepicker/
// Definitions by: Anwar Javed <https://github.com/anwarjaved>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

interface TimePickerHour {
    /** first displayed hour */
    starts?: number;
    /** last displayed hour */
    ends?: number;
}

interface TimePickerMinutes {
    /** first displayed minute */
    starts?: number;
    /** last displayed minute */
    ends?: number;
    /** interval of displayed minutes */
    interval?: number;
}

interface TimePickerOptions {
    /** 'focus' for popup on focus, */
    showOn?: string;
    
    /**
     * 'button' element that will trigger the timepicker.
     *
     * "button" for trigger button, or "both" for either (not yet implemented).
     */
    button?: string;

    // Localization

    /** Define the locale text for "Hours" */
    hourText?: string;

    /** Define the locale text for "Minute" */
    minuteText?: string;

    /** Define the locale text for periods. */
    amPmText?: [string, string];

    /** Name of jQuery animation for popup */
    showAnim?: string;
    /** Options for enhanced animations */
    showOptions?: any;
    /** Display text following the input box, e.g. showing the format */
    appendText?: string;

    /** Define a callback function executed before the timepicker is shown */
    beforeShow?: () => any;
    /** Define a callback function when a hour / minutes is selected */
    onSelect?: (timeText: string, inst: any) => any;
    /** Define a callback function when the timepicker is closed */
    onClose?: (timeText: string, inst: any) => any;

    /** The character to use to separate hours and minutes. */
    timeSeparator?: string;
    /** The character to use to separate the time from the time period. */
    periodSeparator?: string;
    /** Define whether or not to show AM/PM with selected time */
    showPeriod?: boolean;
    /** Show the AM/PM labels on the left of the time picker */
    showPeriodLabels?: boolean;
    /** Define whether or not to show a leading zero for hours < 10. [true/false] */
    showLeadingZero?: boolean;
    /** Define whether or not to show a leading zero for minutes < 10. */
    showMinutesLeadingZero?: boolean;
    /** Selector for an alternate field to store selected time into */
    altField?: string;
    /**
     * Used as default time when input field is empty or for inline timePicker
     * (set to 'now' for the current time, '' for no highlighted time)
     **/
    defaultTime?: string;
    /**
     * Position of the dialog relative to the input.
     *
     * See the position utility for more info : http://jqueryui.com/demos/position/
     */
    myPosition?: string;
    /**
     * Position of the input element to match
     *
     * Note : if the position utility is not loaded, the timepicker will attach left top to left bottom
     * See the position utility for more info : http://jqueryui.com/demos/position/
     */
    atPosition?: string;

    //NEW: 2011-02-03
    /** callback for enabling / disabling on selectable hours  ex : function(hour) { return true; } */
    onHourShow?: () => any;
    /** callback for enabling / disabling on time selection  ex : function(hour,minute) { return true; } */
    onMinuteShow?: () => any;

    hours?: TimePickerHour;
    minutes?: TimePickerMinutes;

    /** number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2 */
    rows?: number;
    // 2011-08-05 0.2.4
    /** display the hours section of the dialog */
    showHours?: boolean;
    /** display the minute section of the dialog */
    showMinutes?: boolean;
    /** optionally parse inputs of whole hours with minutes omitted */
    optionalMinutes?: boolean;

    // buttons
    /** shows an OK button to confirm the edit */
    showCloseButton?: boolean;

    /** Text for the confirmation button (ok button).*/
    closeButtonText?: string;

    /** Shows the 'now' button */
    showNowButton?: boolean;

    /** Text for the 'now' button.*/
    nowButtonText?: string;

    /** Shows the deselect time button */
    showDeselectButton?: boolean;

    /** Text for the deselect button */
    deselectButtonText?: string;
}


interface JQuery {
    timepicker(): JQuery;
    timepicker(methodName: 'getTime'): string;
    timepicker(methodName: 'getTimeAsDate'): Date;
    timepicker(methodName: 'getHour'): number;
    timepicker(methodName: 'getMinute'): number;
    timepicker(methodName: string): any;
    timepicker(methodName: string, methodParameter: any): any;
    timepicker(optionLiteral: string, optionName: string): any;
    timepicker(options: TimePickerOptions): JQuery;
}
