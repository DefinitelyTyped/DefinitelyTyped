import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import BigCalendar from "react-big-calendar";

// Don't want to add this as a dependency, because it is only used for tests.
declare const moment: any;

// Init localizer
BigCalendar.momentLocalizer(moment);

// Testing examples from demos page
// http://intljusticemission.github.io/react-big-calendar/examples/index.html

class CalendarEvent {
    public title: string;
    public allDay: boolean;
    public start: Date;
    public end: Date;
    public desc: string;

    public constructor(_title: string, _start: Date, _end: Date, _allDay?: boolean, _desc?: string) {
        this.title = _title;
        this.allDay = _allDay || false;
        this.start = _start;
        this.end = _end;
        this.desc = _desc || '';
    }
}

// Basic Example Test
class BasicExample extends React.Component {
    render() {
        return (
            <BigCalendar
                {...this.props}
                events={getEvents()}
            />
        );
    }
}
ReactDOM.render(<BasicExample />, document.body);
const basicExampleHtml = ReactDOMServer.renderToString(<BasicExample />);
console.log('Test Results -> BasicExample', basicExampleHtml);

// Full API Example Test - based on API Documentation
// http://intljusticemission.github.io/react-big-calendar/examples/index.html#api
class FullAPIExample extends React.Component {
    render() {
        return (
            <BigCalendar
                {...this.props}
                date={new Date()}
                view={'string'}
                events={getEvents()}
                onNavigate={() => { } }
                onView={() => { } }
                onSelectSlot={(slotInfo) => {
                    const start = slotInfo.start;
                    const end = slotInfo.end;
                    const slots = slotInfo.slots;
                } }
                onSelectEvent={(event) => { } }
                onSelecting={(slotInfo) => {
                    const start = slotInfo.start;
                    const end = slotInfo.end;
                    return true;
                } }
                views={{}}
                toolbar={true}
                popup={true}
                popupOffset={20}
                selectable={true}
                step={20}
                rtl={true}
                eventPropGetter={(event, start, end, isSelected) => { } }
                titleAccessor={'title'}
                allDayAccessor={(row:any) => !!row.allDay}
                startAccessor={'start'}
                endAccessor={(row:any) => row.end || row.start}
                min={new Date()}
                max={new Date()}
                scrollToTime={new Date()}
                formats={{}}
                components={{}}
                messages={{}}
                timeslots={24}
                defaultView={'month'}
                className={'my-calendar'}
                elementProps={{id: 'myCalendar'}}
            />
        );
    }
}
ReactDOM.render(<FullAPIExample />, document.body);
const fullApiExampleHtml = ReactDOMServer.renderToString(<FullAPIExample />);
console.log('Test Results -> FullAPIExample', fullApiExampleHtml);

// Test fixtures
function getEvents(): CalendarEvent[] {
    var events: CalendarEvent[] = [
        new CalendarEvent('All Day Event', new Date(2015, 3, 0), new Date(2015, 3, 0), true),
        new CalendarEvent('Long Event', new Date(2015, 3, 7), new Date(2015, 3, 10)),
        new CalendarEvent('DTS STARTS', new Date(2016, 2, 13, 0, 0, 0), new Date(2016, 2, 20, 0, 0, 0)),
        new CalendarEvent('DTS ENDS', new Date(2016, 10, 6, 0, 0, 0), new Date(2016, 10, 13, 0, 0, 0)),
        new CalendarEvent('Some Event', new Date(2015, 3, 9, 0, 0, 0), new Date(2015, 3, 9, 0, 0, 0)),
        new CalendarEvent('Conference', new Date(2015, 3, 11), new Date(2015, 3, 13), undefined, 'Big conference for important people'),
        new CalendarEvent('Meeting', new Date(2015, 3, 12, 10, 30, 0, 0),new Date(2015, 3, 12, 12, 30, 0, 0), undefined, 'Pre-meeting meeting, to prepare for the meeting'),
        new CalendarEvent('Lunch', new Date(2015, 3, 12, 12, 0, 0, 0),new Date(2015, 3, 12, 13, 0, 0, 0), undefined, 'Power lunch'),
        new CalendarEvent('Meeting', new Date(2015, 3, 12, 14, 0, 0, 0),new Date(2015, 3, 12, 15, 0, 0, 0)),
        new CalendarEvent('Happy Hour', new Date(2015, 3, 12, 17, 0, 0, 0),new Date(2015, 3, 12, 17, 30, 0, 0),undefined,'Most important meal of the day'),
        new CalendarEvent('Dinner', new Date(2015, 3, 12, 20, 0, 0, 0),new Date(2015, 3, 12, 21, 0, 0, 0)),
        new CalendarEvent('Birthday Party', new Date(2015, 3, 13, 7, 0, 0),new Date(2015, 3, 13, 10, 30, 0)),
    ];
    return events;
};
