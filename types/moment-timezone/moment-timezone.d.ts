import moment = require('moment');

// require("moment-timezone") === require("moment")
export = moment;

declare module 'moment' {
  interface MomentZone {
    name: string;
    abbrs: string[];
    untils: number[];
    offsets: number[];
    population: number;

    abbr(timestamp: number): string;
    offset(timestamp: number): number;
    utcOffset(timestamp: number): number;
    parse(timestamp: number): number;
  }

  interface MomentZoneOffset {
      name: string;
      offset: number;
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
    (date: any, timezone: string): moment.Moment;

    zone(timezone: string): MomentZone | null;

    add(packedZoneString: string): void;
    add(packedZoneString: string[]): void;

    link(packedLinkString: string): void;
    link(packedLinkString: string[]): void;

    load(data: { version: string; links: string[]; zones: string[] }): void;

    names(): string[];
    zonesForCountry<T extends true>(country: string, with_offset: T): T extends true ? MomentZoneOffset[] : never;
    zonesForCountry<T extends false>(country: string, with_offset?: T): T extends false ? string[] : never;
    zonesForCountry(country: string, with_offset?: boolean): MomentZoneOffset[] | string[];
    countries(): string[];
    guess(ignoreCache?: boolean): string;

    setDefault(timezone?: string): Moment;
  }

  interface Moment {
    tz(): string | undefined;
    tz(timezone: string, keepLocalTime?: boolean): moment.Moment;
    zoneAbbr(): string;
    zoneName(): string;
  }

  const tz: MomentTimezone;
}
