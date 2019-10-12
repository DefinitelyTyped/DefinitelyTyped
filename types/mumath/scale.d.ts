/**
 * Get first scale out of a list of basic scales, aligned to the power. E. g.
 * step(.37, [1, 2, 5]) → .5 step(456, [1, 2]) → 1000
 * Similar to closest, but takes all possible powers of scales.
 */
declare function scale(value: number, list: number[]): number;

export = scale;
