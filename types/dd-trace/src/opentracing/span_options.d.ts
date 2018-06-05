import Span = require('./span');
import Reference = require('./reference');
import SpanContext = require('./span_context');

interface SpanOptions {
    /**
     * a parent SpanContext (or Span, for convenience) that the newly-started
     * span will be the child of (per REFERENCE_CHILD_OF). If specified,
     * `references` must be unspecified.
     */
    childOf?: Span | SpanContext;

    /**
     * an array of Reference instances, each pointing to a causal parent
     * SpanContext. If specified, `fields.childOf` must be unspecified.
     */
    references?: Reference[];

    /**
     * set of key-value pairs which will be set as tags on the newly created
     * Span. Ownership of the object is passed to the created span for
     * efficiency reasons (the caller should not modify this object after
     * calling startSpan).
     */
    tags?: {
        [key: string]: any;
    };

    /**
     * a manually specified start time for the created Span object. The time
     * should be specified in milliseconds as Unix timestamp. Decimal value are
     * supported to represent time values with sub-millisecond accuracy.
     */
    startTime?: number;
}

export = SpanOptions;
