// Type definitions for zipkin-context-cls 0.11
// Project: https://github.com/openzipkin/zipkin-js#readme
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Context, TraceId } from 'zipkin';

declare class CLSContext implements Context<any> {
    setContext(ctx: TraceId): void;
    getContext(): TraceId;
    scoped<V>(callback: () => V): V;
    letContext<V>(ctx: TraceId, callback: () => V): V;
    constructor(name: string)
}

export = CLSContext;
