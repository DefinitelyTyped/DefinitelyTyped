// Type definitions for memoizee 0.4
// Project: https://github.com/medikoo/memoizee
// Definitions by: Juan Picado <https://github.com/juanpicado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Resolver options
 * @interface RevolversArray
 */
interface RevolversArray {
  [index: number]: {};
}

/**
 * List of options
 * @interface IMemoizeeOptions
 */
interface IMemoizeeOptions {
  length?: number;
  maxAge?: number;
  max?: number;
  preFetch?: number;
  promise?: boolean;
  dispose?: (value: any) => void;
  async?: boolean;
  primitive?: boolean;
  normalizer?: (value: any ) => void;
  resolvers?: RevolversArray;
}

/**
 * Main interface functions
 * @interface IMemoizee
 * @extends {Function}
 */
interface IMemoizee extends Function {
  delete: (...params: any[]) => void;
  clear: (...params: any[]) => void;
}

/**
 * Memoize function
 * @param {*} f
 * @param {IMemoizeeOptions} [options]
 * @returns {IMemoizee}
 */
declare function memoizee(f: (...params: any[]) => void, options?: IMemoizeeOptions): IMemoizee;

export = memoizee;
