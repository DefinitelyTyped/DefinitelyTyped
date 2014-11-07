// Type definitions for FullCalendar 1.6.1
// Project: http://arshaw.com/fullcalendar/
// Definitions by: Neil Stalker <https://github.com/nestalk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module FullCalendar {
    export interface Calendar {

        /**
         * Formats a Date object into a string.
         */
        formatDate(date: Date, format: string, options?: Options): string;

        /**
         * Formats a date range (two Date objects) into a string.
         */
        formatDates(date1: Date, date2: Date, format: string, options?: Options): string;

        /**
         * Parses a string into a Date object.
         */
        parseDate(dateString: string, ignoreTimezone?: boolean): Date;

        /**
         * Parses an ISO8601 string into a Date object.
         */
        parseISO8601(dateString: string, ignoreTimezone?: boolean): Date;

        /**
         * Gets the version of Fullcalendar
         */
        version: string;
    }

    export interface Options {

        // General display - http://arshaw.com/fullcalendar/docs/display/

        header?: {
            left: string;
            center: string;
            right: string;
        }
        theme?: boolean
        buttonIcons?: {
            prev: string;
            next: string;
        }
        firstDay?: number;
        isRTL?: boolean;
        weekends?: boolean;
        hiddenDays?: number[];
        weekMode?: string;
        weekNumbers?: boolean;
        weekNumberCalculation?: any; // String/Function
        height?: number;
        contentHeight?: number;
        aspectRatio?: number;
        handleWindowResize?: boolean;
        viewRender?: (view: View, element: JQuery) => void;
        viewDestroy?: (view: View, element: JQuery) => void;
        dayRender?: (date: Date, cell: HTMLTableDataCellElement) => void;
        windowResize?: (view: View) => void;

        // Views - http://arshaw.com/fullcalendar/docs/views/

        defaultView?: string;

        // Current Date - http://arshaw.com/fullcalendar/docs/current_date/

        year?: number;
        month?: number;
        date?: number;

        // Text/Time Customization - http://arshaw.com/fullcalendar/docs/text/

        timeFormat?: any; // String/ViewOptionHash
        columnFormat?: any; // String/ViewOptionHash
        titleFormat?: any; // String/ViewOptionHash
        buttonText?: ButtonTextObject;
        monthNames?: Array<string>;
        monthNamesShort?: Array<string>;
        dayNames?: Array<string>;
        dayNamesShort?: Array<string>;
        weekNumberTitle?: string;

        // Clicking & Hovering - http://arshaw.com/fullcalendar/docs/mouse/

        dayClick?: (date: Date, allDay: boolean, jsEvent: MouseEvent, view: View) => void;
        eventClick?: (event: EventObject, jsEvent: MouseEvent, view: View) => any; // return type boolean or void
        eventMouseover?: (event: EventObject, jsEvent: MouseEvent, view: View) => void;
        eventMouseout?: (event: EventObject, jsEvent: MouseEvent, view: View) => void;

        // Selection - http://arshaw.com/fullcalendar/docs/selection/

        selectable?: any; // Boolean/ViewOptionHash
        selectHelper?: any; // Boolean/Function
        unselectAuto?: boolean;
        unselectCancel?: string;
        select?: (startDate: Date, endDate: Date, allDay: boolean, jsEvent: MouseEvent, view: View) => void;
        unselect?: (view: View, jsEvent: Event) => void;

        // Event Data - http://arshaw.com/fullcalendar/docs/event_data/

        /**
         * This has one of the following types:
         *
         * - EventObject[]
         * - string (JSON feed)
         * - (start: Date, end: Date, callback: {(events: EventObject[]) => void;}) => void;
         */
        events?: any;

        /**
         * An array, each element being one of the following types:
         *
         * - EventSource
         * - EventObject[]
         * - string (JSON feed)
         * - (start: Date, end: Date, callback: {(events: EventObject[]) => void;}) => void;
         */
        eventSources?: any[];

        allDayDefault?: boolean;
        ignoreTimezone?: boolean;
        startParam?: string;
        endParam?: string
        lazyFetching?: boolean;
        eventDataTransform?: (eventData: any) => EventObject;
        loading?: (isLoading: boolean, view: View) => void;

        // Event Rendering - http://arshaw.com/fullcalendar/docs/event_rendering/

        eventColor?: string;
        eventBackgroundColor?: string;
        eventBorderColor?: string;
        eventTextColor?: string;
        eventRender?: (event: EventObject, element: HTMLDivElement, view: View) => void;
        eventAfterRender?: (event: EventObject, element: HTMLDivElement, view: View) => void;
        eventAfterAllRender?: (view: View) => void;
        eventDestroy?: (event: EventObject, element: JQuery, view: View) => void;

        // Event Dragging & Resizing

        editable?: boolean;
        eventStartEditable?: boolean;
        eventDurationEditable?: boolean;
        dragRevertDuration?: number;
        dragOpacity?: any; // Float/ViewOptionHash
        eventDragStart?: (event: EventObject, jsEvent: MouseEvent, ui: any, view: View) => void;
        eventDragStop?: (event: EventObject, jsEvent: MouseEvent, ui: any, view: View) => void;
        eventDrop?: (event: EventObject, dayDelta: number, minuteDelta: number, revertFunc: Function, jsEvent: Event, ui: any, view: View) => void;
        eventResizeStart?: (event: EventObject, jsEvent: MouseEvent, ui: any, view: View) => void;
        eventResizeStop?: (event: EventObject, jsEvent: MouseEvent, ui: any, view: View) => void;
        eventResize?: (event: EventObject, dayDelta: number, minuteDelta: number, revertFunc: Function, jsEvent: Event, ui: any, view: View) => void;

        droppable?: boolean;
        dropAccept?: any; // String/Function
        drop?: (date: Date, allDay: boolean, jsEvent: MouseEvent, ui: any) => void;
    }

    export interface View {
        name: string;
        title: string;
        start: Date;
        end: Date;
        visStart: Date;
        visEnd: Date;
    }

    export interface ViewOptionHash {
        month?: any;
        week?: any;
        day?: any;
        agenda?: any;
        agendaDay?: any;
        agendaWeek?: any;
        basic?: any;
        basicDay?: any;
        basicWeek?: any;
        ''?: any;
    }

    /**
     * Agenda Options - http://arshaw.com/fullcalendar/docs/agenda/
     */
    export interface AgendaOptions {
        allDaySlot?: boolean;
        allDayText?: string;
        axisFormat?: string;
        slotMinutes?: number;
        snapMinutes?: number;
        defaultEventMinutes?: number;
        firstHour?: number;
        minTime?: any; // Integer/String
        maxTime?: any; // Integer/String
        slotEventOverlap?: boolean;
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

    export interface EventObject {
        id?: any // String/number
        title: string;
        allDay?: boolean;
        start: Date;
        end?: Date;
        url?: string;
        className?: any; // string/Array<string>
        editable?: boolean;
        source?: EventSource;
        color?: string;
        backgroundColor?: string;
        borderColor?: string;
        textColor?: string;
    }

    export interface EventSource extends JQueryAjaxSettings {

        /**
         * This has one of the following types:
         *
         * - EventObject[]
         * - string (JSON feed)
         * - (start: Date, end: Date, callback: {(events: EventObject[]) => void;}) => void;
         */
        events?: any;

        color?: string;
        backgroundColor?: string;
        borderColor?: string;
        textColor?: string;
        className?: any; // string/Array<string>
        editable?: boolean;
        allDayDefault?: boolean;
        ignoreTimezone?: boolean;
        eventTransform?: any;
        startParam?: string;
        endParam?: string
    }

}

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
    fullCalendar(method: 'getView'): FullCalendar.View;

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
    fullCalendar(method: 'gotoDate', date: Date): void;

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
    fullCalendar(method: 'updateEvent', event: FullCalendar.EventObject): void;

    /**
     * Retrieves events that FullCalendar has in memory.
     */
    fullCalendar(method: 'clientEvents', idOrfilter?: any): Array<FullCalendar.EventObject>;

    /**
     * Retrieves events that FullCalendar has in memory.
     */
    fullCalendar(method: 'clientEvents', idOrfilter?: (e: FullCalendar.EventObject) => boolean): Array<FullCalendar.EventObject>;

    /**
     * Removes events from the calendar.
     */
    fullCalendar(method: 'removeEvents', idOrfilter?: any): void;

    /**
     * Removes events from the calendar.
     */
    fullCalendar(method: 'removeEvents', idOrfilter?: (e: FullCalendar.EventObject) => boolean): void;

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
    fullCalendar(method: 'renderEvent', event: FullCalendar.EventObject, stick?: boolean): void;

    /**
     * Rerenders all events on the calendar.
     */
    fullCalendar(method: 'rerenderEvents'): void;

    /**
     * Create calendar object
     */
    fullCalendar(options: FullCalendar.Options): JQuery;

    /**
     * Generic method function
     */
    fullCalendar(method: string, arg1: any, arg2: any, arg3: any): void;
}

interface JQueryStatic {
    fullCalendar: FullCalendar.Calendar;
}
