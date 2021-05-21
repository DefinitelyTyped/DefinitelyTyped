import { Readable, Writable, Transform, finished, pipeline, Duplex } from 'stream';
import { promisify } from 'util';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip, constants } from 'zlib';
import assert = require('assert');
import { Http2ServerResponse } from 'http2';
import { pipeline as pipelinePromise } from 'stream/promises';

// Simplified constructors
function simplified_stream_ctor_test() {
    new Readable({
        construct(cb) {
            // $ExpectType Readable
            this;
            cb();
        },
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
        construct(cb) {
            // $ExpectType Writable
            this;
            cb();
        },
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
        construct(cb) {
            // $ExpectType Duplex
            this;
            cb();
        },
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
        construct(cb) {
            // $ExpectType Transform
            this;
            cb();
        },
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

    const http2ServerResponse: Http2ServerResponse = {} as any;
    pipeline(process.stdin, http2ServerResponse, (err?: Error | null) => {});
}

async function asyncStreamPipelineFinished() {
    const fin = promisify(finished);
    await fin(process.stdin);
    await fin(process.stdin, { readable: false });

    const pipe = promisify(pipeline);
    await pipe(process.stdin, process.stdout);
}

// https://nodejs.org/api/stream.html#stream_stream_pipeline_source_transforms_destination_callback
function streamPipelineAsyncTransform() {
    // Transform through a stream, preserving the type of the source
    pipeline(process.stdin,
        async function *(source) {
            // $ExpectType ReadStream & { fd: 0; }
            source;
            source.setEncoding('utf8');
            for await(const chunk of source as AsyncIterable<string>) {
                yield chunk.toUpperCase();
            }
        },
        process.stdout,
        err => console.error(err));

    // Read from an iterable and write to a function accepting an AsyncIterable
    pipeline('tasty',
        async function *(source) {
            // $ExpectType string
            source;
            for (const chunk of source) {
                yield chunk.toUpperCase();
            }
        },
        async function *(source: AsyncIterable<string>) {
            // $ExpectType AsyncIterable<string>
            source;
            for await(const chunk of source) {
                console.log(chunk);
            }
            yield null;
        },
        err => console.error(err));

    // Finish with a promise
    pipeline('tasty',
        async function *(source) {
            for (const chunk of source) {
                yield chunk.toUpperCase();
            }
        },
        async (source: AsyncIterable<string>) => {
            return new Date();
        },
        (err, val) => {
            // $ExpectType Date
            val;
        });

    // Read from an iterable and go through two transforms
    pipeline(
        function *() {
            for (let i = 0; i < 5; i++)
                yield i;
        },
        async function *(source) {
            for await(const chunk of source) {
                yield chunk + 3;
            }
        },
        async function *(source) {
            for await(const chunk of source) {
                yield chunk.toFixed(3);
            }
        },
        process.stdout,
        err => console.error(err));

    // Accepts ordinary iterable as source
    pipeline(
        [1, 2, 3].values(),
        async function *(source) {
            for (const chunk of source) {
                yield chunk + 3;
            }
        },
        async function *(source) {
            for await(const chunk of source) {
                yield chunk.toFixed(3);
            }
        },
        async function *(source: AsyncIterable<string>) {
            for await(const chunk of source)
                console.log(chunk);
            yield null;
        },
        err => console.error(err));
}

async function streamPipelineAsyncPromiseTransform() {
    // Transform through a stream, preserving the type of the source
    pipelinePromise(process.stdin,
        async function *(source) {
            // $ExpectType ReadStream & { fd: 0; }
            source;
            source.setEncoding('utf8');
            for await(const chunk of source as AsyncIterable<string>) {
                yield chunk.toUpperCase();
            }
        },
        process.stdout).then(r => {
            // $ExpectType void
            r;
        });

    // Read from an iterable and write to a function accepting an AsyncIterable
    pipelinePromise('tasty',
        async function *(source) {
            // $ExpectType string
            source;
            for (const chunk of source) {
                yield chunk.toUpperCase();
            }
        },
        async function *(source: AsyncIterable<string>) {
            // $ExpectType AsyncIterable<string>
            source;
            for await(const chunk of source) {
                console.log(chunk);
            }
            yield null;
        }).then(r => {
            // $ExpectType void
            r;
        });

    // Finish with a promise
    pipelinePromise('tasty',
        async function *(source) {
            for (const chunk of source) {
                yield chunk.toUpperCase();
            }
        },
        async (source: AsyncIterable<string>) => {
            return new Date();
        }).then(r => {
            // $ExpectType Date
            r;
        });

    // Read from an iterable and go through two transforms
    pipelinePromise(
        function *() {
            for (let i = 0; i < 5; i++)
                yield i;
        },
        async function *(source) {
            for await(const chunk of source) {
                yield chunk + 3;
            }
        },
        async function *(source) {
            for await(const chunk of source) {
                yield chunk.toFixed(3);
            }
        },
        process.stdout).then(r => {
            // $ExpectType void
            r;
        });
}

async function streamPipelineAsyncPromiseAbortTransform() {
    const { signal } = new AbortController();

    // Transform through a stream, preserving the type of the source
    pipelinePromise(process.stdin,
        async function *(source) {
            // $ExpectType ReadStream & { fd: 0; }
            source;
            source.setEncoding('utf8');
            for await(const chunk of source as AsyncIterable<string>) {
                yield chunk.toUpperCase();
            }
        },
        process.stdout,
        {signal}).then(r => {
            // $ExpectType void
            r;
        });

    // Read from an iterable and write to a function accepting an AsyncIterable
    pipelinePromise('tasty',
        async function *(source) {
            // $ExpectType string
            source;
            for (const chunk of source) {
                yield chunk.toUpperCase();
            }
        },
        async function *(source: AsyncIterable<string>) {
            // $ExpectType AsyncIterable<string>
            source;
            for await(const chunk of source) {
                console.log(chunk);
            }
            yield null;
        },
        {signal}).then(r => {
            // $ExpectType void
            r;
        });

    // Finish with a promise
    pipelinePromise('tasty',
        async function *(source) {
            for (const chunk of source) {
                yield chunk.toUpperCase();
            }
        },
        async (source: AsyncIterable<string>) => {
            return new Date();
        },
        {signal}).then(r => {
            // $ExpectType Date
            r;
        });

    // Read from an iterable and go through two transforms
    pipelinePromise(
        function *() {
            for (let i = 0; i < 5; i++)
                yield i;
        },
        async function *(source) {
            for await(const chunk of source) {
                yield chunk + 3;
            }
        },
        async function *(source) {
            for await(const chunk of source) {
                yield chunk.toFixed(3);
            }
        },
        process.stdout,
        {signal}).then(r => {
            // $ExpectType void
            r;
        });
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
