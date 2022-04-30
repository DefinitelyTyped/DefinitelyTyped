import * as http from "http";
import * as HttpProxy from "http-proxy";
import * as express from "express";

const proxy = new HttpProxy({
    changeOrigin: true,
});

proxy.on("error", err => {
    console.error("An error occurred:", err);
});

/**
 * Test type inference of event listener parameters:
 */
proxy.on("start", (req, res, target) => {
    const headers = req.headers; // defined;
    const status = res.statusCode; // defined;
    const partial =
        typeof target === "string"
            ? target.substr(0) // defined;
            : target.protocol; // defined;
});

http.createServer((req, res) => {
    proxy.web(req, res);
});

const newProxyDefault = HttpProxy.createProxyServer({
    target: {
        host: "localhost",
        port: "9015",
    },
    ws: true,
});

const newProxyUrl = HttpProxy.createProxyServer({
    target: "http://localhost:9015",
});

const newProxyComplete = HttpProxy.createProxyServer({
    target: {
        protocol: "http:",
        host: "localhost",
        port: 9015,
        pfx: Buffer.from("foobar"),
        hostname: "localhost.com",
        socketPath: "/foo",
        passphrase: "password",
        key: "my-key",
        cert: "my-cert",
        ca: "my-ca",
        ciphers: "my-ciphers",
        secureProtocol: "my-secure-protocol",
    },
});

/**
 * Test generic parameters:
 */
const start: HttpProxy.StartCallback = (req, res, target) => {
    // @ts-expect-error
    req.params;
    // @ts-expect-error
    res.status(200);
};

const startExpress: HttpProxy.StartCallback<express.Request, express.Response> = (req, res, target) => {
    req.params;
    res.status(200);
};

const proxyReq: HttpProxy.ProxyReqCallback = (proxyReq, req, res, options) => {
    // @ts-expect-error
    req.params;
    // @ts-expect-error
    res.status(200);
};

const proxyReqExpress: HttpProxy.ProxyReqCallback<http.ClientRequest, express.Request, express.Response> = (proxyReq, req, res, options) => {
    req.params;
    res.status(200);
};

const proxyRes: HttpProxy.ProxyResCallback = (proxyRes, req, res) => {
    // @ts-expect-error
    req.params;
    // @ts-expect-error
    res.status(200);
};

const proxyResExpress: HttpProxy.ProxyResCallback<express.Request, express.Response> = (proxyRes, req, res) => {
    req.params;
    res.status(200);
};

const proxyReqWsCallback: HttpProxy.ProxyReqWsCallback = (proxyReq, req, socket, options, head) => {
    // @ts-expect-error
    req.params;
};

const proxyReqWsCallbackExpress: HttpProxy.ProxyReqWsCallback<http.ClientRequest, express.Request> = (proxyReq, req, socket, options, head) => {
    req.params;
};

const econnresetCallback: HttpProxy.EconnresetCallback = (err, req, res, target) => {
    // @ts-expect-error
    req.params;
    // @ts-expect-error
    res.status(200);
};

const econnresetCallbackExpress: HttpProxy.EconnresetCallback<Error, express.Request, express.Response> = (err, req, res, target) => {
    req.params;
    res.status(200);
};

const endCallback: HttpProxy.EndCallback = (req, res, proxyRes) => {
    // @ts-expect-error
    req.params;
    // @ts-expect-error
    res.status(200);
    // @ts-expect-error
    proxyRes.params;
};

const endCallbackExpress: HttpProxy.EndCallback<express.Request, express.Response> = (req, res, proxyRes) => {
    req.params;
    res.status(200);
    proxyRes.params;
};

const closeCallback: HttpProxy.CloseCallback = (proxyRes, proxySocket) => {
    // @ts-expect-error
    req.params;
};

const closeCallbackExpress: HttpProxy.CloseCallback<express.Request> = (proxyRes, proxySocket) => {
    proxyRes.params;
};

const errorCallback: HttpProxy.ErrorCallback = (err, req, res, target) => {
    // @ts-expect-error
    req.params;
    // @ts-expect-error
    res.status(200);
};

const errorCallbackExpress: HttpProxy.ErrorCallback<Error, express.Request, express.Response> = (err, req, res, target) => {
    req.params;
    (res as express.Response).status(200);
};
