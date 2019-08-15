import GregorianCalendar = require('gregorian-calendar');
import GregorianCalendarFormat = require('gregorian-calendar-format');

let cal = new GregorianCalendar();
cal.set(2016, 7, 27, 0, 0, 0, 0);

let fmt = new GregorianCalendarFormat('yyyy-MM');

let calAsStr = fmt.format(cal);
console.log(calAsStr);

