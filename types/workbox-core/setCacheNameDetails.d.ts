export interface CacheNameDetails {
    /**
     * The cache name to use for  `workbox-google-analytics` caching.
     */
    googleAnalytics: string;
    /**
     * The cache name to use for precache caching.
     */
    precache: string;
    /**
     * The string to add to the beginning of the precache and runtime cache names.
     */
    prefix: string;
    /**
     * The cache name to use for runtime caching.
     */
    runtime: string;
    /**
     * The string to add to the end of the precache and runtime cache names.
     */
    suffix: string;
}

/**
 * Modifies the default cache names used by the Workbox packages. Cache names
 * are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param details
 */
export function setCacheNameDetails(details: Partial<CacheNameDetails>): void;
