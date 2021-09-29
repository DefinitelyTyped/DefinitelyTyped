/**
 * Returns julian days from Epoch.
 * @param {number} jd - Julian date.
 * @returns {number} Days from epoch
 */
export function T(jd: number): number;
/**
 * Gets the date's julian day.
 * @param {number} year - Year.
 * @param {number} month - Month.
 * @param {number} day - Day.
 * @returns {Number} Day number
 */
export function getDayNumber(year: number, month: number, day: number): number;
/**
 * Converts javascript date to the universal(UTC) julian date.
 * @param {Date} date - Date.
 * @returns {number} UTC julian date
 */
export function DateToUTC(date: Date): number;
/**
 * Converts javascript date to the atomic(TAI) julian date.
 * @param {Date} date - Date.
 * @returns {number} TAI julian date
 */
export function DateToTAI(date: Date): number;
/**
 * Converts coordinated universal(UTC) julian date to atomic(TAI) julian date.
 * @param {number} jd - UTC julian date.
 * @returns {number} TAI julian date
 */
export function UTCtoTAI(jd: number): number;
/**
 * Converts atomic julian date(TAI) to the coordinated universal(UTC) julian date.
 * @param {number} tai - TAI julian date.
 * @returns {number} UTC julian date
 */
export function TAItoUTC(tai: number): number;
/**
 * Converts UTC julian date to the javascript date object.
 * @param {number} utc - UTC julian date.
 * @returns {Date} JavaScript Date object
 */
export function UTCtoDate(utc: number): Date;
/**
 * Converts TAI julian date to the javascript date object.
 * @param {number} tai - TAI julian date.
 * @returns {Date} JavaScript Date object
 */
export function TAItoDate(tai: number): Date;
/**
 * Adds milliseconds to the julian date.
 * @param {number} jd - Julian date.
 * @param {number} milliseconds - Milliseconds to add.
 * @returns {number} Julian date
 */
export function addMilliseconds(jd: number, milliseconds: number): number;
/**
 * Adds seconds to the julian date.
 * @param {number} jd - Julian date.
 * @param {number} seconds - Seconds to add.
 * @returns {number} Julian date
 */
export function addSeconds(jd: number, seconds: number): number;
/**
 * Adds hours to the julian date.
 * @param {number} jd - Julian date.
 * @param {number} hours - Hours to add.
 * @returns {number} Julian date
 */
export function addHours(jd: number, hours: number): number;
/**
 * Adds minutes to the julian date.
 * @param {number} jd - Julian date.
 * @param {number} minutes - Minutes to add.
 * @returns {number} Julian date
 */
export function addMinutes(jd: number, minutes: number): number;
/**
 * Adds days to the julian date.
 * @param {number} jd - Julian date.
 * @param {number} days - Days to add.
 * @returns {number} Julian date
 */
export function addDays(jd: number, days: number): number;
/**
 * Gets milliseconds of a julian date.
 * @param {number} js - julian date.
 * @returns {number} Milliseconds
 */
export function getMilliseconds(jd: any): number;
/**
 * Gets seconds of a julian date.
 * @param {number} js - julian date.
 * @returns {number} Seconds
 */
export function getSeconds(jd: any): number;
/**
 * Gets hours of a julian date.
 * @param {number} js - julian date.
 * @returns {number} Hours
 */
export function getHours(jd: any): number;
/**
 * Gets minutes of a julian date.
 * @param {number} js - julian date.
 * @returns {number} Minutes
 */
export function getMinutes(jd: any): number;
/**
 * Gets days of a julian date.
 * @param {number} js - julian date.
 * @returns {number} Days
 */
export function getDays(jd: any): number;
/**
 * Returns days in seconds.
 * @param {number} s - Seconds.
 * @returns {number} Days
 */
export function secondsToDays(s: number): number;
/**
 * Returns seconds in days.
 * @param {number} d - Days.
 * @returns {number} Seconds
 */
export function daysToSeconds(d: number): number;
/**
 * Seconds in millisecond.
 * @const
 * @default
 */
export const SECONDS_PER_MILLISECOND: 0.001;
/**
 * Milliseconds in second.
 * @const
 * @default
 */
export const MILLISECONDS_PER_SECOND: 1000;
/**
 * Seconds in minute.
 * @const
 * @default
 */
export const SECONDS_PER_MINUTE: 60;
/**
 * One by seconds in minute.
 * @const
 * @default
 */
export const ONE_BY_SECONDS_PER_MINUTE: number;
/**
 * Minutes in hour.
 * @const
 * @default
 */
export const MINUTES_PER_HOUR: 60;
/**
 * Hours in day.
 * @const
 * @default
 */
export const HOURS_PER_DAY: 24;
/**
 * One by hours in day.
 * @const
 * @default
 */
export const ONE_BY_HOURS_PER_DAY: number;
/**
 * Seconds in hour.
 * @const
 * @default
 */
export const SECONDS_PER_HOUR: 3600;
/**
 * One by seconds in hour.
 * @const
 * @default
 */
export const ONE_BY_SECONDS_PER_HOUR: number;
/**
 * Seconds in 12 hours.
 * @const
 * @default
 */
export const SECONDS_PER_12_HOURS: number;
/**
 * Minutes in day.
 * @const
 * @default
 */
export const MINUTES_PER_DAY: 1440;
/**
 * One by minutes in day.
 * @const
 * @default
 */
export const ONE_BY_MINUTES_PER_DAY: number;
/**
 * Seconds in day.
 * @const
 * @default
 */
export const SECONDS_PER_DAY: 86400;
/**
 * Milliseconds in day.
 * @const
 * @default
 */
export const MILLISECONDS_PER_DAY: 86400000;
/**
 * One by milliseconds in day.
 * @const
 * @default
 */
export const ONE_BY_MILLISECONDS_PER_DAY: number;
/**
 * One by seconds in day.
 * @const
 * @default
 */
export const ONE_BY_SECONDS_PER_DAY: number;
/**
 * Days in julian century.
 * @const
 * @default
 */
export const DAYS_PER_JULIAN_CENTURY: 36525;
/**
 * Days in julian year.
 * @const
 * @default
 */
export const DAYS_PER_JULIAN_YEAR: 365.25;
/**
 * Seconds in picosecond.
 * @const
 * @default
 */
export const PICOSECOND: 1e-9;
/**
 * Modified julian date difference.
 * @const
 * @default
 */
export const MODIFIED_JULIAN_DATE_DIFFERENCE: 2400000.5;
/**
 * Julian date of 2000 year. Epoch.
 * @const
 * @default
 */
export const J2000: 2451545;
export const J2000TAI: number;
