import * as http from "http";
import * as http2 from "http2";
import * as https from "https";
import proxy = require("proxy");

proxy(http.createServer());
proxy(https.createServer());

// @ts-expect-error
proxy(http2.createServer());

// @ts-expect-error
proxy({});

const server = proxy();

server.authenticate = (req, callback) => {
    try {
        callback(null, req.headers["proxy-authorization"] === "Basic Zm9vOmJhcg==" /* foo:bar */);
    } catch (err) {
        callback(err, false);
    }
};
