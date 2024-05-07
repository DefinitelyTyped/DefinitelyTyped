import later = require("@breejs/later");

const now = new Date();

later.second.name; // $ExpectType string
later.second.range; // $ExpectType number
later.second.val(now); // $ExpectType number
later.second.isValid(now, 1); // $ExpectType boolean
later.second.extent(); // $ExpectType number[]
later.second.start(now); // $ExpectType Date
later.second.end(now); // $ExpectType Date
later.second.next(now, 1); // $ExpectType Date
later.second.prev(now, 1); // $ExpectType Date

later.minute.name; // $ExpectType string
later.minute.range; // $ExpectType number
later.minute.val(now); // $ExpectType number
later.minute.isValid(now, 1); // $ExpectType boolean
later.minute.extent(); // $ExpectType number[]
later.minute.start(now); // $ExpectType Date
later.minute.end(now); // $ExpectType Date
later.minute.next(now, 1); // $ExpectType Date
later.minute.prev(now, 1); // $ExpectType Date

later.hour.name; // $ExpectType string
later.hour.range; // $ExpectType number
later.hour.val(now); // $ExpectType number
later.hour.isValid(now, 1); // $ExpectType boolean
later.hour.extent(); // $ExpectType number[]
later.hour.start(now); // $ExpectType Date
later.hour.end(now); // $ExpectType Date
later.hour.next(now, 1); // $ExpectType Date
later.hour.prev(now, 1); // $ExpectType Date

later.day.name; // $ExpectType string
later.day.range; // $ExpectType number
later.day.val(now); // $ExpectType number
later.day.isValid(now, 1); // $ExpectType boolean
later.day.extent(); // $ExpectType number[]
later.day.start(now); // $ExpectType Date
later.day.end(now); // $ExpectType Date
later.day.next(now, 1); // $ExpectType Date
later.day.prev(now, 1); // $ExpectType Date

later.dayOfWeek.name; // $ExpectType string
later.dayOfWeek.range; // $ExpectType number
later.dayOfWeek.val(now); // $ExpectType number
later.dayOfWeek.isValid(now, 1); // $ExpectType boolean
later.dayOfWeek.extent(); // $ExpectType number[]
later.dayOfWeek.start(now); // $ExpectType Date
later.dayOfWeek.end(now); // $ExpectType Date
later.dayOfWeek.next(now, 1); // $ExpectType Date
later.dayOfWeek.prev(now, 1); // $ExpectType Date

later.dayOfWeekCount.name; // $ExpectType string
later.dayOfWeekCount.range; // $ExpectType number
later.dayOfWeekCount.val(now); // $ExpectType number
later.dayOfWeekCount.isValid(now, 1); // $ExpectType boolean
later.dayOfWeekCount.extent(); // $ExpectType number[]
later.dayOfWeekCount.start(now); // $ExpectType Date
later.dayOfWeekCount.end(now); // $ExpectType Date
later.dayOfWeekCount.next(now, 1); // $ExpectType Date
later.dayOfWeekCount.prev(now, 1); // $ExpectType Date

later.dayOfYear.name; // $ExpectType string
later.dayOfYear.range; // $ExpectType number
later.dayOfYear.val(now); // $ExpectType number
later.dayOfYear.isValid(now, 1); // $ExpectType boolean
later.dayOfYear.extent(); // $ExpectType number[]
later.dayOfYear.start(now); // $ExpectType Date
later.dayOfYear.end(now); // $ExpectType Date
later.dayOfYear.next(now, 1); // $ExpectType Date
later.dayOfYear.prev(now, 1); // $ExpectType Date

later.weekOfMonth.name; // $ExpectType string
later.weekOfMonth.range; // $ExpectType number
later.weekOfMonth.val(now); // $ExpectType number
later.weekOfMonth.isValid(now, 1); // $ExpectType boolean
later.weekOfMonth.extent(); // $ExpectType number[]
later.weekOfMonth.start(now); // $ExpectType Date
later.weekOfMonth.end(now); // $ExpectType Date
later.weekOfMonth.next(now, 1); // $ExpectType Date
later.weekOfMonth.prev(now, 1); // $ExpectType Date

later.weekOfMonth.name; // $ExpectType string
later.weekOfMonth.range; // $ExpectType number
later.weekOfMonth.val(now); // $ExpectType number
later.weekOfMonth.isValid(now, 1); // $ExpectType boolean
later.weekOfMonth.extent(); // $ExpectType number[]
later.weekOfMonth.start(now); // $ExpectType Date
later.weekOfMonth.end(now); // $ExpectType Date
later.weekOfMonth.next(now, 1); // $ExpectType Date
later.weekOfMonth.prev(now, 1); // $ExpectType Date

later.month.name; // $ExpectType string
later.month.range; // $ExpectType number
later.month.val(now); // $ExpectType number
later.month.isValid(now, 1); // $ExpectType boolean
later.month.extent(); // $ExpectType number[]
later.month.start(now); // $ExpectType Date
later.month.end(now); // $ExpectType Date
later.month.next(now, 1); // $ExpectType Date
later.month.prev(now, 1); // $ExpectType Date

later.year.name; // $ExpectType string
later.year.range; // $ExpectType number
later.year.val(now); // $ExpectType number
later.year.isValid(now, 1); // $ExpectType boolean
later.year.extent(); // $ExpectType number[]
later.year.start(now); // $ExpectType Date
later.year.end(now); // $ExpectType Date
later.year.next(now, 1); // $ExpectType Date
later.year.prev(now, 1); // $ExpectType Date

later.parse.recur().on(1).minute(); // $ExpectType RecurrenceBuilder
later.parse.recur().on(1).hour(); // $ExpectType RecurrenceBuilder
later.parse.recur().on("08:00:00").time(); // $ExpectType RecurrenceBuilder
later.parse.recur().first().minute(); // $ExpectType RecurrenceBuilder
later.parse.recur().on(5).hour().last().dayOfMonth(); // $ExpectType RecurrenceBuilder
later.parse.recur().on(5).minute().onWeekend(); // $ExpectType RecurrenceBuilder
later.parse.recur().on(5).minute().onWeekday(); // $ExpectType RecurrenceBuilder
later.parse.recur().every(10).minute(); // $ExpectType RecurrenceBuilder
later.parse.recur().every(3).month(); // $ExpectType RecurrenceBuilder
later.parse.recur().after(55).minute(); // $ExpectType RecurrenceBuilder
later.parse.recur().every(6).hour().after("09:00").time(); // $ExpectType RecurrenceBuilder
later.parse.recur().before(3).month(); // $ExpectType RecurrenceBuilder
later.parse.recur().every(6).hour().before("09:00").time(); // $ExpectType RecurrenceBuilder
later.parse.recur().after("09:00").time().before("18:00").time(); // $ExpectType RecurrenceBuilder
later.parse.recur().after(9).hour().before(18).hour(); // $ExpectType RecurrenceBuilder
later.parse.recur().every(15).minute().startingOn(10); // $ExpectType RecurrenceBuilder
later.parse.recur().every(2).hour().first().dayOfMonth().and().on(8, 20).hour().last().dayOfMonth(); // $ExpectType RecurrenceBuilder
later.parse.recur().every().minute().except().every(2).minute().between(2, 59).and().every(3).minute().between(3, 59); // $ExpectType RecurrenceBuilder

const schedule = later.parse.text("every 5 min"); // $ExpectType ScheduleData

const timer = later.setTimeout(() => {}, schedule); // $ExpectType Timer
const timer2 = later.setInterval(() => {}, schedule); // $ExpectType Timer
timer.clear(); // $ExpectType void
