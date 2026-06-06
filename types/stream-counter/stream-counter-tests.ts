import StreamCounter = require("stream-counter");
import * as fs from "fs";

const counter = new StreamCounter();
counter.on("progress", () => {
    console.log("progress", counter.bytes);
});
fs.createReadStream("foo.txt").pipe(counter);
counter.pipe(fs.createWriteStream("bar.txt"));
