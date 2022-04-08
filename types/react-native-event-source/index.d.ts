// Type definitions for react-native-event-source 1.1
// Project: https://github.com/jordanbyron/react-native-event-source#readme
// Definitions by: Alexander Tartmin <https://github.com/Baskerville42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
