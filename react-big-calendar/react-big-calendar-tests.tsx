import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import BigCalendar = require("react-big-calendar");

// Don't want to add this as a dependency, because it is only used for tests.
declare const moment: any;

// Init localizer
BigCalendar.momentLocalizer(moment);

// Testing examples from demos page
// http://intljusticemission.github.io/react-big-calendar/examples/index.html

// Basic Example Test
const BasicExample = React.createClass({
    render() {
        return (
            <BigCalendar
                {...this.props}
                events={getEvents()}
            />
        );
    }
});
ReactDOM.render(<BasicExample />, document.body);
const basicExampleHtml = ReactDOMServer.renderToString(<BasicExample />);
console.log('Test Results -> BasicExample', basicExampleHtml);

// Full API Example Test - based on API Documentation
// http://intljusticemission.github.io/react-big-calendar/examples/index.html#api
const FullAPIExample = React.createClass({
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
});
ReactDOM.render(<FullAPIExample />, document.body);
const fullApiExampleHtml = ReactDOMServer.renderToString(<FullAPIExample />);
console.log('Test Results -> FullAPIExample', fullApiExampleHtml);

// Test fixtures
function getEvents(): Object[] {
    return [
    {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2015, 3, 0),
        'end': new Date(2015, 3, 0)
    },
    {
        'title': 'Long Event',
        'start': new Date(2015, 3, 7),
        'end': new Date(2015, 3, 10)
    },

    {
        'title': 'DTS STARTS',
        'start': new Date(2016, 2, 13, 0, 0, 0),
        'end': new Date(2016, 2, 20, 0, 0, 0)
    },

    {
        'title': 'DTS ENDS',
        'start': new Date(2016, 10, 6, 0, 0, 0),
        'end': new Date(2016, 10, 13, 0, 0, 0)
    },

    {
        'title': 'Some Event',
        'start': new Date(2015, 3, 9, 0, 0, 0),
        'end': new Date(2015, 3, 9, 0, 0, 0)
    },
    {
        'title': 'Conference',
        'start': new Date(2015, 3, 11),
        'end': new Date(2015, 3, 13),
        desc: 'Big conference for important people'
    },
    {
        'title': 'Meeting',
        'start': new Date(2015, 3, 12, 10, 30, 0, 0),
        'end': new Date(2015, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
        'title': 'Lunch',
        'start': new Date(2015, 3, 12, 12, 0, 0, 0),
        'end': new Date(2015, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch'
    },
    {
        'title': 'Meeting',
        'start': new Date(2015, 3, 12, 14, 0, 0, 0),
        'end': new Date(2015, 3, 12, 15, 0, 0, 0)
    },
    {
        'title': 'Happy Hour',
        'start': new Date(2015, 3, 12, 17, 0, 0, 0),
        'end': new Date(2015, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day'
    },
    {
        'title': 'Dinner',
        'start': new Date(2015, 3, 12, 20, 0, 0, 0),
        'end': new Date(2015, 3, 12, 21, 0, 0, 0)
    },
    {
        'title': 'Birthday Party',
        'start': new Date(2015, 3, 13, 7, 0, 0),
        'end': new Date(2015, 3, 13, 10, 30, 0)
    }
    ];
};
