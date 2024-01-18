// i18n-iso-countries-regions.d.ts

/**
 * Represents detailed information about a country.
 */
interface Country {
    iso: string; // ISO code of the country.
    name: string; // Name of the country.
}

/**
 * Represents detailed information about a country with calling code.
 */
interface CountryWithCallingCode extends Country {
    callingCode: string; // Calling code of the country.
}

/**
 * Represents detailed information about a region.
 */
interface Region {
    iso: string; // ISO code of the region.
    name: string; // Name of the region.
}

/**
 * Represents detailed information about a country including regions.
 */
interface CountryInfo extends CountryWithCallingCode {
    regions: Region[]; // Array of regions in the country.
}

/**
 * Retrieves an array of countries with their names.
 * @param language - Optional. Language code for localization.
 * @returns An array of Country objects.
 */
declare function getAllCountriesName(language?: string): Country[];

/**
 * Retrieves an array of countries with their names and calling codes.
 * @param language - Optional. Language code for localization.
 * @returns An array of CountryWithCallingCode objects.
 */
declare function getAllCountriesCallingCode(language?: string): CountryWithCallingCode[];

/**
 * Retrieves the calling code of a country by its name.
 * @param countryName - The name of the country.
 * @returns The calling code of the country or null if not found.
 */
declare function getCallingCodeByCountryName(countryName: string): string | null;

/**
 * Retrieves the calling code of a country by its ISO code.
 * @param isoCode - The ISO code of the country.
 * @returns The calling code of the country or null if not found.
 */
declare function getCallingCodeByCountryCode(isoCode: string): string | null;

/**
 * Retrieves an array of regions in a country by its language and ISO code.
 * @param language - The language code for localization.
 * @param countryCode - The ISO code of the country.
 * @returns An array of Region objects.
 */
declare function getRegionsByCountryCode(language: string, countryCode: string): Region[];

/**
 * Retrieves an array of regions in a country by its language and name.
 * @param language - The language code for localization.
 * @param countryName - The name of the country.
 * @returns An array of Region objects.
 */
declare function getRegionsByCountryName(language: string, countryName: string): Region[];

/**
 * Retrieves detailed information about a country, including regions, by its language and ISO code.
 * @param language - The language code for localization.
 * @param countryCode - The ISO code of the country.
 * @returns Detailed information about the country or null if not found.
 */
declare function getCountryInfoByCountryCode(language: string, countryCode: string): CountryInfo | null;
