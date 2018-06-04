import Throttle = require('throttle');

process.stdin.pipe(new Throttle(100 * 1024)).pipe(process.stdout);
process.stdin.pipe(new Throttle({ bps: 100 * 1024, chunkSize: 100, highWaterMark: 500 })).pipe(process.stdout);
