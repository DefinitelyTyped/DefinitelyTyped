import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { CleanupResult } from "./types/CleanupResult";
import { InstallResult } from "./types/InstallResult";
import { PrecacheEntry } from "./types/PrecacheEntry";

export class PrecacheController {
    constructor(cacheName?: string);
    activate(): Promise<CleanupResult>;
    addToCacheList(entries: Array<string | PrecacheEntry>): void;
    getCacheKeyForURL(url: string): string;
    getCachedURLs(): string[];
    getURLsToCacheKeys(): Record<string, string>;
    install(options?: PrecacheController.InstallOptions): Promise<InstallResult>;
}

export namespace PrecacheController {
    interface InstallOptions {
        event?: FetchEvent;
        plugins?: WorkboxPlugin[];
    }
}
