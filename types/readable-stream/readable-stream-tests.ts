import stream = require("stream");
import RStream = require("readable-stream");

function testTypes() {
    const ANY: any = null;
    const _readableOpts: stream.ReadableOptions = ANY as RStream.ReadableOptions;
    const _writableOpts: stream.WritableOptions = ANY as RStream.WritableOptions;
    const _transformOpts: stream.TransformOptions = ANY as RStream.TransformOptions;
    const _duplexOpts: stream.DuplexOptions = ANY as RStream.DuplexOptions;

    const _readable: typeof stream.Readable = RStream.Readable;
    const _writable: typeof stream.Writable = RStream.Writable;
    const _transform: typeof stream.Transform = RStream.Transform;
    const _duplex: typeof stream.Duplex = RStream.Duplex;
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
        }
    });

    streamR.once("end", () => {
        process.nextTick(() => streamR.emit("close"));
    });

    const row = null;
    const i = 0;
    if (streamR.push(row)) streamR.emit("result", row, i);
    else streamR.emit("error", new Error("a possible exception"));  // Pass on any errors
    streamR.push(null);  // pushing null, indicating EOF

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
        }
    });
    streamW.write(new Buffer("test"));
    streamW.emit("finish");

    const streamT = new RS_Transform({
        transform(chunk, enc, cb) {
            assertType<any>(chunk);
            assertType<string>(enc);
            assertType<(err?: Error, data?: any) => void>(cb);
        }
    });
    assertType<boolean>(streamT.allowHalfOpen);
    assertType<boolean>(streamT.readable);
    assertType<boolean>(streamT.writable);
    streamT.unpipe(streamW);
    streamT._transformState.afterTransform = (err, data) => { };

    const streamD = new RS_Duplex({
        read(size: number) {
            assertType<number>(size);
        },
        write(chunk: any, enc: string, cb: (err?: Error | null) => void) {
            assertType<any>(chunk);
            assertType<string>(enc);
            assertType<(err?: Error | null) => void>(cb);
        },
        writableObjectMode: false
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
        }
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
        read(size: number) { }
    };

    const wOpts: RStream.WritableOptions = {
        decodeStrings: true,
        defaultEncoding: "utf8",
        highWaterMark: 100,
        writableHighWaterMark: 100,
        writableObjectMode: false,
        write(chunk: any, enc: string, cb: (err?: Error | null) => void) { }
    };
}

function assertType<T>(value: T, msg?: string): T {
    if (!(typeof value)) throw new Error(msg);
    return value;
}
