// Type definitions for FullCalendar 3.5
// Project: http://fullcalendar.io/
// Definitions by: Neil Stalker <https://github.com/nestalk>,
//                 Marcelo Camargo <https://github.com/hasellcamargo>,
//                 Patrick Niemann <https://github.com/panic175>
//                 Hadrien Milano <https://github.com/hmil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

import * as moment from 'moment';

export as namespace FC;

export interface Calendar {
    /**
     * Gets the version of Fullcalendar
     */
    version: string;
}

export interface BusinessHours {
    start: moment.Duration | string | Date;
    end: moment.Duration | string | Date;
    dow: number[];
}

export interface Timespan {
    start: moment.Moment | string | Date;
    end?: moment.Moment | string | Date;
}

export interface Header {
    left: string;
    center: string;
    right: string;
}

export interface CustomButtonDefinition {
    text: string;
    click(element: JQuery): void;
    icon?: string;
    themeIcon?: string;
    bootstrapGlyphicon?: string;
}

export interface ButtonIconsDefinition {
    prev: string;
    next: string;
    prevYear: string;
    nextYear: string;
}

export interface EventSegment {
    /**
     * the Event Object
     */
    event: EventObject;

    /**
     * the Moment for when this stretch of the event begins
     */
    start: moment.Moment;

    /**
     * the Moment for when this stretch of the event ends (exclusive)
     */
    end: moment.Moment;

    /**
     * boolean if this is chronologically the first segment for the event
     */
    isStart: boolean;

    /**
     * boolean if this is chronologically the last segment for the event
     */
    isEnd: boolean;
}

export interface CellInfo {
    /**
     * the Moment date of the day
     */
    date: moment.Moment;

    /**
     * jQuery element for the day cell
     */
    dayEl: JQuery;

    /**
     * jQuery element for the "more" link
     */
    moreEl: JQuery;

    /**
     * array of all event "segment" objects for the given day
     */
    segs: EventSegment[];

    /**
     * array of only the segment objects that were not displayed prior
     */
    hiddenSegs: EventSegment[];
}

export interface TimeRange {
    start: string | Date | moment.Moment;
    end: string | Date | moment.Moment;
}

export interface DropInfo {
    start: moment.Moment;

    /**
     *  exclusive end date/time
     */
    end: moment.Moment;

    /**
     *  if you are using a Resource View
     */
    resourceId?: string;
}

export interface Options extends
        GeneralDisplayOptions,
        TimezoneOptions,
        ViewsOptions,
        AgendaOptions,
        ListViewOptions,
        CurrentDateOptions,
        TextTimeCustomizationOptions,
        ClickingAndHoveringOptions,
        SelectionOptions,
        EventDataOptions,
        EventRenderingOptions,
        EventDraggingResizingOptions,
        DroppingExternalElementsOptions {
    // scheduler options
    resourceAreaWidth?: number;
    schedulerLicenseKey?: string;
    resourceLabelText?: any;
    resourceColumns?: any;
    displayEventTime?: any;
}

/**
 * General display - https://fullcalendar.io/docs/display/
 */
export interface GeneralDisplayOptions {
    /**
     * Defines the buttons and title at the top of the calendar.
     *
     * default:
     *  {
     *      left:   'title',
     *      center: '',
     *      right:  'today prev,next'
     *  }
     */
    header?: boolean | Header;

    /**
     * Renders a set of controls at the bottom of the calendar.
     *
     * default: false
     */
    footer?: boolean | Header;

    /**
     * Defines custom buttons that can be used in the header.
     */
    customButtons?: { [name: string]: CustomButtonDefinition };

    /**
     * Determines which icons are displayed in buttons of the header.
     *
     * default:
     *  {
     *      prev: 'left-single-arrow',
     *      next: 'right-single-arrow',
     *      prevYear: 'left-double-arrow',
     *      nextYear: 'right-double-arrow'
     *  }
     *
     */
    buttonIcons?: boolean | ButtonIconsDefinition;

    /**
     * Renders the calendar with a given theme system.
     *
     * default: 'standard'
     */
    themeSystem?: 'standard' | 'bootstrap3' | 'jquery-ui';

    /**
     * Determines which icons are displayed in buttons of the header when jQuery UI theming is on.
     */
    themeButtonIcons?: boolean | ButtonIconsDefinition;

    /**
     * Determines which icons are displayed in buttons of the header when Bootstrap theming is on.
     */
    bootstrapGlyphicons?: boolean | ButtonIconsDefinition;

    /**
     * The day that each week begins.
     *
     * 0 = Sunday
     *
     * default: set by the current `locale`
     */
    firstDay?: number;

    /**
     * Displays the calendar in right-to-left mode.
     *
     * default: false
     */
    isRTL?: boolean;

    /**
     * Whether to include Saturday/Sunday columns in any of the calendar views.
     *
     * default: true
     */
    weekends?: boolean;

    /**
     * Exclude certain days-of-the-week from being displayed.
     *
     * default: []
     */
    hiddenDays?: number[];

    /**
     * Determines the number of weeks displayed in a month view.
     *
     * default: true
     */
    fixedWeekCount?: boolean;

    /**
     * Determines if week numbers should be displayed on the calendar.
     *
     * default: false
     */
    weekNumbers?: boolean;

    /**
     * Determines the styling for week numbers in month view and the basic views.
     *
     * default: false
     */
    weekNumbersWithinDays?: boolean;

    /**
     * The method for calculating week numbers that are displayed with the weekNumbers setting.
     *
     * default: 'local'
     */
    weekNumberCalculation?: 'local' | 'ISO' | ((m: moment.Moment) => number);

    /**
     * Emphasizes certain time slots on the calendar. By default, Monday-Friday, 9am-5pm.
     *
     * default: false
     */
    businessHours?: boolean | BusinessHours | BusinessHours[];

    /**
     * In month view, whether dates in the previous or next month should be rendered at all.
     *
     * default: true
     */
    showNonCurrentDates?: boolean;

    /**
     * Will make the entire calendar (including header) a pixel height.
     *
     * default: undefined
     */
    height?: number | 'auto' | 'parent' | (() => number);

    /**
     * Will make the calendar's content area a pixel height.
     */
    contentHeight?: number | 'auto' | (() => number);

    /**
     * Determines the width-to-height aspect ratio of the calendar.
     *
     * default: 1.35
     */
    aspectRatio?: number;

    /**
     * Whether to automatically resize the calendar when the browser window resizes.
     *
     * default: true
     */
    handleWindowResize?: boolean;

    /**
     * Time, in milliseconds, the calendar will wait to adjust its size after a window resize event occurs.
     *
     * default: 100
     */
    windowResizeDelay?: number;

    /**
     * Limits the number of events displayed on a day.
     *
     * default: false
     */
    eventLimit?: boolean | number;

    /**
     * Determines the action taken when the user clicks on a "more" link created by the eventLimit option.
     */
    eventLimitClick?: 'popover' | 'week' | 'day' | string | ((cellinfo: CellInfo, jsevent: Event) => void);

    /**
     * Triggered when a new date-range is rendered, or when the view type switches.
     */
    viewRender?(view: ViewObject, element: JQuery): void;

    /**
     * Triggered when a rendered date-range needs to be torn down.
     */
    viewDestroy?(view: ViewObject, element: JQuery): void;

    /**
     * A hook for modifying a day cell.
     */
    dayRender?(date: moment.Moment, cell: JQuery): void;

    /**
     * Triggered after the calendar's dimensions have been changed due to the browser window being resized.
     */
    windowResize?(view: ViewObject): void;
}

/**
 * Timezone - https://fullcalendar.io/docs/timezone/
 */
export interface TimezoneOptions {
    /**
     * Determines the timezone in which dates throughout the API are parsed and rendered.
     *
     * default: false
     */
    timezone?: string | boolean;

    /**
     * Explicitly sets the "today" date of the calendar. This is the day that is normally highlighted in yellow.
     */
    now?: moment.Moment | Date | string | (() => moment.Moment);
}

/**
 * Views - https://fullcalendar.io/docs/views/
 */
export interface ViewsOptions {
    /**
     * The initial view when the calendar loads.
     *
     * default: 'month'
     */
    defaultView?: string;

    views?: ViewSpecificOptions;
}

/**
 * Agenda Options - https://fullcalendar.io/docs/agenda/
 */
export interface AgendaOptions {
    /**
     * Determines if the "all-day" slot is displayed at the top of the calendar.
     *
     * default: true
     */
    allDaySlot?: boolean;

    /**
     * The text titling the "all-day" slot at the top of the calendar.
     *
     * default: 'all-day'
     */
    allDayText?: string;

    /**
     * The frequency for displaying time slots.
     *
     * default: '00:30:00'
     */
    slotDuration?: moment.Duration;

    /**
     * Determines the time-text that will be displayed on the vertical axis of the agenda views.
     *
     * default: 'h(:mm)a'
     */
    slotLabelFormat?: string;

    /**
     * Determines how often the time-axis is labeled with text displaying the date/time of slots.
     */
    slotLabelInterval?: moment.Duration;

    /**
     * The time interval at which a dragged event will snap to the agenda view time grid. Also affects the granularity at which `selections` can be made.
     */
    snapDuration?: moment.Duration;

    /**
     * Determines how far down the scroll pane is initially scrolled down.
     *
     * default: '06:00:00' (6am)
     */
    scrollTime?: moment.Duration;

    /**
     * Determines the starting time that will be displayed, even when the scrollbars have been scrolled all the way up.
     *
     * default: "00:00:00"
     */
    minTime?: moment.Duration;

    /**
     * Determines the end time (exclusively) that will be displayed, even when the scrollbars have been scrolled all the way down.
     *
     * default: "24:00:00"
     */
    maxTime?: moment.Duration;

    /**
     * Determines if timed events in agenda view should visually overlap.
     *
     * default: true
     */
    slotEventOverlap?: boolean;
}

/**
 * List View - https://fullcalendar.io/docs/list_view/
 */
export interface ListViewOptions {
    /**
     * A date formatting string that affects the text on the left side of the day headings in list view.
     */
    listDayFormat?: string | boolean;

    /**
     * A date formatting string that affects the text on the right side of the day headings in list view.
     */
    listDayAltFormat?: string | boolean;

    /**
     * The text that is displayed in the middle of list view, alerting the user that there are no events within the given range.
     *
     * default: "No events to display"
     */
    noEventsMessage?: string;
}

/**
 *  Current Date - https://fullcalendar.io/docs/current_date/
 */
export interface CurrentDateOptions {
    /**
     * The initial date displayed when the calendar first loads.
     */
    defaultDate?: moment.Moment | Date | string;

    /**
     * Whether or not to display a marker indicating the current time.
     *
     * default: false
     */
    nowIndicator?: boolean;

    /**
     * Sets the exact date range that is visible in a view.
     */
    visibleRange?: ((currentDate: moment.Moment) => TimeRange) | TimeRange;

    /**
     * Limits which dates the user can navigate to and where events can go.
     */
    validRange?: TimeRange;

    /**
     * How far into the future/past the calendar navigates when prev/next is executed.
     */
    dateIncrement?: moment.Duration;

    /**
     * Determines the first visible day for a Custom or Generic view.
     */
    dateAlignment?: string;

    /**
     * Sets the exact duration of a Custom or Generic view.
     */
    duration?: moment.Duration;

    /**
     * Sets the exact number of days displayed in a Custom or Generic view, regardless of weekends or hiddenDays.
     */
    dayCount?: number;
}

/**
 * Text/Time Customization - https://fullcalendar.io/docs/text/
 */
export interface TextTimeCustomizationOptions {
    /**
     * Customize the language and localization options for the calendar.
     *
     * default 'en'
     */
    locale?: string;

    /**
     * Determines the time-text that will be displayed on each event.
     */
    timeFormat?: string;

    /**
     * Determines the text that will be displayed on the calendar's column headings.
     */
    columnFormat?: string;

    /**
     * Determines the text that will be displayed in the header's title.
     */
    titleFormat?: string;

    /**
     * Text that will be displayed on buttons of the header.
     */
    buttonText?: ButtonTextObject;

    /**
     * Full names of months.
     */
    monthNames?: string[];

    /**
     * Abbreviated names of months.
     */
    monthNamesShort?: string[];

    /**
     * Full names of days-of-week.
     */
    dayNames?: string[];

    /**
     * Abbreviated names of days-of-week.
     */
    dayNamesShort?: string[];

    /**
     * The heading text for week numbers.
     *
     * default: 'W'
     */
    weekNumberTitle?: string;

    /**
     * Whether or not to display the text for an event's time.
     */
    displayEventTime?: boolean;

    /**
     * Whether or not to display an event's end time text when it is rendered on the calendar.
     */
    displayEventEnd?: boolean;

    /**
     * Determines the text of the link created by eventLimit setting.
     *
     * default: "more"
     */
    eventLimitText?: string | ((nEvents: number) => string);

    /**
     * Determines the date format of title of the popover created by the eventLimitClick option.
     */
    dayPopoverFormat?: string;
}

/**
 * Clicking & Hovering - https://fullcalendar.io/docs/mouse/
 */
export interface ClickingAndHoveringOptions {
    /**
     * Determines if day names and week names are clickable.
     *
     * default: false
     */
    navLinks?: boolean;

    /**
     * Determines what happens upon a day heading nav-link click.
     */
    navLinkDayClick?: string | ((date: any, jsEvent: Event) => void);

    /**
     * Determines what happens upon a week-number nav-link click.
     */
    navLinkWeekClick?: string | ((weekStart: any, jsEvent: Event) => void);

    /**
     * Triggered when the user clicks on a day.
     */
    dayClick?(date: Date, jsEvent: MouseEvent, view: ViewObject): void;

    /**
     * Triggered when the user clicks an event.
     */
    eventClick?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): boolean | void; // return type boolean or void

    /**
     * Triggered when the user mouses over an event.
     */
    eventMouseover?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): void;

    /**
     * Triggered when the user mouses out of an event.
     */
    eventMouseout?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): void;
}

/**
 * Selection - https://fullcalendar.io/docs/selection/
 */
export interface SelectionOptions {
    selectable?: boolean;
    selectHelper?: boolean;
    unselectAuto?: boolean;
    unselectCancel?: string;
    selectOverlap?: boolean | ((event: EventObject) => boolean);
    selectConstraint?: Timespan | BusinessHours;
    select?(start: moment.Moment, end: moment.Moment, jsEvent: MouseEvent, view: ViewObject, resource?: any): void;
    unselect?(view: ViewObject, jsEvent: Event): void;
}

/**
 * Event Data - https://fullcalendar.io/docs/event_data/
 *
 * TODO: update interface to v3
 */
export interface EventDataOptions {
    /**
     * This has one of the following types:
     *
     * - EventObject[]
     * - string (JSON feed)
     * - (start: moment.Moment, end: moment.Moment, timezone: string | boolean, callback: {(events: EventObject[]) => void;}) => void;
     */
    events?: any;

    /**
     * An array, each element being one of the following types:
     *
     * - EventSource
     * - EventObject[]
     * - string (JSON feed)
     * - (start: moment.Moment, end: moment.Moment, timezone: string | boolean, callback: {(events: EventObject[]) => void;}) => void;
     */
    eventSources?: any[];

    allDayDefault?: boolean;
    startParam?: string;
    endParam?: string;
    lazyFetching?: boolean;
    eventDataTransform?(eventData: any): EventObject;
    loading?(isLoading: boolean, view: ViewObject): void;
}

/**
 * Event Rendering - https://fullcalendar.io/docs/event_rendering/
 */
export interface EventRenderingOptions {
    /**
     * Sets the background and border colors for all events on the calendar.
     */
    eventColor?: string;

    /**
     * Sets the background color for all events on the calendar.
     */
    eventBackgroundColor?: string;

    /**
     * Sets the border color for all events on the calendar.
     */
    eventBorderColor?: string;

    /**
     * Sets the text color for all events on the calendar.
     */
    eventTextColor?: string;

    /**
     * When an event's end time spans into another day, the minimum time it must be in order for it to render as if it were on that day.
     *
     * default: "09:00:00" (9am)
     */
    nextDayThreshold?: moment.Duration;

    /**
     * Determines the vertical ordering events that have the same dates / times.
     *
     * default 'title'
     */
    eventOrder?: string | Array<((a: EventObject, b: EventObject) => number) | (string | ((a: EventObject, b: EventObject) => number))>;

    /**
     * The amount of milliseconds to wait after an operation, before rendering events.
     *
     * default: null
     */
    eventRenderWait?: number | null;

    /**
     * Triggered while an event is being rendered.
     */
    eventRender?(event: EventObject, element: JQuery, view: ViewObject): void;

    /**
     * Triggered after an event has been placed on the calendar in its final position.
     */
    eventAfterRender?(event: EventObject, element: JQuery, view: ViewObject): void;

    /**
     * Triggered after all events have finished rendering.
     */
    eventAfterAllRender?(view: ViewObject): void;

    /**
     * Called before an event's element is removed from the DOM.
     */
    eventDestroy?(event: EventObject, element: JQuery, view: ViewObject): void;
}

/**
 * Event Dragging & Resizing - https://fullcalendar.io/docs/event_ui/
 */
export interface EventDraggingResizingOptions {
    /**
     * Determines whether the events on the calendar can be modified.
     *
     * default: false
     */
    editable?: boolean;

    /**
     * Allow events' start times to be editable through dragging.
     *
     * default: true
     */
    eventStartEditable?: boolean;

    /**
     * Allow events' durations to be editable through resizing.
     *
     * default: true
     */
    eventDurationEditable?: boolean;

    /**
     * Time it takes for an event to revert to its original position after an unsuccessful drag.
     *
     * default: 500
     */
    dragRevertDuration?: number; // integer, milliseconds

    /**
     * The opacity of an event while it is being dragged.
     *
     * default: .75
     */
    dragOpacity?: number;

    /**
     * Whether to automatically move scroll containers during event drag-and-drop or while selecting.
     *
     * default: true
     */
    dragScroll?: boolean;

    /**
     * Determines if events on the calendar, when dragged and resized, are allowed to overlap each other.
     *
     * default: true
     */
    eventOverlap?: boolean | ((stillEvent: EventObject, movingEvent: EventObject) => boolean);

    /**
     * Limits event dragging and resizing to certain windows of time.
     */
    eventConstraint?: "businessHours" | BusinessHours | Timespan | string;

    /**
     * Exact programmatic control over where an event can be dropped.
     */
    eventAllow?: ((dropInfo: DropInfo, draggedEvent: Event) => boolean);

    /**
     * For touch devices, the amount of time the user most hold down before an event becomes draggable or a date becomes selectable.
     *
     * default: 1000
     */
    longPressDelay?: number;

    /**
     * For touch devices, the amount of time the user most hold down before an event becomes draggable.
     *
     * default: 1000
     */
    eventLongPressDelay?: number;

    /**
     * Triggered when event dragging begins.
     */
    eventDragStart?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;

    /**
     * Triggered when event dragging stops.
     */
    eventDragStop?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;

    /**
     * Triggered when dragging stops and the event has moved to a different day/time.
     */
    eventDrop?(event: EventObject, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: ViewObject): void;

    /**
     * Triggered when event resizing begins.
     */
    eventResizeStart?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;

    /**
     * Triggered when event resizing stops.
     */
    eventResizeStop?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;

    /**
     * Triggered when resizing stops and the event has changed in duration.
     */
    eventResize?(event: EventObject, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: ViewObject): void;
}

/**
 * Dropping External Elements - https://fullcalendar.io/docs/dropping/
 */
export interface DroppingExternalElementsOptions {
    /**
     * Determines if jQuery UI draggables can be dropped onto the calendar.
     *
     * default: false
     */
    droppable?: boolean;

    /**
     * Provides a way to filter which elements can be dropped onto the calendar.
     */
    dropAccept?: string | ((draggable: any) => boolean);

    /**
     * Called when a valid jQuery UI draggable has been dropped onto the calendar.
     */
    drop?(date: moment.Moment, jsEvent: MouseEvent, ui: any): void;

    /**
     * Called when an external element, containing event data, is dropped on the calendar.
     */
    eventReceive?(event: EventObject): void;
}

export interface ButtonTextObject {
    prev?: string;
    next?: string;
    prevYear?: string;
    nextYear?: string;
    today?: string;
    month?: string;
    week?: string;
    day?: string;
    list?: string;
}

// TODO: check compatibility with v3 and update if necessary
/* Refer to http://fullcalendar.io/docs/event_data/Event_Object/ */
export interface EventObject extends Timespan {
    id?: any; // String/number
    title: string;
    allDay?: boolean;
    url?: string;
    className?: string | string[];
    editable?: boolean;
    startEditable?: boolean;
    durationEditable?: boolean;
    rendering?: string;
    overlap?: boolean;
    constraint?: Timespan | BusinessHours;
    source?: EventSource;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    // non-standard fields, see https://fullcalendar.io/docs/event_data/Event_Object/ and https://fullcalendar.io/docs/event_rendering/eventRender/
    [x: string]: any;
}

// TODO: check compatibility with v3 and update if necessary
export interface ViewObject extends Timespan {
    name: string;
    title: string;
    intervalStart: moment.Moment;
    intervalEnd: moment.Moment;
}

// TODO: check compatibility with v3 and update if necessary
export interface EventSource extends JQueryAjaxSettings {
    /**
     * This has one of the following types:
     *
     * - EventObject[]
     * - string (JSON feed)
     * - (start: moment.Moment, end: moment.Moment, timezone: string | boolean, callback: {(events: EventObject[]) => void;}) => void;
     */
    events?: any;

    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    className?: any; // string/string[]
    editable?: boolean;
    allDayDefault?: boolean;
    ignoreTimezone?: boolean;
    eventTransform?: any;
    startParam?: string;
    endParam?: string;
}

/*
* View Specific Options - http://fullcalendar.io/docs/views/View-Specific-Options/
* TODO: check compatibility with v3 and update if necessary
*/
export interface ViewSpecificOptions {
    basic?: Options;
    agenda?: Options;
    week?: Options;
    day?: Options;
    month?: Options;
    basicWeek?: Options;
    basicDay?: Options;
    agendaWeek?: Options;
    agendaDay?: Options;
}

declare global {
    // TODO: check compatibility with v3 and update if necessary
    interface JQuery {
        /**
         * Get/Set option value
         */
        fullCalendar(method: 'option', option: string, value?: any): void;

        /**
         * Immediately forces the calendar to render and/or readjusts its size.
         */
        fullCalendar(method: 'render'): void;

        /**
         * Restores the element to the state before FullCalendar was initialized.
         */
        fullCalendar(method: 'destroy'): void;

        /**
         * Returns the View Object for the current view.
         */
        fullCalendar(method: 'getView'): ViewObject;

        /**
         * Immediately switches to a different view.
         */
        fullCalendar(method: 'changeView', viewName: string, dateOrRange?: moment.Moment | Date | string | TimeRange): void;

        /**
         * Moves the calendar one step back (either by a month, week, or day).
         */
        fullCalendar(method: 'prev'): void;

        /**
         * Moves the calendar one step forward (either by a month, week, or day).
         */
        fullCalendar(method: 'next'): void;

        /**
         * Moves the calendar back one year.
         */
        fullCalendar(method: 'prevYear'): void;

        /**
         * Moves the calendar forward one year.
         */
        fullCalendar(method: 'nextYear'): void;

        /**
         * Moves the calendar to the current date.
         */
        fullCalendar(method: 'today'): void;

        /**
         * Moves the calendar to an arbitrary year/month/date.
         */
        fullCalendar(method: 'gotoDate', year: number, month?: number, date?: number): void;

        /**
         * Moves the calendar to an arbitrary date.
         */
        fullCalendar(method: 'gotoDate', date: moment.Moment | Date | string): void;

        /**
         * Moves the calendar forward/backward an arbitrary amount of time.
         */
        fullCalendar(method: 'incrementDate', year: number, month?: number, date?: number): void;

        /**
         * Returns a Date object for the current date of the calendar.
         */
        fullCalendar(method: 'getDate'): Date;

        /**
         * A method for programmatically selecting a period of time.
         */
        fullCalendar(method: 'select', startDate: Date, endDate: Date, allDay: boolean): void;

        /**
         * A method for programmatically clearing the current selection.
         */
        fullCalendar(method: 'unselect'): void;

        /**
         * Reports changes to an event and renders them on the calendar.
         */
        fullCalendar(method: 'updateEvent', event: EventObject): void;

        /**
         * Reports changes for multiple events and renders them on the calendar.
         */
        fullCalendar(method: 'updateEvents', events: EventObject[]): void;

        /**
         * Retrieves events that FullCalendar has in memory.
         */
        fullCalendar(method: 'clientEvents', idOrfilter?: any): EventObject[];

        /**
         * Retrieves events that FullCalendar has in memory.
         */
        fullCalendar(method: 'clientEvents', idOrfilter?: (e: EventObject) => boolean): EventObject[];

        /**
         * Removes events from the calendar.
         */
        fullCalendar(method: 'removeEvents', idOrfilter?: any): void;

        /**
         * Removes events from the calendar.
         */
        fullCalendar(method: 'removeEvents', idOrfilter?: (e: EventObject) => boolean): void;

        /**
         * Refetches events from all sources and rerenders them on the screen.
         */
        fullCalendar(method: 'refetchEvents'): void;

        /**
         * Dynamically adds an event source.
         */
        fullCalendar(method: 'addEventSource', source: any): void;

        /**
         * Dynamically removes an event source.
         */
        fullCalendar(method: 'removeEventSource', source: any): void;

        /**
         * Renders a new event on the calendar.
         */
        fullCalendar(method: 'renderEvent', event: EventObject, stick?: boolean): void;

        /**
         * Renders new events on the calendar.
         */
        fullCalendar(method: 'renderEvents', events: EventObject[], stick?: boolean): void;

        /**
         * Rerenders all events on the calendar.
         */
        fullCalendar(method: 'rerenderEvents'): void;

        /**
         * Refetches one or more specific event sources.
         */
        fullCalendar(method: 'refetchEventSources', source: any): void;

        /**
         * Create calendar object
         */
        fullCalendar(options: Options): JQuery;

        /**
         * Generic method function
         */
        fullCalendar(method: string, arg1: any, arg2: any, arg3: any): void;
    }

    interface JQueryStatic {
        fullCalendar: Calendar;
    }
}
