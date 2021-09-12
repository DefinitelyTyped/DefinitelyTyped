
import stream = require("stream");
import rotateStream = require("logrotate-stream");

var q: stream.Writable = rotateStream({
    file: "mylogfile.log",
    size: 100,
    keep: 3
});

var s: stream.Writable = rotateStream({
    file: "mylogfile.log",
    size: "1m",
    keep: 3
});
