import {
    createGridInterpolator,
    createInterpolator,
    createMultiGridInterpolator,
    createMultiInterpolator,
    type Options,
} from "bicubic-interpolate";

// Initialize test data
const options: Options = {
    extrapolate: true,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
};

const grid: number[][] = [
    [1, 2, 4, 8, 16], // x=0
    [2, 4, 8, 16, 32], // x=1
    [3, 6, 12, 24, 48], // x=2
    [4, 8, 16, 32, 64], // x=3
    [5, 10, 20, 40, 80], // x=4
    [6, 12, 24, 48, 96], // x=5
];

const multiGrid: number[][][] = [
    [[1, 32], [2, 24], [4, 16], [8, 8]], // x=-1
    [[2, 16], [4, 12], [8, 8], [16, 4]], // x=0
    [[3, 8], [6, 6], [12, 4], [24, 2]], // x=1
    [[4, 4], [8, 3], [16, 2], [32, 1]], // x=2
];

// Tests for returned Interpolator functions and their return values
{
    // $ExpectType (x: number, y: number) => number
    const interpolator = createInterpolator(grid, options);
    // $ExpectType number
    interpolator(0.5, 0.5);
    // ts-expect-error
    interpolator(0.0, 0.0);
}

// Tests for returned GridInterpolator functions and their return values
{
    // $ExpectType (x: number, y: number) => number
    const gridInterpolator = createGridInterpolator(grid, options);
    // $ExpectType number
    gridInterpolator(0.5, 0.5);
    // ts-expect-error
    gridInterpolator(-1.0, -1.0);
}

// Tests for returned MultiInterpolator functions and their return values
{
    // $ExpectType (x: number, y: number) => number[]
    const multiInterpolator = createMultiInterpolator(multiGrid, options);
    // $ExpectType number[]
    multiInterpolator(0.5, 0.5);
    // ts-expect-error
    multiInterpolator(-1.0, -1.0);
}

// Tests for returned MultiGridInterpolator functions and their return values
{
    // $ExpectType (x: number, y: number) => number[]
    const multiGridInterpolator = createMultiGridInterpolator(multiGrid, options);
    // $ExpectType number[]
    multiGridInterpolator(0.5, 0.5);
    // ts-expect-error
    multiGridInterpolator(-1.0, -1.0);
}
