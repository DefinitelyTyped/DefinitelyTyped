// Type definitions for FullCalendar 1.6.1
// Project: http://arshaw.com/fullcalendar/ (http://arshaw.com/fullcalendar/)
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
        weekMode?: string;
        weekNumbers?: boolean;
        weekNumberCalculation?: any; // String/Function
        height?: number;
        contentHeight?: number;
        aspectRation?: number;
        viewDisplay?: (view: View) => void;
        windowResize?: (view: View) => void;
        dayRender?: (date: Date, cell: HTMLTableDataCellElement) => void;

        defaultView?: string;

        year?: number;
        month?: number;
        date?: number;

        timeFormat?: any; // String/ViewOptionHash
        columnFormat?: any; // String/ViewOptionHash
        titleFormat?: any; // String/ViewOptionHash
        buttonText?: ButtonTextObject;
        monthNames?: Array<string>;
        monthNamesShort?: Array<string>;
        dayNames?: Array<string>;
        dayNamesShort?: Array<string>;
        weekNumberTitle?: number;

        dayClick?: (date: Date, allDay: boolean, jsEvent: Event, view: View) => void;
        eventClick?: (event: EventObject, jsEvent: Event, view: View) => any; // return type boolean or void
        eventMouseover?: (event: EventObject, jsEvent: Event, view: View) => void;
        eventMouseout?: (event: EventObject, jsEvent: Event, view: View) => void;

        selectable?: any; // Boolean/ViewOptionHash
        selectHelper?: any; // Boolean/Function
        unselectAuto?: boolean;
        unselectCancel?: string;
        select?: (startDate: Date, endDate: Date, allDay: boolean, jsEvent: Event, view: View) => void;
        unselect?: (view: View, jsEvent: Event) => void;

        eventSources?: Array<EventSource>;
        allDayDefault?: boolean;
        ignoreTimezone?: boolean;
        eventDataTransform?: (eventData: any) => EventObject;
        startParam?: string;
        endParam?: string
        lazyFetching?: boolean;
        loading?: (isLoading: boolean, view: View) => void;

        eventColor?: string;
        eventBackgroundColor?: string;
        eventBorderColor?: string;
        eventTextColor?: string;
        eventRender?: (event: EventObject, element: HTMLDivElement, view: View) => void;
        eventAfterRender?: (event: EventObject, element: HTMLDivElement, view: View) => void;
        eventAllAfterRender?: (view: View) => void;

        editable?: boolean;
        disableDragging?: boolean;
        disableResizing?: boolean;
        dragRevertDuration?: number;
        dragOpacity?: any; // Float/ViewOptionHash
        eventDragStart?: (event: EventObject, jsEvent: Event, ui: any, view: View) => void;
        eventDragStop?: (event: EventObject, jsEvent: Event, ui: any, view: View) => void;
        eventDrop?: (event: EventObject, dayDelta: number, minuteDelta: number, revertFunc: Function, jsEvent: Event, ui: any, view: View) => void;
        eventResizeStart?: (event: EventObject, jsEvent: Event, ui: any, view: View) => void;
        eventResizeStop?: (event: EventObject, jsEvent: Event, ui: any, view: View) => void;
        eventResize?: (event: EventObject, dayDelta: number, minuteDelta: number, revertFunc: Function, jsEvent: Event, ui: any, view: View) => void;

        droppable?: boolean;
        dropAccept?: any; // String/Function
        drop?: (date: Date, allDay: boolean, jsEvent: Event, ui: any) => void;
    }

    export interface View {
        name: string;
        title: string;
        start: Date;
        End: Date;
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
    * Create calendar object
    */
    fullCalendar(options: FullCalendar.Options): JQuery;
    /**
    * Generic method function
    */
    fullCalendar(method: string, arg1: any, arg2: any, arg3: any): void;
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
    * Returns the View Object for the current view.
    */
    fullCalendar(method: 'getView'): FullCalendar.View;
    /**
    * Immediately switches to a different view.
    */
    fullCalendar(method: 'changeView', viewName: string): void;
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
}

interface JQueryStatic {
    fullCalendar: FullCalendar.Calendar;
}