export interface MessageEvent {
    data: string | null;
    type: string;
    lastEventId: string;
    origin: string;
}

export type ListenerCallback = (event: MessageEvent) => void;

declare class RNEventSource {
    constructor(url: string, options?: {});
    addEventListener(type: string, listener: ListenerCallback): any;
    removeAllListeners(): void;
    removeListener(type: string, listener: ListenerCallback): void;
    close(): void;
}

export default RNEventSource;
