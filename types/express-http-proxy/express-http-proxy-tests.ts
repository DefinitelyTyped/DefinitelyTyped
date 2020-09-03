import { Express } from "express";
import proxy = require("express-http-proxy");

const app: Express = {} as any;

app.use("/proxy", proxy("www.google.com"));

proxy("www.google.com", {});

proxy("www.google.com", {
    proxyReqPathResolver: req => req.url
});

proxy("www.google.com", {
    proxyReqPathResolver: async req => req.url
});

proxy("www.google.com", {
    limit: "10mb"
});

proxy("www.google.com", {
    limit: 1024
});

proxy("www.google.com", {
    proxyErrorHandler: (err, res, next) => {
        switch (err && err.code) {
            case "ECONNRESET": {
                return res.status(405).send("504 became 405");
            }
            case "ECONNREFUSED": {
                return res.status(200).send("gotcher back");
            }
            default: {
                next(err);
            }
        }
    }
});

proxy("www.google.com", {
    proxyReqOptDecorator(proxyReqOpts, srcReq) {
        console.log(proxyReqOpts.headers, proxyReqOpts.method);
        console.log(srcReq.url, srcReq.cookies);
        return proxyReqOpts;
    }
});

proxy("www.google.com", {
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        return new Promise((resolve, reject) => {
            resolve(proxyReqOpts);
        });
    }
});

proxy("www.google.com", {
    userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
        console.log(userReq.url, userRes.statusCode);
        console.log(proxyReq.url, proxyRes.statusCode);
        if (headers["content-type"] === "image/png") {
            headers["x-custom-header"] = "additional-info";
        }
        return headers;
    }
});

proxy("www.google.com", {
    userResDecorator(proxyRes, proxyResData, userReq, userRes) {
        console.log(userReq.url, userRes.statusCode);
        const data = JSON.parse(proxyResData.toString("utf8"));
        data.newProperty = "exciting data";
        return JSON.stringify(data);
    }
});

proxy("www.google.com", {
    userResDecorator(proxyRes, proxyResData, userReq, userRes) {
        // some code
        return proxyResData;
    }
});

proxy("www.google.com", {
    userResDecorator(proxyRes, proxyResData, userReq, userRes) {
        // some code
        return Promise.resolve(proxyResData);
    }
});

proxy("www.google.com", {
    preserveHostHdr: true
});

proxy("www.google.com", {
    parseReqBody: true
});

const proxyOptions: proxy.ProxyOptions = {};

app.use("/proxy/:port", proxy(req => "localhost:" + req.params.port));

proxy("www.google.com", {
    filter: (req, res) => {
        return req.method === "GET";
    }
});
proxy("www.google.com", {
    filter: (req, res) => {
        return new Promise(resolve => {
            resolve(req.method === 'GET');
        });
    }
});

proxy("www.google.com", {
    memoizeHost: true
});

proxy("www.google.com", {
    skipToNextHandlerFilter: proxyRes => {
        return proxyRes.statusCode === 404;
    }
});

proxy("www.google.com", {
    https: true
});

proxy("www.google.com", {
    reqAsBuffer: true
});

proxy("httpbin.org", {
    reqBodyEncoding: null
});

proxy("httpbin.org", {
    timeout: 2000
});

proxy("www.google.com", {
    proxyReqBodyDecorator(bodyContent, srcReq) {
        return bodyContent;
    }
});

proxy("www.google.com", {
    proxyReqBodyDecorator(bodyContent, srcReq) {
        return new Promise((resolve, reject) => {
            resolve(bodyContent);
        });
    },
});
