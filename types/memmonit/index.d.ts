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