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
export function getTickValuesFixedDomain(
    domain: [number, number],
    tickCount?: number,
    allowDecimals?: boolean,
): number[];
