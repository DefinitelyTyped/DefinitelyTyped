/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

interface DateTimePickerOptions extends JQueryUI.DatepickerOptions {
    // Control options
    showButtonPanel?: boolean | undefined; // Default: true - Whether to show the button panel at the bottom.This is generally needed.
    timeOnly?: boolean | undefined; // Default: false - Hide the datepicker and only provide a time interface.
    onSelect?: (() => any) | undefined; // Default: null - Function to be called when a date is chosen or time has changed(parameters: datetimeText, datepickerInstance).
    alwaysSetTime?: boolean | undefined; // Default: true - Always have a time set internally, even before user has chosen one.
    separator?: string | undefined; // Default: " " - When formatting the time this string is placed between the formatted date and formatted time.
    pickerTimeFormat?: string | undefined; // Default: (timeFormat option) - How to format the time displayed within the timepicker.
    pickerTimeSuffix?: string | undefined; // Default: (timeSuffix option) - String to place after the formatted time within the timepicker.
    showTimepicker?: boolean | undefined; // Default: true - Whether to show the timepicker within the datepicker.
    addSliderAccess?: boolean | undefined; // Default: false - Adds the sliderAccess plugin to sliders within timepicker
    sliderAccessArgs?: any; // Default: null - Object to pass to sliderAccess when used.
    defaultValue?: string | undefined; // Default: null - String of the default time value placed in the input on focus when the input is empty.
    minDateTime?: Date | undefined; // Default: null - Date object of the minimum datetime allowed.Also available as minDate.
    maxDateTime?: Date | undefined; // Default: null - Date object of the maximum datetime allowed.Also Available as maxDate.
    parse?: string | undefined; // Default: 'strict' - How to parse the time string. Two methods are provided: 'strict' which must match the timeFormat exactly, and 'loose' which uses javascript's new Date(timeString) to guess the time. You may also pass in a function(timeFormat, timeString, options) to handle the parsing yourself, returning a simple object:

    // Alt field options
    altFieldTimeOnly?: boolean | undefined; // Default: true - When altField is used from datepicker altField will only receive the formatted time and the original field only receives date.
    altSeparator?: string | undefined; // Default: (separator option) - String placed between formatted date and formatted time in the altField.
    altTimeSuffix?: string | undefined; // Default: (timeSuffix option) - String always placed after the formatted time in the altField.
    altTimeFormat?: string | undefined; // Default: (timeFormat option) - The time format to use with the altField.

    // Localization options
    currentText?: string | undefined; // Default: "Now", A Localization Setting - Text for the Now button.
    closeText?: string | undefined; // Default: "Done", A Localization Setting - Text for the Close button.
    amNames?: string | undefined; // Default: ['AM', 'A'], A Localization Setting - Array of strings to try and parse against to determine AM.
    pmNames?: string | undefined; // Default: ['PM', 'P'], A Localization Setting - Array of strings to try and parse against to determine PM.
    timeFormat?: string | undefined; // Default: "HH:mm", A Localization Setting - String of format tokens to be replaced with the time.See Formatting.
    timeSuffix?: string | undefined; // Default: "", A Localization Setting - String to place after the formatted time.
    timeOnlyTitle?: string | undefined; // Default: "Choose Time", A Localization Setting - Title of the wigit when using only timepicker.
    timeText?: string | undefined; // Default: "Time", A Localization Setting - Label used within timepicker for the formatted time.
    hourText?: string | undefined; // Default: "Hour", A Localization Setting - Label used to identify the hour slider.
    minuteText?: string | undefined; // Default: "Minute", A Localization Setting - Label used to identify the minute slider.
    secondText?: string | undefined; // Default: "Second", A Localization Setting - Label used to identify the second slider.
    millisecText?: string | undefined; // Default: "Millisecond", A Localization Setting - Label used to identify the millisecond slider.
    microsecText?: string | undefined; // Default: "Microsecond", A Localization Setting - Label used to identify the microsecond slider.
    timezoneText?: string | undefined; // Default: "Timezone", A Localization Setting - Label used to identify the timezone slider.
    isRTL?: boolean | undefined; // Default: false, A Localization Setting - Right to Left support.

    // Timefield options
    controlType?: string | undefined; // Default: 'slider' - Whether to use 'slider' or 'select'.If 'slider' is unavailable through jQueryUI, 'select' will be used.For advanced usage you may pass an object which implements "create", "options", "value" methods to use controls other than sliders or selects.See the _controls property in the source code for more details.
    showHour?: boolean | undefined; // Default: null - Whether to show the hour control. The default of null will use detection from timeFormat.
    showMinute?: boolean | undefined; // Default: null - Whether to show the minute control. The default of null will use detection from timeFormat.
    showSecond?: boolean | undefined; // Default: null - Whether to show the second control. The default of null will use detection from timeFormat.
    showMillisec?: boolean | undefined; // Default: null - Whether to show the millisecond control. The default of null will use detection from timeFormat.
    showMicrosec?: boolean | undefined; // Default: null - Whether to show the microsecond control. The default of null will use detection from timeFormat.
    showTimezone?: boolean | undefined; // Default: null - Whether to show the timezone select.
    showTime?: boolean | undefined; // Default: true - Whether to show the time selected within the datetimepicker.
    stepHour?: number | undefined; // Default: 1 - Hours per step the slider makes.
    stepMinute?: number | undefined; // Default: 1 - Minutes per step the slider makes.
    stepSecond?: number | undefined; // Default: 1 - Seconds per step the slider makes.
    stepMillisec?: number | undefined; // Default: 1 - Milliseconds per step the slider makes.
    stepMicrosec?: number | undefined; // Default: 1 - Microseconds per step the slider makes.
    hour?: number | undefined; // Default: 0 - Initial hour set.
    minute?: number | undefined; // Default: 0 - Initial minute set.
    second?: number | undefined; // Default: 0 - Initial second set.
    millisec?: number | undefined; // Default: 0 - Initial millisecond set.
    microsec?: number | undefined; // Default: 0 - Initial microsecond set. Note: Javascript's native Date object does not natively support microseconds. Timepicker adds ability to simply Date.setMicroseconds(m) and Date.getMicroseconds(). Date comparisons will not acknowledge microseconds. Use this only for display purposes.
    timezone?: number | undefined; // Default: null - Initial timezone set.This is the offset in minutes.If null the browser's local timezone will be used. If you're timezone is "-0400" you would use - 240. For backwards compatibility you may pass "-0400", however the timezone is stored in minutes and more reliable.
    hourMin?: number | undefined; // Default: 0 - The minimum hour allowed for all dates.
    minuteMin?: number | undefined; // Default: 0 - The minimum minute allowed for all dates.
    secondMin?: number | undefined; // Default: 0 - The minimum second allowed for all dates.
    millisecMin?: number | undefined; // Default: 0 - The minimum millisecond allowed for all dates.
    microsecMin?: number | undefined; // Default: 0 - The minimum microsecond allowed for all dates.
    hourMax?: number | undefined; // Default: 23 - The maximum hour allowed for all dates.
    minuteMax?: number | undefined; // Default: 59 - The maximum minute allowed for all dates.
    secondMax?: number | undefined; // Default: 59 - The maximum second allowed for all dates.
    millisecMax?: number | undefined; // Default: 999 - The maximum millisecond allowed for all dates.
    microsecMax?: number | undefined; // Default: 999 - The maximum microsecond allowed for all dates.
    hourGrid?: number | undefined; // Default: 0 - When greater than 0 a label grid will be generated under the slider.This number represents the units (in hours) between labels.
    minuteGrid?: number | undefined; // Default: 0 - When greater than 0 a label grid will be generated under the slider.This number represents the units (in minutes) between labels.
    secondGrid?: number | undefined; // Default: 0 - When greater than 0 a label grid will be genereated under the slider.This number represents the units (in seconds) between labels.
    millisecGrid?: number | undefined; // Default: 0 - When greater than 0 a label grid will be genereated under the slider.This number represents the units (in milliseconds) between labels.
    microsecGrid?: number | undefined; // Default: 0 - When greater than 0 a label grid will be genereated under the slider.This number represents the units (in microseconds) between labels.

    // Timezone options
    timezoneList?: Array<TimezoneOptions> | undefined; // Default: [generated timezones] - An array of timezones used to populate the timezone select.Can be an array of values or an array of objects: { label: "EDT", value: -240 }. The value should be the offset number in minutes.So "-0400" which is the format "-hhmm", would equate to - 240 minutes.
}

interface TimezoneOptions {
    label: string;
    value: number;
}

interface Time {
    hour?: number | undefined;
    minute?: number | undefined;
    second?: number | undefined;
    millisecond?: number | undefined;
    timezone?: string | undefined;
}

interface formatTimeOptions {
    format: string;
    time: Time;
    options?: DateTimePickerOptions | undefined;
}

interface parseTimeOptions {
    format: string;
    time: string;
    options?: DateTimePickerOptions | undefined;
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
    datetimepicker(method: "formatTime", methodParameter: formatTimeOptions): string;
    datetimepicker(method: "parseTime", methodParameter: parseTimeOptions): Time;
    datetimepicker(method: "parseDateTime", methodParameter: parseDateTimeOptions): Date;
}
