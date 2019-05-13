import { Express } from "express";
import proxy = require("express-http-proxy");

const app: Express = {} as any;

app.use('/proxy', proxy('www.google.com'));

proxy('www.google.com', {});

proxy('www.google.com', {
    proxyReqPathResolver: (req) => req.url,
});

proxy('www.google.com', {
    limit: "10mb"
});

proxy('www.google.com', {
    limit: 1024
});

proxy('www.google.com', {
    proxyErrorHandler: (err, res, next) => {
        switch (err && err.code) {
            case 'ECONNRESET':    { return res.status(405).send('504 became 405'); }
            case 'ECONNREFUSED':  { return res.status(200).send('gotcher back'); }
            default:              { next(err); }
        }
    },
});

proxy('www.google.com', {
    proxyReqOptDecorator(proxyReqOpts, srcReq) {
        console.log(proxyReqOpts.headers, proxyReqOpts.method);
        console.log(srcReq.url, srcReq.cookies);
        return proxyReqOpts;
    },
});

proxy('www.google.com', {
    userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
        console.log(userReq.url, userRes.statusCode);
        console.log(proxyReq.url, proxyRes.statusCode);
        if (headers["content-type"] === "image/png") {
            headers["x-custom-header"] = "additional-info";
        }
        return headers;
    }
});

app.use('/proxy/:port', proxy((req) => 'localhost:' + req.params.port));
