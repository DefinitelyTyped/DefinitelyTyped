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
