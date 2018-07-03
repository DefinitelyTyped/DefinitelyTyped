import { Options, RetryFunction } from 'async-retry';
import retry = require("async-retry");

const o: Options = {
  retries: 1,
  factor: 2,
  minTimeout: 3,
  maxTimeout: 4,
  randomize: true,
  onRetry: (e: Error) => 42
};

const hello: Promise<string> = retry(
  bail => 'hello',
  { retries: 3 }
);

const answer: Promise<number> = retry(
  bail => Promise.resolve(42),
  { retries: 3 }
);
