// Type definitions for clndr 1.4
// Project: https://github.com/kylestetz/CLNDR
// Definitions by: jasperjn <https://github.com/jasperjn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

import * as moment from 'moment';

export as namespace Clndr;

/**
 * The clndr instance
 */
export interface ClndrInstance {
    /**
     * Get clndr options
     */
    options: ClndrOptions;
    /**
     * Go to the next month
     */
    forward(): this;
    /**
     * Go to the previous month
     */
    back(): this;
    /**
     * Set the month using a number from 0-11 or a month name
     */
    setMonth(month: number | string): this;
    /**
     * Go to the next year
     */
    nextYear(): this;
    /**
     * Go to the previous year
     */
    previousYear(): this;
    /**
     * Set the year
     */
    setYear(year: number): this;
    /**
     * Go to today
     */
    today(): this;
    /**
     * Change the events. Note that this triggers a re-render of the calendar.
     */
    setEvents(events: any[]): this;
    /**
     * Add events. Note that this triggers a re-render of the calendar.
     */
    addEvents(events: any[]): this;
    /**
     * Remove events.  All events for which the passed in function returns true will
     * be removed from the calendar. Note that this triggers a re-render of the
     * calendar.
     */
    removeEvents(filter: (event: any) => boolean): this;
    /**
     * Re-render of the calendar.
     */
    render(): void;
    /**
     * Destroy the clndr instance. This will empty the DOM node containing the
     * calendar.
     */
    destroy(): void;
}

export interface ClndrOptions {
    /**
     * the template: this could be stored in markup as a <script type="text/template"></script>
     * or pulled in as a string
     */
    template?: string;
    /**
     * determines which month to start with using either a date string or a moment object.
     */
    startWithMonth?: string | moment.Moment;
    /**
     * Start the week off on Sunday (0), Monday (1), etc. Sunday is the default.
     * WARNING: if you are dealing with i18n and multiple languages, you
     * probably don't want this! See the "Internationalization" section below
     * for more.
     */
    weekOffset?: number;
    /**
     * An array of day abbreviation labels. If you have moment.js set to a
     * different language, it will guess these for you! If for some reason that
     * doesn't work, use this...
     * WARNING: if you are dealing with i18n and multiple languages, you
     * probably don't want this! See the "Internationalization" section below
     * for more.
     */
    daysOfTheWeek?: string[];
    /**
     * the target classnames that CLNDR will look for to bind events. these are the defaults.
     */
    targets?: Targets;
    /**
     * Custom classes to avoid styling issues. pass in only the classnames that
     * you wish to override. These are the defaults.
     */
    classes?: Classes;
    /**
     * callbacks!
     */
    clickEvents?: ClickEvents;
    /**
     * Use the 'touchstart' event instead of 'click'
     */
    useTouchEvents?: boolean;
    /**
     * This is called only once after clndr has been initialized and rendered.
     * use this to bind custom event handlers that don't need to be re-attached
     * every time the month changes (most event handlers fall in this category).
     * Hint: this.element refers to the parent element that holds the clndr,
     * and is a great place to attach handlers that don't get tossed out every
     * time the clndr is re-rendered.
     */
    ready?(): void;
    /**
     * A callback when the calendar is done rendering. This is a good place
     * to bind custom event handlers (also see the 'ready' option above).
     */
    doneRendering?(): void;
    /** an array of event objects */
    events?: any[];
    /**
     * if you're supplying an events array, dateParameter points to the field in your event object containing a date string. It's set to 'date' by default.
     */
    dateParameter?: string;
    /**
     * CLNDR can accept events lasting more than one day! just pass in the
     * multiDayEvents option and specify what the start and end fields are
     * called within your event objects. See the example file for a working
     * instance of this.
     */
    multiDayEvents?: MultiDayEvents;
    /**
     * show the numbers of days in months adjacent to the current month (and populate them with their events). defaults to true.
     */
    showAdjacentMonths?: boolean;
    /**
     * when days from adjacent months are clicked, switch the current month.
     * fires nextMonth/previousMonth/onMonthChange click callbacks. defaults to false.
     */
    adjacentDaysChangeMonth?: boolean;
    /**
     * Always make the calendar six rows tall (42 days) so that every month has
     * a consistent height. defaults to 'false'.
     */
    forceSixRows?: boolean | null;
    /**
     * Set this to true, if you want the plugin to track the last clicked day.
     * If trackSelectedDate is true, "selected" class will always be applied
     * only to the most recently clicked date; otherwise - selectedDate will
     * not change.
     */
    trackSelectedDate?: boolean;
    /**
     * Set this, if you want a date to be "selected" (see classes.selected)
     * after plugin init. Defualts to null, no initially selected date.
     */
    selectedDate?: any;
    /**
     * Set this to true if you don't want `inactive` dates to be selectable.
     * This will only matter if you are using the `constraints` option.
     */
    ignoreInactiveDaysInSelection?: boolean | null;
    // CLNDR can render in any time interval!
    // You can specify if you want to render one or more months, or one ore more
    // days in the calendar, as well as the paging interval whenever forward or
    // back is triggered. If both months and days are null, CLNDR will default
    // to the standard monthly view.
    lengthOfTime?: LengthOfTime;
    /**
     * Any other data variables you want access to in your template. This gets
     * passed into the template function.
     */
    extras?: any;
    /**
     * If you want to use a different templating language, here's your ticket.
     * Precompile your template (before you call clndr), pass the data from the
     * render function into your template, and return the result. The result
     * must be a string containing valid markup. The keyword 'this' is set to
     * the clndr instance in case you need access to any other properties.
     * More under 'Template Rendering Engine' below.
     */
    render?(data: RenderData): void;
    // If you want to prevent the user from navigating the calendar outside
    // of a certain date range (e.g. if you are making a datepicker), specify
    // either the startDate, endDate, or both in the constraints option. You
    // can change these while the calendar is on the page... See documentation
    // below for more on this!
    constraints?: Constraints;
    /**
     * Optionally, you can pass a Moment instance to use instead of the global
     */
    moment?: moment.Moment | null;
}

export interface ClickEvents {
    /**
     * Fired whenever a calendar box is clicked. Returns a 'target' object
     * containing the DOM element, any events, and the date as a moment.js
     * object.
     */
    click?(target: Target): void;
    /**
     * Fired when a user goes to the current month and year. Returns a
     * moment.js object set to the correct month.
     */
    today?(month: moment.Moment): void;
    /**
     * Fired when a user goes forward a month. Returns a moment.js object
     * set to the correct month.
     */
    nextMonth?(month: moment.Moment): void;
    /**
     * Fired when a user goes back a month. Returns a moment.js object set
     * to the correct month.
     *
     */
    previousMonth?(month: moment.Moment): void;
    /**
     * Fires any time the month changes as a result of a click action.
     * Returns a moment.js object set to the correct month.
     */
    onMonthChange?(month: moment.Moment): void;
    /**
     * Fired when the next year button is clicked. Returns a moment.js
     * object set to the correct month and year.
     */
    nextYear?(month: moment.Moment): void;
    /**
     * Fired when the previous year button is clicked. Returns a moment.js
     * object set to the correct month and year.
     */
    previousYear?(month: moment.Moment): void;
    /**
     * Fires any time the year changes as a result of a click action. If
     * onMonthChange is also set, it is fired BEFORE onYearChange. Returns
     * a moment.js object set to the correct month and year.
     */
    onYearChange?(month: moment.Moment): void;
    /**
     * Fired when a user goes forward a period. Returns moment.js objects
     * for the updated start and end date.
     */
    nextInterval?(start: moment.Moment, end: moment.Moment): void;
    /**
     * Fired when a user goes back an interval. Returns moment.js objects for
     * the updated start and end date.
     */
    previousInterval?(start: moment.Moment, end: moment.Moment): void;
    /**
     * Fired whenever the time period changes as configured in lengthOfTime.
     * Returns moment.js objects for the updated start and end date.
     */
    onIntervalChange?(start: moment.Moment, end: moment.Moment): void;
}

export interface Target {
    date: moment.Moment;
    element: Element;
    events: any[];
}

/**
 * the target classnames that CLNDR will look for to bind events. these are the defaults.
 */
export interface Targets {
    day?: string;
    empty?: string;
    nextButton?: string;
    todayButton?: string;
    previousButton?: string;
    nextYearButton?: string;
    previousYearButton?: string;
}

/**
 * Custom classes to avoid styling issues. pass in only the classnames that
 * you wish to override. These are the defaults.
 */
export interface Classes {
    past?: string;
    today?: string;
    event?: string;
    selected?: string;
    inactive?: string;
    lastMonth?: string;
    nextMonth?: string;
    adjacentMonth?: string;
}

/**
 * CLNDR can accept events lasting more than one day! just pass in the
 * multiDayEvents option and specify what the start and end fields are
 * called within your event objects. See the example file for a working
 * instance of this.
 */
export interface MultiDayEvents {
    endDate?: string;
    startDate?: string;
    /**
     * If you also have single day events with a different date field,
     * use the singleDay property and point it to the date field.
     */
    singleDay?: string;
}

/**
 * CLNDR can render in any time interval!
 * You can specify if you want to render one or more months, or one ore more
 * days in the calendar, as well as the paging interval whenever forward or
 * back is triggered. If both months and days are null, CLNDR will default
 * to the standard monthly view.
 */
export interface LengthOfTime {
    /**
     * Set to an integer if you want to render one or more months, otherwise
     * leave this null
     */
    months?: number | null;
    /**
     * Set to an integer if you want to render one or more days, otherwise
     * leave this null. Setting this to 14 would render a 2-week calendar.
     *
     */
    days?: number | null;
    /**
     * This is the amount of months or days that will move forward/back when
     * paging the calendar. With days=14 and interval=7, you would have a
     * 2-week calendar that pages forward and backward 1 week at a time.
     */
    interval?: number;
}

export interface RenderData {
    days: CalendarDay[];
    daysOfTheWeek: string[];
    eventsLastMonth: any[];
    eventsNextMonth: any[];
    eventsThisInterval?: any[];
    eventsThisMonth: any[];
    extras?: any;
    intervalEnd?: moment.Moment;
    intervalStart?: moment.Moment;
    month: string;
    months: Month[];
    numberOfRows: number;
    year: number;
}

export interface Month {
    days: CalendarDay[];
    month: moment.Moment;
}

export interface CalendarDay {
    classes: string;
    date: moment.Moment;
    day: number;
    events: any[];
    properties: CalendarDayProperties;
}

export interface CalendarDayProperties {
    isToday: boolean;
    isInactive: boolean;
    isAdjacentMonth: boolean;
}

/**
 * If you want to prevent the user from navigating the calendar outside
 * of a certain date range (e.g. if you are making a datepicker), specify
 * either the startDate, endDate, or both in the constraints option. You
 * can change these while the calendar is on the page... See documentation
 * below for more on this!
 */
export interface Constraints {
    startDate?: string;
    endDate?: string;
}

declare global {
    interface JQuery {
        clndr(options?: ClndrOptions): ClndrInstance;
    }
}
