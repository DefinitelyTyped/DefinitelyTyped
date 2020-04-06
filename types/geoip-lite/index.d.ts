// Type definitions for GeoIP-lite 1.1.6
// Project: https://github.com/bluesmoon/node-geoip
// Definitions by: Yuce Tekol <http://yuce.me/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace mod {
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
        eu: '1' | '0';
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

    export function lookup(ip: string): null | Lookup;
    export function pretty(ip: number): string;
    export function startWatchingDataUpdate(): void;
    export function stopWatchingDataUpdate(): void;
}
export = mod;
