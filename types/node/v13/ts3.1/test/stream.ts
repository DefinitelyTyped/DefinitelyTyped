import { Readable, Writable, Transform, finished, pipeline, Duplex } from "stream";
import { promisify } from "util";
import { createReadStream, createWriteStream } from "fs";
import { createGzip, constants } from "zlib";
import { ok as assert } from 'assert';

interface Foo {
    foo: string;
}

interface Bar {
    bar: string;
}

// Simplified constructors
function simplified_stream_ctor_test() {
    new Readable({
        read(size) {
            // $ExpectType Readable<BufferOrString>
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

    new Readable<Foo>({
        read(size) {
            // $ExpectType Readable<Foo>
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
            // $ExpectType Writable<BufferOrString>
            this;
            // $ExpectType BufferOrString
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Writable<BufferOrString>
            this;
            // $ExpectType { chunk: BufferOrString; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Writable<BufferOrString>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Writable<BufferOrString>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        }
    });

    new Writable<Foo>({
        write(chunk, enc, cb) {
            // $ExpectType Writable<Foo>
            this;
            // $ExpectType Foo
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Writable<Foo>
            this;
            // $ExpectType { chunk: Foo; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Writable<Foo>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Writable<Foo>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        defaultEncoding: 'utf8',
    });

    new Duplex({
        read(size) {
            // $ExpectType Duplex<BufferOrString, BufferOrString>
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Duplex<BufferOrString, BufferOrString>
            this;
            // $ExpectType BufferOrString
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Duplex<BufferOrString, BufferOrString>
            this;
            // $ExpectType { chunk: BufferOrString; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Duplex<BufferOrString, BufferOrString>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Duplex<BufferOrString, BufferOrString>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        readableObjectMode: true,
        writableObjectMode: true,
        readableHighWaterMark: 2048,
        writableHighWaterMark: 1024
    });

    new Duplex<Foo, Bar>({
        read(size) {
            // $ExpectType Duplex<Foo, Bar>
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Duplex<Foo, Bar>
            this;
            // $ExpectType Foo
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Duplex<Foo, Bar>
            this;
            // $ExpectType { chunk: Foo; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Duplex<Foo, Bar>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Duplex<Foo, Bar>
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
            // $ExpectType Transform<BufferOrString, BufferOrString>
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Transform<BufferOrString, BufferOrString>
            this;
            // $ExpectType BufferOrString
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Transform<BufferOrString, BufferOrString>
            this;
            // $ExpectType { chunk: BufferOrString; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Transform<BufferOrString, BufferOrString>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Transform<BufferOrString, BufferOrString>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        transform(chunk, enc, cb) {
            // $ExpectType Transform<BufferOrString, BufferOrString>
            this;
            // $ExpectType BufferOrString
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType TransformCallback<BufferOrString>
            cb;
        },
        flush(cb) {
            // $ExpectType TransformCallback<BufferOrString>
            cb;
        },
        allowHalfOpen: true,
        readableObjectMode: true,
        writableObjectMode: true,
        readableHighWaterMark: 2048,
        writableHighWaterMark: 1024
    });

    new Transform<Foo, Bar>({
        read(size) {
            // $ExpectType Transform<Foo, Bar>
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Transform<Foo, Bar>
            this;
            // $ExpectType Foo
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Transform<Foo, Bar>
            this;
            // $ExpectType { chunk: Foo; encoding: BufferEncoding; }[]
            chunks;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Transform<Foo, Bar>
            this;
            // $ExpectType Error | null
            error;
            // $ExpectType (error: Error | null) => void
            cb;
        },
        final(cb) {
            // $ExpectType Transform<Foo, Bar>
            this;
            // $ExpectType (error?: Error | null | undefined) => void
            cb;
        },
        transform(chunk, enc, cb) {
            // $ExpectType Transform<Foo, Bar>
            this;
            // $ExpectType Foo
            chunk;
            // $ExpectType BufferEncoding
            enc;
            // $ExpectType TransformCallback<Bar>
            cb;
        },
        flush(cb) {
            // $ExpectType TransformCallback<Bar>
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
    finished(new Readable<Foo>(), (err) => {
        console.log(err);
    });

    let cancel = finished(process.stdin, (err?: Error | null) => {});
    cancel();

    cancel = finished(process.stdin, { readable: false }, (err?: Error | null) => {});
    cancel();

    pipeline(process.stdin, process.stdout, (err?: Error | null) => {});
}

async function asyncStreamPipelineFinished() {
    const fin = promisify(finished);
    await fin(new Readable<Foo>());
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

function strongly_typed_pipe() {
    // $ExpectType Writable<Foo>
    new Readable<Foo>().pipe(new Writable<Foo>());
    // $ExpectError
    new Readable<Foo>().pipe(new Writable<Bar>());
    class MyWritableStream<T> extends Writable<T> {}
    // $ExpectType MyWritableStream<Foo>
    new Readable<Foo>().pipe(new MyWritableStream<Foo>());
    // $ExpectError
    new Readable<Foo>().pipe(new MyWritableStream<Bar>());
    // $ExpectError
    new Readable<Foo>().pipe(new Readable<Foo>());
    class MyReadableStream<T> extends Readable<T> {}
    // $ExpectType Writable<Foo>
    new MyReadableStream<Foo>().pipe(new Writable<Foo>());
    // $ExpectType Writable<Bar>
    new Readable<Foo>().pipe(new Transform<Foo, Bar>()).pipe(new Writable<Bar>());
    // $ExpectType Writable<Bar>
    new Readable<Foo>().pipe(new Transform<Foo, Buffer>()).pipe(new Transform<Buffer, Bar>()).pipe(new Writable<Bar>());
    // $ExpectError
    new Readable<Foo>().pipe(new Transform<Foo, Bar>()).pipe(new Writable<Foo>());
    // $ExpectError
    new Readable<Foo>().pipe(new Transform<Bar, Foo>()).pipe(new Writable<Foo>());

    const myDuplexStream1 = new Duplex();
    // $ExpectType Duplex<BufferOrString, BufferOrString>
    myDuplexStream1.pipe(myDuplexStream1);
    const myDuplexStream2 = new Duplex<Bar, Foo>();
    // $ExpectType Duplex<Bar, Foo>
    new Readable<Foo>().pipe(new Transform<Foo, Bar>()).pipe(myDuplexStream2);
    const myDuplexStream3 = new Duplex<Foo, Bar>();
    // $ExpectType Duplex<Foo, Bar>
    myDuplexStream3.pipe(new Transform<Bar, Foo>()).pipe(myDuplexStream3);
}

function strongly_typed_data_flow() {
    const myWritableStream1 = new Writable<Foo>();
    // $ExpectType boolean
    myWritableStream1.write({ foo: "Hail Hydra" });
    // $ExpectError
    myWritableStream1.write('foo');
    // $ExpectError
    myWritableStream1.end('foo');
    myWritableStream1.end({ foo: "Hail Hydra" });
    // Default generics in action
    const myWritableStream2 = new Writable();
    // $ExpectType boolean
    myWritableStream2.write('foo');
    // $ExpectType boolean
    myWritableStream2.write(new Buffer('foo'));
    // $ExpectError
    myWritableStream2.write({ foo: "Hail Hydra" });
    myWritableStream2.end('bar');

    const myReadableStream1 = new Readable<Foo>();
    // $ExpectType boolean
    myReadableStream1.push({ foo: "Hail Hydra" });
    // $ExpectError
    myReadableStream1.push('foo');
    // $ExpectType boolean
    myReadableStream1.push(null);
    myReadableStream1.on('data', (chunk) => {
        // $ExpectType Foo
        chunk;
    });
    // Default generics in action
    const myReadableStream2 = new Readable();
    // $ExpectError
    myReadableStream2.push({ foo: "Hail Hydra" });
    // $ExpectType boolean
    myReadableStream2.push('foo');
    // $ExpectType boolean
    myReadableStream2.push(new Buffer('foo'));
    // $ExpectType boolean
    myReadableStream2.push(null);
    myReadableStream2.on('data', (chunk) => {
        // $ExpectType BufferOrString
        chunk;
    });

    const myDuplexStream1 = new Duplex<Foo, Bar>();
    // $ExpectType boolean
    myDuplexStream1.write({ foo: "Hail Hydra" });
    // $ExpectError
    myDuplexStream1.write({ bar: "Hulk Smash" });
    // $ExpectError
    myDuplexStream1.write('foo');
    // $ExpectError
    myDuplexStream1.end('bar');
    myDuplexStream1.end({ foo: "Hail Hydra" });
    // $ExpectType boolean
    myDuplexStream1.push({ bar: "Hulk Smash" });
    // $ExpectError
    myDuplexStream1.push({ foo: "Hail Hydra" });
    // $ExpectError
    myDuplexStream1.push('foo');
    // $ExpectType boolean
    myDuplexStream1.push(null);
    myDuplexStream1.on('data', (data) => {
        // $ExpectType Bar
        data;
    });
    // Default generics in action
    const myDuplexStream2 = new Duplex();
    // $ExpectError
    myDuplexStream2.write({ foo: "Hail Hydra" });
    // $ExpectType boolean
    myDuplexStream2.write('foo');
    // $ExpectType boolean
    myDuplexStream2.write(new Buffer('bar'));
    // $ExpectError
    myDuplexStream2.end({ foo: "Hail Hydra" });
    myDuplexStream2.end('bar');
    // $ExpectError
    myDuplexStream2.push({ bar: "Hulk Smash" });
    // $ExpectType boolean
    myDuplexStream2.push('foo');
    // $ExpectType boolean
    myDuplexStream2.push(new Buffer('bar'));
    // $ExpectType boolean
    myDuplexStream2.push(null);
    myDuplexStream2.on('data', (data) => {
        // $ExpectType BufferOrString
        data;
    });

    const myTransformStream1 = new Transform<Foo, Bar>();
    // $ExpectType boolean
    myTransformStream1.write({ foo: "Hail Hydra" });
    // $ExpectError
    myTransformStream1.write({ bar: "Hulk Smash" });
    // $ExpectError
    myTransformStream1.write('foo');
    // $ExpectError
    myTransformStream1.end({ bar: "Hulk Smash" });
    // $ExpectError
    myTransformStream1.end('foo');
    myTransformStream1.end({ foo: "Hail Hydra" });
    myTransformStream1.on('data', (data) => {
        // $ExpectType Bar
        data;
    });
    // Default generics in action
    const myTransformStream2 = new Transform();
    // $ExpectError
    myTransformStream2.write({ foo: "Hail Hydra" });
    // $ExpectError
    myTransformStream2.write({ bar: "Hulk Smash" });
    // $ExpectType boolean
    myTransformStream2.write('foo');
    // $ExpectType boolean
    myTransformStream2.write(new Buffer('bar'));
    // $ExpectError
    myTransformStream2.end({ bar: "Hulk Smash" });
    // $ExpectError
    myTransformStream2.end({ foo: "Hail Hydra" });
    myTransformStream2.end('foo');
    myTransformStream2.on('data', (data) => {
        // $ExpectType BufferOrString
        data;
    });
}

function strongly_typed_pipeline() {
    // $ExpectType WritableStream<Foo>
    pipeline<Foo>(new Readable<Foo>(), new Writable<Foo>());
    // $ExpectType WritableStream<Bar>
    pipeline<Foo, Bar>(new Readable<Foo>(), new Transform<Foo, Bar>(), new Writable<Bar>());
    // $ExpectType WritableStream<Bar>
    pipeline<Foo, Bar>(new Readable(), new Transform(), new Writable());
    // $ExpectType WritableStream<Bar>
    pipeline<Foo, Buffer, Bar>(new Readable<Foo>(), new Transform<Foo, Buffer>(), new Transform<Buffer, Bar>(), new Writable<Bar>());
    // $ExpectType WritableStream<Bar>
    pipeline<Foo, Bar>([new Readable<Foo>(), new Transform<Foo, Buffer>(), new Transform<Buffer, Bar>(), new Writable<Bar>()]);
}

async function strongly_typed_async_pipeline() {
    const asyncPipeline = promisify(pipeline);
    await asyncPipeline<Foo>(new Readable<Foo>(), new Writable<Foo>());
    await asyncPipeline<Foo, Bar>(new Readable<Foo>(), new Transform<Foo, Bar>(), new Writable<Bar>());
    await asyncPipeline<Foo, Bar>(new Readable(), new Transform(), new Writable());
    await asyncPipeline<Foo, Buffer, Bar>(new Readable<Foo>(), new Transform<Foo, Buffer>(), new Transform<Buffer, Bar>(), new Writable<Bar>());
    await asyncPipeline<Foo, Bar>([new Readable<Foo>(), new Transform<Foo, Buffer>(), new Transform<Buffer, Bar>(), new Writable<Bar>()]);
}
