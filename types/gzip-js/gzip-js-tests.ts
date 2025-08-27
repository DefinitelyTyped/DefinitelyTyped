import * as gz from "gzip-js";

const options = {
    level: 3,
    name: "hello-world.txt",
    timestamp: Date.now() / 1000,
};

let out;
out = Buffer.from(gz.zip("Hello world", options));
out = Buffer.from(gz.zip([42, 42, 42], options));
out = Buffer.from(gz.zip(Buffer.from([42, 42, 42]), options));
out = Buffer.from(gz.zip(new Uint8Array([42, 42, 42]), options));
console.log(out);

let buf;
buf = Buffer.from(gz.unzip([42, 42, 42]));
buf = Buffer.from(gz.unzip(Buffer.from([42, 42, 42])));
buf = Buffer.from(gz.unzip(new Uint8Array([42, 42, 42])));
console.log(buf.toString());
