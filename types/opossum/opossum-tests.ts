/// <reference types="node"/>
import { EventEmitter } from "node:events";
import * as fs from "node:fs";
import { promisify } from "node:util";

import * as CircuitBreaker from "opossum";

let breaker: CircuitBreaker;
const callbackNoArgs = async () => console.log("foo");

CircuitBreaker.isOurError(new Error()); // $ExpectType boolean

CircuitBreaker.newStatus({}); // $ExpectType Status
CircuitBreaker.newStatus({ rollingCountBuckets: 20 }); // $ExpectType Status
CircuitBreaker.newStatus({ rollingCountTimeout: 500 }); // $ExpectType Status
CircuitBreaker.newStatus({ rollingPercentilesEnabled: true }); // $ExpectType Status
CircuitBreaker.newStatus({ enableSnapshots: true }); // $ExpectType Status
CircuitBreaker.newStatus({ rotateBucketController: new EventEmitter() }); // $ExpectType Status

breaker = new CircuitBreaker(async () => true, {});
breaker = new CircuitBreaker(async () => true, { status: CircuitBreaker.newStatus({}) });
breaker = new CircuitBreaker(async () => true, { timeout: 1000 });
breaker = new CircuitBreaker(async () => true, { maxFailures: 50 });
breaker = new CircuitBreaker(async () => true, { resetTimeout: 10 });
breaker = new CircuitBreaker(async () => true, { rollingCountTimeout: 500 });
breaker = new CircuitBreaker(async () => true, { rollingCountBuckets: 20 });
breaker = new CircuitBreaker(async () => true, { name: "test" });
breaker = new CircuitBreaker(async () => true, { group: "group" });
breaker = new CircuitBreaker(async () => true, { rollingPercentilesEnabled: true });
breaker = new CircuitBreaker(async () => true, { capacity: 1 });
breaker = new CircuitBreaker(async () => true, { errorThresholdPercentage: 1 });
breaker = new CircuitBreaker(async () => true, { enabled: true });
breaker = new CircuitBreaker(async () => true, { allowWarmUp: true });
breaker = new CircuitBreaker(async () => true, { volumeThreshold: 1 });
breaker = new CircuitBreaker(async () => true, {
    errorFilter: (err) => {
        err; // $ExpectType any
        return true;
    },
});
breaker = new CircuitBreaker(async () => true, { cache: true });
breaker = new CircuitBreaker(async () => true, { cacheTTL: 100 });
breaker = new CircuitBreaker(async () => true, {
    cacheGetKey: (...args) => JSON.stringify(args),
});
breaker = new CircuitBreaker(async () => true, {
    cacheTransport: {
        get: (key) => key,
        set: (key, value, ttl) => {},
        flush: () => {},
    },
});
breaker = new CircuitBreaker(async () => true, { abortController: new AbortController() });
breaker = new CircuitBreaker(async () => true, { enableSnapshots: true });
breaker = new CircuitBreaker(async () => true, { rotateBucketController: new EventEmitter() });

breaker.name; // $ExpectType string
breaker.group; // $ExpectType string
breaker.enabled; // $ExpectType boolean
breaker.pendingClose; // $ExpectType boolean
breaker.closed; // $ExpectType boolean
breaker.opened; // $ExpectType boolean
breaker.halfOpen; // $ExpectType boolean
breaker.warmUp; // $ExpectType boolean
breaker.isShutdown; // $ExpectType boolean
breaker.volumeThreshold; // $ExpectType number
breaker.status; // $ExpectType Status
breaker.status.stats; // $ExpectType Stats
breaker.status.stats.latencyMean; // $ExpectType number
breaker.status.stats.failures; // $ExpectType number
breaker.status.stats.fallbacks; // $ExpectType number
breaker.status.stats.successes; // $ExpectType number
breaker.status.stats.rejects; // $ExpectType number
breaker.status.stats.fires; // $ExpectType number
breaker.status.stats.timeouts; // $ExpectType number
breaker.status.stats.cacheHits; // $ExpectType number
breaker.status.stats.cacheMisses; // $ExpectType number
breaker.status.stats.semaphoreRejections; // $ExpectType number
breaker.status.stats.percentiles; // $ExpectType { [percentile: number]: number }
breaker.status.stats.latencyTimes; // $ExpectType number[]
breaker.status.stats.latencyMean; // $ExpectType number
breaker.stats; // $ExpectType Stats
breaker.stats.latencyMean; // $ExpectType number
breaker.stats.failures; // $ExpectType number
breaker.stats.fallbacks; // $ExpectType number
breaker.stats.successes; // $ExpectType number
breaker.stats.rejects; // $ExpectType number
breaker.stats.fires; // $ExpectType number
breaker.stats.timeouts; // $ExpectType number
breaker.stats.cacheHits; // $ExpectType number
breaker.stats.cacheMisses; // $ExpectType number
breaker.stats.semaphoreRejections; // $ExpectType number
breaker.stats.percentiles; // $ExpectType { [percentile: number]: number }
breaker.stats.latencyTimes; // $ExpectType number[]
breaker.stats.latencyMean; // $ExpectType number

// @ts-expect-error
breaker.healthCheck();
breaker.healthCheck(async () => {}); // ExpectType void
// @ts-expect-error
breaker.healthCheck(async () => {}, "300");
breaker.healthCheck(async () => {}, 300); // ExpectType void

breaker.clearCache(); // $ExpectType void
breaker.open(); // $ExpectType void
breaker.close(); // $ExpectType void
breaker.disable(); // $ExpectType void
breaker.enable(); // $ExpectType void
breaker.shutdown(); // $ExpectType void
breaker.toJSON(); // $ExpectType { state: State; status: Stats; }

// Check the generic types pass down correctly from constructor to `fire` and events.
const action = async (foo: string, bar: number) => {
    return foo ? bar : bar * 2;
};
const typedBreaker = new CircuitBreaker(action);
// @ts-expect-error
typedBreaker.fire(5, "hello");
typedBreaker.fire("hello world", 42); // $ExpectType Promise<number>
typedBreaker.on("success", (result, latencyMs) => {
    result; // $ExpectType number
    latencyMs; // $ExpectType number
});
typedBreaker.on("fire", ([foo, bar]) => {
    foo; // $ExpectType string
    bar; // $ExpectType number
});

// The following are examples are from the libs README and official documentation
// https://nodeshift.github.io/opossum/index.html.

function asyncFunctionThatCouldFail(x: any, y: any) {
    return new Promise((resolve, reject) => {
        // Do something, maybe on the network or a disk
        resolve([x, y]);
    });
}

const options: CircuitBreaker.Options = {
    timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 30000, // After 30 seconds, try again.
};
options.enableSnapshots; // $ExpectType boolean | undefined
options.rotateBucketController; // $ExpectType EventEmitter<DefaultEventMap> | undefined
breaker = new CircuitBreaker(asyncFunctionThatCouldFail, options);

breaker
    .fire("foo")
    .then(console.log)
    .catch(console.error);

breaker = new CircuitBreaker(asyncFunctionThatCouldFail, options);
// if asyncFunctionThatCouldFail starts to fail, firing the breaker
// will trigger our fallback function
breaker.fallback(() => "Sorry, out of service right now");
breaker.on("fallback", result => console.log(result));

breaker = new CircuitBreaker(callbackNoArgs, options);

breaker.fallback(callbackNoArgs);

breaker.on("success", result => console.log(result));
breaker.on("timeout", callbackNoArgs);
breaker.on("reject", callbackNoArgs);
breaker.on("open", callbackNoArgs);
breaker.on("halfOpen", callbackNoArgs);
breaker.on("close", callbackNoArgs);
breaker.on("fallback", data => console.log(data));

const readFile = promisify(fs.readFile);
breaker = new CircuitBreaker(readFile, options);

breaker
    .fire("./package.json", "utf-8")
    .then(console.log)
    .catch(console.error);

breaker = new CircuitBreaker(readFile, {});

// Creates a 1 second window consisting of ten time slices,
// each 100ms long.
const circuit = new CircuitBreaker(readFile, {
    rollingCountBuckets: 10,
    rollingCountTimeout: 1000,
});

// get the cumulative statistics for the last second
const theStats: CircuitBreaker.Stats = breaker.status.stats;

// get the array of 10, 1 second time slices for the last second
const window: CircuitBreaker.Window = breaker.status.window;
window[0].fires; // $ExpectType number

// you can deactivate timeout
const noTimeoutOptions: CircuitBreaker.Options = {
    timeout: false, // false value deactivate timeout
};

// you can call with a provided this arg
const context = { test: "test" as const };
async function proxyFn(this: typeof context, ...args: number[]) {
    return {
        args,
        thisArg: this.test,
    };
}
const args: number[] = [1, 2, 3];
const callBreaker = new CircuitBreaker(proxyFn, options);
callBreaker.call(context, ...args).then((result) => {
    result.args; // $ExpectType number[]
    result.thisArg; // $ExpectType "test"
});
