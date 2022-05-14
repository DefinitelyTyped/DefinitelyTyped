import retry, { RetryOptions, RetryControlOptions } from 'promise-fn-retry';

const requestFn = (test: string) => Promise.resolve(test);
const options: RetryOptions = {
    times: 1,
    initialDelayTime: 100,
    onRetry: (err: unknown, controlOptions: RetryControlOptions) => {},
    shouldRetry: (err: unknown) => true,
}

const res = retry(requestFn, options)