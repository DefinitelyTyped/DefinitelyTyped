/// <reference path="./merge-stream.d.ts" />

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
