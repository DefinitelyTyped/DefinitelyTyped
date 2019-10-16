import splicer = require("labeled-stream-splicer");
import * as stream from "stream";

const readable = new stream.Readable();
const duplex = new stream.Duplex();
const writable = new stream.Writable();

let pipeline: splicer = splicer();
pipeline = splicer([readable, duplex, writable]);
pipeline = splicer(["r", readable, "d", duplex, "w", writable], { encoding: "utf8" });
pipeline = splicer.obj();
pipeline = splicer.obj([readable, duplex, writable]);
pipeline = splicer(["r", readable, "d", duplex, "w", writable], { encoding: "utf8" });

let length: number = pipeline.length;
length = pipeline.push(duplex, writable);
length = pipeline.unshift(readable, duplex);

let streams = pipeline.splice(0, 1);
streams = pipeline.splice("w", 1);
streams = pipeline.splice(1, 0, duplex, duplex);
streams = pipeline.splice("w", 0, duplex, duplex);

let streamOrEmpty = pipeline.get(1);
streamOrEmpty = pipeline.get("w");
streamOrEmpty = pipeline.pop();
streamOrEmpty = pipeline.shift();

let index: number = pipeline.indexOf(readable);
index = pipeline.indexOf("r");
