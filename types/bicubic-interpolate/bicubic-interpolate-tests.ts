import {
    createInterpolator,
    createGridInterpolator,
    createMultiInterpolator,
    createMultiGridInterpolator,
    type Options,
} from 'bicubic-interpolate';

const options: Options = {
    extrapolate: true,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
};

const grid: number[][] = [
    [1, 2, 4, 8, 16],//x=0
    [2, 4, 8, 16, 32],//x=1
    [3, 6, 12, 24, 48],//x=2
    [4, 8, 16, 32, 64],//x=3
    [5, 10, 20, 40, 80],//x=4
    [6, 12, 24, 48, 96],//x=5
];

const multiGrid: number[][][] = [
    [[1, 32], [2, 24], [4, 16], [8, 8]],//x=-1
    [[2, 16], [4, 12], [8, 8], [16, 4]],//x=0
    [[3, 8], [6, 6], [12, 4], [24, 2]],//x=1
    [[4, 4], [8, 3], [16, 2], [32, 1]]//x=2
];

const interpolator = createInterpolator(grid, options);
const intVal = interpolator(0.5, 0.5); // 4.0
// console.log("Interpolated value: ");
// console.log(intVal);

const gridInterpolator = createGridInterpolator(grid, options);
const gridIntVal = gridInterpolator(0.5, 0.5); // 4.0
// console.log("Grid interpolated value: ");
// console.log(gridIntVal);

const multiInterpolator = createMultiInterpolator(multiGrid, options);
const multiIntVal = multiInterpolator(0.5, 0.5); // [4.0, 13.0]
// console.log("Multi interpolated value: ");
// console.log(multiIntVal);

const multiGridInterpolator = createMultiGridInterpolator(multiGrid, options);
const multiGridIntVal = multiGridInterpolator(0.5, 0.5); // [4.0, 13.0]
// console.log("Multi grid interpolated value: ");
// console.log(multiGridIntVal);
