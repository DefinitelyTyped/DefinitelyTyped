// Type definitions for ml-levenberg-marquardt 1.0.3
// Project: https://github.com/mljs/levenberg-marquardt#readme
// Definitions by: m93a <https://github.com/m93a>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace LM {
    /**
     * Function that receives an array of parameters and returns
     * a function with the independent variable as a parameter.
     */
    export type FittedFunction = (parameters: number[]) => (x: number) => number;

    /**
     * Coordinates of points to fit.
     */
    export interface Data {
        x: number[];
        y: number[];
    }

    export type Options = {
        damping: number,
        initialValues: number[],
        gradientDifference: number,
        maxIterations: number,
        errorTolerance: number
    };

    export type Result =  {
        iterations: number,
        parameterError: number,
        parameterValues: number[]
    };
}

declare function LM(d: LM.Data, fn: LM.FittedFunction, o: LM.Options): LM.Result;

export default LM;
