import { performance, monitorEventLoopDelay, PerformanceObserverCallback, PerformanceObserver } from 'perf_hooks';

performance.mark('start');
(
    () => {}
)();
performance.mark('end');

const timeOrigin = performance.timeOrigin;

const performanceObserverCallback: PerformanceObserverCallback = (list, obs) => {
    const {
        duration,
        entryType,
        name,
        startTime,
    } = list.getEntries()[0];
    obs.disconnect();
};
const obs = new PerformanceObserver(performanceObserverCallback);
obs.observe({
    entryTypes: ['function'] as ReadonlyArray<string>,
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
