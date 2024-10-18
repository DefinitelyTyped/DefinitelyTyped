export interface StreamingEventStream<Events> extends NodeJS.ReadableStream {
    on(event: "data", listener: (event: Events) => void): this;
    on(event: string, listener: Function): this;
}

export type EventStream<Events> = StreamingEventStream<Events> | Events[];
