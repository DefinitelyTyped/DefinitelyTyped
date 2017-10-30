// Type definitions for pikaday 1.6
// Project: https://github.com/dbushell/Pikaday
// Definitions by: Rudolph Gottesheim <https://github.com/MidnightDesign>
//                 Åke Wivänge <https://github.com/wake42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as moment from 'moment';

export as namespace Pikaday;

export = Pikaday;

declare class Pikaday {
    el: HTMLElement;

    constructor(options: Pikaday.PikadayOptions);

    /**
     * Extends the existing configuration options for Pikaday object with the options provided.
     * Can be used to change/extend the configurations on runtime.
     * @param options full/partial configuration options.
     * @returns extended configurations.
     */
    config(options: Pikaday.PikadayOptions): Pikaday.PikadayOptions;

    /**
     * Returns the selected date in a string format. If Moment.js exists
     * (recommended) then Pikaday can return any format that Moment
     * understands, otherwise you're stuck with JavaScript's default.
     */
    toString(format?: string): string;

    /**
     * Returns a JavaScript Date object for the selected day, or null if
     * no date is selected.
     */
    getDate(): Date;

    /**
     * Set the current selection. This will be restricted within the bounds
     * of minDate and maxDate options if they're specified. A boolean (true)
     * can optionally be passed as the second parameter to prevent triggering
     * of the onSelect callback, allowing the date to be set silently.
     */
    setDate(date: string | Date, triggerOnSelect?: boolean): void;

    /**
     * Returns a Moment.js object for the selected date (Moment must be
     * loaded before Pikaday).
     */
    getMoment(): moment.Moment;

    /**
     * Set the current selection with a Moment.js object (see setDate).
     */
    setMoment(moment: any): void;

    /**
     * Change the current view to see a specific date.
     */
    gotoDate(date: Date): void;

    /**
     * Shortcut for picker.gotoDate(new Date())
     */
    gotoToday(): void;

    /**
     * Change the current view by month (0: January, 1: Februrary, etc).
     */
    gotoMonth(monthIndex: number): void;

    /**
     * Go to the next month (this will change year if necessary).
     */
    nextMonth(): void;

    /**
     * Go to the previous month (this will change year if necessary).
     */
    prevMonth(): void;

    /**
     * Change the year being viewed.
     */
    gotoYear(year: number): void;

    /**
     * Update the minimum/earliest date that can be selected.
     */
    setMinDate(date: Date): void;

    /**
     * Update the maximum/latest date that can be selected.
     */
    setMaxDate(date: Date): void;

    /**
     * Update the range start date. For using two Pikaday instances to
     * select a date range.
     */
    setStartRange(date: Date): void;

    /**
     * Update the range end date. For using two Pikaday instances to select
     * a date range.
     */
    setEndRange(date: Date): void;

    /**
     * Update the HTML.
     */
    draw(force: boolean): void;

    /**
     * Returns true if the picker is visible.
     */
    isVisible(): boolean;

    /**
     * Make the picker visible.
     */
    show(): void;

    /**
     * Hide the picker making it invisible.
     */
    hide(): void;

    /**
     * Recalculate and change the position of the picker.
     */
    adjustPosition(): void;

    /**
     * Hide the picker and remove all event listeners - no going back!
     */
    destroy(): void;
}

// merge the Pikaday class declaration with a module
declare namespace Pikaday {
    interface PikadayI18nConfig {
        previousMonth: string;
        nextMonth: string;
        months: string[];
        weekdays: string[];
        weekdaysShort: string[];
    }

    interface PikadayOptions {
        /**
         * Bind the datepicker to a form field.
         */
        field?: HTMLElement;

        /**
         * The default output format for toString() and field value.
         * Requires Moment.js for custom formatting.
         */
        format?: string;

        /**
         * Use a different element to trigger opening the datepicker.
         * Default: field element.
         */
        trigger?: HTMLElement;

        /**
         * Automatically show/hide the datepicker on field focus.
         * Default: true if field is set.
         */
        bound?: boolean;

        /**
         * Preferred position of the datepicker relative to the form field
         * (e.g. 'top right'). Automatic adjustment may occur to avoid
         * displaying outside the viewport. Default: 'bottom left'.
         */
        position?: string;

        /**
         * Can be set to false to not reposition the datepicker within the
         * viewport, forcing it to take the configured position. Default: true.
         */
        reposition?: boolean;

        /**
         * DOM node to render calendar into, see container example.
         * Default: undefined.
         */
        container?: HTMLElement;

        /**
         * The initial date to view when first opened.
         */
        defaultDate?: Date;

        /**
         * Make the defaultDate the initial selected value.
         */
        setDefaultDate?: boolean;

        /**
         * First day of the week (0: Sunday, 1: Monday, etc).
         */
        firstDay?: number;

        /**
         * The earliest date that can be selected (this should be a native
         * Date object - e.g. new Date() or moment().toDate()).
         */
        minDate?: Date;

        /**
         * The latest date that can be selected (this should be a native
         * Date object - e.g. new Date() or moment().toDate()).
         */
        maxDate?: Date;

        /**
         * Disallow selection of Saturdays and Sundays.
         */
        disableWeekends?: boolean;

        /**
         * Callback function that gets passed a Date object for each day
         * in view. Should return true to disable selection of that day.
         */
        disableDayFn?(date: Date): boolean;

        /**
         * Number of years either side (e.g. 10) or array of upper/lower range
         * (e.g. [1900, 2015]).
         */
        yearRange?: number | number[];

        /**
         * Show the ISO week number at the head of the row. Default: false.
         */
        showWeekNumber?: boolean;

        /**
         * Reverse the calendar for right-to-left languages. Default: false.
         */
        isRTL?: boolean;

        /**
         * Language defaults for month and weekday names.
         */
        i18n?: PikadayI18nConfig;

        /**
         * Additional text to append to the year in the title.
         */
        yearSuffix?: string;

        /**
         * Render the month after the year in the title. Default: false.
         */
        showMonthAfterYear?: boolean;

        /**
         * Render days of the calendar grid that fall in the next or previous months to the current month instead of rendering an empty table cell. Default: false.
         */
        showDaysInNextAndPreviousMonths?: boolean;

        /**
         * Number of visible calendars.
         */
        numberOfMonths?: number;

        /**
         * When numberOfMonths is used, this will help you to choose where the
         * main calendar will be (default left, can be set to right). Only used
         * for the first display or when a selected date is not already visible.
         */
        mainCalendar?: string;

        /**
         * Define a class name that can be used as a hook for styling different
         * themes. Default: null.
         */
        theme?: string;

        /**
         * The default flag for moment's strict date parsing (requires Moment.js for custom formatting). Default: false
         */
        formatStrict?: boolean;

        /**
         * Function which will be used for parsing input string and getting a date object from it.
         * This function will take precedence over moment.
         */
        parse?(date: string, format: string): Date;

        /**
         * Callback function for when a date is selected.
         */
        onSelect?(date: Date): void;

        /**
         * Callback function for when the picker becomes visible.
         */
        onOpen?(): void;

        /**
         * Callback function for when the picker is hidden.
         */
        onClose?(): void;

        /**
         * Callback function for when the picker draws a new month.
         */
        onDraw?(): void;
    }
}
