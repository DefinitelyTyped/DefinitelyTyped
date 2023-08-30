import lynx = require("lynx");
import Stream = require("node:stream");

const metrics = new lynx();

// $ExpectType Timer
const timer = metrics.createTimer("foo.interval");

timer.stop();

metrics.increment("foo");
metrics.decrement("bar", 0.5);
metrics.count("baz", 10);
metrics.timing("time", 1312);
metrics.set("a", 10);
metrics.gauge("b", 20);
metrics.send({
    foo: "1|c",
    bar: "-1|c",
    baz: "500|ms",
});

const r = new Stream.Readable();
const w = new Stream.Writable();

r
    .pipe(metrics)
    .pipe(w);

metrics.close();
