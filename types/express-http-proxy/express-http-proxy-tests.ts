import { Express } from "express";
import proxy = require("express-http-proxy");

const app: Express = {} as any;

app.use('/proxy', proxy('www.google.com'));

proxy('www.google.com', {});

proxy('www.google.com', {
    proxyReqPathResolver: (req) => req.url,
});

proxy('www.google.com', {
    proxyReqOptDecorator(proxyReqOpts, srcReq) {
        console.log(proxyReqOpts.headers, proxyReqOpts.method);
        console.log(srcReq.url, srcReq.cookies);
        return proxyReqOpts;
    },
    userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
        console.log(userReq.url, userRes.statusCode);
        console.log(proxyReq.url, proxyRes.statusCode);
        if (headers["content-type"] === "image/png") {
            headers["x-custom-header"] = "additional-info";
        }
        return headers;
    }
});
