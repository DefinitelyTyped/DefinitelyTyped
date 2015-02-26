/// <reference path="split.d.ts" />
/// <reference path="../node/node.d.ts" />

import stream = require("stream");
import split = require("split");

var testStream = new stream.Readable();

testStream.pipe = function(dest) {
    dest.write("This is \r\n new \r\n line");
    return dest;
};

testStream.pipe(split(/(\r?\n)/, null, {maxLength: 20})).on("data", function(line) {
    console.log("Line: " + line + "\r\n");
});
