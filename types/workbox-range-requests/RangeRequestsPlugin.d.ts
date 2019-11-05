import { CachedResponseWillBeUsedCallback, WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

export class RangeRequestsPlugin implements WorkboxPlugin {
    constructor();
    cachedResponseWillBeUsed: CachedResponseWillBeUsedCallback;
}
