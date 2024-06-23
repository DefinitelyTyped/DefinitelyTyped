import get = require("simple-get");

get("http://example.com", (err, res) => {
    // $ExpectType Error | null
    err;
    // $ExpectType IncomingMessage | undefined
    res;
});

get.concat("http://example.com", (err, res, data) => {
    // $ExpectType Error | null
    err;
    // $ExpectType IncomingMessage | undefined
    res;
    // $ExpectType object | Buffer | undefined
    data;
});

get.get({
    url: "http://example.com",
    method: "POST",
    body: "this is the POST body",
    headers: {
        "user-agent": "my cool app",
    },
}, (err, res) => {
    // $ExpectType Error | null
    err;
    // $ExpectType IncomingMessage | undefined
    res;
});

get.post({
    url: "http://example.com",
    body: {
        value: 123,
    },
    timeout: 2000,
}, (err, res) => {
    // $ExpectType Error | null
    err;
    // $ExpectType IncomingMessage | undefined
    res;
});

get.head({
    url: "http://example.com",
    form: {
        key: "value",
    },
}, (err, res) => {
    // $ExpectType Error | null
    err;
    // $ExpectType IncomingMessage | undefined
    res;
});

get.patch({
    url: "http://example.com",
    form: {
        key: "value",
    },
}, (err, res) => {
    // $ExpectType Error | null
    err;
    // $ExpectType IncomingMessage | undefined
    res;
});

get.put({
    url: "http://example.com",
    form: {
        key: "value",
    },
}, (err, res) => {
    // $ExpectType Error | null
    err;
    // $ExpectType IncomingMessage | undefined
    res;
});

get.delete({
    url: "http://example.com",
    form: {
        key: "value",
    },
}, (err, res) => {
    // $ExpectType Error | null
    err;
    // $ExpectType IncomingMessage | undefined
    res;
});
