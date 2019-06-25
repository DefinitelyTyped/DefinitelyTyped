import * as jaegerClient from "jaeger-client";
import * as promClient from "prom-client";

const tracingConfig: jaegerClient.TracingConfig = {};
const tracingOptions: jaegerClient.TracingOptions = {};

jaegerClient.initTracer(tracingConfig, tracingOptions);
jaegerClient.initTracerFromEnv(tracingConfig, tracingOptions);

const metrics = new jaegerClient.PrometheusMetricsFactory(promClient, "foo");
