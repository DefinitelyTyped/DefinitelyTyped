import process from "node:process";
import meter, { StreamMeter, StreamMeterConstruct } from "stream-meter";

// $ExpectType StreamMeterConstruct
meter;

// $ExpectType StreamMeter
let m = meter();
process.stdin.pipe(m).pipe(process.stdout);

let bytes: number;
bytes = m.bytes;
bytes = m.maxBytes;
m.on("error", () => {});

// with argument
m = meter(129);

// $ExpectType StreamMeter
m = new meter();
// $ExpectType StreamMeter
m = new meter(123);
