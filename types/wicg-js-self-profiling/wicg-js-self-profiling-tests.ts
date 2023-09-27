const profiler = new Profiler({
    sampleInterval: 10, // Target sampling every 10ms
    maxBufferSize: 10 * 100, // Cap at ~10s worth of samples
});

async function collectAndSendTrace() {
    if (profiler.stopped) return;

    const trace: ProfilerTrace = await profiler.stop();
    const traceJson = JSON.stringify({
        timing: performance.timing,
        trace,
    });

    // Send the trace JSON to a server via Fetch/XHR
    fetch("/server", { method: "POST", body: traceJson });
}

profiler.addEventListener("samplebufferfull", collectAndSendTrace);
window.addEventListener("load", collectAndSendTrace);
