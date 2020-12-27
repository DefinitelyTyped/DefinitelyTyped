// Type definitions for country-telephone-data 0.6
// Project: https://github.com/mukeshsoni/country-telephone-data#readme
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Country {
    name: string;
    /** The {@link https://w.wiki/4kP |ISO 3166-1 alpha-2} country code (in **lowercase**) */
    iso2: string;
    dialCode: string;
    /** A format string for phone numbers. **This could be an empty string.** */
    format: string;
    hasAreaCodes?: true;
    priority: number;
}

/** An array with data on every country */
export const allCountries: Country[];

/**
 * The same data as `allCountries`, but as an object, indexed by the
 * {@link https://w.wiki/4kP |ISO 3166-1 alpha-2}
 * name of the country (in **lowercase**)
 */
export const iso2Lookup: Record<string, Country>;
