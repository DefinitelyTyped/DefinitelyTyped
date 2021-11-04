// Type definitions for random-useragent 0.3
// Project: https://github.com/skratchdot/random-useragent
// Definitions by: Jeffry Angtoni <https://github.com/jeffryang24>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generated user agent object interface.
 */
export interface UserAgent {
    folder: string;
    description: string;
    userAgent: string;
    appCodename: string;
    appName: string;
    appVersion: string;
    platform: string;
    vendor: string;
    vendorSub: string;
    browserName: string;
    browserMajor: string;
    browserVersion: string;
    deviceModel: string;
    deviceType: string;
    deviceVendor: string;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    cpuArchitecture: string;
}

/**
 * Get a random user agent string (optionally using a filter).
 * @param [filter] - An `Array.prototype.filter()` callback function.
 */
export function getRandom(
    filter?: (value: UserAgent, index: number, array: UserAgent[]) => boolean
): string | null;

/**
 * Get a random user agent's parsed data (optionally using a filter).
 * @param [filter] - An `Array.prototype.filter()` callback function.
 */
export function getRandomData(
    filter?: (value: UserAgent, index: number, array: UserAgent[]) => boolean
): UserAgent | null;

/**
 * Get an array of all the user agent strings (optionally using a filter).
 * @param [filter] - An `Array.prototype.filter()` callback function.
 */
export function getAll(
    filter?: (value: UserAgent, index: number, array: UserAgent[]) => boolean
): string[];

/**
 * Get an array of all the parsed user agent data (optionally using a filter).
 * @param [filter] - An `Array.prototype.filter()` callback function.
 */
export function getAllData(
    filter?: (value: UserAgent, index: number, array: UserAgent[]) => boolean
): UserAgent[];
