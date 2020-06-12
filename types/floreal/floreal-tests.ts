import { Date } from 'floreal';

const fd1 = new Date();
const fd2 = new Date('1799-11-09');

fd1.dayName(); // $ExpectType: string
fd2.firstDayOfYear(); // $ExpectType: Date
fd1.foo(); // $ExpectError
fd1.setYear('XII');
fd1.setYearDecimal(12);
