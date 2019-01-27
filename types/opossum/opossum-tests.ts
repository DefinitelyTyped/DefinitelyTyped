import * as fs from "fs";
import circuitBreaker, {
    CircuitBreaker,
    CircuitBreakerOptions,
    promisify,
    stats,
    Stats,
    Window
} from "opossum";

let readFile = promisify(fs.readFile);
stats.removeAllListeners();

let breaker: CircuitBreaker;
const callbackNoArgs = () => console.log("foo");

breaker = circuitBreaker(() => true, {
    timeout: false,
    maxFailures: 50,
    resetTimeout: 10,
    rollingCountTimeout: 500,
    rollingCountBuckets: 20,
    name: "test",
    group: "group",
    rollingPercentilesEnabled: true,
    capacity: 1,
    errorThresholdPercentage: 1,
    enabled: true,
    allowWarmUp: true,
    volumeThreshold: 1,
    cache: true
});

breaker.name; // $ExpectType string
breaker.group; // $ExpectType string
breaker.enabled; // $ExpectType boolean
breaker.pendingClose; // $ExpectType boolean
breaker.closed; // $ExpectType boolean
breaker.opened; // $ExpectType boolean
breaker.halfOpen; // $ExpectType boolean
breaker.warmUp; // $ExpectType boolean
breaker.volumeThreshold; // $ExpectType number
breaker.status.stats.latencyMean; // $ExpectType number
breaker.stats.latencyTimes; // $ExpectType number[]
breaker.hystrixStats.getHystrixStream().removeAllListeners();

breaker.clearCache(); // $ExpectType void
breaker.open(); // $ExpectType void
breaker.close(); // $ExpectType void
breaker.disable(); // $ExpectType void
breaker.enable(); // $ExpectType void

// The following are examples are from the libs README and official documentation
// https://nodeshift.github.io/opossum/index.html.

function asyncFunctionThatCouldFail(x: any, y: any) {
    return new Promise((resolve, reject) => {
        // Do something, maybe on the network or a disk
        resolve([x, y]);
    });
}

const options: CircuitBreakerOptions = {
    timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 30000 // After 30 seconds, try again.
};
breaker = circuitBreaker(asyncFunctionThatCouldFail, options);

breaker
    .fire("foo")
    .then(console.log)
    .catch(console.error);

breaker = circuitBreaker(asyncFunctionThatCouldFail, options);
// if asyncFunctionThatCouldFail starts to fail, firing the breaker
// will trigger our fallback function
breaker.fallback(() => "Sorry, out of service right now");
breaker.on("fallback", result => console.log(result));

breaker = circuitBreaker(callbackNoArgs, options);

breaker.fallback(callbackNoArgs);

breaker.on("success", result => console.log(result));
breaker.on("timeout", callbackNoArgs);
breaker.on("reject", callbackNoArgs);
breaker.on("open", callbackNoArgs);
breaker.on("halfOpen", callbackNoArgs);
breaker.on("close", callbackNoArgs);
breaker.on("fallback", data => console.log(data));

readFile = circuitBreaker.promisify(fs.readFile);
breaker = circuitBreaker(readFile, options);

breaker
    .fire("./package.json", "utf-8")
    .then(console.log)
    .catch(console.error);

breaker = circuitBreaker(fs.readFile, {});

breaker.hystrixStats.getHystrixStream().pipe(process.stdout);

// Creates a 1 second window consisting of ten time slices,
// each 100ms long.
const circuit = circuitBreaker(fs.readFile, {
    rollingCountBuckets: 10,
    rollingCountTimeout: 1000
});

// get the cumulative statistics for the last second
const theStats: Stats = breaker.status.stats;

// get the array of 10, 1 second time slices for the last second
const window: Window = breaker.status.window;
window[0].fires; // $ExpectType number
