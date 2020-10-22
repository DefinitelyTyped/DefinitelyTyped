import {
    CacheDidUpdateCallback,
    CachedResponseWillBeUsedCallback,
    WorkboxPlugin,
} from "workbox-core/types/WorkboxPlugin";

export class Plugin implements WorkboxPlugin {
    constructor(config?: ExpirationPluginConfig);
    cacheDidUpdate: CacheDidUpdateCallback;
    cachedResponseWillBeUsed: CachedResponseWillBeUsedCallback;
    deleteCacheAndMetadata(): Promise<void>;
}

export interface ExpirationPluginConfig {
    maxAgeSeconds?: number;
    maxEntries?: number;
    purgeOnQuotaError?: boolean;
}
