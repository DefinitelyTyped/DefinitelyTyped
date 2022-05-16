// Type definitions for promise-fn-retry 1.0
// Project: https://github.com/felippemauricio/promise-fn-retry
// Definitions by: Jonathan Chang <https://github.com/Jono-Chang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface RetryOptions {
  times?: number;
  initialDelayTime?: number;
  onRetry?: (err: unknown, optionsParsed: RetryControlOptions) => void;
  shouldRetry?: (err: unknown) => boolean;
}

export interface RetryControlOptions extends RetryOptions {
  retained: number;
  currentDelay?: number;
}

declare function retry<T>(
  requestFn: () => Promise<T>,
  options?: RetryOptions,
): Promise<T>;

export default retry;
