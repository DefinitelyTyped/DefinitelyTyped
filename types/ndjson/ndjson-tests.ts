import * as ndjson from "ndjson";
import * as fs from "fs";

let parser = ndjson.parse();
parser = ndjson.parse({ strict: true });

fs.createReadStream("data.txt")
  .pipe(parser)
  .on("data", (obj) => undefined);

let serialize = ndjson.serialize();
serialize = ndjson.stringify({ encoding: "ascii" });
serialize.on("data", (line) => undefined);
serialize.write({ foo: "bar" });
serialize.end();
