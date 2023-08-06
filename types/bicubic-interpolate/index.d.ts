declare module 'bicubic-interpolate' {
    type Interpolator = (x: number, y: number) => number;
    type MultiInterpolator = (x: number, y: number) => number[];

    interface Options {
        extrapolate?: boolean;
        scaleX?: number;
        scaleY?: number;
        translateX?: number;
        translateY?: number;
    }
    
    function createInterpolator(values: number[][], options?: Options): Interpolator;
    function createGridInterpolator(values: number[][], options?: Options): Interpolator;
    function createMultiInterpolator(values: number[][][], options?: Options): MultiInterpolator;
    function createMultiGridInterpolator(values: number[][][], options?: Options): MultiInterpolator;

    export {
        createInterpolator,
        createGridInterpolator,
        createMultiInterpolator,
        createMultiGridInterpolator,
        Options,
    };
}
