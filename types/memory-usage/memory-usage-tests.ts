import memoryUsage = require("memory-usage");

// test type exports
type Options = memoryUsage.Options;
type Sample = memoryUsage.Sample;
type GCType = memoryUsage.GCType;

memoryUsage(); // $ExpectType ReadableStream
memoryUsage(2000); // $ExpectType ReadableStream
memoryUsage({ freq: 2000 }); // $ExpectType ReadableStream
memoryUsage({ gc: true }); // $ExpectType ReadableStream
memoryUsage({ ts: true }); // $ExpectType ReadableStream

declare const sample: memoryUsage.Sample;

sample.rss; // $ExpectType number
sample.heapTotal; // $ExpectType number
sample.heapUsed; // $ExpectType number
sample.external; // $ExpectType number
sample.arrayBuffers; // $ExpectType number
sample.ts; // $ExpectType number | undefined
const gc: memoryUsage.GCType | null | undefined = sample.gc;
// @ts-expect-error
const gc1: memoryUsage.GCType | undefined = sample.gc;
// @ts-expect-error
const gc2: memoryUsage.GCType | null = sample.gc;
// @ts-expect-error
const gc3: null | undefined = sample.gc;
