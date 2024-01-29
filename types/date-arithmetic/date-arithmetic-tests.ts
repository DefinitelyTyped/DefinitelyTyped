import dateArithmetic = require("date-arithmetic");
import { add, diff, eq, gt, gte, inRange, lt, lte, max, min, neq, subtract } from "date-arithmetic";

dateArithmetic.add(new Date(2010, 7, 23), 2, "seconds");
dateArithmetic.add(new Date(2010, 7, 23), 2, "minutes");
dateArithmetic.add(new Date(2010, 7, 23), 2, "hours");
dateArithmetic.add(new Date(2010, 7, 23), 2, "day");
dateArithmetic.add(new Date(2010, 7, 23), 2, "week");
dateArithmetic.add(new Date(2010, 7, 23), 2, "month");
dateArithmetic.add(new Date(2010, 7, 23), 2, "year");
dateArithmetic.add(new Date(2010, 7, 23), 2, "decade");
dateArithmetic.add(new Date(2010, 7, 23), 2, "century");

dateArithmetic.subtract(new Date(2010, 7, 30), 1, "seconds");
dateArithmetic.subtract(new Date(2010, 7, 29), 2, "minutes");
dateArithmetic.subtract(new Date(2010, 7, 28), 3, "hours");
dateArithmetic.subtract(new Date(2010, 7, 27), 4, "day");
dateArithmetic.subtract(new Date(2010, 7, 26), 5, "week");
dateArithmetic.subtract(new Date(2010, 7, 24), 6, "month");
dateArithmetic.subtract(new Date(2010, 7, 23), 7, "year");
dateArithmetic.subtract(new Date(2010, 7, 22), 8, "decade");
dateArithmetic.subtract(new Date(2010, 7, 21), 9, "century");

dateArithmetic.eq(new Date(), new Date());
dateArithmetic.eq(new Date(), new Date(), "day");
dateArithmetic.neq(new Date(), new Date());
dateArithmetic.neq(new Date(), new Date(), "week");
dateArithmetic.gt(new Date(), new Date());
dateArithmetic.gt(new Date(), new Date(), "seconds");
dateArithmetic.gte(new Date(), new Date());
dateArithmetic.gte(new Date(), new Date(), "minutes");
dateArithmetic.lt(new Date(), new Date());
dateArithmetic.lt(new Date(), new Date(), "year");
dateArithmetic.lt(new Date(), new Date());
dateArithmetic.lt(new Date(), new Date(), "century");
dateArithmetic.lte(new Date(), new Date());
dateArithmetic.lte(new Date(), new Date(), "decade");

add(new Date(2010, 7, 23), 2, "seconds");
subtract(new Date(2010, 7, 30), 1, "seconds");
eq(new Date(), new Date());
neq(new Date(), new Date());
gt(new Date(), new Date());
gte(new Date(), new Date());
lt(new Date(), new Date());
lte(new Date(), new Date());
dateArithmetic.startOf(new Date(), "week", 0);
dateArithmetic.startOf(new Date(), "century");

dateArithmetic.milliseconds(new Date());
dateArithmetic.milliseconds(new Date(), new Date().getMilliseconds());
dateArithmetic.seconds(new Date());
dateArithmetic.seconds(new Date(), new Date().getSeconds());
dateArithmetic.minutes(new Date());
dateArithmetic.minutes(new Date(), new Date().getMinutes());
dateArithmetic.hours(new Date());
dateArithmetic.hours(new Date(), new Date().getHours());
dateArithmetic.date(new Date());
dateArithmetic.date(new Date(), new Date().getDate());
dateArithmetic.day(new Date());
dateArithmetic.day(new Date(), new Date().getDay());
dateArithmetic.weekday(new Date(), new Date());
dateArithmetic.weekday(new Date(), new Date(), 0);
dateArithmetic.month(new Date());
dateArithmetic.month(new Date(), new Date().getMonth());
dateArithmetic.year(new Date());
dateArithmetic.year(new Date(), new Date().getFullYear());
dateArithmetic.decade(new Date());
dateArithmetic.decade(new Date(), 20);
dateArithmetic.century(new Date());
dateArithmetic.century(new Date(), 21);

dateArithmetic.inRange(new Date(), new Date(), new Date());
dateArithmetic.inRange(new Date(), new Date(), new Date(), "day");
inRange(new Date(), new Date(), new Date());
inRange(new Date(), new Date(), new Date(), "day");

dateArithmetic.min(new Date(), new Date(), new Date());
min(new Date(), new Date(), new Date());

dateArithmetic.max(new Date(), new Date(), new Date());
max(new Date(), new Date(), new Date());

dateArithmetic.diff(new Date(), new Date(), "day", true);
diff(new Date(), new Date(), "day");
