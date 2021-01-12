import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Calendar,
    CalendarProps,
    momentLocalizer,
    globalizeLocalizer,
    dateFnsLocalizer,
    move,
    Views,
    components,
    Navigate,
    View,
    DateRange,
    DateLocalizer,
    ToolbarProps,
    EventProps,
    EventWrapperProps,
    NavigateAction,
    Culture, DayLayoutAlgorithm, DayLayoutFunction,
    stringOrDate,
    ViewProps,
    Day,
    TimeGrid,
    Week
} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

// Don't want to add this as a dependency, because it is only used for tests.
declare const globalize: any;
declare const moment: any;
declare const dateFnsConfig: any;

declare const allViews: View[];

// Testing examples from demos page
// http://intljusticemission.github.io/react-big-calendar/examples/index.html

class CalendarEvent {
    title: string;
    allDay: boolean;
    start: Date;
    endDate: Date;
    desc: string;
    resourceId?: string;
    tooltip?: string;

    constructor(_title: string, _start: Date, _endDate: Date, _allDay?: boolean, _desc?: string, _resourceId?: string) {
        this.title = _title;
        this.allDay = _allDay || false;
        this.start = _start;
        this.endDate = _endDate;
        this.desc = _desc || '';
        this.resourceId = _resourceId;
    }
}

class CalendarResource {
    title: string;
    id: string;

    constructor(id: string, title: string) {
        this.id = id;
        this.title = title;
    }
}

// Basic Example Test
{
    interface Props {
        localizer: DateLocalizer;
    }
    const Basic = ({ localizer }: Props) => (
        <Calendar
            events={getEvents()}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date(2015, 3, 1)}
            localizer={localizer}
        />
    );

    const localizer = momentLocalizer(moment);

    ReactDOM.render(<Basic localizer={localizer} />, document.body);
}

// date-fns Example Test
{
    interface Props {
        localizer: DateLocalizer;
    }
    const Basic = ({ localizer }: Props) => (
        <Calendar
            events={getEvents()}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date(2015, 3, 1)}
            localizer={localizer}
        />
    );

    const localizer = dateFnsLocalizer(dateFnsConfig);

    ReactDOM.render(<Basic localizer={localizer} />, document.body);
}

// handle-drag-start Example Test
{
    interface Props {
        localizer: DateLocalizer;
    }
    const HandleDragStart = ({ localizer }: Props) => (
        <Calendar
            events={getEvents()}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date(2015, 3, 1)}
            localizer={localizer}
            handleDragStart={console.log}
        />
    );

    const localizer = dateFnsLocalizer(dateFnsConfig);

    ReactDOM.render(<HandleDragStart localizer={localizer} />, document.body);
}

// Drag and Drop Example Test
{
    class MyCalendar extends Calendar<CalendarEvent, CalendarResource> {}

    interface Props {
        localizer: DateLocalizer;
    }
    const DragAndDropCalendar = withDragAndDrop<CalendarEvent, CalendarResource>(MyCalendar);
    const DnD = ({ localizer }: Props) => (
        <DragAndDropCalendar
            events={getEvents()}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date(2015, 3, 1)}
            localizer={localizer}
            selectable={true}
            resizable={true}
            onEventDrop={console.log}
            onEventResize={console.log}
            onDragStart={console.log}
            onDropFromOutside={console.log}
            draggableAccessor={() => true}
            resizableAccessor={() => true}
            elementProps={{ id: 'myCalendar' }}
            components={{
                event: Event,
                agenda: {
                    event: EventAgenda,
                },
                toolbar: Toolbar,
                eventWrapper: EventWrapper,
            }}
        />
    );

    const localizer = momentLocalizer(moment);

    ReactDOM.render(<DnD localizer={localizer} />, document.body);
}

// overriding 'views' props, with custom day view
{
    interface DayComponentProps {
        date: stringOrDate;
    }
    class DayComponent extends React.Component<DayComponentProps> {
        static title() {
            return 'title';
        }

        static navigate() {
            return new Date();
        }
    }
    // supplying object to 'views' prop with only some of the supported views.
    // A view can be a boolean or implement title() and navigate()
    ReactDOM.render(<Calendar
                        localizer={momentLocalizer(moment)}
                        views={{
                            day: DayComponent,
                            work_week: true
                        }}
    />, document.body);
}

// overriding 'views' props, with custom day view using ViewProps interface
{
    class DayComponent extends React.Component<ViewProps> {
        static title() {
            return 'title';
        }

        static navigate() {
            return new Date();
        }
    }
    // supplying object to 'views' prop with only some of the supported views.
    // A view can be a boolean or implement title() and navigate()
    ReactDOM.render(<Calendar
                        localizer={momentLocalizer(moment)}
                        views={{
                            day: DayComponent,
                            work_week: true
                        }}
    />, document.body);
}

// optional 'localizer' prop
{
    ReactDOM.render(<Calendar localizer={momentLocalizer(moment)} />, document.body);
}

{
    class MyCalendar extends Calendar<CalendarEvent, CalendarResource> {}

    // Full API Example Test - based on API Documentation
    // http://intljusticemission.github.io/react-big-calendar/examples/index.html#api
    class FullAPIExample extends React.Component<CalendarProps<CalendarEvent, CalendarResource>> {
        render() {
            return (
                <MyCalendar
                    {...this.props}
                    date={new Date()}
                    getNow={() => new Date()}
                    view={'day'}
                    events={getEvents()}
                    onNavigate={(newDate: Date, view: View, action: NavigateAction) => {}}
                    onView={(view: View) => {}}
                    onSelectSlot={slotInfo => {
                        const start = slotInfo.start;
                        const end = slotInfo.end;
                        const slots = slotInfo.slots;
                    }}
                    onSelectEvent={event => {}}
                    onSelecting={slotInfo => {
                        const start = slotInfo.start;
                        const end = slotInfo.end;
                        return true;
                    }}
                    dayLayoutAlgorithm={customLayoutAlgorithm}
                    views={['day']}
                    toolbar={true}
                    popup={true}
                    popupOffset={20}
                    onShowMore={(events, date) => {
                        console.log('onShowMore fired, events: %O, date: %O', events, date);
                    }}
                    selectable={true}
                    step={20}
                    rtl={true}
                    eventPropGetter={(event, start, end, isSelected) => ({ className: 'some-class' })}
                    titleAccessor={'title'}
                    tooltipAccessor={'tooltip'}
                    allDayAccessor={(event: CalendarEvent) => !!event.allDay}
                    startAccessor={'start'}
                    endAccessor={(event: CalendarEvent) => event.endDate || event.start}
                    min={new Date()}
                    max={new Date()}
                    scrollToTime={new Date()}
                    formats={{
                        dateFormat: 'h a',
                        agendaDateFormat: (date: Date, culture?: Culture, localizer?: DateLocalizer) => 'some-format',
                        dayRangeHeaderFormat: (range: DateRange, culture?: Culture, localizer?: DateLocalizer) => 'some-format',
                    }}
                    messages={{
                        date: 'Date',
                        time: 'Time',
                        event: 'Event',
                        allDay: 'All Day',
                        week: 'Week',
                        work_week: 'Work Week',
                        day: 'Day',
                        month: 'Month',
                        previous: 'Back',
                        next: 'Next',
                        yesterday: 'Yesterday',
                        tomorrow: 'Tomorrow',
                        today: 'Today',
                        agenda: 'Agenda',
                        noEventsInRange: 'There are no events in this range.',
                        showMore: total => `+${total} more`,
                    }}
                    timeslots={24}
                    defaultView={'month'}
                    className={'my-calendar'}
                    elementProps={{ id: 'myCalendar' }}
                    components={{
                        event: Event,
                        agenda: {
                            event: EventAgenda,
                        },
                        toolbar: Toolbar,
                        eventWrapper: EventWrapper,
                    }}
                    dayPropGetter={customDayPropGetter}
                    slotPropGetter={customSlotPropGetter}
                    slotGroupPropGetter={customGroupSlotPropGetter}
                    defaultDate={new Date()}
                    resources={getResources()}
                    resourceAccessor={event => event.resourceId}
                    resourceIdAccessor={resource => resource.id}
                    resourceTitleAccessor={resource => resource.title}
                    style={{ height: 500 }}
                />
            );
        }
    }

    const localizer = globalizeLocalizer(globalize);
    ReactDOM.render(<FullAPIExample localizer={localizer} />, document.body);
}

// Test fixtures
function getEvents(): CalendarEvent[] {
    const events: CalendarEvent[] = [
        new CalendarEvent('All Day Event', new Date(2015, 3, 0), new Date(2015, 3, 0), true),
        new CalendarEvent('Long Event', new Date(2015, 3, 7), new Date(2015, 3, 10)),
        new CalendarEvent('DTS STARTS', new Date(2016, 2, 13, 0, 0, 0), new Date(2016, 2, 20, 0, 0, 0)),
        new CalendarEvent('DTS ENDS', new Date(2016, 10, 6, 0, 0, 0), new Date(2016, 10, 13, 0, 0, 0)),
        new CalendarEvent('Some Event', new Date(2015, 3, 9, 0, 0, 0), new Date(2015, 3, 9, 0, 0, 0)),
        new CalendarEvent('Conference', new Date(2015, 3, 11), new Date(2015, 3, 13), undefined, 'Big conference for important people'),
        new CalendarEvent('Meeting', new Date(2015, 3, 12, 10, 30, 0, 0), new Date(2015, 3, 12, 12, 30, 0, 0), undefined, 'Pre-meeting meeting, to prepare for the meeting'),
        new CalendarEvent('Lunch', new Date(2015, 3, 12, 12, 0, 0, 0), new Date(2015, 3, 12, 13, 0, 0, 0), undefined, 'Power lunch'),
        new CalendarEvent('Meeting', new Date(2015, 3, 12, 14, 0, 0, 0), new Date(2015, 3, 12, 15, 0, 0, 0)),
        new CalendarEvent('Happy Hour', new Date(2015, 3, 12, 17, 0, 0, 0), new Date(2015, 3, 12, 17, 30, 0, 0), undefined, 'Most important meal of the day'),
        new CalendarEvent('Dinner', new Date(2015, 3, 12, 20, 0, 0, 0), new Date(2015, 3, 12, 21, 0, 0, 0)),
        new CalendarEvent('Birthday Party', new Date(2015, 3, 13, 7, 0, 0), new Date(2015, 3, 13, 10, 30, 0)),
        new CalendarEvent('Alice\'s break', new Date(2015, 3, 14, 20, 0, 0, 0), new Date(2015, 3, 14, 21, 0, 0, 0), undefined, undefined, "alice"),
        new CalendarEvent('Bob\'s break', new Date(2015, 3, 15, 7, 0, 0), new Date(2015, 3, 15, 10, 30, 0), undefined, undefined, "bob"),
    ];
    return events;
}

function getResources(): CalendarResource[] {
    return [
        new CalendarResource('alice', 'Alice'),
        new CalendarResource('bob', 'Bob')
    ];
}

class EventAgenda extends React.Component<EventProps<CalendarEvent>> {
    render() {
        // const { label } = this.props;
        return (
            <div>
                <div>Calendar Events</div>
            </div>
        );
    }
}

const customDayPropGetter = (date: Date) => {
    if (date.getDate() === 7 || date.getDate() === 15)
        return {
            className: 'special-day',
            style: {
                border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
            },
        };
    else return {};
};

const customSlotPropGetter = (date: Date) => {
    if (date.getDate() === 7 || date.getDate() === 15)
        return {
            className: 'special-day',
        };
    else return {};
};

const customGroupSlotPropGetter = () => {
    return {
        className: 'slot-group'
    };
};

const customLayoutAlgorithm: DayLayoutFunction<CalendarEvent> = (args: {
    events: CalendarEvent[],
    minimumStartDifference: any,
    slotMetrics: any,
    accessors: any,
}) => {
    // This is where the events would get styled in an actual algorithm, but for TS test we just want to confirm it returns
    return args.events.map(e => {
        return { event: e, style: {} };
    });
};

function Event(props: EventProps<CalendarEvent>) {
    return (
        <span>
            <strong>{props.event.title}</strong>
            {props.event.desc && ':  ' + props.event.desc}
        </span>
    );
}

function EventWrapper(props: EventWrapperProps<CalendarEvent>) {
    const { continuesEarlier, event, label, accessors = {}, style } = props;
    return (
        <div style={style}>
            <div>{continuesEarlier}-{label}-{accessors.title && event && accessors.title(event)}</div>
        </div>
    );
}

class Toolbar extends React.Component<ToolbarProps<CalendarEvent, CalendarResource>> {
    render() {
        const { date, label, view } = this.props;
        return (
            <div>
                <div>{date.toJSON()}-{label}-{view}</div>
            </div>
        );
    }
}

// test OnRangeChange return types
{
    interface Props {
        localizer: DateLocalizer;
    }
    const Basic = ({ localizer }: Props) => (
        <Calendar
            events={getEvents()}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date(2015, 3, 1)}
            localizer={localizer}
            onRangeChange={(range, view) => {
                console.log('onRangeChange fired, range: %O, view: %O', range, view);
            }}
        />
    );

    const localizer = momentLocalizer(moment);

    ReactDOM.render(<Basic localizer={localizer} />, document.body);
}

// Test Week and TimeGrid types
class MyWorkWeek extends Week {
    render() {
        const { date } = this.props;
        const range = MyWorkWeek.range(date);
        return <TimeGrid {...this.props} range={range} eventOffset={15} />;
    }
}

MyWorkWeek.range = date => {
    const start = date;
    return [start, new Date(start.setDate(start.getDate() + 1))];
};

MyWorkWeek.navigate = (date, action) => {
    return date;
};

MyWorkWeek.title = date => {
    return `My awesome week: ${date.toLocaleDateString()}`;
};

class MyWeek extends Week {
    render() {
        const { date } = this.props;
        const range = MyWeek.range(date);
        return <TimeGrid {...this.props} range={range} eventOffset={15} />;
    }
}

MyWeek.range = date => {
    const start = date;
    return [start, new Date(start.setDate(start.getDate() + 1))];
};

MyWeek.navigate = (date, action) => {
    return date;
};

MyWeek.title = date => {
    return `My awesome week: ${date.toLocaleDateString()}`;
};

// Test Day types
class MyDay extends Day {
    render() {
        const { date } = this.props;
        return date.toString();
    }
}
