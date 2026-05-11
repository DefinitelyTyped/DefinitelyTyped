import jsonexport = require("jsonexport");
import jsonexportDist = require("jsonexport/dist");
import { createReadStream, createWriteStream, ReadStream, WriteStream } from "fs";
import { Transform } from "stream";

// No user options
const a: Transform = jsonexport();
const b: Promise<string> = jsonexport({ key: "value" });
// $ExpectType void
jsonexport({ key: "value" }, (err: Error, csv: string) => undefined);

// With user options
const userOptions: jsonexport.UserOptions = {
    textDelimiter: ";",
};

const c: Transform = jsonexport(userOptions);
const d: Promise<string> = jsonexport({ key: "value" }, userOptions);
// $ExpectType void
jsonexport({ key: "value" }, userOptions, (err: Error, csv: string) => undefined);

// Test pipe
const readStream: ReadStream = createReadStream("./tslint.json");
const writeStream: WriteStream = createWriteStream("./tslint.json");
readStream.pipe(jsonexport()).pipe(writeStream);

// Test with user handlers
const optWithHandlers: jsonexport.UserOptionsWithHandlers = {
    ...userOptions,
    handleDate: (value: Date, item: string): string => value.toISOString(),
    typeHandlers: {
        Number: (value: number, index: string, parent: object): string => value.toFixed(2),
    },
};
const e: Promise<string> = jsonexport({ key: "value" }, optWithHandlers);

// Test for dist import
const f: Promise<string> = jsonexportDist({ key: "value" });
// $ExpectType void
jsonexportDist({ key: "value" }, (err: Error, csv: string) => undefined);

// Will throw Error at runtime
const g: never = jsonexportDist();
const h: never = jsonexportDist(userOptions);
