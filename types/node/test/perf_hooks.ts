import {
    performance as NodePerf,
    monitorEventLoopDelay,
    PerformanceObserverCallback,
    PerformanceObserver,
    PerformanceEntry,
    EntryType,
    constants,
    EventLoopUtilization,
    IntervalHistogram,
    RecordableHistogram,
    createHistogram,
    NodeGCPerformanceDetail,
    PerformanceMeasure,
    PerformanceMark,
} from 'node:perf_hooks';

// Test module import once, the rest use global
const startMark: PerformanceMark = NodePerf.mark('start');
(() => {})();
performance.mark('end');

performance.mark('test', {
    detail: 'something',
    startTime: 123,
});

performance.measure('test', {
    detail: 'something',
    duration: 123,
    start: startMark.name,
    end: 'endMark',
});

performance.measure('test', {
    detail: 'something',
    duration: 123,
    start: 123,
    end: 456,
});

const measure1: PerformanceMeasure = performance.measure('name', startMark.name, 'endMark');
measure1.toJSON();
performance.measure('name', startMark.name);
performance.measure('name');

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
    entryTypes: ['gc'],
    buffered: true,
});
obs.observe({
    type: 'gc',
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

const eventLoopUtilization1: EventLoopUtilization = performance.eventLoopUtilization();
const eventLoopUtilization2: EventLoopUtilization = performance.eventLoopUtilization(eventLoopUtilization1);
const eventLoopUtilization3: EventLoopUtilization = performance.eventLoopUtilization(eventLoopUtilization2, eventLoopUtilization1);

let histogram: RecordableHistogram = createHistogram({
    figures: 123,
    min: 1,
    max: 2,
});
histogram = createHistogram();

histogram.record(123);
histogram.record(123n);
histogram.recordDelta();

// intelligence is working
declare let histo1: RecordableHistogram;
declare let histo2: RecordableHistogram;
declare let histo3: RecordableHistogram;

histo1.add(histo2);
histo1.add(histo3);

histo1 = createHistogram();
histo2 = createHistogram();
histo3 = createHistogram();

histo1.record(456);
histo1.record(547);
histo1.record(789);
histo1.record(123);

histo2.record(456);
histo2.record(547);
histo2.record(789);
histo2.record(123);

histo3.record(456);
histo3.record(547);
histo3.record(789);
histo3.record(123);

histo1.add(histo2);
histo1.add(histo3);

performance.clearMarks();
performance.clearMarks("test");

performance.clearMeasures();
performance.clearMeasures("test");

performance.getEntries(); // $ExpectType PerformanceEntry[]

performance.getEntriesByName("test"); // $ExpectType PerformanceEntry[]
performance.getEntriesByName("test", "mark"); // $ExpectType PerformanceEntry[]

performance.getEntriesByType("mark"); // $ExpectType PerformanceEntry[]
