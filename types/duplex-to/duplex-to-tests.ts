import duplexTo = require('duplex-to');
import { Readable, Stream, Writable } from 'stream';
import * as readableStream from 'readable-stream';

function testBuiltIn() {
    const duplex: Stream = <any> {};

    const readable: Readable = duplexTo.readable(duplex);
    const writable: Writable = duplexTo.writable(duplex);
}

function testReadableStream() {
    const duplex: readableStream.Duplex = <any> {};

    const readable: Readable = duplexTo.readable(duplex);
    const writable: Writable = duplexTo.writable(duplex);
}
