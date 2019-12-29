
import stream = require("stream");
import Stream = stream.Duplex;
import series = require("stream-series");

var stream1 = new Stream();
var stream2 = new Stream();
var stream3 = new Stream();

var orderedStream = series(stream1, stream3, stream2);
console.log(orderedStream.toString());
