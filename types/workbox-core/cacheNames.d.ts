export interface CacheNames {
    readonly googleAnalytics: string;
    readonly precache: string;
    readonly prefix: string;
    readonly runtime: string;
    readonly suffix: string;
}

/**
 * Get the current cache names and prefix/suffix used by Workbox.
 */
export const cacheNames: CacheNames;
