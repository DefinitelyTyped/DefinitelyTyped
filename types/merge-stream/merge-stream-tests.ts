import stream = require("stream");
import Stream = stream.Readable;
import merge = require("merge-stream");

const stream1 = new Stream();
const stream2 = new Stream();

const merged = merge(stream1, stream2);

const stream3 = new Stream();
merged.add(stream3);

const stream4 = new Stream();
const stream5 = new Stream();
merged.add([stream4, stream5]);

merged.isEmpty();

const stream6 = new Stream();
const stream7 = new Stream();
const streamArray = [stream6, stream7];
const merged2 = merge(streamArray);
