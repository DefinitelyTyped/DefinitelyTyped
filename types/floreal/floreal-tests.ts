import { Date as Floreal } from "floreal";

const fd1 = new Floreal(); // $ExpectType FlorealDate
const fd2 = new Floreal("1799-11-09"); // $ExpectType FlorealDate
const fd3 = new Floreal(Date.now()); // $ExpectType FlorealDate
const fd4 = new Floreal(new Date()); // $ExpectType FlorealDate

fd1.dayName(); // $ExpectType: string
fd2.firstDayOfYear(); // $ExpectType: Date
// @ts-expect-error
fd1.foo();
fd1.setYear("XII");
fd1.setYearDecimal(12);
fd1.toDateString(); // $ExpectType string
fd1.toString(); // $ExpectType string
