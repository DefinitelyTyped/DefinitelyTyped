// IP Validation
/**
 * Checks if an IP address is valid. Same as isIP.
 * @param ip The IP address to check.
 * @returns True if IP is a valid address, false otherwise.
 */
export function valid_ip(ip: string): boolean;
/**
 * Checks if an IP address is valid. Same as isIP.
 * @param ip The IP address to check.
 * @returns True if IP is a valid address, false otherwise.
 */
export function validIp(ip: string): boolean;
/**
 * Checks if an IP address is valid.
 * @param ip The IP address to check.
 * @returns True if IP is a valid address, false otherwise.
 */
export function isIP(ip: string): boolean;
// ---------------------------------------------------

// IP Version Checking
/**
 * Gets the version (IPv4 or IPv6) of an IP address.
 * @param ip The IP address to check.
 * @returns The version of the IP address. Returns either 0 (invalid IP), 4 (IPv4), or 6 (IPv6).
 */
export function ver(ip: string): 0 | 4 | 6;
/**
 * Checks if an IP address is a valid IPv4 address.
 * @param ip The IP address to check.
 * @returns True if the IP address is a valid IPv4 address, false otherwise.
 */
export function isV4(ip: string): boolean;
/**
 * Checks if an IP address is a valid IPv6 address.
 * @param ip The IP address to check.
 * @returns True if the IP address is a valid IPv6 address, false otherwise.
 */
export function isV6(ip: string): boolean;

// IPv6 Abbreviation/Normalization
/**
 * Abbreviates IPv6 addresses, and keeps IPv4 addresses the same. Same as storeIP.
 * @param ip IP address to abbreviate.
 * @returns The abbreviated IP address, or null if the IP is invalid.
 */
export function searchIP(ip: string): string | null;
/**
 * Abbreviates IPv6 addresses, and keeps IPv4 addresses the same.
 * @param ip IP address to abbreviate.
 * @returns The abbreviated IP address, or null if the IP is invalid.
 */
export function storeIP(ip: string): string | null;
/**
 * Normalizes IPv6 addresses, and keeps IPv4 addresses the same.
 * @param ip IP address to normalize.
 * @returns Normalized IP address, or an empty string if invalid IP.
 */
export function displayIP(ip: string | null): string;

// IP Range Checking
/**
 * Checks if a range is valid. Same as isRange
 * @param range Range to check.
 * @returns True if the range is valid, false otherwise.
 */
export function valid_range(range: string): boolean;
/**
 * Checks if a range is valid. Same as isRange
 * @param range Range to check.
 * @returns True if the range is valid, false otherwise.
 */
export function validRange(range: string): boolean;
/**
 * Checks if a range is valid.
 * @param range Range to check.
 * @returns True if the range is valid, false otherwise.
 */
export function isRange(range: string): boolean;
/**
 * Checks if an IP address is in one or more specified ranges.
 * @param ip IP address to check.
 * @param range Range or list of ranges to check against.
 * @returns True if IP address is in any range specified, false otherwise.
 */
export function inRange(ip: string, ranges: string[] | string): boolean;
/**
 * Checks if an IP address is in one or more specified ranges. Same as inRange.
 * @param ip IP address to check.
 * @param range Range or list of ranges to check against.
 * @returns True if IP address is in any range specified, false otherwise.
 */
export function in_range(ip: string, ranges: string[] | string): boolean;
