import * as ndjson from "ndjson";
import * as fs from "fs";

let parser = ndjson.parse();
parser = ndjson.parse({ strict: true });

fs.createReadStream("data.txt")
  .pipe(parser)
  .on("data", (obj) => undefined);

const stream = ndjson.stringify({ encoding: "ascii" });
stream.on("data", (line) => undefined);
stream.write({ foo: "bar" });
stream.end();
