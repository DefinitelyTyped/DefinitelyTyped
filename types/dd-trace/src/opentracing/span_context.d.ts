/**
 * SpanContext represents Span state that must propagate to descendant Spans
 * and across process boundaries.
 *
 * SpanContext is logically divided into two pieces: the user-level "Baggage"
 * (see setBaggageItem and getBaggageItem) that propagates across Span
 * boundaries and any Tracer-implementation-specific fields that are needed to
 * identify or otherwise contextualize the associated Span instance (e.g., a
 * <trace_id, span_id, sampled> tuple).
 */
declare class SpanContext {
    /**
     * Use to create references to parent spans.
     */
    constructor(props: SpanContextLike);

    public traceId: number;

    public spanId: number;

    public parentId?: number | null;

    public sampled?: boolean;

    public baggageItems?: { [key: string]: string };

    public trace?: {
        started: number[],
        finished: number[]
    }
}

interface SpanContextLike {
    traceId: number;
    spanId: number;
}

export = SpanContext;
