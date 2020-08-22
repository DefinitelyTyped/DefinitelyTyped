import { Json2CsvTransform } from './base';

export interface FlattenOptions {
  objects?: boolean;
  arrays?: boolean;
  separator?: string;
}

/**
 * Builds a flattening transform
 *
 * @param {FlattenOptions} options Options to use for flattening
 * @returns {Object => Object} Flattening transform
 */
export function flatten(options?: FlattenOptions): Json2CsvTransform<any, any>;
