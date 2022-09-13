import stream = require("stream");
import duplexer2 = require("duplexer2");

const writable = new stream.Writable({ objectMode: true });
const readable = new stream.Readable({ objectMode: true });

writable.once("finish", () => {
  setTimeout(() => {
    readable.push(null);
  }, 500);
});

const duplex = duplexer2(writable, readable);

duplex.on("data", (e: any) => {
  console.log("got data", JSON.stringify(e));
});

duplex.on("finish", () => {
  console.log("got finish event");
});

duplex.on("end", () => {
  console.log("got end event");
});

duplex.write("oh, hi there", () => {
  console.log("finished writing");
});

duplex.end("", () => {
  console.log("finished ending");
});

const duplexWithOptions = duplexer2({ readableObjectMode: true, writableObjectMode: true }, writable, readable);

duplexWithOptions.on("data", (e: any) => {
  console.log("got data", JSON.stringify(e));
});

duplexWithOptions.on("finish", () => {
  console.log("got finish event");
});

duplexWithOptions.on("end", () => {
  console.log("got end event");
});

duplexWithOptions.write("oh, hi there", () => {
  console.log("finished writing");
});

duplexWithOptions.end("", () => {
  console.log("finished ending");
});
