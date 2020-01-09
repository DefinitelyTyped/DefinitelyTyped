export class BroadcastCacheUpdate {
    constructor(options?: BroadcastCacheUpdateOptions);
    notifyIfUpdated(options: BroadcastCacheUpdate.NotifyIfUpdatedOptions): Promise<void>;
}

export namespace BroadcastCacheUpdate {
    interface NotifyIfUpdatedOptions {
        cacheName: string;
        newResponse: Response;
        oldResponse?: Response;
        url: string;
        event?: Event;
    }
}

export interface BroadcastCacheUpdateOptions {
    channelName?: string;
    deferNoticationTimeout?: number;
    headersToCheck?: string[];
}
