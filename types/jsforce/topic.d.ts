import { Streaming, StreamingMessage } from "./streaming";

export class Topic {
    constructor(streaming: Streaming, name: string);

    subscribe(listener: (streamingMessage: StreamingMessage) => void): any; // Faye Subscription
    unsubscribe(listener: (streamingMessage: StreamingMessage) => void): Topic;
}
