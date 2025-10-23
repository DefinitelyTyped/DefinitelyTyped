import * as moment from "moment";

/**
 * Calculate the number of week days between `startMoment` and `endMoment`. Week days are Monday through Friday.
 * If `endMoment` comes before `startMoment`, then this function will return a negative value.
 */
export function weekDays(startMoment: moment.Moment, endMoment: moment.Moment): number;

/**
 * Calculate the number of weekend days between the `startMoment` and `otherMoment`. Weekend days are Saturday and Sunday.
 * If `endMoment` comes before `startMoment`, then this function will return a negative value.
 */
export function weekendDays(startMoment: moment.Moment, endMoment: moment.Moment): number;

/**
 * Add week days to a moment, modifying the original moment. Returns the moment.
 */
export function addWeekDays(moment: moment.Moment, amount: number): moment.Moment;

/**
 * Subtract week days from the moment, modifying the original moment. Returns the moment.
 */
export function subtractWeekDays(moment: moment.Moment, amount: number): moment.Moment;

/**
 * Whether or not the Moment is a week day (Monday - Friday).
 */
export function isWeekDay(moment: moment.Moment): boolean;

/**
 * Whether or not the Moment occurs on Saturday or Sunday.
 */
export function isWeekendDay(moment: moment.Moment): boolean;
