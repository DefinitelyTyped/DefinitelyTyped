export function broadcastUpdate(options): Promise<void>;

export interface BroadcastUpdateOptions {
    cacheName: string;
    url: string;
    channel?: string;
}
