
import stream = require("stream");
import rotateStream = require("logrotate-stream");

var s: stream.Writable = rotateStream({
	file: "mylogfile.log",
	size: "1m",
	keep: 3
});
