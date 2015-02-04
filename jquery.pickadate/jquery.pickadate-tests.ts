///<reference path="jquery.pickadate.d.ts" />

/*
* Date picker tests
* From http://amsul.ca/pickadate.js/date.htm
*/

$('.datepicker').pickadate();

$('.datepicker').pickadate({
    weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    showMonthsShort: true
});

$('.datepicker').pickadate({
    today: '',
    clear: 'Clear selection'
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

$('.datepicker').pickadate({
    // Escape any "rule" characters with an exclamation mark (!).
    format: 'You selecte!d: dddd, dd mmm, yyyy',
    formatSubmit: 'yyyy/mm/dd',
    hiddenPrefix: 'prefix__',
    hiddenSuffix: '__suffix'
});

$('.datepicker').pickadate({
    selectYears: true,
    selectMonths: true
});

$('.datepicker').pickadate({
    // `true` defaults to 10.
    selectYears: 4
});

$('.datepicker').pickadate({
    firstDay: 1
});

$('.datepicker').pickadate({
    min: new Date(2013, 3, 20),
    max: new Date(2013, 7, 14)
});

$('.datepicker').pickadate({
    min: [2013, 3, 20],
    max: [2013, 7, 14]
});

$('.datepicker').pickadate({
    // An integer (positive/negative) sets it relative to today.
    min: -15,
    // `true` sets it to today. `false` removes any limits.
    max: true
});

$('.datepicker').pickadate({
    disable: [
        [2013, 3, 3],
        [2013, 3, 12],
        [2013, 3, 20],
        [2013, 3, 29]
    ]
});

$('.datepicker').pickadate({
    disable: [
        1, 4, 7
    ]
});

$('.datepicker').pickadate({
    disable: [
        new Date(2013, 3, 13),
        new Date(2013, 3, 29)
    ]
});

$('.datepicker').pickadate({
    disable: [
        true,
        1, 4, 7,
        [2013, 3, 3],
        [2013, 3, 12],
        [2013, 3, 20],
        [2013, 3, 29]
    ]
});

$('.datepicker').pickadate({
    container: '#root-outlet'
});

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
    onSet: function (event) {
        console.log('Just set stuff:', event)
    }
});

/*
* Time picker tests
* From http://amsul.ca/pickadate.js/time.htm
*/

$('.timepicker').pickatime();

$('.timepicker').pickatime({
    clear: ''
});

$('.timepicker').pickatime({
    // Escape any "rule" characters with an exclamation mark (!).
    format: 'T!ime selected: h:i a',
    formatLabel: '<b>h</b>:i <!i>a</!i>',
    formatSubmit: 'HH:i',
    hiddenPrefix: 'prefix__',
    hiddenSuffix: '__suffix'
});

$('.timepicker').pickatime({
    formatLabel: function (time: TimePickerItemObject) {
        var hours = (time.pick - this.get('now').pick) / 60,
            label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
        return 'h:i a <sm!all>' + (hours ? Math.abs(hours).toString() : '') + label + '</sm!all>'
    }
});

$('.datepicker').pickadate({
    interval: 150
});

$('.timepicker').pickatime({
    min: [7, 30],
    max: [14, 0]
});

$('.timepicker').pickatime({
    // An integer (positive/negative) sets it as intervals relative from now.
    min: -5,
    // `true` sets it to now. `false` removes any limits.
    max: true
});

$('.timepicker').pickatime({
    disable: [
        [0, 30],
        [2, 0],
        [8, 30],
        [9, 0]
    ]
});

$('.timepicker').pickatime({
    disable: [
        3, 5, 7
    ]
});

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

$('.timepicker').pickatime({
    container: '#root-outlet'
});

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
    onSet: function (event) {
        console.log('Just set stuff:', event)
    }
});

/*
* API tests
* From http://amsul.ca/pickadate.js/api.htm
*/

var $input = $('.datepicker').pickadate();

// Use the picker object directly.
var picker = $input.pickadate('picker');

picker.open().clear().close();

picker.open();
picker.close();
picker.close(true);

picker.open(false)
$(document).on('click', function () {
    picker.close()
});

picker.start();
picker.stop();
picker.render();
picker.clear();

picker.get() // Short for `picker.get('value')`

picker.get('select');
picker.get('select', 'yyyy/mm/dd');

picker.get('highlight');
picker.get('highlight', 'yyyy/mm/dd');

picker.get('view');

picker.get('min');
picker.get('min', 'yyyy/mm/dd');
picker.get('max');
picker.get('max', 'yyyy/mm/dd');

picker.get('open');
picker.get('start');
picker.get('id');
picker.get('disable');

picker.set('clear');

// reset disabled dates
picker.set('disable', undefined);

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('select', [2013, 3, 20]);

// Using JavaScript Date objects.
picker.set('select', new Date(2013,03,20));

// Using positive integers as UNIX timestamps.
picker.set('select', 1365961912346);

// Using arrays formatted as [HOUR,MINUTE].
picker.set('select', [3, 0]);

// Using positive integers as minutes.
picker.set('select', 540);

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('highlight', [2013, 3, 20]);

// Using JavaScript Date objects.
picker.set('highlight', new Date(2013,7,14));

// Using positive integers as UNIX timestamps.
picker.set('highlight', 1365961912346);

// Using arrays formatted as [HOUR,MINUTE].
picker.set('highlight', [15, 30]);

// Using positive integers as minutes.
picker.set('highlight', 1080);

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('view', [2000, 3, 20]);

// Using JavaScript Date objects.
picker.set('view', new Date(1988,7,14));

// Using positive integers as UNIX timestamps.
picker.set('view', 1587355200000);

// Using arrays formatted as [HOUR,MINUTE].
picker.set('view', [15, 30]);

// Using positive integers as minutes.
picker.set('view', 1080);

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('min', [2013, 3, 20]);

// Using JavaScript Date objects.
picker.set('min', new Date(2013,7,14));

// Using integers as days relative to today.
picker.set('min', -4);

// Using `true` for "today".
picker.set('min', true);

// Using `false` to remove.
picker.set('min', false);

// Using arrays formatted as [HOUR,MINUTE].
picker.set('min', [15, 30]);

// Using integers as intervals relative from now.
picker.set('min', -4);

// Using `true` for "now".
picker.set('min', true);

// Using `false` to remove.
picker.set('min', false);

// Using arrays formatted as [YEAR,MONTH,DATE].
picker.set('max', [2013, 3, 20]);

// Using JavaScript Date objects.
picker.set('max', new Date(2013,7,14));

// Using integers as days relative to today.
picker.set('max', 4);

// Using `true` for "today".
picker.set('max', true);

// Using `false` to remove.
picker.set('max', false);

// Using arrays formatted as [HOUR,MINUTE].
picker.set('max', [15, 30]);

// Using integers as intervals relative from now.
picker.set('max', 4);

// Using `true` for "now".
picker.set('max', true);

// Using `false` to remove.
picker.set('max', false);

picker.on('open', function () {
    console.log('Opened.. and here I am!');
});

picker.on({
    open: function () {
        console.log('Opened.. and here I am!');
    },
    close: function () {
        console.log('Closed.. and here I am!');
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
    onSet: function (event) {
        console.log('Set stuff:', event)
    }
});

picker.on('open', function () {
    console.log('Didn\'t open.. yet here I am!');
})
picker.trigger('open');

picker.$node;
picker.$root;