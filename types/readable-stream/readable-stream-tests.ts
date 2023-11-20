import stream = require("stream");
import RStream = require("readable-stream");
import { dot, spec, tap } from "node:test/reporters";
import ErrnoException = NodeJS.ErrnoException;

function testTypes() {
    const ANY: any = undefined;
    const _readableOpts = ANY as RStream.ReadableOptions;
    const _writableOpts: stream.WritableOptions = ANY as RStream.WritableOptions;
    const _transformOpts = ANY as RStream.TransformOptions;
    const _duplexOpts = ANY as RStream.DuplexOptions;

    const _readable: stream.Readable = new RStream.Readable(_readableOpts);
    const _writable: stream.Writable = new RStream.Writable(_writableOpts);
    const _transform: stream.Transform = new RStream.Transform(_transformOpts);
    const _duplex: stream.Duplex = new RStream.Duplex(_duplexOpts);

    _readable.compose(tap).pipe(_duplex).pipe(_transform).pipe(_writable);
    _readable.compose(dot);
    _readable.compose(new spec());
}

function test() {
    const rs: stream.Stream = (null as any) as RStream.Stream;
    const RS_Readable = RStream;
    const RS_Writable = RStream.Writable;
    const RS_Transform = RStream.Transform;
    const RS_Duplex = RStream.Duplex;

    const streamR = new RS_Readable({
        objectMode: true,
        read(size) {
            assertType<number>(size);
        },
        destroy(error, cb) {
            assertType<Error | null>(error);
            assertType<(err: Error | null) => void>(cb);
        },
    });

    streamR.once("end", () => {
        process.nextTick(() => streamR.emit("close"));
    });

    const row = null;
    const i = 0;
    if (streamR.push(row)) streamR.emit("result", row, i);
    else streamR.emit("error", new Error("a possible exception")); // Pass on any errors
    streamR.push(null); // pushing null, indicating EOF

    const streamW = new RS_Writable({
        write(chunk, enc, cb) {
            assertType<any>(chunk);
            assertType<string>(enc);
            assertType<(err?: Error | null) => void>(cb);
        },
        writev(chunks, cb) {
            assertType<ArrayLike<{ chunk: any; encoding: string }>>(chunks);
            assertType<(err?: Error | null) => void>(cb);
        },
        destroy(error, cb) {
            assertType<Error | null>(error);
            assertType<(err: Error | null) => void>(cb);
        },
        final(cb) {
            assertType<(err?: Error | null) => void>(cb);
        },
    });
    streamW.write(new Buffer("test"));
    streamW.emit("finish");

    const streamT = new RS_Transform({
        transform(chunk, enc, cb) {
            assertType<any>(chunk);
            assertType<string>(enc);
            assertType<(err?: Error, data?: any) => void>(cb);
        },
    });
    assertType<boolean>(streamT.allowHalfOpen);
    assertType<boolean>(streamT.readable);
    assertType<boolean>(streamT.writable);
    streamT.unpipe(streamW);
    streamT._transformState.afterTransform = (err, data) => {};

    const streamD = new RS_Duplex({
        read(size: number) {
            assertType<number>(size);
        },
        write(chunk: any, enc: string, cb: (err?: Error | null) => void) {
            assertType<any>(chunk);
            assertType<string>(enc);
            assertType<(err?: Error | null) => void>(cb);
        },
        writableObjectMode: false,
    });
    assertType<boolean>(streamD.allowHalfOpen);
    assertType<boolean>(streamD.readable);
    assertType<boolean>(streamD.writable);
    assertType<boolean>(streamD.readableObjectMode);
    assertType<boolean>(streamD.writableObjectMode);
    streamD.pipe(streamW);
    const typedEncoding: BufferEncoding = "binary";
    streamD.setEncoding(typedEncoding);

    const testBufferEncoding = new RS_Duplex({
        write(chunk: any, enc: BufferEncoding, cb: (err?: Error | null) => void) {
            assertType<BufferEncoding>(enc);
        },
    });

    rs.addListener("read", (...args: any[]) => console.log(args));
    rs.emit("read", 1, 2, 3);
    rs.pipe(streamW);

    const rState = (null as any) as RStream.ReadableState;
    rState.buffer.push(new Buffer("buffer-write"));
    assertType<boolean>(rState.destroyed);
    assertType<number>(rState.awaitDrain);
    if (rState.decoder != null) {
        rState.decoder.write(new Buffer("decoder-write"));
    }

    const wState = (null as any) as RStream.WritableState;
    assertType<boolean>(wState.bufferProcessing);
    assertType<number>(wState.corked);
    const wBufNext = wState.buffer[0].next;
    if (wBufNext != null) {
        wBufNext.callback(new Error("test"));
    }
    if (wState.bufferedRequest != null) {
        wState.bufferedRequest.callback(null);
    }

    const rOpts: RStream.ReadableOptions = {
        defaultEncoding: "utf8",
        encoding: "utf8",
        highWaterMark: 100,
        readableHighWaterMark: 100,
        readableObjectMode: false,
        read(size: number) {},
    };

    const wOpts: RStream.WritableOptions = {
        decodeStrings: true,
        defaultEncoding: "utf8",
        highWaterMark: 100,
        writableHighWaterMark: 100,
        writableObjectMode: false,
        write(chunk: any, enc: string, cb: (err?: Error | null) => void) {},
    };
}

function callback(err: ErrnoException | undefined | null) {
}

function testFinished() {
    const _readable: stream.Readable = <any> {};
    RStream.finished(_readable, callback);

    const _writable: stream.Writable = <any> {};
    RStream.finished(_writable, callback);

    const _transform: stream.Transform = <any> {};
    RStream.finished(_transform, callback);

    const _duplex: stream.Duplex = <any> {};
    RStream.finished(_duplex, callback);
}

function testPipeline() {
    const _readable: stream.Readable = <any> {};
    const _transform: stream.Transform = <any> {};
    const _writable: stream.Writable = <any> {};

    RStream.pipeline([_readable], callback);
    RStream.pipeline([_readable], _transform, _writable, callback);
}

function assertType<T>(value: T, msg?: string): T {
    if (!(typeof value)) throw new Error(msg);
    return value;
}
