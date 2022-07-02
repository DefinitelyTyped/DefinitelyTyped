import jsonlines = require("jsonlines");

const parser = jsonlines.parse(); // $ExpectType Parser

parser.on("data", data => {});
parser.on("end", () => {});

parser.write("{ 'test': 'This is a test!' }\n");
parser.write("{ 'jsonlines': 'is awesome' }");
parser.end();

const stringifier = jsonlines.stringify(); // $ExpectType Stringifier

stringifier.pipe(process.stdout);

stringifier.write({ test: "This is a test!" });
stringifier.write({ jsonlines: "is awesome" });
stringifier.end();

// Option: emitInvalidLines
const parser2 = jsonlines.parse({ emitInvalidLines: true }); // $ExpectType Parser

parser2.on('invalid-line', err => {
    err; // $ExpectType Error
});
