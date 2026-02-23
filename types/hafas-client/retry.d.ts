import { Profile } from ".";

export interface RetryOpts {
    retries: number,
    factor: number,
    minTimeout: number
}

export function withRetrying(profile: Profile, retryOpts?: RetryOpts): Profile;