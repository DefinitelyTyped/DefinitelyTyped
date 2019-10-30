export interface CacheNames {
    readonly googleAnalytics: string;
    readonly precache: string;
    readonly prefix: string;
    readonly runtime: string;
    readonly suffix: string;
}

/**
 * Get the current cache names and prefix/suffix used by Workbox.
 * 
 * `cacheNames.precache` is used for precached assets, 
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to store 
 * `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 */
export const cacheNames: CacheNames;
