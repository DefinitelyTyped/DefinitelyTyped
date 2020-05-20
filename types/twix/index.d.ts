// Type definitions for twix.js 0.6.3
// Project: https://github.com/icambron/twix.js
// Definitions by: j3ko <https://github.com/j3ko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Moment, Duration } from 'moment';

export interface TwixFormatOptions {
    groupMeridiems?: boolean;
    spaceBeforeMeridiem?: boolean;
    showDate?: boolean;
    showDayOfWeek?: boolean;
    twentyFourHour?: boolean;
    implicitMinutes?: boolean;
    implicitYear?: boolean;
    yearFormat?: string;
    monthFormat?: string;
    weekdayFormat?: string;
    dayFormat?: string;
    meridiemFormat?: string;
    hourFormat?: string;
    minuteFormat?: string;
    allDay?: any; // boolean | string
    explicitAllDay?: boolean;
    lastNightEndsAt?: number;
    hideTime?: boolean;
    hideDate?: boolean;
    hideYear?: boolean;
}

export interface TwixParseAndFormatOptions extends TwixFormatOptions {
    parseStrict?: boolean;
}

export interface TwixSimpleFormatOptions {
    allDay?: string;
    template?: (left: any, right: any) => any;
}

export interface TwixIter {
    hasNext(): boolean;
    next(): Twix;
}

export interface Twix {
    isPast(): boolean;
    isFuture(): boolean;
    isCurrent(): boolean;
    isSame(period: string): boolean;
    contains(date: string): boolean;
    contains(date: Date): boolean;
    contains(date: Moment): boolean;
    length(period: string): number;
    count(period: string): number;
    countInner(period: string): number;

    iterate(period: string): TwixIter;
    iterate(num: number, period: string): TwixIter;
    iterate(duration: Duration): TwixIter;

    iterateInner(period: string): TwixIter;
    iterateInner(num: number, period: string): TwixIter;

    overlaps(other: Twix): boolean;
    engulfs(other: Twix): boolean;
    equals(other: Twix): boolean;
    union(other: Twix): Twix;
    intersection(other: Twix): Twix;

    xor(other: Twix): Twix[];
    difference(other: Twix): Twix[];
    split(num: number, period: string): Twix[];
    split(other: Moment): Twix[];
    split(start: Moment, end: Moment): Twix[];
    split(duration: Duration): Twix[];

    humanizeLength(): string;
    simpleFormat(): string;
    simpleFormat(format: string): string;
    simpleFormat(format: string, options: TwixSimpleFormatOptions): string;

    format(options?: TwixFormatOptions | string): string;

    asDuration(period: string): Duration;
    isValid(): boolean;
    toDate(): Date;
}

export interface TwixStatic {
    formatTemplate?: (left: any, right: any) => any;
}

declare module "moment" {
    interface Moment {
        twix(date: Date): Twix;
        twix(date: Date, allDay: boolean): Twix;
        twix(date: Date, options: TwixParseAndFormatOptions): Twix;
        twix(date: Date, format: string, options: TwixParseAndFormatOptions): Twix;

        twix(date: Moment): Twix;
        twix(date: Moment, allDay: boolean): Twix;
        twix(date: Moment, options: TwixParseAndFormatOptions): Twix;
        twix(date: Moment, format: string, options: TwixParseAndFormatOptions): Twix;

        twix(date: MomentInput): Twix;
        twix(date: MomentInput, allDay: boolean): Twix;
        twix(date: MomentInput, options: TwixParseAndFormatOptions): Twix;
        twix(date: MomentInput, format: string, options: TwixParseAndFormatOptions): Twix;

        twix(date: number): Twix;
        twix(date: number, allDay: boolean): Twix;
        twix(date: number, options: TwixParseAndFormatOptions): Twix;
        twix(date: number, format: string, options: TwixParseAndFormatOptions): Twix;

        twix(date: number[]): Twix;
        twix(date: number[], allDay: boolean): Twix;
        twix(date: number[], options: TwixParseAndFormatOptions): Twix;
        twix(date: number[], format: string, options: TwixParseAndFormatOptions): Twix;

        twix(date: string): Twix;
        twix(date: string, allDay: boolean): Twix;
        twix(date: string, options: TwixParseAndFormatOptions): Twix;
        twix(date: string, format: string, options: TwixParseAndFormatOptions): Twix;
    }

    function twix(start: Moment, end: Moment): Twix;
    const twixClass: TwixStatic;

    interface Duration {
        afterMoment(date: string): string;
        beforeMoment(date: string): string;
    }
}
