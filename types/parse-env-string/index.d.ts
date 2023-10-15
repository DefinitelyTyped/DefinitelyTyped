// Type definitions for parse-env-string 1.0
// Project: https://github.com/watson/parse-env-string#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * It takes a string and returns an object.
 * If given null or undefined an empty object is returned.
 * If given anything else, a TypeError is thrown.
 * An `Error` will also be thrown if the provided string doesn't contain valid environment variables.
 * E.g. if given the string `1a=b`, an error will be thrown because environment variables cannot have a digit as the first character.
 */
declare function parseEnvString(str: string | null | undefined): { [key: string]: string };

/**
 * Parse a string containing environment variables to a key/value object.
 */
export = parseEnvString;
