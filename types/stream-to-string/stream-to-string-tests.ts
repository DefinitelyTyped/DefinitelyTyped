import streamToString = require("stream-to-string");

const stream = (null as any) as NodeJS.ReadableStream;
let convertedString: Promise<string>;

convertedString = streamToString(stream);
convertedString = streamToString(stream, "hex");
streamToString(stream, (err, msg) => {
    const e: Error | undefined = err;
    const str: string = msg;
});
streamToString(stream, "hex", (err, msg) => {
    const e: Error | undefined = err;
    const str: string = msg;
});
