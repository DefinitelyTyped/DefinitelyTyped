/**
 * The type of the execution function. The function can be synchronous or asynchronous.
 */
type ExecutionFunction<ReturnType> = () => Promise<ReturnType> | ReturnType;

/**
 * The type of the condition function.
 * Returns TRUE if the condition is met. This will result in the polling loop to end.
 * RETURNS FALSE if the condition is not met. This will result in the polling loop to end immediately, only if the
 * maximum amount of attempts is reached. Polling will still end if other failure conditions are met.
 */
type ConditionFunction<InputType> = (inputObject: InputType) => boolean;

type errorCallback = (errorParam: ErrorParameters, options: Options) => never;

interface ErrorParameters {
    errorType: unknown;
    reject: unknown;
    nbAttempts: unknown;
    startedAt: unknown;
    capturedResults: unknown;
}

/**
 * Optional settings that modify the polling behaviour and control the failure modes.
 */
interface Options {
    /**
     * The Promise library to use. Defaults to global.Promise.
     */
    Promise?: PromiseLike<any> | undefined;

    /**
     * The error handler to use. Defaults to
     * let err = new Error(`condition not satisfied after ${Date.now() - startedAt}ms / nbAttempts: ${nbAttempts}`);
     * // note that you can attach properties to error if needed. For example:
     * err.duration = Date.now() - startedAt;
     * Object.assign(err, { nbAttempts, errorType, startedAt, capturedResults, options });
     * reject(err);
     */
    onError?: errorCallback | undefined;

    /**
     * If not falsy and > 0, until will capture the last X results and pass them to onError. Defaults to 0.
     */
    captureResults?: number | undefined;

    /**
     * The amount of time in MS to wait in between calling the execution function. Defaults to 0.
     */
    wait?: number | undefined;

    /**
     * The amount of time the execution function should be called. If this amount is exhausted, polling will fail.
     * Defaults to Infinity.
     */
    retries?: number | undefined;

    /**
     * The maximum duration in MS before rejecting. Defaults to Infinity.
     */
    duration?: number | undefined;
}

/**
 * Executes executionFunction until conditionFunction returns true or retries or timeout are reached.
 * @param executionFunction The function to execute. First successful result will be returned.
 * @param conditionFunction The function to check for a successful poll.
 * @param options The options that modify the polling behaviour.
 */
declare function pollUntil<ReturnType>(
    executionFunction: ExecutionFunction<ReturnType>,
    conditionFunction: ConditionFunction<ReturnType>,
    options?: Options,
): Promise<ReturnType>;

export default pollUntil;
