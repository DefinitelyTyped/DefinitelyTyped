import {
    CacheDidUpdateCallback,
    WorkboxPlugin,
} from "workbox-core/types/WorkboxPlugin";

import { BroadcastCacheUpdateOptions } from "./BroadcastCacheUpdate";

export class Plugin implements WorkboxPlugin {
    constructor(options?: BroadcastCacheUpdateOptions);
    cacheDidUpdate: CacheDidUpdateCallback;
}
