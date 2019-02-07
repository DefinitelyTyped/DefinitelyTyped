import { SpanContext } from 'opentracing';

declare class DatadogSpanContext extends SpanContext {
    /**
     * Used to create references to parent spans.
     * See: https://github.com/DataDog/dd-trace-js/blob/master/src/opentracing/tracer.js#L99
     */
    constructor(props: SpanContextLike);
}

interface SpanContextLike {
    traceId: number;

    spanId: number;

    parentId?: number | null;

    sampled?: boolean;

    baggageItems?: { [key: string]: string };

    trace?: {
        started: number[],
        finished: number[]
    };
}

export = DatadogSpanContext;
