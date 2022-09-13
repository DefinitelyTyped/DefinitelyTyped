import * as fs from 'fs';
import * as CircuitBreaker from 'opossum';
import { promisify } from 'util';

let breaker: CircuitBreaker;
const callbackNoArgs = async () => console.log('foo');

CircuitBreaker.isOurError(new Error()); // $ExpectType boolean

breaker = new CircuitBreaker(async () => true, {
    timeout: 1000,
    maxFailures: 50,
    resetTimeout: 10,
    rollingCountTimeout: 500,
    rollingCountBuckets: 20,
    name: 'test',
    group: 'group',
    rollingPercentilesEnabled: true,
    capacity: 1,
    errorThresholdPercentage: 1,
    enabled: true,
    allowWarmUp: true,
    volumeThreshold: 1,
    cache: true,
    errorFilter: (err) => {
        err; // $ExpectType any
        return true;
    }
});

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
breaker.status.stats.latencyMean; // $ExpectType number
breaker.stats.latencyTimes; // $ExpectType number[]

breaker.clearCache(); // $ExpectType void
breaker.open(); // $ExpectType void
breaker.close(); // $ExpectType void
breaker.disable(); // $ExpectType void
breaker.enable(); // $ExpectType void
breaker.shutdown(); // $ExpectType void

// Check the generic types pass down correctly from constructor to `fire` and events.
const action = async (foo: string, bar: number) => {
    return foo ? bar : bar * 2;
};
const typedBreaker = new CircuitBreaker(action);
// @ts-expect-error
typedBreaker.fire(5, 'hello');
typedBreaker.fire('hello world', 42); // $ExpectType Promise<number>
typedBreaker.on('success', (result, latencyMs) => {
    result; // $ExpectType number
    latencyMs; // $ExpectType number
});
typedBreaker.on('fire', ([foo, bar]) => {
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
breaker = new CircuitBreaker(asyncFunctionThatCouldFail, options);

breaker
    .fire('foo')
    .then(console.log)
    .catch(console.error);

breaker = new CircuitBreaker(asyncFunctionThatCouldFail, options);
// if asyncFunctionThatCouldFail starts to fail, firing the breaker
// will trigger our fallback function
breaker.fallback(() => 'Sorry, out of service right now');
breaker.on('fallback', result => console.log(result));

breaker = new CircuitBreaker(callbackNoArgs, options);

breaker.fallback(callbackNoArgs);

breaker.on('success', result => console.log(result));
breaker.on('timeout', callbackNoArgs);
breaker.on('reject', callbackNoArgs);
breaker.on('open', callbackNoArgs);
breaker.on('halfOpen', callbackNoArgs);
breaker.on('close', callbackNoArgs);
breaker.on('fallback', data => console.log(data));

const readFile = promisify(fs.readFile);
breaker = new CircuitBreaker(readFile, options);

breaker
    .fire('./package.json', 'utf-8')
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
const context = {test: 'test' as const};
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
