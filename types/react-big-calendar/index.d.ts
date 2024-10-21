import {
    add,
    endOf,
    eq,
    gt,
    gte,
    hours,
    inRange,
    lt,
    lte,
    max,
    milliseconds,
    min,
    minutes,
    month,
    neq,
    seconds,
    startOf,
    StartOfWeek,
    Unit,
} from "date-arithmetic";
import { Validator } from "prop-types";
import * as React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type DayPropGetter = (date: Date, resourceId?: number | string) => React.HTMLAttributes<HTMLDivElement>;
export type EventPropGetter<T> = (
    event: T,
    start: Date,
    end: Date,
    isSelected: boolean,
) => { className?: string | undefined; style?: React.CSSProperties };
export type SlotPropGetter = (date: Date, resourceId?: number | string) => React.HTMLAttributes<HTMLDivElement>;
export type SlotGroupPropGetter = () => React.HTMLAttributes<HTMLDivElement>;

export type stringOrDate = string | Date; // this isn't documented in the official repo, a thorough review is needed as to where stringOrDate or Date applies

export type ViewKey = "MONTH" | "WEEK" | "WORK_WEEK" | "DAY" | "AGENDA";
export type View = "month" | "week" | "work_week" | "day" | "agenda";
export type ViewProps<TEvent extends object = Event, TResource extends object = object> =
    & Omit<
        CalendarProps<TEvent, TResource>,
        "elementProps" | "className" | "style" | "view" | "toolbar" | "components" | "formats" | "messages" | "culture"
    >
    & {
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
export type ViewsProps<TEvent extends object = Event, TResource extends object = object> =
    | View[]
    | {
        work_week?: boolean | (React.ComponentType<any> & ViewStatic) | undefined;
        day?: boolean | (React.ComponentType<any> & ViewStatic) | undefined;
        agenda?: boolean | (React.ComponentType<any> & ViewStatic) | undefined;
        month?: boolean | (React.ComponentType<any> & ViewStatic) | undefined;
        week?: boolean | (React.ComponentType<any> & ViewStatic) | undefined;
    };
export type DayLayoutFunction<TEvent extends object = Event> = (_: {
    events: TEvent[];
    minimumStartDifference: number;
    slotMetrics: any;
    accessors: any;
}) => Array<{ event: TEvent; style: React.CSSProperties }>;
export type DayLayoutAlgorithm = "overlap" | "no-overlap";
export type NavigateAction = "PREV" | "NEXT" | "TODAY" | "DATE";
export interface Event {
    allDay?: boolean | undefined;
    title?: React.ReactNode | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
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
    dateFormat?: DateFormat | undefined;

    /**
     * A day of the week format for Week and Day headings,
     * e.g. "Wed 01/04"
     */
    dayFormat?: DateFormat | undefined;

    /**
     * Week day name format for the Month week day headings,
     * e.g: "Sun", "Mon", "Tue", etc
     */
    weekdayFormat?: DateFormat | undefined;

    /**
     * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
     */
    timeGutterFormat?: DateFormat | undefined;

    /**
     * Toolbar header format for the Month view, e.g "2015 April"
     */
    monthHeaderFormat?: DateFormat | undefined;

    /**
     * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
     */
    dayRangeHeaderFormat?: DateRangeFormatFunction | undefined;

    /**
     * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
     */
    dayHeaderFormat?: DateFormat | undefined;

    /**
     * Toolbar header format for the Agenda view, e.g. "4/1/2015 — 5/1/2015"
     */
    agendaHeaderFormat?: DateRangeFormatFunction | undefined;

    /**
     * A time range format for selecting time slots, e.g "8:00am — 2:00pm"
     */
    selectRangeFormat?: DateRangeFormatFunction | undefined;

    agendaDateFormat?: DateFormat | undefined;
    agendaTimeFormat?: DateFormat | undefined;
    agendaTimeRangeFormat?: DateRangeFormatFunction | undefined;

    /**
     * Time range displayed on events.
     */
    eventTimeRangeFormat?: DateRangeFormatFunction | undefined;

    /**
     * An optional event time range for events that continue onto another day
     */
    eventTimeRangeStartFormat?: DateRangeFormatFunction | undefined;

    /**
     * An optional event time range for events that continue from another day
     */
    eventTimeRangeEndFormat?: DateRangeFormatFunction | undefined;
}

export interface HeaderProps {
    date: Date;
    label: string;
    localizer: DateLocalizer;
}

export interface DateHeaderProps {
    date: Date;
    drilldownView: string;
    isOffRange: boolean;
    label: string;
    onDrillDown: () => void;
}

export interface ResourceHeaderProps<TResource extends object = object> {
    label: React.ReactNode;
    index: number;
    resource: TResource;
}

export interface DateCellWrapperProps {
    range: Date[];
    value: Date;
    children: React.JSX.Element;
}

export interface ShowMoreProps<TEvent extends object = Event> {
    localizer: DateLocalizer;
    slot: number;
    slotDate: Date;
    count: number;
    events: TEvent[];
    remainingEvents: TEvent[];
}

export interface Components<TEvent extends object = Event, TResource extends object = object> {
    event?: React.ComponentType<EventProps<TEvent>> | undefined;
    eventWrapper?: React.ComponentType<EventWrapperProps<TEvent>> | undefined;
    eventContainerWrapper?: React.ComponentType | undefined;
    dateCellWrapper?: React.ComponentType<DateCellWrapperProps> | undefined;
    dayColumnWrapper?: React.ComponentType | undefined;
    timeSlotWrapper?: React.ComponentType | undefined;
    timeGutterHeader?: React.ComponentType | undefined;
    timeGutterWrapper?: React.ComponentType | undefined;
    toolbar?: React.ComponentType<ToolbarProps<TEvent, TResource>> | undefined;
    agenda?:
        | {
            date?: React.ComponentType | undefined;
            time?: React.ComponentType | undefined;
            event?: React.ComponentType<EventProps<TEvent>> | undefined;
        }
        | undefined;
    day?:
        | {
            header?: React.ComponentType<HeaderProps> | undefined;
            event?: React.ComponentType<EventProps<TEvent>> | undefined;
        }
        | undefined;
    week?:
        | {
            header?: React.ComponentType<HeaderProps> | undefined;
            event?: React.ComponentType<EventProps<TEvent>> | undefined;
        }
        | undefined;
    work_week?:
        | {
            header?: React.ComponentType<HeaderProps> | undefined;
            event?: React.ComponentType<EventProps<TEvent>> | undefined;
        }
        | undefined;
    month?:
        | {
            header?: React.ComponentType<HeaderProps> | undefined;
            dateHeader?: React.ComponentType<DateHeaderProps> | undefined;
            event?: React.ComponentType<EventProps<TEvent>> | undefined;
        }
        | undefined;
    /**
     * component used as a header for each column in the TimeGridHeader
     */
    header?: React.ComponentType<HeaderProps> | undefined;
    resourceHeader?: React.ComponentType<ResourceHeaderProps<TResource>> | undefined;
    showMore?: React.ComponentType<ShowMoreProps<TEvent>>;
}

export interface ToolbarProps<TEvent extends object = Event, TResource extends object = object> {
    date: Date;
    view: View;
    views: ViewsProps<TEvent, TResource>;
    label: string;
    localizer: { messages: Messages<TEvent> };
    onNavigate: (navigate: NavigateAction, date?: Date) => void;
    onView: (view: View) => void;
    children?: React.ReactNode | undefined;
}

export interface EventProps<TEvent extends object = Event> {
    event: TEvent;
    title: string;
    continuesPrior: boolean;
    continuesAfter: boolean;
    isAllDay?: boolean;
    localizer: DateLocalizer;
    slotStart: Date;
    slotEnd: Date;
}

export interface EventWrapperProps<TEvent extends object = Event> {
    // https://github.com/intljusticemission/react-big-calendar/blob/27a2656b40ac8729634d24376dff8ea781a66d50/src/TimeGridEvent.js#L28
    style?: (React.CSSProperties & { xOffset: number }) | undefined;
    className: string;
    event: TEvent;
    isRtl: boolean;
    getters: {
        eventProp?: EventPropGetter<TEvent> | undefined;
        slotProp?: SlotPropGetter | undefined;
        dayProp?: DayPropGetter | undefined;
    };
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    onDoubleClick: (e: React.MouseEvent<HTMLElement>) => void;
    accessors: {
        title?: ((event: TEvent) => string) | undefined;
        tooltip?: ((event: TEvent) => string) | undefined;
        end?: ((event: TEvent) => Date) | undefined;
        start?: ((event: TEvent) => Date) | undefined;
    };
    selected: boolean;
    label: string;
    continuesEarlier: boolean;
    continuesLater: boolean;
}

export interface Messages<TEvent extends object = Event> {
    date?: string | undefined;
    time?: string | undefined;
    event?: string | undefined;
    allDay?: string | undefined;
    week?: string | undefined;
    work_week?: string | undefined;
    day?: string | undefined;
    month?: string | undefined;
    previous?: string | undefined;
    next?: string | undefined;
    yesterday?: string | undefined;
    tomorrow?: string | undefined;
    today?: string | undefined;
    agenda?: string | undefined;
    showMore?: ((count: number, remainingEvents: TEvent[], events: TEvent[]) => string) | undefined;
    noEventsInRange?: string | undefined;
}

export interface SlotInfo {
    start: Date;
    end: Date;
    slots: Date[];
    action: "select" | "click" | "doubleClick";
    /** For "TimeGrid" views */
    resourceId?: number | string | undefined;
    /** For "select" action */
    bounds?:
        | {
            x: number;
            y: number;
            top: number;
            bottom: number;
            left: number;
            right: number;
        }
        | undefined;
    /** For "click" or "doubleClick" actions */
    box?:
        | {
            x: number;
            y: number;
            clientX: number;
            clientY: number;
        }
        | undefined;
}

export type Culture = string;
export type FormatInput = number | string | Date | DateRange;

export interface DateLocalizerSpec {
    firstOfWeek: (culture: Culture) => number;
    format: (value: FormatInput, format: string, culture?: Culture) => string;
    formats: Formats;
    propType?: Validator<any> | undefined;
    merge?: (date: Date, time: Date) => Date | null;
    inRange?: typeof inRange;
    lt?: typeof lt;
    lte?: typeof lte;
    gt?: typeof gt;
    gte?: typeof gte;
    eq?: typeof eq;
    neq?: typeof neq;
    startOf?: typeof startOf;
    endOf?: typeof endOf;
    add?: typeof add;
    range?: (start: Date, end: Date, unit?: Unit) => Date[];
    diff?: (dateA: Date, dateB: Date, unit?: Unit) => number;
    ceil?: (date: Date, unit: Unit) => Date;
    min?: typeof min;
    max?: typeof max;
    minutes?: typeof minutes;
    firstVisibleDay?: (date: Date, localizer: any) => Date;
    lastVisibleDay?: (date: Date, localizer: any) => Date;
    visibleDays?: (date: Date, localizer: any) => Date[];

    getSlotDate?: (date: Date, minutesFromMidnight: number, offset: number) => Date;
    getTimezoneOffset?: (date: Date) => number;
    getDstOffset?: (date: Date, dateB: Date) => number;
    getTotalMin?: (dateA: Date, dateB: Date) => number;
    getMinutesFromMidnight?: (date: Date) => number;
    continuesPrior?: (dateA: Date, dateB: Date) => boolean;
    continuesAfter?: (dateA: Date, dateB: Date, dateC: Date) => boolean;
    sortEvents?: (eventA: Event, eventB: Event) => boolean;
    inEventRange?: (event: Event, range: DateRange) => boolean;
    isSameDate?: (dateA: Date, dateB: Date) => boolean;
    startAndEndAreDateOnly?: (dateA: Date, dateB: Date) => boolean;
    segmentOffset?: number;
}

// As documented in https://jquense.github.io/react-big-calendar/examples/?path=/docs/guides-localizers--page
export class DateLocalizer {
    formats: Formats;
    propType: Validator<any>;
    startOfWeek: (culture: Culture) => StartOfWeek;

    constructor(spec: DateLocalizerSpec);

    format(value: FormatInput, format: string, culture?: Culture): string;
    messages: Messages<Event>;

    merge: (date: Date, time: Date) => Date | null;
    inRange: typeof inRange;
    lt: typeof lt;
    lte: typeof lte;
    gt: typeof gt;
    gte: typeof gte;
    eq: typeof eq;
    neq: typeof neq;
    startOf: typeof startOf;
    endOf: typeof endOf;
    add: typeof add;
    range: (start: Date, end: Date, unit?: Unit) => Date[];
    diff: (dateA: Date, dateB: Date, unit?: Unit) => number;
    ceil: (date: Date, unit?: Unit) => Date;
    min: typeof min;
    max: typeof max;
    minutes: typeof minutes;
    firstVisibleDay: (date: Date, localizer: any) => Date;
    lastVisibleDay: (date: Date, localizer: any) => Date;
    visibleDays: (date: Date, localizer: any) => Date[];

    getSlotDate: (date: Date, minutesFromMidnight: number, offset: number) => Date;
    getTimezoneOffset: (date: Date) => number;
    getDstOffset: (date: Date, dateB: Date) => number;
    getTotalMin: (dateA: Date, dateB: Date) => number;
    getMinutesFromMidnight: (date: Date) => number;
    continuesPrior: (dateA: Date, dateB: Date) => boolean;
    continuesAfter: (dateA: Date, dateB: Date, dateC: Date) => boolean;
    sortEvents: (eventA: Event, eventB: Event) => boolean;
    inEventRange: (event: Event, range: DateRange) => boolean;
    isSameDate: (dateA: Date, dateB: Date) => boolean;
    startAndEndAreDateOnly: (dateA: Date, dateB: Date) => boolean;
    segmentOffset: number;
}

export interface CalendarProps<TEvent extends object = Event, TResource extends object = object>
    extends React.RefAttributes<Calendar<TEvent, TResource>>
{
    children?: React.ReactNode;
    localizer: DateLocalizer;

    date?: stringOrDate | undefined;
    getNow?: () => stringOrDate | undefined;
    view?: View | undefined;
    events?: TEvent[] | undefined;
    backgroundEvents?: TEvent[] | undefined;
    handleDragStart?: ((event: TEvent) => void) | undefined;
    onNavigate?: ((newDate: Date, view: View, action: NavigateAction) => void) | undefined;
    onView?: ((view: View) => void) | undefined;
    onDrillDown?: ((date: Date, view: View) => void) | undefined;
    onSelectSlot?: ((slotInfo: SlotInfo) => void) | undefined;
    onDoubleClickEvent?: ((event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSelectEvent?: ((event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onKeyPressEvent?: ((event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSelecting?: (range: { start: Date; end: Date }) => boolean | undefined;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onRangeChange?: (range: Date[] | { start: Date; end: Date }, view?: View) => void | undefined;
    showAllEvents?: boolean | undefined;
    selected?: any;
    views?: ViewsProps<TEvent, TResource> | undefined;
    doShowMoreDrillDown?: boolean | undefined;
    drilldownView?: View | null | undefined;
    getDrilldownView?:
        | ((targetDate: Date, currentViewName: View, configuredViewNames: View[]) => void)
        | null
        | undefined;
    length?: number | undefined;
    toolbar?: boolean | undefined;
    popup?: boolean | undefined;
    popupOffset?: number | { x: number; y: number } | undefined;
    selectable?: boolean | "ignoreEvents" | undefined;
    longPressThreshold?: number | undefined;
    step?: number | undefined;
    timeslots?: number | undefined;
    rtl?: boolean | undefined;
    eventPropGetter?: EventPropGetter<TEvent> | undefined;
    slotPropGetter?: SlotPropGetter | undefined;
    slotGroupPropGetter?: SlotGroupPropGetter | undefined;
    dayPropGetter?: DayPropGetter | undefined;
    showMultiDayTimes?: boolean | undefined;
    allDayMaxRows?: number | undefined;
    min?: Date | undefined;
    max?: Date | undefined;
    scrollToTime?: Date | undefined;
    enableAutoScroll?: boolean | undefined;
    culture?: Culture | undefined;
    formats?: Formats | undefined;
    components?: Components<TEvent, TResource> | undefined;
    messages?: Messages<TEvent> | undefined;
    dayLayoutAlgorithm?: DayLayoutAlgorithm | DayLayoutFunction<TEvent> | undefined;
    titleAccessor?: keyof TEvent | ((event: TEvent) => string) | undefined;
    tooltipAccessor?: keyof TEvent | ((event: TEvent) => string) | null | undefined;
    allDayAccessor?: keyof TEvent | ((event: TEvent) => boolean) | undefined;
    startAccessor?: keyof TEvent | ((event: TEvent) => Date) | undefined;
    endAccessor?: keyof TEvent | ((event: TEvent) => Date) | undefined;
    resourceAccessor?: keyof TEvent | ((event: TEvent) => any) | undefined;
    resources?: TResource[] | undefined;
    resourceIdAccessor?: keyof TResource | ((resource: TResource) => any) | undefined;
    resourceTitleAccessor?: keyof TResource | ((resource: TResource) => any) | undefined;
    defaultView?: View | undefined;
    defaultDate?: stringOrDate | undefined;
    className?: string | undefined;
    elementProps?: React.HTMLAttributes<HTMLElement> | undefined;
    style?: React.CSSProperties | undefined;
    onShowMore?: ((events: TEvent[], date: Date) => void) | undefined;
}

export interface TitleOptions {
    formats: DateFormat[];
    culture?: Culture | undefined;
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

export class Calendar<TEvent extends object = Event, TResource extends object = object> extends React.Component<
    CalendarProps<TEvent, TResource>
> {}

export interface components {
    timeSlotWrapper: React.ComponentType;
    dateCellWrapper: React.ComponentType;
    eventWrapper: React.ComponentType<Event>;
}
export function globalizeLocalizer(globalizeInstance: object): DateLocalizer;
export function momentLocalizer(momentInstance: object): DateLocalizer;
export function dateFnsLocalizer(config: object): DateLocalizer;
export function luxonLocalizer(
    luxonDateTime: object,
    options?: {
        /**
         * Luxon uses 1 based values for month and weekday
         * So we default to Sunday (7)
         * @default 7
         */
        firstDayOfWeek: number;
    },
): DateLocalizer;
export function dayjsLocalizer(dayjs: object): DateLocalizer;

export const Navigate: {
    PREVIOUS: "PREV";
    NEXT: "NEXT";
    TODAY: "TODAY";
    DATE: "DATE";
};
export const Views: {
    MONTH: "month";
    WEEK: "week";
    WORK_WEEK: "work_week";
    DAY: "day";
    AGENDA: "agenda";
};
export function move(View: ViewStatic | ViewKey, options: MoveOptions): Date;

export interface TimeGridProps<TEvent extends object = Event, TResource extends object = object> {
    eventOffset: number;
    events?: TEvent[] | undefined;
    backgroundEvents?: TEvent[] | undefined;
    resources?: TResource[] | undefined;
    step?: number | undefined;
    timeslots?: number | undefined;
    range?: any[] | undefined;
    min?: Date | undefined;
    max?: Date | undefined;
    getNow?: (() => Date) | undefined;
    scrollToTime?: Date | undefined;
    showMultiDayTimes?: boolean | undefined;
    rtl?: boolean | undefined;
    width?: number | undefined;
    accessors?: object | undefined;
    components?: object | undefined;
    getters?: object | undefined;
    localizer?: object | undefined;
    selected?: object | undefined;
    selectable?: boolean | "ignoreEvents" | undefined;
    longPressThreshold?: number | undefined;
    onNavigate?: ((action: NavigateAction) => void) | undefined;
    onSelectSlot?: ((slotInfo: SlotInfo) => void) | undefined;
    onSelectEnd?: ((...args: any[]) => any) | undefined;
    onSelectStart?: ((...args: any[]) => any) | undefined;
    onSelectEvent?: ((event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onDoubleClickEvent?: ((event: TEvent, e: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onKeyPressEvent?: ((...args: any[]) => any) | undefined;
    onDrillDown?: ((date: Date, view: View) => void) | undefined;
    getDrilldownView?:
        | ((targetDate: Date, currentViewName: View, configuredViewNames: View[]) => void)
        | null
        | undefined;
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
