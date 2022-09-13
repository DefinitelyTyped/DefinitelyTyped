export interface CacheNameDetails {
    googleAnalytics: string;
    precache: string;
    prefix: string;
    runtime: string;
    suffix: string;
}

export function setCacheNameDetails(details: Partial<CacheNameDetails>): void;
