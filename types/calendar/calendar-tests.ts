import { Calendar } from 'calendar';

const cal = new Calendar();
cal.monthText(2019, 11);
cal.monthText();

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

cal.monthDates(
    year,
    month,
    date => date.getMonth() === month ? date.getDate().toString() : '&nbsp;',
    week => week.join('</td><td>'),
);
