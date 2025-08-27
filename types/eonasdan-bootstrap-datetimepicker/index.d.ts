/// <reference types="jquery"/>

import * as moment from "moment";

export as namespace EonasdanBootstrapDatetimepicker;

export type DateComparable = string | Date | moment.Moment;

export type UseCurrent = "year" | "month" | "day" | "hour" | "minute";

export interface Icons {
    /**
     * Default: "glyphicon glyphicon-chevron-right"
     */
    time?: string | undefined;

    /**
     * Default: "glyphicon glyphicon-calendar"
     */
    date?: string | undefined;

    /**
     * Default: "glyphicon glyphicon-chevron-up"
     */
    up?: string | undefined;

    /**
     * Default: "glyphicon glyphicon-time"
     */
    down?: string | undefined;

    /**
     * Default: "glyphicon glyphicon-screenshot"
     */
    previous?: string | undefined;

    /**
     * Default: "glyphicon glyphicon-chevron-left"
     */
    next?: string | undefined;

    /**
     * Default: "glyphicon glyphicon-chevron-down"
     */
    today?: string | undefined;

    /**
     * Default: "glyphicon glyphicon-trash"
     */
    clear?: string | undefined;

    /**
     * Default: "glyphicon glyphicon-remove"
     */
    close?: string | undefined;
}

export declare const enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}

export type ViewMode = "days" | "months" | "years" | "decades";

export type ToolbarPlacement = "default" | "top" | "bottom";

export interface WidgetPositioning {
    horizontal?: "auto" | "left" | "right" | undefined;
    vertical?: "auto" | "top" | "bottom" | undefined;
}

export interface KeyBinds {
    up?: ((widget: JQuery | boolean) => any) | undefined;
    down?: ((widget: JQuery | boolean) => any) | undefined;
    "control up"?: ((widget: JQuery | boolean) => any) | undefined;
    "control down"?: ((widget: JQuery | boolean) => any) | undefined;
    left?: ((widget: JQuery | boolean) => any) | undefined;
    right?: ((widget: JQuery | boolean) => any) | undefined;
    pageUp?: ((widget: JQuery | boolean) => any) | undefined;
    pageDown?: ((widget: JQuery | boolean) => any) | undefined;
    enter?: (() => any) | undefined;
    escape?: (() => any) | undefined;
    "control space"?: ((widget: JQuery) => any) | undefined;
    t?: (() => any) | undefined;
    delete?: (() => any) | undefined;
}

export type FromTo = [moment.Moment, moment.Moment];

export interface Tooltips {
    /**
     * Default: "Go to today"
     */
    today?: string | undefined;

    /**
     * Default: "Clear selection"
     */
    clear?: string | undefined;

    /**
     * Default: "Close the picker"
     */
    close?: string | undefined;

    /**
     * Default: "Select Month"
     */
    selectMonth?: string | undefined;

    /**
     * Default: "Previous Month"
     */
    prevMonth?: string | undefined;

    /**
     * Default: "Next Month"
     */
    nextMonth?: string | undefined;

    /**
     * Default: "Select Year"
     */
    selectYear?: string | undefined;

    /**
     * Default: "Previous Year"
     */
    prevYear?: string | undefined;

    /**
     * Default: "Next Year"
     */
    nextYear?: string | undefined;

    /**
     * Default: "Select Decade"
     */
    selectDecade?: string | undefined;

    /**
     * Default: "Previous Decade"
     */
    prevDecade?: string | undefined;

    /**
     * Default: "Next Decade"
     */
    nextDecade?: string | undefined;

    /**
     * Default: "Previous Century"
     */
    prevCentury?: string | undefined;

    /**
     * Default: "Next Century"
     */
    nextCentury?: string | undefined;

    /**
     * Default: "Pick Hour"
     */
    pickHour?: string | undefined;

    /**
     * Default: "Increment Hour"
     */
    incrementHour?: string | undefined;

    /**
     * Default: "Decrement Hour"
     */
    decrementHour?: string | undefined;

    /**
     * Default: "Pick Minute"
     */
    pickMinute?: string | undefined;

    /**
     * Default: "Increment Minute"
     */
    incrementMinute?: string | undefined;

    /**
     * Default: "Decrement Minute"
     */
    decrementMinute?: string | undefined;

    /**
     * Default: "Pick Second"
     */
    pickSecond?: string | undefined;

    /**
     * Default: "Increment Second"
     */
    incrementSecond?: string | undefined;

    /**
     * Default: "Decrement Second"
     */
    decrementSecond?: string | undefined;

    /**
     * Default:  "Toggle Period"
     */
    togglePeriod?: string | undefined;

    /**
     * Default: "Select Time"
     */
    selectTime?: string | undefined;
}

export type ParseInputDateFunction = (inputDate: string) => moment.Moment;

export interface OptionsBase {
    /**
     * Default: "Etc/UTC"
     */
    timeZone?: string | undefined;

    /**
     * See momentjs' docs for valid formats. Format also dictates what components are shown, e.g. MM/dd/YYYY will not display the time picker.
     * Default: false
     */
    format?: string | boolean | undefined;

    /**
     * Changes the heading of the datepicker when in "days" view.
     * Default: "MMMM YYYY"
     */
    dayViewHeaderFormat?: string | undefined;

    /**
     * Allows for several input formats to be valid.
     * Default: false
     */
    extraFormats?: string[] | boolean | undefined;

    /**
     * Number of minutes the up/down arrow's will move the minutes value in the time picker.
     * Default: 1
     */
    stepping?: number | undefined;

    /**
     * Prevents date/time selections before this date.
     * minDate will override defaultDate and useCurrent if either of these settings are the same day since both options are invalid according to the rules you've selected.
     * Default: false
     */
    minDate?: DateComparable | boolean | undefined;

    /**
     * Prevents date/time selections after this date.
     * maxDate will override defaultDate and useCurrent if either of these settings are the same day since both options are invalid according to the rules you've selected.
     * Default: false
     */
    maxDate?: DateComparable | boolean | undefined;

    /**
     * On show, will set the picker to the current date/time
     * Default: true
     */
    useCurrent?: boolean | UseCurrent | undefined;

    /**
     * Using a Bootstraps collapse to switch between date/time pickers.
     * Default: true
     */
    collapse?: boolean | undefined;

    /**
     * See momentjs for valid locales.
     * You must include moment-with-locales.js or a local js file.
     * Default: moment.locale()
     */
    locale?: string | undefined;

    /**
     * Sets the picker default date/time. Overrides useCurrent
     * Default: false
     */
    defaultDate?: DateComparable | boolean | undefined;

    /**
     * Change the default icons for the pickers functions
     * Default: {
     *              time: "glyphicon glyphicon-time",
     *              date: "glyphicon glyphicon-calendar",
     *              up: "glyphicon glyphicon-chevron-up",
     *              down: "glyphicon glyphicon-chevron-down",
     *              previous: "glyphicon glyphicon-chevron-left",
     *              next: "glyphicon glyphicon-chevron-right",
     *              today: "glyphicon glyphicon-screenshot",
     *              clear: "glyphicon glyphicon-trash",
     *              close: "glyphicon glyphicon-remove"
     *          }
     */
    icons?: Icons | undefined;

    /**
     * Defines if moment should use strict date parsing when considering a date to be valid
     * Default: false
     */
    useStrict?: boolean | undefined;

    /**
     * Shows the picker side by side when using the time and date together.
     * Default: false
     */
    sideBySide?: boolean | undefined;

    /**
     * Accepts: array of numbers from 0-6
     * Disables the section of days of the week, e.g. weekends.
     * Default: false
     */
    daysOfWeekDisabled?: DayOfWeek[] | boolean | undefined;

    /**
     * Shows the week of the year to the left of first day of the week.
     * Default: false
     */
    calendarWeeks?: boolean | undefined;

    /**
     * The default view to display when the picker is shown.
     * Note: To limit the picker to selecting, for instance the year and month, use format: MM/YYYY
     * Default: "days"
     */
    viewMode?: ViewMode | undefined;

    /**
     * Changes the placement of the icon toolbar.
     * Default: "default"
     */
    toolbarPlacement?: ToolbarPlacement | undefined;

    /**
     * Show the "Today" button in the icon toolbar.
     * Clicking the "Today" button will set the calendar view and set the date to now.
     * Default: false
     */
    showTodayButton?: boolean | undefined;

    /**
     * Show the "Clear" button in the icon toolbar.
     * Clicking the "Clear" button will set the calendar to null.
     * Default: false
     */
    showClear?: boolean | undefined;

    /**
     * Show the "Close" button in the icon toolbar.
     * Clicking the "Close" button will call hide()
     * Default: false
     */
    showClose?: boolean | undefined;

    /**
     * Accepts: object with the all or one of the parameters above
     * horizontal: 'auto', 'left', 'right'
     * vertical: 'auto', 'top', 'bottom'
     * Default: {
     *              horizontal: 'auto'
     *              vertical: 'auto'
     *          }
     */
    widgetPositioning?: WidgetPositioning | undefined;

    /**
     * On picker show, places the widget at the identifier (string) or jQuery object if the element has css position: "relative"
     * Default: null
     */
    widgetParent?: string | JQuery | undefined;

    /**
     * Will cause the date picker to stay open after selecting a date if no time components are being used.
     * Default: false
     */
    keepOpen?: boolean | undefined;

    /**
     * Will display the picker inline without the need of a input field. This will also hide borders and shadows.
     * Default: false
     */
    inline?: boolean | undefined;

    /**
     * Default: ".datepickerinput"
     */
    datepickerInput?: string | undefined;

    /**
     * Will cause the date picker to not revert or overwrite invalid dates.
     * Default: false
     */
    keepInvalid?: boolean | undefined;

    /**
     * Allows for custom events to fire on keyboard press.
     * For example:
     *                keybinds:
     *                {
     *                        up: (widget) => console.log(widget),
     *                        "control up": (widget) => console.log(widget)
     *                }
     * The widget parameter is false, if the datepicker is closed.
     * Default: {
     *          up: function (widget) {
     *              if (widget.find(".datepicker").is(":visible")) {
     *                  this.date(this.date().clone().subtract(7, "d"));
     *              } else {
     *                  this.date(this.date().clone().add(1, "m"));
     *              }
     *          },
     *          down: function (widget) {
     *              if (!widget) {
     *                  this.show();
     *              }
     *              else if (widget.find(".datepicker").is(":visible")) {
     *                  this.date(this.date().clone().add(7, "d"));
     *              } else {
     *                  this.date(this.date().clone().subtract(1, "m"));
     *              }
     *          },
     *          "control up": function (widget) {
     *              if (widget.find(".datepicker").is(":visible")) {
     *                  this.date(this.date().clone().subtract(1, "y"));
     *              } else {
     *                  this.date(this.date().clone().add(1, "h"));
     *              }
     *          },
     *          "control down": function (widget) {
     *              if (widget.find(".datepicker").is(":visible")) {
     *                  this.date(this.date().clone().add(1, "y"));
     *              } else {
     *                  this.date(this.date().clone().subtract(1, "h"));
     *              }
     *          },
     *          left: function (widget) {
     *              if (widget.find(".datepicker").is(":visible")) {
     *                  this.date(this.date().clone().subtract(1, "d"));
     *              }
     *          },
     *          right: function (widget) {
     *              if (widget.find(".datepicker").is(":visible")) {
     *                  this.date(this.date().clone().add(1, "d"));
     *              }
     *          },
     *          pageUp: function (widget) {
     *              if (widget.find(".datepicker").is(":visible")) {
     *                  this.date(this.date().clone().subtract(1, "M"));
     *              }
     *          },
     *          pageDown: function (widget) {
     *              if (widget.find(".datepicker").is(":visible")) {
     *                  this.date(this.date().clone().add(1, "M"));
     *              }
     *          },
     *          enter: function () {
     *              this.hide();
     *          },
     *          escape: function () {
     *              this.hide();
     *          },
     *          "control space": function (widget) {
     *              if (widget.find(".timepicker").is(":visible")) {
     *                  widget.find(".btn[data-action="togglePeriod"]").click();
     *              }
     *          },
     *          t: function () {
     *              this.date(moment());
     *          },
     *          "delete": function () {
     *              this.clear();
     *          }
     *       }
     */
    keyBinds?: KeyBinds | undefined;

    /**
     * Will cause the date picker to stay open after a blur event.
     * Default: false
     */
    debug?: boolean | undefined;

    /**
     * Allow date picker show event to fire even when the associated input element has the readonly="readonly" property.
     * Default: false
     */
    ignoreReadonly?: boolean | undefined;

    /**
     * Disables time selection between the given moments.
     * For example:
     * [[moment({ h: 0 }), moment({ h: 8 })], [moment({ h: 18 }), moment({ h: 24 })]]
     * Default: false
     */
    disabledTimeIntervals?: boolean | FromTo[] | undefined;

    /**
     * If true, the picker will show on textbox focus and icon click when used in a button group
     * Default: false
     */
    allowInputToggle?: boolean | undefined;

    /**
     * If false, the textbox will not be given focus when the picker is shown
     * Default: true
     */
    focusOnShow?: boolean | undefined;

    /**
     * This will change the viewDate without changing or setting the selected date.
     * Default: false
     */
    viewDate?: DateComparable | boolean | undefined;

    /**
     * This will change the tooltips over each icon to a custom string
     * Default: {
     *              today: "Go to today",
     *              clear: "Clear selection",
     *              close: "Close the picker",
     *              selectMonth: "Select Month",
     *              prevMonth: "Previous Month",
     *              nextMonth: "Next Month",
     *              selectYear: "Select Year",
     *              prevYear: "Previous Year",
     *              nextYear: "Next Year",
     *              selectDecade: "Select Decade",
     *              prevDecade: "Previous Decade",
     *              nextDecade: "Next Decade",
     *              prevCentury: "Previous Century",
     *              nextCentury: "Next Century"
     *          }
     */
    tooltips?: Tooltips | undefined;

    /**
     * Allows custom input formatting.
     * For example:
     * The user can enter "yesterday" or "30 days ago".
     */
    parseInputDate?: ParseInputDateFunction | undefined;
}

export type IndexedDates = { [/** Dates as "YYYY-MM-DD keys */ date: string]: boolean };

export type IndexedHours = { [/** Hours as "0" - "23" keys */ hour: string]: boolean };

export interface GetOptions extends OptionsBase {
    /**
     * Disables selection of dates in the array, e.g. holidays
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the dates, values being true.
     * For example:
     * disabledDates = ["2010-10-10"]; -> disabledDated will be { "2010-01-01": true }
     * Default: false
     */
    disabledDates?: IndexedDates | boolean | undefined;

    /**
     * Enables selection of dates NOT in the array, e.g. holidays
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the dates, values being true.
     * For example:
     * enabledDates = ["2010-10-10"]; -> enabledDated will be { "2010-01-01": true }
     * Default: false
     */
    enabledDates?: IndexedDates | boolean | undefined;

    /**
     * Will allow or disallow hour selections (much like disabledTimeIntervals) but will affect all days.
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the hours, values being true.
     * For example:
     * enabledHours = [0, 1]; -> enabledHours will be { "0": true, "1": true }
     * Default: false
     */
    enabledHours?: IndexedHours | boolean | undefined;

    /**
     * Will allow or disallow hour selections (much like disabledTimeIntervals) but will affect all days.
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the hours, values being true.
     * For example:
     * disabledHours = [0, 1]; -> disabledHours will be { "0": true, "1": true }
     * Default: false
     */
    disabledHours?: IndexedHours | boolean | undefined;
}

export interface SetOptions extends OptionsBase {
    /**
     * Disables selection of dates in the array, e.g. holidays
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the dates, values being true.
     * For example:
     * disabledDates = ["2010-10-10"]; -> disabledDated will be { "2010-01-01": true }
     * Default: false
     */
    disabledDates?: DateComparable[] | boolean | undefined;

    /**
     * Enables selection of dates NOT in the array, e.g. holidays
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the dates, values being true.
     * For example:
     * enabledDates = ["2010-10-10"]; -> enabledDated will be { "2010-01-01": true }
     * Default: false
     */
    enabledDates?: DateComparable[] | boolean | undefined;

    /**
     * Will allow or disallow hour selections (much like disabledTimeIntervals) but will affect all days.
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the hours, values being true.
     * For example:
     * enabledHours = [0, 1]; -> enabledHours will be { "0": true, "1": true }
     * Default: false
     */
    enabledHours?: number[] | boolean | undefined;

    /**
     * Will allow or disallow hour selections (much like disabledTimeIntervals) but will affect all days.
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the hours, values being true.
     * For example:
     * disabledHours = [0, 1]; -> disabledHours will be { "0": true, "1": true }
     * Default: false
     */
    disabledHours?: number[] | boolean | undefined;
}

export interface Datetimepicker {
    /**
     * Destroys the widget and removes all attached event listeners.
     */
    destroy(): void;

    /**
     * Shows or hides the widget.
     * Emits:
     * - dp.hide - if the widget is hidden after the toggle call
     * - dp.show - if the widget is show after the toggle call
     * - dp.change - if the widget is opened for the first time and the input element is empty and options.useCurrent != false
     */
    toggle(): Datetimepicker;

    /**
     * Shows the widget.
     * Emits:
     * - dp.show - if the widget was hidden before that call
     * - dp.change - if the widget is opened for the first time and the useCurrent is set to true or to a granularity value and the input element the component is attached to has an empty value
     */
    show(): Datetimepicker;

    /**
     * Hides the widget.
     * Emits:
     * - dp.hide - if the widget was visible before that call
     */
    hide(): Datetimepicker;

    /**
     * Disables the input element, the component is attached to, by adding a disabled="true" attribute to it. If the widget was visible before that call it is hidden.
     * Emits:
     * - dp.hide - if the widget was visible before that call
     */
    disable(): Datetimepicker;

    /**
     * Enables the input element, the component is attached to, by removing disabled attribute from it.
     */
    enable(): Datetimepicker;

    /**
     * Returns the component's model current date, a moment object or null if not set.
     */
    date(): moment.Moment;

    /**
     * Takes string, Date, moment, null parameter and sets the components model current moment to it.
     * Passing a null value unsets the components model current moment.
     * Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.
     * Throws:
     * - TypeError - in case the newDate cannot be parsed
     *
     * Emits:
     * - dp.change - in case newDate is different from current moment
     */
    date(date: DateComparable): Datetimepicker;

    /**
     * Clears the datepicker by setting the value to null.
     */
    clear(): Datetimepicker;

    /**
     * For the moment this function will only prevent the picker from calling hide() on blur so that the picker can be inspected.
     */
    debug(): Datetimepicker;

    /**
     * Returns the components current options object.
     * Note that the changing the values of the returned object does not change the components actual configuration.
     */
    options(): GetOptions;
    /**
     * Takes an object variable with option key:value properties and configures the component. Use this to update multiple options on the component.
     */
    options(options: SetOptions): Datetimepicker;

    //////////////////////////////////////////////////////////////////////////////////////
    //// Below are the getters/setters for the properties of the 'options(): Options' ////
    //////////////////////////////////////////////////////////////////////////////////////

    /**
     * Returns the component's options.timeZone.
     */
    timeZone(): string;

    timeZone(newZone: string): Datetimepicker;

    /**
     * Returns the options.disabledDates option.
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the dates, values being true.
     * For example:
     * disabledDates = ["2010-10-10"]; -> disabledDated will be { "2010-01-01": true }
     */
    disabledDates(): IndexedDates | boolean;

    /**
     * Takes an array of values and disallows the user to select those days.
     * Setting this takes precedence over options.minDate, options.maxDate configuration.
     * Also calling this function removes the configuration of options.enabledDates if such exist.
     * Note: These values are matched with Day granularity.
     */
    disabledDates(dates: DateComparable[] | boolean): Datetimepicker;

    /**
     * Returns the options.enabledDates option.
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the dates, values being true.
     * For example:
     * enabledDates = ["2010-10-10"]; -> enabledDated will be { "2010-01-01": true }
     */
    enabledDates(): IndexedDates | boolean;

    /**
     * Takes an array of values and allows the user to select only from those days.
     * Setting this takes precedence over options.minDate, options.maxDate configuration.
     * Also calling this function with boolean:false removes the configuration of options.disabledDates if such exist.
     * Note: These values are matched with Day granularity.
     */
    enabledDates(dates: DateComparable[] | boolean): Datetimepicker;

    /**
     * Returns a moment with the options.defaultDate option configuration or false if not set.
     */
    defaultDate(): moment.Moment | boolean;

    /**
     * Will set the picker's inital date.
     * If a boolean:false value is passed the options.defaultDate parameter is cleared.
     * Throws:
     * - TypeError - if the provided date doesn't pass validation, including disabledDates, enabledDates, minDate, maxDate, and daysOfWeekDisabled
     * - TypeError - if the provided date cannot be parsed by momentjs
     */
    defaultDate(dates: DateComparable | boolean): Datetimepicker;

    /**
     * Returns the options.useCurrent option configuration.
     */
    useCurrent(): boolean | UseCurrent;

    /**
     * Takes a boolean or string.
     * If a boolean true is passed and the components model moment is not set (either through setDate or through a valid value on the input element the component is attached to) then the first time the user opens the datetimepicker widget the value is initialized to the current moment of the action.
     * If a false boolean is passed then no initialization happens on the input element.
     * You can select the granularity on the initialized moment by passing one of the following strings ("year", "month", "day", "hour", "minute") in the variable.
     * If for example you pass "day" to the useCurrent function and the input field is empty the first time the user opens the datetimepicker widget the input text will be initialized to the current datetime with day granularity (ie if currentTime = 2014-08-10 13:32:33 the input value will be initialized to 2014-08-10 00:00:00)
     * Note: If the options.defaultDate is set or the input element the component is attached to has already a value that takes precedence and the functionality of useCurrent is not triggered!
     */
    useCurrent(useCurrent: boolean | UseCurrent): Datetimepicker;

    /**
     * Returns the currently set moment of the options.minDate or false if not set.
     */
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
    minDate(minDate: DateComparable | boolean): Datetimepicker;

    /**
     * Returns the currently set moment of the options.maxDate or false if not set.
     */
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
    maxDate(maxDate: DateComparable | boolean): Datetimepicker;

    /**
     * Returns the options.daysOfWeekDisabled configuration
     * IMPORTANT! Throws exception if not set explicitly https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1459
     */
    daysOfWeekDisabled(): DayOfWeek[];

    /**
     * Takes an [ Number:0 to 6 ] and disallow the user to select weekdays that exist in this array.
     * This has lower priority over the options.minDate, options.maxDate, options.disabledDates and options.enabledDates configuration settings.
     * Emits:
     * - dp.change - if the currently selected moment falls in the values passed on the daysOfWeek parameter.
     * - dp.error - if the currently selected moment falls in the values passed on the daysOfWeek parameter.
     */
    daysOfWeekDisabled(daysOfWeek: DayOfWeek[]): Datetimepicker;

    /**
     * Returns the component's options.format.
     */
    format(): string | boolean;

    /**
     * Takes a moment.js format string and sets the components options.format.
     * This is used for displaying and also for parsing input strings either from the input element the component is attached to or the date() function.
     * The parameter can also be a boolean:false in which case the format is set to the locale's L LT.
     * Note: this is also used to determine if the TimePicker sub component will display the hours in 12 or 24 format. (if "a" or "h" exists in the passed string then a 12 hour mode is set)
     */
    format(format: string | boolean): Datetimepicker;

    /**
     * Returns a boolean or array with the options.extraFormats option configuration.
     */
    extraFormats(): string[] | boolean;

    /**
     * Takes an array of valid input moment format options, or boolean:false.
     */
    extraFormats(formats: string[] | boolean): Datetimepicker;

    /**
     * Returns the currently set locale of the options.locale.
     */
    locale(): string;

    /**
     * Takes a string of any valid moment locale e.g. de for German.
     * Throws:
     * - TypeError - if the locale is not loaded via a separate script or moment-with-locales
     */
    locale(newLocale: string): Datetimepicker;

    /**
     * Returns a number with the options.stepping option configuration.
     */
    stepping(): number;

    /**
     * This will be the amount the up/down arrows move the minute value with a time picker.
     */
    stepping(step: number): Datetimepicker;

    /**
     * Returns a boolean of the options.sideBySide.
     */
    sideBySide(): boolean;

    /**
     * If sideBySide is true and the time picker is used, both components will display side by side instead of collapsing.
     */
    sideBySide(sideBySide: boolean): Datetimepicker;

    /**
     * Returns the options.collapse option configuration.
     */
    collapse(): boolean;

    /**
     * If set to false the picker will display similar to sideBySide except vertical.
     */
    collapse(collapse: boolean): Datetimepicker;

    /**
     * Returns options.icons.
     */
    icons(): Icons;

    /**
     * Takes an Object of strings.
     * Throws:
     * - TypeError - if icons parameter is not an Object
     */
    icons(icons: Icons): Datetimepicker;

    /**
     * Returns the options.useStrict
     */
    useStrict(): boolean;

    /**
     * If useStrict is true, momentjs parsing rules will be stricter when determining if a date is valid or not.
     */
    useStrict(useStrict: boolean): Datetimepicker;

    /**
     * Returns the options.widgetPositioning object.
     */
    widgetPositioning(): WidgetPositioning;

    /**
     * WidgetPositioning defines where the dropdown with the widget will appear relative to the input element the component is attached to.
     * "auto" is the default value for both horizontal and vertical keys and it tries to automatically place the dropdown in a position that is visible to the user.
     * Usually you should not override those options unless you have a special need in your layout.
     */
    widgetPositioning(positioningObject: WidgetPositioning): Datetimepicker;

    /**
     * Returns the options.viewMode.
     */
    viewMode(): ViewMode;

    /**
     * Takes a string. Valid values are "days", "months", "years" and "decades"
     * Throws:
     * - TypeError - if newViewMode parameter is not an a string or if newViewMode is not a valid value
     */
    viewMode(newViewMode: ViewMode): Datetimepicker;

    /**
     * Returns the current options.calendarWeeks option configuration.
     */
    calendarWeeks(): boolean;

    /**
     * Set if the week numbers will appear to the left on the days view.
     */
    calendarWeeks(calendarWeeks: boolean): Datetimepicker;

    /**
     * Returns the options.showClear option.
     */
    showClear(): boolean;

    /**
     * Set if the clear date button will appear on the widget.
     */
    showClear(showClear: boolean): Datetimepicker;

    /**
     * Returns the options.showTodayButton option.
     */
    showTodayButton(): boolean;

    /**
     * Set if the Today button will appear on the widget.
     */
    showTodayButton(showTodayButton: boolean): Datetimepicker;

    /**
     * Returns the options.toolbarplacement option.
     */
    toolbarPlacement(): ToolbarPlacement;

    /**
     * Changes the placement of the toolbar where the today, clear, component switch icon are located.
     * See valid values at DatetimepickerOptions.toolbarplacement
     * Throws:
     * - TypeError if the parameter is not a valid value
     */
    toolbarPlacement(toolbarPlacement: ToolbarPlacement): Datetimepicker;

    /**
     * Returns the options.dayViewHeaderFormat option.
     */
    dayViewHeaderFormat(): string;

    /**
     * Used to customize the header of the day view.
     */
    dayViewHeaderFormat(dayViewHeaderFormat: string): Datetimepicker;

    /**
     * Returns the currently set options.keyBinds option.
     */
    keyBinds(): KeyBinds;

    /**
     * Allows for several keyBinding functions to be specified for ease of access or accessibility.
     */
    keyBinds(keyBinds: KeyBinds): Datetimepicker;

    /**
     * Returns the options.inline option.
     */
    inline(): boolean;

    /**
     * Used to customize the header of the day view.
     */
    inline(inline: boolean): Datetimepicker;

    /**
     * Returns the options.ignoreReadonly option.
     */
    ignoreReadonly(): boolean;

    /**
     * Set this to true to allow the picker to be used even if the input field is readonly. This will not bypass the disabled property.
     */
    ignoreReadonly(ignoreReadonly: boolean): Datetimepicker;

    /**
     * Returns the options.showClose option.
     */
    showClose(): boolean;

    /**
     * If true, an icon will be displayed on the toolbar that will hide the picker.
     */
    showClose(showClose: boolean): Datetimepicker;

    /**
     * Returns the options.keepInvalid option.
     */
    keepInvalid(): boolean;

    /**
     * If true, invalid dates will not be reverted to a previous selection or changed.
     */
    keepInvalid(keepInvalid: boolean): Datetimepicker;

    /**
     * Returns the options.datepickerInput option.
     */
    datepickerInput(): string;

    datepickerInput(datepickerInput: string): Datetimepicker;

    /**
     * Returns the options.allowInputToggle option.
     */
    allowInputToggle(): boolean;

    /**
     * If true, the picker will show on textbox focus and icon click when used in a button group.
     */
    allowInputToggle(allowInputToggle: boolean): Datetimepicker;

    /**
     * Returns the options.focusOnShow option.
     */
    focusOnShow(): boolean;

    /**
     * If false, the textbox will not be given focus when the picker is shown.
     */
    focusOnShow(focusOnShow: boolean): Datetimepicker;

    /**
     * Returns the options.disabledTimeIntervals option.
     */
    disabledTimeIntervals(): FromTo[] | boolean;

    /**
     * Disables time selection between the given moments.
     * For example:
     * disabledTimeIntervals: [[moment({ h: 0 }), moment({ h: 8 })], [moment({ h: 18 }), moment({ h: 24 })]]
     * Will disable times between 12-8am and 6-12pm today
     */
    disabledTimeIntervals(disabledTimeIntervals: FromTo[] | boolean): Datetimepicker;

    /**
     * Returns the options.disabledHours option.
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the hours, values being true.
     * For example:
     * enabledHours = [0, 1]; -> enabledHours will be { "0": true, "1": true }
     */
    disabledHours(): IndexedHours | boolean;

    /**
     * Must be in 24 hour format. Will disallow hour selections (much like disabledTimeIntervals) but will affect all days.
     * Note: Like en/disabledDates, the en/disabledHours options are mutually exclusive and will reset one of the options back to false.
     * For example:
     * disabledHours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23, 24]
     * enabledHours: [9, 10, 11, 12, 13, 14, 15, 16]
     */
    disabledHours(disabledHours: number[] | boolean): Datetimepicker;

    /**
     * Returns the options.enabledHours option.
     * IMPORTANT! The getter returns an Object NOT an Array, with keys being the hours, values being true.
     * For example:
     * disabledHours = [0, 1]; -> disabledHours will be { "0": true, "1": true }
     */
    enabledHours(): IndexedHours | boolean;

    /**
     * Must be in 24 hour format. Will allow hour selections (much like enabledTimeIntervals) but will affect all days.
     * Note: Like en/disabledDates, the en/disabledHours options are mutually exclusive and will reset one of the options back to false.
     * For example:
     * disabledHours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23, 24]
     * enabledHours: [9, 10, 11, 12, 13, 14, 15, 16]
     */
    enabledHours(enabledHours: number[] | boolean): Datetimepicker;

    /**
     * Returns the options.viewDate option.
     */
    viewDate(): moment.Moment | boolean;

    /**
     * This will change the viewDate without changing or setting the selected date.
     */
    viewDate(viewDate: DateComparable | boolean): Datetimepicker;

    /**
     * Returns the options.parseInputDate option.
     */
    parseInputDate(): ParseInputDateFunction;

    /**
     * Allows custom input formatting.
     * For example:
     * The user can enter "yesterday"" or "30 days ago".
     */
    parseInputDate(parseInputDate: ParseInputDateFunction): Datetimepicker;

    /**
     * Returns the options.tooltips option.
     */
    tooltips(): Tooltips;

    /**
     * Sets the tooltips for icons.
     * Throws:
     * - TypeError - if tooltips parameter is not an Object
     */
    tooltips(tooltips: Tooltips): Datetimepicker;
}

export interface HideEventObject extends JQueryEventObject {
    /**
     * The currently set date. Type: moment object (clone)
     */
    date: moment.Moment;
}

export interface ChangeEventObject extends JQueryEventObject {
    /**
     * Date the picker changed to. Type: moment object (clone)
     */
    date: moment.Moment;

    /**
     * Previous date. Type: moment object (clone) or false in the event of a null
     */
    oldDate: moment.Moment | boolean;
}

export interface ErrorEventObject extends JQueryEventObject {
    /**
     * The invalid date. Type: moment object (clone)
     */
    date: moment.Moment;
}

export interface UpdateEventObject extends JQueryEventObject {
    /**
     * Change type as a momentjs format token. string e.g. yyyy on year change
     */
    change: string;

    /**
     * New viewDate.
     */
    viewDate: moment.Moment;
}

declare global {
    interface JQuery {
        datetimepicker(): JQuery;
        datetimepicker(options: SetOptions): JQuery;

        data(key: "DateTimePicker"): Datetimepicker;

        off(events: "dp.change", selector?: string, handler?: (eventobject: ChangeEventObject) => any): JQuery;
        off(events: "dp.change", handler: (eventobject: ChangeEventObject) => any): JQuery;

        on(events: "dp.change", selector: string, data: any, handler?: (eventobject: ChangeEventObject) => any): JQuery;
        on(events: "dp.change", selector: string, handler: (eventobject: ChangeEventObject) => any): JQuery;
        on(events: "dp.change", handler: (eventObject: ChangeEventObject) => any): JQuery;

        off(events: "dp.show", selector?: string, handler?: (eventobject: JQueryEventObject) => any): JQuery;
        off(events: "dp.show", handler: (eventobject: JQueryEventObject) => any): JQuery;

        on(events: "dp.show", selector: string, data: any, handler?: (eventobject: JQueryEventObject) => any): JQuery;
        on(events: "dp.show", selector: string, handler: (eventobject: JQueryEventObject) => any): JQuery;
        on(events: "dp.show", handler: (eventObject: JQueryEventObject) => any): JQuery;

        off(events: "dp.hide", selector?: string, handler?: (eventobject: HideEventObject) => any): JQuery;
        off(events: "dp.hide", handler: (eventobject: HideEventObject) => any): JQuery;

        on(events: "dp.hide", selector: string, data: any, handler?: (eventobject: HideEventObject) => any): JQuery;
        on(events: "dp.hide", selector: string, handler: (eventobject: HideEventObject) => any): JQuery;
        on(events: "dp.hide", handler: (eventObject: HideEventObject) => any): JQuery;

        off(events: "dp.error", selector?: string, handler?: (eventobject: ErrorEventObject) => any): JQuery;
        off(events: "dp.error", handler: (eventobject: ErrorEventObject) => any): JQuery;

        on(events: "dp.error", selector: string, data: any, handler?: (eventobject: ErrorEventObject) => any): JQuery;
        on(events: "dp.error", selector: string, handler: (eventobject: ErrorEventObject) => any): JQuery;
        on(events: "dp.error", handler: (eventObject: ErrorEventObject) => any): JQuery;

        off(events: "dp.update", selector?: string, handler?: (eventobject: UpdateEventObject) => any): JQuery;
        off(events: "dp.update", handler: (eventobject: UpdateEventObject) => any): JQuery;

        on(events: "dp.update", selector: string, data: any, handler?: (eventobject: UpdateEventObject) => any): JQuery;
        on(events: "dp.update", selector: string, handler: (eventobject: UpdateEventObject) => any): JQuery;
        on(events: "dp.update", handler: (eventObject: UpdateEventObject) => any): JQuery;
    }
}
