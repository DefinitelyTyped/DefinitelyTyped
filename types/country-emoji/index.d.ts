// Type definitions for country-emoji 1.5
// Project: https://github.com/meeDamian/country-emoji#readme
// Definitions by: Rodry <https://github.com/ImRodry>
//                 marzeq <https://github.com/marzeq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns the flag emoji of a country.
 *
 * @param input - Country code or name.
 * @returns The flag emoji of the country if the provided input is valid.
 *
 */
export function flag(input: string): string | undefined;

/**
 * Returns the code of a country.
 *
 * @param input - Flag emoji or name.
 * @returns The code of the country if the input is valid.
 *
 */
export function code(input: string): string | undefined;

/**
 * Returns the name of a country.
 *
 * @param input - Flag emoji or county code.
 * @returns The name of the country if the input is valid.
 *
 */
export function name(input: string): string | undefined;

/**
 * Object that contains every single countries' name and language name.
 *
 * @example {"BG": ["Bulgaria", "Bulgarian"]}; countries["BG"] would be ["Bulgaria", "Bulgarian"]
 *
 */
export const countries: {
    [key: string]: [string, string];
};
