import { CacheWillUpdateCallback, WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { CacheableResponseConfig } from "./CacheableResponse";

export class CacheableResponsePlugin implements WorkboxPlugin {
    constructor(config?: CacheableResponseConfig);
    cacheWillUpdate: CacheWillUpdateCallback;
}
