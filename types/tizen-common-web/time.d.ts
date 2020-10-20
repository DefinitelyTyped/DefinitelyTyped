/**
 * Time API: https://docs.tizen.org/application/web/api/5.5/device_api/wearable/tizen/time.html
 */

import { SuccessCallback } from './tizen';

export interface TimeUtil {
    getCurrentDateTime(): TZDate;
    getLocalTimezone(): string;
    getAvailableTimezones(): string[];
    getDateFormat(shortformat?: boolean): string;
    getTimeFormat(): string;
    isLeapYear(year: number): boolean;
    setDateTimeChangeListener(changeCallback: SuccessCallback): void;
    unsetDateTimeChangeListener(): void;
    setTimezoneChangeListener(changeCallback: SuccessCallback): void;
    unsetTimezoneChangeListener(): void;
}

export class TZDate {
    constructor(datetime?: Date, timezone?: string)
    constructor(year: number, month: number, day: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, timezone?: string)
    getDate(): number;
    setDate(date: number): void;
    getDay(): number;
    getFullYear(): number;
    setFullYear(year: number): void;
    getHours(): number;
    setHours(hours: number): void;
    getMilliseconds(): number;
    setMilliseconds(ms: number): void;
    getMinutes(): number;
    setMinutes(minutes: number): void;
    getMonth(): number;
    setMonth(month: number): void;
    getSeconds(): number;
    setSeconds(seconds: number): void;
    getUTCDate(): number;
    setUTCDate(date: number): void;
    getUTCDay(): number;
    getUTCFullYear(): number;
    setUTCFullYear(year: number): void;
    getUTCHours(): number;
    setUTCHours(hours: number): void;
    getUTCMilliseconds(): number;
    setUTCMilliseconds(ms: number): void;
    getUTCMinutes(): number;
    setUTCMinutes(minutes: number): void;
    getUTCMonth(): number;
    setUTCMonth(month: number): void;
    getUTCSeconds(): number;
    setUTCSeconds(seconds: number): void;
    getTimezone(): string;
    toTimezone(tzid: string): TZDate;
    toLocalTimezone(): TZDate;
    toUTC(): TZDate;
    difference(other: TZDate): TimeDuration;
    equalsTo(other: TZDate): boolean;
    earlierThan(other: TZDate): boolean;
    laterThan(other: TZDate): boolean;
    addDuration(duration: TimeDuration): TZDate;
    toLocaleDateString(): string;
    toLocaleTimeString(): string;
    toLocaleString(): string;
    toDateString(): string;
    toTimeString(): string;
    toString(): string;
    secondsFromUTC(): number;
    isDST(): boolean;
    getPreviousDSTTransition(): TZDate | undefined;
    getNextDSTTransition(): TZDate | undefined;
}

export class TimeDuration {
    constructor(length: number, unit: TimeDurationUnit)
    length: number;
    unit: TimeDurationUnit;
    difference(other: TimeDuration): TimeDuration;
    equalsTo(other: TimeDuration): boolean;
    lessThan(other: TimeDuration): boolean;
    greaterThan(other: TimeDuration): boolean;
}

export enum TimeDurationUnit {
    MSECS = "MSECS",
    SECS = "SECS",
    MINS = "MINS",
    HOURS = "HOURS",
    DAYS = "DAYS"
}
