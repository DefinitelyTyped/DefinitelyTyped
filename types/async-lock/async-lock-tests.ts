
import * as AsyncLock from "async-lock";
const lock = new AsyncLock();

lock.acquire("key", (done) => {
  done();
}, (err, ret) => { /* ... */ });

lock.acquire("key", (done) => {
  done();
}).then(() => { /* ... */ });

lock.acquire("key", () => "stringValue")
    .then((str) => str.replace("s", "S")) // Check returned value's type is inherited properly

lock.acquire([ "key1", "key2" ], (done) => {
  done();
}, (err, ret) => { /* ... */ });

lock.isBusy();

const lock2 = new AsyncLock({ timeout : 5000 });
const lock3 = new AsyncLock({ maxPending : 5000 });
const lock4 = new AsyncLock({ Promise: null });
