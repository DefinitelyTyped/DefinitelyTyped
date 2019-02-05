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
        read(size) { },
        destroy(error, cb) { }
    });

    streamR.once("end", () => {
        process.nextTick(() => {
            streamR.emit("close");
        });
    });

    const row = null;
    const i = 0;
    if (streamR.push(row)) streamR.emit("result", row, i);
    else streamR.emit('error', new Error("a possible exception"));  // Pass on any errors
    streamR.push(null);  // pushing null, indicating EOF

    const streamW = new RS_Writable({
        write(chunk, enc, cb) { },
        writev(chunks, cb) { },
        destroy(error, cb) { },
        final(cb) { }
    });
    streamW.write(new Buffer("test"));
    streamW.emit("finish");
}
