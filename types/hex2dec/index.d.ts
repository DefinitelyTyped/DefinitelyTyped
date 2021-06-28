// Type definitions for hex2dec 1.1
// Project: https://github.com/donmccurdy/hex2dec#readme
// Definitions by: Adriaan Knapen <https://github.com/Addono>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Takes a hexadecimal string and, when the hexedecimal is valid,
 * returns it as a decimal string.
 */
export function hexToDec(hexStr: string): string | null;
/**
 * Takes a decimal string and, when the decimal is valid,
 * returns it as a hexadecimal string.
 */
export function decToHex(decStr: string, opts?: { prefix?: boolean }): string | null;
