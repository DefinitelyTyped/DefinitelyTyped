import { Transform } from "stream";
import circuitBreaker, { CircuitBreaker, CircuitBreakerOptions } from "opossum";

const _blank = () => {};

const testNoOptions: CircuitBreaker = circuitBreaker(_blank);

const options: CircuitBreakerOptions = {
    timeout: 1,
    maxFailures: 1,
    resetTimeout: 1,
    rollingCountTimeout: 1,
    rollingCountBuckets: 1,
    name: "testing",
    rollingPercentilesEnabled: true,
    capacity: 1,
    errorThresholdPercentage: 1,
    enabled: true,
    allowWarmUp: true
};

const testWithOptions: CircuitBreaker = circuitBreaker(_blank, options);
const shouldBeAPromise: Promise<any> = testWithOptions.promisify(_blank);
const shouldBeATransformStream: Transform = testWithOptions.stats();
