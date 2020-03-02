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
    /**
     * Get a list of timezones for some country
     * @param country The country code
     * @param options Set offset to true to also get offsets
     */
    zonesForCountry(country: string, options?: { offset: boolean }): string[];

    add(packedZoneString: string): void;
    add(packedZoneString: string[]): void;

    link(packedLinkString: string): void;
    link(packedLinkString: string[]): void;

    load(data: { version: string; links: string[]; zones: string[] }): void;

    names(): string[];
    guess(ignoreCache?: boolean): string;

    setDefault(timezone?: string): MomentTimezone;
  }

  interface Moment {
    tz(): string | undefined;
    tz(timezone: string, keepLocalTime?: boolean): moment.Moment;
    zoneAbbr(): string;
    zoneName(): string;
  }

  const tz: MomentTimezone;
}
