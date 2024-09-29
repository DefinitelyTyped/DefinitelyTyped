/// <reference lib="es5" />
/// <reference lib="dom" />

export default Calendar;

declare class Calendar {
    constructor(options: Calendar.ConstructorOptions);
    getOption<K extends keyof Calendar.Options>(option: K): Calendar.Options[K];
    setOption<K extends keyof Calendar.Options>(option: K, value: Calendar.Options[K]): Calendar;
    addEvent(event: Calendar.Event | Calendar.EventInput): Calendar.Event | null;
    getEventById(id: number | string): Calendar.Event | null;
    getEvents(): Calendar.Event[];
    removeEventById(id: number | string): Calendar;
    updateEvent(event: Calendar.Event | Calendar.EventInput): Calendar;
    refetchEvents(): Calendar;
    dateFromPoint(clientX: number, clientY: number): Calendar.DateClickInfo | null;
    destroy(): undefined;
    getView(): Calendar.View;
    next(): Calendar;
    prev(): Calendar;
    unselect(): Calendar;
}

declare namespace Calendar {
    type Plugin = object;

    type DomEvent = GlobalEventHandlersEventMap[keyof GlobalEventHandlersEventMap];

    interface ConstructorOptions {
        target: HTMLElement;
        props: {
            plugins: Plugin[];
            options: Options;
        };
    }

    type Content = string | { html: string } | { domNodes: Node[] };

    type ButtonTextMapping = Record<string, string>;
    type Theme = Record<string, string | string[]>;

    interface CustomButton {
        text: Content;
        click: (e: MouseEvent) => void;
        active?: boolean;
    }

    interface View {
        type: string;
        title: string;
        currentStart: Date;
        currentEnd: Date;
        activeStart: Date;
        activeEnd: Date;
    }

    interface ResourceInput {
        id: number | string;
        title?: Content;
        eventBackgroundColor?: string;
        eventTextColor?: string;
    }

    interface Resource {
        id: string;
        title: Content;
        eventBackgroundColor: string | undefined;
        eventTextColor: string | undefined;
    }

    type durationHMS = string;
    type durationInSeconds = number;
    type DurationInput = durationHMS | durationInSeconds | {
        year?: number;
        years?: number;
        month?: number;
        months?: number;
        day?: number;
        days?: number;
        minute?: number;
        minutes?: number;
        second?: number;
        seconds?: number;
    };

    interface Duration {
        years: number;
        months: number;
        days: number;
        seconds: number;
        inWeeks: boolean;
    }

    interface DateClickInfo {
        date: Date;
        dateStr: string;
        allDay: boolean;
        dayEl: HTMLElement;
        jsEvent: DomEvent;
        view: View;
        resource?: Resource;
    }

    interface DatesSetInfo {
        start: Date;
        end: Date;
        startStr: string;
        endStr: string;
        view: View;
    }

    interface EventClassNamesInfo {
        event: Event;
        view: View;
    }

    interface EventClickInfo {
        el: HTMLElement;
        event: Event;
        jsEvent: DomEvent;
        view: View;
    }

    interface EventContentInfo {
        event: Event;
        timeText: string;
        view: View;
    }

    interface EventDidMountInfo {
        el: HTMLElement;
        event: Event;
        timeText: string;
        view: View;
    }

    interface ResourceDidMountInfo {
        el: HTMLElement;
        resource: Resource;
        date?: Date;
    }

    interface EventDragInfo {
        event: Event;
        jsEvent: DomEvent;
        view: View;
    }

    interface EventDropInfo {
        event: Event;
        oldEvent: Event;
        oldResource?: Resource;
        newResource?: Resource;
        delta: Duration;
        revert: () => void;
        jsEvent: DomEvent;
        view: View;
    }

    interface EventResizeInfo {
        event: Event;
        oldEvent: Event;
        endDelta: Duration;
        revert: () => void;
        jsEvent: DomEvent;
        view: View;
    }

    interface EventDuringResizeInfo {
        event: Event;
        jsEvent: DomEvent;
        view: View;
    }

    interface MouseEnterInfo {
        el: HTMLElement;
        event: Event;
        jsEvent: DomEvent;
        view: View;
    }

    interface MoreLinkInfo {
        num: number;
        text: string;
    }

    interface NoEventsClickInfo {
        jsEvent: DomEvent;
        view: View;
    }

    interface UnselectInfo {
        jsEvent: DomEvent;
        view: View;
    }

    interface ResourceLabelInfo {
        resource: Resource;
        date: Date;
    }

    interface SelectInfo {
        start: Date;
        end: Date;
        startStr: string;
        endStr: string;
        resource: Resource;
    }

    interface EventInput {
        id?: number | string;
        start: Date | isoDateTimeString;
        end: Date | isoDateTimeString;
        title?: Content;
        editable?: boolean;
        startEditable?: boolean;
        durationEditable?: boolean;
        resourceIds?: string | number | Array<string | number>;
        resourceId?: string | number | Array<string | number>;
        display?: "auto" | "background";
        backgroundColor?: string;
        textColor?: string;
        color?: string;
        classNames?: string | string[];
        className?: string | string[];
        styles?: string | string[];
        style?: string | string[];
        extendedProps?: Record<string, unknown>;
    }

    interface Event {
        id: number | string;
        start: Date;
        end: Date;
        resourceIds: Array<number | string>;
        allDay: boolean;
        title: Content;
        editable: boolean | undefined;
        startEditable: boolean | undefined;
        durationEditable: boolean | undefined;
        display: "auto" | "background" | "ghost" | "preview" | "pointer";
        backgroundColor: string | undefined;
        textColor: string | undefined;
        classNames: string[];
        styles: string[];
        extendedProps: Record<string, unknown>;
    }

    interface FetchInfo {
        start: Date;
        end: Date;
        startStr: string;
        endStr: string;
    }

    type EventSourceFunc = (
        info: FetchInfo,
        success: (events: Array<Event | EventInput>) => void,
        failure: (errorInfo: object) => void,
    ) => void;
    type EventSourceFuncPromise = (info: FetchInfo) => Promise<Array<Event | EventInput>>;
    type EventSource = {
        url: string;
        method: string;
        extraParams?: object | (() => object);
    } | {
        events: EventSourceFunc | EventSourceFuncPromise;
    };

    type dayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
    type isoDateString = string;
    type isoDateTimeString = string;

    interface Options {
        allDayContent?: Content;
        allDaySlot?: boolean;
        buttonText?: ButtonTextMapping | ((text: ButtonTextMapping) => ButtonTextMapping);
        customButtons?: Record<string, CustomButton>;
        date?: Date | string | undefined;
        dateClick?: (info: DateClickInfo) => void;
        datesAboveResources?: boolean;
        datesSet?: (info: DatesSetInfo) => void;
        dayCellFormat?: Intl.DateTimeFormatOptions | ((d: Date) => Content);
        dayHeaderAriaLabelFormat?: Intl.DateTimeFormatOptions | ((d: Date) => Content);
        dayHeaderFormat?: Intl.DateTimeFormatOptions | ((d: Date) => Content);
        dayMaxEvents?: boolean;
        dayPopoverFormat?: Intl.DateTimeFormatOptions | ((d: Date) => Content);
        displayEventEnd?: boolean;
        dragScroll?: boolean;
        duration?: DurationInput;
        editable?: boolean;
        events?: Array<Event | EventInput>;
        eventAllUpdated?: (info: { view: View }) => void;
        eventBackgroundColor?: string;
        eventClassNames?: string | string[] | ((info: EventClassNamesInfo) => string | string[]);
        eventClick?: (info: EventClickInfo) => void;
        eventColor?: string;
        eventContent?: Content | ((info: EventContentInfo) => Content | undefined);
        eventDidMount?: (info: EventDidMountInfo) => void;
        eventDragMinDistance?: number;
        eventDragStart?: (info: EventDragInfo) => void;
        eventDragStop?: (info: EventDragInfo) => void;
        eventDrop?: (info: EventDropInfo) => void;
        eventDurationEditable?: boolean;
        eventLongPressDelay?: number;
        eventMouseEnter?: (info: MouseEnterInfo) => void;
        eventMouseLeave?: (info: MouseEnterInfo) => void;
        eventResize?: (info: EventResizeInfo) => void;
        eventResizeStart?: (info: EventDuringResizeInfo) => void;
        eventResizeStop?: (info: EventDuringResizeInfo) => void;
        eventSources?: EventSource[];
        eventStartEditable?: boolean;
        eventTimeFormat?: Intl.DateTimeFormatOptions | ((start: Date, end: Date) => Content);
        eventTextColor?: string;
        filterResourcesWithEvents?: boolean;
        firstDay?: dayOfWeek;
        flexibleSlotTimeLimits?: boolean | { eventFilter: (e: Event) => boolean };
        headerToolbar?: {
            start: string;
            center: string;
            end: string;
        };
        height?: string;
        hiddenDays?: dayOfWeek[];
        highlightedDates?: Array<isoDateString | Date>;
        lazyFetching?: boolean;
        listDayFormat?: Intl.DateTimeFormatOptions | ((d: Date) => Content);
        listDaySideFormat?: Intl.DateTimeFormatOptions | ((d: Date) => Content);
        loading?: (isLoading: boolean) => void;
        locale?: string;
        longPressDelay?: number;
        moreLinkContent?: Content | ((info: MoreLinkInfo) => Content);
        noEventsClick?: (info: NoEventsClickInfo) => void;
        noEventsContent?: Content | (() => Content);
        nowIndicator?: boolean;
        pointer?: boolean;
        resources?: ResourceInput[];
        resourceLabelContent?: Content | ((info: ResourceLabelInfo) => Content);
        resourceLabelDidMount?: (info: ResourceDidMountInfo) => void;
        select?: (info: SelectInfo) => void;
        selectable?: boolean;
        selectBackgroundColor?: string;
        selectLongPressDelay?: number;
        selectMinDistance?: number;
        scrollTime?: DurationInput;
        slotDuration?: DurationInput;
        slotEventOverlap?: boolean;
        slotHeight?: number;
        slotLabelFormat?: Intl.DateTimeFormatOptions | ((time: Date) => Content);
        slotMaxTime?: DurationInput;
        slotMinTime?: DurationInput;
        slotWidth?: number;
        theme?: Theme | ((theme: Theme) => Theme);
        titleFormat?: Intl.DateTimeFormatOptions | ((start: Date, end: Date) => Content);
        unselect?: (info: UnselectInfo) => void;
        unselectAuto?: boolean;
        unselectCancel?: string;
        view?: string;
        viewDidMount?: (info: { view: View }) => void;
        views?: Record<string, Options>;
    }
}
