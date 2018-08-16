import { Tracer } from 'opentracing';

/**
 * Tracer is the entry-point between the instrumentation API and the tracing
 * implementation.
 */
declare class DatadogTracer extends Tracer {

}

export = DatadogTracer;
