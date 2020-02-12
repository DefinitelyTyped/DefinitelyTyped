export function broadcastUpdate(options: BroadcastUpdateOptions): Promise<void>;

export interface BroadcastUpdateOptions {
    cacheName: string;
    url: string;
    channel?: string;
}
