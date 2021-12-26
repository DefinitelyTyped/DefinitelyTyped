import { Calendar } from 'calendar';

const cal = new Calendar();
cal.monthText(2019, 11);
cal.monthText();

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

// $ExpectType Date[][]
cal.monthDates(year, month);

// $ExpectType number[][]
cal.monthDates(year, month, date => date.getTime());

// $ExpectType string[]
cal.monthDates(
    year,
    month,
    date => date.getTime(),
    week => {
        week; // $ExpectType number[]
        return week.join('</td><td>');
    },
);

// $ExpectType string[]
cal.monthDates(
    year,
    month,
    date => (date.getMonth() === month ? date.getDate().toString() : '&nbsp;'),
    week => {
        week; // $ExpectType string[]
        return week.join('</td><td>');
    },
);

// $ExpectType number[]
cal.monthDates(
    year,
    month,
    date => date.getTime(),
    week => {
        week; // $ExpectType number[]
        return week.length;
    },
);

// $ExpectType number[][]
cal.monthDays(year, month);
