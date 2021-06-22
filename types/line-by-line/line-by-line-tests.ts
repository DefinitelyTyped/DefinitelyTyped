import LineByLineReader = require("line-by-line");

const reader = new LineByLineReader("index.d.ts");

reader.on("end", () => console.log("end"));
reader.on("error", (err) => { throw new Error("Uh oh!~ There was an error reading the file"); });
reader.on("line", (line) => console.log(line));
