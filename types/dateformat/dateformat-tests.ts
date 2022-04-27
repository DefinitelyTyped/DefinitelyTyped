import dateFormat, { DateFormatI18n, DateFormatMasks, formatTimezone, i18n, masks } from 'dateformat';
const now = new Date();

// test type exports
type Masks = DateFormatMasks;
type I18n = DateFormatI18n;

dateFormat(); // $ExpectType string
dateFormat(now); // $ExpectType string
dateFormat('Jun 9 2007'); // $ExpectType string
dateFormat(now.getTime()); // $ExpectType string
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT'); // $ExpectType string
dateFormat('Jun 9 2007', 'dddd, mmmm dS, yyyy, h:MM:ss TT'); // $ExpectType string
dateFormat(now.getTime(), 'dddd, mmmm dS, yyyy, h:MM:ss TT'); // $ExpectType string
dateFormat(now, 'longTime', true); // $ExpectType string
dateFormat('Jun 9 2007', 'longTime', true); // $ExpectType string
dateFormat(now.getTime(), 'longTime', true); // $ExpectType string
dateFormat(now, 'longTime', true, true); // $ExpectType string
dateFormat('Jun 9 2007', 'longTime', true, true); // $ExpectType string
dateFormat(now.getTime(), 'longTime', true, true); // $ExpectType string
dateFormat('longTime', true); // $ExpectType string
dateFormat('longTime', true, true); // $ExpectType string

masks.default; // $ExpectType string
masks.shortDate; // $ExpectType string
masks.paddedShortDate; // $ExpectType string
masks.mediumDate; // $ExpectType string
masks.longDate; // $ExpectType string
masks.fullDate; // $ExpectType string
masks.shortTime; // $ExpectType string
masks.mediumTime; // $ExpectType string
masks.longTime; // $ExpectType string
masks.isoDate; // $ExpectType string
masks.isoTime; // $ExpectType string
masks.isoDateTime; // $ExpectType string
masks.isoUtcDateTime; // $ExpectType string
masks.expiresHeaderFormat; // $ExpectType string

masks.hammerTime = 'HH:MM! "Can\'t touch this!"';

i18n.dayNames = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
i18n.monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
i18n.timeNames = ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'];

formatTimezone(now); // $ExpectType string
formatTimezone('Tue Sep 08 2020 13:26:11 GMT-0500 (Central Daylight Time)'); // $ExpectType string
