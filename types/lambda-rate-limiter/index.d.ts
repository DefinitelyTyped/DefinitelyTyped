// Type definitions for lambda-rate-limiter 3.0
// Project: https://github.com/blackflux/lambda-rate-limiter#readme
// Definitions by: Navneet Lal Gupta <https://github.com/navneetlal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function RateLimiter(options: RateLimiter.RateLimiterOptions): RateLimiter.ReturnType;

declare namespace RateLimiter {
    interface RateLimiterOptions {
        uniqueTokenPerInterval?: number;
        interval?: number;
    }
    interface ReturnType {
        check: (limit: number, token: string) => Promise<number>;
    }
    function check(limit: number, token: string): Promise<number>;
}

export = RateLimiter;
