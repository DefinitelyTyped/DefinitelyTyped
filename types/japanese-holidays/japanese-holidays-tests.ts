import {isHoliday, isHolidayAt, getHolidaysOf} from 'japanese-holidays';

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
