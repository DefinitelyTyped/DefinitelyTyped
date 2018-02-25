import { Options, RetryFunction, retry } from 'async-retry';

const o: Options = {
  retries: 1,
  factor: 2,
  minTimeout: 3,
  maxTimeout: 4,
  randomize: true,
  onRetry: (e: Error) => 42
};

retry(
  bail => 'hello',
  { retries: 3 }
);

retry(
  bail => Promise.resolve(42),
  { retries: 3 }
);
