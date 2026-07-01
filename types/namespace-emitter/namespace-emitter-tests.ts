import createNamespaceEmitter = require("namespace-emitter");

declare namespace console {
    function log(...args: unknown[]): void;
}

const emitter = createNamespaceEmitter();

// readme

emitter.on("*", function() {
    console.log("all events emitted", this.event);
});

emitter.on("example", function() {
    console.log("example event emitted");
});

emitter.emit("example");

emitter.on("demo", function() {
    console.log("multiple events with `demo` namespace emitted", this.event);
});

emitter.emit("demo:cool");
emitter.emit("demo:awesome");
emitter.emit("demo:great");

// everything else

emitter.emit("a", {});
emitter.emit("b", {}, 1);
emitter.emit("c", {}, 1, "");
emitter.emit("d", {}, 1, "", null);
emitter.emit("e", {}, 1, "", null, true);
emitter.emit("f", {}, 1, "", null, true, undefined);
// @ts-expect-error https://github.com/sethvincent/namespace-emitter/blob/master/index.js#L29
emitter.emit("g", {}, 1, "", null, true, undefined, {});

emitter.on("a", (arg1) => {});
emitter.on("b", (arg1, arg2) => {});
emitter.on("c", (arg1, arg2, arg3) => {});
emitter.on("d", (arg1, arg2, arg3, arg4) => {});
emitter.on("e", (arg1, arg2, arg3, arg4, arg5) => {});
emitter.on("f", (arg1, arg2, arg3, arg4, arg5, arg6) => {});
// @ts-expect-error https://github.com/sethvincent/namespace-emitter/blob/master/index.js#L29
emitter.on("g", (arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {});

emitter.once("a", (arg1) => {});
emitter.once("b", (arg1, arg2) => {});
emitter.once("c", (arg1, arg2, arg3) => {});
emitter.once("d", (arg1, arg2, arg3, arg4) => {});
emitter.once("e", (arg1, arg2, arg3, arg4, arg5) => {});
emitter.once("f", (arg1, arg2, arg3, arg4, arg5, arg6) => {});
// @ts-expect-error https://github.com/sethvincent/namespace-emitter/blob/master/index.js#L29
emitter.once("g", (arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {});

emitter.off("a", (arg1) => {});
emitter.off("b", (arg1, arg2) => {});
emitter.off("c", (arg1, arg2, arg3) => {});
emitter.off("d", (arg1, arg2, arg3, arg4) => {});
emitter.off("e", (arg1, arg2, arg3, arg4, arg5) => {});
emitter.off("f", (arg1, arg2, arg3, arg4, arg5, arg6) => {});
// @ts-expect-error https://github.com/sethvincent/namespace-emitter/blob/master/index.js#L29
emitter.off("g", (arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {});
emitter.off("h");
