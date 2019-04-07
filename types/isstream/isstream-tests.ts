import isStream, { isReadable, isWritable, isDuplex } from "isstream";
import { Stream } from "stream";

isStream(new Stream()); // true

isStream({}); // false

isStream(new Stream.Readable()); // true
isStream(new Stream.Writable()); // true
isStream(new Stream.Duplex()); // true
isStream(new Stream.Transform()); // true
isStream(new Stream.PassThrough()); // true

isReadable(new Stream()); // false
isWritable(new Stream()); // false
isDuplex(new Stream()); // false

isReadable(new Stream.Readable()); // true
isReadable(new Stream.Writable()); // false
isReadable(new Stream.Duplex()); // true
isReadable(new Stream.Transform()); // true
isReadable(new Stream.PassThrough()); // true

isWritable(new Stream.Readable()); // false
isWritable(new Stream.Writable()); // true
isWritable(new Stream.Duplex()); // true
isWritable(new Stream.Transform()); // true
isWritable(new Stream.PassThrough()); // true

isDuplex(new Stream.Readable()); // false
isDuplex(new Stream.Writable()); // false
isDuplex(new Stream.Duplex()); // true
isDuplex(new Stream.Transform()); // true
isDuplex(new Stream.PassThrough()); // true
