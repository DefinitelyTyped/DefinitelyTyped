// Type definitions for FullCalendar 1.6
// Project: http://arshaw.com/fullcalendar/
// Definitions by: Neil Stalker <https://github.com/nestalk>, Marcelo Camargo <https://github.com/hasellcamargo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>
import * as moment from "moment";

declare global {
    namespace FullCalendar {
        interface Calendar {
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

        interface BusinessHours {
            start: moment.Duration;
            end: moment.Duration;
            dow: number[];
        }

        interface Timespan {
            start: moment.Moment;
            end: moment.Moment;
        }

        interface Options extends AgendaOptions, EventDraggingResizingOptions, DroppingExternalElementsOptions, SelectionOptions {
            // General display - http://arshaw.com/fullcalendar/docs/display/

            header?: {
                left: string;
                center: string;
                right: string;
            };
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
            businessHours?: boolean | BusinessHours;
            height?: number;
            contentHeight?: number;
            aspectRatio?: number;
            handleWindowResize?: boolean;
            viewRender?(view: ViewObject, element: JQuery): void;
            viewDestroy?(view: ViewObject, element: JQuery): void;
            dayRender?(date: Date, cell: HTMLTableDataCellElement): void;
            windowResize?(view: ViewObject): void;

            // Timezone
            timezone?: string | boolean;
            now?: moment.Moment | Date | string | (() => moment.Moment);

            // Views - http://arshaw.com/fullcalendar/docs/views/

            defaultView?: string;

            // Current Date - http://arshaw.com/fullcalendar/docs/current_date/

            defaultDate?: moment.Moment | Date | string;
            year?: number;
            month?: number;
            date?: number;

            // Text/Time Customization - http://arshaw.com/fullcalendar/docs/text/

            timeFormat?: any; // String/ViewOptionHash
            columnFormat?: any; // String/ViewOptionHash
            titleFormat?: any; // String/ViewOptionHash

            buttonText?: ButtonTextObject;
            monthNames?: string[];
            monthNamesShort?: string[];
            dayNames?: string[];
            dayNamesShort?: string[];
            weekNumberTitle?: string;

            // Clicking & Hovering - http://arshaw.com/fullcalendar/docs/mouse/

            dayClick?(date: Date, allDay: boolean, jsEvent: MouseEvent, view: ViewObject): void;
            eventClick?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): any; // return type boolean or void
            eventMouseover?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): void;
            eventMouseout?(event: EventObject, jsEvent: MouseEvent, view: ViewObject): void;

            // Event Data - http://arshaw.com/fullcalendar/docs/event_data/

            /**
             * This has one of the following types:
             *
             * - EventObject[]
             * - string (JSON feed)
             * - (start: Date | string, end: Date | string, callback: {(events: EventObject[]) => void;}) => void;
             */
            events?: any;

            /**
             * An array, each element being one of the following types:
             *
             * - EventSource
             * - EventObject[]
             * - string (JSON feed)
             * - (start: Date | string, end: Date | string, callback: {(events: EventObject[]) => void;}) => void;
             */
            eventSources?: any[];

            allDayDefault?: boolean;
            ignoreTimezone?: boolean;
            startParam?: string;
            endParam?: string;
            lazyFetching?: boolean;
            eventDataTransform?(eventData: any): EventObject;
            loading?(isLoading: boolean, view: ViewObject): void;

            // Event Rendering - http://arshaw.com/fullcalendar/docs/event_rendering/

            eventColor?: string;
            eventBackgroundColor?: string;
            eventBorderColor?: string;
            eventTextColor?: string;
            eventRender?(event: EventObject, element: HTMLDivElement, view: ViewObject): void;
            eventAfterRender?(event: EventObject, element: HTMLDivElement, view: ViewObject): void;
            eventAfterAllRender?(view: ViewObject): void;
            eventDestroy?(event: EventObject, element: JQuery, view: ViewObject): void;
        }

        interface ViewOptionHash {
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
        interface AgendaOptions {
            allDaySlot?: boolean;
            allDayText?: string;
            slotDuration?: moment.Duration;
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
        interface EventDraggingResizingOptions {
            editable?: boolean;
            eventStartEditable?: boolean;
            eventDurationEditable?: boolean;
            dragRevertDuration?: number; // integer, milliseconds
            dragOpacity?: number; // float
            dragScroll?: boolean;
            eventOverlap?: boolean | ((stillEvent: EventObject, movingEvent: EventObject) => boolean);
            eventConstraint?: BusinessHours | Timespan;
            eventDragStart?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;
            eventDragStop?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;
            eventDrop?(event: EventObject, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: ViewObject): void;
            eventResizeStart?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;
            eventResizeStop?(event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject): void;
            eventResize?(event: EventObject, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: ViewObject): void;
        }
        /*
        * Selection - http://arshaw.com/fullcalendar/docs/selection/
        */
        interface SelectionOptions {
            selectable?: boolean;
            selectHelper?: boolean | ((start: moment.Moment, end: moment.Moment) => HTMLElement);
            unselectAuto?: boolean;
            unselectCancel?: string;
            selectOverlap?: boolean | ((event: EventObject) => boolean);
            selectConstraint?: Timespan | BusinessHours;
            select?(start: moment.Moment, end: moment.Moment, jsEvent: MouseEvent, view: ViewObject, resource?: any): void;
            unselect?(view: ViewObject, jsEvent: Event): void;
        }

        interface DroppingExternalElementsOptions {
            droppable?: boolean;
            dropAccept?: string | ((draggable: any) => boolean);
            drop?(date: moment.Moment, jsEvent: MouseEvent, ui: any): void;
            eventReceive?(event: EventObject): void;
        }

        interface ButtonTextObject {
            prev?: string;
            next?: string;
            prevYear?: string;
            nextYear?: string;
            today?: string;
            month?: string;
            week?: string;
            day?: string;
        }

        interface EventObject extends Timespan {
            id?: any; // String/number
            title: string;
            allDay?: boolean;
            url?: string;
            className?: any; // string/Array<string>
            editable?: boolean;
            source?: EventSource;
            color?: string;
            backgroundColor?: string;
            borderColor?: string;
            textColor?: string;
            rendering?: string;
        }

        interface ViewObject extends Timespan {
            name: string;
            title: string;
            intervalStart: moment.Moment;
            intervalEnd: moment.Moment;
        }

        interface EventSource extends JQueryAjaxSettings {
            /**
             * This has one of the following types:
             *
             * - EventObject[]
             * - string (JSON feed)
             * - (start: Date | string, end: Date | string, callback: {(events: EventObject[]) => void;}) => void;
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
            endParam?: string;
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
        fullCalendar(method: 'getView'): FullCalendar.ViewObject;

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
        fullCalendar(method: 'gotoDate', date: Date | string): void;

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
        fullCalendar(method: 'clientEvents', idOrfilter?: any): FullCalendar.EventObject[];

        /**
         * Retrieves events that FullCalendar has in memory.
         */
        fullCalendar(method: 'clientEvents', idOrfilter?: (e: FullCalendar.EventObject) => boolean): FullCalendar.EventObject[];

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
}
