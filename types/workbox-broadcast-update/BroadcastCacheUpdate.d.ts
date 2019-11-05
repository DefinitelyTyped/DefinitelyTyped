import { CacheDidUpdateCallbackParam } from "workbox-core/types/WorkboxPlugin";

export class BroadcastCacheUpdate<P = void> {
    constructor(options?: BroadcastCacheUpdateOptions<P>);
    notifyIfUpdated(param: CacheDidUpdateCallbackParam): Promise<void>;
}

export interface BroadcastCacheUpdateOptions<P = void> {
    headersToCheck?: string[];
    generatePayload?: (param: CacheDidUpdateCallbackParam) => P;
}
