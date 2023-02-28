import { Readable, Writable, Transform, finished, pipeline, Duplex, addAbortSignal, isErrored, isReadable } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip, constants } from 'node:zlib';
import assert = require('node:assert');
import { Http2ServerResponse } from 'node:http2';
import { text, json, buffer, arrayBuffer, blob } from 'node:stream/consumers';
import { pipeline as pipelinePromise } from 'node:stream/promises';
import { stdout } from 'node:process';
import { ReadableStream, WritableStream, TransformStream } from 'node:stream/web';
import { setInterval as every } from 'node:timers/promises';
import { MessageChannel as NodeMC } from 'node:worker_threads';
import { performance } from 'node:perf_hooks';

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
        },
        signal: new AbortSignal(),
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
        signal: new AbortSignal(),
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

    cancel = finished(process.stdin, { readable: false, signal: new AbortSignal() }, (err?: Error | null) => {});
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

    // Accepts buffer as source
    pipeline(Buffer.from('test'), stdout);
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

async function testConsumers() {
    const r = createReadStream('file.txt');

    // $ExpectType string
    await text(r);
    // $ExpectType unknown
    await json(r);
    // $ExpectType Buffer
    await buffer(r);
    // $ExpectType ArrayBuffer
    await arrayBuffer(r);
    // $ExpectType Blob
    await blob(r);
}

// https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
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

function stream_duplex_allowHalfOpen_test() {
    const d = new Duplex();
    assert(typeof d.allowHalfOpen === 'boolean');
    d.allowHalfOpen = true;
}

addAbortSignal(new AbortSignal(), new Readable());

{
    const a = Readable.from(['test'], {
        objectMode: true,
    });
}

{
    const a = new Readable();
    a.unshift('something', 'utf8');
}

{
    const readable = new Readable();
    Readable.isDisturbed(readable); // $ExpectType boolean
    const readableDidRead: boolean = readable.readableDidRead;
    const readableAborted: boolean = readable.readableAborted;
}

{
    isErrored(new Readable()); // $ExpectType boolean
    isErrored(new Duplex()); // $ExpectType boolean
    isErrored(new Writable()); // $ExpectType boolean
}

{
    isReadable(new Readable()); // $ExpectType boolean
    isReadable(new Duplex()); // $ExpectType boolean
}

{
    const readable = new Readable();
    // $ExpectType ReadableStream<any>
    Readable.toWeb(readable);
}

{
    const web = new ReadableStream();

    // $ExpectType Readable
    Readable.fromWeb(web);

    // Handles subset of ReadableOptions param
    // $ExpectType Readable
    Readable.fromWeb(web, { objectMode: true });

    // When the param includes unsupported ReadableOptions
    // @ts-expect-error
    Readable.fromWeb(web, { emitClose: true });
}

{
    const writable = new Writable();
    // $ExpectType WritableStream<any>
    Writable.toWeb(writable);
}

{
    const web = new WritableStream();

    // $ExpectType Writable
    Writable.fromWeb(web);

    // Handles subset of WritableStream param
    // $ExpectType Writable
    Writable.fromWeb(web, { objectMode: true });

    // When the param includes unsupported WritableStream
    // @ts-expect-error
    Writable.fromWeb(web, { write: true });
}

async function testReadableStream() {
    const SECOND = 1000;

    const stream = new ReadableStream<number>({
        async start(controller) {
            for await (const _ of every(SECOND)) controller.enqueue(performance.now());
        },
    });

    for await (const value of stream.values()) {
      // $ExpectType number
      value;
    }

    // ERROR: 538:31  await-promise  Invalid 'for-await-of' of a non-AsyncIterable value.
    // for await (const value of stream) {
    //     // $ExpectType number
    //     value;
    // }
}

async function testWritableStream() {
    const stream = new WritableStream({
        write(chunk) {
            console.log(chunk);
        },
    });

    await stream.getWriter().write('Hello World');
}

async function testTransformStream() {
    const stream = new ReadableStream({
        start(controller) {
            controller.enqueue('a');
        },
    });

    const transform = new TransformStream({
        transform(chunk, controller) {
            controller.enqueue(chunk.toUpperCase());
        },
    });

    const transformedStream = stream.pipeThrough(transform);

    // ERROR: 570:31  await-promise  Invalid 'for-await-of' of a non-AsyncIterable value.
    // for await (const chunk of transformedStream) console.log(chunk);
}

// https://nodejs.org/dist/latest-v16.x/docs/api/webstreams.html#transferring-with-postmessage_2
async function testTransferringStreamWithPostMessage() {
    const stream = new TransformStream();
    {
        // Global constructor
        const {port1, port2} = new MessageChannel();
    }
    {
        // Constructor from module
        const {port1, port2} = new NodeMC();
    }

    // error: TypeError: port1.postMessage is not a function
    // port1.onmessage = ({data}) => {
    //     const { writable, readable } = data;
    // }

    // error TS2532: Cannot use 'stream' as a target of a postMessage call because it is not a Transferable.
    // port2.postMessage(stream, [stream]);
}
