import { Profile } from ".";

/**
 * Use {@link Profile} opt-in for throttling requests to the endpoint.
 * @param profile - The base {@link Profile}
 * @param [limit=5] - The maximum number of calls within an {@link interval}.
 * @param [interval=1000] - The timespan for {@link limit} in milliseconds.
 */
export function withThrottling(profile: Profile, limit?: number, interval?: number): Profile;
