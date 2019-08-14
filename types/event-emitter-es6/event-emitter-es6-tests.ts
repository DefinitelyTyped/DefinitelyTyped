import EventEmitter = require("event-emitter-es6");

const ee = new EventEmitter();
const ee1 = new EventEmitter({ emitDelay: 50 });
const ee2 = new EventEmitter({ strictMode: true });
const ee3 = new EventEmitter({ strictMode: false, emitDelay: 5 });
const ee4 = new EventEmitter({});

ee.on("test", () => {});
ee.once("test", () => {});
ee.off("test", () => {});
ee.off("test");
ee.emit("test");
ee.emit("test", 1, 2, 3, "a", "b", "c");
ee.emitSync("test");
ee.emitSync("test", 1, 2, 3, "a", "b", "c");
ee.destroy();
