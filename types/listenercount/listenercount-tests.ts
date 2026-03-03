import listenerCount = require("listenercount");
import { EventEmitter } from "events";

const ee = new EventEmitter();

// Add some listeners
ee.on("foo", () => {});
ee.on("foo", () => {});
ee.on("bar", () => {});

// Test listenerCount
const fooCount: number = listenerCount(ee, "foo");
const barCount: number = listenerCount(ee, "bar");
const bazCount: number = listenerCount(ee, "baz");

// Test with symbol event
const sym = Symbol("test");
ee.on(sym, () => {});
const symCount: number = listenerCount(ee, sym);
