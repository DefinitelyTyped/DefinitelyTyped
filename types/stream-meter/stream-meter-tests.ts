import meter = require('stream-meter');

var m:meter.StreamMeter = meter();
process.stdin.pipe(m).pipe(process.stdout);

var bytes: number;
bytes = m.bytes;
bytes = m.maxBytes;
m.on("error", () => {});

// with argument
m = meter(129);

// stream-meter support following constructing
// but i cannot declare such object in typescript

//m = new meter();
//m = new meter(123);
