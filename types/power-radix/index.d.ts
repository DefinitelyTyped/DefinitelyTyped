/**
 * Convert number from source radix to target radix
 * with optional custom character encoding
 * http://www.deimel.org/comp_sci/conversion.htm
 */
declare class PowerRadix {
    /**
     * Creates a new instance of PowerRadix
     */
    constructor(digits: string | number | number[], sourceRadix: number | number[]);

    /**
     * Convert to target radix, return as Array
     * @param targetRadix - target radix / encoding characters
     * @return  source digits converted to target radix presented in format of Array
     */
    toArray(targetRadix: number | string[]): string[];

    /**
     * Convert to target radix, return as String
     *
     * @param targetRadix - target radix / encoding characters
     * @return - source digits converted to target radix presented in format of Array
     */
    toString(targetRadix: number | string[]): string;
}

export = PowerRadix;
