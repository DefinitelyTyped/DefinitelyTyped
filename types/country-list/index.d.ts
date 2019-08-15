// Type definitions for country-list 2.1
// Project: https://github.com/fannarsh/country-list
// Definitions by: Kyle Roach <https://github.com/iRoachie>
//                 Adam Binford <https://github.com/Kimahriman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Expects an array of code and country name pairs to add to the list. Doesn't return anything.
 */
export function overwrite(countries: Array<{ code: string, name: string}>): void;

/**
 * Expects a two-digit country code. Returns the name for that country. If not found, it returns undefined.
 */
export function getName(code: string): string | undefined;

/**
 * Expects the English country name. Returns the code for that country. If not found, it returns undefined.
 */
export function getCode(name: string): string | undefined;

/**
 * Returns an array of all country names.
 */
export function getNames(): string[];

/**
 * Returns an array of all country codes.
 */
export function getCodes(): string[];

/**
 * Returns a key-value object of all countries using the name as key.
 */
export function getNameList(): {[name: string]: string};

/**
 * Returns a key-value object of all countries using the code as key.
 */
export function getCodeList(): {[code: string]: string};

/**
 * Returns an array of all country information, in the same format as it gets imported.
 */
export function getData(): Array<{ code: string, name: string }>;
