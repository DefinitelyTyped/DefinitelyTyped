// Type definitions for moment-timezone.js 0.2.5
// Project: http://momentjs.com/timezone/
// Definitions by: Michel Salib <https://github.com/michelsalib>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../moment/moment.d.ts" />

declare namespace moment {
    interface Moment {
        tz(): string;
        tz(timezone: string): Moment;
        zoneAbbr() :Moment;
        zoneName() :Moment;
    }

    interface MomentStatic {
        tz: MomentTimezone;
    }
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
    (): moment.Moment;
    (timezone: string): moment.Moment;
    (date: number, timezone: string): moment.Moment;
    (date: number[], timezone: string): moment.Moment;
    (date: string, timezone: string): moment.Moment;
    (date: string, format: moment.MomentFormatSpecification, timezone: string): moment.Moment;
    (date: string, format: moment.MomentFormatSpecification, strict: boolean, timezone: string): moment.Moment;
    (date: string, format: moment.MomentFormatSpecification, language: string, timezone: string): moment.Moment;
    (date: string, format: moment.MomentFormatSpecification, language: string, strict: boolean, timezone: string): moment.Moment;
    (date: Date, timezone: string): moment.Moment;
    (date: moment.Moment, timezone: string): moment.Moment;
    (date: Object, timezone: string): moment.Moment;

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
    guess(): string;

    setDefault(timezone: string): void;
}

declare module 'moment-timezone' {
    var _tmp: moment.MomentStatic;

    export = _tmp;
}
