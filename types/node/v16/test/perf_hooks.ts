import {
    constants,
    createHistogram,
    EntryType,
    EventLoopUtilization,
    IntervalHistogram,
    monitorEventLoopDelay,
    NodeGCPerformanceDetail,
    performance as NodePerf,
    PerformanceEntry,
    PerformanceObserver,
    PerformanceObserverCallback,
    RecordableHistogram,
} from "node:perf_hooks";

// Test module import once, the rest use global
NodePerf.mark("start");
(() => {})();
performance.mark("end");

performance.mark("test", {
    detail: "something",
    startTime: 123,
});

performance.measure("test", {
    detail: "something",
    duration: 123,
    start: "startMark",
    end: "endMark",
});

performance.measure("test", {
    detail: "something",
    duration: 123,
    start: 123,
    end: 456,
});

performance.measure("name", "startMark", "endMark");
performance.measure("name", "startMark");
performance.measure("name");

const timeOrigin: number = performance.timeOrigin;

const performanceObserverCallback: PerformanceObserverCallback = (list, obs) => {
    const entries: PerformanceEntry[] = list.getEntries();
    const duration: number = entries[0].duration;
    const name: string = entries[0].name;
    const startTime: number = entries[0].startTime;
    const entryTypes: EntryType = entries[0].entryType;
    const detail: NodeGCPerformanceDetail = entries[0].detail as NodeGCPerformanceDetail;
    const kind: number | undefined = detail.kind;
    const flags: number | undefined = detail.flags;

    if (kind === constants.NODE_PERFORMANCE_GC_MAJOR) {
        if (flags === constants.NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY) {
        }
    }

    obs.disconnect();
};
const obs = new PerformanceObserver(performanceObserverCallback);
obs.observe({
    entryTypes: ["gc"],
    buffered: true,
});
obs.observe({
    type: "gc",
    buffered: true,
});

const monitor: IntervalHistogram = monitorEventLoopDelay({
    resolution: 42,
});

monitor.enable();
monitor.reset();
monitor.disable();
const perc: number = monitor.percentile(99);
const perc2: number | undefined = monitor.percentiles.get(42);

const min: number = monitor.min;
const max: number = monitor.max;
const mean: number = monitor.mean;
const stddev: number = monitor.stddev;
const exceeds: number = monitor.exceeds;

// eventLoopUtilization isn't available in DOM environment, so use the import rather than the global
const eventLoopUtilization1: EventLoopUtilization = NodePerf.eventLoopUtilization();
const eventLoopUtilization2: EventLoopUtilization = NodePerf.eventLoopUtilization(eventLoopUtilization1);
const eventLoopUtilization3: EventLoopUtilization = NodePerf.eventLoopUtilization(
    eventLoopUtilization2,
    eventLoopUtilization1,
);

let histogram: RecordableHistogram = createHistogram({
    figures: 123,
    min: 1,
    max: 2,
});
histogram = createHistogram();

histogram.record(123);
histogram.record(123n);
histogram.recordDelta();

performance.clearMarks();
performance.clearMarks("test");

performance.clearMeasures();
performance.clearMeasures("test");

performance.getEntries()[0]; // $ExpectType PerformanceEntry

performance.getEntriesByName("test")[0]; // $ExpectType PerformanceEntry
performance.getEntriesByName("test", "mark")[0]; // $ExpectType PerformanceEntry

performance.getEntriesByType("mark")[0]; // $ExpectType PerformanceEntry
