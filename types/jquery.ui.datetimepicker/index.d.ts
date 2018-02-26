// Type definitions for jQuery UI DateTimePicker 0.3
// Project: http://trentrichardson.com/examples/timepicker/
// Definitions by: dougajmcdonald <https://github.com/dougajmcdonald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

interface DateTimePickerOptions extends JQueryUI.DatepickerOptions {

    // Control options
    showButtonPanel?: boolean; //Default: true - Whether to show the button panel at the bottom.This is generally needed.
    timeOnly?: boolean; //Default: false - Hide the datepicker and only provide a time interface.
    onSelect?: () => any; //Default: null - Function to be called when a date is chosen or time has changed(parameters: datetimeText, datepickerInstance).
    alwaysSetTime?: boolean; //Default: true - Always have a time set internally, even before user has chosen one.
    separator?: string; //Default: " " - When formatting the time this string is placed between the formatted date and formatted time.
    pickerTimeFormat?: string; //Default: (timeFormat option) - How to format the time displayed within the timepicker.
    pickerTimeSuffix?: string; //Default: (timeSuffix option) - String to place after the formatted time within the timepicker.
    showTimepicker?: boolean; //Default: true - Whether to show the timepicker within the datepicker.
    addSliderAccess?: boolean; //Default: false - Adds the sliderAccess plugin to sliders within timepicker
    sliderAccessArgs?: any; //Default: null - Object to pass to sliderAccess when used.
    defaultValue?: string; //Default: null - String of the default time value placed in the input on focus when the input is empty.
    minDateTime?: Date; //Default: null - Date object of the minimum datetime allowed.Also available as minDate.
    maxDateTime?: Date; //Default: null - Date object of the maximum datetime allowed.Also Available as maxDate.
    parse?: string; //Default: 'strict' - How to parse the time string. Two methods are provided: 'strict' which must match the timeFormat exactly, and 'loose' which uses javascript's new Date(timeString) to guess the time. You may also pass in a function(timeFormat, timeString, options) to handle the parsing yourself, returning a simple object:      

    // Alt field options
    altFieldTimeOnly?: boolean;  //Default: true - When altField is used from datepicker altField will only receive the formatted time and the original field only receives date.
    altSeparator?: string;       //Default: (separator option) - String placed between formatted date and formatted time in the altField.
    altTimeSuffix?: string;      //Default: (timeSuffix option) - String always placed after the formatted time in the altField.
    altTimeFormat?: string;      //Default: (timeFormat option) - The time format to use with the altField.

    // Localization options
    currentText?: string;    //Default: "Now", A Localization Setting - Text for the Now button.
    closeText?: string;      //Default: "Done", A Localization Setting - Text for the Close button.
    amNames?: string;        //Default: ['AM', 'A'], A Localization Setting - Array of strings to try and parse against to determine AM.
    pmNames?: string;        //Default: ['PM', 'P'], A Localization Setting - Array of strings to try and parse against to determine PM.
    timeFormat?: string;     //Default: "HH:mm", A Localization Setting - String of format tokens to be replaced with the time.See Formatting.
    timeSuffix?: string;     //Default: "", A Localization Setting - String to place after the formatted time.
    timeOnlyTitle?: string;  //Default: "Choose Time", A Localization Setting - Title of the wigit when using only timepicker.
    timeText?: string;       //Default: "Time", A Localization Setting - Label used within timepicker for the formatted time.
    hourText?: string;       //Default: "Hour", A Localization Setting - Label used to identify the hour slider.
    minuteText?: string;     //Default: "Minute", A Localization Setting - Label used to identify the minute slider.
    secondText?: string;     //Default: "Second", A Localization Setting - Label used to identify the second slider.
    millisecText?: string;   //Default: "Millisecond", A Localization Setting - Label used to identify the millisecond slider.
    microsecText?: string;   //Default: "Microsecond", A Localization Setting - Label used to identify the microsecond slider.
    timezoneText?: string;   //Default: "Timezone", A Localization Setting - Label used to identify the timezone slider.
    isRTL?: boolean;         //Default: false, A Localization Setting - Right to Left support. 

    // Timefield options
    controlType?: string;    //Default: 'slider' - Whether to use 'slider' or 'select'.If 'slider' is unavailable through jQueryUI, 'select' will be used.For advanced usage you may pass an object which implements "create", "options", "value" methods to use controls other than sliders or selects.See the _controls property in the source code for more details.
    showHour?: boolean;     //Default: null - Whether to show the hour control. The default of null will use detection from timeFormat.
    showMinute?: boolean;   //Default: null - Whether to show the minute control. The default of null will use detection from timeFormat.
    showSecond?: boolean;   //Default: null - Whether to show the second control. The default of null will use detection from timeFormat.
    showMillisec?: boolean; //Default: null - Whether to show the millisecond control. The default of null will use detection from timeFormat.
    showMicrosec?: boolean; //Default: null - Whether to show the microsecond control. The default of null will use detection from timeFormat.
    showTimezone?: boolean; //Default: null - Whether to show the timezone select.
    showTime?: boolean;      //Default: true - Whether to show the time selected within the datetimepicker.
    stepHour?: number;       //Default: 1 - Hours per step the slider makes.
    stepMinute?: number;     //Default: 1 - Minutes per step the slider makes.
    stepSecond?: number;     //Default: 1 - Seconds per step the slider makes.
    stepMillisec?: number;   //Default: 1 - Milliseconds per step the slider makes.
    stepMicrosec?: number;   //Default: 1 - Microseconds per step the slider makes.
    hour?: number;           //Default: 0 - Initial hour set.
    minute?: number;         //Default: 0 - Initial minute set.
    second?: number;         //Default: 0 - Initial second set.
    millisec?: number;       //Default: 0 - Initial millisecond set.
    microsec?: number;       //Default: 0 - Initial microsecond set. Note: Javascript's native Date object does not natively support microseconds. Timepicker adds ability to simply Date.setMicroseconds(m) and Date.getMicroseconds(). Date comparisons will not acknowledge microseconds. Use this only for display purposes.
    timezone?: number;      //Default: null - Initial timezone set.This is the offset in minutes.If null the browser's local timezone will be used. If you're timezone is "-0400" you would use - 240. For backwards compatibility you may pass "-0400", however the timezone is stored in minutes and more reliable.
    hourMin?: number;        //Default: 0 - The minimum hour allowed for all dates.
    minuteMin?: number;      //Default: 0 - The minimum minute allowed for all dates.
    secondMin?: number;      //Default: 0 - The minimum second allowed for all dates.
    millisecMin?: number;    //Default: 0 - The minimum millisecond allowed for all dates.
    microsecMin?: number;    //Default: 0 - The minimum microsecond allowed for all dates.
    hourMax?: number;        //Default: 23 - The maximum hour allowed for all dates.
    minuteMax?: number;      //Default: 59 - The maximum minute allowed for all dates.
    secondMax?: number;      //Default: 59 - The maximum second allowed for all dates.
    millisecMax?: number;    //Default: 999 - The maximum millisecond allowed for all dates.
    microsecMax?: number;    //Default: 999 - The maximum microsecond allowed for all dates.
    hourGrid?: number;       //Default: 0 - When greater than 0 a label grid will be generated under the slider.This number represents the units (in hours) between labels.
    minuteGrid?: number;     //Default: 0 - When greater than 0 a label grid will be generated under the slider.This number represents the units (in minutes) between labels.
    secondGrid?: number;     //Default: 0 - When greater than 0 a label grid will be genereated under the slider.This number represents the units (in seconds) between labels.
    millisecGrid?: number;   //Default: 0 - When greater than 0 a label grid will be genereated under the slider.This number represents the units (in milliseconds) between labels.
    microsecGrid?: number;   //Default: 0 - When greater than 0 a label grid will be genereated under the slider.This number represents the units (in microseconds) between labels.

    // Timezone options
    timezoneList?: Array<TimezoneOptions> //Default: [generated timezones] - An array of timezones used to populate the timezone select.Can be an array of values or an array of objects: { label: "EDT", value: -240 }. The value should be the offset number in minutes.So "-0400" which is the format "-hhmm", would equate to - 240 minutes.
}

interface TimezoneOptions {
    label: string;
    value: number;
}

interface Time {
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    timezone?: string;
}

interface formatTimeOptions {
    format: string;
    time: Time;
    options?: DateTimePickerOptions;
}

interface parseTimeOptions {
    format: string;
    time: string;
    options?: DateTimePickerOptions;
}

interface parseDateTimeOptions {
    dateFormat: string;
    timeFormat: string;
    dateTimeString: string;
    dateSettings: string;
    timeSettings: string;
}

interface JQuery {
    datetimepicker(): JQuery;
    datetimepicker(options?: DateTimePickerOptions): JQuery;            
    datetimepicker(method: string, methodParameter: any): any;
    datetimepicker(method: 'formatTime', methodParameter: formatTimeOptions): string;
    datetimepicker(method: 'parseTime', methodParameter: parseTimeOptions): Time;
    datetimepicker(method: 'parseDateTime', methodParameter: parseDateTimeOptions): Date;
}

