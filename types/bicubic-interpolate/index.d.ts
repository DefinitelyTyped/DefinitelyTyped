// Type definitions for bicubic-interpolate 1.0
// Project: https://github.com/david-boles/bicubic-interpolate
// Definitions by: Bjarne Undheim Jr. <https://github.com/BrUSomania>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

export interface Options {
    extrapolate?: boolean | undefined;
    scaleX?: number | undefined;
    scaleY?: number | undefined;
    translateX?: number | undefined;
    translateY?: number | undefined;
}

export function createInterpolator(grid: number[][], options?: Options): (x: number, y: number) => number;
export function createGridInterpolator(grid: number[][], options?: Options): (x: number, y: number) => number;
export function createMultiInterpolator(grid: number[][][], options?: Options): (x: number, y: number) => number[];
export function createMultiGridInterpolator(grid: number[][][], options?: Options): (x: number, y: number) => number[];
