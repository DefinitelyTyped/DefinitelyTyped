import { Profile } from ".";

/**
 * Retry options.
 *
 * Further opts could be used. Check {@link https://github.com/sindresorhus/p-retry | p-retry} for more info.
 */
export interface RetryOpts {
    /**
     * The maximum amount of times to retry the operation.
     * @default 3
     */
    retries?: number;
    /**
     * The exponential factor to use.
     * @default 3
     */
    factor?: number;
    /**
     * The number of milliseconds before starting the first retry.
     * @default 5000
     */
    minTimeout?: number;
}

/**
 * Use {@link Profile} opt-in for retrying failed requests to the endpoint.
 * @param profile - The base {@link Profile}
 * @param retryOpts - The {@link RetryOpts}
 */
export function withRetrying(profile: Profile, retryOpts?: RetryOpts): Profile;
