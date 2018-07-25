// Type definitions for react-big-calendar 0.18
// Project: https://github.com/intljusticemission/react-big-calendar
// Definitions by: Piotr Witek <https://github.com/piotrwitek>
//                 Austin Turner <https://github.com/paustint>
//                 Krzysztof Bezrąk <https://github.com/pikpok>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import * as React from 'react';

export type stringOrDate = string | Date;
export type View = 'month' | 'week' | 'work_week' | 'day' | 'agenda';
export type Navigate = 'PREV' | 'NEXT' | 'TODAY' | 'DATE';

export type Event = object;
export interface Format {
    /**
     * Format for the day of the month heading in the Month view.
     * e.g. "01", "02", "03", etc
     */
    dateFormat?: string;

    /**
     * A day of the week format for Week and Day headings,
     * e.g. "Wed 01/04"
     *
     */
    dayFormat?: string;

    /**
     * Week day name format for the Month week day headings,
     * e.g: "Sun", "Mon", "Tue", etc
     *
     */
    weekdayFormat?: string;

    /**
     * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
     */
    timeGutterFormat?: string;

    /**
     * Toolbar header format for the Month view, e.g "2015 April"
     *
     */
    monthHeaderFormat?: string;

    /**
     * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
     */
    dayRangeHeaderFormat?: string;

    /**
     * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
     */
    dayHeaderFormat?: string;

    /**
     * Toolbar header format for the Agenda view, e.g. "4/1/2015 — 5/1/2015"
     */
    agendaHeaderFormat?: string;

    /**
     * A time range format for selecting time slots, e.g "8:00am — 2:00pm"
     */
    selectRangeFormat?: string;

    agendaDateFormat?: string;
    agendaTimeFormat?: string;
    agendaTimeRangeFormat?: string;

    /**
     * Time range displayed on events.
     */
    eventTimeRangeFormat?: string;

    /**
     * An optional event time range for events that continue onto another day
     */
    eventTimeRangeStartFormat?: string;

    /**
     * An optional event time range for events that continue from another day
     */
    eventTimeRangeEndFormat?: string;
}

export interface Components {
    event?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    eventWrapper?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    dayWrapper?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    dateCellWrapper?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    toolbar?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    agenda?: {
        date?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
        time?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
        event?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    };
    day?: {
        header?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
        event?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    };
    week?: {
        header?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
        event?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    };
    month?: {
        header?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
        dateHeader?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
        event?: React.SFC | React.Component | React.ComponentClass | JSX.Element;
    };
}

export interface Messages {
    date?: string;
    time?: string;
    event?: string;
    allDay?: string;
    week?: string;
    work_week?: string;
    day?: string;
    month?: string;
    previous?: string;
    next?: string;
    yesterday?: string;
    tomorrow?: string;
    today?: string;
    agenda?: string;
    showMore?: (count: number) => string;
}

export interface BigCalendarProps<T extends Event = Event> extends React.Props<BigCalendar<T>> {
    date?: stringOrDate;
    now?: Date;
    view?: View;
    events?: T[];
    onNavigate?: (newDate: Date, action: Navigate) => void;
    onView?: (view: View) => void;
    onDrillDown?: (date: Date, view: View) => void;
    onSelectSlot?: (slotInfo: { start: stringOrDate, end: stringOrDate, slots: Date[] | string[], action: 'select' | 'click' | 'doubleClick' }) => void;
    onDoubleClickEvent?: (event: T, e: React.SyntheticEvent<HTMLElement>) => void;
    onSelectEvent?: (event: T, e: React.SyntheticEvent<HTMLElement>) => void;
    onSelecting?: (range: { start: stringOrDate, end: stringOrDate }) => boolean | undefined | null;
    selected?: any;
    views?: View[] | {
        month: boolean | React.SFC | React.Component,
        week: boolean | React.SFC | React.Component,
        myweek: boolean | React.SFC | React.Component,
    };
    drilldownView?: View | null;
    getDrilldownView?: ((targetDate: Date, currentViewName: View, configuredViewNames: View[]) => void) | null;
    length?: number;
    toolbar?: boolean;
    popup?: boolean;
    popupOffset?: number | { x: number, y: number };
    selectable?: boolean | 'ignoreEvents';
    longPressThreshold?: number;
    step?: number;
    timeslots?: number;
    rtl?: boolean;
    eventPropGetter?: (event: T, start: stringOrDate, end: stringOrDate, isSelected: boolean) => { className?: string, style?: React.CSSProperties };
    slotPropGetter?: (date: Date) => { className?: string, style?: object };
    dayPropGetter?: (date: Date) => { className?: string, style?: object };
    showMultiDayTimes?: boolean;
    min?: stringOrDate;
    max?: stringOrDate;
    scrollToTime?: Date;
    culture?: string;
    formats?: Format;
    components?: Components;
    messages?: Messages;
    titleAccessor?: keyof T | ((event: T) => string);
    allDayAccessor?: keyof T | ((event: T) => boolean);
    startAccessor?: keyof T | ((event: T) => Date);
    endAccessor?: keyof T | ((event: T) => Date);
    resourceAccessor?: keyof T | ((event: T) => any);
    resources?: any[];
    resourceIdAccessor?: keyof T | ((event: T) => any);
    resourceTitleAccessor?: keyof T | ((event: T) => string);
    defaultView?: View;
    defaultDate?: Date;
    className?: string;
    elementProps?: React.HTMLAttributes<HTMLElement>;
}

export default class BigCalendar<T extends Event = Event> extends React.Component<BigCalendarProps<T>> {
    /**
     * Setup the localizer by providing the moment Object
     */
    static momentLocalizer(momentInstance: object): void;
    /**
     * Setup the localizer by providing the globalize Object
     */
    static globalizeLocalizer(globalizeInstance: object): void;
}
