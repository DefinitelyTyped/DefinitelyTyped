import stream = require("stream");
import split = require("split");

var testStream = new stream.Readable();

testStream.pipe = function(dest: stream.Writable) {
    dest.write("This is \r\n new \r\n line");
    return dest;
};

testStream.pipe(split(/(\r?\n)/, null, {maxLength: 20})).on("data", function(line: Buffer) {
    console.log("Line: " + line.toString('ascii') + "\r\n");
});
