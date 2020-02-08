// Type definitions for non-npm package Bootstrap 3 Datepicker 4.17
// Project: http://eonasdan.github.io/bootstrap-datetimepicker
// Definitions by: Katona Péter <https://github.com/katonap>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
// based on the previous version created by Jesica N. Fera <https://github.com/bayitajesi>

/**
 * bootstrap-datetimepicker.js 4.17.45 Copyright (c) 2015 Jonathan Peterson
 * Available via the MIT license.
 * see: http://eonasdan.github.io/bootstrap-datetimepicker or https://github.com/Eonasdan/bootstrap-datetimepicker for details.
 */

/// <reference types="jquery"/>

import * as moment from "moment";

export as namespace BootstrapV3DatetimePicker;

export type InputParser = (input: string | Date | moment.Moment) => moment.Moment;

export interface Datetimepicker {
	/** Clears the datepicker by setting the value to null */
	clear(): void;
	/** Returns the component's model current date, a moment object or null if not set. */
	date(): moment.Moment;
	/**
	 * Takes string, Date, moment, null parameter and sets the components model current moment to it.
	 * Passing a null value unsets the components model current moment.
	 * Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.
	 * Throws:
	 * - TypeError - in case the newDate cannot be parsed
	 *
	 * Emits:
	 * - dp.change - In case newDate is different from current moment
	 */
	date(date: moment.Moment | Date | string | null): void;
	/** Destroys the widget and removes all attached event listeners */
	destroy(): void;
	/**
	 * Disables the input element, the component is attached to, by adding a disabled="true" attribute to it. If the widget was visible before that call it is hidden.
	 * Emits:
	 * - dp.hide - if the widget was visible before that call
	 */
	disable(): void;
	/** Enables the input element, the component is attached to, by removing disabled attribute from it. */
	enable(): void;
	/**
	 * Hides the widget
	 * Emits:
	 * - dp.hide - if the widget was visible before that call
	 */
	hide(): void;
	/**
	 * Returns the components current options object.
	 * Note that the changing the values of the returned object does not change the components actual configuration.
	 */
	options(): DatetimepickerOptions;
	/** Takes an object variable with option key:value properties and configures the component. Use this to update multiple options on the component. */
	options(options: DatetimepickerOptions): void;
	/**
	 * Shows the widget
	 * Emits:
	 * - dp.show - if the widget was hidden before that call
	 * - dp.change - if the widget is opened for the first time and the useCurrent is set to true or to a granularity value and the input element the component is attached to has an empty value
	 */
	show(): void;
	/**
	 * Shows or hides the widget
	 * Emits:
	 * - dp.hide - if the widget is hidden after the toggle call
	 * - dp.show - if the widget is show after the toggle call
	 * - dp.change - if the widget is opened for the first time and the input element is empty and options.useCurrent != false
	 */
	toggle(): void;

	////////////////////////////////////////////////////////////////////////////////////////////////////
	//// Below are the getters/setters for the properties of the 'options(): DatetimepickerOptions' ////
	////////////////////////////////////////////////////////////////////////////////////////////////////

	/** Returns the options.allowInputToggle option. */
	allowInputToggle(): boolean;
	/** If true, the picker will show on textbox focus and icon click when used in a button group */
	allowInputToggle(value: boolean): void;
	/** Returns the current options.calendarWeeks option configuration */
	calendarWeeks(): boolean;
	/** Set if the week numbers will appear to the left on the days view */
	calendarWeeks(value: boolean): void;
	/** Returns the options.collapse option configuration */
	collapse(): boolean;
	/** If set to false the picker will display similar to sideBySide except vertical. */
	collapse(value: boolean): void;
	/**
	 * Returns the options.daysOfWeekDisabled configuration
	 * IMPORTANT! Throws exception if not set explicitly https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1459
	 */
	daysOfWeekDisabled(): number[];
	/**
	 * Takes an [ Number:0 to 6 ] and disallow the user to select weekdays that exist in this array.
	 * This has lower priority over the options.minDate, options.maxDate, options.disabledDates and options.enabledDates configuration settings.
	 * Emits:
	 * - dp.change - if the currently selected moment falls in the values passed on the daysOfWeek parameter.
	 * - dp.error - if the currently selected moment falls in the values passed on the daysOfWeek parameter.
	 */
	daysOfWeekDisabled(days: number[]): void;
	/** Returns the options.dayViewHeaderFormat option. */
	dayViewHeaderFormat(): string;
	/** Used to customize the header of the day view. */
	dayViewHeaderFormat(value: string): void;
	/** Returns a moment with the options.defaultDate option configuration or false if not set */
	defaultDate(): moment.Moment | boolean;
	/**
	 * Will set the picker's inital date.
	 * If a boolean:false value is passed the options.defaultDate parameter is cleared.
	 * Throws:
	 * - TypeError - if the provided date doesn't pass validation, including disabledDates, enabledDates, minDate, maxDate, and daysOfWeekDisabled
	 * - TypeError - if the provided date cannot be parsed by momentjs
	 */
	defaultDate(date: string | Date | moment.Moment | boolean): void;
	/**
	 * Returns the options.disabledDates option.
	 * NOTES: probably should be: disabledDates(): boolean | Array<moment.Moment>; see: DatetimepickerOptions
	 */
	disabledDates(): boolean | any;
	/**
	 * Takes an array of values and disallows the user to select those days.
	 * Setting this takes precedence over options.minDate, options.maxDate configuration.
	 * Also calling this function removes the configuration of options.enabledDates if such exist.
	 * Note: These values are matched with Day granularity.
	 */
	disabledDates(dates: boolean | Array<string | Date | moment.Moment>): void;
	/**
	 * Returns the options.disabledHours option.
	 * NOTES: probably should be: disabledHours(): boolean | number[]; see: DatetimepickerOptions
	 */
	disabledHours(): boolean | any;
	/**
	 * Must be in 24 hour format. Will disallow hour selections (much like disabledTimeIntervals) but will affect all days.
	 * Like en/disabledDates, the en/disabledHours options are mutually exclusive and will reset one of the options back to false.
	 */
	disabledHours(value: boolean | number[]): void;
	/**
	 * Returns the options.disabledTimeIntervals option, or... not exactly
	 * IMPORTANT! Creates an object from the options.disabledTimeIntervals with the keys being numbers, the values being the moment arrays.
	 * eg { "0": [<moment.Moment1>, <moment.Moment2>], "1": [...] }
	 * https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1498
	 */
	disabledTimeIntervals(): boolean | moment.Moment[][];
	/**
	 * Disables time selection between the given moments
	 * eg: [[moment({ h: 0 }), moment({ h: 8 })], [moment({ h: 18 }), moment({ h: 24 })]]
	 */
	disabledTimeIntervals(value: boolean | moment.Moment[][]): void;
	/**
	 * Returns the options.enabledDates option
	 * NOTES: probably should be: enabledDates(): boolean | Array<moment.Moment>; see: DatetimepickerOptions
	 */
	enabledDates(): boolean | any;
	/**
	 * Takes an array of values and allows the user to select only from those days.
	 * Setting this takes precedence over options.minDate, options.maxDate configuration.
	 * Also calling this function removes the configuration of options.disabledDates if such exist.
	 * Note: These values are matched with Day granularity.
	 */
	enabledDates(dates: boolean | Array<string | Date | moment.Moment>): void;
	/**
	 * Returns the options.enabledHours option.
	 * NOTES: probably should be: enabledHours(): boolean | number[]; see: DatetimepickerOptions
	 */
	enabledHours(): boolean | any;
	/**
	 * Must be in 24 hour format. Will allow hour selections (much like enabledTimeIntervals) but will affect all days.
	 * Like en/disabledDates, the en/disabledHours options are mutually exclusive and will reset one of the options back to false.
	 */
	enabledHours(value: boolean | number[]): void;
	/** Returns a boolean or array with the options.extraFormats option configuration */
	extraFormats(): boolean | Array<string | moment.MomentBuiltinFormat>;
	/** Takes an array of valid input moment format options, or boolean:false */
	extraFormats(formats: boolean | Array<string  | moment.MomentBuiltinFormat>): void;
	/** Returns the options.focusOnShow option. */
	focusOnShow(): boolean;
	/** If false, the textbox will not be given focus when the picker is shown */
	focusOnShow(value: boolean): void;
	/** Returns the component's options.format string */
	format(): boolean | string | moment.MomentBuiltinFormat;
	/**
	 * Takes a moment.js format string and sets the components options.format.
	 * This is used for displaying and also for parsing input strings either from the input element the component is attached to or the date() function.
	 * The parameter can also be a boolean:false in which case the format is set to the locale's L LT.
	 * Note: this is also used to determine if the TimePicker sub component will display the hours in 12 or 24 format. (if "a" or "h" exists in the passed string then a 12 hour mode is set)
	 * Throws:
	 * - TypeError - if format is boolean:true
	 */
	format(format: boolean | string | moment.MomentBuiltinFormat): void;
	/** Returns options.icons */
	icons(): Icons;
	/**
	 * Takes an Object of strings.
	 * Throws:
	 * - TypeError - if icons parameter is not an Object
	 */
	icons(icons: Icons): void;
	/** Returns the options.ignoreReadonly option. */
	ignoreReadonly(): boolean;
	/** Set this to true to allow the picker to be used even if the input field is readonly. This will not bypass the disabled property */
	ignoreReadonly(value: boolean): void;
	/** Returns the options.inline option. */
	inline(): boolean;
	/** Used to customize the header of the day view. */
	inline(value: boolean): void;
	/** Returns the options.keepInvalid option. */
	keepInvalid(): boolean;
	/** If true, invalid dates will not be reverted to a previous selection or changed. */
	keepInvalid(value: boolean): void;
	/** Returns a string variable with the currently set options.keyBinds option. */
	keyBinds(): any;
	/**
	 * Allows for several keyBinding functions to be specified for ease of access or accessibility. For defaults see {@link http://eonasdan.github.io/bootstrap-datetimepicker/Options/#keybinds}.
	 */
	keyBinds(value: any): void;
	/** Returns the currently set locale of the options.locale */
	locale(): string;
	/**
	 * Takes a string of any valid moment locale e.g. de for German.
	 * Throws:
	 * - TypeError - if the locale is not loaded via a separate script or moment-with-locale
	 */
	locale(newLocale: string): void;
	/** Returns the currently set moment of the options.maxDate or false if not set */
	maxDate(): moment.Moment | boolean;
	/**
	 * Takes a parameter and disallows the user to select a moment that is after that moment.
	 * If a boolean:false value is passed options.maxDate is cleared and there is no restriction to the maximum moment the user can select.
	 * Note: If the parameter is before the currently selected moment the currently selected moment changes to maxDate
	 * Throws:
	 * - TypeError - if the parameter cannot be parsed using the options.format and options.useStrict configuration settings
	 * - TypeError - if the parameter is before options.minDate
	 *
	 * Emits:
	 * - dp.change - if the new maxDate is after currently selected moment
	 * - dp.error - if the new maxDate is after currently selected moment
	 */
	maxDate(date: moment.Moment | Date | string | boolean): void;
	/** Returns the currently set moment of the options.minDate or false if not set */
	minDate(): moment.Moment | boolean;
	/**
	 * Takes a parameter and disallows the user to select a moment that is before that moment.
	 * If a boolean:false value is passed the options.minDate parameter is cleared and there is no restriction to the miminum moment the user can select.
	 * Note: If the parameter is after the currently selected moment the currently selected moment changes to minDate parameter
	 * Throws:
	 * - TypeError - if the parameter cannot be parsed using the options.format and options.useStrict configuration settings
	 * - TypeError - if the parameter is after options.maxDate
	 *
	 * Emits:
	 * - dp.change - if the new minDate is after currently selected moment
	 * - dp.error - if the new minDate is after currently selected moment
	 */
	minDate(date: moment.Moment | Date | string | boolean): void;
	/** Returns the options.parseInputDate option */
	parseInputDate(): InputParser | undefined;
	/**
	 * Allows custom input formatting For example: the user can enter "yesterday"" or "30 days ago".
	 * {@link http://eonasdan.github.io/bootstrap-datetimepicker/Functions/#parseinputdate}
	 */
	parseInputDate(value: InputParser): void;
	/** Returns the options.showClear option. */
	showClear(): boolean;
	/** Set if the clear date button will appear on the widget */
	showClear(value: boolean): void;
	/** Returns the options.showClose option. */
	showClose(): boolean;
	/** If true, an icon will be displayed on the toolbar that will hide the picker */
	showClose(value: boolean): void;
	/** Returns the options.showTodayButton option. */
	showTodayButton(): boolean;
	/** Set if the Today button will appear on the widget */
	showTodayButton(value: boolean): void;
	/** Returns a boolean of the options.sideBySide. */
	sideBySide(): boolean;
	/** If sideBySide is true and the time picker is used, both components will display side by side instead of collapsing. */
	sideBySide(value: boolean): void;
	/** Returns a number with the options.stepping option configuration */
	stepping(): number;
	/** This will be the amount the up/down arrows move the minute value with a time picker. */
	stepping(step: number): void;
	/** Returns a string of options.timeZone */
	timeZone(): string | null;
	/**
	 * Takes a null or a string of a valid timezone.
	 * Throws:
	 * - TypeError - if tooltips parameter is not a string or null
	 */
	timeZone(timeZone: string | null): void;
	/** Returns the options.toolbarplacement option. */
	toolbarPlacement(): string;
	/**
	 * Changes the placement of the toolbar where the today, clear, component switch icon are located.
	 * See valid values at DatetimepickerOptions.toolbarplacement
	 * Throws:
	 * - TypeError - if the parameter is not a valid value
	 */
	toolbarPlacement(value: string): void;
	/** Returns the options.tooltips option */
	tooltips(): Tooltips;
	/**
	 * Sets the tooltips for icons.
	 * Throws:
	 * - TypeError - if tooltips parameter is not an Object
	 */
	tooltips(value: Tooltips): void;
	/** Returns the options.useCurrent option configuration */
	useCurrent(): boolean | string;
	/**
	 * Takes a boolean or string.
	 * If a boolean true is passed and the components model moment is not set (either through setDate or through a valid value on the input element the component is attached to)
	 * then the first time the user opens the datetimepicker widget the value is initialized to the current moment of the action.
	 * If a false boolean is passed then no initialization happens on the input element.
	 * You can select the granularity on the initialized moment by passing one of the following strings ("year", "month", "day", "hour", "minute") in the variable.
	 * If for example you pass "day" to the useCurrent function and the input field is empty the first time the user opens the datetimepicker widget the input text will be
	 * initialized to the current datetime with day granularity (ie if currentTime = 2014-08-10 13:32:33 the input value will be initialized to 2014-08-10 00:00:00)
	 * Note: If the options.defaultDate is set or the input element the component is attached to has already a value that takes precedence and the functionality of useCurrent is not triggered!
	 */
	useCurrent(value: boolean | string): void;
	/** Returns the options.useStrict */
	useStrict(): boolean;
	/** If useStrict is true, momentjs parsing rules will be stricter when determining if a date is valid or not. */
	useStrict(value: boolean): void;
	/** Returns the options.viewDate option. */
	viewDate(): boolean | moment.Moment;
	/** This will change the viewDate without changing or setting the selected date. */
	viewDate(value: string | Date | moment.Moment | boolean): void;
	/** Returns the options.viewMode. */
	viewMode(): string;
	/**
	 * Takes a string. See valid values at DatetimepickerOptions.viewMode
	 * Throws:
	 * - TypeError - if the parameter is not a string or not a valid value
	 */
	viewMode(value: string): void;
	/** Returns a $(element) variable with the currently set options.widgetParent option. */
	widgetParent(): string | JQuery | null;
	/** Takes a string or $(element) value. */
	widgetParent(widgetParent: string | JQuery | null): void;
	/** Returns the options.widgetPositioning object */
	widgetPositioning(): WidgetPositioningOptions;
	/**
	 * WidgetPositioning defines where the dropdown with the widget will appear relative to the input element the component is attached to.
	 * "auto" is the default value for both horizontal and vertical keys and it tries to automatically place the dropdown in a position that is visible to the user.
	 * Usually you should not override those options unless you have a special need in your layout.
	 */
	widgetPositioning(value: WidgetPositioningOptions): void;

	/**
	 * JQuery plugin function.
	 */
	(options?: DatetimepickerOptions): JQuery;

	/**
	 * Default options that will be used for all instances.
	 * To change: `$.fn.datetimepicker.defaults`
	 */
	defaults: DatetimepickerOptions;
}

export interface DatetimepickerOptions {
	/**
	 * If true, the picker will show on textbox focus and icon click when used in a button group
	 * @default: false
	 */
	allowInputToggle?: boolean;
	/**
	 * Shows the week of the year to the left of first day of the week.
	 * @default: false
	 */
	calendarWeeks?: boolean;
	/**
	 * Using a Bootstraps collapse to switch between date/time pickers.
	 * @default: true
	 */
	collapse?: boolean;
	/**
	 * Disables the section of days of the week, e.g. weekends.
	 * Accepts: array of numbers from 0-6
	 * @default: false
	 */
	daysOfWeekDisabled?: number[] | boolean;
	/**
	 * Changes the heading of the datepicker when in "days" view.
	 * @default: "MMMM YYYY"
	 */
	dayViewHeaderFormat?: string;
	/**
	 * Will cause the date picker to stay open after a blur event.
	 * @default: false
	 */
	debug?: boolean;
	/**
	 * Sets the picker default date/time. Overrides useCurrent
	 * @default: false
	 */
	defaultDate?: boolean | moment.Moment | Date | string;
	/**
	 * Disables selection of dates in the array, e.g. holidays
	 * @default: false
	 * IMPORTANT! The getter returns an Object NOT an Array, with keys being the dates, values being true.
	 * eg disabledDates = ["2010-10-10"]; -> disabledDated will be { "2010-01-01": true }
	 * https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1499
	 */
	disabledDates?: boolean | Array<moment.Moment | Date | string> | any;
	/**
	 * Will allow or disallow hour selections (much like disabledTimeIntervals) but will affect all days
	 * @default: false
	 * IMPORTANT! The getter returns an Object NOT an Array, with keys being the hours, values being true.
	 * eg disabledHours = [0, 1]; -> disabledHours will be { "0": true, "1": true }
	 * https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1499
	 */
	disabledHours?: boolean | number[] | any;
	/**
	 * Disables time selection between the given moments
	 * eg: [[moment({ h: 0 }), moment({ h: 8 })], [moment({ h: 18 }), moment({ h: 24 })]]
	 * @default: false
	 */
	disabledTimeIntervals?: boolean | moment.Moment[][];
	/**
	 * Disables selection of dates NOT in the array, e.g. holidays
	 * @default: false
	 * IMPORTANT! The getter returns an Object NOT an Array, with keys being the dates, values being true.
	 * eg enabledDates = ["2010-10-10"]; -> enabledDated will be { "2010-01-01": true }
	 * https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1499
	 */
	enabledDates?: boolean | Array<moment.Moment | Date | string> | any;
	/**
	 * Will allow or disallow hour selections (much like disabledTimeIntervals) but will affect all days
	 * @default: false
	 * IMPORTANT! The getter returns an Object NOT an Array, with keys being the hours, values being true.
	 * eg enabledHours = [0, 1]; -> enabledHours will be { "0": true, "1": true }
	 * https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1499
	 */
	enabledHours?: boolean | number[];
	/**
	 * Allows for several input formats to be valid. See: https://github.com/Eonasdan/bootstrap-datetimepicker/pull/666
	 * @default: false
	 */
	extraFormats?: boolean | Array<string | moment.MomentBuiltinFormat>;
	/**
	 * If false, the textbox will not be given focus when the picker is shown
	 * @default: true
	 */
	focusOnShow?: boolean;
	/**
	 * See momentjs' docs for valid formats. Format also dictates what components are shown, e.g. MM/dd/YYYY will not display the time picker.
	 * @default: false
	 */
	format?: boolean | string | moment.MomentBuiltinFormat;
	/** Change the default icons for the pickers functions. */
	icons?: Icons;
	/**
	 * Allow date picker show event to fire even when the associated input element has the readonly="readonly"property.
	 * @default: false
	 */
	ignoreReadonly?: boolean;
	/**
	 * Will display the picker inline without the need of a input field. This will also hide borders and shadows.
	 * @default: false
	 */
	inline?: boolean;
	/**
	 * Allows for custom events to fire on keyboard press.
	 * eg: keybinds: {
	 * 		up: (widget) => console.log(widget),
	 * 		"control up": (widget) => console.log(widget)
	 * }
	 * The widget parameter is false, if the datepicker is closed.
	 */
	keyBinds?: { [key: string]: (widget: boolean | JQuery) => void };
	/**
	 * Will cause the date picker to not revert or overwrite invalid dates.
	 * @default: false
	 */
	keepInvalid?: boolean;
	/**
	 * Will cause the date picker to stay open after selecting a date if no time components are being used.
	 * @default: false
	 */
	keepOpen?: boolean;
	/**
	 * See momentjs for valid locales. You must include moment-with-locales.js or a local js file.
	 * @default: moment.locale()
	 */
	locale?: string;
	/**
	 * Prevents date/time selections after this date.
	 * maxDate will override defaultDate and useCurrent if either of these settings are the same day since both options are invalid according to the rules you've selected.
	 * @default: false
	 */
	maxDate?: boolean | moment.Moment | Date | string;
	/**
	 * Prevents date/time selections before this date.
	 * minDate will override defaultDate and useCurrent if either of these settings are the same day since both options are invalid according to the rules you've selected.
	 * @default: false
	 */
	minDate?: boolean | moment.Moment | Date | string;
	/**
	 * Allows custom input formatting For example: the user can enter "yesterday"" or "30 days ago".
	 * {@link http://eonasdan.github.io/bootstrap-datetimepicker/Functions/#parseinputdate}
	 */
	parseInputDate?: InputParser;
	/**
	 * Show the "Clear" button in the icon toolbar.
	 * Clicking the "Clear" button will set the calendar to null.
	 * @default: false
	 */
	showClear?: boolean;
	/**
	 * Show the "Close" button in the icon toolbar.
	 * Clicking the "Close" button will call hide()
	 * @default: false
	 */
	showClose?: boolean;
	/**
	 * Show the "Today" button in the icon toolbar.
	 * Clicking the "Today" button will set the calendar view and set the date to now.
	 * @default: false
	 */
	showTodayButton?: boolean;
	/**
	 * Shows the picker side by side when using the time and date together.
	 * @default: false
	 */
	sideBySide?: boolean;
	/**
	 * Number of minutes the up/down arrow's will move the minutes value in the time picker
	 * @default: 1
	 */
	stepping?: number;
	/**
	 * Timezone to use, if moment-timezone is loaded. If null or empty string, ignore timezones.
	 * @default: ""
	 */
	timeZone?: string | null;
	/**
	 * Changes the placement of the icon toolbar.
	 * @default: "default"
	 */
	toolbarPlacement?: "default" | "top" | "bottom";
	/** This will change the tooltips over each icon to a custom string */
	tooltips?: Tooltips;
	/**
	 * On show, will set the picker to the current date/time
	 * @default: true
	 */
	useCurrent?: boolean;
	/**
	 * Defines if moment should use strict date parsing when considering a date to be valid
	 * @default: false
	 */
	useStrict?: boolean;
	/**
	 * This will change the viewDate without changing or setting the selected date.
	 * @default: false
	 */
	viewDate?: boolean | moment.Moment | Date | string;
	/**
	 * The default view to display when the picker is shown.
	 * Note: To limit the picker to selecting, for instance the year and month, use format: MM/YYYY
	 * @default: "days"
	 */
	viewMode?: "decades" | "years" | "months" | "days";
	/**
	 * On picker show, places the widget at the identifier (string) or jQuery object if the element has css position: "relative"
	 * @default: null
	 */
	widgetParent?: string | JQuery | null;
	widgetPositioning?: WidgetPositioningOptions;
}

export interface Icons {
	/** default: "glyphicon glyphicon-trash" */
	clear?: string;
	/** default: "glyphicon glyphicon-remove" */
	close?: string;
	/** default: "glyphicon glyphicon-calendar" */
	date?: string;
	/** default: "glyphicon glyphicon-time" */
	down?: string;
	/** default: "glyphicon glyphicon-chevron-left" */
	next?: string;
	/** default: "glyphicon glyphicon-screenshot" */
	previous?: string;
	/** default: "glyphicon glyphicon-chevron-right" */
	time?: string;
	/** default: "glyphicon glyphicon-chevron-down" */
	today?: string;
	/** default: "glyphicon glyphicon-chevron-up" */
	up?: string;
}

export interface Tooltips {
	today?: string;
	clear?: string;
	close?: string;
	selectMonth?: string;
	prevMonth?: string;
	nextMonth?: string;
	selectYear?: string;
	prevYear?: string;
	nextYear?: string;
	selectDecade?: string;
	prevDecade?: string;
	nextDecade?: string;
	prevCentury?: string;
	nextCentury?: string;
	selectTime?: string;
	pickHour?: string;
	incrementHour?: string;
	decrementHour?: string;
	pickMinute?: string;
	incrementMinute?: string;
	decrementMinute?: string;
	togglePeriod?: string;
	pickSecond?: string;
	incrementSecond?: string;
	decrementSecond?: string;
}

export interface WidgetPositioningOptions {
	horizontal?: "auto" | "left" | "right";
	vertical?: "auto" | "top" | "bottom";
}

export interface Event extends JQueryEventObject {
    date: moment.Moment;
}

export interface ChangeEvent extends Event {
	/** Previous date. False if the previous date is null. */
    oldDate: moment.Moment | boolean;
}

export interface UpdateEvent extends JQueryEventObject {
	/** Change type as a momentjs format token. e.g. yyyy on year change */
	change: string;
	/** New viewDate. */
	viewDate: moment.Moment;
}

export type EventName = "dp.show" | "dp.hide" | "dp.error";

declare global {
	interface JQuery {
		datetimepicker: Datetimepicker;

	    data(key: "DateTimePicker"): Datetimepicker;

	    on(events: "dp.change", handler: (eventObject: ChangeEvent) => any): JQuery;
	    on(events: "dp.change", selector: string, handler: (eventobject: ChangeEvent) => any): JQuery;
	    on(events: "dp.change", selector: string, data: any, handler?: (eventobject: ChangeEvent) => any): JQuery;

	    on(events: "dp.update", handler: (eventObject: UpdateEvent) => any): JQuery;
	    on(events: "dp.update", selector: string, handler: (eventobject: UpdateEvent) => any): JQuery;
	    on(events: "dp.update", selector: string, data: any, handler?: (eventobject: UpdateEvent) => any): JQuery;

	    on(events: EventName , handler: (eventObject: Event) => any): JQuery;
	    on(events: EventName, selector: string, handler: (eventobject: Event) => any): JQuery;
	    on(events: EventName, selector: string, data: any, handler?: (eventobject: Event) => any): JQuery;

	    off(events: "dp.change", handler: (eventobject: ChangeEvent) => any): JQuery;
	    off(events: "dp.change", selector?: string, handler?: (eventobject: ChangeEvent) => any): JQuery;

	    off(events: "dp.update", handler: (eventobject: UpdateEvent) => any): JQuery;
	    off(events: "dp.update", selector?: string, handler?: (eventobject: UpdateEvent) => any): JQuery;

	    off(events: EventName, handler: (eventobject: Event) => any): JQuery;
	    off(events: EventName, selector?: string, handler?: (eventobject: Event) => any): JQuery;
	}
}
