import BulmaCalendar from 'bulma-calendar';

new BulmaCalendar('.selector');
BulmaCalendar.attach('.selector');

new BulmaCalendar(document.body);
BulmaCalendar.attach(document.body);

const calendar = new BulmaCalendar('.selector', {
    type: 'date',
    color: '#ffffff',
    isRange: false,
    allowSameDayRange: false,
    lang: 'nl',
    dateFormat: 'DD',
    timeFormat: 'HH',
    displayMode: 'dialog',
    position: 'bottom',
    showHeader: false,
    headerPosition: 'bottom',
    showFooter: false,
    showButtons: false,
    showTodayButton: false,
    showClearButton: false,
    cancelLabel: '',
    clearLabel: '',
    todayLabel: '',
    nowLabel: '',
    validateLabel: '',
    enableMonthSwitch: false,
    enableYearSwitch: false,
    startDate: new Date(),
    endDate: new Date(),
    minDate: new Date(),
    maxDate: new Date(),
    disabledDates: [],
    disabledWeekDays: [],
    weekStart: 1,
    startTime: new Date(),
    endTime: new Date(),
    minuteSteps: 10,
    labelFrom: '',
    labelTo: '',
    closeOnOverlayClick: false,
    closeOnSelect: false,
    toggleOnInputClick: false,
    onReady: () => {},
    icons: {
        previous: '',
        next: '',
        time: '',
        date: '',
    },
});

calendar.show();
calendar.hide();
calendar.isOpen() ? 'yep' : 'nope';
calendar.isRange() ? 'yep' : 'nope';
calendar.value('1970-01-01T00:00:00Z').startDate;
calendar.value('1970-01-01T00:00:00Z').endDate;
calendar.value().startDate;
calendar.value().endDate;
calendar.refresh();
calendar.save();

console.log(calendar.id);

calendar.lang = calendar.lang;
calendar.date = calendar.date;
calendar.startDate = calendar.startDate;
calendar.endDate = calendar.endDate;
calendar.minDate = calendar.minDate;
calendar.maxDate = calendar.maxDate;
calendar.dateFormat = calendar.dateFormat;
calendar.time = calendar.time;
calendar.startTime = calendar.startTime;
calendar.endTime = calendar.endTime;
calendar.timeFormat = calendar.timeFormat;

calendar.on('show', event => {
    event.type === 'show';
});
calendar.on('hide', event => {
    event.type === 'hide';
});
calendar.on('select', event => {
    event.type === 'select';
});
calendar.on('select:start', event => {
    event.type === 'select:start';
});
