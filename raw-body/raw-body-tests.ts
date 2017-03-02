import getRawBody = require("raw-body");

const stream: any = {};

const simple: Promise<Buffer> = getRawBody(stream);

const withEncoding: Promise<string> = getRawBody(stream, "utf-8");

const withOptions: Promise<string> = getRawBody(stream, {
    encoding: "utf-8",
    length: 1024,
    limit: 512
});

getRawBody(stream, (err, res) => {
    if (err) console.error(err);
    else console.log(res);
});

getRawBody(stream, {
    encoding: "utf-8",
    length: 1024,
    limit: 512
}, (err, res) => {
    if (err) console.error(err);
    else console.log(res);
});
