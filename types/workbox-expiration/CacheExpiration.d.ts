export class CacheExpiration {
    constructor(cacheName: string, config?: CacheExpirationConfig);
    delete(): Promise<void>;
    expireEntries(): Promise<void>;
    isURLExpired(url: string): Promise<boolean>;
    updateTimestamp(url: string): Promise<void>;
}

export interface CacheExpirationConfig {
    maxAgeSeconds?: number;
    maxEntries?: number;
}
