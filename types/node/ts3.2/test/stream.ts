import { Readable, Writable, Transform, finished, pipeline, Duplex } from "stream";
import { promisify } from "util";
import { createReadStream, createWriteStream } from "fs";
import { createGzip, constants } from "zlib";
import { ok as assert } from 'assert';

// Simplified constructors
function simplified_stream_ctor_test() {
    new Readable({
        read(size) {
            // $ExpectType Readable<any>
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
            // $ExpectType Writable<any>
            this;
            // $ExpectType any
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Writable<any>
            this;
            // $ExpectType { chunk: any; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Writable<any>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Writable<any>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        }
    });

    new Duplex({
        read(size) {
            // $ExpectType Duplex<any, any>
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Duplex<any, any>
            this;
            // $ExpectType any
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Duplex<any, any>
            this;
            // $ExpectType { chunk: any; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Duplex<any, any>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Duplex<any, any>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        readableObjectMode: true,
        writableObjectMode: true
    });

    new Transform({
        read(size) {
            // $ExpectType Transform<any, any>
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Transform<any, any>
            this;
            // $ExpectType any
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Transform<any, any>
            this;
            // $ExpectType { chunk: any; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Transform<any, any>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Transform<any, any>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        transform(chunk, enc, cb) {
            // $ExpectType Transform<any, any>
            this;
            // $ExpectType any
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType TransformCallback<any>
            cb;
        },
        flush(cb) {
            // $ExpectType TransformCallback<any>
            cb;
        },
        allowHalfOpen: true,
        readableObjectMode: true,
        writableObjectMode: true
    });
}

// Simplified generic constructors
function simplified_generic_stream_ctor_test() {
    // $ExpectType Uint8Array
    new Readable<Uint8Array>({
        read(size) {
            // $ExpectType Readable<Uint8Array>
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
    }).read();

    const writable = new Writable<Buffer>({
        write(chunk, enc, cb) {
            // $ExpectType Writable<Buffer>
            this;
            // $ExpectType Buffer
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Writable<Buffer>
            this;
            // $ExpectType { chunk: Buffer; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Writable<Buffer>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Writable<Buffer>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        }
    });
    // $ExpectType boolean
    writable.write(Buffer.from([1, 2]));
    // $ExpectError
    writable.write('abc');

    const duplex = new Duplex<string, Buffer>({
        read(size) {
            // $ExpectType Duplex<string, Buffer>
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Duplex<string, Buffer>
            this;
            // $ExpectType string
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Duplex<string, Buffer>
            this;
            // $ExpectType { chunk: string; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Duplex<string, Buffer>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Duplex<string, Buffer>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        readableObjectMode: true,
        writableObjectMode: true
    });

    // $ExpectType boolean
    duplex.write('foo');
    // $ExpectType Buffer
    duplex.read();

    const transform = new Transform<string, string[]>({
        read(size) {
            // $ExpectType Transform<string, string[]>
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Transform<string, string[]>
            this;
            // $ExpectType string
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Transform<string, string[]>
            this;
            // $ExpectType { chunk: string; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Transform<string, string[]>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Transform<string, string[]>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        transform(chunk, enc, cb) {
            // $ExpectType Transform<string, string[]>
            this;
            // $ExpectType string
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType TransformCallback<string[]>
            cb;
        },
        flush(cb) {
            // $ExpectType TransformCallback<string[]>
            cb;
        },
        allowHalfOpen: true,
        readableObjectMode: true,
        writableObjectMode: true
    });
    /* $ExpectType number */
    duplex.write('123');
    // $ExpectType Buffer
    duplex.read();

    transform.write('abc');
    transform.read().join('');
}

function streamPipelineFinished() {
    const cancel = finished(process.stdin, (err?: Error | null) => {});
    cancel();

    pipeline(process.stdin, process.stdout, (err?: Error | null) => {});
}

async function asyncStreamPipelineFinished() {
    const fin = promisify(finished);
    await fin(process.stdin);

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
function stream_readable_pipe_generic_test() {
    const source = new Duplex<string, number>();
    const middle = new Duplex<number, symbol>();
    const target = new Writable<symbol>();

    // $ExpectType Writable<symbol>
    source.pipe(middle).pipe(target);

    // $ExpectError
    target.pipe(middle);
}
