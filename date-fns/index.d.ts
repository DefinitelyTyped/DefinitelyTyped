// Type definitions for date-fns v2.5.1
// Project: https://date-fns.org/
// Definitions by: Matt Lewis <https://github.com/mattlewis92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DateOrStringOrNumber = Date | string | number;

declare module 'date-fns' {

  function addDays(date: DateOrStringOrNumber, amount: number): Date;
  namespace addDays {}

  function addHours(date: DateOrStringOrNumber, amount: number): Date;
  namespace addHours {}

  function addISOYears(date: DateOrStringOrNumber, amount: number): Date;
  namespace addISOYears {}

  function addMilliseconds(date: DateOrStringOrNumber, amount: number): Date;
  namespace addMilliseconds {}

  function addMinutes(date: DateOrStringOrNumber, amount: number): Date;
  namespace addMinutes {}

  function addMonths(date: DateOrStringOrNumber, amount: number): Date;
  namespace addMonths {}

  function addQuarters(date: DateOrStringOrNumber, amount: number): Date;
  namespace addQuarters {}

  function addSeconds(date: DateOrStringOrNumber, amount: number): Date;
  namespace addSeconds {}

  function addWeeks(date: DateOrStringOrNumber, amount: number): Date;
  namespace addWeeks {}

  function addYears(date: DateOrStringOrNumber, amount: number): Date;
  namespace addYears {}

  function closestIndexTo(dateToCompare: DateOrStringOrNumber, datesArray: DateOrStringOrNumber[]): number;
  namespace closestIndexTo {}

  function closestTo(dateToCompare: DateOrStringOrNumber, datesArray: DateOrStringOrNumber[]): Date;
  namespace closestTo {}

  function compareAsc(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace compareAsc {}

  function compareDesc(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace compareDesc {}

  function differenceInCalendarDays(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber, options?: {weekStartsOn: number}): number;
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarYears {}

  function differenceInDays(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInDays {}

  function differenceInHours(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInHours {}

  function differenceInISOYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInISOYears {}

  function differenceInMilliseconds(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInMilliseconds {}

  function differenceInMinutes(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInMinutes {}

  function differenceInMonths(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInMonths {}

  function differenceInQuarters(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInQuarters {}

  function differenceInSeconds(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInSeconds {}

  function differenceInWeeks(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInWeeks {}

  function differenceInYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInYears {}

  function distanceInWords(dateFrom: DateOrStringOrNumber, dateTo: DateOrStringOrNumber, options?: {includeSeconds: boolean}): string;
  namespace distanceInWords {}

  function distanceInWordsToNow(date: DateOrStringOrNumber, options?: {includeSeconds: boolean}): string;
  namespace distanceInWordsToNow {}

  function eachDay(startDate: DateOrStringOrNumber, endDate: DateOrStringOrNumber): Date[];
  namespace eachDay {}

  function endOfDay(date: DateOrStringOrNumber): Date;
  namespace endOfDay {}

  function endOfHour(date: DateOrStringOrNumber): Date;
  namespace endOfHour {}

  function endOfISOWeek(date: DateOrStringOrNumber): Date;
  namespace endOfISOWeek {}

  function endOfISOYear(date: DateOrStringOrNumber): Date;
  namespace endOfISOYear {}

  function endOfMinute(date: DateOrStringOrNumber): Date;
  namespace endOfMinute {}

  function endOfMonth(date: DateOrStringOrNumber): Date;
  namespace endOfMonth {}

  function endOfQuarter(date: DateOrStringOrNumber): Date;
  namespace endOfQuarter {}

  function endOfSecond(date: DateOrStringOrNumber): Date;
  namespace endOfSecond {}

  function endOfToday(): Date;
  namespace endOfToday {}

  function endOfTomorrow(): Date;
  namespace endOfTomorrow {}

  function endOfWeek(date: DateOrStringOrNumber, options?: {weekStartsOn: number}): Date;
  namespace endOfWeek {}

  function endOfYear(date: DateOrStringOrNumber): Date;
  namespace endOfYear {}

  function endOfYesterday(): Date;
  namespace endOfYesterday {}

  function format(date: DateOrStringOrNumber, format?: string): string;
  namespace format {}

  function getDate(date: DateOrStringOrNumber): number;
  namespace getDate {}

  function getDay(date: DateOrStringOrNumber): number;
  namespace getDay {}

  function getDayOfYear(date: DateOrStringOrNumber): number;
  namespace getDayOfYear {}

  function getDaysInMonth(date: DateOrStringOrNumber): number;
  namespace getDaysInMonth {}

  function getDaysInYear(date: DateOrStringOrNumber): number;
  namespace getDaysInYear {}

  function getHours(date: DateOrStringOrNumber): number;
  namespace getHours {}

  function getISOWeek(date: DateOrStringOrNumber): number;
  namespace getISOWeek {}

  function getISOWeeksInYear(date: DateOrStringOrNumber): number;
  namespace getISOWeeksInYear {}

  function getISOYear(date: DateOrStringOrNumber): number;
  namespace getISOYear {}

  function getMilliseconds(date: DateOrStringOrNumber): number;
  namespace getMilliseconds {}

  function getMinutes(date: DateOrStringOrNumber): number;
  namespace getMinutes {}

  function getMonth(date: DateOrStringOrNumber): number;
  namespace getMonth {}

  function getQuarter(date: DateOrStringOrNumber): number;
  namespace getQuarter {}

  function getSeconds(date: DateOrStringOrNumber): number;
  namespace getSeconds {}

  function getYear(date: DateOrStringOrNumber): number;
  namespace getYear {}

  function isAfter(dateToCompare: DateOrStringOrNumber, date: DateOrStringOrNumber): boolean;
  namespace isAfter {}

  function isBefore(dateToCompare: DateOrStringOrNumber, date: DateOrStringOrNumber): boolean;
  namespace isBefore {}

  function isDate(argument: any): boolean;
  namespace isDate {}

  function isEqual(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isEqual {}

  function isFirstDayOfMonth(date: DateOrStringOrNumber): boolean;
  namespace isFirstDayOfMonth {}

  function isFriday(date: DateOrStringOrNumber): boolean;
  namespace isFriday {}

  function isFuture(date: DateOrStringOrNumber): boolean;
  namespace isFuture {}

  function isLastDayOfMonth(date: DateOrStringOrNumber): boolean;
  namespace isLastDayOfMonth {}

  function isLeapYear(date: DateOrStringOrNumber): boolean;
  namespace isLeapYear {}

  function isMonday(date: DateOrStringOrNumber): boolean;
  namespace isMonday {}

  function isPast(date: DateOrStringOrNumber): boolean;
  namespace isPast {}

  function isSameDay(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameDay {}

  function isSameHour(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameHour {}

  function isSameISOWeek(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameISOWeek {}

  function isSameISOYear(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameISOYear {}

  function isSameMinute(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameMinute {}

  function isSameMonth(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameMonth {}

  function isSameQuarter(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameQuarter {}

  function isSameSecond(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameSecond {}

  function isSameWeek(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber, options?: {weekStartsOn: number}): boolean;
  namespace isSameWeek {}

  function isSameYear(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameYear {}

  function isSaturday(date: DateOrStringOrNumber): boolean;
  namespace isSaturday {}

  function isSunday(date: DateOrStringOrNumber): boolean;
  namespace isSunday {}

  function isThisHour(date: DateOrStringOrNumber): boolean;
  namespace isThisHour {}

  function isThisISOWeek(date: DateOrStringOrNumber): boolean;
  namespace isThisISOWeek {}

  function isThisISOYear(date: DateOrStringOrNumber): boolean;
  namespace isThisISOYear {}

  function isThisMinute(date: DateOrStringOrNumber): boolean;
  namespace isThisMinute {}

  function isThisMonth(date: DateOrStringOrNumber): boolean;
  namespace isThisMonth {}

  function isThisQuarter(date: DateOrStringOrNumber): boolean;
  namespace isThisQuarter {}

  function isThisSecond(date: DateOrStringOrNumber): boolean;
  namespace isThisSecond {}

  function isThisWeek(date: DateOrStringOrNumber, options?: {weekStartsOn: number}): boolean;
  namespace isThisWeek {}

  function isThisYear(date: DateOrStringOrNumber): boolean;
  namespace isThisYear {}

  function isThursday(date: DateOrStringOrNumber): boolean;
  namespace isThursday {}

  function isToday(date: DateOrStringOrNumber): boolean;
  namespace isToday {}

  function isTomorrow(date: DateOrStringOrNumber): boolean;
  namespace isTomorrow {}

  function isTuesday(date: DateOrStringOrNumber): boolean;
  namespace isTuesday {}

  function isValid(date: DateOrStringOrNumber): boolean;
  namespace isValid {}

  function isWednesday(date: DateOrStringOrNumber): boolean;
  namespace isWednesday {}

  function isWeekend(date: DateOrStringOrNumber): boolean;
  namespace isWeekend {}

  function isWithinRange(date: DateOrStringOrNumber, startDate: DateOrStringOrNumber, endDate: DateOrStringOrNumber): boolean;
  namespace isWithinRange {}

  function isYesterday(date: DateOrStringOrNumber): boolean;
  namespace isYesterday {}

  function lastDayOfISOWeek(date: DateOrStringOrNumber): Date;
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear(date: DateOrStringOrNumber): Date;
  namespace lastDayOfISOYear {}

  function lastDayOfMonth(date: DateOrStringOrNumber): Date;
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(date: DateOrStringOrNumber): Date;
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(date: DateOrStringOrNumber, options?: {weekStartsOn: number}): Date;
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: DateOrStringOrNumber): Date;
  namespace lastDayOfYear {}

  function max(...dates: DateOrStringOrNumber[]): Date;
  namespace max {}

  function min(...dates: DateOrStringOrNumber[]): Date;
  namespace min {}

  function parse(dateString: string): Date;
  namespace parse {}

  function setDate(date: DateOrStringOrNumber, dayOfMonth: number): Date;
  namespace setDate {}

  function setDay(date: DateOrStringOrNumber, day: number, options?: {weekStartsOn: number}): Date;
  namespace setDay {}

  function setDayOfYear(date: DateOrStringOrNumber, dayOfYear: number): Date;
  namespace setDayOfYear {}

  function setHours(date: DateOrStringOrNumber, hours: number): Date;
  namespace setHours {}

  function setISOWeek(date: DateOrStringOrNumber, isoWeek: number): Date;
  namespace setISOWeek {}

  function setISOYear(date: DateOrStringOrNumber, isoYear: number): Date;
  namespace setISOYear {}

  function setMilliseconds(date: DateOrStringOrNumber, milliseconds: number): Date;
  namespace setMilliseconds {}

  function setMinutes(date: DateOrStringOrNumber, minutes: number): Date;
  namespace setMinutes {}

  function setMonth(date: DateOrStringOrNumber, month: number): Date;
  namespace setMonth {}

  function setQuarter(date: DateOrStringOrNumber, quarter: number): Date;
  namespace setQuarter {}

  function setSeconds(date: DateOrStringOrNumber, seconds: number): Date;
  namespace setSeconds {}

  function setYear(date: DateOrStringOrNumber, year: number): Date;
  namespace setYear {}

  function startOfDay(date: DateOrStringOrNumber): Date;
  namespace startOfDay {}

  function startOfHour(date: DateOrStringOrNumber): Date;
  namespace startOfHour {}

  function startOfISOWeek(date: DateOrStringOrNumber): Date;
  namespace startOfISOWeek {}

  function startOfISOYear(date: DateOrStringOrNumber): Date;
  namespace startOfISOYear {}

  function startOfMinute(date: DateOrStringOrNumber): Date;
  namespace startOfMinute {}

  function startOfMonth(date: DateOrStringOrNumber): Date;
  namespace startOfMonth {}

  function startOfQuarter(date: DateOrStringOrNumber): Date;
  namespace startOfQuarter {}

  function startOfSecond(date: DateOrStringOrNumber): Date;
  namespace startOfSecond {}

  function startOfToday(): Date;
  namespace startOfToday {}

  function startOfTomorrow(): Date;
  namespace startOfTomorrow {}

  function startOfWeek(date: DateOrStringOrNumber, options?: {weekStartsOn: number}): Date;
  namespace startOfWeek {}

  function startOfYear(date: DateOrStringOrNumber): Date;
  namespace startOfYear {}

  function startOfYesterday(): Date;
  namespace startOfYesterday {}

  function subDays(date: DateOrStringOrNumber, amount: number): Date;
  namespace subDays {}

  function subHours(date: DateOrStringOrNumber, amount: number): Date;
  namespace subHours {}

  function subISOYears(date: DateOrStringOrNumber, amount: number): Date;
  namespace subISOYears {}

  function subMilliseconds(date: DateOrStringOrNumber, amount: number): Date;
  namespace subMilliseconds {}

  function subMinutes(date: DateOrStringOrNumber, amount: number): Date;
  namespace subMinutes {}

  function subMonths(date: DateOrStringOrNumber, amount: number): Date;
  namespace subMonths {}

  function subQuarters(date: DateOrStringOrNumber, amount: number): Date;
  namespace subQuarters {}

  function subSeconds(date: DateOrStringOrNumber, amount: number): Date;
  namespace subSeconds {}

  function subWeeks(date: DateOrStringOrNumber, amount: number): Date;
  namespace subWeeks {}

  function subYears(date: DateOrStringOrNumber, amount: number): Date;
  namespace subYears {}

}

declare module 'date-fns/add_days' {
  import {addDays} from 'date-fns';
  export = addDays;
}

declare module 'date-fns/add_hours' {
  import {addHours} from 'date-fns';
  export = addHours;
}

declare module 'date-fns/add_iso_years' {
  import {addISOYears} from 'date-fns';
  export = addISOYears;
}

declare module 'date-fns/add_milliseconds' {
  import {addMilliseconds} from 'date-fns';
  export = addMilliseconds;
}

declare module 'date-fns/add_minutes' {
  import {addMinutes} from 'date-fns';
  export = addMinutes;
}

declare module 'date-fns/add_months' {
  import {addMonths} from 'date-fns';
  export = addMonths;
}

declare module 'date-fns/add_quarters' {
  import {addQuarters} from 'date-fns';
  export = addQuarters;
}

declare module 'date-fns/add_seconds' {
  import {addSeconds} from 'date-fns';
  export = addSeconds;
}

declare module 'date-fns/add_weeks' {
  import {addWeeks} from 'date-fns';
  export = addWeeks;
}

declare module 'date-fns/add_years' {
  import {addYears} from 'date-fns';
  export = addYears;
}

declare module 'date-fns/closest_index_to' {
  import {closestIndexTo} from 'date-fns';
  export = closestIndexTo;
}

declare module 'date-fns/closest_to' {
  import {closestTo} from 'date-fns';
  export = closestTo;
}

declare module 'date-fns/compare_asc' {
  import {compareAsc} from 'date-fns';
  export = compareAsc;
}

declare module 'date-fns/compare_desc' {
  import {compareDesc} from 'date-fns';
  export = compareDesc;
}

declare module 'date-fns/difference_in_calendar_days' {
  import {differenceInCalendarDays} from 'date-fns';
  export = differenceInCalendarDays;
}

declare module 'date-fns/difference_in_calendar_iso_weeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns';
  export = differenceInCalendarISOWeeks;
}

declare module 'date-fns/difference_in_calendar_iso_years' {
  import {differenceInCalendarISOYears} from 'date-fns';
  export = differenceInCalendarISOYears;
}

declare module 'date-fns/difference_in_calendar_months' {
  import {differenceInCalendarMonths} from 'date-fns';
  export = differenceInCalendarMonths;
}

declare module 'date-fns/difference_in_calendar_quarters' {
  import {differenceInCalendarQuarters} from 'date-fns';
  export = differenceInCalendarQuarters;
}

declare module 'date-fns/difference_in_calendar_weeks' {
  import {differenceInCalendarWeeks} from 'date-fns';
  export = differenceInCalendarWeeks;
}

declare module 'date-fns/difference_in_calendar_years' {
  import {differenceInCalendarYears} from 'date-fns';
  export = differenceInCalendarYears;
}

declare module 'date-fns/difference_in_days' {
  import {differenceInDays} from 'date-fns';
  export = differenceInDays;
}

declare module 'date-fns/difference_in_hours' {
  import {differenceInHours} from 'date-fns';
  export = differenceInHours;
}

declare module 'date-fns/difference_in_iso_years' {
  import {differenceInISOYears} from 'date-fns';
  export = differenceInISOYears;
}

declare module 'date-fns/difference_in_milliseconds' {
  import {differenceInMilliseconds} from 'date-fns';
  export = differenceInMilliseconds;
}

declare module 'date-fns/difference_in_minutes' {
  import {differenceInMinutes} from 'date-fns';
  export = differenceInMinutes;
}

declare module 'date-fns/difference_in_months' {
  import {differenceInMonths} from 'date-fns';
  export = differenceInMonths;
}

declare module 'date-fns/difference_in_quarters' {
  import {differenceInQuarters} from 'date-fns';
  export = differenceInQuarters;
}

declare module 'date-fns/difference_in_seconds' {
  import {differenceInSeconds} from 'date-fns';
  export = differenceInSeconds;
}

declare module 'date-fns/difference_in_weeks' {
  import {differenceInWeeks} from 'date-fns';
  export = differenceInWeeks;
}

declare module 'date-fns/difference_in_years' {
  import {differenceInYears} from 'date-fns';
  export = differenceInYears;
}

declare module 'date-fns/distance_in_words' {
  import {distanceInWords} from 'date-fns';
  export = distanceInWords;
}

declare module 'date-fns/distance_in_words_to_now' {
  import {distanceInWordsToNow} from 'date-fns';
  export = distanceInWordsToNow;
}

declare module 'date-fns/each_day' {
  import {eachDay} from 'date-fns';
  export = eachDay;
}

declare module 'date-fns/end_of_day' {
  import {endOfDay} from 'date-fns';
  export = endOfDay;
}

declare module 'date-fns/end_of_hour' {
  import {endOfHour} from 'date-fns';
  export = endOfHour;
}

declare module 'date-fns/end_of_iso_week' {
  import {endOfISOWeek} from 'date-fns';
  export = endOfISOWeek;
}

declare module 'date-fns/end_of_iso_year' {
  import {endOfISOYear} from 'date-fns';
  export = endOfISOYear;
}

declare module 'date-fns/end_of_minute' {
  import {endOfMinute} from 'date-fns';
  export = endOfMinute;
}

declare module 'date-fns/end_of_month' {
  import {endOfMonth} from 'date-fns';
  export = endOfMonth;
}

declare module 'date-fns/end_of_quarter' {
  import {endOfQuarter} from 'date-fns';
  export = endOfQuarter;
}

declare module 'date-fns/end_of_second' {
  import {endOfSecond} from 'date-fns';
  export = endOfSecond;
}

declare module 'date-fns/end_of_today' {
  import {endOfToday} from 'date-fns';
  export = endOfToday;
}

declare module 'date-fns/end_of_tomorrow' {
  import {endOfTomorrow} from 'date-fns';
  export = endOfTomorrow;
}

declare module 'date-fns/end_of_week' {
  import {endOfWeek} from 'date-fns';
  export = endOfWeek;
}

declare module 'date-fns/end_of_year' {
  import {endOfYear} from 'date-fns';
  export = endOfYear;
}

declare module 'date-fns/end_of_yesterday' {
  import {endOfYesterday} from 'date-fns';
  export = endOfYesterday;
}

declare module 'date-fns/format' {
  import {format} from 'date-fns';
  export = format;
}

declare module 'date-fns/get_date' {
  import {getDate} from 'date-fns';
  export = getDate;
}

declare module 'date-fns/get_day' {
  import {getDay} from 'date-fns';
  export = getDay;
}

declare module 'date-fns/get_day_of_year' {
  import {getDayOfYear} from 'date-fns';
  export = getDayOfYear;
}

declare module 'date-fns/get_days_in_month' {
  import {getDaysInMonth} from 'date-fns';
  export = getDaysInMonth;
}

declare module 'date-fns/get_days_in_year' {
  import {getDaysInYear} from 'date-fns';
  export = getDaysInYear;
}

declare module 'date-fns/get_hours' {
  import {getHours} from 'date-fns';
  export = getHours;
}

declare module 'date-fns/get_iso_week' {
  import {getISOWeek} from 'date-fns';
  export = getISOWeek;
}

declare module 'date-fns/get_iso_weeks_in_year' {
  import {getISOWeeksInYear} from 'date-fns';
  export = getISOWeeksInYear;
}

declare module 'date-fns/get_iso_year' {
  import {getISOYear} from 'date-fns';
  export = getISOYear;
}

declare module 'date-fns/get_milliseconds' {
  import {getMilliseconds} from 'date-fns';
  export = getMilliseconds;
}

declare module 'date-fns/get_minutes' {
  import {getMinutes} from 'date-fns';
  export = getMinutes;
}

declare module 'date-fns/get_month' {
  import {getMonth} from 'date-fns';
  export = getMonth;
}

declare module 'date-fns/get_quarter' {
  import {getQuarter} from 'date-fns';
  export = getQuarter;
}

declare module 'date-fns/get_seconds' {
  import {getSeconds} from 'date-fns';
  export = getSeconds;
}

declare module 'date-fns/get_year' {
  import {getYear} from 'date-fns';
  export = getYear;
}

declare module 'date-fns/is_after' {
  import {isAfter} from 'date-fns';
  export = isAfter;
}

declare module 'date-fns/is_before' {
  import {isBefore} from 'date-fns';
  export = isBefore;
}

declare module 'date-fns/is_date' {
  import {isDate} from 'date-fns';
  export = isDate;
}

declare module 'date-fns/is_equal' {
  import {isEqual} from 'date-fns';
  export = isEqual;
}

declare module 'date-fns/is_first_day_of_month' {
  import {isFirstDayOfMonth} from 'date-fns';
  export = isFirstDayOfMonth;
}

declare module 'date-fns/is_friday' {
  import {isFriday} from 'date-fns';
  export = isFriday;
}

declare module 'date-fns/is_future' {
  import {isFuture} from 'date-fns';
  export = isFuture;
}

declare module 'date-fns/is_last_day_of_month' {
  import {isLastDayOfMonth} from 'date-fns';
  export = isLastDayOfMonth;
}

declare module 'date-fns/is_leap_year' {
  import {isLeapYear} from 'date-fns';
  export = isLeapYear;
}

declare module 'date-fns/is_monday' {
  import {isMonday} from 'date-fns';
  export = isMonday;
}

declare module 'date-fns/is_past' {
  import {isPast} from 'date-fns';
  export = isPast;
}

declare module 'date-fns/is_same_day' {
  import {isSameDay} from 'date-fns';
  export = isSameDay;
}

declare module 'date-fns/is_same_hour' {
  import {isSameHour} from 'date-fns';
  export = isSameHour;
}

declare module 'date-fns/is_same_iso_week' {
  import {isSameISOWeek} from 'date-fns';
  export = isSameISOWeek;
}

declare module 'date-fns/is_same_iso_year' {
  import {isSameISOYear} from 'date-fns';
  export = isSameISOYear;
}

declare module 'date-fns/is_same_minute' {
  import {isSameMinute} from 'date-fns';
  export = isSameMinute;
}

declare module 'date-fns/is_same_month' {
  import {isSameMonth} from 'date-fns';
  export = isSameMonth;
}

declare module 'date-fns/is_same_quarter' {
  import {isSameQuarter} from 'date-fns';
  export = isSameQuarter;
}

declare module 'date-fns/is_same_second' {
  import {isSameSecond} from 'date-fns';
  export = isSameSecond;
}

declare module 'date-fns/is_same_week' {
  import {isSameWeek} from 'date-fns';
  export = isSameWeek;
}

declare module 'date-fns/is_same_year' {
  import {isSameYear} from 'date-fns';
  export = isSameYear;
}

declare module 'date-fns/is_saturday' {
  import {isSaturday} from 'date-fns';
  export = isSaturday;
}

declare module 'date-fns/is_sunday' {
  import {isSunday} from 'date-fns';
  export = isSunday;
}

declare module 'date-fns/is_this_hour' {
  import {isThisHour} from 'date-fns';
  export = isThisHour;
}

declare module 'date-fns/is_this_iso_week' {
  import {isThisISOWeek} from 'date-fns';
  export = isThisISOWeek;
}

declare module 'date-fns/is_this_iso_year' {
  import {isThisISOYear} from 'date-fns';
  export = isThisISOYear;
}

declare module 'date-fns/is_this_minute' {
  import {isThisMinute} from 'date-fns';
  export = isThisMinute;
}

declare module 'date-fns/is_this_month' {
  import {isThisMonth} from 'date-fns';
  export = isThisMonth;
}

declare module 'date-fns/is_this_quarter' {
  import {isThisQuarter} from 'date-fns';
  export = isThisQuarter;
}

declare module 'date-fns/is_this_second' {
  import {isThisSecond} from 'date-fns';
  export = isThisSecond;
}

declare module 'date-fns/is_this_week' {
  import {isThisWeek} from 'date-fns';
  export = isThisWeek;
}

declare module 'date-fns/is_this_year' {
  import {isThisYear} from 'date-fns';
  export = isThisYear;
}

declare module 'date-fns/is_thursday' {
  import {isThursday} from 'date-fns';
  export = isThursday;
}

declare module 'date-fns/is_today' {
  import {isToday} from 'date-fns';
  export = isToday;
}

declare module 'date-fns/is_tomorrow' {
  import {isTomorrow} from 'date-fns';
  export = isTomorrow;
}

declare module 'date-fns/is_tuesday' {
  import {isTuesday} from 'date-fns';
  export = isTuesday;
}

declare module 'date-fns/is_valid' {
  import {isValid} from 'date-fns';
  export = isValid;
}

declare module 'date-fns/is_wednesday' {
  import {isWednesday} from 'date-fns';
  export = isWednesday;
}

declare module 'date-fns/is_weekend' {
  import {isWeekend} from 'date-fns';
  export = isWeekend;
}

declare module 'date-fns/is_within_range' {
  import {isWithinRange} from 'date-fns';
  export = isWithinRange;
}

declare module 'date-fns/is_yesterday' {
  import {isYesterday} from 'date-fns';
  export = isYesterday;
}

declare module 'date-fns/last_day_of_iso_week' {
  import {lastDayOfISOWeek} from 'date-fns';
  export = lastDayOfISOWeek;
}

declare module 'date-fns/last_day_of_iso_year' {
  import {lastDayOfISOYear} from 'date-fns';
  export = lastDayOfISOYear;
}

declare module 'date-fns/last_day_of_month' {
  import {lastDayOfMonth} from 'date-fns';
  export = lastDayOfMonth;
}

declare module 'date-fns/last_day_of_quarter' {
  import {lastDayOfQuarter} from 'date-fns';
  export = lastDayOfQuarter;
}

declare module 'date-fns/last_day_of_week' {
  import {lastDayOfWeek} from 'date-fns';
  export = lastDayOfWeek;
}

declare module 'date-fns/last_day_of_year' {
  import {lastDayOfYear} from 'date-fns';
  export = lastDayOfYear;
}

declare module 'date-fns/max' {
  import {max} from 'date-fns';
  export = max;
}

declare module 'date-fns/min' {
  import {min} from 'date-fns';
  export = min;
}

declare module 'date-fns/parse' {
  import {parse} from 'date-fns';
  export = parse;
}

declare module 'date-fns/set_date' {
  import {setDate} from 'date-fns';
  export = setDate;
}

declare module 'date-fns/set_day' {
  import {setDay} from 'date-fns';
  export = setDay;
}

declare module 'date-fns/set_day_of_year' {
  import {setDayOfYear} from 'date-fns';
  export = setDayOfYear;
}

declare module 'date-fns/set_hours' {
  import {setHours} from 'date-fns';
  export = setHours;
}

declare module 'date-fns/set_iso_week' {
  import {setISOWeek} from 'date-fns';
  export = setISOWeek;
}

declare module 'date-fns/set_iso_year' {
  import {setISOYear} from 'date-fns';
  export = setISOYear;
}

declare module 'date-fns/set_milliseconds' {
  import {setMilliseconds} from 'date-fns';
  export = setMilliseconds;
}

declare module 'date-fns/set_minutes' {
  import {setMinutes} from 'date-fns';
  export = setMinutes;
}

declare module 'date-fns/set_month' {
  import {setMonth} from 'date-fns';
  export = setMonth;
}

declare module 'date-fns/set_quarter' {
  import {setQuarter} from 'date-fns';
  export = setQuarter;
}

declare module 'date-fns/set_seconds' {
  import {setSeconds} from 'date-fns';
  export = setSeconds;
}

declare module 'date-fns/set_year' {
  import {setYear} from 'date-fns';
  export = setYear;
}

declare module 'date-fns/start_of_day' {
  import {startOfDay} from 'date-fns';
  export = startOfDay;
}

declare module 'date-fns/start_of_hour' {
  import {startOfHour} from 'date-fns';
  export = startOfHour;
}

declare module 'date-fns/start_of_iso_week' {
  import {startOfISOWeek} from 'date-fns';
  export = startOfISOWeek;
}

declare module 'date-fns/start_of_iso_year' {
  import {startOfISOYear} from 'date-fns';
  export = startOfISOYear;
}

declare module 'date-fns/start_of_minute' {
  import {startOfMinute} from 'date-fns';
  export = startOfMinute;
}

declare module 'date-fns/start_of_month' {
  import {startOfMonth} from 'date-fns';
  export = startOfMonth;
}

declare module 'date-fns/start_of_quarter' {
  import {startOfQuarter} from 'date-fns';
  export = startOfQuarter;
}

declare module 'date-fns/start_of_second' {
  import {startOfSecond} from 'date-fns';
  export = startOfSecond;
}

declare module 'date-fns/start_of_today' {
  import {startOfToday} from 'date-fns';
  export = startOfToday;
}

declare module 'date-fns/start_of_tomorrow' {
  import {startOfTomorrow} from 'date-fns';
  export = startOfTomorrow;
}

declare module 'date-fns/start_of_week' {
  import {startOfWeek} from 'date-fns';
  export = startOfWeek;
}

declare module 'date-fns/start_of_year' {
  import {startOfYear} from 'date-fns';
  export = startOfYear;
}

declare module 'date-fns/start_of_yesterday' {
  import {startOfYesterday} from 'date-fns';
  export = startOfYesterday;
}

declare module 'date-fns/sub_days' {
  import {subDays} from 'date-fns';
  export = subDays;
}

declare module 'date-fns/sub_hours' {
  import {subHours} from 'date-fns';
  export = subHours;
}

declare module 'date-fns/sub_iso_years' {
  import {subISOYears} from 'date-fns';
  export = subISOYears;
}

declare module 'date-fns/sub_milliseconds' {
  import {subMilliseconds} from 'date-fns';
  export = subMilliseconds;
}

declare module 'date-fns/sub_minutes' {
  import {subMinutes} from 'date-fns';
  export = subMinutes;
}

declare module 'date-fns/sub_months' {
  import {subMonths} from 'date-fns';
  export = subMonths;
}

declare module 'date-fns/sub_quarters' {
  import {subQuarters} from 'date-fns';
  export = subQuarters;
}

declare module 'date-fns/sub_seconds' {
  import {subSeconds} from 'date-fns';
  export = subSeconds;
}

declare module 'date-fns/sub_weeks' {
  import {subWeeks} from 'date-fns';
  export = subWeeks;
}

declare module 'date-fns/sub_years' {
  import {subYears} from 'date-fns';
  export = subYears;
}

