import {
    performance,
    monitorEventLoopDelay,
    PerformanceObserverCallback,
    PerformanceObserver,
    PerformanceEntry,
    EntryType,
    constants,
    EventLoopUtilization,
} from 'node:perf_hooks';

performance.mark('start');
(
    () => {}
)();
performance.mark('end');

const timeOrigin: number = performance.timeOrigin;

const performanceObserverCallback: PerformanceObserverCallback = (list, obs) => {
    const entries: PerformanceEntry[] = list.getEntries();
    const duration: number = entries[0].duration;
    const name: string = entries[0].name;
    const startTime: number = entries[0].startTime;
    const entryTypes: EntryType = entries[0].entryType;
    const kind: number | undefined = entries[0].kind;
    const flags: number | undefined = entries[0].flags;

    if (kind === constants.NODE_PERFORMANCE_GC_MAJOR) {
        if (flags === constants.NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY) {
        }
    }

    obs.disconnect();
};
const obs = new PerformanceObserver(performanceObserverCallback);
obs.observe({
    entryTypes: ['function'] as ReadonlyArray<EntryType>,
    buffered: true,
});

const monitor = monitorEventLoopDelay({
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
