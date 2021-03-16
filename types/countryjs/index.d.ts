// Type definitions for countryjs 1.8
// Project: https://github.com/therebelrobot/countryjs
// Definitions by: Rodry <https://github.com/ImRodry>
//                 marzeq <https://github.com/marzeq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Country {
    name: string;
    altSpellings: string[];
    area: number;
    borders: string[];
    callingCodes: string[];
    capital: string;
    currencies: string[];
    demonym: string;
    flag: string;
    ISO: {
        alpha2: string;
        alpha3: string;
    };
    languages: string[];
    latlng: number[];
    nativeName: string;
    population: number;
    provinces: any[];
    region: string;
    subregion: string;
    timezones: any[];
    tld: string[];
    translations: {
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
    };
    wiki: string;
}

    /**
     * Returns all available information for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An object with all available information for the given country.
     *
     */
    export function info(name: string, mode?: "ISO2" | "ISO3" | "name"): Country | undefined;

    /**
     * Returns all states/provinces for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of states / provinces
     *
     */
    export function states(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns all states/provinces for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of states / provinces
     *
     */
    export function provinces(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns name for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A string with the name of the country
     *
     */
    export function name(name: string, mode?: "ISO2" | "ISO3" | "name"): string | undefined;

    /**
     * Returns alternate spellings for the name of a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of alternate names for the country
     *
     */
    export function altSpellings(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns area (km²) for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns The area number in km squared
     *
     */
    export function area(name: string, mode?: "ISO2" | "ISO3" | "name"): number | undefined;

    /**
     * Returns bordering countries (ISO3) for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of strings, ISO3 codes of countries that border the given country
     *
     */
    export function borders(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns international calling codes for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of calling code strings
     *
     */
    export function callingCodes(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns capital city for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A string with the name of the capital city
     *
     */
    export function capital(name: string, mode?: "ISO2" | "ISO3" | "name"): string | undefined;

    /**
     * Returns official currencies for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of currency strings
     *
     */
    export function currencies(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns the demonyms for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A string with the name of the residents
     *
     */
    export function demonym(name: string, mode?: "ISO2" | "ISO3" | "name"): string | undefined;

    /**
     * Returns SVG link of the official flag for a specified country - INCOMPLETE
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A string URL of CC licensed svg flag
     *
     */
    export function flag(name: string, mode?: "ISO2" | "ISO3" | "name"): string | undefined;

    // export function geoJSON(name: string, mode?: "ISO2" | "ISO3" | "name"): geoJSON

    /**
     * Returns ISO codes for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An object of ISO codes
     *
     */
    export function ISOcodes(name: string, mode?: "ISO2" | "ISO3" | "name"): { alpha2: string; alpha3: string } | undefined;

    /**
     * Returns official languages for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of language codes
     *
     */
    export function languages(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns approx latitude and longitude for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of approx latitude and longitude numbers for the country
     *
     */
    export function latlng(name: string, mode?: "ISO2" | "ISO3" | "name"): [number, number] | undefined;

    /**
     * Returns the name of the country in its native tongue
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A string, name of country in its native language
     *
     */
    export function nativeName(name: string, mode?: "ISO2" | "ISO3" | "name"): string | undefined;

    /**
     * Returns approximate population for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A number, approx population
     *
     */
    export function population(name: string, mode?: "ISO2" | "ISO3" | "name"): number | undefined;

    /**
     * Returns general region for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A string with the general region for the country
     *
     */
    export function region(name: string, mode?: "ISO2" | "ISO3" | "name"): string | undefined;

    /**
     * Returns a more specific region for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A string with the specific region of the country
     *
     */
    export function subregion(name: string, mode?: "ISO2" | "ISO3" | "name"): string | undefined;

    /**
     * Returns all timezones for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of timezones
     *
     */
    export function timezones(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns official top level domains for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An array of top level domains specific to the country
     *
     */
    export function tld(name: string, mode?: "ISO2" | "ISO3" | "name"): string[] | undefined;

    /**
     * Returns translations for a specified country name in popular languages
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns An object of translations of the country name in major languages
     *
     */
    export function translations(
        name: string,
        mode?: "ISO2" | "ISO3" | "name",
    ): { de: string; es: string; fr: string; ja: string; it: string } | undefined;

    /**
     * Returns link to wikipedia page for a specified country
     *
     * @param name The name of the country
     * @param mode The type of input. ISO2 by default, can be "ISO3" or "name"
     * @returns A string URL of the Wikipedia article on the country
     *
     */
    export function wiki(name: string, mode?: "ISO2" | "ISO3" | "name"): string | undefined;

    /**
     * Returns array of objects containing all available data for all countries. This will be super big. Not recommended.
     *
     * @returns An array of objects with all the information for every country
     *
     */
    export function all(): Country[];
