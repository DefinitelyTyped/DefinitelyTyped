/**
 * Perform some operation over an array of numbers.
 */
declare function forEach(a: number[], stride: number, offset: number, count: number, fn: (a: number[], b: number[], arg: object) => number[], arg: object): number[];

export default forEach;
