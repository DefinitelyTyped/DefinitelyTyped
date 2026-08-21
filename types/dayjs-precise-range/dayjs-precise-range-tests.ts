import dayjs = require("dayjs");
import preciseDiff = require("dayjs-precise-range");

dayjs.extend(preciseDiff); // $ExpectType Dayjs

// Static methods
const m1 = dayjs();
const m2 = dayjs();

dayjs.preciseDiff(m1, m2);
dayjs.preciseDiff(m1, m2, true);
dayjs.preciseDiff(m1, m2, false);

// Instance methods
m1.preciseDiff(m2);
m1.preciseDiff(m2, true);
m1.preciseDiff(m2, false);
