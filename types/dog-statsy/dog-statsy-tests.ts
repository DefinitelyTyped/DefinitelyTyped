import Client = require("dog-statsy");
import * as dgram from "node:dgram";

// test type exports
type Types = Client | typeof Client | Client.Options | Client.Trace;

const client = new Client({}); // $ExpectType Client
new Client({ bufferSize: 1 }); // $ExpectType Client
new Client({ flushInterval: 1 }); // $ExpectType Client
new Client({ host: "foo" }); // $ExpectType Client
new Client({ port: 123 }); // $ExpectType Client
new Client({ prefix: "bar" }); // $ExpectType Client
new Client({ tags: ["foo"] as const }); // $ExpectType Client
// @ts-expect-error
new Client();

client.gauge("foo", 1); // $ExpectType void
client.gauge("foo", 1, ["bar"] as const); // $ExpectType void

client.meter("foo", 1); // $ExpectType void
client.meter("foo", 1, ["bar"] as const); // $ExpectType void

client.set("foo", 1); // $ExpectType void
client.set("foo", 1, ["bar"] as const); // $ExpectType void

client.count("foo", 1); // $ExpectType void
client.count("foo", 1, 1); // $ExpectType void
client.count("foo", 1, 1, ["bar"] as const); // $ExpectType void
client.count("foo", 1, null, ["bar"] as const); // $ExpectType void
client.count("foo", 1, undefined, ["bar"] as const); // $ExpectType void

client.incr("foo"); // $ExpectType void
client.incr("foo", 1); // $ExpectType void
client.incr("foo", 1, ["bar"] as const); // $ExpectType void
client.incr("foo", null, ["bar"] as const); // $ExpectType void
client.incr("foo", undefined, ["bar"] as const); // $ExpectType void

client.histogram("foo"); // $ExpectType () => void
client.histogram("foo")(); // $ExpectType void
client.histogram("foo", 1); // $ExpectType void
client.histogram("foo", 1, ["bar"] as const); // $ExpectType void

client.timer("foo"); // $ExpectType () => void
client.timer("foo")(); // $ExpectType void
client.timer("foo", 1); // $ExpectType void
client.timer("foo", 1, ["bar"] as const); // $ExpectType void

const trace = client.trace("foo"); // $ExpectType Trace
client.trace("foo", ["bar"] as const); // $ExpectType Trace
client.trace("foo", ["bar"] as const, new Date()); // $ExpectType Trace

trace.step("baz"); // $ExpectType void
trace.step("baz", ["bar"] as const); // $ExpectType void
trace.step("baz", ["bar"] as const, new Date()); // $ExpectType void
trace.step("baz", null, new Date()); // $ExpectType void
trace.step("baz", undefined, new Date()); // $ExpectType void

trace.complete(); // $ExpectType void
trace.complete(new Date()); // $ExpectType void

client.setFlushInterval(); // $ExpectType void
client.setFlushInterval(123); // $ExpectType void

client.close(); // $ExpectType void
client.flush(); // $ExpectType void

client.addListener("close", () => {}); // $ExpectType Client
client.addListener("connect", () => {}); // $ExpectType Client
// $ExpectType Client
client.addListener("error", err => {
    err; // $ExpectType Error
});
// $ExpectType Client
client.addListener("message", (msg, rinfo) => {
    msg; // $ExpectType Buffer
    rinfo; // $ExpectType RemoteInfo
});
// $ExpectType Client
client.addListener("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType Client
client.addListener(Symbol("foo"), (...args) => {
    args; // $ExpectType any[]
});
client.emit("close"); // $ExpectType boolean
client.emit("connect"); // $ExpectType boolean
client.emit("error", new Error()); // $ExpectType boolean
declare const rinfo: dgram.RemoteInfo;
client.emit("message", Buffer.of(1), rinfo); // $ExpectType boolean
client.emit("foo", 1, "baz"); // $ExpectType boolean
client.emit(Symbol("foo"), 1, "baz"); // $ExpectType boolean
client.on("close", () => {}); // $ExpectType Client
client.on("connect", () => {}); // $ExpectType Client
// $ExpectType Client
client.on("error", err => {
    err; // $ExpectType Error
});
// $ExpectType Client
client.on("message", (msg, rinfo) => {
    msg; // $ExpectType Buffer
    rinfo; // $ExpectType RemoteInfo
});
// $ExpectType Client
client.on("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType Client
client.on(Symbol("foo"), (...args) => {
    args; // $ExpectType any[]
});
client.once("close", () => {}); // $ExpectType Client
client.once("connect", () => {}); // $ExpectType Client
// $ExpectType Client
client.once("error", err => {
    err; // $ExpectType Error
});
// $ExpectType Client
client.once("message", (msg, rinfo) => {
    msg; // $ExpectType Buffer
    rinfo; // $ExpectType RemoteInfo
});
// $ExpectType Client
client.once("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType Client
client.once(Symbol("foo"), (...args) => {
    args; // $ExpectType any[]
});
client.prependListener("close", () => {}); // $ExpectType Client
client.prependListener("connect", () => {}); // $ExpectType Client
// $ExpectType Client
client.prependListener("error", err => {
    err; // $ExpectType Error
});
// $ExpectType Client
client.prependListener("message", (msg, rinfo) => {
    msg; // $ExpectType Buffer
    rinfo; // $ExpectType RemoteInfo
});
// $ExpectType Client
client.prependListener("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType Client
client.prependListener(Symbol("foo"), (...args) => {
    args; // $ExpectType any[]
});
client.prependOnceListener("close", () => {}); // $ExpectType Client
client.prependOnceListener("connect", () => {}); // $ExpectType Client
// $ExpectType Client
client.prependOnceListener("error", err => {
    err; // $ExpectType Error
});
// $ExpectType Client
client.prependOnceListener("message", (msg, rinfo) => {
    msg; // $ExpectType Buffer
    rinfo; // $ExpectType RemoteInfo
});
// $ExpectType Client
client.prependOnceListener("foo", (...args) => {
    args; // $ExpectType any[]
});
// $ExpectType Client
client.prependOnceListener(Symbol("foo"), (...args) => {
    args; // $ExpectType any[]
});
