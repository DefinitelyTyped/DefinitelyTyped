import retry, { RetryControlOptions, RetryOptions } from "promise-fn-retry";

const testString = "testString";
const requestFn = () => Promise.resolve(testString);
const options: RetryOptions = {
    times: 1,
    initialDelayTime: 100,
    onRetry: (err: unknown, controlOptions: RetryControlOptions) => {
        // $ExpectType number | undefined
        controlOptions.times;
        // $ExpectType number | undefined
        controlOptions.initialDelayTime;
        // $ExpectType ((err: unknown, optionsParsed: RetryControlOptions) => void) | null | undefined
        controlOptions.onRetry;
        // $ExpectType ((err: unknown) => boolean) | null | undefined
        controlOptions.shouldRetry;
        // $ExpectType number
        controlOptions.retained;
        // $ExpectType number | null
        controlOptions.currentDelay;
    },
    shouldRetry: (err: unknown) => true,
};

// $ExpectType Promise<string>
retry(requestFn, options);
