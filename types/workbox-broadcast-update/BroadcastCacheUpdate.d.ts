export class BroadcastCacheUpdate {
    constructor(options?: BroadcastCacheUpdateOptions);
    notifyIfUpdated(options: BroadcastCacheUpdate.NotifyIfUpdatedOptions): Promise<void>;
}

export namespace BroadcastCacheUpdate {
    interface NotifyIfUpdatedOptions {
        cacheName: string;
        newResponse: Response;
        oldResponse?: Response | undefined;
        url: string;
        event?: Event | undefined;
    }
}

export interface BroadcastCacheUpdateOptions {
    channelName?: string | undefined;
    deferNoticationTimeout?: number | undefined;
    headersToCheck?: string[] | undefined;
}
