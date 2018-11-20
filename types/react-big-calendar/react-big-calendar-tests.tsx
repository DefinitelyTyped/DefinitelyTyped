import * as React from "react";
import * as ReactDOM from "react-dom";
import BigCalendar, { BigCalendarProps, Navigate, View, DateRange, DateLocalizer } from "react-big-calendar";

// Don't want to add this as a dependency, because it is only used for tests.
declare const globalize: any;
declare const moment: any;

declare const allViews: View[];

// Testing examples from demos page
// http://intljusticemission.github.io/react-big-calendar/examples/index.html

class CalendarEvent {
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
    desc: string;

    constructor(_title: string, _start: Date, _end: Date, _allDay?: boolean, _desc?: string) {
        this.title = _title;
        this.allDay = _allDay || false;
        this.start = _start;
        this.end = _end;
        this.desc = _desc || '';
    }
}

// Basic Example Test
{
    interface Props {
        localizer: DateLocalizer;
    }
    const Basic = ({ localizer }: Props) => (
        <BigCalendar
            events={getEvents()}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date(2015, 3, 1)}
            localizer={localizer}
        />
    );

    const localizer = BigCalendar.momentLocalizer(moment);

    ReactDOM.render(<Basic localizer={localizer} />, document.body);
}

{
    // Full API Example Test - based on API Documentation
    // http://intljusticemission.github.io/react-big-calendar/examples/index.html#api
    class FullAPIExample extends React.Component<BigCalendarProps<CalendarEvent>> {
        render() {
            return (
                <BigCalendar
                    {...this.props}
                    date={new Date()}
                    view={'day'}
                    events={getEvents()}
                    onNavigate={(newDate: Date, action: Navigate) => { }}
                    onView={(view: View) => { }}
                    onSelectSlot={(slotInfo) => {
                        const start = slotInfo.start;
                        const end = slotInfo.end;
                        const slots = slotInfo.slots;
                    }}
                    onSelectEvent={(event) => { }}
                    onSelecting={(slotInfo) => {
                        const start = slotInfo.start;
                        const end = slotInfo.end;
                        return true;
                    }}
                    views={['day']}
                    toolbar={true}
                    popup={true}
                    popupOffset={20}
                    selectable={true}
                    step={20}
                    rtl={true}
                    eventPropGetter={(event, start, end, isSelected) => ({ className: 'some-class' })}
                    titleAccessor={'title'}
                    allDayAccessor={(event: any) => !!event.allDay}
                    startAccessor={'start'}
                    endAccessor={(event: any) => event.end || event.start}
                    min={new Date()}
                    max={new Date()}
                    scrollToTime={new Date()}
                    formats={{
                        dateFormat: "h a",
                        agendaDateFormat: (date: Date, culture?: string, localizer?: object) => "some-format",
                        dayRangeHeaderFormat: (range: DateRange, culture?: string, localizer?: object) => "some-format"
                    }}
                    messages={{}}
                    timeslots={24}
                    defaultView={'month'}
                    className={'my-calendar'}
                    elementProps={{ id: 'myCalendar' }}
                    components={{
                        event: Event,
                        agenda: {
                            event: EventAgenda
                        }
                    }}
                    dayPropGetter={customDayPropGetter}
                    slotPropGetter={customSlotPropGetter}
                    defaultDate={new Date()}
                />
            );
        }
    }

    const localizer = BigCalendar.globalizeLocalizer(globalize);
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
    ];
    return events;
}

class EventAgenda extends React.Component<any, any> {
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

function Event(event: any) {
    return (
        <span>
            <strong>{event.title}</strong>
            {event.desc && ':  ' + event.desc}
        </span>
    );
}
