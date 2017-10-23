import * as moment from 'moment-jalaali';

moment.loadPersian();

moment.loadPersian({ usePersianDigits: true });

moment.jIsLeapYear(1391);

moment.jDaysInMonth(1395, 11);

const m = moment();

m.jYear();
m.jMonth();
m.jDate();
m.jDayOfYear();
m.jWeek();
m.jWeekYear();

m.jYear(1);
m.jMonth(1);
m.jDate(1);
m.jDayOfYear(1);
m.jWeek(1);
m.jWeekYear(1);

m.startOf('jYear');
m.startOf('jMonth');

m.endOf('jMonth');
m.endOf('jYear');

m.add(1, 'jYear');
m.add(2, 'jMonth');
m.add(3, 'day');

m.add('1', 'jYear');
m.add('2', 'jMonth');
m.add('3', 'day');

m.subtract(1, 'jYear');
m.subtract(2, 'jMonth');
m.subtract(3, 'day');

m.subtract('1', 'jYear');
m.subtract('2', 'jMonth');
m.subtract('3', 'day');
