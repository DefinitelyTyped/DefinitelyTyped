// Type definitions for FullCalendar 2.7
// Project: http://fullcalendar.io/
// Definitions by: Neil Stalker <https://github.com/nestalk>, Marcelo Camargo <https://github.com/hasellcamargo>, Patrick Niemann <https://github.com/panic175>
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

export interface Options extends AgendaOptions, EventDraggingResizingOptions, DroppingExternalElementsOptions, SelectionOptions {
    // General display - http://fullcalendar.io/docs/display/

    header?: boolean | Header;
    theme?: boolean;
    buttonIcons?: {
        prev: string;
        next: string;
    };
    firstDay?: number;
    isRTL?: boolean;
    weekends?: boolean;
    hiddenDays?: number[];
    weekMode?: string;
    weekNumbers?: boolean;
    weekNumberCalculation?: any; // String/Function
    businessHours?: boolean | BusinessHours | BusinessHours[];
    height?: number | 'auto' | 'parent';
    contentHeight?: number;
    aspectRatio?: number;
    handleWindowResize?: boolean;
    views?: ViewSpecificOptions;
    viewRender?(view: ViewObject, element: JQuery): void;
    viewDestroy?(view: ViewObject, element: JQuery): void;
    dayRender?(date: Date, cell: JQuery): void;
    windowResize?(view: ViewObject): void;

    // Timezone
    timezone?: string | boolean;
    now?: moment.Moment | Date | string | (() => moment.Moment);

    // Views - http://fullcalendar.io/docs/views/

    defaultView?: string;

    // Current Date - http://fullcalendar.io/docs/current_date/

    defaultDate?: moment.Moment | Date | string;
    year?: number;
    month?: number;
    date?: number;

    // Text/Time Customization - http://fullcalendar.io/docs/text/

    timeFormat?: any; // String
    columnFormat?: any; // String
    titleFormat?: any; // String

    buttonText?: ButtonTextObject;
    monthNames?: string[];
    monthNamesShort?: string[];
    dayNames?: string[];
    dayNamesShort?: string[];
    weekNumberTitle?: string;

    // Clicking & Hovering - http://fullcalendar.io/docs/mouse/

    dayClick?(date: Date, jsEvent: MouseEvent, view: ViewObject): void;
    eventClick?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): any; // return type boolean or void
    eventMouseover?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): void;
    eventMouseout?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): void;

    // Event Data - http://fullcalendar.io/docs/event_data/

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
    eventLimit?: boolean;

    // Event Rendering - http://fullcalendar.io/docs/event_rendering/

    eventColor?: string;
    eventBackgroundColor?: string;
    eventBorderColor?: string;
    eventTextColor?: string;
    eventRender?(event: EventObject, element: JQuery, view: ViewObject): void;
    eventAfterRender?(event: EventObject, element: JQuery, view: ViewObject): void;
    eventAfterAllRender?(view: ViewObject): void;
    eventDestroy?(event: EventObject, element: JQuery, view: ViewObject): void;

    // scheduler options
    resourceAreaWidth?: number;
    schedulerLicenseKey?: string;
    customButtons?: any;
    resourceLabelText?: any;
    resourceColumns?: any;
    displayEventTime?: any;
}

/**
 * Agenda Options - http://fullcalendar.io/docs/agenda/
 */
export interface AgendaOptions {
    allDaySlot?: boolean;
    allDayText?: string;
    slotDuration?: moment.DurationInputArg1;
    slotLabelFormat?: string;
    slotLabelInterval?: moment.Duration;
    snapDuration?: moment.Duration;
    scrollTime?: moment.Duration;
    minTime?: moment.Duration; // Integer/String
    maxTime?: moment.Duration; // Integer/String
    slotEventOverlap?: boolean;
}

/*
* Event Dragging & Resizing
*/
export interface EventDraggingResizingOptions {
    editable?: boolean;
    eventStartEditable?: boolean;
    eventDurationEditable?: boolean;
    dragRevertDuration?: number; // integer, milliseconds
    dragOpacity?: number; // float
    dragScroll?: boolean;
    eventOverlap?: boolean | ((stillEvent: EventObject, movingEvent: EventObject) => boolean);
    eventConstraint?: "businessHours" | BusinessHours | Timespan;
    eventDragStart?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;
    eventDragStop?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;
    eventDrop?(event: EventObject, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: ViewObject): void;
    eventResizeStart?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;
    eventResizeStop?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;
    eventResize?(event: EventObject, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: ViewObject): void;
}
/*
    * Selection - http://fullcalendar.io/docs/selection/
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

export interface DroppingExternalElementsOptions {
    droppable?: boolean;
    dropAccept?: string | ((draggable: any) => boolean);
    drop?(date: moment.Moment, jsEvent: MouseEvent, ui: any): void;
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
}

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

export interface ViewObject extends Timespan {
    name: string;
    title: string;
    intervalStart: moment.Moment;
    intervalEnd: moment.Moment;
}

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
        fullCalendar(method: 'changeView', viewName: string): void;

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
