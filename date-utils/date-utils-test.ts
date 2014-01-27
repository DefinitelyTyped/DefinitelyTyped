/// <reference path="date-utils.d.ts" />

var date:Date;
var obj:Object;
var bool:boolean;
var num:number;
var str:string;
var x:any = null;
var arr:any[];
var exp:RegExp;
var strArr:string[];
var numArr:string[];

date = Date.today();
date = Date.yesterday();
date = Date.tomorrow();

bool = Date.validateDay(num, num, num);
bool = Date.validateYear(num);
bool = Date.validateMonth(num);
bool = Date.validateHour(num);
bool = Date.validateMinute(num);
bool = Date.validateSecond(num);
bool = Date.validateMillisecond(num);

num = Date.compare(date, date);
bool = Date.equals(date, date);

num = Date.getDayNumberFromName(str);
num = Date.getMonthNumberFromName(str);
bool = Date.isLeapYear(num);
num = Date.getDaysInMonth(num, num);

date = date.clone();
str = date.getMonthAbbr();
str = date.getMonthName();
num = date.getUTCOffset();
num = date.getOrdinalNumber();
num = date.clearTime();
date.setTimeToNow();
str = date.toFormat(str);
str = date.toYMD(str);

bool = date.between(date, date);
num = date.compareTo(date);
bool = date.equals(date);
bool = date.isBefore(date);
bool = date.isAfter(date);
num = date.getDaysBetween(date);
num = date.getHoursBetween(date);
num = date.getMinutesBetween(date);
num = date.getSecondsBetween(date);
date.add(x);
date.addMilliseconds(num);
date.addSeconds(num);
date.addMinutes(num);
date.addHours(num);
date.addDays(num);
date.addWeeks(num);
date.addMonths(num);
date.addYears(num);
