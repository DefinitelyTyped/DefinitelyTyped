import { Transform } from "stream";
import circuitBreaker, { CircuitBreaker, CircuitBreakerOptions } from "opossum";

const _blank = () => {};
const async_blank = () => new Promise(resolve => null);

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

const healthCheck: Promise<any> = testWithOptions.healthCheck(async_blank, 8);
const shouldBeACircuitBreaker: CircuitBreaker = testWithOptions.fallback();
const shouldBeAPromiseGeneric: Promise<any> = testWithOptions.fire();

const shouldBeVoid = (): void => testWithOptions.enable();
const shouldBeVoid2 = (): void => testWithOptions.disable();
const shouldBeVoid3 = (): void => testWithOptions.close();
const shouldBeVoid4 = (): void => testWithOptions.open();
const shouldBeVoid5 = (): void => testWithOptions.clearCache();

const shouldBeSymbol: symbol = CircuitBreaker.name;
const shouldBeSymbol2: symbol = CircuitBreaker.group;
const shouldBeSymbol3: symbol = CircuitBreaker.pendingClose;
const shouldBeSymbol4: symbol = CircuitBreaker.closed;
const shouldBeSymbol5: symbol = CircuitBreaker.opened;
const shouldBeSymbol6: symbol = CircuitBreaker.halfOpen;
const shouldBeSymbol7: symbol = CircuitBreaker.hystrixStats;
const shouldBeSymbol8: symbol = CircuitBreaker.status;
const shouldBeSymbol9: symbol = CircuitBreaker.enabled;
const shouldBeSymbol10: symbol = CircuitBreaker.warmUp;
