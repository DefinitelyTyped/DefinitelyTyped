// Type definitions for rolling-rate-limiter 0.1
// Project: https://github.com/peterkhayes/rolling-rate-limiter
// Definitions by: Jonas Lochmann <https://github.com/l-jonas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = RollingRateLimiter;

declare function RollingRateLimiter(options: RollingRateLimiter.InMemoryOptions): RollingRateLimiter.SyncOrAsyncLimiter;
declare function RollingRateLimiter(options: RollingRateLimiter.WithRedisOptions): RollingRateLimiter.AsyncLimiter;

declare namespace RollingRateLimiter {
  interface GeneralOptions {
    interval: number;
    maxInInterval: number;
    minDifference?: number;
  }

  interface WithRedisOptions extends GeneralOptions {
    redis: CompatibleRedisClient;
    namespace?: string;
  }

  interface CompatibleRedisClient {
    multi: () => any;
  }

  type InMemoryOptions = GeneralOptions;

  type AsyncLimiterWithToken = (token: string, callback: AsyncLimiterCallback) => void;
  type AsyncLimiterWithoutToken = (callback: AsyncLimiterCallback) => void;
  type AsyncLimiterCallback = (err: any, timeLeft: number, actionsLeft: number) => void;
  type AsyncLimiter = AsyncLimiterWithToken & AsyncLimiterWithToken;

  type SyncLimiter = (token?: string) => number;

  type SyncOrAsyncLimiter = SyncLimiter & AsyncLimiter;
}
