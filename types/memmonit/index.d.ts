declare module 'memmonit'

/**
 * Returns the amount of memory used.
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 * @returns {number} Memory Usage
 */
export function getMemoryUsage(unit: string): number
/**
 * Returns the amount of memory used.
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 * @returns {number} Memory value used truncated
 */
export function memoryUsageTrunc(unit: string): number
/**
 * Returns the amount of memory used.
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 * @returns {number} Memory value used fixed
 */
export function getMemoryUsageFixed(unit: string, value: number): number
/**
 * Returns the total memory used.
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 * @returns {number} Memory value total
 */
export function getMemoryTotal(unit: string): number
/**
 * Returns the total memory used.
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 * @returns {number} Memory value total truncated
 */
export function getMemoryTotalTrunc(unit: string): number
/**
 * Returns the total memory used.
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 * @returns {number} Memory value total fixed
 */
export function getMemoryTotalFixed(unit: string, value: number): number
/**
 * Writes the measurement to a file.
 * @param {string} file Recording file
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 */
export function registerMemoryUsage(file: string, unit: string): void
/**
 * Writes the measurement to a file.
 * @param {string} file Recording file
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 */
export function registerMemoryUsageTrunc(file: string, unit: string): void
/**
 * Writes the measurement to a file.
 * @param {string} file Recording file
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 */
export function registerMemoryUsageFixed(file: string, unit: string): void 