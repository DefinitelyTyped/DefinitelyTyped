import * as profiler from "gc-profiler";

// test type exports
type GCProfiler = profiler.GCProfiler;
type GCInfo = profiler.GCInfo;
type GCType = profiler.GCType;

profiler.GCCallbackFlags.kNoGCCallbackFlags; // $ExpectType 0
profiler.GCCallbackFlags.kGCCallbackFlagCompacted; // $ExpectType 1
profiler.GCCallbackFlags.kGCCallbackFlagConstructRetainedObjectInfos; // $ExpectType 2
profiler.GCCallbackFlags.kGCCallbackFlagForced; // $ExpectType 4

// $ExpectType GCProfiler
profiler.addListener("gc", info => {
    info; // $ExpectType GCInfo

    info.date; // $ExpectType Date
    info.duration; // $ExpectType number
    info.type; // $ExpectType GCType
    info.forced; // $ExpectType boolean
    info.flags; // $ExpectType number
});
profiler.addListener("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType GCProfiler
profiler.on("gc", info => {
    info; // $ExpectType GCInfo
});
profiler.on("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType GCProfiler
profiler.once("gc", info => {
    info; // $ExpectType GCInfo
});
profiler.once("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType GCProfiler
profiler.removeListener("gc", info => {
    info; // $ExpectType GCInfo
});
profiler.removeListener("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType GCProfiler
profiler.off("gc", info => {
    info; // $ExpectType GCInfo
});
profiler.off("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType GCProfiler
profiler.prependListener("gc", info => {
    info; // $ExpectType GCInfo
});
profiler.prependListener("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType GCProfiler
profiler.prependOnceListener("gc", info => {
    info; // $ExpectType GCInfo
});
profiler.prependOnceListener("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType boolean
profiler.emit("gc", null as any as profiler.GCInfo);
