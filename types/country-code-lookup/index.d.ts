// Type definitions for country-code-lookup 0.0
// Project: https://github.com/richorama/country-code-lookup
// Definitions by: Felix Schlenkrich <https://github.com/fastereder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface CountryCode {
    continent: string;
    region: string;
    country: string;
    capital: string;
    fips: string;
    iso2: string;
    iso3: string;
    isoNo: string;
    internet: string;
}

/**
 * @description Find a country by its FIPS 10 code.
 * @param code FIPS 10 code
 * @return Object containing all the country codes.
 */
export function byFips(code: string): CountryCode;
/**
 * @description Find a country by its ISO 3166 code.
 * @param code ISO 3166 code
 * @return Object containing all the country codes.
 */
export function byIso(code: string | number): CountryCode;
/**
 * @description Find a country by its ccTLD code.
 * @param code ccTLD6 code
 * @return Object containing all the country codes.
 */
export function byInternet(code: string): CountryCode;
/**
 * @description Find a country by its country name.
 * @param country country name
 * @return Object containing all the country codes.
 */
export function byCountry(country: string): CountryCode;

export const countries: CountryCode[];
