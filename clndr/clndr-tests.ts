import * as Clndr from 'clndr';

let options: Clndr.ClndrOptions = {
    template: '',
    startWithMonth: "YYYY-MM-DD",
    weekOffset: 0,
    daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    targets: {
        day: 'day',
        empty: 'empty',
        nextButton: 'clndr-next-button',
        todayButton: 'clndr-today-button',
        previousButton: 'clndr-previous-button',
        nextYearButton: 'clndr-next-year-button',
        previousYearButton: 'clndr-previous-year-button',
    },
    classes: {
        past: "past",
        today: "today",
        event: "event",
        selected: "selected",
        inactive: "inactive",
        lastMonth: "last-month",
        nextMonth: "next-month",
        adjacentMonth: "adjacent-month",
    },
    clickEvents: {
        click: function (target) { },
        today: function (month) { },
        nextMonth: function (month) { },
        previousMonth: function (month) { },
        onMonthChange: function (month) { },
        nextYear: function (month) { },
        previousYear: function (month) { },
        onYearChange: function (month) { },
        nextInterval: function (start, end) { },
        previousInterval: function (start, end) { },
        onIntervalChange: function (start, end) { }
    },
    useTouchEvents: false,
    ready: function () { },
    doneRendering: function () { },
    events: [],
    dateParameter: 'date',
    multiDayEvents: {
        endDate: 'endDate',
        startDate: 'startDate',
        singleDay: 'date'
    },
    showAdjacentMonths: true,
    adjacentDaysChangeMonth: false,
    forceSixRows: null,
    trackSelectedDate: false,
    selectedDate: null,
    ignoreInactiveDaysInSelection: null,
    lengthOfTime: {
        months: null,
        days: null,
        interval: 1
    },
    extras: { },
    render: function (data) {
        return '<div class="html data as a string"></div>';
    },
    constraints: {
        startDate: '2017-12-22',
        endDate: '2018-01-09'
    },
    moment: null
};

let myCalendar = $('.parent-element').clndr(options);

myCalendar
    .forward()
    .back()
    .setMonth(0)
    .setMonth('February')
    .nextYear()
    .previousYear()
    .setYear(1997)
    .today()
    .setEvents([])
    .addEvents([])
    .removeEvents(event => { return event.id === 'idToRemove'; })
    .destroy();