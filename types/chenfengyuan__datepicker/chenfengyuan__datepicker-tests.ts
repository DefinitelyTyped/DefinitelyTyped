import { DatePickerEvent } from "chenfengyuan__datepicker";

$('[data-toggle="datepicker"]').datepicker();

$().datepicker({
    autoShow: false,
});

$().datepicker({
    autoHide: false,
});

$().datepicker({
    autoPick: false,
});

$().datepicker({
    inline: false,
});

$().datepicker({
    container: '.my-container',
});

$().datepicker({
    container: document.querySelector('.my-container'),
});

$().datepicker({
    container: $('.my-container'),
});

$().datepicker({
    trigger: '.my-container',
});

$().datepicker({
    trigger: document.querySelector('.my-container'),
});

$().datepicker({
    trigger: $('.my-container'),
});

$().datepicker({
    language: 'en-GB',
});

$().datepicker({
    format: 'yyyy-mm-dd',
});

$().datepicker({
    date: new Date(2014, 1, 14),
});

$().datepicker({
    date: '02/14/2014',
});

$().datepicker({
    startDate: new Date(2014, 1, 14),
});

$().datepicker({
    startDate: '02/14/2014',
});

$().datepicker({
    endDate: new Date(2014, 1, 14),
});

$().datepicker({
    endDate: '02/14/2014',
});

$().datepicker({
    startView: 0,
});

// $().datepicker({
//     startView: 3, // @ts-expect-error
// });

$().datepicker({
    weekStart: 1,
});

// $().datepicker({
//     weekStart: 7, // @ts-expect-error
// });

$().datepicker({
    yearFirst: false,
});

$().datepicker({
    yearSuffix: '年',
});

$().datepicker({
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
});

$().datepicker({
    daysShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
});

$().datepicker({
    daysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
});

$().datepicker({
    months: [
        'Jänner',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
    ],
});

$().datepicker({
    monthsShort: ['Jän', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
});

$().datepicker({
    template: '<div class="invalid-template">See documentation</div>',
});

$().datepicker({
    itemTag: 'span',
});

$().datepicker({
    pickedClass: 'chosen',
});

$().datepicker({
    disabledClass: 'inactive',
});

$().datepicker({
    highlightedClass: 'emphasized',
});

$().datepicker({
    offset: 42,
});

$().datepicker({
    zIndex: 42,
});

const now = Date.now();
$().datepicker({
    filter: (date, view) => {
        if (date.getDay() === 0 && view === 'day') {
            return false; // Disable all Sundays, but still leave months/years, whose first day is a Sunday, enabled.
        }
    },
});

// $().datepicker({
//     filter: (date, view) => {
//         // prettier-ignore
//         if (date.getDay() === 0 && view === 'invalid') { // @ts-expect-error
//             return false; // Disable all Sundays, but still leave months/years, whose first day is a Sunday, enabled.
//         }
//     },
// });

$().datepicker({
    show: (e: DatePickerEvent) => {
        console.debug(e.type);
        console.debug(e.namespace);
    },
});

$().datepicker({
    hide: (e: DatePickerEvent) => {
        console.debug(e.type);
        console.debug(e.namespace);
    },
});

$().datepicker({
    pick: (e: DatePickerEvent) => {
        console.debug(e.type);
        console.debug(e.namespace);
        console.debug(e.date);
        console.debug(e.view);
    },
});

$().datepicker('show');

$().datepicker('getMonthName'); // 'January'
$().datepicker('getMonthName', true); // 'Jan'
$().datepicker('getMonthName', 11); // 'December'
$().datepicker('getMonthName', 11, true); // 'Dec'

$().datepicker('getDayName'); // 'Sunday'
$().datepicker('getDayName', true); // 'Sun'
$().datepicker('getDayName', true, true); // 'Su'
$().datepicker('getDayName', 6); // 'Saturday'
$().datepicker('getDayName', 6, true); // 'Sat'
$().datepicker('getDayName', 6, true, true); // 'Sa'

$().datepicker('getDate'); // date object
$().datepicker('getDate', true); // '02/14/2014'

$().datepicker('setDate', new Date(2014, 1, 14));
$().datepicker('setDate', '02/14/2014');

$().datepicker('parseDate', '02/14/2014'); // date object

$().datepicker('formatDate', new Date(2014, 1, 14)); // '02/14/2014'
