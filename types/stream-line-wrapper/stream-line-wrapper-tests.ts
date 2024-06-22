import childProcess = require("child_process");
import LineWrapper = require("stream-line-wrapper");

const ls = childProcess.exec("ls");

let lineWrapper = new LineWrapper({ prefix: "-- " });
ls.stdout?.pipe(lineWrapper).pipe(process.stdout);

lineWrapper = new LineWrapper({ suffix: " @" });

const countChars: LineWrapper.Wrapper = (line, cb) => {
    return cb(null, "(" + line.length + ") " + line);
};

lineWrapper = new LineWrapper({ wrapper: countChars });
