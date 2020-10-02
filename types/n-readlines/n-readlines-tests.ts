import LineByLine = require('n-readlines');

const file = "./test/testfile.csv";
const lineReader = new LineByLine(file);

let lineNumber = 0;
let line = lineReader.next();

while (line) {
    console.log(`Line ${lineNumber++}: ${line.toString("ascii")}`);
    line = lineReader.next();
}

console.log("End of file reached.");
