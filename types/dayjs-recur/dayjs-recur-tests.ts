import dayjs = require("dayjs");
import recurPlugin = require("dayjs-recur");

dayjs.extend(recurPlugin); // $ExpectType Dayjs

// Static methods
dayjs.recur();
dayjs.recur("now");
dayjs.recur("now", "next month");
dayjs.recur(dayjs("2022-08-23"));
dayjs.recur(dayjs("2022-08-23"), dayjs("2022-09-23"));
dayjs.recur({ start: "now" });
dayjs.recur({ end: "tomorrow" });
dayjs.recur({ start: dayjs("2022-08-23") });
dayjs.recur({ end: dayjs("2022-09-23") });

// Instance methods
const d = dayjs().recur();
d.every(2, "days");
d.every([2, 3], "days");
d.every("monday");
d.every(["monday", "friday"]);
d.day();
d.days();
d.week();
d.weeks();
d.month();
d.months();
d.year();
d.years();
d.dayOfWeek();
d.daysOfWeek();
d.dayOfMonth();
d.daysOfMonth();
d.weekOfMonth();
d.weeksOfMonth();
d.weekOfYear();
d.weeksOfYear();
d.monthOfYear();
d.monthsOfYear();
d.forget("2022-09-10");
d.except("2022-09-10");
d.matches("2022-09-10"); // $ExpectType boolean
d.fromDate("2022-09-10");
d.next(); // $ExpectType Dayjs
d.next(5); // $ExpectType Dayjs[]
d.previous(); // $ExpectType Dayjs
d.previous(5); // $ExpectType Dayjs[]
d.all(); // $ExpectType Dayjs[]
