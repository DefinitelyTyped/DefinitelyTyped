import * as fs from "node:fs";
import { Transform } from "node:stream";
import csvWriter = require("csv-write-stream");

// test type exports
type Options = csvWriter.Options;
type CsvWriteStream = csvWriter.CsvWriteStream;

const writer = csvWriter(); // $ExpectType CsvWriteStream
const stream: Transform = writer;
csvWriter({ headers: ["hello", "foo"] }); // $ExpectType CsvWriteStream
csvWriter({ sendHeaders: false }); // $ExpectType CsvWriteStream
csvWriter({ separator: ":" }); // $ExpectType CsvWriteStream
csvWriter({ newline: "\r\n" }); // $ExpectType CsvWriteStream

writer.sendHeaders; // $ExpectType boolean
writer.headers; // $ExpectType string[] | null
writer.separator; // $ExpectType string
writer.newline; // $ExpectType string

writer.pipe(fs.createWriteStream("out.csv"));
writer.write({ hello: "world", foo: "bar", baz: "taco" });
writer.end();
