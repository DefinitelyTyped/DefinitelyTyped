// Type definitions for keysym 0.0
// Project: https://github.com/substack/node-keysym
// Definitions by: Harry Shipton <https://github.com/harryshipton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Record {
    keysym: number;
    names: string[];
    status: string;
    unicode: number;
}

/**
 * Contains all associated keysyms, unicode characters, names, and their status
 * @type {Record}
 */
export const records: Record[];

/**
 * Converts a keysym into an associated record describing all representations of the key
 * @param {number} keysym - Keysym of the key
 * @returns {Record | undefined} - Associated record or undefined if one couldn't be found
 */
export function fromKeysym(keysym: number): Record | undefined;

/**
 * Converts a key name into an associated record describing all representations of the key
 * @param {string} name - Name of the key
 * @returns {Record | undefined} - Associated record or undefined if one couldn't be found
 */
export function fromName(name: string): Record | undefined;

/**
 * Converts a unicode character or value into an array of all matching records describing all possible representations of the key
 * @param {string | number} code - Unicode character or value
 * @returns {Record[]} - Associated records, will be empty if no matches were found
 * @throws Will throw an error if string is not one character
 */
export function fromUnicode(code: string | number): Record[];
