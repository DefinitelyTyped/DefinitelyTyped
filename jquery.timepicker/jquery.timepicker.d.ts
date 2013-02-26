// Type definitions for jQuery UI Timepicker 0.3
// Project: http://fgelinas.com/code/timepicker/
// Definitions by: https://github.com/anwarjaved
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>

interface TimePickerHour {
    starts?: number;                   // first displayed hour
    ends?: number;                     // last displayed hour
}

interface TimePickerMinutes {
    starts?: number;                  // first displayed minute
    ends?: number;                  // last displayed minute
    interval?: number;                 // interval of displayed minutes
}

interface TimePickerOptions {
    showOn?: string;   // 'focus' for popup on focus,
    // 'button' for trigger button, or 'both' for either (not yet implemented)
    button?: string;                   // 'button' element that will trigger the timepicker
    showAnim?: string;             // Name of jQuery animation for popup
    showOptions?: any;                // Options for enhanced animations
    appendText?: string;               // Display text following the input box, e.g. showing the format

    beforeShow?: () => any;               // Define a callback function executed before the timepicker is shown
    onSelect?: () => any;               // Define a callback function when a hour / minutes is selected
    onClose?: () => any;                 // Define a callback function when the timepicker is closed

    timeSeparator?: string;               // The character to use to separate hours and minutes.
    periodSeparator?: string;           // The character to use to separate the time from the time period.
    showPeriod?: bool;                 // Define whether or not to show AM/PM with selected time
    showPeriodLabels?: bool;        // Show the AM/PM labels on the left of the time picker
    showLeadingZero?: bool;            // Define whether or not to show a leading zero for hours < 10. [true/false]
    showMinutesLeadingZero?: bool;      // Define whether or not to show a leading zero for minutes < 10.
    altField?: string;                     // Selector for an alternate field to store selected time into
    defaultTime?: string;              // Used as default time when input field is empty or for inline timePicker
    // (set to 'now' for the current time, '' for no highlighted time)
    myPosition?: string;           // Position of the dialog relative to the input.
    // see the position utility for more info : http://jqueryui.com/demos/position/
    atPosition?: string;       // Position of the input element to match
    // Note : if the position utility is not loaded, the timepicker will attach left top to left bottom
    //NEW: 2011-02-03
    onHourShow?: () => any;   		    // callback for enabling / disabling on selectable hours  ex : function(hour) { return true; }
    onMinuteShow?: () => any;                // callback for enabling / disabling on time selection  ex : function(hour,minute) { return true; }

    hours?: TimePickerHour;
    minutes?: TimePickerMinutes;
    rows?: number;                        // number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2
    // 2011-08-05 0.2.4
    showHours?: bool;                // display the hours section of the dialog
    showMinutes?: bool;              // display the minute section of the dialog
    optionalMinutes?: bool;        // optionally parse inputs of whole hours with minutes omitted

    // buttons
    showCloseButton?: bool;       // shows an OK button to confirm the edit
    showNowButton?: bool;          // Shows the 'now' button
    showDeselectButton?: bool;       // Shows the deselect time button
}


interface JQuery {
    timepicker(options?: TimePickerOptions): JQuery;
}
