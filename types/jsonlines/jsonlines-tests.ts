import jsonlines = require("jsonlines");
import { Line } from "jsonlines";

const parser = jsonlines.parse(); // $ExpectType Parser

parser.on("data", (data: Line) => {
    data; // $ExpectType Line
});

parser.on("end", () => {});

parser.write("{ 'test': 'This is a test!' }\n");
parser.write("{ 'jsonlines': 'is awesome' }");
parser.end();

const stringifier = jsonlines.stringify(); // $ExpectType Parser

stringifier.pipe(process.stdout);

stringifier.write({ test: "This is a test!" });
stringifier.write({ jsonlines: "is awesome" });
stringifier.end();

// Option: emitInvalidLines
const parser2 = jsonlines.parse({ emitInvalidLines: true }); // $ExpectType Parser
