/// <reference lib="DOM" />
import NanoScheduler = require('nanoscheduler');

const scheduler = NanoScheduler(); // $ExpectTYpe NanoScheduler
scheduler.push(() => {
    // callback
});
scheduler.schedule();
scheduler.setTimeout(() => {
    // done
});

// usage sample
let i = 10000;
while (i--) scheduler.push(() => console.log(`idle time! ${Date.now()}`));
