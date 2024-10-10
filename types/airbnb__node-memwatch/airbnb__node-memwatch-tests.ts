import * as memwatch from "@airbnb/node-memwatch";

// @ts-expect-error
memwatch.on("foobar");
// @ts-expect-error
memwatch.on("stats", "baz");
// $ExpectType EventEmitter<DefaultEventMap>
memwatch.on("stats", (
    result, // $ExpectType GcStats
) => {
    result.gc_ts; // $ExpectType number
});

new memwatch.HeapDiff(); // $ExpectType HeapDiff
(new memwatch.HeapDiff()).end(); // $ExpectType HeapDiffResult
