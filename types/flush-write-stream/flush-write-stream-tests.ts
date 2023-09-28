import writer = require("flush-write-stream");

const stream = writer(write, flush);

stream.on("finish", () => console.log("finished"));

stream.write("hello");
stream.write("world");
stream.end();

function write(data: any, encoding: string, callback: (error?: Error) => void): void {
    console.log("Writing", data.toString());
    callback();
}

function flush(callback: (error?: Error) => void): void {
    setTimeout(callback, 1000);
}
