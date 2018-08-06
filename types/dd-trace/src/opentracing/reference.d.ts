import Span = require('./span');
import SpanContext = require('./span_context');

declare class Reference {
    /**
     * @return The Reference type (e.g., REFERENCE_CHILD_OF or
     *         REFERENCE_FOLLOWS_FROM).
     */
    type(): string;

    /**
     * @return The SpanContext being referred to (e.g., the
     *         parent in a REFERENCE_CHILD_OF Reference).
     */
    referencedContext(): SpanContext;

    /**
     * Initialize a new Reference instance.
     *
     * @param type - the Reference type constant (e.g.,
     *        REFERENCE_CHILD_OF or REFERENCE_FOLLOWS_FROM).
     * @param referencedContext - the SpanContext being referred
     *        to. As a convenience, a Span instance may be passed in instead
     *        (in which case its .context() is used here).
     */
    constructor(type: string, referencedContext: SpanContext | Span);
}

export = Reference;