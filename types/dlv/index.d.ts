// Type definitions for dlv 1.1
// Project: https://github.com/developit/dlv#readme
// Definitions by: Ryan Sonshine <https://github.com/ryansonshine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Safely get a dot-notated path within a nested object, with ability to
 * return a default if the full key path does not exist or the value is
 * undefined
 *
 * @param {object} object Object to look up the key on
 * @param {(string | string[])} key Key in dot notation to lookup. Can also be an array key.
 * @param {any} [defaultValue] Default value to return if the full key path does not exist on the object
 * @returns {any} Value if found in path, the default if not found, undefined if no default provided
*/
export default function dlv(object: object, key: string | string[], defaultValue?: any): any;
