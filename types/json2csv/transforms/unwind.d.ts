import { Json2CsvTransform } from './base';

export interface UnwindOptions {
 paths?: Array<string>;
 blankOut?: boolean;
}

/**
 * Builds a unwinding transform
 *
 * @param {UnwindOptions} options Options to use for unwinding
 * @returns {Object => Array} Array of objects containing all rows after unwind of chosen paths
*/
export function unwind(options?: UnwindOptions): Json2CsvTransform<any, Array<any>>;
