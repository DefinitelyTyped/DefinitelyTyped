import * as LineByLineReader from "line-by-line";

let reader: LineByLineReader  = new LineByLineReader("index.d.ts");
reader.on("line", (line: any) => {
    console.log(line);
});
reader.on("end", () => {
    console.log("end");
});
reader.on("error", (err: any) => {
    throw("Error reading file");
});