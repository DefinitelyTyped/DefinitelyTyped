import { HafasClient, Profile } from ".";

export function withThrottling(profile: Profile, limit?: number, interval?: number): HafasClient