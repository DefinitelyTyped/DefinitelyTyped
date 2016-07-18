/// <reference path="react-big-calendar.d.ts"/>
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts"/>
/// <reference path="../moment/moment.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import BigCalendar from 'react-big-calendar';

// init localizer
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
const results = ReactDOMServer.renderToString(<BasicExample />);
console.log('Test Results -> BasicExample', results);



// test fixtures
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
