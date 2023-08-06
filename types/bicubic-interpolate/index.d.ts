// Type definitions for bicubic-interpolate 1.0.4
// Project: https://github.com/david-boles/bicubic-interpolate
// Definitions by: BrUSomania <https://github.com/BrUSomania>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 5.1.3

export type Interpolator = (x: number, y: number) => number;
export type MultiInterpolator = (x: number, y: number) => number[];

export interface Options {
    extrapolate?: boolean;
    scaleX?: number;
    scaleY?: number;
    translateX?: number;
    translateY?: number;
}

export function createInterpolator(values: number[][], options?: Options): Interpolator;
export function createGridInterpolator(values: number[][], options?: Options): Interpolator;
export function createMultiInterpolator(values: number[][][], options?: Options): MultiInterpolator;
export function createMultiGridInterpolator(values: number[][][], options?: Options): MultiInterpolator;
