import streamx = require("streamx");
import { Readable as NodeJSReadable, Writable as NodeJSWritable } from "stream";

const { Readable, Writable, Duplex, Transform, PassThrough, Stream, isStream, isStreamx } = streamx;

// All instances can be done without arguments
new Readable();
new Writable();
new Duplex();
new Transform();
new PassThrough();

// Or empty arguments
new Readable({});
new Writable({});
new Duplex({});
new Transform({});
new PassThrough({});

isStream({}); // $ExpectType boolean
isStreamx(new Readable()); // $ExpectType boolean

// Extending the stream class!
{
    class MyClass extends Stream<string, false, false> {
        constructor() {
            super({
                highWaterMark: 1234,
                byteLength(x: string) {
                    return 1;
                },
            });
        }
        _open(cb: streamx.Callback) {
            cb();
        }
        _predestroy(cb: streamx.Callback) {
            cb();
        }
        _destroy(cb: streamx.Callback) {
            cb();
        }
    }
    const c = new MyClass();
    c.destroyed; // $ExpectType boolean
    c.destroying; // $ExpectType boolean
}
{
    const r: streamx.Readable<string> = new Readable<string>({
        read(cb) {
            cb(null, "hello");
        },
    });
    r.on("open", () => {});
    r.on("error", (_: Error) => {});
    r.on("readable", () => {});
    r.on("data", (_: string) => {});
    r.on("piping", (_: streamx.Writable<string, any>) => {});
    r.on("end", () => {});
    r.on("close", () => {});
    r.push("hello"); // $ExpectType boolean
    r.unshift("holla"); // $ExpectType void
    r.unshift(null); // $ExpectType void
    r.push(null); // $ExpectType boolean
    r.resume(); // $ExpectType Readable<string, string, string, true, false, ReadableEvents<string>>
    r.pause(); // $ExpectType Readable<string, string, string, true, false, ReadableEvents<string>>
    r.readable; // $ExpectType true
    r.writable; // $ExpectType false
    r.destroy();
    Readable.isPaused(r); // $ExpectType boolean
    Readable.isBackpressured(r); // $ExpectType boolean
}
{
    const w = new Writable<string>({
        write(data, cb) {
            data; // $ExpectType string
            cb();
        },
        writev(data, cb) {
            data; // $ExpectType string[]
            cb();
        },
        final(cb) {
            cb();
        },
    });
    w.on("open", () => {});
    w.on("error", (_: Error) => {});
    w.on("pipe", (_: streamx.Readable<string>) => {});
    w.on("drain", () => {});
    w.on("finish", () => {});
    w.on("close", () => {});
    w.write("hello"); // $ExpectType boolean
    w.end(); // $ExpectType void
    w.destroyed; // $ExpectType boolean
    w.destroying; // $ExpectType boolean
    w.readable; // $ExpectType false
    w.writable; // $ExpectType true
    w.destroy(null);
}
{
    const d = new Duplex<string, number, Buffer>({
        write(data, cb) {
            data; // $ExpectType Buffer
            this.push(data); // $ExpectType boolean
            this.read(); // $ExpectType number
            this.writable; // $ExpectType true
            this.readable; // $ExpectType true
            cb();
        },
        mapWritable: data => Buffer.from(data, "base64"),
        mapReadable: data => parseInt(data.toString("base64"), 10),
    });
    d.on("open", () => {});
    d.on("error", (_: Error) => {});
    d.on("pipe", (_: streamx.Readable<string>) => {});
    d.on("drain", () => {});
    d.on("finish", () => {});
    d.on("readable", () => {});
    d.on("data", (_: number) => {});
    d.on("piping", (_: streamx.Writable<number, any>) => {});
    d.on("end", () => {});
    d.on("close", () => {});
    d.write("1");
    d.destroy(new Error("hi"));
}

// Various ways of ending a writable
new Writable<string>().end((error?: Error | null) => {
    // Callback variant
});
new Writable<{ hello: "world" }>().end({ hello: "world" });

// Mapping functions
new Readable<number, string>({
    map: (input: number) => input.toString(),
    byteLength: input => input.length,
}).pipe(new Writable<string>());

new Readable<number, string>({
    map: (input: number) => input !== 0,
    mapReadable: input => input.toString(),
    byteLength: input => input.length,
}).pipe(new Writable<string>());

new Readable<string>().pipe(
    new Writable<string, number>({
        map: (input: string) => input.length,
    }),
);

new Readable<string>().pipe(
    new Writable<string, number>({
        map: (input: string) => input !== "",
        mapWritable: input => input.length,
    }),
);

// Piping NodeJs.streams
new Readable<string>().pipe(new NodeJSWritable());

// Since the streams are technically not nodejs streams but they work, there needs to be a helping hand here.
new NodeJSReadable({ read() {} }).pipe((new Writable<string>() as unknown) as NodeJSWritable);

Readable.from(new Set(["a", "b", "c"])); // $ExpectType Readable<string, string, string, true, false, ReadableEvents<string>>
Readable.from("string"); // $ExpectType Readable<string, string, string, true, false, ReadableEvents<string>>
Readable.from(new Readable<number>()); // $ExpectType Readable<number, number, number, true, false, ReadableEvents<number>>
const x: streamx.Readable<string> = Readable.from();

Readable.from("hello")
    .pipe(
        new Transform<string, number>({
            transform(input, cb) {
                cb(null, input.length);
            },
        }),
    )
    .pipe(
        new Writable<number>({
            write(input, cb) {
                input; // $ExpectType number
                cb();
            },
        }),
    );

new Readable({
    signal: {
        addEventListener() {},
    },
});
