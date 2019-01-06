// Type definitions for crypto-random-string 1.0
// Project: https://github.com/sindresorhus/crypto-random-string
// Definitions by: Manuel Warum <https://github.com/MrManny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generate a hexadecimal string of the given length.
 * @param length the length of the random string.
 * @return a string of the specified length.
 */
declare function cryptoRandomString(length: number): string;

export = cryptoRandomString;
