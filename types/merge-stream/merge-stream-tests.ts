
import stream = require("stream");
import Stream = stream.Readable;
import merge = require("merge-stream");

var stream1 = new Stream();
var stream2 = new Stream();

var merged = merge(stream1, stream2);

var stream3 = new Stream();
merged.add(stream3);

var stream4 = new Stream();
var stream5 = new Stream();
merged.add([stream4, stream5]);

merged.isEmpty();

var stream6 = new Stream();
var stream7 = new Stream();
var streamArray = [stream6, stream7];
var merged2 = merge(streamArray);
