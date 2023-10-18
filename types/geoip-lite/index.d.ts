/**
 * https://github.com/bluesmoon/node-geoip#looking-up-an-ip-address
 */
export interface Lookup {
    /** [ <low bound of IP block>, <high bound of IP block> ] */
    range: [number, number];
    /** 2 letter ISO-3166-1 country code https://www.iban.com/country-codes */
    country: string;
    /**
     * Up to 3 alphanumeric variable length characters as ISO 3166-2 code
     * For US states this is the 2 letter state
     * For the United Kingdom this could be ENG as a country like “England
     * FIPS 10-4 subcountry code
     */
    region: string;
    /** 1 if the country is a member state of the European Union, 0 otherwise. */
    eu: "1" | "0";
    /** "Country/Zone" Timezone from IANA Time Zone Database */
    timezone: string;
    /** This is the full city name */
    city: string;
    /** The latitude and longitude of the city */
    ll: [number, number];
    /** Metro code */
    metro: number;
    /** The approximate accuracy radius (km), around the latitude and longitude */
    area: number;
}

export interface AsyncCallback {
    (err?: Error): void;
}

export type CmpArgs = number | [number];
export type CmpResult = 1 | -1 | 0 | null;

export function cmp(a: CmpArgs, b: CmpArgs): null | Lookup;
export function lookup(ip: string | number): null | Lookup;
export function pretty(ip: string | number | Array<string | number>): string;
export function startWatchingDataUpdate(cb?: AsyncCallback): void;
export function stopWatchingDataUpdate(): void;
export function clear(): void;
export function reloadData(cb?: AsyncCallback): void;
export function reloadDataSync(): void;
