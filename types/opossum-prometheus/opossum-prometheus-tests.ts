import type * as CircuitBreaker from "opossum";
import OpossumMetrics from "opossum-prometheus";
import type { Registry } from "prom-client";

// $ExpectType OpossumMetrics
const opossumPrometheus: OpossumMetrics = new OpossumMetrics({
    circuits: [{} as CircuitBreaker],
    registry: {} as Registry,
    exposePerformanceMetrics: true,
    metricPrefix: "my_prefix_",
});

// $ExpectType void
opossumPrometheus.add({} as CircuitBreaker);
