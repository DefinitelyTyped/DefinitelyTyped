// Type definitions for ml-levenberg-marquardt 1.0
// Project: https://github.com/mljs/levenberg-marquardt#readme
// Definitions by: m93a <https://github.com/m93a>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        /**
         * The Levenberg-Marquardt lambda parameter.
         * Default value: 0
         */
        damping: number;

        /**
         * Initial guesses for the parameters.
         * Default value: Array(parameters.lengh).fill(1)
         */
        initialValues: number[];

        /**
         * Adjustment for decrease the damping parameter.
         * Default value: 10e-2
         */
        gradientDifference: number;

        /**
         * The maximum number of iterations before halting.
         * Default value: 100
         */
        maxIterations: number;

        /**
         * Minimum uncertainty allowed for each point.
         * Default value: 10e-3
         */
        errorTolerance: number;
    }

    interface Result {
        iterations: number;
        parameterError: number;
        parameterValues: number[];
    }
}

/** Implementation of the Levenberg-Marquardt curve fitting method. */
declare function LM(d: LM.Data, fn: LM.FittedFunction, o?: Partial<LM.Options>): LM.Result;

export = LM;
