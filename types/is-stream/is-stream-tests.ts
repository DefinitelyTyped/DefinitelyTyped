import isStream = require('is-stream');
import * as stream from 'stream';

const anyStream: any = new stream.Stream();

if (isStream(anyStream)) {
    const justStream: stream.Stream = anyStream;
}

if (isStream.writable(anyStream)) {
    const writableStream: stream.Writable = anyStream;
}

if (isStream.readable(anyStream)) {
    const readableStream: stream.Readable = anyStream;
}

if (isStream.duplex(anyStream)) {
    const duplexStream: stream.Duplex = anyStream;
}

if (isStream.transform(anyStream)) {
    const transformStream: stream.Transform = anyStream;
}
