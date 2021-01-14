// Type definitions for react-big-calendar 0.24
// Project: https://github.com/jquense/react-big-calendar
// Definitions by: Piotr Witek <https://github.com/piotrwitek>
//                 Austin Turner <https://github.com/paustint>
//                 Krzysztof Bezrąk <https://github.com/pikpok>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Paul Potsides <https://github.com/strongpauly>
//                 janb87 <https://github.com/janb87>
//                 Daniel Thorne <https://github.com/ldthorne>
//                 Panagiotis Rikarnto Siavelis <https://github.com/siavelis>
//                 Lucas Silva Souza <https://github.com/lksilva>
//                 Siarhey Belofost <https://github.com/SergeyBelofost>
//                 Mark Nelissen <https://github.com/marknelissen>
//                 Eric Kenney <https://github.com/KenneyE>
//                 Paito Anderson <https://github.com/PaitoAnderson>
//                 Jan Michalak <https://github.com/michalak111>
//                 Tom Price <https://github.com/tomtom5152>
//                 Daniele Carrucciu <https://github.com/catruzz>
//                 Chris Vandenberg <https://github.com/altruisticsoftware>
//                 Chris Frewin <https://github.com/princefishthrower>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import { Validator } from 'prop-types';
import * as React from 'react';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type DayPropGetter = (date: Date, resourceId?: number | string) => React.HTMLAttributes<HTMLDivElement>;
export type EventPropGetter<T> = (event: T, start: stringOrDate, end: stringOrDate, isSelected: boolean) => React.HTMLAttributes<HTMLDivElement>;
export type SlotPropGetter = (date: Date, resourceId?: number | string) => React.HTMLAttributes<HTMLDivElement>;
export type SlotGroupPropGetter = () => React.HTMLAttributes<HTMLDivElement>;

export type stringOrDate = string | Date;

export type ViewKey = 'MONTH' | 'WEEK' | 'WORK_WEEK' | 'DAY' | 'AGENDA';
export type View = 'month' | 'week' | 'work_week' | 'day' | 'agenda';
export type ViewProps<TEvent extends object = Event, TResource extends object = object> =
 Omit<
    CalendarProps<TEvent, TResource>,
    'elementProps' | 'className' | 'style' | 'view' | 'toolbar' | 'components' |
    'formats' | 'messages' | 'culture'
> & {
    date: stringOrDate; // date has always a value, in contrast to optional date in CalendarProps

    // props assigned from Calendar's this.state.context, see there if you want to improve the type defs:
    accessors: any;
    components: any;
    getters: any;
    localizer: any;

    // props assigned from Calendar instance, see there if you want to improve the type defs:
    getDrilldownView: any; // = this.getDrilldownView
    onNavigate: any; // = this.handleNavigate
    onDrillDown: any; // = this.handleDrillDown
    onSelectEvent: any; // = this.handleSelectEvent
    onDoubleClickEvent: any; // = this.handleDoubleClickEvent
    onSelectSlot: any; // = this.handleSelectSlot
};
export type ViewsProps<TEvent extends object = Event, TResource extends object = object> = View[] | {
    work_week?: boolean | React.ComponentType<any> & ViewStatic,
    day?: boolean | React.ComponentType<any> & ViewStatic,
    agenda?: boolean | React.ComponentType<any> & ViewStatic,
    month?: boolean | React.ComponentType<any> & ViewStatic,
    week?: boolean | React.ComponentType<any> & ViewStatic
};
export type DayLayoutFunction<TEvent extends object = Event> = (_: {
    events: TEvent[],
    minimumStartDifference: number,
    slotMetrics: any,
    accessors: any,
}) => Array<{ event: TEvent, style: React.CSSProperties }>;
export type DayLayoutAlgorithm = 'overlap' | 'no-overlap';
export type NavigateAction = 'PREV' | 'NEXT' | 'TODAY' | 'DATE';
export interface Event {
    allDay?: boolean;
    title?: string;
    start?: Date;
    end?: Date;
    resource?: any;
}
export interface DateRange {
    start: Date;
    end: Date;
}

export type DateFormatFunction = (date: Date, culture?: Culture, localizer?: DateLocalizer) => string;
export type DateRangeFormatFunction = (range: DateRange, culture?: Culture, localizer?: DateLocalizer) => string;
export type DateFormat = string | DateFormatFunction;

export interface Formats {
    /**
     * Format for the day of the month heading in the Month view.
     * e.g. "01", "02", "03", etc
     */
    dateFormat?: DateFormat;

    /**
     * A day of the week format for Week and Day headings,
     * e.g. "Wed 01/04"
     *
     */
    dayFormat?: DateFormat;

    /**
     * Week day name format for the Month week day headings,
     * e.g: "Sun", "Mon", "Tue", etc
     *
     */
    weekdayFormat?: DateFormat;

    /**
     * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
     */
    timeGutterFormat?: DateFormat;

    /**
     * Toolbar header format for the Month view, e.g "2015 April"
     *
     */
    monthHeaderFormat?: DateFormat;

    /**
     * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
     */
    dayRangeHeaderFormat?: DateRangeFormatFunction;

    /**
     * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
     */
    dayHeaderFormat?: DateFormat;

    /**
     * Toolbar header format for the Agenda view, e.g. "4/1/2015 — 5/1/2015"
     */
    agendaHeaderFormat?: DateRangeFormatFunction;

    /**
     * A time range format for selecting time slots, e.g "8:00am — 2:00pm"
     */
    selectRangeFormat?: DateRangeFormatFunction;

    agendaDateFormat?: DateFormat;
    agendaTimeFormat?: DateFormat;
    agendaTimeRangeFormat?: DateRangeFormatFunction;

    /**
     * Time range displayed on events.
     */
    eventTimeRangeFormat?: DateRangeFormatFunction;

    /**
     * An optional event time range for events that continue onto another day
     */
    eventTimeRangeStartFormat?: DateRangeFormatFunction;

    /**
     * An optional event time range for events that continue from another day
     */
    eventTimeRangeEndFormat?: DateRangeFormatFunction;
}

export interface HeaderProps {
    date: Date;
    label: string;
    localizer: DateLocalizer;
}

export interface ResourceHeaderProps {
    label: React.ReactNode;
    index: number;
    resource: object;
}

export interface Components<TEvent extends object = Event, TResource extends object = object> {
    event?: React.ComponentType<EventProps<TEvent>>;
    eventWrapper?: React.ComponentType<EventWrapperProps<TEvent>>;
    eventContainerWrapper?: React.ComponentType;
    dateCellWrapper?: React.ComponentType;
    timeSlotWrapper?: React.ComponentType;
    timeGutterHeader?: React.ComponentType;
    timeGutterWrapper?: React.ComponentType;
    toolbar?: React.ComponentType<ToolbarProps<TEvent, TResource>>;
    agenda?: {
        date?: React.ComponentType;
        time?: React.ComponentType;
        event?: React.ComponentType<EventProps<TEvent>>;
    };
    day?: {
        header?: React.ComponentType;
        event?: React.ComponentType<EventProps<TEvent>>;
    };
    week?: {
        header?: React.ComponentType;
        event?: React.ComponentType<EventProps<TEvent>>;
    };
    month?: {
        header?: React.ComponentType;
        dateHeader?: React.ComponentType;
        event?: React.ComponentType<EventProps<TEvent>>;
    };
    /**
     * component used as a header for each column in the TimeGridHeader
     */
    header?: React.ComponentType<HeaderProps>;
    resourceHeader?: React.ComponentType<ResourceHeaderProps>;
}

export interface ToolbarProps<TEvent extends object = Event, TResource extends object = object> {
    date: Date;
    view: View;
    views: ViewsProps<TEvent, TResource>;
    label: string;
    localizer: { messages: Messages };
    onNavigate: (navigate: NavigateAction, date?: Date) => void;
    onView: (view: View) => void;
    children?: React.ReactNode;
}

export interface EventProps<TEvent extends object = Event> {
    event: TEvent;
    title: string;
}

export interface EventWrapperProps<TEvent extends object = Event> {
    // https://github.com/intljusticemission/react-big-calendar/blob/27a2656b40ac8729634d24376dff8ea781a66d50/src/TimeGridEvent.js#L28
    style?: React.CSSProperties & { xOffset: number };
    className: string;
    event: TEvent;
    isRtl: boolean;
    getters: {
        eventProp?: EventPropGetter<TEvent>;
        slotProp?: SlotPropGetter;
        dayProp?: DayPropGetter;
    };
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    onDoubleClick: (e: React.MouseEvent<HTMLElement>) => void;
    accessors: {
        title?: (event: TEvent) => string;
        tooltip?: (event: TEvent) => string;
        end?: (event: TEvent) => Date;
        start?: (event: TEvent) => Date;
    };
    selected: boolean;
    label: string;
    continuesEarlier: boolean;
    continuesLater: boolean;
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
    noEventsInRange?: string;
}

export type Culture = string;
export type FormatInput = number | string | Date;

export interface DateLocalizerSpec {
    firstOfWeek: (culture: Culture) => number;
    format: (value: FormatInput, format: string, culture: Culture) => string;
    formats: Formats;
    propType?: Validator<any>;
}

export class DateLocalizer {
    formats: Formats;
    propType: Validator<any>;
    startOfWeek: (culture: Culture) => number;

    constructor(spec: DateLocalizerSpec);

    format(value: FormatInput, format: string, culture: Culture): string;
}

export interface CalendarProps<TEvent extends object = Event, TResource extends object = object>
    extends React.Props<Calendar<TEvent, TResource>> {
    localizer: DateLocalizer;

    date?: stringOrDate;
    getNow?: () => Date;
    view?: View;
    events?: TEvent[];
    handleDragStart?: (event: TEvent) => void;
    onNavigate?: (newDate: Date, view: View, action: NavigateAction) => void;
    onView?: (view: View) => void;
    onDrillDown?: (date: Date, view: View) => void;
    onSelectSlot?: (slotInfo: {
        start: stringOrDate;
        end: stringOrDate;
        slots: Date[] | string[];
        action: 'select' | 'click' | 'doubleClick';
    }) => void;
    onDoubleClickEvent?: (event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void;
    onSelectEvent?: (event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void;
    onSelecting?: (range: { start: stringOrDate; end: stringOrDate }) => boolean | undefined | null;
    onRangeChange?: (range: Date[] | { start: stringOrDate; end: stringOrDate }, view: View | undefined) => void;
    selected?: any;
    views?: ViewsProps<TEvent, TResource>;
    drilldownView?: View | null;
    getDrilldownView?: ((targetDate: Date, currentViewName: View, configuredViewNames: View[]) => void) | null;
    length?: number;
    toolbar?: boolean;
    popup?: boolean;
    popupOffset?: number | { x: number; y: number };
    selectable?: boolean | 'ignoreEvents';
    longPressThreshold?: number;
    step?: number;
    timeslots?: number;
    rtl?: boolean;
    eventPropGetter?: EventPropGetter<TEvent>;
    slotPropGetter?: SlotPropGetter;
    slotGroupPropGetter?: SlotGroupPropGetter;
    dayPropGetter?: DayPropGetter;
    showMultiDayTimes?: boolean;
    min?: stringOrDate;
    max?: stringOrDate;
    scrollToTime?: Date;
    culture?: string;
    formats?: Formats;
    components?: Components<TEvent, TResource>;
    messages?: Messages;
    dayLayoutAlgorithm?: DayLayoutAlgorithm | DayLayoutFunction<TEvent>;
    titleAccessor?: keyof TEvent | ((event: TEvent) => string);
    tooltipAccessor?: keyof TEvent | ((event: TEvent) => string);
    allDayAccessor?: keyof TEvent | ((event: TEvent) => boolean);
    startAccessor?: keyof TEvent | ((event: TEvent) => Date);
    endAccessor?: keyof TEvent | ((event: TEvent) => Date);
    resourceAccessor?: keyof TEvent | ((event: TEvent) => any);
    resources?: TResource[];
    resourceIdAccessor?: keyof TResource | ((resource: TResource) => any);
    resourceTitleAccessor?: keyof TResource | ((resource: TResource) => any);
    defaultView?: View;
    defaultDate?: Date;
    className?: string;
    elementProps?: React.HTMLAttributes<HTMLElement>;
    style?: React.CSSProperties;
    onShowMore?: (events: TEvent[], date: Date) => void;
}

export interface TitleOptions {
    formats: DateFormat[];
    culture?: string;
    [propName: string]: any;
}

export interface ViewStatic {
    navigate(date: Date, action: NavigateAction, props: any): Date;
    title(date: Date, options: TitleOptions): string;
}

export interface MoveOptions {
    action: NavigateAction;
    date: Date;
    today: Date;
}

export class Calendar<
    TEvent extends object = Event,
    TResource extends object = object
> extends React.Component<CalendarProps<TEvent, TResource>> {}

export interface components {
    dateCellWrapper: React.ComponentType;
    eventWrapper: React.ComponentType<Event>;
}
export function globalizeLocalizer(globalizeInstance: object): DateLocalizer;
export function momentLocalizer(momentInstance: object): DateLocalizer;
export function dateFnsLocalizer(config: object): DateLocalizer;
export interface Navigate {
    PREVIOUS: 'PREV';
    NEXT: 'NEXT';
    TODAY: 'TODAY';
    DATE: 'DATE';
}
export interface Views {
    MONTH: 'month';
    WEEK: 'week';
    WORK_WEEK: 'work_week';
    DAY: 'day';
    AGENDA: 'agenda';
}
export function move(View: ViewStatic | ViewKey, options: MoveOptions): Date;

export interface TimeGridProps<TEvent extends object = Event, TResource extends object = object> {
    eventOffset: number;
    events?: TEvent[];
    resources?: TResource[];
    step?: number;
    timeslots?: number;
    range?: any[];
    min?: stringOrDate;
    max?: stringOrDate;
    getNow?: () => Date;
    scrollToTime?: Date;
    showMultiDayTimes?: boolean;
    rtl?: boolean;
    width?: number;
    accessors?: object;
    components?: object;
    getters?: object;
    localizer?: object;
    selected?: object;
    selectable?: boolean | 'ignoreEvents';
    longPressThreshold?: number;
    onNavigate?: (action: NavigateAction) => void;
    onSelectSlot?: (slotInfo: {
        start: stringOrDate;
        end: stringOrDate;
        slots: Date[] | string[];
        action: 'select' | 'click' | 'doubleClick';
    }) => void;
    onSelectEnd?: (...args: any[]) => any;
    onSelectStart?: (...args: any[]) => any;
    onSelectEvent?: (event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void;
    onDoubleClickEvent?: (event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void;
    onKeyPressEvent?: (...args: any[]) => any;
    onDrillDown?: (date: Date, view: View) => void;
    getDrilldownView?: ((targetDate: Date, currentViewName: View, configuredViewNames: View[]) => void) | null;
    dayLayoutAlgorithm?: any;
}

export class TimeGrid<TEvent extends object = Event, TResource extends object = object> extends React.Component<
    TimeGridProps<TEvent, TResource>
> {}

export interface WorkWeekProps {
    date: Date;
}

export class WorkWeek extends Week {}

export interface WeekProps {
    date: Date;
}

export class Week extends React.Component<WeekProps> {
    static range: (date: Date) => Date[];
    static navigate: (date: Date, action: NavigateAction) => Date;
    static title: (date: Date) => string;
}

export interface DayProps {
    date: Date;
}
export class Day extends React.Component<DayProps> {}

// Turn off automatic exports
export {};
