
import node_calendar = require('node-calendar');

var cal = new node_calendar.Calendar(node_calendar.SUNDAY);

assert(cal.getfirstweekday() == node_calendar.SUNDAY);

cal.setfirstweekday(node_calendar.MONDAY);

assert(cal.getfirstweekday() == node_calendar.MONDAY);

assert(node_calendar.MONDAY == 0);
assert(node_calendar.TUESDAY == 1);
assert(node_calendar.WEDNESDAY == 2);
assert(node_calendar.THURSDAY == 3);
assert(node_calendar.FRIDAY == 4);
assert(node_calendar.SATURDAY == 5);
assert(node_calendar.SUNDAY == 6);

assert(node_calendar.day_name[node_calendar.MONDAY] == 'Monday');
assert(node_calendar.day_name[node_calendar.TUESDAY] == 'Tuesday');
assert(node_calendar.day_name[node_calendar.WEDNESDAY] == 'Wednesday');
assert(node_calendar.day_name[node_calendar.THURSDAY] == 'Thursday');
assert(node_calendar.day_name[node_calendar.FRIDAY] == 'Friday');
assert(node_calendar.day_name[node_calendar.SATURDAY] == 'Saturday');
assert(node_calendar.day_name[node_calendar.SUNDAY] == 'Sunday');

assert(node_calendar.day_abbr[node_calendar.MONDAY] == 'Mon');
assert(node_calendar.day_abbr[node_calendar.TUESDAY] == 'Tue');
assert(node_calendar.day_abbr[node_calendar.WEDNESDAY] == 'Wed');
assert(node_calendar.day_abbr[node_calendar.THURSDAY] == 'Thu');
assert(node_calendar.day_abbr[node_calendar.FRIDAY] == 'Fri');
assert(node_calendar.day_abbr[node_calendar.SATURDAY] == 'Sat');
assert(node_calendar.day_abbr[node_calendar.SUNDAY] == 'Sun');

assert(node_calendar.JANUARY == 1);
assert(node_calendar.FEBRUARY == 2);
assert(node_calendar.MARCH == 3);
assert(node_calendar.APRIL == 4);
assert(node_calendar.MAY == 5);
assert(node_calendar.JUNE == 6);
assert(node_calendar.JULY == 7);
assert(node_calendar.AUGUST == 8);
assert(node_calendar.SEPTEMBER == 9);
assert(node_calendar.OCTOBER == 10);
assert(node_calendar.NOVEMBER == 11);
assert(node_calendar.DECEMBER == 12);

assert(node_calendar.month_name[0] == '');
assert(node_calendar.month_name[node_calendar.JANUARY] == 'January');
assert(node_calendar.month_name[node_calendar.FEBRUARY] == 'February');
assert(node_calendar.month_name[node_calendar.MARCH] == 'March');
assert(node_calendar.month_name[node_calendar.APRIL] == 'April');
assert(node_calendar.month_name[node_calendar.MAY] == 'May');
assert(node_calendar.month_name[node_calendar.JUNE] == 'June');
assert(node_calendar.month_name[node_calendar.JULY] == 'July');
assert(node_calendar.month_name[node_calendar.AUGUST] == 'August');
assert(node_calendar.month_name[node_calendar.SEPTEMBER] == 'September');
assert(node_calendar.month_name[node_calendar.OCTOBER] == 'October');
assert(node_calendar.month_name[node_calendar.NOVEMBER] == 'November');
assert(node_calendar.month_name[node_calendar.DECEMBER] == 'December');

assert(node_calendar.month_abbr[0] == '');
assert(node_calendar.month_abbr[node_calendar.JANUARY] == 'Jan');
assert(node_calendar.month_abbr[node_calendar.FEBRUARY] == 'Feb');
assert(node_calendar.month_abbr[node_calendar.MARCH] == 'Mar');
assert(node_calendar.month_abbr[node_calendar.APRIL] == 'Apr');
assert(node_calendar.month_abbr[node_calendar.MAY] == 'May');
assert(node_calendar.month_abbr[node_calendar.JUNE] == 'Jun');
assert(node_calendar.month_abbr[node_calendar.JULY] == 'Jul');
assert(node_calendar.month_abbr[node_calendar.AUGUST] == 'Aug');
assert(node_calendar.month_abbr[node_calendar.SEPTEMBER] == 'Sep');
assert(node_calendar.month_abbr[node_calendar.OCTOBER] == 'Oct');
assert(node_calendar.month_abbr[node_calendar.NOVEMBER] == 'Nov');
assert(node_calendar.month_abbr[node_calendar.DECEMBER] == 'Dec');

cal.itermonthdates(2015, node_calendar.JANUARY).forEach(assertIsDate);
cal.itermonthdays(2014, node_calendar.FEBRUARY).forEach(assertIsNumber);
cal.itermonthdays2(2013, node_calendar.MARCH).forEach(assertDayOfWeekMonth);
cal.iterweekdays().forEach(assertIsNumber);

assertMonthGrid(cal.monthdatescalendar(2012, node_calendar.APRIL), assertIsDate);
assertMonthGrid(cal.monthdays2calendar(2011, node_calendar.MAY), assertDayOfWeekMonth);
assertMonthGrid(cal.monthdayscalendar(2010, node_calendar.JUNE), assertIsNumber);

assertYearGrid(cal.yeardatescalendar(2009, 3), assertIsDate);
assertYearGrid(cal.yeardays2calendar(2008, 2), assertDayOfWeekMonth);
assertYearGrid(cal.yeardayscalendar(2007, 4), assertIsNumber);

node_calendar.setlocale('en_US');

assertIsError(new node_calendar.IllegalDayError());
assertIsError(new node_calendar.IllegalLocaleError());
assertIsError(new node_calendar.IllegalMonthError());
assertIsError(new node_calendar.IllegalTimeError);
assertIsError(new node_calendar.IllegalWeekdayError());

assertIsBoolean(node_calendar.isleap(2000));
assertIsNumber(node_calendar.weekday(2015, node_calendar.JULY, 7));
assertIsNumber(node_calendar.leapdays(2000, 2010));

node_calendar.monthrange(2015, node_calendar.JANUARY).forEach(assertIsNumber);

var timegmt:[number,number,number,number,number,number] = [2014, node_calendar.JULY, 7, 12, 41, 59];
assertIsNumber(node_calendar.timegm(timegmt));


// FUNCTIONS ------------------------------------------------------------------
function assertIsDate(d: Date) {
    assert(d instanceof Date, 'Should be a date');
}

function assertIsNumber(n: number) {
    assert(typeof n == 'number', 'Should be a number');
}

function assertIsBoolean(b: boolean) {
    assert(typeof b == 'boolean', 'Should be a boolean');
}

function assertDayOfWeekMonth(d: [number, number]) {
    assert(d instanceof Array, 'Day of weak/month should be an array');
    assert(d.length == 2, 'Day of weak/month array should contain 2 items');
    assert(typeof d[0] == 'number', 'Day of month should be a number');
    assert(typeof d[1] == 'number', 'Day of week should be a number');
}

function assertWeekRow<T>(row: IWeekRow<T>, assertItemType: (item: T) => void) {
    row.forEach(assertItemType);
}

function assertMonthGrid<T>(grid: IMonthGrid<T>, assertItemType: (item: T) => void) {
    grid.forEach(wr => assertWeekRow(wr, assertItemType));
}

function assertMonthRow<T>(row: IMonthRow<T>, assertItemType: (item: T) => void) {
    row.forEach(mg => assertMonthGrid(mg, assertItemType));
}

function assertYearGrid<T>(grid: IYearGrid<T>, assertItemType: (item: T) => void) {
    grid.forEach(mr => assertMonthRow(mr, assertItemType));
}

function assert(condition: boolean, msg?: string): void {
    if (condition) return;
    throw new Error(msg);
}

function assertIsError(error: Error) {
    assert(typeof error.name == 'string', 'Error name should exist and be a string');
    assert(typeof error.message == 'string', 'Error message should exist and be a string');
}
