// Type definitions for moment-business 0.1
// Project: https://github.com/jmeas/moment-business
// Definitions by: Greg Sieranski <https://github.com/wonbyte/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from "moment";

export function weekDays(startMoment: moment.Moment, endMoment: moment.Moment): number;
export function weekendDays(startMoment: moment.Moment, endMoment: moment.Moment): number;
export function addWeekDays(moment: moment.Moment, amount: number): moment.Moment;
export function subtractWeekDays(moment: moment.Moment, amount: number): moment.Moment;
export function isWeekDay(moment: moment.Moment): boolean;
export function isWeekendDay(moment: moment.Moment): boolean;
