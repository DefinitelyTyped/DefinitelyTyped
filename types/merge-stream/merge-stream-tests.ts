import stream = require("stream");
import Stream = stream.Readable;
import merge = require("merge-stream");

const stream1 = new Stream();
const stream2 = new Stream();

// $ExpectType MergedStream
const merged = merge(stream1, stream2);

const stream3 = new Stream();

// $ExpectType MergedStream
merged.add(stream3);

const stream4 = new Stream();
const stream5 = new Stream();

// $ExpectType MergedStream
merged.add([stream4, stream5]);

// $ExpectType boolean
merged.isEmpty();

const stream6 = new Stream();
const stream7 = new Stream();
const streamArray = [stream6, stream7];

// $ExpectType MergedStream
const merged2 = merge(streamArray);
