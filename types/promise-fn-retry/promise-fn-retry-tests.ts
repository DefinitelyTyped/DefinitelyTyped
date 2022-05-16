import retry, { RetryOptions, RetryControlOptions } from 'promise-fn-retry';

const requestFn = () => Promise.resolve();
const options: RetryOptions = {
    times: 1,
    initialDelayTime: 100,
    onRetry: (err: unknown, controlOptions: RetryControlOptions) => {},
    shouldRetry: (err: unknown) => true,
};

// $ExpectType Promise<string>
retry(requestFn, options);
