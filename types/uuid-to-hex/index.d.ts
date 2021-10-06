// Type definitions for uuid-to-hex 1.1
// Project: https://github.com/DeRain/uuid-to-hex
// Definitions by: Pedro Queiroz <https://github.com/pmqueiroz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Convert UUID string to hex string.
 * @param uuidString The input uuid.
 * @param addLeadingZero Identifies if you want the leading zero on return.
 */
declare function uuidToHex(uuidString: string, addLeadingZero?: boolean): string;
export = uuidToHex;
