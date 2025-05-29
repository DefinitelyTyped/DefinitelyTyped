import * as CircuitBreaker from "opossum";
import { Registry } from "prom-client";
import OpossumMetrics from ".";

const circuit = new CircuitBreaker();
const registry = new Registry();

const opossumPrometheus: OpossumMetrics = new OpossumMetrics({
    circuits: [circuit],
    registry:registry,
    exposePerformanceMetrics: true,
   metricPrefix: "my_prefix_"
});

opossumPrometheus.add(circuit); // $ExpectType void
