import Calendar from "@event-calendar/core";

// ensure all options are optional
const target = document.createElement("div");
let cal = new Calendar({
    target: target,
    props: {
        plugins: [],
        options: {},
    },
});

// exercise each member function
cal.getOption("date");
const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
cal.setOption("date", tomorrow.toISOString())
    .setOption("date", tomorrow.toISOString());
cal.addEvent({
    id: "123",
    start: new Date(),
    end: new Date(Date.now() + 60 * 60 * 1000),
    title: "an event",
    resourceId: 123,
    resourceIds: ["234"],
});
cal.getEventById(234);
cal.getEventById("234");
cal.getEvents();
cal.removeEventById(345)
    .removeEventById("456")
    .updateEvent({
        id: "123",
        start: new Date(Date.now() + 60 * 60 * 1000),
        end: new Date(Date.now() + 2 * 60 * 60 * 1000),
    });
cal.refetchEvents();
cal.dateFromPoint(0, 0);
cal.getView();
cal.next();
cal.prev();
cal.unselect();
cal.destroy();

const dateFormat: Intl.DateTimeFormatOptions = {
    month: "long",
    weekday: "narrow",
    day: "numeric",
};

const defaultTheme = {
    allDay: "ec-all-day",
    active: "ec-active",
    bgEvent: "ec-bg-event",
    bgEvents: "ec-bg-events",
    body: "ec-body",
    button: "ec-button",
    buttonGroup: "ec-button-group",
    calendar: "ec",
    compact: "ec-compact",
    container: "ec-container",
    content: "ec-content",
    day: "ec-day",
    dayHead: "ec-day-head",
    dayFoot: "ec-day-foot",
    days: "ec-days",
    daySide: "ec-day-side",
    draggable: "ec-draggable",
    dragging: "ec-dragging",
    event: "ec-event",
    eventBody: "ec-event-body",
    eventTag: "ec-event-tag",
    eventTime: "ec-event-time",
    eventTitle: "ec-event-title",
    events: "ec-events",
    extra: "ec-extra",
    ghost: "ec-ghost",
    handle: "ec-handle",
    header: "ec-header",
    hiddenScroll: "ec-hidden-scroll",
    highlight: "ec-highlight",
    icon: "ec-icon",
    line: "ec-line",
    lines: "ec-lines",
    main: "ec-main",
    noEvents: "ec-no-events",
    nowIndicator: "ec-now-indicator",
    otherMonth: "ec-other-month",
    pointer: "ec-pointer",
    popup: "ec-popup",
    preview: "ec-preview",
    resizer: "ec-resizer",
    resizingX: "ec-resizing-x",
    resizingY: "ec-resizing-y",
    resource: "ec-resource",
    selecting: "ec-selecting",
    sidebar: "ec-sidebar",
    sidebarTitle: "ec-sidebar-title",
    today: "ec-today",
    time: "ec-time",
    times: "ec-times",
    title: "ec-title",
    toolbar: "ec-toolbar",
    view: "ec-timeline ec-resource-week-view",
    weekdays: ["ec-sun", "ec-mon", "ec-tue", "ec-wed", "ec-thu", "ec-fri", "ec-sat"],
    withScroll: "ec-with-scroll",
    uniform: "ec-uniform",
};

const FakePlugin = { func: () => {} };

// exercise each option with at least one variant
cal = new Calendar({
    target: target,
    props: {
        plugins: [FakePlugin],
        options: {
            allDayContent: "content",
            allDaySlot: true,
            buttonText: { foo: "bar" },
            customButtons: {
                foo: {
                    text: "Foo",
                    click: () => null,
                },
                bar: {
                    text: "Bar",
                    active: false,
                    click: () => undefined,
                },
            },
            date: "1997-04-12",
            dateClick: (_info: Calendar.DateClickInfo) => {},
            datesAboveResources: false,
            datesSet: (_info: Calendar.DatesSetInfo) => {},
            dayCellFormat: dateFormat,
            dayHeaderAriaLabelFormat: dateFormat,
            dayHeaderFormat: dateFormat,
            dayMaxEvents: true,
            dayPopoverFormat: dateFormat,
            displayEventEnd: true,
            dragScroll: true,
            duration: { days: 7 },
            editable: true,
            events: [
                { id: 123, start: new Date(Date.now()), end: new Date(Date.now() + 60 * 60 * 1000) },
                { id: "2", start: new Date(Date.now()), end: new Date(Date.now() + 60 * 60 * 1000) },
            ],
            eventAllUpdated: (_info: { view: Calendar.View }) => {},
            eventBackgroundColor: "red",
            eventClassNames: "foo bar baz",
            eventClick: (_info: Calendar.EventClickInfo) => {},
            eventColor: "blue",
            eventContent: "content",
            eventDidMount: (_info: Calendar.EventDidMountInfo) => {},
            eventDragMinDistance: 42,
            eventDragStart: (_info: Calendar.EventDragInfo) => {},
            eventDragStop: (_info: Calendar.EventDragInfo) => {},
            eventDrop: (_info: Calendar.EventDropInfo) => {},
            eventDurationEditable: true,
            eventLongPressDelay: 100,
            eventMouseEnter: (_info: Calendar.MouseEnterInfo) => {},
            eventMouseLeave: (_info: Calendar.MouseEnterInfo) => {},
            eventResize: (_info: Calendar.EventResizeInfo) => {},
            eventResizeStart: (_info: Calendar.EventDuringResizeInfo) => {},
            eventResizeStop: (_info: Calendar.EventDuringResizeInfo) => {},
            eventSources: [
                { url: "https://example.com", method: "GET" },
                {
                    events: (
                        _info: Calendar.FetchInfo,
                        _success: (ev: Calendar.EventInput[]) => void,
                        _failure: (obj: object) => void,
                    ) => {},
                },
                {
                    events: async (
                        _info: Calendar.FetchInfo,
                    ) => [{ start: "2024-01-01 00:00:00", end: "2024-01-01 01:00:00" }],
                },
            ],
            eventStartEditable: true,
            eventTimeFormat: dateFormat,
            eventTextColor: "yellow",
            filterResourcesWithEvents: false,
            firstDay: 0,
            flexibleSlotTimeLimits: true,
            headerToolbar: {
                start: "foo",
                center: "bar",
                end: "baz",
            },
            height: "100%",
            hiddenDays: [2],
            highlightedDates: ["2024-01-01", new Date()],
            lazyFetching: true,
            listDayFormat: dateFormat,
            listDaySideFormat: dateFormat,
            loading: (_isLoading: boolean) => {},
            locale: "en-US",
            longPressDelay: 100,
            moreLinkContent: "content",
            noEventsClick: (_info: Calendar.NoEventsClickInfo) => {},
            noEventsContent: "content",
            nowIndicator: true,
            pointer: true,
            resources: [{ id: "foo" }, { id: "bar" }],
            resourceLabelContent: "content",
            resourceLabelDidMount: (_info: Calendar.ResourceDidMountInfo) => {},
            select: (_info: Calendar.SelectInfo) => {},
            selectable: true,
            selectBackgroundColor: "red",
            selectLongPressDelay: 100,
            selectMinDistance: 10,
            scrollTime: "05:00",
            slotDuration: 500,
            slotEventOverlap: true,
            slotHeight: 24,
            slotLabelFormat: dateFormat,
            slotMinTime: 300,
            slotMaxTime: "04:00:00",
            slotWidth: 100,
            theme: defaultTheme,
            titleFormat: dateFormat,
            unselect: (_info: Calendar.UnselectInfo) => {},
            unselectAuto: true,
            unselectCancel: "div.foo",
            view: "resourceTimeGrid",
            viewDidMount: (_info: { view: Calendar.View }) => {},
            views: {
                resourceTimeGrid: {
                    selectMinDistance: 200,
                },
                list: {
                    unselectAuto: false,
                },
            },
        },
    },
});

// use setOption to exercise the other variants' typing
cal.setOption("buttonText", () => {
    return { baz: "bux" };
})
    .setOption("dayCellFormat", (_d: Date) => "content")
    .setOption("dayHeaderAriaLabelFormat", (_d: Date) => "content")
    .setOption("dayHeaderFormat", (_d: Date) => "content")
    .setOption("dayPopoverFormat", (_d: Date) => "content")
    .setOption("eventClassNames", ["foo", "bar", "baz"])
    .setOption("eventContent", (_info: Calendar.EventContentInfo) => {
        return { html: "<marquee>hi</marquee>" };
    })
    .setOption("eventTimeFormat", (_start: Date, _end: Date) => "content")
    .setOption("flexibleSlotTimeLimits", { eventFilter: (_ev: Calendar.Event) => false })
    .setOption("listDayFormat", (_d: Date) => "content")
    .setOption("listDaySideFormat", (_d: Date) => "content")
    .setOption("moreLinkContent", (_info: Calendar.MoreLinkInfo) => "content")
    .setOption("noEventsContent", () => "content")
    .setOption("resourceLabelContent", (_info: Calendar.ResourceLabelInfo) => "content")
    .setOption("slotLabelFormat", (_t: Date) => "content")
    .setOption("theme", (theme: Calendar.Theme) => {
        let result: Calendar.Theme = {};
        for (const k of Object.keys(theme)) {
            result[k] = `foo-${theme[k]}`;
        }
        return result;
    })
    .setOption("titleFormat", (_s: Date, _e: Date) => "content")
    .setOption("views", { resourceTimeGrid: { selectMinDistance: 300 } })
    .setOption("buttonText", (text) => {
        return { ...text, foo: "bar" };
    });

// check some invalid combinations for FooInput and Foo types
// @ts-expect-error
let _incompleteEvent: Calendar.Event = { id: "123" };
// @ts-expect-error
let _invalidDisplay: Calendar.EventInput = { display: "ghost" };
let validResource: Calendar.Resource = {
    id: "foo",
    title: "content",
    eventBackgroundColor: undefined,
    eventTextColor: undefined,
};
const { title, ...rest } = validResource;
// @ts-expect-error
let _invalid_resource: Calendar.Resource = rest;

// check that DomEvent correctly maps to the native 'Event' class descendents
const _checkEventDragInfo: Calendar.EventDragInfo = {
    event: cal.getEventById("foo")!,
    jsEvent: new CustomEvent("bar"),
    view: {} as Calendar.View,
};

// quiet any remaining "unused vars" warnings
if (_incompleteEvent || _invalidDisplay || _invalid_resource || _checkEventDragInfo) {}
