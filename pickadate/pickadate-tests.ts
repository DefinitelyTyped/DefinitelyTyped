/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="pickadate.d.ts" />

function testApiMethods(api: Pickadate.Api) {
    api.clear();
    api.close();
    api.close(true);
    api.get('value');
    api.get('value', 'yyyy-mm-dd');
    api.off('open');
    api.off('open', 'close', 'render');
    api.on('set', (context: {[key: string]: any}) => { });
    api.on('get', () => { });
    api.open();
    api.open(true);
    api.render();
    api.render(true);
    api.set('value', '2014-09-23');
    api.set({
        value: '2014-09-23',
        max: new Date(2014, 12, 1)
    });
    api.start();
    api.stop();
    api.trigger('open');

    api.start().open().close().stop();

    var pickerInputElement = api.$node;
    pickerInputElement.show();

    var pickerRootElement = api.$root;
    pickerRootElement.show();
}

var datePickerInput = $("input.date");

datePickerInput.pickadate();

datePickerInput.pickadate({
    monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    showMonthsShort: true,
    showWeekdaysFull: true,

    today: 'Today',
    clear: 'Clear',
    close: 'Close',

    labelMonthNext: 'Next month',
    labelMonthPrev: 'Previous month',
    labelMonthSelect: 'Select a month',
    labelYearSelect: 'Select a year',

    // Formats
    format: 'd mmmm, yyyy',
    formatSubmit: 'yyyy-mm-dd',
    hiddenPrefix: 'foo',
    hiddenSuffix: '_submit',
    hiddenName: 'bar',

    // Editable input
    editable: true,

    // Dropdown selectors
    selectYears: true,
    selectMonths: 10,

    // First day of the week
    firstDay: 0,

    // Date limits
    min: new Date(2013, 3, 20),
    max: [2013, 7, 14],

    // Disable dates
    disable: [ new Date(2013, 3, 21) ],

    // Root container
    container: '.root-container',

    // Events
    onStart: () => { },
    onRender: () => { },
    onOpen: () => { },
    onClose: () => { },
    onSet: (context: {[key: string]: any}) => { },
    onStop: () => { }
});

datePickerInput.pickadate({
    klass: {
        // The element states
        input: 'picker__input',
        active: 'picker__input--active',

        // The root picker and states *
        picker: 'picker',
        opened: 'picker--opened',
        focused: 'picker--focused',

        // The picker holder
        holder: 'picker__holder',

        // The picker frame, wrapper, and box
        frame: 'picker__frame',
        wrap: 'picker__wrap',
        box: 'picker__box',

        // The picker header
        header: 'picker__header',

        // Month navigation
        navPrev: 'picker__nav--prev',
        navNext: 'picker__nav--next',
        navDisabled: 'picker__nav--disabled',

        // Month & year labels
        month: 'picker__month',
        year: 'picker__year',

        // Month & year dropdowns
        selectMonth: 'picker__select--month',
        selectYear: 'picker__select--year',

        // Table of dates
        table: 'picker__table',

        // Weekday labels
        weekdays: 'picker__weekday',

        // Day states
        day: 'picker__day',
        disabled: 'picker__day--disabled',
        selected: 'picker__day--selected',
        highlighted: 'picker__day--highlighted',
        now: 'picker__day--today',
        infocus: 'picker__day--infocus',
        outfocus: 'picker__day--outfocus',

        // The picker footer
        footer: 'picker__footer',

        // Today, clear, & close buttons
        buttonClear: 'picker__button--clear',
        buttonClose: 'picker__button--close',
        buttonToday: 'picker__button--today'
    }
});

var datePickerApi = <Pickadate.Api> datePickerInput.pickadate('picker');

datePickerInput.pickadate('open');
datePickerInput.pickadate('get', 'value');

testApiMethods(datePickerApi);

// ====================================================================================================================

var timePickerInput = $("input.time");

timePickerInput.pickatime();

timePickerInput.pickatime({
    // Translations and clear button
    clear: 'Clear',

    // Formats
    format: 'h:i A',
    formatLabel: '<b>h</b>:i <!i>a</!i>',
    formatSubmit: 'HH:i',
    hiddenPrefix: 'prefix__',
    hiddenSuffix: '__suffix',

    // Editable input
    editable: true,

    // Time intervals
    interval: 30,

    // Time limits
    min: new Date(2013, 3, 20, 7),
    max: [7, 14],

    // Disable times
    disable: [ new Date(2013, 3, 21, 7) ],

    // Root container
    container: '.root-container',

    // Events
    onStart: () => { },
    onRender: () => { },
    onOpen: () => { },
    onClose: () => { },
    onSet: (context: {[key: string]: any}) => { },
    onStop: () => { }
});

timePickerInput.pickatime({
    klass: {
        // The element states
        input: 'picker__input',
        active: 'picker__input--active',

        // The root picker and states *
        picker: 'picker picker--time',
        opened: 'picker--opened',
        focused: 'picker--focused',

        // The picker holder
        holder: 'picker__holder',

        // The picker frame, wrapper, and box
        frame: 'picker__frame',
        wrap: 'picker__wrap',
        box: 'picker__box',

        // List of times
        list: 'picker__list',
        listItem: 'picker__list-item',

        // Time states
        disabled: 'picker__list-item--disabled',
        selected: 'picker__list-item--selected',
        highlighted: 'picker__list-item--highlighted',
        viewset: 'picker__list-item--viewset',
        now: 'picker__list-item--now',

        // Clear button
        buttonClear: 'picker__button--clear'
    }
});

var timePickerApi = <Pickadate.Api> timePickerInput.pickatime('picker');

timePickerInput.pickatime('open');
timePickerInput.pickatime('get', 'value');

testApiMethods(timePickerApi);

