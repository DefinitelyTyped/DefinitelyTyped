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
    }
});
