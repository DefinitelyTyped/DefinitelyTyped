import * as CircuitBreaker from "opossum";
import OpossumMetrics from "opossum-prometheus";
import { Registry } from "prom-client";

const circuit = new CircuitBreaker();
const registry = new Registry();

const opossumPrometheus: OpossumMetrics = new OpossumMetrics({
    circuits: [circuit],
    registry: registry,
    exposePerformanceMetrics: true,
    metricPrefix: "my_prefix_"
});

opossumPrometheus.add(circuit);
