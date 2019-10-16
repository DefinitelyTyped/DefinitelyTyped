// Type definitions for ical 0.6
// Project: https://github.com/peterbraden/ical.js
// Definitions by: Nick Clifford <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import request = require('request');
import { RRule } from 'rrule';

export type CalendarComponentType = 'VEVENT' | 'VTODO' | 'VJOURNAL' | 'VFREEBUSY' | 'VTIMEZONE' | 'VALARM';

interface Recurrence {
    rrule: RRule;
}

export interface CalendarComponent {
    type: CalendarComponentType;
    params: [];
}

export interface Event extends CalendarComponent, Recurrence {
    type: 'VEVENT';
    dtstamp: Date;
    uid: string;
    dtstart?: string;
    class?: string;
    created?: Date;
    description?: string;
    geo?: { lat: number, long: number };
    lastmodified?: Date;
    location?: string;
    organizer?: string;
    priority?: string;
    sequence?: string;
    status?: string;
    summary?: string;
    transp?: string;
    url?: string;
}

export interface ICSData {
    [uid: string]: CalendarComponent;
}

export function parseICS(icsData: string): ICSData;
export function parseFile(filename: string): ICSData;
export function fromURL(url: string, options: request.CoreOptions, callback: (error: any, data: ICSData) => any): void;
