import { Context, TraceId } from "zipkin";

declare class CLSContext implements Context<any> {
    setContext(ctx: TraceId): void;
    getContext(): TraceId;
    scoped<V>(callback: () => V): V;
    letContext<V>(ctx: TraceId, callback: () => V): V;
    constructor(name: string, supportAsyncAwait?: boolean);
}

export = CLSContext;
