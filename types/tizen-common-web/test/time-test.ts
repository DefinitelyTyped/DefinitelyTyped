import { TZDate } from "tizen-common-web";

const timezone: string = tizen.time.getLocalTimezone();

const isLeapYear: boolean = tizen.time.isLeapYear(2020);

let datetime: TZDate = tizen.time.getCurrentDateTime();
datetime.equalsTo(tizen.time.getCurrentDateTime());
const hours: number = datetime.getHours();
datetime = datetime.addDuration(new tizen.TimeDuration(1, 'DAYS'));

const now = new tizen.TZDate(new Date(), "Asia/Manila");
console.log(now.toString());
