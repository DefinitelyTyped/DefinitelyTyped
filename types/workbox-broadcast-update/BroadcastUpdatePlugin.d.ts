import { CacheDidUpdateCallback, WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { BroadcastCacheUpdateOptions } from "./BroadcastCacheUpdate";

export class BroadcastUpdatePlugin<P = void> implements WorkboxPlugin {
    constructor(options?: BroadcastCacheUpdateOptions<P>);
    cacheDidUpdate: CacheDidUpdateCallback;
}
