import * as csv from "k6/experimental/csv";

import * as fs from "k6/experimental/fs";
const testFile = fs.open("/a/valid/file");

//
// parse function
//

// @ts-expect-error
csv.parse();
// @ts-expect-error
fs.parse("/paths/are/not/supported");
// @ts-expect-error
fs.parse(testFile, 123);
// @ts-expect-error
fs.parse(testFile, { delimiter: 123 });
// @ts-expect-error
fs.parse(testFile, { skipFirstLine: "should be a boolean" });
// @ts-expect-error
fs.parse(testFile, { fromLine: "should be a number" });
// @ts-expect-error
fs.parse(testFile, { toLine: "should be a number" });

//
// Parser constructor
//

// @ts-expect-error
new csv.Parser();
// @ts-expect-error
new csv.Parser("/paths/are/not/supported");
// @ts-expect-error
new csv.Parser(testFile, 123);
// @ts-expect-error
new csv.Parser(testFile, { delimiter: 123 });
// @ts-expect-error
new csv.Parser(testFile, { skipFirstLine: "should be a boolean" });
// @ts-expect-error
new csv.Parser(testFile, { fromLine: "should be a number" });
// @ts-expect-error
new csv.Parse(testFile, { toLine: "should be a number" });
