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
