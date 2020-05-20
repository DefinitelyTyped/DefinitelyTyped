import * as raf from "raf";

const handle = raf((timestamp) => {
  timestamp; // $ExpectType number
});

handle; // $ExpectType number

raf.cancel(handle);
raf.polyfill();
raf.polyfill({});
