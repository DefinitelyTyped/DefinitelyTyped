declare module 'memmonit'

/**
 * Returns the amount of memory used.
 * @param {string} unit Return measurement unit. Support GB, MB or kB
 * @returns {number} Memory Usage
 */
export function getMemoryUsage(unit: string): number