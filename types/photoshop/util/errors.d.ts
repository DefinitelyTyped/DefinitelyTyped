/**
 * Replace all of the ^0, ^1, ^n strings found in zstring with strings in array of replaces.
 * If not array is provided then string is only translated.
 * @param zstring - ZString to translate and replace ^0 strings
 * @param replaces - Array of ZStrings or strings to use for replacement
 * @returns translated string
 */
export declare function replaceAndTranslate(zstring: string, replaces?: string[]): string;
