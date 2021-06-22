import moment = require('moment-hijri');

const m = moment();

m.iYear();
m.iMonth();
m.iDate();
m.iDayOfYear();
m.iWeek();
m.iWeekYear();

m.iYear(1);
m.iMonth(1);
m.iDate(1);
m.iDayOfYear(1);
m.iWeek(1);
m.iWeekYear(1);

m.startOf('iYear');
m.startOf('iMonth');

m.endOf('iMonth');
m.endOf('iYear');

m.add(1, 'iYear');
m.add(2, 'iMonth');
m.add(3, 'day');

m.add('1', 'iYear');
m.add('2', 'iMonth');
m.add('3', 'day');

m.subtract(1, 'iYear');
m.subtract(2, 'iMonth');
m.subtract(3, 'day');

m.subtract('1', 'iYear');
m.subtract('2', 'iMonth');
m.subtract('3', 'day');

m.iDaysInMonth();

moment.iDaysInMonth(1410, 8);
moment.iConvert.toHijri(2019, 6, 25);
moment.iConvert.toGregorian(1440, 10, 22);
