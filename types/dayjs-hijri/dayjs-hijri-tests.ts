import dayjs from "dayjs";
import dayjsHijri from "dayjs-hijri";

dayjs.extend(dayjsHijri);

const date = dayjs().calendar("hijri");
const isHijri = date.isHijri();

const hyear = date.hyear();
const newYear = date.hyear(1445);
const hmonth = date.hMonth();
const newMonth = date.hMonth(6);
const hdate = date.hDate();
const newDate = date.hDate(15);

const formatted = date.format("hYYYY/hMM/hDD");

const hijriDate1 = dayjs.hijri(1445, 6, 15);
const hijriDate2 = dayjs.hijri({
  year: 1445,
  month: 6,
  date: 15,
  hour: 12,
  minute: 30,
});

// Test manipulations
const startOf = date.startOf("month");
const endOf = date.endOf("month");
const added = date.add(1, "month");
const subtracted = date.subtract(1, "year");
const diff = date.diff(hijriDate1, "month");
