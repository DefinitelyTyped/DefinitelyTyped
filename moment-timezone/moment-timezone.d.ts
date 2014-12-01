// Type definitions for moment-timezone.js 0.2.5
// Project: http://momentjs.com/timezone/
// Definitions by: Michel Salib <https://github.com/michelsalib>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../moment/moment.d.ts" />

interface Moment {
    tz(timezone: string): Moment;
}

interface MomentZone {
    name: string;
    abbrs: string[];
    untils: number[];
    offsets: number[];

    abbr(timestamp: number): string;
    offset(timestamp: number): number;
    parse(timestamp: number): number
}

interface MomentTimezone {
    (date: number, timezone: string): Moment;
    (date: number[], timezone: string): Moment;
    (date: string, format: string, timezone: string): Moment;
    (date: Date, timezone: string): Moment;
    (date: Moment, timezone: string): Moment;
    (date: Object, timezone: string): Moment;

    zone(timezone: string): MomentZone;

    add(packedZoneString: string): void;
    add(packedZoneString: string[]): void;

    link(packedLinkString: string): void;
    link(packedLinkString: string[]): void;

    load(data: {
        version: string;
        links: string[];
        zones: string[];
    }): void;

    names(): string[];
}

interface MomentStatic {
    tz: MomentTimezone;
}

declare module 'moment-timezone' {

}
