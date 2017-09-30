/// <reference types="jqueryui" />

// All examples from http://arshaw.com/fullcalendar/docs/

$('#calendar').fullCalendar({});

$('#calendar').fullCalendar({
    weekends: false
});

$('#calendar').fullCalendar({
    dayClick: () => {
        alert('a day has been clicked!');
    }
});

$('#calendar').fullCalendar('next');

$('#calendar').fullCalendar({
    events: 'http://www.google.com/your_feed_url/'
});

$('#calendar').fullCalendar({
    events: {
        url: 'http://www.google.com/your_feed_url/',
        className: 'gcal-event',           // an option!
        currentTimezone: 'America/Chicago' // an option!
    }
});

$('#calendar').fullCalendar({
    eventSources: [
    // source with no options
        "http://www.google.com/your_feed_url1/",

    // source with no options
        "http://www.google.com/your_feed_url2/",

        // source WITH options
        {
            url: "http://www.google.com/your_feed_url3/",
            className: 'nice-event'
        }
    ]
});

$('#calendar').fullCalendar({
    height: 650
});

$('#calendar').fullCalendar('option', 'height', 700);

$('#calendar').fullCalendar({
    contentHeight: 600
});

$('#calendar').fullCalendar('option', 'contentHeight', 650);

$('#calendar').fullCalendar({
    aspectRatio: 2
});

$('#calendar').fullCalendar('option', 'aspectRatio', 1.8);

$('#calendar').fullCalendar({
    viewRender: view => {
        alert('The new title of the view is ' + view.title);
    }
});

$('#calendar').fullCalendar({
    windowResize: view => {
        alert('The calendar has adjusted to a window resize');
    }
});

$('#calendar').fullCalendar('render');

$('#calendar').fullCalendar({
    dragOpacity: .5
});

const view = $('#calendar').fullCalendar('getView');
alert("The view's title is " + view.title);

$(document).ready(() => {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        editable: true,
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });
});

$(document).ready(() => {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultView: 'basicWeek',
        editable: true,
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });
});

$(document).ready(() => {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultView: 'basicDay',
        editable: true,
        events: [
            {
                id: 1,
                title: "Long Event",
                start: new Date(y, m, d, 14, 0),
                end: new Date(y, m, d + 3),
                allDay: false
            },
            {
                id: 2,
                title: "Repeating Event",
                start: new Date(y, m, d - 1),
                allDay: true
            },
            {
                id: 2,
                title: "Repeating Event",
                start: new Date(y, m, d + 6),
                allDay: true
            },
            {
                id: 3,
                title: "Meeting",
                start: new Date(y, m, d, 9, 0),
                allDay: false
            },
            {
                id: 4,
                title: "Click for Facebook",
                start: new Date(y, m, d, 16),
                end: new Date(y, m, d),
                url: "http://facebook.com/",
                allDay: false
            }
        ]
    });
});

$(document).ready(() => {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    $('#calendar').fullCalendar({
        editable: true,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'agendaWeek',
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });
});

$(document).ready(() => {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'agendaDay',
        editable: true,
        events: [
            {
                id: 1,
                title: "Long Event",
                start: new Date(y, m, d),
                end: new Date(y, m, d + 3),
                allDay: true
            },
            {
                id: 2,
                title: "Repeating Event",
                start: new Date(y, m, d - 1),
                allDay: true
            },
            {
                id: 2,
                title: "Repeating Event",
                start: new Date(y, m, d + 6),
                allDay: true
            },
            {
                id: 3,
                title: "Meeting",
                start: new Date(y, m, d, 10, 0),
                allDay: false
            },
            {
                id: 4,
                title: "Click for Facebook",
                start: new Date(y, m, d, 11, 30),
                end: new Date(y, m, d),
                url: "http://facebook.com/",
                allDay: false
            }
        ]
    });
});

$('#my-prev-button').click(() => {
    $('#calendar').fullCalendar('prev');
});

$('#my-next-button').click(() => {
    $('#calendar').fullCalendar('next');
});

$('#my-today-button').click(() => {
    $('#calendar').fullCalendar('today');
});

$('#calendar').fullCalendar('gotoDate', 1, 0, 1);

$('#my-button').click(() => {
    const d = $('#calendar').fullCalendar('getDate');
    alert("The current date of the calendar is " + d);
});

$('#calendar').fullCalendar({
    events: [
        {
            title: 'My Event',
            start: '2010-01-01T14:30:00',
            allDay: false
        }
        // other events here...
    ],
    timeFormat: 'H(:mm)' // uppercase H for 24-hour clock
});

$('#calendar').fullCalendar({
    buttonText: {
        prev: '&lt;',
        next: '&gt;'
    }
});

$('#calendar').fullCalendar({
    dayClick(date, allDay, jsEvent, view) {
        if (allDay) {
            alert('Clicked on the entire day: ' + date);
        } else {
            alert('Clicked on the slot: ' + date);
        }

        alert(`Coordinates: ${jsEvent.pageX},${jsEvent.pageY}`);

        alert('Current view: ' + view.name);

        // change the day's background color just for fun
        $(this).css('background-color', 'red');
    }
});

$('#calendar').fullCalendar({
    eventClick(calEvent, jsEvent, view) {
        alert('Event: ' + calEvent.title);
        alert(`Coordinates: ${jsEvent.pageX},${jsEvent.pageY}`);
        alert('View: ' + view.name);

        // change the border color just for fun
        $(this).css('border-color', 'red');
    }
});

$('#calendar').fullCalendar({
    events: [
        {
            title: 'My Event',
            start: '2010-01-01',
            url: 'http://google.com/'
        }
        // other events here
    ],
    eventClick(event) {
        if (event.url) {
            window.open(event.url);
            return false;
        }
    }
});

$('#calendar').fullCalendar({
    eventSources: [
        // your event source
        {
            url: '/myfeed.php',
            type: 'POST',
            data: {
                custom_param1: 'something',
                custom_param2: 'somethingelse'
            },
            error: () => {
                alert('there was an error while fetching events!');
            },
            color: 'yellow',   // a non-ajax option
            textColor: 'black' // a non-ajax option
        }

        // any other sources...
    ]
});

$('#calendar').fullCalendar({
    events: {
        url: '/myfeed.php',
        type: 'POST',
        data: {
            custom_param1: 'something',
            custom_param2: 'somethingelse'
        },
        error: () => {
            alert('there was an error while fetching events!');
        },
        color: 'yellow',   // a non-ajax option
        textColor: 'black' // a non-ajax option
    }
});

$('#calendar').fullCalendar({
    events: {
        url: '/myfeed.php',
        cache: true
    }
});

$('#calendar').fullCalendar({
    eventSources: [
        // your event source
        {
            url: '/myfeed.php', // use the `url` property
            color: 'yellow',    // an option!
            textColor: 'black'  // an option!
        }

        // any other sources...
    ]
});

$('#calendar').fullCalendar({
    events: '/myfeed.php'
});

$('#calendar').fullCalendar({
    events: [
        {
            title: 'event1',
            start: '2010-01-01'
        },
        {
            title: 'event2',
            start: '2010-01-05',
            end: '2010-01-07'
        },
        {
            title: 'event3',
            start: '2010-01-09 12:30:00',
            allDay: false // will make the time show
        }
    ]
});

$('#calendar').fullCalendar({
    eventSources: [
        // your event source
        {
            events: [ // put the array in the `events` property
                {
                    title: 'event1',
                    start: '2010-01-01'
                },
                {
                    title: 'event2',
                    start: '2010-01-05',
                    end: '2010-01-07'
                },
                {
                    title: 'event3',
                    start: '2010-01-09 12:30:00',
                }
            ],
            color: 'black',     // an option!
            textColor: 'yellow' // an option!
        }

        // any other event sources...
    ]
});

$('#calendar').fullCalendar({
    events(start: any, end: any, callback: any) {
        $.ajax({
            url: 'myxmlfeed.php',
            dataType: 'xml',
            data: {
                // our hypothetical feed requires UNIX timestamps
                start: Math.round(start.getTime() / 1000),
                end: Math.round(end.getTime() / 1000)
            },
            success(doc) {
                const events: any[] = [];
                $(doc).find('event').each(() => {
                    events.push({
                        title: $(this).attr('title'),
                        start: $(this).attr('start') // will be parsed
                    });
                });
                callback(events);
            }
        });
    }
});

$('#calendar').fullCalendar({
    eventSources: [
        // your event source
        {
            events(start: any, end: any, callback: any) {
                // ...
            },
            color: 'yellow',   // an option!
            textColor: 'black' // an option!
        }

        // any other sources...
    ]
});

$('#calendar').fullCalendar({
    eventSources: [
        '/feed1.php',
        '/feed2.php'
    ]
});

$('#calendar').fullCalendar({
    eventClick(event, element) {
        event.title = "CLICKED!";

        $('#calendar').fullCalendar('updateEvent', event);
    }
});

$('#calendar').fullCalendar({
    events: [
        // my event data
    ],
    eventColor: '#378006'
});

interface EventWithDescription extends FullCalendar.EventObject {
    description: string;
}
interface JQuery {
    qtip: any; // dummy plugin interface
}

$('#calendar').fullCalendar({
    events: [
        {
            title: 'My Event',
            start: '2010-01-01',
            description: 'This is a cool event'
        }
        // more events here
    ],
    eventRender(event: EventWithDescription, element: any) {
        element.qtip({
            content: event.description
        });
    }
});
$('#my-draggable').draggable({
    revert: true,      // immediately snap back to original position
    revertDuration: 0  //
});

$('#calendar').fullCalendar({
    droppable: true,
    drop(date, allDay) {
        alert(`Dropped on ${date} with allDay=${allDay}`);
    }
});

$('#calendar').fullCalendar({
    droppable: true,
    dropAccept: '.cool-event',
    drop: () => {
        alert('dropped!');
    }
});

$('#draggable1').draggable();
$('#draggable2').draggable();

$(document).ready(() => {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    $('#calendar').fullCalendar({
        theme: true,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });
});

$(document).ready(() => {
    /* initialize the external events
    -----------------------------------------------------------------*/
    $('#external-events div.external-event').each(() => {
        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        const eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });
    });
    /* initialize the calendar
    -----------------------------------------------------------------*/

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            const originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            const copiedEventObject: any = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        }
    });
});

$('#calendar').fullCalendar('refetchEvents');
