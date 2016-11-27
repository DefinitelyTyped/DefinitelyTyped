import getRawBody = require("raw-body");

const stream: any = {};

const simple = getRawBody(stream);

const withEncoding = getRawBody(stream, "utf-8");

const withOptions = getRawBody(stream, {
    encoding: "utf-8",
    length: 1024,
    limit: 512
});

getRawBody(stream, (err, res) => {
    if(err) console.error(err);
    else console.log(res);
});

getRawBody(stream, {
    encoding: "utf-8",
    length: 1024,
    limit: 512
}, (err, res) => {
    if(err) console.error(err);
    else console.log(res);
});
