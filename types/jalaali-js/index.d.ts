// Type definitions for jalaali-js 1.1
// Project: https://github.com/jalaali/jalaali-js
// Definitions by: Ali Taheri Moghaddar <https://github.com/alitaheri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Jalaali date parts
 */
export interface JalaaliDateObject {
    /** Jalaali year */
    jy: number;
    /** Jalaali month */
    jm: number;
    /** Jalaali day */
    jd: number;
}

/**
 * Gregorian date parts
 */
export interface GregorianDateObject {
    /** Gregorian year */
    gy: number;
    /** Gregorian month */
    gm: number;
    /** Gregorian day */
    gd: number;
}

/**
 * Object returned by jalCal function
 */
export interface JalCalResult {
    /** Number of years since the last leap year (0 to 4) */
    leap: number;
    /** Gregorian year of the beginning of Jalaali year */
    gy: number;
    /** The March day of Farvardin the 1st (1st day of jy) */
    march: number;
}

/**
 * Converts a Gregorian date to Jalaali.
 * @param gy Gregorian Calendar year (years BC numbered 0, -1, -2, ...)
 * @param gm Gregorian Calendar month (1 to 12)
 * @param gd Gregorian Calendar day of the month (1 to 28/29/30/31)
 */
export function toJalaali(gy: number, gm: number, gd: number): JalaaliDateObject;

/**
 * Converts a Gregorian Date object to Jalaali.
 * @param date Gregorian Date object
 */
export function toJalaali(date: Date): JalaaliDateObject;

/**
 * Converts a Jalaali date to Gregorian.
 * @param jy Jalaali Calendar year (years BC numbered 0, -1, -2, ...)
 * @param jm Jalaali Calendar month (1 to 12)
 * @param jd Jalaali Calendar day of the month (1 to 28/29/30/31)
 */
export function toGregorian(jy: number, jm: number, jd: number): GregorianDateObject;

/**
 * Checks whether a Jalaali date is valid or not.
 * @param jy Jalaali Calendar year (years BC numbered 0, -1, -2, ...)
 * @param jm Jalaali Calendar month (1 to 12)
 * @param jd Jalaali Calendar day of the month (1 to 28/29/30/31)
 */
export function isValidJalaaliDate(jy: number, jm: number, jd: number): boolean;

/**
 * Check if this is a leap year.
 * @param jy Jalaali Calendar year (years BC numbered 0, -1, -2, ...)
 */
export function isLeapJalaaliYear(jy: number): boolean;

/**
 * Number of days in a given month in a Jalaali year.
 * @param jy Jalaali Calendar year (years BC numbered 0, -1, -2, ...)
 * @param jm Jalaali Calendar month (1 to 12)
 */
export function jalaaliMonthLength(jy: number, jm: number): number;

/**
 * This function determines if the Jalaali (Persian) year is
 * leap (366-day long) or is the common year (365 days), and
 * finds the day in March (Gregorian calendar) of the first
 * day of the Jalaali year (jy).
 * @param jy Jalaali calendar year (-61 to 3177)
 * @return
 *   leap: number of years since the last leap year (0 to 4)
 *   gy: Gregorian year of the beginning of Jalaali year
 *   march: the March day of Farvardin the 1st (1st day of jy)
 * @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
 * @see: http://www.fourmilab.ch/documents/calendar/
 */
export function jalCal(jy: number): JalCalResult;

/**
 * Converts a date of the Jalaali calendar to the Julian Day number.
 * @param jy Jalaali year (1 to 3100)
 * @param jm Jalaali month (1 to 12)
 * @param jd Jalaali day (1 to 29/31)
 * @return Julian Day number
 */
export function j2d(jy: number, jm: number, jd: number): number;

/**
 * Converts the Julian Day number to a date in the Jalaali calendar.
 * @param jdn Julian Day number
 * @return
 *   jy: Jalaali Calendar year (1 to 3100)
 *   jm: Jalaali Calendar month (1 to 12)
 *   jd: Jalaali Calendar day (1 to 29/31)
 */
export function d2j(jdn: number): JalaaliDateObject;

/**
 * Calculates the Julian Day number from Gregorian or Julian
 * calendar dates. This integer number corresponds to the noon of
 * the date (i.e. 12 hours of Universal Time).
 * The procedure was tested to be good since 1 March, -100100 (of both
 * calendars) up to a few million years into the future.
 * @param gy Gregorian Calendar year (years BC numbered 0, -1, -2, ...)
 * @param gm Gregorian Calendar month (1 to 12)
 * @param gd Gregorian Calendar day of the month (1 to 28/29/30/31)
 * @return Julian Day number
 */
export function g2d(gy: number, gm: number, gd: number): number;

/**
 * Calculates Gregorian and Julian calendar dates from the Julian Day number
 * (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
 * calendars) to some millions years ahead of the present.
 * @param jdn Julian Day number
 * @return
 *   gy: Gregorian Calendar year (years BC numbered 0, -1, -2, ...)
 *   gm: Gregorian Calendar month (1 to 12)
 *   gd: Gregorian Calendar day of the month M (1 to 28/29/30/31)
 */
export function d2g(jdn: number): GregorianDateObject;
