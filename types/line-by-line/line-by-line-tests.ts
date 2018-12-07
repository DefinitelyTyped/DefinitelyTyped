import LineByLineReader = require("line-by-line");

const reader: LineByLineReader  = new LineByLineReader("index.d.ts");
reader.on("line", (line: any) => {
    console.log(line);
});
reader.on("end", () => {
    console.log("end");
});
reader.on("error", (err: any) => {
    throw new Error("Error reading file");
});
