import { CachedResponseWillBeUsedCallback, WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

export class Plugin implements WorkboxPlugin {
    constructor();
    cachedResponseWillBeUsed: CachedResponseWillBeUsedCallback;
}
