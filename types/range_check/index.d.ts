// Type definitions for range_check 1.4
// Project: https://github.com/keverw/range_check#readme
// Definitions by: ItsMajestiX <https://github.com/ItsMajestiX>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//IP Validation
/**
 * Checks if an IP address is valid. Same as isIP.
 * @param {string} ip - The IP address to check. 
 * @returns {boolean} - True if IP is a valid address, false otherwise.
 */
export declare function valid_ip(ip: string): boolean
/**
 * Checks if an IP address is valid. Same as isIP.
 * @param {string} ip - The IP address to check. 
 * @returns {boolean} - True if IP is a valid address, false otherwise.
 */
export declare function validIp(ip: string): boolean
/**
 * Checks if an IP address is valid.
 * @param {string} ip The IP address to check. 
 * @returns {boolean} True if IP is a valid address, false otherwise.
 */
export declare function isIP(ip: string): boolean
//---------------------------------------------------

//IP Version Checking
/**
 * Gets the version (IPv4 or IPv6) of an IP address.
 * @param {string} ip The IP address to check.
 * @returns {0 | 4 | 6} The version of the IP address. Returns either 0 (invalid IP), 4 (IPv4), or 6 (IPv6).
 */
export declare function ver(ip: string): 0 | 4 | 6
/**
 * Checks if an IP address is a valid IPv4 address.
 * @param {string} ip - The IP address to check. 
 * @returns {boolean} - True if the IP address is a valid IPv4 address, false otherwise.
 */
export declare function isV4(ip: string): boolean
/**
 * Checks if an IP address is a valid IPv6 address.
 * @param {string} ip - The IP address to check. 
 * @returns {boolean} - True if the IP address is a valid IPv6 address, false otherwise.
 */
export declare function isV6(ip: string): boolean

//IPv6 Abbreviation/Normalization
/**
 * Abbreviates IPv6 addresses, and keeps IPv4 addresses the same. Same as storeIP.
 * @param {string} ip IP address to abbreviate.
 * @returns {string | null} The abbreviated IP address, or null if the IP is invalid.
 */
export declare function searchIP(ip: string): string | null
/**
 * Abbreviates IPv6 addresses, and keeps IPv4 addresses the same.
 * @param {string} ip IP address to abbreviate.
 * @returns {string | null} The abbreviated IP address, or null if the IP is invalid.
 */
export declare function storeIP(ip: string): string | null
/**
 * Normalizes IPv6 addresses, and keeps IPv4 addresses the same.
 * @param {string | null} ip IP address to normalize.
 * @returns {string} Normalized IP address, or an empty string if invalid IP.
 */
export declare function displayIP(ip: string | null): string

//IP Range Checking
/**
 * Checks if a range is valid. Same is isRange
 * @param {string} range Range to check.
 * @returns {boolean} True if the range is valid, false otherwise.
 */
export declare function valid_range(range: string): boolean
/**
 * Checks if a range is valid. Same is isRange
 * @param {string} range Range to check.
 * @returns {boolean} True if the range is valid, false otherwise.
 */
export declare function validRange(range: string): boolean
/**
 * Checks if a range is valid.
 * @param {string} range Range to check.
 * @returns {boolean} True if the range is valid, false otherwise.
 */
export declare function isRange(range: string): boolean
/**
 * Checks if an IP address is in a list of specified ranges.
 * @param {string} ip IP address to check.
 * @param {string[]} range List of ranges to check against.
 * @returns {boolean} True if IP address is in any range specified, false otherwise.
 */
export declare function inRange(ip: string, ranges: string[]): boolean
/**
 * Checks if an IP address is in a list of specified ranges. Same is inRange.
 * @param {string} ip IP address to check.
 * @param {string[]} range List of ranges to check against.
 * @returns {boolean} True if IP address is in any range specified, false otherwise.
 */
export declare function in_range(ip: string, ranges: string[]): boolean
/**
 * Checks if an IP address is in a specified range.
 * @param {string} ip IP address to check.
 * @param {string} range Range to check against.
 * @returns {boolean} True if IP address is in range, false otherwise.
 */
export declare function inRange(ip: string, range: string): boolean
/**
 * Checks if an IP address is in a specified range. Same is inRange.
 * @param {string} ip IP address to check.
 * @param {string} range Range to check against.
 * @returns {boolean} True if IP address is in range, false otherwise.
 */
export declare function in_range(ip: string, range: string): boolean
