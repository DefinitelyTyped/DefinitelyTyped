import { Json2CsvTransform, UnwindOptions } from "../";

/**
 * Builds a unwinding transform
 *
 * @param options Options to use for unwinding
 * @returns Array of objects containing all rows after unwind of chosen paths
 */
declare function unwind(options?: UnwindOptions): Json2CsvTransform<any, any[]>;

export = unwind;
