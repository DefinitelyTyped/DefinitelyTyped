// Type definitions for ical 0.6
// Project: https://github.com/peterbraden/ical.js
// Definitions by: Nick Clifford <https://github.com/nickbclifford>
//                 Matej Vilk <https://github.com/iammatis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import request = require('request');
import { RRule } from 'rrule';

export type CalendarComponentType = 'VEVENT' | 'VTODO' | 'VJOURNAL' | 'VFREEBUSY' | 'VTIMEZONE' | 'VALARM';

export interface ParamList {
    params: { [key: string]: string };
    val: string;
}

export type FreeBusyType = 'FREE' | 'BUSY';

export interface FreeBusy {
    type: FreeBusyType;
    start: Date;
    end: Date;
}

// All properties (except type) are optional
// Typed as string | ParamList by default, exceptions listed below
export type CalendarComponent = {
    type: CalendarComponentType;
    summary?: string;
    description?: string;
    url?: string;
    uid?: string;
    location?: string;
    start?: Date;
    end?: Date;
    rrule?: RRule;
    exdate?: { [datestr: string]: Date };
    recurrences?: CalendarComponent[];
    class?: string;
    transparency?: string;
    geo?: Geo;
    completion?: string;
    completed?: Date;
    categories?: string[];
    freebusy?: FreeBusy;
    dtstamp?: Date;
    created?: Date;
    lastmodified?: Date;
    recurrenceid?: Date;
} & { [prop: string]: string | ParamList | undefined };

export interface Geo {
    lat: number;
    lon: number;
}

export interface FullCalendar {
    [uid: string]: CalendarComponent;
}

export function parseICS(icsData: string): FullCalendar;
export function parseFile(filename: string): FullCalendar;
export function fromURL(url: string, options: request.CoreOptions, callback: (error: any, data: FullCalendar) => void): void;
