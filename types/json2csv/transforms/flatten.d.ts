import { FlattenOptions, Json2CsvTransform } from "../";

/**
 * Builds a flattening transform
 *
 * @param options Options to use for flattening
 * @returns Flattening transform
 */
declare function flatten(options?: FlattenOptions): Json2CsvTransform<any, any>;

export = flatten;
