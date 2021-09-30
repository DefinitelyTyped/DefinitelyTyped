import duplexTo = require('duplex-to');
import { Readable, Stream, Writable } from 'stream';

const duplex: Stream = <any> {};

const readable: Readable = duplexTo.readable(duplex);
const writable: Writable = duplexTo.writable(duplex);
