// Type definitions for ml-levenberg-marquardt 1.0
// Project: https://github.com/mljs/levenberg-marquardt#readme
// Definitions by: m93a <https://github.com/m93a>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace LM {
    /**
     * Function that receives an array of parameters and returns
     * a function with the independent variable as a parameter.
     */
    type FittedFunction = (parameters: number[]) => (x: number) => number;

    /**
     * Coordinates of points to fit.
     */
    interface Data {
        x: number[];
        y: number[];
    }

    interface Options {
        damping: number;
        initialValues: number[];
        gradientDifference: number;
        maxIterations: number;
        errorTolerance: number;
        maxValue: number;
        minValue: number;
    }

    interface Result {
        iterations: number;
        parameterError: number;
        parameterValues: number[];
    }
}

declare function LM(d: LM.Data, fn: LM.FittedFunction, o?: Partial<LM.Options>): LM.Result;

export default LM;
