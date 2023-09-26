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
         * Maximum time running before throw in seconds.
         */
        timeout: number;

        /**
         * Maximum values for the parameters.
         * Default value: Array(parameters.length).fill(MAX_SAFE_INTEGER)
         */
        maxValues: number[];

        /**
         * Minimum values for the parameters.
         * Default value: Array(parameters.length).fill(MIN_SAFE_INTEGER)
         */
        minValues: number[];

        /**
         * Initial guesses for the parameters.
         * Default value: Array(parameters.length).fill(1)
         */
        initialValues: number[];

        /**
         * Weighting vector, if the length does not match with the number of data points, the vector is reconstructed with first value.
         */
        weights: number[];

        /**
         * The Levenberg-Marquardt lambda parameter.
         * Default value: 0
         */
        damping: number;

        /**
         * Factor to increase the damping (Levenberg-Marquardt parameter) when there is an improvement when updating parameters.
         */
        dampingStepUp: number;

        /**
         * factor to reduce the damping (Levenberg-Marquardt parameter) when there is not an improvement when updating parameters.
         */
        dampingStepDown: number;

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

        /**
         * If true the jacobian matrix is approximated by central differences otherwise by forward differences.
         */
        centralDifference: boolean;

        /**
         * The step size to approximate the jacobian matrix.
         */
        gradientDifference: number | number[];

        /**
         * The threshold to define an improvement through an update of parameters.
         */
        improvementThreshold: number;
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
