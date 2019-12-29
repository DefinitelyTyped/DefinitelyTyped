import * as jaegerClient from "jaeger-client";
import * as promClient from "prom-client";
import * as opentracing from "opentracing";

const tracingConfig: jaegerClient.TracingConfig = {};
const tracingOptions: jaegerClient.TracingOptions = {};

const tracer = jaegerClient.initTracer(tracingConfig, tracingOptions);
jaegerClient.initTracerFromEnv(tracingConfig, tracingOptions);

const metrics = new jaegerClient.PrometheusMetricsFactory(promClient, "foo");

const textCodec = new jaegerClient.TextMapCodec({
    contextKey: 'trace-id',
    baggagePrefix: 'baggage-',
    urlEncoding: false,
});
tracer.registerInjector(opentracing.FORMAT_TEXT_MAP, textCodec);
tracer.registerExtractor(opentracing.FORMAT_TEXT_MAP, textCodec);

const zipkinB3TextMapCodec = new jaegerClient.ZipkinB3TextMapCodec({
    baggagePrefix: 'baggage-',
    urlEncoding: false,
});
tracer.registerInjector(opentracing.FORMAT_HTTP_HEADERS, zipkinB3TextMapCodec);
tracer.registerExtractor(opentracing.FORMAT_HTTP_HEADERS, zipkinB3TextMapCodec);
