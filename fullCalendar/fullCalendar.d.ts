// Type definitions for FullCalendar 1.6.1
// Project: http://arshaw.com/fullcalendar/ (http://arshaw.com/fullcalendar/)
// Definitions by: Neil Stalker <https://github.com/nestalk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module FullCalendar {
    export interface Calendar {
        formatDate(date: Date, format: string, options?: Options): string;
        formatDates(date1: Date, date2: Date, format: string, options?: Options): string;
        parseDate(dateString: string, ignoreTimezone?: boolean): Date;
        parseISO8601(dateString: string, ignoreTimezone?: boolean): Date;
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
    fullCalendar(options: FullCalendar.Options): JQuery;
    fullCalendar(method: string, ...args: Array<any>): JQuery;
}

interface JQueryStatic {
    fullCalendar: FullCalendar.Calendar;
}