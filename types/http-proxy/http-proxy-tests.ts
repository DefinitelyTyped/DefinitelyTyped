import * as express from "express";
import * as http from "http";
import * as HttpProxy from "http-proxy";

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
    const partial = typeof target === "string"
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

const proxyReqExpress: HttpProxy.ProxyReqCallback<http.ClientRequest, express.Request, express.Response> = (
    proxyReq,
    req,
    res,
    options,
) => {
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

const proxyReqWsCallbackExpress: HttpProxy.ProxyReqWsCallback<http.ClientRequest, express.Request> = (
    proxyReq,
    req,
    socket,
    options,
    head,
) => {
    req.params;
};

const econnresetCallback: HttpProxy.EconnresetCallback = (err, req, res, target) => {
    // @ts-expect-error
    req.params;
    // @ts-expect-error
    res.status(200);
};

const econnresetCallbackExpress: HttpProxy.EconnresetCallback<Error, express.Request, express.Response> = (
    err,
    req,
    res,
    target,
) => {
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

const errorCallbackExpress: HttpProxy.ErrorCallback<Error, express.Request, express.Response> = (
    err,
    req,
    res,
    target,
) => {
    req.params;
    ("status" in res) && res.status(200);
};

/**
 * Test new HttpProxy() generics:
 */
const instance = new HttpProxy<express.Request, express.Response>({
    target: "http://localhost:9015",
});

instance.on("error", (error, req, res, target) => {
    req.params && "status" in res && res.status(200).send("OK");
});
instance.on("start", (req, res, target) => {
    req.params && res.status(200).send("OK");
});
instance.on("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
instance.on("proxyRes", (proxyRes, req, res) => {
    req.params && res.status(200).send("OK");
});
instance.on("proxyReqWs", (proxyReq, req, socket, options, head) => {
    req.params;
});
instance.on("econnreset", (error, req, res, target) => {
    req.params && res.status(200).send("OK");
});
instance.on("end", (req, res, proxyRes) => {
    req.params && proxyRes.params && res.status(200).send("OK");
});
instance.on("close", (proxyRes, proxySocket, proxyHead) => {
    proxyRes.params;
});

instance.once("error", (error, req, res, target) => {
    req.params && "status" in res && res.status(200).send("OK");
});
instance.once("start", (req, res, target) => {
    req.params && res.status(200).send("OK");
});
instance.once("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
instance.once("proxyRes", (proxyRes, req, res) => {
    req.params && res.status(200).send("OK");
});
instance.once("proxyReqWs", (proxyReq, req, socket, options, head) => {
    req.params;
});
instance.once("econnreset", (error, req, res, target) => {
    req.params && res.status(200).send("OK");
});
instance.once("end", (req, res, proxyRes) => {
    req.params && proxyRes.params && res.status(200).send("OK");
});
instance.once("close", (proxyRes, proxySocket, proxyHead) => {
    proxyRes.params;
});

/**
 * Test createProxyServer() generics:
 */
const proxyServerInstance = HttpProxy.createProxyServer<express.Request, express.Response>({
    target: "http://localhost:9015",
});

proxyServerInstance.on("error", (error, req, res, target) => {
    req.params && "status" in res && res.status(200).send("OK");
});
proxyServerInstance.on("start", (req, res, target) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.on("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.on("proxyRes", (proxyRes, req, res) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.on("proxyReqWs", (proxyReq, req, socket, options, head) => {
    req.params;
});
proxyServerInstance.on("econnreset", (error, req, res, target) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.on("end", (req, res, proxyRes) => {
    req.params && proxyRes.params && res.status(200).send("OK");
});
proxyServerInstance.on("close", (proxyRes, proxySocket, proxyHead) => {
    proxyRes.params;
});

proxyServerInstance.once("error", (error, req, res, target) => {
    req.params && "status" in res && res.status(200).send("OK");
});
proxyServerInstance.once("start", (req, res, target) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.once("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.once("proxyRes", (proxyRes, req, res) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.once("proxyReqWs", (proxyReq, req, socket, options, head) => {
    req.params;
});
proxyServerInstance.once("econnreset", (error, req, res, target) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.once("end", (req, res, proxyRes) => {
    req.params && proxyRes.params && res.status(200).send("OK");
});
proxyServerInstance.once("close", (proxyRes, proxySocket, proxyHead) => {
    proxyRes.params;
});

/**
 * Test createServer() generics:
 */
const serverInstance = HttpProxy.createServer<express.Request, express.Response>({
    target: "http://localhost:9015",
});

serverInstance.on("error", (error, req, res, target) => {
    req.params && "status" in res && res.status(200).send("OK");
});
serverInstance.on("start", (req, res, target) => {
    req.params && res.status(200).send("OK");
});
serverInstance.on("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
serverInstance.on("proxyRes", (proxyRes, req, res) => {
    req.params && res.status(200).send("OK");
});
serverInstance.on("proxyReqWs", (proxyReq, req, socket, options, head) => {
    req.params;
});
serverInstance.on("econnreset", (error, req, res, target) => {
    req.params && res.status(200).send("OK");
});
serverInstance.on("end", (req, res, proxyRes) => {
    req.params && proxyRes.params && res.status(200).send("OK");
});
serverInstance.on("close", (proxyRes, proxySocket, proxyHead) => {
    proxyRes.params;
});

serverInstance.once("error", (error, req, res, target) => {
    req.params && "status" in res && res.status(200).send("OK");
});
serverInstance.once("start", (req, res, target) => {
    req.params && res.status(200).send("OK");
});
serverInstance.once("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
serverInstance.once("proxyRes", (proxyRes, req, res) => {
    req.params && res.status(200).send("OK");
});
serverInstance.once("proxyReqWs", (proxyReq, req, socket, options, head) => {
    req.params;
});
serverInstance.once("econnreset", (error, req, res, target) => {
    req.params && res.status(200).send("OK");
});
serverInstance.once("end", (req, res, proxyRes) => {
    req.params && proxyRes.params && res.status(200).send("OK");
});
serverInstance.once("close", (proxyRes, proxySocket, proxyHead) => {
    proxyRes.params;
});

/**
 * Test createProxy() generics:
 */
const proxyInstance = HttpProxy.createProxy<express.Request, express.Response>({
    target: "http://localhost:9015",
});

proxyInstance.on("error", (error, req, res, target) => {
    req.params && "status" in res && res.status(200).send("OK");
});
proxyInstance.on("start", (req, res, target) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.on("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.on("proxyRes", (proxyRes, req, res) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.on("proxyReqWs", (proxyReq, req, socket, options, head) => {
    req.params;
});
proxyInstance.on("econnreset", (error, req, res, target) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.on("end", (req, res, proxyRes) => {
    req.params && proxyRes.params && res.status(200).send("OK");
});
proxyInstance.on("close", (proxyRes, proxySocket, proxyHead) => {
    proxyRes.params;
});

proxyInstance.once("error", (error, req, res, target) => {
    req.params && "status" in res && res.status(200).send("OK");
});
proxyInstance.once("start", (req, res, target) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.once("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.once("proxyRes", (proxyRes, req, res) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.once("proxyReqWs", (proxyReq, req, socket, options, head) => {
    req.params;
});
proxyInstance.once("econnreset", (error, req, res, target) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.once("end", (req, res, proxyRes) => {
    req.params && proxyRes.params && res.status(200).send("OK");
});
proxyInstance.once("close", (proxyRes, proxySocket, proxyHead) => {
    proxyRes.params;
});

/**
 * Generics in listen() Server
 */
instance.listen(0).on("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
proxyServerInstance.listen(0).on("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
serverInstance.listen(0).on("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
proxyInstance.listen(0).on("proxyReq", (proxyReq, req, res, options) => {
    req.params && res.status(200).send("OK");
});
// Passing a hostname to listen
instance.listen(0, "0.0.0.0");
