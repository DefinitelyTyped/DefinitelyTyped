import { Readable } from "node:stream";
import * as v8 from "node:v8";

const heapStats = v8.getHeapStatistics();
const numOfDetached = heapStats.number_of_detached_contexts;
const heapSpaceStats = v8.getHeapSpaceStatistics();

const zapsGarbage: number = heapStats.does_zap_garbage;

v8.setFlagsFromString("--collect_maps");

const stream: Readable = v8.getHeapSnapshot();
const fileName = v8.writeHeapSnapshot("file");

v8.takeCoverage();
v8.stopCoverage();

{
    const profiler = new v8.GCProfiler();
    profiler.start();
    setTimeout(() => {
        console.log(profiler.stop());
    }, 1000);
}

const disable = v8.promiseHooks.createHook({
    init: (promise, parent) => {},
    before: promise => {},
    after: promise => {},
    settled: promise => {},
});

const stopInit = v8.promiseHooks.onInit((promise, parent) => {});
const stopBefore = v8.promiseHooks.onBefore(promise => {});
const stopAfter = v8.promiseHooks.onAfter(promise => {});
const stopSettled = v8.promiseHooks.onSettled(promise => {});
