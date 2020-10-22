import progress = require("progress-stream");
import stream = require("stream");

const options: progress.Options = {
    time: 100,
    speed: 100,
    length: 100,
    drain: true,
    transferred: 0,
};

const progressListener = (progress: progress.Progress) => {
    // $ExpectType number
    progress.percentage;
    // $ExpectType number
    progress.transferred;
    // $ExpectType number
    progress.length;
    // $ExpectType number
    progress.remaining;
    // $ExpectType number
    progress.eta;
    // $ExpectType number
    progress.runtime;
    // $ExpectType number
    progress.delta;
    // $ExpectType number
    progress.speed;
};

// $ExpectType ProgressStream
const p = progress();

// $ExpectType ProgressStream
progress(options);

// $ExpectType ProgressStream
progress(options, progressListener);

// $ExpectType ProgressStream
progress(progressListener);

// $ExpectType ProgressStream
p.on("progress", progressListener);

// $ExpectType ProgressStream
p.on("length", (length: number) => {});

p.setLength(200); // $ExpectType void

p.progress(); // $ExpectType Progress

// Check if ProgressStream extends stream.Transform correctly

// $ExpectType ProgressStream
p.on("close", () => {});
// $ExpectType ProgressStream
p.on("data", (chunk: any) => {});
// $ExpectType ProgressStream
p.on("end", () => {});
// $ExpectType ProgressStream
p.on("error", (err: Error) => {});
// $ExpectType ProgressStream
p.on("readable", () => {});
// $ExpectType ProgressStream
p.pause();

const writable = new stream.Writable();

// $ExpectType Writable
p.pipe(writable);
