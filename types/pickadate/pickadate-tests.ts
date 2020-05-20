// Date picker tests from http://amsul.ca/pickadate.js/date/

$('.datepicker').pickadate();

// Change the month and weekday labels
$('.datepicker').pickadate({
    weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    showMonthsShort: true
});

// Change button text or hide a button completely
$('.datepicker').pickadate({
    today: '',
    clear: 'Clear selection',
    close: 'Cancel'
});

// Change the title attributes of several elements within the picker
$('.datepicker').pickadate({
    labelMonthNext: 'Go to the next month',
    labelMonthPrev: 'Go to the previous month',
    labelMonthSelect: 'Pick a month from the dropdown',
    labelYearSelect: 'Pick a year from the dropdown',
    selectMonths: true,
    selectYears: true
});

// Extend the default picker options for all instances.
$.extend($.fn.pickadate.defaults, {
    monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    today: 'aujourd\'hui',
    clear: 'effacer',
    formatSubmit: 'yyyy/mm/dd'
});

// Or, pass the months and weekdays as an array for each invocation.
$('.datepicker').pickadate({
    monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    today: 'aujourd\'hui',
    clear: 'effacer',
    formatSubmit: 'yyyy/mm/dd'
});

// Display a human-friendly format and use an alternate one to submit to the server
$('.datepicker').pickadate({
    // Escape any "rule" characters with an exclamation mark (!).
    format: 'You selecte!d: dddd, dd mmm, yyyy',
    formatSubmit: 'yyyy/mm/dd',
    hiddenPrefix: 'prefix__',
    hiddenSuffix: '__suffix'
});

// Send the hidden value only
$('.datepicker').pickadate({
    formatSubmit: 'yyyy/mm/dd',
    hiddenName: true
});

// Editable input
$('.datepicker').pickadate({
    editable: true
});

// Display select menus to pick the month and year
$('.datepicker').pickadate({
    selectYears: true,
    selectMonths: true
});

// Specify the number of years to show in the dropdown using an
// even integer - half before and half after the year in focus:
$('.datepicker').pickadate({
    // `true` defaults to 10.
    selectYears: 4
});

// The first day of the week can be set to either Sunday or Monday.
// Anything truth-y sets it as Monday and anything false-y as Sunday.
$('.datepicker').pickadate({
    firstDay: 1
});

// Date Limits

// Using JavaScript dates
$('.datepicker').pickadate({
    min: new Date(2013, 3, 20),
    max: new Date(2013, 7, 14)
});

// Using arrays formatted as [YEAR,MONTH,DATE]
$('.datepicker').pickadate({
    min: [2013, 3, 20],
    max: [2013, 7, 14]
});

// Using integers or a boolean
$('.datepicker').pickadate({
    // An integer (positive/negative) sets it relative to today.
    min: -15,
    // `true` sets it to today. `false` removes any limits.
    max: true
});

// Disable dates

// Using JavaScript dates
$('.datepicker').pickadate({
    disable: [
        new Date(2013, 3, 13),
        new Date(2013, 3, 29)
    ]
});

// Using arrays formatted as [YEAR,MONTH,DATE]
$('.datepicker').pickadate({
    disable: [
        [2015, 3, 3],
        [2015, 3, 12],
        [2015, 3, 20]
    ]
});

// Using integers as days of the week (1 to 7)
$('.datepicker').pickadate({
    disable: [
        1, 4, 7
    ]
});

// Using objects as a range of dates
$('.datepicker').pickadate({
    disable: [
        { from: [2016, 2, 14], to: [2016, 2, 27] }
    ]
});

// Enable only a specific or arbitrary set of dates by setting true as the first item in the collection
$('.datepicker').pickadate({
    disable: [
        true,
        1, 4, 7,
        [2013, 3, 3],
        [2013, 3, 12],
        [2013, 3, 20],
        new Date(2015, 3, 13),
        new Date(2015, 3, 29)
    ]
});

// Enable dates that fall within a range of disabled dates by adding
// the inverted parameter to the item within the collection
$('.datepicker').pickadate({
    disable: [
        5,
        [2015, 10, 21, 'inverted'],
        { from: [2016, 3, 15], to: [2016, 3, 25] },
        [2016, 3, 20, 'inverted'],
        { from: [2016, 3, 17], to: [2016, 3, 18], inverted: true }
    ]
});

// Specify where to insert the root element by passing any valid CSS selector to the container option
$('.datepicker').pickadate({
    container: '#root-picker-outlet'
});

// Specify where to insert the hidden element by passing any valid CSS selector to the containerHidden option
$('.datepicker').pickadate({
    containerHidden: '#hidden-input-outlet'
});

// Close on a user action
$('.datepicker').pickadate({
    closeOnSelect: false,
    closeOnClear: false
});

// Fire off events as the user interacts with the picker
$('.datepicker').pickadate({
    onStart: function () {
        console.log('Hello there :)')
    },
    onRender: function () {
        console.log('Whoa.. rendered anew')
    },
    onOpen: function () {
        console.log('Opened up')
    },
    onClose: function () {
        console.log('Closed now')
    },
    onStop: function () {
        console.log('See ya.')
    },
    onSet: function (context) {
        console.log('Just set stuff:', context)
    }
});

// Time picker tests from http://amsul.ca/pickadate.js/time/

$('.timepicker').pickatime();

// Extend the default picker options for all instances.
$.extend($.fn.pickatime.defaults, {
    clear: 'Effacer'
});

// Or, pass the months and weekdays as an array for each invocation.
$('.timepicker').pickatime({
    clear: 'Effacer'
});

// Change the text or hide the button completely by passing a false-y value
$('.timepicker').pickatime({
    clear: ''
});

// Display a human-friendly label and input format and use an alternate one to submit
$('.timepicker').pickatime({
    // Escape any "rule" characters with an exclamation mark (!).
    format: 'T!ime selected: h:i a',
    formatLabel: '<b>h</b>:i <!i>a</!i>',
    formatSubmit: 'HH:i',
    hiddenPrefix: 'prefix__',
    hiddenSuffix: '__suffix'
});

// The formatLabel option is unique. It can contain HTML and it can also
// be a function if you want to create the label during run-time:
$('.timepicker').pickatime({
    formatLabel: function (time) {
        var hours = (time.pick - this.get('now').pick) / 60,
            label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
        return 'h:i a <sm!all>' + (hours ? Math.abs(hours) : '') + label + '</sm!all>'
    }
});

// Send the hidden value only
$('.timepicker').pickatime({
    formatSubmit: 'HH:i',
    hiddenName: true
});

// Editable input
$('.timepicker').pickatime({
    editable: true
});

// Choose the minutes interval between each time in the list
$('.timepicker').pickatime({
    interval: 150
});

// Time Limits

// Using JavaScript dates
$('.timepicker').pickatime({
    min: new Date(2015, 3, 20, 7),
    max: new Date(2015, 7, 14, 18, 30)
});

// Using arrays formatted as [HOUR,MINUTE]
$('.timepicker').pickatime({
    min: [7, 30],
    max: [14, 0]
});

// Using integers or a boolean
$('.timepicker').pickatime({
    // An integer (positive/negative) sets it as intervals relative from now.
    min: -5,
    // `true` sets it to now. `false` removes any limits.
    max: true
});

// Disable Times

// Using JavaScript dates
$('.timepicker').pickatime({
    disable: [
        new Date(2016, 3, 20, 4, 30),
        new Date(2016, 3, 20, 9)
    ]
});

// Using arrays formatted as [HOUR,MINUTE]
$('.timepicker').pickatime({
    disable: [
        [0, 30],
        [2, 0],
        [8, 30],
        [9, 0]
    ]
});

// Using integers as hours (0 to 23)
$('.timepicker').pickatime({
    disable: [
        3, 5, 7
    ]
});

// Using objects as a range of times
$('.timepicker').pickatime({
    disable: [
        { from: [2, 0], to: [5, 30] }
    ]
});

// Enable only a specific or arbitrary set of times by setting true as the first item in the collection
$('.timepicker').pickatime({
    disable: [
        true,
        3, 5, 7,
        [0, 30],
        [2, 0],
        [8, 30],
        [9, 0]
    ]
});

// Enable times that fall within a range of disabled times by adding
// the inverted parameter to the item within the collection
$('.timepicker').pickatime({
    disable: [
        1,
        [1, 30, 'inverted'],
        { from: [4, 30], to: [10, 30] },
        [6, 30, 'inverted'],
        { from: [8, 0], to: [9, 0], inverted: true }
    ]
});

// Specify where to insert the root element by passing any valid CSS selector to the container option
$('.timepicker').pickatime({
    container: '#root-picker-outlet'
});

// Specify where to insert the hidden element by passing any valid CSS selector to the containerHidden option
$('.timepicker').pickatime({
    containerHidden: '#hidden-input-outlet'
});

// Close on a user action
$('.timepicker').pickatime({
    closeOnSelect: false,
    closeOnClear: false
});

// Fire off events as the user interacts with the picker
$('.timepicker').pickatime({
    onStart: function () {
        console.log('Hello there :)')
    },
    onRender: function () {
        console.log('Whoa.. rendered anew')
    },
    onOpen: function () {
        console.log('Opened up')
    },
    onClose: function () {
        console.log('Closed now')
    },
    onStop: function () {
        console.log('See ya.')
    },
    onSet: function (context) {
        console.log('Just set stuff:', context)
    }
});

// API tests from http://amsul.ca/pickadate.js/api/

var $input = $('.datepicker').pickadate();

// Use the picker object directly.
var picker = $input.pickadate('picker');

picker.$node;
picker.$root;
picker._hidden;

// Or pass through the element’s plugin data.
$input.pickadate('open');
$input.pickadate('close');
$input.pickadate('close');
$input.pickadate('start');
$input.pickadate('stop');
$input.pickadate('render');
$input.pickadate('get');
$input.pickadate('set', 'highlight', 1429970887654);
$input.pickadate('on', 'open', function () { });
$input.pickadate('on', 'close', function () { });
$input.pickadate('off', 'open', 'close');
$input.pickadate('trigger', 'open');

$input.pickadate('$node');
$input.pickadate('$root');
$input.pickadate('_hidden');

picker.open().clear().close();

picker.open();
picker.close();
picker.close(true);

picker.open(false);
$(document).on('click', function () {
    picker.close();
});

picker.start();
picker.stop();
picker.render();
picker.render(true);
picker.clear();

picker.get(); // Short for `picker.get('value')`

picker.get('select');
picker.get('select', 'yyyy/mm/dd');

picker.get('highlight');
picker.get('highlight', 'yyyy/mm/dd');

picker.get('view');
picker.get('view', 'yyyy/mm/dd');

picker.get('min');
picker.get('min', 'yyyy/mm/dd');
picker.get('max');
picker.get('max', 'yyyy/mm/dd');

picker.get('open');
picker.get('start');
picker.get('id');
picker.get('enable');
picker.get('disable');

// Set multiple at once
picker.set({
    select: new Date(2015, 3, 20),
    highlight: [2015, 3, 20],
    min: -4
});

// Muted callbacks

// One at a time
picker.set('disable', 'flip', { muted: true });

// Multiple at once
picker.set({
    select: [1988, 7, 14],
    view: new Date(1988, 7, 14),
    max: 4
}, { muted: true });

// Clear the value in the picker’s input element.
picker.set('clear');

// Set select for a date item object

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('select', [2013, 3, 20]);

// Using JavaScript Date objects.
picker.set('select', new Date(2013, 3, 20));

// Using positive integers as UNIX timestamps.
picker.set('select', 1365961912346);

// Using a string along with the parsing format (defaults to `format` option).
picker.set('select', '2016-04-20', { format: 'yyyy-mm-dd' });

// Set select for a time item object

// Using arrays formatted as [HOUR,MINUTE].
picker.set('select', [3, 0]);

// Using JavaScript Date objects.
picker.set('select', new Date(2015, 3, 20, 10, 30));

// Using positive integers as minutes.
picker.set('select', 540);

// Using a string along with the parsing format (defaults to `format` option).
picker.set('select', '04-30', { format: 'hh-i' });

// Set highlight for a date item object

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('highlight', [2013, 3, 20]);

// Using JavaScript Date objects.
picker.set('highlight', new Date(2015, 3, 30));

// Using positive integers as UNIX timestamps.
picker.set('highlight', 1365961912346);

// Using a string along with the parsing format (defaults to `format` option).
picker.set('highlight', '2016-04-20', { format: 'yyyy-mm-dd' });

// Set highlight for a time item object

// Using arrays formatted as [HOUR,MINUTE].
picker.set('highlight', [15, 30]);

// Using JavaScript Date objects.
picker.set('highlight', new Date(2015, 3, 20, 10, 30));

// Using positive integers as minutes.
picker.set('highlight', 1080);

// Using a string along with the parsing format (defaults to `format` option).
picker.set('highlight', '04-30', { format: 'hh-i' });

// Set view for a date item object

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('view', [2000, 3, 20]);

// Using JavaScript Date objects.
picker.set('view', new Date(1988, 7, 14));

// Using positive integers as UNIX timestamps.
picker.set('view', 1587355200000);

// Using a string along with the parsing format (defaults to `format` option).
picker.set('view', '2016-04-20', { format: 'yyyy-mm-dd' });

// Set view for a time item object

// Using arrays formatted as [HOUR,MINUTE].
picker.set('view', [15, 30]);

// Using JavaScript Date objects.
picker.set('view', new Date(2015, 3, 20, 10, 30));

// Using positive integers as minutes.
picker.set('view', 1080);

// Using a string along with the parsing format (defaults to `format` option).
picker.set('view', '04-30', { format: 'hh-i' });

// Limit the min date

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('min', [2013, 3, 20]);

// Using JavaScript Date objects.
picker.set('min', new Date(2015, 7, 14));

// Using formatted strings.
picker.set('min', '8 January, 2016');

// Using integers as days relative to today.
picker.set('min', -4);

// Using `true` for "today".
picker.set('min', true);

// Using `false` to remove.
picker.set('min', false);

// Limit the min time

// Using arrays formatted as [HOUR,MINUTE].
picker.set('min', [15, 30]);

// Using JavaScript Date objects.
picker.set('min', new Date(2015, 3, 20, 10, 30));

// Using formatted strings.
picker.set('min', '4:30 PM');

// Using integers as intervals relative from now.
picker.set('min', -4);

// Using `true` for "now".
picker.set('min', true);

// Using `false` to remove.
picker.set('min', false);

// Limit the max date

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('max', [2013, 3, 20]);

// Using JavaScript Date objects.
picker.set('max', new Date(2015, 7, 14));

// Using formatted strings.
picker.set('max', '20 April, 2016');

// Using integers as days relative to today.
picker.set('max', 4);

// Using `true` for "today".
picker.set('max', true);

// Using `false` to remove.
picker.set('max', false);

// Limit the max time

// Using arrays formatted as [HOUR,MINUTE].
picker.set('max', [15, 30]);

// Using JavaScript Date objects.
picker.set('max', new Date(2015, 3, 20, 10, 30));

// Using formatted strings.
picker.set('max', '11:30 AM');

// Using integers as intervals relative from now.
picker.set('max', 4);

// Using `true` for "now".
picker.set('max', true);

// Using `false` to remove.
picker.set('max', false);

// Disable/enable specific dates
picker.set('disable', [
    // Using a collection of arrays formatted as [YEAR,MONTH,DATE]
    [2016, 9, 3], [2016, 9, 9], [2016, 9, 20],

    // Using JavaScript Date objects
    new Date(2015, 9, 13), new Date(2015, 9, 24)
]);

picker.set('enable', [
    [2016, 9, 9],
    [2016, 9, 13],
    new Date(2015, 9, 20)
]);

// Disable/enable ranges of dates
picker.set('disable', [
    1, 4, 7, // Using integers as the days of the week (1 to 7)

    // Using a range object with a "from" and "to" property
    { from: [2016, 2, 14], to: [2016, 2, 27] }
]);

picker.set('enable', [
    4,
    { from: [2016, 2, 24], to: [2016, 2, 27] }
]);

// "Flip" the enabled and disabled dates:
picker.set('disable', 'flip');
picker.set('enable', 'flip');

// Disable all the dates
picker.set('disable', true);
picker.set('enable', false);

// Enable all the dates
picker.set('enable', true);
picker.set('disable', false);

// Disable/enable specific times
picker.set('disable', [
    // Using a collection of arrays formatted as [HOUR,MINUTES]
    [2, 30], [4, 30], [9, 0],

    // Using JavaScript Date objects
    new Date(2015, 9, 13, 6), new Date(2015, 9, 13, 12, 30)
]);

picker.set('enable', [
    [4, 30], [6, 0],
    new Date(2015, 9, 13, 9)
]);

// Disable/enable ranges of times
picker.set('disable', [
    1, 4, 7, // Using integers as hours of the day (from 0 to 23)

    // Using a range object with a “from” and “to” property
    { from: [10, 30], to: [18, 0] }
]);

picker.set('enable', [
    4,
    { from: [14, 0], to: [16, 30] }
]);

// "Flip" the enabled and disabled times:
picker.set('disable', 'flip');
picker.set('enable', 'flip');

// Disable all the times
picker.set('disable', true);
picker.set('enable', true);

// Enable all the times
picker.set('enable', true);
picker.set('disable', false);

// Enable an element within a disabled range

picker.set('disable', [
    // Disable all Mondays, except November 15th, 2015.
    1, [2015, 10, 15, 'inverted'],

    // Disable all dates from March 2nd, 2016 to March 28th, 2016
    // except for March 10th and all between March 14th and March 23rd.
    { from: [2016, 2, 2], to: [2016, 2, 28] },
    [2016, 2, 10, 'inverted'],
    { from: [2016, 2, 14], to: [2016, 2, 23], inverted: true }
]);

picker.set('disable', [
    // Disable all times from 1:00 AM to 1:59 AM, except 1:30 AM.
    1, [1, 30, 'inverted'],

    // Disable all times from 3:00 AM to 6:00 PM except
    // for 4:30 AM and all between 7:30 AM and 11:30 AM.
    { from: [3, 0], to: [18, 0] },
    [4, 30, 'inverted'],
    { from: [7, 30], to: [11, 30], inverted: true }
]);

// For the time picker only, you can change the interval between each time display
// using integers representing the interval length in minutes.
picker.set('interval', 15);
picker.set('interval', 20);
picker.set('interval', 120);


picker.on({
    open: function () {
        console.log('Opened up!')
    },
    close: function () {
        console.log('Closed now')
    },
    render: function () {
        console.log('Just rendered anew')
    },
    stop: function () {
        console.log('See ya')
    },
    set: function (thingSet) {
        console.log('Set stuff:', thingSet)
    }
});

$('.datepicker').pickadate({
    onOpen: function () {
        console.log('Opened up!')
    },
    onClose: function () {
        console.log('Closed now')
    },
    onRender: function () {
        console.log('Just rendered anew')
    },
    onStart: function () {
        console.log('Hello there :)')
    },
    onStop: function () {
        console.log('See ya')
    },
    onSet: function (thingSet) {
        console.log('Set stuff:', thingSet)
    }
});

picker.on('open', function () {
    console.log('Even when I’m opened, I’m not logged..');
});
picker.off('open');

// Trigger an event’s callbacks that have been queued up
picker.on('open', function () {
    console.log('This logs without opening!');
});
picker.trigger('open');

// Optionally, you can also pass some data to the method being triggered
picker.on('open', function (data) {
    console.log('This logs without opening with this data:', data);
});
picker.trigger('open', { some: 'value' });
