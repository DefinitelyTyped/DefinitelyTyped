import * as timers from "node:timers";
import { promisify } from "node:util";

{
    const promises: typeof import("node:timers/promises") = timers.promises;
}

{
    // $ExpectType Immediate
    const immediate = timers.setImmediate(() => {});
    // $ExpectType boolean
    immediate.hasRef();
    // $ExpectType Immediate
    immediate.ref();
    // $ExpectType Immediate
    immediate.unref();

    timers.clearImmediate(immediate);
    immediate[Symbol.dispose]();
}

{
    // $ExpectType Timeout
    const interval = timers.setInterval(() => {}, 100);
    // $ExpectType Timeout
    interval.close();
    // $ExpectType boolean
    interval.hasRef();
    // $ExpectType Timeout
    interval.ref();
    // $ExpectType Timeout
    interval.refresh();
    // $ExpectType Timeout
    interval.unref();

    timers.clearInterval(interval);
    timers.clearInterval(interval[Symbol.toPrimitive]());
    interval[Symbol.dispose]();
}

{
    // $ExpectType Timeout
    const timeout = timers.setTimeout(() => {}, 100);
    // $ExpectType Timeout
    timeout.close();
    // $ExpectType boolean
    timeout.hasRef();
    // $ExpectType Timeout
    timeout.ref();
    // $ExpectType Timeout
    timeout.refresh();
    // $ExpectType Timeout
    timeout.unref();

    timers.clearTimeout(timeout);
    timers.clearTimeout(timeout[Symbol.toPrimitive]());
    timeout[Symbol.dispose]();
}

// Test custom promisifiers
{
    const setImmediate: typeof timers.promises.setImmediate = promisify(timers.setImmediate);
    const setTimeout: typeof timers.promises.setTimeout = promisify(timers.setTimeout);
    // @ts-expect-error setInterval is not promisifiable
    const setInterval: typeof timers.promises.setInterval = promisify(timers.setInterval);
}

// Allow single callback parameter of type `unknown` to be omitted from passed arguments
{
    // `NodeJS.*` is present to make sure we're not using `dom` types
    new Promise((resolve): NodeJS.Timeout => timers.setTimeout(resolve, 100));
    new Promise((resolve): NodeJS.Timeout => timers.setInterval(resolve, 100));
    new Promise((resolve): NodeJS.Immediate => timers.setImmediate(resolve));
    // @ts-expect-error single argument should not be optional if not of type `unknown`
    const timeout: NodeJS.Timeout = timers.setTimeout((s: string) => {}, 100);
}

// globals
{
    const setImmediate: typeof timers.setImmediate = globalThis.setImmediate;
    const setInterval: typeof timers.setInterval = globalThis.setInterval;
    const setTimeout: typeof timers.setTimeout = globalThis.setTimeout;
    const clearImmediate: typeof timers.clearImmediate = globalThis.clearImmediate;
    const clearInterval: typeof timers.clearInterval = globalThis.clearInterval;
    const clearTimeout: typeof timers.clearTimeout = globalThis.clearTimeout;

    queueMicrotask(() => {});
}
