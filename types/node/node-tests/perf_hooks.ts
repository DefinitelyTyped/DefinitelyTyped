import {
    createHistogram,
    createSlidingWindowHistogram,
    ELDHistogram,
    EntryType,
    eventLoopUtilization,
    Histogram,
    importHistogram,
    monitorEventLoopDelay,
    performance as NodePerf,
    PerformanceEntry,
    PerformanceMark,
    PerformanceObserver,
    PerformanceObserverCallback,
    RecordableHistogram,
    SlidingWindowHistogram,
    timerify,
} from "node:perf_hooks";

// Test module import once, the rest use global
const startMark: PerformanceMark = NodePerf.mark("start");
(() => {})();
performance.mark("end");

performance.mark("test", {
    detail: "something",
    startTime: 123,
});

performance.measure("name", startMark.name, "endMark");

const timeOrigin: number = performance.timeOrigin;

const performanceObserverCallback: PerformanceObserverCallback = (list, obs) => {
    const entries: PerformanceEntry[] = list.getEntries();
    const duration: number = entries[0].duration;
    const name: string = entries[0].name;
    const startTime: number = entries[0].startTime;
    const entryTypes: EntryType = entries[0].entryType;

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

const monitor: ELDHistogram = monitorEventLoopDelay({
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

let histogram: RecordableHistogram = createHistogram({
    figures: 123,
    lowest: 1,
    highest: 2,
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

performance.getEntries()[0]; // $ExpectType PerformanceEntry

performance.getEntriesByName("test")[0]; // $ExpectType PerformanceEntry
performance.getEntriesByName("test", "mark")[0]; // $ExpectType PerformanceEntry

performance.getEntriesByType("mark")[0]; // $ExpectType PerformanceEntry

const resource = NodePerf.markResourceTiming(
    {
        startTime: 0,
        endTime: 0,
        finalServiceWorkerStartTime: 0,
        redirectStartTime: 0,
        redirectEndTime: 0,
        postRedirectStartTime: 0,
        finalConnectionTimingInfo: {
            domainLookupStartTime: 0,
            domainLookupEndTime: 0,
            connectionStartTime: 0,
            connectionEndTime: 0,
            secureConnectionStartTime: 0,
            ALPNNegotiatedProtocol: "",
        },
        finalNetworkRequestStartTime: 0,
        finalNetworkResponseStartTime: 0,
        encodedBodySize: 0,
        decodedBodySize: 0,
    },
    "https://nodejs.org",
    "",
    global,
    "",
    {},
    200,
    "",
);
resource; // $ExpectType PerformanceResourceTiming
resource.finalResponseHeadersStart; // $ExpectType number
resource.firstInterimResponseStart; // $ExpectType number
resource.renderBlockingStatus; // $ExpectType "blocking" | "non-blocking"
resource.contentType; // $ExpectType string
resource.contentEncoding; // $ExpectType string

{
    const { nodeTiming } = NodePerf;

    // $ExpectType UVMetrics
    const uvMetrics = nodeTiming.uvMetricsInfo;

    uvMetrics.loopCount; // $ExpectType number
    uvMetrics.events; // $ExpectType number
    uvMetrics.eventsWaiting; // $ExpectType number
}

{
    let elu = eventLoopUtilization();
    elu.active; // $ExpectType number
    elu.idle; // $ExpectType number
    elu.utilization; // $ExpectType number

    elu = eventLoopUtilization(elu);
    elu = eventLoopUtilization(elu, elu);
}

{
    const fn = (a: number, b: number) => a + b;

    // $ExpectType (a: number, b: number) => number
    timerify(fn);
    // $ExpectType (a: number, b: number) => number
    timerify(fn, { histogram: createHistogram() });
}

{
    const h = createHistogram({ halfLife: 100, threshold: 200_000_000 });
    const other = createHistogram();
    const eld: ELDHistogram = monitorEventLoopDelay();

    h.burnRate(0.999); // $ExpectType number
    h.cdf(50); // $ExpectType number
    h.ccdf(50); // $ExpectType number
    h.countAt(50); // $ExpectType number
    h.cliffsD(other); // $ExpectType number
    h.cohensD(eld); // $ExpectType number
    h.ksTest(other); // $ExpectType number
    h.ewmaMean; // $ExpectType number
    h.ewmaStddev; // $ExpectType number
    h.ewmaErrorRate; // $ExpectType number
    h.kurtosis; // $ExpectType number
    h.skewness; // $ExpectType number
    h.percentilesAt([50, 99]); // $ExpectType Map<number, number>
    h.linearBuckets(25); // $ExpectType Map<number, number>
    h.logBuckets(1, 2); // $ExpectType Map<number, number>

    const mw = h.mannWhitneyTest(other);
    mw.uStatistic; // $ExpectType number
    mw.zScore; // $ExpectType number
    mw.pValue; // $ExpectType number

    const welch = h.welchTest(other, { confidence: 0.9 });
    welch.tStatistic; // $ExpectType number
    welch.degreesOfFreedom; // $ExpectType number
    welch.pValue; // $ExpectType number
    welch.confidenceInterval.lower; // $ExpectType number
    welch.confidenceInterval.upper; // $ExpectType number
    h.welchTest(other);

    const { mean, lower, upper } = h.meanCI();
    mean; // $ExpectType number
    lower; // $ExpectType number
    upper; // $ExpectType number
    h.meanCI({ confidence: 0.99 });

    const pci = h.percentileCI(99, { confidence: 0.9 });
    pci.value; // $ExpectType number
    pci.lower; // $ExpectType number
    pci.upper; // $ExpectType number
    h.percentileCI(99);

    h.qrde(); // $ExpectType Promise<HistogramQRDEResult>
    h.qrde({ bins: 10, dequantize: "all", cache: true });
    h.qrde({ probabilities: [0, 0.5, 1], dequantize: "none" }).then((r) => {
        r.probabilities; // $ExpectType Float64Array || NonSharedFloat64Array
        r.quantiles; // $ExpectType Float64Array || NonSharedFloat64Array
        r.densities; // $ExpectType Float64Array || NonSharedFloat64Array
        r.count; // $ExpectType bigint
        r.bucketCount; // $ExpectType number
        r.corrections; // $ExpectType number
        r.dequantize; // $ExpectType "none" | "hdr" | "all"
    });
    // @ts-expect-error
    h.qrde({ dequantize: "x" });

    // @ts-expect-error
    h.ewmaMean = 1;

    const data = h.export(); // $ExpectType Uint8Array || NonSharedUint8Array
    importHistogram(data); // $ExpectType RecordableHistogram
    importHistogram(Buffer.from(data)); // $ExpectType RecordableHistogram

    h.recordCorrected(200, 10);
    h.recordCorrected(200n, 10n);
    h.subtract(other);
    // @ts-expect-error
    h.subtract(eld);
}

{
    // $ExpectType SlidingWindowHistogram
    const w = createSlidingWindowHistogram({ chunks: 6, chunkDuration: 10_000 });
    createSlidingWindowHistogram({ chunks: 6, recordsPerChunk: 100, lowest: 1n, highest: 1000n, figures: 2 });
    // @ts-expect-error
    createSlidingWindowHistogram({ chunks: 6 });
    // @ts-expect-error
    createSlidingWindowHistogram({ chunks: 6, chunkDuration: 10_000, recordsPerChunk: 100 });
    // @ts-expect-error
    createSlidingWindowHistogram();

    w.record(20_000_000); // $ExpectType void
    w.record(20_000_000n); // $ExpectType void
    w.reset(); // $ExpectType void
    const snapshot: Histogram = w.snapshot();
    w.snapshot(); // $ExpectType Histogram
    // @ts-expect-error
    w.snapshot().record(1);
    const sw: SlidingWindowHistogram = w;
}
