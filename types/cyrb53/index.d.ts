/**
 * A fast and simple 53-bit string hash function with decent collision resistance.
 * @see https://github.com/bryc/code/blob/master/jshash/experimental/cyrb53.js
 */
declare function cyrb53(str: string, seed?: number): number;
export = cyrb53;
