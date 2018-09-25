// Type definitions for Recharts 1.0
// Project: https://github.com/recharts/recharts-scale
// Definitions by: John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * Calculate the ticks of an interval
 * @param [minAndMax]      min: The minimum value, max: The maximum value
 * @param tickCount        The count of ticks
 * @param allowDecimals    Allow the ticks to be decimals or not - defaults to true
 */
export function getTickValues(domain: [number, number], tickCount?: number, allowDecimals?: boolean): number[];

/**
 * Calculate the ticks of an interval
 * @param [minAndMax]      min: The minimum value, max: The maximum value
 * @param tickCount        The count of ticks
 * @param allowDecimals    Allow the ticks to be decimals or not - defaults to true
 */
export function getNiceTickValues(domain: [number, number], tickCount?: number, allowDecimals?: boolean): number[];

/**
 * Calculate the ticks of an interval
 * @param [minAndMax]      min: The minimum value, max: The maximum value
 * @param tickCount        The count of ticks
 * @param allowDecimals    Allow the ticks to be decimals or not - defaults to true
 */
export function getTickValuesFixedDomain(domain: [number, number], tickCount?: number, allowDecimals?: boolean): number[];
