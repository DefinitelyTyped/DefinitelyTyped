import { Readable, Writable, Transform, finished, pipeline, Duplex } from "stream";
import { promisify } from "util";
import { createReadStream, createWriteStream } from "fs";
import { createGzip, constants } from "zlib";
import { ok as assert } from 'assert';

// Simplified constructors
function simplified_stream_ctor_test() {
    new Readable({
        read(size) {
            // $ExpectType Readable
            this;
            // $ExpectType number
            size;
        },
        destroy(error, cb) {
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        }
    });

    new Writable({
        write(chunk, enc, cb) {
            // $ExpectType Writable
            this;
            // $ExpectType any
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Writable
            this;
            // $ExpectType { chunk: any; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Writable
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Writable
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        defaultEncoding: 'utf8',
    });

    new Duplex({
        read(size) {
            // $ExpectType Duplex
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Duplex
            this;
            // $ExpectType any
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Duplex
            this;
            // $ExpectType { chunk: any; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Duplex
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Duplex
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        readableObjectMode: true,
        writableObjectMode: true,
        readableHighWaterMark: 2048,
        writableHighWaterMark: 1024
    });

    new Transform({
        read(size) {
            // $ExpectType Transform
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Transform
            this;
            // $ExpectType any
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Transform
            this;
            // $ExpectType { chunk: any; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Transform
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Transform
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        transform(chunk, enc, cb) {
            // $ExpectType Transform
            this;
            // $ExpectType any
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType TransformCallback
            cb;
        },
        flush(cb) {
            // $ExpectType TransformCallback
            cb;
        },
        allowHalfOpen: true,
        readableObjectMode: true,
        writableObjectMode: true,
        readableHighWaterMark: 2048,
        writableHighWaterMark: 1024
    });
}

function streamPipelineFinished() {
    let cancel = finished(process.stdin, (err?: Error | null) => {});
    cancel();

    cancel = finished(process.stdin, { readable: false }, (err?: Error | null) => {});
    cancel();

    pipeline(process.stdin, process.stdout, (err?: Error | null) => {});
}

async function asyncStreamPipelineFinished() {
    const fin = promisify(finished);
    await fin(process.stdin);
    await fin(process.stdin, { readable: false });

    const pipe = promisify(pipeline);
    await pipe(process.stdin, process.stdout);
}

// http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
function stream_readable_pipe_test() {
    const rs = createReadStream(Buffer.from('file.txt'));
    const r = createReadStream('file.txt');
    const z = createGzip({ finishFlush: constants.Z_FINISH });
    const w = createWriteStream('file.txt.gz');

    assert(typeof z.bytesRead === 'number');
    assert(typeof r.bytesRead === 'number');
    assert(typeof r.path === 'string');
    assert(rs.path instanceof Buffer);

    r.pipe(z).pipe(w);

    z.flush();
    r.close();
    z.close();
    rs.close();
}
