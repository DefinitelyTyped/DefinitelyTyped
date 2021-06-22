import {
    getHolidaysOf,
    getJDate,
    getJDay,
    getJFullYear,
    getJHours,
    getJMinutes,
    getJMonth,
    isHoliday,
    isHolidayAt,
    j2u,
    jDate,
    shiftDate,
    u2j,
    uDate,
} from "japanese-holidays";

const date = new Date(2017, 0, 9);
const h: string | undefined = isHoliday(date);
if (h !== undefined) {
    h.charAt(0);
}

const noFurikae: string | undefined = isHoliday(date, false);

const hAt = isHolidayAt(date);
if (hAt !== undefined) {
    hAt.charAt(0);
}

isHolidayAt(date, false);

const holidays = getHolidaysOf(2017);
const first = holidays[0];
const n: string = first.name;
const m: number = first.month;
const d: number = first.date;
getJDate(date); // $ExpectType number
getJDay(date); // $ExpectType number
getJFullYear(date); // $ExpectType number
getJHours(date); // $ExpectType number
getJMinutes(date); // $ExpectType number
getJMonth(date); // $ExpectType number
j2u(date); // $ExpectType Date
jDate(date.getFullYear(), date.getMonth(), date.getDay()); // $ExpectType Date
// $ExpectType Date
shiftDate(
    date,
    date.getFullYear(),
    date.getMonth(),
    date.getDay(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
);
u2j(date); // $ExpectType Date
uDate(date.getFullYear(), date.getMonth(), date.getDay()); // $Expect Date
